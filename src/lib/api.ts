import type { Bilingual } from './i18n';

// Same-origin in production (the Node server serves the SPA). For local dev with
// `npm run dev` + `npm run server`, Vite proxies /api to the server (see vite.config.ts),
// or set VITE_API_BASE to point elsewhere.
const BASE = ((import.meta.env.VITE_API_BASE as string | undefined) ?? '').replace(/\/$/, '');

async function j<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}/api${path}`, opts);
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error((detail as { error?: string }).error || `${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export interface ApiQuestion {
  id: string;
  subjectId: string;
  topic: string;
  year: number | null;
  difficulty: number;
  type: string;
  question: Bilingual;
  options: Bilingual[];
  answer: number;
  explanation: Bilingual;
}

export interface ApiBlueprint {
  id: string;
  title: Bilingual;
  durationMin: number;
  negativeMarking: number;
  sections: { subjectId: string; count: number }[];
}

export interface ApiPaper {
  id: string;
  title: string;
  blueprint: ApiBlueprint;
  durationMin: number;
  negativeMarking: number;
  questions: ApiQuestion[];
  createdAt: string;
}

export interface PyqStats {
  total: number;
  subjects: { subjectId: string; count: number }[];
  topics: { topic: string; count: number; priority: string }[];
}

export const api = {
  health: () => j<{ ok: boolean; questions: number }>('/health'),
  blueprints: () => j<{ blueprints: ApiBlueprint[] }>('/blueprints'),
  generatePaper: (blueprintId: string, seed?: number) =>
    j<{ paper: ApiPaper; shortfall: number }>('/papers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ blueprintId, seed }),
    }),
  pyqStats: () => j<PyqStats>('/pyq/stats'),
};
