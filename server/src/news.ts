import { createHash } from 'node:crypto';
import { db } from './db';

/**
 * Server-side Current Affairs pipeline (Phase 2 completion).
 * Fetches news items from RSS feeds (PIB and any custom feed), dedupes them,
 * and stores them for review. The AI transformation into exam material stays
 * CLIENT-side (user's own key) — the server only collects and curates, so no
 * AI keys ever live on the server.
 */

db.exec(`
  CREATE TABLE IF NOT EXISTS news_items (
    id TEXT PRIMARY KEY,
    source TEXT NOT NULL,
    title TEXT NOT NULL,
    link TEXT NOT NULL DEFAULT '',
    description TEXT NOT NULL DEFAULT '',
    pub_date TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'new',
    fetched_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_news_status ON news_items(status);
`);

export interface NewsItem {
  id: string;
  source: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  status: 'new' | 'approved' | 'dismissed';
  fetchedAt: string;
}

export interface NewsSource {
  id: string;
  label: string;
  url: string;
}

/** Default sources — PIB's official RSS feeds. More can be passed per-fetch. */
export const NEWS_SOURCES: NewsSource[] = [
  { id: 'pib-national', label: 'PIB — Press Releases', url: 'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3' },
];

function strip(html: string): string {
  return html
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(block: string, name: string): string {
  const m = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i').exec(block);
  return m ? strip(m[1]) : '';
}

/** Minimal, dependency-free RSS 2.0 / Atom item parser. */
export function parseFeed(xml: string): { title: string; link: string; description: string; pubDate: string }[] {
  const out: { title: string; link: string; description: string; pubDate: string }[] = [];
  const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) ?? [];
  for (const block of items) {
    const title = tag(block, 'title');
    if (!title) continue;
    // Atom uses <link href="..."/>; RSS uses <link>...</link>
    const atomLink = /<link[^>]*href="([^"]+)"/i.exec(block)?.[1] ?? '';
    out.push({
      title,
      link: tag(block, 'link') || atomLink,
      description: (tag(block, 'description') || tag(block, 'summary') || tag(block, 'content')).slice(0, 600),
      pubDate: tag(block, 'pubDate') || tag(block, 'updated') || tag(block, 'published'),
    });
  }
  return out;
}

function newsId(source: string, title: string): string {
  return 'news_' + createHash('sha1').update(source + '|' + title.trim().toLowerCase()).digest('hex').slice(0, 16);
}

const insertNews = db.prepare(`
  INSERT OR IGNORE INTO news_items (id, source, title, link, description, pub_date, status, fetched_at)
  VALUES (?, ?, ?, ?, ?, ?, 'new', ?)
`);

export interface FetchResult {
  source: string;
  fetched: number;
  added: number;
  error?: string;
}

/** Fetch one feed and store new items (deduped by source+title). */
export async function fetchFeed(source: NewsSource, limit = 30): Promise<FetchResult> {
  try {
    const res = await fetch(source.url, {
      headers: { accept: 'application/rss+xml, application/xml, text/xml, */*', 'user-agent': 'bpsc-ai-os/1.0' },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) return { source: source.id, fetched: 0, added: 0, error: `${res.status} ${res.statusText}` };
    const xml = await res.text();
    const items = parseFeed(xml).slice(0, limit);
    let added = 0;
    const now = new Date().toISOString();
    for (const it of items) {
      const r = insertNews.run(newsId(source.id, it.title), source.id, it.title, it.link, it.description, it.pubDate, now);
      added += r.changes;
    }
    return { source: source.id, fetched: items.length, added };
  } catch (e) {
    return { source: source.id, fetched: 0, added: 0, error: e instanceof Error ? e.message : String(e) };
  }
}

/** Fetch all default sources plus any extra feed URL. */
export async function fetchAll(extraUrl?: string): Promise<FetchResult[]> {
  const sources = [...NEWS_SOURCES];
  if (extraUrl) sources.push({ id: 'custom', label: 'Custom feed', url: extraUrl });
  const results: FetchResult[] = [];
  for (const s of sources) results.push(await fetchFeed(s));
  return results;
}

export function listNews(status?: string, limit = 100): NewsItem[] {
  const rows = (
    status
      ? db.prepare(`SELECT * FROM news_items WHERE status = ? ORDER BY fetched_at DESC, pub_date DESC LIMIT ?`).all(status, limit)
      : db.prepare(`SELECT * FROM news_items ORDER BY fetched_at DESC, pub_date DESC LIMIT ?`).all(limit)
  ) as { id: string; source: string; title: string; link: string; description: string; pub_date: string; status: string; fetched_at: string }[];
  return rows.map((r) => ({
    id: r.id,
    source: r.source,
    title: r.title,
    link: r.link,
    description: r.description,
    pubDate: r.pub_date,
    status: r.status as NewsItem['status'],
    fetchedAt: r.fetched_at,
  }));
}

export function setNewsStatus(id: string, status: 'approved' | 'dismissed'): number {
  return db.prepare('UPDATE news_items SET status = ? WHERE id = ?').run(status, id).changes;
}

/** Start the daily scheduler: fetch on boot, then every 12 hours. Disable with NEWS_AUTOFETCH=0. */
export function startNewsScheduler(): void {
  if (process.env.NEWS_AUTOFETCH === '0') {
    console.log('News auto-fetch disabled (NEWS_AUTOFETCH=0).');
    return;
  }
  const run = async () => {
    try {
      const results = await fetchAll();
      for (const r of results) {
        console.log(`[news] ${r.source}: fetched ${r.fetched}, added ${r.added}${r.error ? `, error: ${r.error}` : ''}`);
      }
    } catch (e) {
      // Never let a background fetch failure escape as an unhandled rejection.
      console.error('[news] scheduled fetch failed:', e);
    }
  };
  // fire-and-forget on boot, then every 12h
  setTimeout(run, 5000);
  setInterval(run, 12 * 60 * 60 * 1000);
}
