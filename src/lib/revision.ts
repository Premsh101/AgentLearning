import { loadJSON, saveJSON } from './storage';

/**
 * Spaced repetition scheduler (pure code — no AI).
 * Uses the classic BPSC-style interval ladder (Today → 1 → 3 → 7 → 15 → 30 → 60
 * days) made adaptive with recall grades, so nothing gets forgotten.
 */
export const LADDER = [1, 3, 7, 15, 30, 60];

export type Grade = 'again' | 'hard' | 'good' | 'easy';

export interface ReviewState {
  /** Index into LADDER. */
  stage: number;
  /** ISO date (YYYY-MM-DD) when this item is next due. */
  due: string;
  reps: number;
}

type RevisionStore = Record<string, ReviewState>;

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function load(): RevisionStore {
  return loadJSON<RevisionStore>('revision', {});
}

function save(store: RevisionStore): void {
  saveJSON('revision', store);
}

/** Enrol a chapter into the revision schedule (called when it is completed). */
export function enroll(chapterId: string): void {
  const store = load();
  if (store[chapterId]) return; // don't reset progress if already enrolled
  store[chapterId] = { stage: 0, due: addDays(1), reps: 0 };
  save(store);
}

export function isEnrolled(chapterId: string): boolean {
  return !!load()[chapterId];
}

/** Chapter ids due for review today or earlier. */
export function getDue(): string[] {
  const store = load();
  const t = today();
  return Object.entries(store)
    .filter(([, s]) => s.due <= t)
    .sort((a, b) => (a[1].due < b[1].due ? -1 : 1))
    .map(([id]) => id);
}

/** Apply a recall grade and reschedule. */
export function grade(chapterId: string, g: Grade): void {
  const store = load();
  const s = store[chapterId] ?? { stage: 0, due: today(), reps: 0 };
  let stage = s.stage;
  switch (g) {
    case 'again':
      stage = 0;
      break;
    case 'hard':
      stage = Math.max(0, s.stage); // repeat same interval
      break;
    case 'good':
      stage = Math.min(LADDER.length - 1, s.stage + 1);
      break;
    case 'easy':
      stage = Math.min(LADDER.length - 1, s.stage + 2);
      break;
  }
  store[chapterId] = { stage, due: addDays(LADDER[stage]), reps: s.reps + 1 };
  save(store);
}

export interface RevisionSummary {
  enrolled: number;
  due: number;
  /** 0–100: enrolled items that are not overdue. 100 if nothing enrolled yet. */
  compliance: number;
}

export function revisionSummary(): RevisionSummary {
  const store = load();
  const ids = Object.keys(store);
  const t = today();
  const overdue = ids.filter((id) => store[id].due < t).length;
  const due = ids.filter((id) => store[id].due <= t).length;
  const compliance = ids.length === 0 ? 100 : Math.round(((ids.length - overdue) / ids.length) * 100);
  return { enrolled: ids.length, due, compliance };
}
