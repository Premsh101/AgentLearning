import { randomUUID } from 'node:crypto';
import { db, rowToQuestion } from './db';
import type { Blueprint, Paper, QuestionRow } from './types';

/** Predefined exam blueprints. Distributions are scaled to the seeded bank. */
export const BLUEPRINTS: Blueprint[] = [
  {
    id: 'quick-30',
    title: { en: 'Quick Test — 30 questions', hi: 'त्वरित टेस्ट — 30 प्रश्न' },
    durationMin: 30,
    negativeMarking: 0,
    sections: [
      { subjectId: 'polity', count: 7 },
      { subjectId: 'history', count: 5 },
      { subjectId: 'geography', count: 4 },
      { subjectId: 'economy', count: 4 },
      { subjectId: 'science', count: 4 },
      { subjectId: 'bihar', count: 4 },
      { subjectId: 'mental', count: 2 },
    ],
  },
  {
    id: 'prelims-gs-50',
    title: { en: 'Prelims GS — 50 questions', hi: 'प्रारंभिक सामान्य अध्ययन — 50 प्रश्न' },
    durationMin: 60,
    negativeMarking: 0,
    sections: [
      { subjectId: 'polity', count: 11 },
      { subjectId: 'history', count: 9 },
      { subjectId: 'geography', count: 7 },
      { subjectId: 'economy', count: 7 },
      { subjectId: 'science', count: 6 },
      { subjectId: 'bihar', count: 6 },
      { subjectId: 'mental', count: 4 },
    ],
  },
  {
    id: 'bihar-special-20',
    title: { en: 'Bihar Special — 20 questions', hi: 'बिहार विशेष — 20 प्रश्न' },
    durationMin: 20,
    negativeMarking: 0,
    sections: [
      { subjectId: 'bihar', count: 10 },
      { subjectId: 'history', count: 5 },
      { subjectId: 'geography', count: 5 },
    ],
  },
];

export function getBlueprint(id: string): Blueprint | undefined {
  return BLUEPRINTS.find((b) => b.id === id);
}

// Seedable RNG (mulberry32) for reproducible papers when a seed is supplied.
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const bySubject = db.prepare(`SELECT * FROM questions WHERE subjectId = ? AND status = 'approved'`);
const anyApproved = db.prepare(`SELECT * FROM questions WHERE status = 'approved'`);

/** Generate a model test paper from a blueprint and persist it. */
export function generatePaper(blueprint: Blueprint, seed?: number): { paper: Paper; shortfall: number } {
  const rand = rng(seed ?? Math.floor(Math.random() * 1e9));
  const picked: QuestionRow[] = [];
  const usedIds = new Set<string>();
  let shortfall = 0;

  for (const section of blueprint.sections) {
    const pool = shuffle((bySubject.all(section.subjectId) as Parameters<typeof rowToQuestion>[0][]).map(rowToQuestion), rand);
    const take = pool.slice(0, section.count);
    if (take.length < section.count) shortfall += section.count - take.length;
    for (const q of take) {
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  // Backfill any shortfall from the rest of the approved bank so the count holds.
  if (shortfall > 0) {
    const rest = shuffle((anyApproved.all() as Parameters<typeof rowToQuestion>[0][]).map(rowToQuestion).filter((q) => !usedIds.has(q.id)), rand);
    for (const q of rest.slice(0, shortfall)) {
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  const questions = shuffle(picked, rand);
  const id = randomUUID();
  const createdAt = new Date().toISOString();
  db.prepare(
    `INSERT INTO papers (id, title, blueprint, question_ids, duration_min, negative_marking, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(
    id,
    blueprint.title.en,
    JSON.stringify(blueprint),
    JSON.stringify(questions.map((q) => q.id)),
    blueprint.durationMin,
    blueprint.negativeMarking,
    createdAt
  );

  const paper: Paper = {
    id,
    title: blueprint.title.en,
    blueprint,
    durationMin: blueprint.durationMin,
    negativeMarking: blueprint.negativeMarking,
    questions,
    createdAt,
  };
  return { paper, shortfall };
}

export function getPaper(id: string): Paper | null {
  const row = db.prepare('SELECT * FROM papers WHERE id = ?').get(id) as
    | { id: string; title: string; blueprint: string; question_ids: string; duration_min: number; negative_marking: number; created_at: string }
    | undefined;
  if (!row) return null;
  const ids = JSON.parse(row.question_ids) as string[];
  const questions = ids
    .map((qid) => db.prepare('SELECT * FROM questions WHERE id = ?').get(qid) as Parameters<typeof rowToQuestion>[0] | undefined)
    .filter((q): q is Parameters<typeof rowToQuestion>[0] => !!q)
    .map(rowToQuestion);
  return {
    id: row.id,
    title: row.title,
    blueprint: JSON.parse(row.blueprint) as Blueprint,
    durationMin: row.duration_min,
    negativeMarking: row.negative_marking,
    questions,
    createdAt: row.created_at,
  };
}
