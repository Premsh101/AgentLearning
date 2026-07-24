# Deploying BPSC AI OS on KVM with Coolify

The app now ships as **one container**: a small Node server that serves the built frontend **and** the API (question bank, PYQ intelligence, scraper, model-test-paper generator). Data lives in a **SQLite file** on a mounted volume — no separate database service. That keeps a Coolify deploy about as simple as a backend app gets: **one service + one persistent volume**.

```
┌───────────────────────────────────────────────┐
│  Container (Node 20)                            │
│   • serves the PWA (built dist/)                │
│   • serves /api/*  (Express)                    │
│   • SQLite question bank at /data/bpsc.db  ◄── volume
└───────────────────────────────────────────────┘
```

## Quick deploy on any KVM box (Docker)

```bash
git clone https://github.com/Premsh101/AgentLearning.git
cd AgentLearning
docker compose up -d --build      # builds + starts on :8080, with a persistent volume
```

Open `http://<server-ip>:8080`. Update after new commits: `git pull && docker compose up -d --build`. Stop: `docker compose down` (add `-v` to also wipe the question-bank volume).

Or without compose:

```bash
docker build -t bpsc-ai-os .
docker run -d --name bpsc-ai-os -p 8080:3000 -v bpsc-data:/data --restart unless-stopped bpsc-ai-os
```

## Deploy with Coolify (recommended for a public HTTPS URL)

1. **New resource → Application → Public/Private Git Repository** → `https://github.com/Premsh101/AgentLearning`, branch `main`.
2. **Build Pack: `Dockerfile`** (auto-detected at the repo root).
3. **Port:** `3000` (the Node server listens there; Coolify's Traefik proxy terminates HTTPS in front).
4. **Persistent storage:** add a volume mounted at **`/data`** (this holds `bpsc.db`; without it the question bank resets on each redeploy).
5. **Environment variables:** none required. Optional: `PORT` (defaults to 3000), `DATA_DIR` (defaults to `/data`).
6. **Domain:** set your domain; Coolify issues a Let's Encrypt certificate. HTTPS is needed for PWA install/offline and the browser-voice features.
7. **Deploy.** Enable auto-deploy so each push to `main` rebuilds.

## What runs where

- **Static content, quizzes, spaced-repetition, analytics, AI mentor/mains/interview** — all in the browser (AI calls go browser-direct to the user's own provider key; nothing server-side).
- **Question bank, PYQ stats, scraper, model test papers** — the Node/SQLite backend. Seeded on first boot from the app's own content (~210 questions).

## Populating the question bank

- **Seed:** on first run the DB is auto-seeded from `server/seed/questions.json` (generated from the chapters' question banks).
- **Import (trusted):** `POST /api/questions/import` with a JSON array of questions → added as `approved`.
- **Scrape (needs review):** `POST /api/scrape` with `{ "source": "json-endpoint", "url": "…" }` (or the built-in `sample-bihar-pyq` source) ingests questions as **`pending`**. Review them, then approve: `POST /api/questions/:id/approve`. Only `approved` questions appear in quizzes and generated papers — a deliberate guard so unverified scraped text is never shown as fact.

> **On scraping:** the scraper is a pluggable framework. The safest, most reliable source is a JSON endpoint you control (`json-endpoint`). HTML-scraping a third-party site is brittle and may raise copyright issues, so treat auto-scraped questions as drafts to review, not ground truth.

## Notes

- **Persistence:** everything worth keeping is in `/data`. Redeploys keep the volume; user progress (streaks, quiz stats, revision, settings, API keys) lives in the browser's `localStorage`.
- **Native module:** the backend uses `better-sqlite3`; the multi-stage Dockerfile builds it on the full `node:20` image and copies it into the slim runtime (same Debian base → compatible).
- **Rollback:** use Coolify's deployment history.
