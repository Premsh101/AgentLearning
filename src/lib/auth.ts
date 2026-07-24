import { loadJSON, saveJSON, onSave, clearKeys } from './storage';

/**
 * Simple accounts + cross-device sync.
 * When logged in, the keys below are synced to the server (SQLite on the
 * deployment volume) so a user's progress AND their AI provider/model/key
 * follow them to any device they log in on.
 * Note: this means the AI API key is stored on the (self-hosted) server for
 * that user — a deliberate choice so the same AI works across systems. The
 * admin token stays device-only (it's an ops secret, not per-user).
 */
const SYNC_KEYS = ['completedChapters', 'studyDays', 'topicStats', 'revision', 'examDate', 'mistakeReports', 'lang', 'aiSettings', 'notebook'];

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
  // A brand-new account starts clean — never inherit the previous user's
  // progress that may be sitting in this browser.
  clearKeys(SYNC_KEYS);
  saveJSON('auth', a);
  return a;
}

export async function login(username: string, password: string): Promise<AuthInfo> {
  const a = await call<AuthInfo>('/login', { method: 'POST', body: JSON.stringify({ username, password }) });
  // Wipe any local progress from a previous session, then load THIS user's.
  clearKeys(SYNC_KEYS);
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
  // Leave no personal progress on the device after logout.
  clearKeys(SYNC_KEYS);
}
