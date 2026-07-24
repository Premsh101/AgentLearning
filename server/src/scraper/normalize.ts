import { createHash } from 'node:crypto';
import type { Bilingual } from '../types';
import type { InsertQuestion } from '../db';
import type { RawQuestion } from './types';

function toBil(v: string | Bilingual | undefined): Bilingual {
  if (!v) return { en: '', hi: '' };
  if (typeof v === 'string') return { en: v, hi: '' };
  return { en: v.en ?? '', hi: v.hi ?? '' };
}

/** Stable id from the question text so re-scrapes dedupe instead of duplicating. */
function stableId(source: string, questionEn: string): string {
  return 'scr_' + createHash('sha1').update(source + '|' + questionEn.trim().toLowerCase()).digest('hex').slice(0, 16);
}

/**
 * Validate + normalise raw scraped questions into insertable rows.
 * Anything that doesn't look like a well-formed MCQ is dropped.
 * Scraped questions are inserted as status 'pending' — they must be reviewed
 * and approved before they appear in quizzes or generated test papers.
 */
export function normalize(source: string, raw: RawQuestion[]): { rows: InsertQuestion[]; dropped: number } {
  const rows: InsertQuestion[] = [];
  let dropped = 0;
  for (const r of raw) {
    const q = toBil(r.question);
    const options = (r.options ?? []).map(toBil);
    const answer = Number(r.answer);
    const valid =
      q.en.trim().length > 0 &&
      options.length >= 2 &&
      options.length <= 6 &&
      Number.isInteger(answer) &&
      answer >= 0 &&
      answer < options.length;
    if (!valid) {
      dropped++;
      continue;
    }
    rows.push({
      id: stableId(source, q.en),
      subjectId: r.subjectId || 'unclassified',
      topic: r.topic || 'unclassified',
      year: r.year ?? null,
      difficulty: r.difficulty && r.difficulty >= 1 && r.difficulty <= 3 ? r.difficulty : 2,
      type: r.type || 'mcq',
      question_en: q.en,
      question_hi: q.hi,
      options,
      answer,
      explanation_en: toBil(r.explanation).en,
      explanation_hi: toBil(r.explanation).hi,
      source: 'scrape:' + source,
      status: 'pending',
    });
  }
  return { rows, dropped };
}
