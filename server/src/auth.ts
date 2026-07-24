import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';
import { db } from './db';

/**
 * Simple accounts + server-side progress storage (per user request: simple,
 * no tight security for now — but passwords are still properly hashed with
 * scrypt and sessions are random tokens; no plaintext anywhere).
 * Data lives in the same SQLite database on the /data volume.
 */

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS user_state (
    user_id TEXT PRIMARY KEY,
    state TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

function hash(password: string, salt: string): string {
  return scryptSync(password, salt, 64).toString('hex');
}

export function userForToken(token: string | undefined): { id: string; username: string } | null {
  if (!token) return null;
  const row = db
    .prepare(
      `SELECT u.id, u.username FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?`
    )
    .get(token) as { id: string; username: string } | undefined;
  return row ?? null;
}

function bearer(req: Request): string | undefined {
  const h = req.header('authorization');
  if (h?.startsWith('Bearer ')) return h.slice(7);
  return undefined;
}

export interface AuthedRequest extends Request {
  user?: { id: string; username: string };
}

export function requireUser(req: AuthedRequest, res: Response, next: NextFunction): void {
  const user = userForToken(bearer(req));
  if (!user) {
    res.status(401).json({ error: 'Login required.' });
    return;
  }
  req.user = user;
  next();
}

export const auth = Router();

const wrap = (fn: (req: AuthedRequest, res: Response) => void) => (req: Request, res: Response) => {
  try {
    fn(req as AuthedRequest, res);
  } catch (e) {
    res.status(500).json({ error: e instanceof Error ? e.message : String(e) });
  }
};

function createSession(userId: string): string {
  const token = randomUUID() + randomBytes(16).toString('hex');
  db.prepare('INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)').run(
    token,
    userId,
    new Date().toISOString()
  );
  return token;
}

auth.post(
  '/register',
  wrap((req, res) => {
    const username = String(req.body?.username ?? '').trim();
    const password = String(req.body?.password ?? '');
    if (username.length < 3 || username.length > 40) {
      res.status(400).json({ error: 'Username must be 3–40 characters.' });
      return;
    }
    if (password.length < 4) {
      res.status(400).json({ error: 'Password must be at least 4 characters.' });
      return;
    }
    const exists = db.prepare('SELECT 1 FROM users WHERE username = ?').get(username);
    if (exists) {
      res.status(409).json({ error: 'Username already taken.' });
      return;
    }
    const id = randomUUID();
    const salt = randomBytes(16).toString('hex');
    db.prepare('INSERT INTO users (id, username, password_hash, salt, created_at) VALUES (?, ?, ?, ?, ?)').run(
      id,
      username,
      hash(password, salt),
      salt,
      new Date().toISOString()
    );
    res.json({ token: createSession(id), username });
  })
);

auth.post(
  '/login',
  wrap((req, res) => {
    const username = String(req.body?.username ?? '').trim();
    const password = String(req.body?.password ?? '');
    const row = db.prepare('SELECT id, username, password_hash, salt FROM users WHERE username = ?').get(username) as
      | { id: string; username: string; password_hash: string; salt: string }
      | undefined;
    if (!row) {
      res.status(401).json({ error: 'Invalid username or password.' });
      return;
    }
    const candidate = Buffer.from(hash(password, row.salt), 'hex');
    const actual = Buffer.from(row.password_hash, 'hex');
    if (candidate.length !== actual.length || !timingSafeEqual(candidate, actual)) {
      res.status(401).json({ error: 'Invalid username or password.' });
      return;
    }
    res.json({ token: createSession(row.id), username: row.username });
  })
);

auth.post(
  '/logout',
  wrap((req, res) => {
    const token = bearer(req);
    if (token) db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
    res.json({ ok: true });
  })
);

auth.get(
  '/me',
  wrap((req, res) => {
    const user = userForToken(bearer(req));
    if (!user) {
      res.status(401).json({ error: 'Not logged in.' });
      return;
    }
    res.json({ username: user.username });
  })
);

// ---- Per-user progress state (whole-blob sync; simple and robust) ----

auth.get('/state', requireUser, ((req: AuthedRequest, res: Response) => {
  const row = db.prepare('SELECT state, updated_at FROM user_state WHERE user_id = ?').get(req.user!.id) as
    | { state: string; updated_at: string }
    | undefined;
  res.json({ state: row ? JSON.parse(row.state) : null, updatedAt: row?.updated_at ?? null });
}) as (req: Request, res: Response) => void);

auth.put('/state', requireUser, ((req: AuthedRequest, res: Response) => {
  const state = req.body?.state;
  if (typeof state !== 'object' || state === null) {
    res.status(400).json({ error: 'Body must be { state: object }.' });
    return;
  }
  const json = JSON.stringify(state);
  if (json.length > 1_000_000) {
    res.status(413).json({ error: 'State too large.' });
    return;
  }
  db.prepare(
    `INSERT INTO user_state (user_id, state, updated_at) VALUES (?, ?, ?)
     ON CONFLICT(user_id) DO UPDATE SET state = excluded.state, updated_at = excluded.updated_at`
  ).run(req.user!.id, json, new Date().toISOString());
  res.json({ ok: true });
}) as (req: Request, res: Response) => void);
