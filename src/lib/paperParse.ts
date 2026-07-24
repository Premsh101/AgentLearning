import type { Bilingual } from './i18n';

/**
 * Parse a pasted previous-year paper (plain text) into importable questions.
 *
 * Accepts the common formats seen in BPSC/UPSC answer-key PDFs and websites:
 *   1. Question text ...
 *   (a) option   a) option   A. option   1) option
 *   ...
 *   Answer: (c)   Ans - C   Correct: 3   [or an option marked with * ]
 *
 * The whole paper can be pasted at once. `year`, `subjectId` and `lang` are
 * supplied by the importer UI; the parsed text is stored in the chosen
 * language and mirrored into the other field so it always displays.
 */
export interface ParsedQuestion {
  subjectId: string;
  topic: string;
  year: number;
  difficulty: number;
  question: Bilingual;
  options: Bilingual[];
  answer: number;
  explanation: Bilingual;
}

// Option lines: a letter (a–e) or a digit, with a bracket/dot separator.
const LETTER_OPT_RE = /^\s*[*✓]?\s*[([]?\s*([a-eA-E])\s*[).\]]\s+(.*\S)\s*$/;
const DIGIT_OPT_RE = /^\s*[*✓]?\s*[([]?\s*([1-5])\s*[).\]]\s+(.*\S)\s*$/;
// A question number: an optional "Q"/"Question" prefix then a number.
const Q_RE = /^\s*(?:Q\.?\s*|Question\s*)?(\d{1,3})\s*[.)\]]\s+(.*\S)\s*$/;
const ANS_RE = /^\s*(?:ans(?:wer)?|correct(?:\s*answer)?|sol(?:ution)?|उत्तर|सही)\s*[:\-–.]?\s*[([]?\s*([a-eA-E1-5])\s*[)\].]?\s*$/i;
const STAR_RE = /^\s*[*✓]/;

const letterToIndex = (c: string): number => {
  const lc = c.toLowerCase();
  if (/[1-5]/.test(lc)) return Number(lc) - 1;
  return lc.charCodeAt(0) - 97; // a→0
};

interface Block {
  q: string;
  options: string[];
  answer: number | null;
  /** True once a lettered option (a–e) is seen — then digit lines are new questions. */
  letterOpts: boolean;
}

function bilingual(text: string): Bilingual {
  // Store in both fields so the question shows regardless of UI language.
  return { en: text, hi: text };
}

export function parsePaper(
  raw: string,
  opts: { year: number; subjectId: string; topic?: string }
): { questions: ParsedQuestion[]; warnings: string[] } {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let cur: Block | null = null;
  const warnings: string[] = [];

  const flush = (block: Block | null) => {
    if (block && block.q && block.options.length >= 2) blocks.push(block);
    else if (block && block.q) warnings.push(`Skipped (too few options): "${block.q.slice(0, 50)}…"`);
  };

  for (const line of lines) {
    if (!line.trim()) continue;

    const ans = ANS_RE.exec(line);
    if (ans && cur && cur.options.length > 0) {
      cur.answer = letterToIndex(ans[1]);
      continue;
    }

    // Lettered option (a–e): unambiguous, always an option.
    const lopt = LETTER_OPT_RE.exec(line);
    if (lopt && cur && cur.q) {
      if (STAR_RE.test(line) && cur.answer === null) cur.answer = cur.options.length;
      cur.options.push(lopt[2].trim());
      cur.letterOpts = true;
      continue;
    }

    const qm = Q_RE.exec(line);
    const dopt = DIGIT_OPT_RE.exec(line);

    // Decide whether a numbered line is a NEW question or a numeric option.
    if (qm || dopt) {
      const num = Number((qm ?? dopt)![1]);
      const isNewQuestion =
        !cur ||
        cur.letterOpts ||
        (cur.options.length === 0 && num !== 1) ||
        cur.options.length >= 5 ||
        (cur.options.length >= 2 && num !== cur.options.length + 1);
      if (isNewQuestion && qm) {
        flush(cur);
        cur = { q: qm[2].trim(), options: [], answer: null, letterOpts: false };
        continue;
      }
      if (dopt && cur && cur.q) {
        if (STAR_RE.test(line) && cur.answer === null) cur.answer = cur.options.length;
        cur.options.push(dopt[2].trim());
        continue;
      }
      if (qm) {
        flush(cur);
        cur = { q: qm[2].trim(), options: [], answer: null, letterOpts: false };
        continue;
      }
    }

    // Continuation line.
    if (cur && cur.options.length === 0) {
      cur.q += ' ' + line.trim();
    } else if (cur && cur.options.length > 0) {
      cur.options[cur.options.length - 1] += ' ' + line.trim();
    }
  }
  flush(cur);

  const questions: ParsedQuestion[] = [];
  blocks.forEach((bl, i) => {
    if (bl.answer === null) {
      warnings.push(`Q${i + 1} has no marked answer — defaulting to option A. Fix in the JSON if needed: "${bl.q.slice(0, 40)}…"`);
    }
    const answer = bl.answer !== null && bl.answer < bl.options.length ? bl.answer : 0;
    questions.push({
      subjectId: opts.subjectId,
      topic: opts.topic || `${opts.subjectId}-pyq`,
      year: opts.year,
      difficulty: 2,
      question: bilingual(bl.q),
      options: bl.options.map(bilingual),
      answer,
      explanation: { en: '', hi: '' },
    });
  });

  return { questions, warnings };
}
