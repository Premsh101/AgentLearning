import type { Bilingual } from '../lib/i18n';

/**
 * Structured content blocks instead of raw markdown: keeps rendering
 * deterministic, bilingual by construction, and safe to export to PDF.
 * Inline **bold** is supported inside any text.
 */
export type Block =
  | { type: 'p'; text: Bilingual }
  | { type: 'list'; items: Bilingual[]; ordered?: boolean }
  | { type: 'table'; caption?: Bilingual; headers: Bilingual[]; rows: Bilingual[][] }
  | { type: 'note'; title?: Bilingual; text: Bilingual };

export interface Section {
  id: string;
  heading: Bilingual;
  blocks: Block[];
}

export type QuestionType = 'mcq' | 'statement';

export interface Question {
  id: string;
  type: QuestionType;
  question: Bilingual;
  options: Bilingual[];
  /** Index into options. */
  answer: number;
  explanation: Bilingual;
  /** Topic tag used for weak-area analytics and mock-test breakdown. */
  topic: string;
  difficulty: 1 | 2 | 3;
}

export interface Chapter {
  id: string;
  subjectId: string;
  order: number;
  title: Bilingual;
  intro: Bilingual;
  sections: Section[];
  /** Mandatory: every chapter ends with takeaway notes. */
  takeaways: Bilingual[];
  quiz: Question[];
}

export interface Subject {
  id: string;
  name: Bilingual;
  icon: string;
  description: Bilingual;
}
