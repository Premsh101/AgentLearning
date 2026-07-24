import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { db, insertQuestions, rowToQuestion, type InsertQuestion } from './db';
import { normalize } from './scraper/normalize';
import { runScrape, ADAPTERS } from './scraper/index';
import { BLUEPRINTS, getBlueprint, generatePaper, getPaper } from './papers';
import type { Blueprint } from './types';

export const api = Router();

const wrap = (fn: (req: Request, res: Response) => Promise<void> | void) => (req: Request, res: Response) => {
  Promise.resolve(fn(req, res)).catch((e: unknown) => {
    res.status(500).json({ error: e instanceof Error ? e.message : String(e) });
  });
};

// Optional admin guard for content-mutating endpoints (scrape / import / review).
// If ADMIN_TOKEN is unset the endpoints are open (simple single-user deploy);
// if set, callers must send a matching `x-admin-token` header.
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!ADMIN_TOKEN) return next();
  if (req.header('x-admin-token') === ADMIN_TOKEN) return next();
  res.status(401).json({ error: 'Admin token required. Set it in the Question Bank page.' });
}

api.get('/health', (_req, res) => {
  const n = (db.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n;
  res.json({ ok: true, questions: n, adminRequired: !!ADMIN_TOKEN });
});

// ---- Question bank ----
api.get(
  '/questions',
  wrap((req, res) => {
    const { subject, topic, status = 'approved', difficulty } = req.query;
    const limit = Math.min(Number(req.query.limit) || 100, 500);
    const clauses: string[] = [];
    const params: unknown[] = [];
    if (status) { clauses.push('status = ?'); params.push(String(status)); }
    if (subject) { clauses.push('subjectId = ?'); params.push(String(subject)); }
    if (topic) { clauses.push('topic = ?'); params.push(String(topic)); }
    if (difficulty) { clauses.push('difficulty = ?'); params.push(Number(difficulty)); }
    const where = clauses.length ? 'WHERE ' + clauses.join(' AND ') : '';
    const rows = db.prepare(`SELECT * FROM questions ${where} LIMIT ?`).all(...params, limit) as Parameters<typeof rowToQuestion>[0][];
    res.json({ questions: rows.map(rowToQuestion) });
  })
);

api.get(
  '/questions/pending',
  wrap((_req, res) => {
    const rows = db.prepare(`SELECT * FROM questions WHERE status = 'pending' LIMIT 500`).all() as Parameters<typeof rowToQuestion>[0][];
    res.json({ questions: rows.map(rowToQuestion) });
  })
);

// Trusted bulk import → inserted as approved.
api.post(
  '/questions/import',
  requireAdmin,
  wrap((req, res) => {
    const items = Array.isArray(req.body) ? req.body : req.body?.questions;
    if (!Array.isArray(items)) { res.status(400).json({ error: 'Body must be an array of questions or { questions: [...] }.' }); return; }
    const { rows, dropped } = normalize('import', items);
    const approved: InsertQuestion[] = rows.map((r) => ({ ...r, status: 'approved', source: 'import' }));
    const added = insertQuestions(approved);
    res.json({ added, dropped, received: items.length });
  })
);

api.post(
  '/questions/:id/:action',
  requireAdmin,
  wrap((req, res) => {
    const action = String(req.params.action);
    if (action !== 'approve' && action !== 'reject') { res.status(400).json({ error: 'action must be approve or reject' }); return; }
    const status = action === 'approve' ? 'approved' : 'rejected';
    const info = db.prepare('UPDATE questions SET status = ? WHERE id = ?').run(status, String(req.params.id));
    res.json({ updated: info.changes, status });
  })
);

// ---- PYQ intelligence (computed over the approved bank) ----
api.get(
  '/pyq/stats',
  wrap((_req, res) => {
    const subjects = db.prepare(`SELECT subjectId, COUNT(*) AS count FROM questions WHERE status='approved' GROUP BY subjectId ORDER BY count DESC`).all();
    const topicsRaw = db.prepare(`SELECT topic, COUNT(*) AS count FROM questions WHERE status='approved' GROUP BY topic ORDER BY count DESC`).all() as { topic: string; count: number }[];
    const topics = topicsRaw.map((t) => ({
      ...t,
      priority: t.count >= 10 ? 'Very High' : t.count >= 6 ? 'High' : 'Medium',
    }));
    const total = (db.prepare(`SELECT COUNT(*) AS n FROM questions WHERE status='approved'`).get() as { n: number }).n;
    res.json({ total, subjects, topics });
  })
);

// ---- Scraper ----
api.get('/scrape/sources', (_req, res) => {
  res.json({ sources: ADAPTERS.map((a) => ({ id: a.id, label: a.label, description: a.description, needsUrl: a.needsUrl })) });
});

api.post(
  '/scrape',
  requireAdmin,
  wrap(async (req, res) => {
    const { source, url, limit } = req.body ?? {};
    if (!source) { res.status(400).json({ error: 'source is required' }); return; }
    const result = await runScrape(String(source), { url, limit: limit ? Number(limit) : undefined });
    res.json(result);
  })
);

// ---- Model test papers ----
api.get('/blueprints', (_req, res) => {
  res.json({ blueprints: BLUEPRINTS });
});

api.post(
  '/papers',
  wrap((req, res) => {
    const { blueprintId, blueprint, seed } = req.body ?? {};
    const bp: Blueprint | undefined = blueprintId ? getBlueprint(String(blueprintId)) : (blueprint as Blueprint | undefined);
    if (!bp) { res.status(400).json({ error: 'Provide a known blueprintId or a custom blueprint object.' }); return; }
    const { paper, shortfall } = generatePaper(bp, seed ? Number(seed) : undefined);
    res.json({ paper, shortfall });
  })
);

api.get(
  '/papers/:id',
  wrap((req, res) => {
    const paper = getPaper(String(req.params.id));
    if (!paper) { res.status(404).json({ error: 'Paper not found' }); return; }
    res.json({ paper });
  })
);
