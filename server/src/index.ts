import express from 'express';
import cors from 'cors';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { seedIfEmpty } from './db';
import { api } from './api';
import { startNewsScheduler } from './news';

// Crash visibility: if the process dies at boot, the container log says why.
process.on('uncaughtException', (e) => {
  console.error('[fatal] uncaughtException:', e);
  process.exit(1);
});
process.on('unhandledRejection', (e) => {
  console.error('[fatal] unhandledRejection:', e);
  process.exit(1);
});

console.log(`[boot] node=${process.version} cwd=${process.cwd()} PORT=${process.env.PORT ?? '(unset)'} DATA_DIR=${process.env.DATA_DIR ?? '(unset)'}`);

seedIfEmpty();
startNewsScheduler();

const app = express();
app.use(cors());
app.use(express.json({ limit: '4mb' }));

app.use('/api', api);

// Serve the built frontend (single-container deploy) with SPA fallback.
// Works both when run from source (tsx, cwd = repo root) and when run as the
// bundled server (node server-dist/index.mjs, cwd = /app).
const distCandidates = [process.env.DIST_DIR, resolve(process.cwd(), 'dist')].filter((p): p is string => !!p);
const distDir = distCandidates.find((p) => existsSync(p)) ?? distCandidates[distCandidates.length - 1];
console.log(`[boot] serving frontend from ${distDir} (exists: ${existsSync(distDir)})`);
if (existsSync(distDir)) {
  app.use(express.static(distDir));
  // Anything that isn't an /api route falls back to index.html (client routing).
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
    res.sendFile(resolve(distDir, 'index.html'));
  });
} else {
  console.warn('Frontend build not found at', distDir, '- run `npm run build` first. API is still served.');
}

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`BPSC AI OS server listening on http://0.0.0.0:${port}`);
});
