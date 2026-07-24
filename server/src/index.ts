import express from 'express';
import cors from 'cors';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { seedIfEmpty } from './db';
import { api } from './api';

const __dirname = dirname(fileURLToPath(import.meta.url));

seedIfEmpty();

const app = express();
app.use(cors());
app.use(express.json({ limit: '4mb' }));

app.use('/api', api);

// Serve the built frontend (single-container deploy) with SPA fallback.
const distDir = resolve(__dirname, '../../dist');
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
