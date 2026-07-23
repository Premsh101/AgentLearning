import type { AISettings } from './types';
import { chat } from './client';
import type { Lang } from '../i18n';

export interface GeneratedMCQ {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface GeneratedCA {
  title: string;
  category: string;
  summary: string;
  background: string;
  staticLink: string;
  facts: string[];
  mcqs: GeneratedMCQ[];
  mains: string[];
}

const SCHEMA_HINT = `Return ONLY a JSON object (no markdown, no code fences) with exactly these keys:
{
  "title": string,
  "category": one of ["polity","economy","science","environment","international","bihar","reports"],
  "summary": string (2-3 simple sentences),
  "background": string (3-4 sentences of context/history),
  "staticLink": string (how this connects to the static BPSC syllabus and to Bihar),
  "facts": string[] (4-6 crisp bullet facts),
  "mcqs": [ { "question": string, "options": [string,string,string,string], "answer": number (0-3), "explanation": string } ] (2-3 items),
  "mains": string[] (1-2 mains-style questions)
}`;

/**
 * The signature Current Affairs feature: turn any news item into complete
 * BPSC exam material. Runs client-side through the user's configured provider.
 */
export async function generateExamMaterial(settings: AISettings, newsText: string, lang: Lang): Promise<GeneratedCA> {
  const language = lang === 'hi' ? 'Hindi (Devanagari)' : 'English';
  const system =
    'You are the Current Affairs Intelligence Agent for a BPSC (Bihar Public Service Commission) exam-prep app. ' +
    `You transform a news item into complete, accurate, exam-ready study material, written in ${language}. ` +
    'Always connect the news to the static syllabus and to Bihar where relevant. ' +
    'Be factually careful — do not invent specific figures or dates you are unsure of. ' +
    SCHEMA_HINT;

  const raw = await chat(settings, [
    { role: 'system', content: system },
    { role: 'user', content: `News item:\n"""${newsText.trim()}"""\n\nProduce the JSON now.` },
  ]);

  return parseGenerated(raw);
}

/** Tolerant JSON extraction — models sometimes wrap output in prose or fences. */
export function parseGenerated(raw: string): GeneratedCA {
  let text = raw.trim();
  // strip code fences if present
  text = text.replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('The AI did not return valid JSON. Try again.');
  const obj = JSON.parse(text.slice(start, end + 1));

  // normalise / guard
  const mcqs: GeneratedMCQ[] = Array.isArray(obj.mcqs)
    ? obj.mcqs
        .filter((m: unknown): m is GeneratedMCQ => !!m && Array.isArray((m as GeneratedMCQ).options))
        .map((m: GeneratedMCQ) => ({
          question: String(m.question ?? ''),
          options: m.options.slice(0, 4).map((o) => String(o)),
          answer: Math.min(Math.max(Number(m.answer) || 0, 0), 3),
          explanation: String(m.explanation ?? ''),
        }))
    : [];

  return {
    title: String(obj.title ?? 'Untitled'),
    category: String(obj.category ?? 'polity'),
    summary: String(obj.summary ?? ''),
    background: String(obj.background ?? ''),
    staticLink: String(obj.staticLink ?? ''),
    facts: Array.isArray(obj.facts) ? obj.facts.map((f: unknown) => String(f)) : [],
    mcqs,
    mains: Array.isArray(obj.mains) ? obj.mains.map((m: unknown) => String(m)) : [],
  };
}
