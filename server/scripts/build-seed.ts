// Generates the question-bank seed JSON from the app's existing, human-written
// content (chapters' tagged quiz questions). Run: npm run seed:build
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CHAPTERS } from '../../src/content/syllabus';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface SeedQuestion {
  id: string;
  subjectId: string;
  topic: string;
  year: number | null;
  difficulty: number;
  type: string;
  question_en: string;
  question_hi: string;
  options: { en: string; hi: string }[];
  answer: number;
  explanation_en: string;
  explanation_hi: string;
  source: string;
  status: string;
}

const rows: SeedQuestion[] = [];
for (const ch of CHAPTERS) {
  for (const q of ch.quiz) {
    rows.push({
      id: q.id,
      subjectId: ch.subjectId,
      topic: q.topic,
      year: null,
      difficulty: q.difficulty,
      type: q.type,
      question_en: q.question.en,
      question_hi: q.question.hi,
      options: q.options.map((o) => ({ en: o.en, hi: o.hi })),
      answer: q.answer,
      explanation_en: q.explanation.en,
      explanation_hi: q.explanation.hi,
      source: 'seed:chapters',
      status: 'approved',
    });
  }
}

const outDir = resolve(__dirname, '../seed');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'questions.json'), JSON.stringify(rows, null, 2));
console.log(`Wrote ${rows.length} seed questions to server/seed/questions.json`);
