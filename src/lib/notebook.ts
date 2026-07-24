import { loadJSON, saveJSON } from './storage';

/**
 * Personal notebook: highlights captured from chapters plus manually typed
 * notes, organised into pages by subject. Stored under the 'notebook' key,
 * which is account-synced, so notes follow the user across devices.
 */
export interface NotebookEntry {
  id: string;
  kind: 'highlight' | 'note';
  text: string;
  /** Where a highlight came from (chapter title in the language it was captured). */
  source?: { chapterId: string; chapterTitle: string };
  ts: number;
}

/** subjectId (or 'general') → page of entries. */
export type Notebook = Record<string, NotebookEntry[]>;

const KEY = 'notebook';

export function loadNotebook(): Notebook {
  return loadJSON<Notebook>(KEY, {});
}

export function addEntry(page: string, entry: Omit<NotebookEntry, 'id' | 'ts'>): NotebookEntry {
  const nb = loadNotebook();
  const full: NotebookEntry = { ...entry, id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`, ts: Date.now() };
  nb[page] = [...(nb[page] ?? []), full];
  saveJSON(KEY, nb);
  return full;
}

export function removeEntry(page: string, id: string): void {
  const nb = loadNotebook();
  nb[page] = (nb[page] ?? []).filter((e) => e.id !== id);
  if (nb[page].length === 0) delete nb[page];
  saveJSON(KEY, nb);
}

export function updateEntry(page: string, id: string, text: string): void {
  const nb = loadNotebook();
  nb[page] = (nb[page] ?? []).map((e) => (e.id === id ? { ...e, text } : e));
  saveJSON(KEY, nb);
}
