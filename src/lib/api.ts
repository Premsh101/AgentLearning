import type { Bilingual } from './i18n';

// Same-origin in production (the Node server serves the SPA). For local dev with
// `npm run dev` + `npm run server`, Vite proxies /api to the server (see vite.config.ts),
// or set VITE_API_BASE to point elsewhere.
const BASE = ((import.meta.env.VITE_API_BASE as string | undefined) ?? '').replace(/\/$/, '');

function adminToken(): string {
  try {
    return JSON.parse(localStorage.getItem('bpscai.adminToken') || '""');
  } catch {
    return '';
  }
}

async function j<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers = new Headers(opts.headers);
  const token = adminToken();
  if (token) headers.set('x-admin-token', token);
  const res = await fetch(`${BASE}/api${path}`, { ...opts, headers });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error((detail as { error?: string }).error || `${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

const jsonPost = (body: unknown): RequestInit => ({
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(body),
});

export interface ApiQuestion {
  id: string;
  subjectId: string;
  topic: string;
  year: number | null;
  difficulty: number;
  type: string;
  question: Bilingual;
  options: Bilingual[];
  answer: number;
  explanation: Bilingual;
}

export interface ApiBlueprint {
  id: string;
  title: Bilingual;
  durationMin: number;
  negativeMarking: number;
  sections: { subjectId: string; count: number }[];
}

export interface ApiPaper {
  id: string;
  title: string;
  blueprint: ApiBlueprint;
  durationMin: number;
  negativeMarking: number;
  questions: ApiQuestion[];
  createdAt: string;
}

export interface PyqStats {
  total: number;
  subjects: { subjectId: string; count: number }[];
  topics: { topic: string; count: number; priority: string }[];
}

export interface ScrapeSource {
  id: string;
  label: string;
  description: string;
  needsUrl: boolean;
}

export interface ScrapeResult {
  source: string;
  fetched: number;
  dropped: number;
  ingested: number;
  message: string;
}

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

export const api = {
  health: () => j<{ ok: boolean; questions: number; adminRequired: boolean }>('/health'),
  news: (status?: string) => j<{ items: NewsItem[] }>(`/news${status ? `?status=${status}` : ''}`),
  fetchNews: (url?: string) => j<{ results: { source: string; fetched: number; added: number; error?: string }[] }>('/news/fetch', jsonPost({ url })),
  newsAction: (id: string, action: 'approve' | 'dismiss') => j<{ updated: number }>(`/news/${id}/${action}`, { method: 'POST' }),
  questions: (params: { subject?: string; topic?: string; difficulty?: number; limit?: number } = {}) => {
    const q = new URLSearchParams();
    if (params.subject) q.set('subject', params.subject);
    if (params.topic) q.set('topic', params.topic);
    if (params.difficulty) q.set('difficulty', String(params.difficulty));
    q.set('limit', String(params.limit ?? 20));
    return j<{ questions: ApiQuestion[] }>(`/questions?${q.toString()}`);
  },
  blueprints: () => j<{ blueprints: ApiBlueprint[] }>('/blueprints'),
  generatePaper: (blueprintId: string, seed?: number) => j<{ paper: ApiPaper; shortfall: number }>('/papers', jsonPost({ blueprintId, seed })),
  generateCustomPaper: (blueprint: ApiBlueprint, seed?: number) => j<{ paper: ApiPaper; shortfall: number }>('/papers', jsonPost({ blueprint, seed })),
  pyqStats: () => j<PyqStats>('/pyq/stats'),

  // admin
  scrapeSources: () => j<{ sources: ScrapeSource[] }>('/scrape/sources'),
  runScrape: (source: string, url?: string, limit?: number) => j<ScrapeResult>('/scrape', jsonPost({ source, url, limit })),
  pending: () => j<{ questions: ApiQuestion[] }>('/questions/pending'),
  review: (id: string, action: 'approve' | 'reject') => j<{ updated: number; status: string }>(`/questions/${id}/${action}`, { method: 'POST' }),
  importQuestions: (questions: unknown[]) => j<{ added: number; dropped: number; received: number }>('/questions/import', jsonPost(questions)),
};
