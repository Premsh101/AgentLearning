import type { RawQuestion, ScrapeOptions, SourceAdapter } from './types';

/**
 * Generic JSON-endpoint adapter. Point it at a URL that returns an array of
 * question objects (or { questions: [...] }). This is the safe, robust way to
 * ingest a PYQ dataset you control or a partner API — no brittle HTML parsing.
 * Expected item shape (fields optional unless noted):
 *   { subjectId, topic, year, difficulty, question (string|{en,hi}),
 *     options: string[]|{en,hi}[] (required), answer: number (required),
 *     explanation }
 */
const jsonEndpoint: SourceAdapter = {
  id: 'json-endpoint',
  label: 'JSON endpoint (URL)',
  description: 'Fetch questions from a URL returning a JSON array. Best for a PYQ dataset you host or a partner API.',
  needsUrl: true,
  async fetch(opts: ScrapeOptions): Promise<RawQuestion[]> {
    if (!opts.url) throw new Error('This source needs a URL.');
    const res = await fetch(opts.url, { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    const data: unknown = await res.json();
    const arr = Array.isArray(data)
      ? data
      : Array.isArray((data as { questions?: unknown }).questions)
        ? (data as { questions: unknown[] }).questions
        : [];
    const items = arr as RawQuestion[];
    return opts.limit ? items.slice(0, opts.limit) : items;
  },
};

/**
 * A built-in SAMPLE source so the whole scrape → review → approve → test-paper
 * pipeline can be demonstrated end-to-end without any external site. These are
 * generic, verifiable GK items, clearly ingested as 'pending' for review.
 */
const sampleBihar: SourceAdapter = {
  id: 'sample-bihar-pyq',
  label: 'Sample Bihar PYQ set (built-in)',
  description: 'A small built-in set of Bihar/GK questions to demonstrate the ingestion + review pipeline. Replace with a real source in production.',
  needsUrl: false,
  async fetch(): Promise<RawQuestion[]> {
    return [
      {
        subjectId: 'bihar',
        topic: 'bihar-general',
        year: 2019,
        difficulty: 1,
        question: { en: 'When is Bihar Diwas celebrated?', hi: 'बिहार दिवस कब मनाया जाता है?' },
        options: [
          { en: '22 March', hi: '22 मार्च' },
          { en: '1 April', hi: '1 अप्रैल' },
          { en: '15 November', hi: '15 नवंबर' },
          { en: '26 January', hi: '26 जनवरी' },
        ],
        answer: 0,
        explanation: { en: 'Bihar was separated from the Bengal Presidency on 22 March 1912.', hi: 'बिहार 22 मार्च 1912 को बंगाल प्रेसीडेंसी से अलग हुआ।' },
      },
      {
        subjectId: 'geography',
        topic: 'geography-bihar',
        year: 2020,
        difficulty: 2,
        question: { en: 'Which river is called the "Sorrow of Bihar"?', hi: 'किस नदी को "बिहार का शोक" कहा जाता है?' },
        options: [
          { en: 'Sone', hi: 'सोन' },
          { en: 'Kosi', hi: 'कोसी' },
          { en: 'Gandak', hi: 'गंडक' },
          { en: 'Ganga', hi: 'गंगा' },
        ],
        answer: 1,
        explanation: { en: 'The Kosi frequently changes course and causes floods in north Bihar.', hi: 'कोसी बार-बार धारा बदलकर उत्तर बिहार में बाढ़ लाती है।' },
      },
      {
        subjectId: 'polity',
        topic: 'polity-panchayat',
        year: 2021,
        difficulty: 2,
        question: {
          en: 'Which state was the first to provide 50% reservation for women in Panchayati Raj?',
          hi: 'पंचायती राज में महिलाओं को 50% आरक्षण देने वाला पहला राज्य कौन-सा था?',
        },
        options: [
          { en: 'Rajasthan', hi: 'राजस्थान' },
          { en: 'Bihar', hi: 'बिहार' },
          { en: 'Kerala', hi: 'केरल' },
          { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश' },
        ],
        answer: 1,
        explanation: { en: 'Bihar was the first state to give 50% reservation to women in PRIs (2006).', hi: 'बिहार पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण (2006) देने वाला पहला राज्य था।' },
      },
    ];
  },
};

export const ADAPTERS: SourceAdapter[] = [sampleBihar, jsonEndpoint];

export function getAdapter(id: string): SourceAdapter | undefined {
  return ADAPTERS.find((a) => a.id === id);
}
