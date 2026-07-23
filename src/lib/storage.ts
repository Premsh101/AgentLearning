const PREFIX = 'bpscai.';

export function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function saveJSON<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // storage full or unavailable — non-fatal
  }
}

/** Records today as a study day and returns the current streak length. */
export function touchStudyDay(): number {
  const days = new Set(loadJSON<string[]>('studyDays', []));
  days.add(new Date().toISOString().slice(0, 10));
  const list = [...days].sort();
  saveJSON('studyDays', list);
  return computeStreak(list);
}

export function computeStreak(sortedDays?: string[]): number {
  const days = new Set(sortedDays ?? loadJSON<string[]>('studyDays', []));
  let streak = 0;
  const d = new Date();
  // today counts if present; otherwise streak may still be alive from yesterday
  if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (days.has(d.toISOString().slice(0, 10))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
