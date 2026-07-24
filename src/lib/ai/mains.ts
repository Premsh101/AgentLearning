import type { AISettings } from './types';
import { chat } from './client';
import type { Lang } from '../i18n';

export interface MainsEvaluation {
  estimatedMarks: number;
  maxMarks: number;
  dimensions: { name: string; score: number; max: number; comment: string }[];
  strengths: string[];
  improvements: string[];
  modelAnswer: string;
}

const SCHEMA_HINT = `Return ONLY a JSON object (no markdown, no code fences) with exactly these keys:
{
  "estimatedMarks": number (0-15, the overall marks you would award),
  "maxMarks": number (always 15),
  "dimensions": [
    { "name": string, "score": number, "max": number, "comment": string (1-2 sentences of specific feedback) }
  ] (exactly these five dimensions, in this order:
     "Structure (intro-body-conclusion)" (max 3),
     "Content & Facts" (max 4),
     "Relevance to the question" (max 3),
     "Language & Expression" (max 3),
     "Presentation" (max 2)),
  "strengths": string[] (2-4 concrete things the answer did well),
  "improvements": string[] (2-4 concrete, actionable suggestions),
  "modelAnswer": string (a concise, well-structured model answer with intro, body and conclusion)
}`;

/**
 * Evaluate a student's BPSC Mains answer against a rubric and return structured,
 * examiner-style feedback. Runs client-side through the user's configured provider.
 */
export async function evaluateAnswer(
  settings: AISettings,
  question: string,
  answer: string,
  lang: Lang
): Promise<MainsEvaluation> {
  const language = lang === 'hi' ? 'Hindi (Devanagari)' : 'English';
  const system =
    'You are a strict-but-fair BPSC (Bihar Public Service Commission) Mains examiner. ' +
    `Evaluate the student's answer against the question using a rubric, and write all feedback in ${language}. ` +
    'Grade honestly against real BPSC Mains standards — reward substance and structure, penalise vagueness, ' +
    'irrelevance and factual errors, but stay constructive. Do not invent facts you are unsure of. ' +
    'The dimensions are: Structure (intro-body-conclusion), Content & Facts, Relevance to the question, ' +
    'Language & Expression, and Presentation. ' +
    SCHEMA_HINT;

  const raw = await chat(settings, [
    { role: 'system', content: system },
    {
      role: 'user',
      content:
        `Question:\n"""${question.trim()}"""\n\n` +
        `Student's answer:\n"""${answer.trim()}"""\n\nProduce the JSON evaluation now.`,
    },
  ]);

  return parseEvaluation(raw);
}

/** Tolerant JSON extraction — models sometimes wrap output in prose or fences. */
export function parseEvaluation(raw: string): MainsEvaluation {
  let text = raw.trim();
  // strip code fences if present
  text = text.replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('The AI did not return valid JSON. Try again.');
  const obj = JSON.parse(text.slice(start, end + 1));

  // normalise / guard
  const dimensions: MainsEvaluation['dimensions'] = Array.isArray(obj.dimensions)
    ? obj.dimensions
        .filter((d: unknown): d is MainsEvaluation['dimensions'][number] => !!d)
        .map((d: { name?: unknown; score?: unknown; max?: unknown; comment?: unknown }) => {
          const max = Math.max(Number(d.max) || 0, 0);
          const score = Math.min(Math.max(Number(d.score) || 0, 0), max || Number(d.score) || 0);
          return {
            name: String(d.name ?? ''),
            score,
            max,
            comment: String(d.comment ?? ''),
          };
        })
    : [];

  const maxMarks = Math.max(Number(obj.maxMarks) || 15, 1);
  const estimatedMarks = Math.min(Math.max(Number(obj.estimatedMarks) || 0, 0), maxMarks);

  return {
    estimatedMarks,
    maxMarks,
    dimensions,
    strengths: Array.isArray(obj.strengths) ? obj.strengths.map((s: unknown) => String(s)) : [],
    improvements: Array.isArray(obj.improvements) ? obj.improvements.map((s: unknown) => String(s)) : [],
    modelAnswer: String(obj.modelAnswer ?? ''),
  };
}
