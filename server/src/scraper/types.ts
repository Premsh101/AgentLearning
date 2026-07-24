import type { Bilingual } from '../types';

/** A question as produced by a scraper before normalisation/review. */
export interface RawQuestion {
  subjectId?: string;
  topic?: string;
  year?: number | null;
  difficulty?: number;
  type?: string;
  question: string | Bilingual;
  options: (string | Bilingual)[];
  answer: number;
  explanation?: string | Bilingual;
}

export interface ScrapeOptions {
  /** For URL-based adapters. */
  url?: string;
  /** Optional cap on how many to ingest. */
  limit?: number;
}

export interface SourceAdapter {
  id: string;
  label: string;
  description: string;
  /** Does this adapter need a URL? (UI hint) */
  needsUrl: boolean;
  fetch(opts: ScrapeOptions): Promise<RawQuestion[]>;
}
