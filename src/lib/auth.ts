import { loadJSON, saveJSON, onSave } from './storage';

/**
 * Simple accounts + cross-device progress sync.
 * When logged in, the study-progress keys below are synced to the server
 * (SQLite on the deployment volume) — so streaks, completed chapters, quiz
 * stats and the revision schedule follow the user across devices.
 * AI settings / API keys and the admin token are deliberately NOT synced:
 * they are secrets and stay on the device only.
 */
const SYNC_KEYS = ['completedChapters', 'studyDays', 'topicStats', 'revision', 'examDate', 'mistakeReports', 'lang'];

const BASE = ((import.meta.env.VITE_API_BASE as string | undefined) ?? '').replace(/\/$/, '');

export interface AuthInfo {
  token: string;
  username: string;
}

export function getAuth(): AuthInfo | null {
  const a = loadJSON<AuthInfo | null>('auth', null);
  return a && a.token ? a : null;
}

async function call<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers = new Headers(opts.headers);
  headers.set('content-type', 'application/json');
  const a = getAuth();
  if (a) headers.set('authorization', `Bearer ${a.token}`);
  const res = await fetch(`${BASE}/api/auth${path}`, { ...opts, headers });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error((detail as { error?: string }).error || `${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

let applying = false;
let pushTimer: number | null = null;

function collectState(): Record<string, unknown> {
  const state: Record<string, unknown> = {};
  for (const k of SYNC_KEYS) {
    const v = loadJSON<unknown>(k, undefined as unknown);
    if (v !== undefined) state[k] = v;
  }
  return state;
}

function applyState(state: Record<string, unknown>): void {
  applying = true;
  try {
    for (const k of SYNC_KEYS) {
      if (k in state) saveJSON(k, state[k]);
    }
  } finally {
    applying = false;
  }
}

async function pushState(): Promise<void> {
  if (!getAuth()) return;
  try {
    await call('/state', { method: 'PUT', body: JSON.stringify({ state: collectState() }) });
  } catch {
    // offline or server unreachable — local state is still safe; retry on next change
  }
}

function schedulePush(): void {
  if (pushTimer) window.clearTimeout(pushTimer);
  pushTimer = window.setTimeout(() => {
    pushTimer = null;
    void pushState();
  }, 2000);
}

/** Pull server state and hydrate localStorage (server wins for synced keys). */
export async function pullState(): Promise<void> {
  if (!getAuth()) return;
  const { state } = await call<{ state: Record<string, unknown> | null }>('/state');
  if (state) applyState(state);
}

/** Wire the storage listener; call once at app boot. */
export function initSync(): void {
  onSave((key) => {
    if (!applying && SYNC_KEYS.includes(key) && getAuth()) schedulePush();
  });
}

export async function register(username: string, password: string): Promise<AuthInfo> {
  const a = await call<AuthInfo>('/register', { method: 'POST', body: JSON.stringify({ username, password }) });
  saveJSON('auth', a);
  // First device wins: push whatever local progress exists up to the new account.
  await pushState();
  return a;
}

export async function login(username: string, password: string): Promise<AuthInfo> {
  const a = await call<AuthInfo>('/login', { method: 'POST', body: JSON.stringify({ username, password }) });
  saveJSON('auth', a);
  await pullState().catch(() => {});
  return a;
}

export async function logout(): Promise<void> {
  try {
    await call('/logout', { method: 'POST' });
  } catch {
    // best effort
  }
  saveJSON('auth', null);
}
