import { insertQuestions } from '../db';
import { getAdapter, ADAPTERS } from './adapters';
import { normalize } from './normalize';
import type { ScrapeOptions } from './types';

export { ADAPTERS };

export interface ScrapeResult {
  source: string;
  fetched: number;
  dropped: number;
  ingested: number;
  message: string;
}

/**
 * Run a scrape: fetch raw questions via the chosen adapter, normalise/validate,
 * and insert as 'pending' for human review. Duplicate questions are ignored.
 */
export async function runScrape(sourceId: string, opts: ScrapeOptions): Promise<ScrapeResult> {
  const adapter = getAdapter(sourceId);
  if (!adapter) throw new Error(`Unknown source: ${sourceId}`);
  const raw = await adapter.fetch(opts);
  const { rows, dropped } = normalize(sourceId, raw);
  const ingested = insertQuestions(rows);
  return {
    source: sourceId,
    fetched: raw.length,
    dropped,
    ingested,
    message: `Fetched ${raw.length}, dropped ${dropped} invalid, ingested ${ingested} new (pending review).`,
  };
}
