import Database from 'better-sqlite3';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { QuestionRow, Bilingual } from './types';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Persistent data dir — mount a Coolify volume at /data in production.
const DATA_DIR = process.env.DATA_DIR || resolve(__dirname, '../../data');
mkdirSync(DATA_DIR, { recursive: true });

export const db = new Database(resolve(DATA_DIR, 'bpsc.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    subjectId TEXT NOT NULL,
    topic TEXT NOT NULL,
    year INTEGER,
    difficulty INTEGER NOT NULL DEFAULT 1,
    type TEXT NOT NULL DEFAULT 'mcq',
    question_en TEXT NOT NULL,
    question_hi TEXT NOT NULL,
    options TEXT NOT NULL,
    answer INTEGER NOT NULL,
    explanation_en TEXT NOT NULL DEFAULT '',
    explanation_hi TEXT NOT NULL DEFAULT '',
    source TEXT NOT NULL DEFAULT 'manual',
    status TEXT NOT NULL DEFAULT 'approved',
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_q_subject ON questions(subjectId);
  CREATE INDEX IF NOT EXISTS idx_q_topic ON questions(topic);
  CREATE INDEX IF NOT EXISTS idx_q_status ON questions(status);

  CREATE TABLE IF NOT EXISTS papers (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    blueprint TEXT NOT NULL,
    question_ids TEXT NOT NULL,
    duration_min INTEGER NOT NULL,
    negative_marking REAL NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
  );
`);

interface DbQuestion {
  id: string;
  subjectId: string;
  topic: string;
  year: number | null;
  difficulty: number;
  type: string;
  question_en: string;
  question_hi: string;
  options: string;
  answer: number;
  explanation_en: string;
  explanation_hi: string;
  source: string;
  status: string;
}

export function rowToQuestion(r: DbQuestion): QuestionRow {
  return {
    id: r.id,
    subjectId: r.subjectId,
    topic: r.topic,
    year: r.year,
    difficulty: r.difficulty,
    type: r.type,
    question: { en: r.question_en, hi: r.question_hi },
    options: JSON.parse(r.options) as Bilingual[],
    answer: r.answer,
    explanation: { en: r.explanation_en, hi: r.explanation_hi },
    source: r.source,
    status: r.status as QuestionRow['status'],
  };
}

const insertStmt = db.prepare(`
  INSERT OR IGNORE INTO questions
    (id, subjectId, topic, year, difficulty, type, question_en, question_hi, options, answer, explanation_en, explanation_hi, source, status, created_at)
  VALUES
    (@id, @subjectId, @topic, @year, @difficulty, @type, @question_en, @question_hi, @options, @answer, @explanation_en, @explanation_hi, @source, @status, @created_at)
`);

export interface InsertQuestion {
  id: string;
  subjectId: string;
  topic: string;
  year: number | null;
  difficulty: number;
  type: string;
  question_en: string;
  question_hi: string;
  options: Bilingual[];
  answer: number;
  explanation_en: string;
  explanation_hi: string;
  source: string;
  status: string;
}

/** Insert questions; returns how many were newly added (ignores duplicate ids). */
export function insertQuestions(items: InsertQuestion[]): number {
  let added = 0;
  const now = new Date().toISOString();
  const tx = db.transaction((rows: InsertQuestion[]) => {
    for (const q of rows) {
      const res = insertStmt.run({
        ...q,
        year: q.year ?? null,
        options: JSON.stringify(q.options),
        created_at: now,
      });
      added += res.changes;
    }
  });
  tx(items);
  return added;
}

/** Load the committed seed bank on first run (empty DB). */
export function seedIfEmpty(): void {
  const count = (db.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n;
  if (count > 0) return;
  const seedPath = resolve(__dirname, '../seed/questions.json');
  if (!existsSync(seedPath)) {
    console.warn('No seed file found at', seedPath);
    return;
  }
  const seed = JSON.parse(readFileSync(seedPath, 'utf8')) as InsertQuestion[];
  const added = insertQuestions(seed);
  console.log(`Seeded ${added} questions into the bank.`);
}
