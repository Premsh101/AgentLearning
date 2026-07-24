import { Router } from 'express';
import type { Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { db } from './db';
import { requireUser, userForToken, type AuthedRequest } from './auth';

/**
 * User-uploaded study maps (images). Stored per user as blobs in SQLite on
 * the /data volume, so they follow the account across devices like the rest
 * of the synced state. Images are sent as data URLs (JSON, ≤4MB body limit).
 */

db.exec(`
  CREATE TABLE IF NOT EXISTS user_maps (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    mime TEXT NOT NULL,
    data BLOB NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_user_maps_user ON user_maps(user_id);
`);

export const userMaps = Router();

userMaps.get('/', requireUser, ((req: AuthedRequest, res: Response) => {
  const rows = db
    .prepare(`SELECT id, title, mime, length(data) AS size, created_at FROM user_maps WHERE user_id = ? ORDER BY created_at DESC`)
    .all(req.user!.id);
  res.json({ maps: rows });
}) as never);

userMaps.post('/', requireUser, ((req: AuthedRequest, res: Response) => {
  const { title, dataUrl } = (req.body ?? {}) as { title?: string; dataUrl?: string };
  const m = /^data:(image\/(?:png|jpeg|webp|gif|svg\+xml));base64,(.+)$/.exec(dataUrl ?? '');
  if (!m) {
    res.status(400).json({ error: 'dataUrl must be a base64 image data URL (png/jpeg/webp/gif/svg).' });
    return;
  }
  const buf = Buffer.from(m[2], 'base64');
  if (buf.length > 3 * 1024 * 1024) {
    res.status(413).json({ error: 'Image too large (max 3 MB).' });
    return;
  }
  const id = randomUUID();
  db.prepare(`INSERT INTO user_maps (id, user_id, title, mime, data, created_at) VALUES (?, ?, ?, ?, ?, ?)`).run(
    id,
    req.user!.id,
    (title || 'My map').slice(0, 120),
    m[1],
    buf,
    new Date().toISOString()
  );
  res.json({ id });
}) as never);

// <img> tags can't send an Authorization header, so the image endpoint
// accepts the session token as a query parameter instead.
userMaps.get('/:id/image', ((req: Request, res: Response) => {
  const user = userForToken((req.query.token as string) || undefined);
  if (!user) {
    res.status(401).json({ error: 'Login required.' });
    return;
  }
  const row = db
    .prepare(`SELECT mime, data FROM user_maps WHERE id = ? AND user_id = ?`)
    .get(req.params.id, user.id) as { mime: string; data: Buffer } | undefined;
  if (!row) {
    res.status(404).json({ error: 'Not found.' });
    return;
  }
  res.setHeader('content-type', row.mime);
  res.setHeader('cache-control', 'private, max-age=3600');
  res.send(row.data);
}) as never);

userMaps.delete('/:id', requireUser, ((req: AuthedRequest, res: Response) => {
  db.prepare(`DELETE FROM user_maps WHERE id = ? AND user_id = ?`).run(req.params.id, req.user!.id);
  res.json({ ok: true });
}) as never);
