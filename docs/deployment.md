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

## Quick deploy on any KVM box (Docker, no Coolify)

```bash
git clone https://github.com/Premsh101/AgentLearning.git
cd AgentLearning
docker compose -f docker-compose.yml -f docker-compose.standalone.yml up -d --build
```

Open `http://<server-ip>:8080` (change the host port with `APP_PORT=9090 docker compose …`). Update after new commits: `git pull` + the same command. Stop: `docker compose down` (add `-v` to also wipe the question-bank volume).

> **Why two files?** `docker-compose.yml` deliberately publishes **no host port** so it is safe under Coolify (Traefik routes your domain straight to container port 3000 — publishing a host port there causes *"Bind for 0.0.0.0:8080 failed: port is already allocated"* when the port is taken). The `.standalone.yml` override adds the host-port mapping only for direct testing.

Or without compose:

```bash
docker build -t bpsc-ai-os .
docker run -d --name bpsc-ai-os -p 8080:3000 -v bpsc-data:/data --restart unless-stopped bpsc-ai-os
```

## Deploy with Coolify (recommended for a public HTTPS URL)

1. **New resource → Application → Public/Private Git Repository** → `https://github.com/Premsh101/AgentLearning`, branch `main`.
2. **Build Pack:** either works —
   - **Docker Compose** (Coolify auto-detects `docker-compose.yml`): the file publishes no host ports (Coolify-safe); make sure the service's **port is set to 3000** so Traefik routes your domain to it. The `bpsc-data` volume is created automatically.
   - **Dockerfile**: set **Port: 3000** and add a persistent volume at `/data` manually (step 4).
3. **Port:** `3000` (the Node server listens there; Coolify's Traefik proxy terminates HTTPS in front). Do **not** add extra host-port mappings — that causes "port is already allocated" errors on shared servers.
4. **Persistent storage:** add a volume mounted at **`/data`** (this holds `bpsc.db`; without it the question bank resets on each redeploy).
5. **Environment variables:** none required. Optional: `PORT` (defaults to 3000), `DATA_DIR` (defaults to `/data`), and **`ADMIN_TOKEN`** — set this to lock the content-mutating endpoints (scrape / import / approve-reject) behind a token. When set, enter the same token once in the app's **Question Bank** page; leave it unset for an open single-user deploy.
6. **Domain:** set your domain; Coolify issues a Let's Encrypt certificate. HTTPS is needed for PWA install/offline and the browser-voice features.
7. **Deploy.** Enable auto-deploy so each push to `main` rebuilds.

## Auto-deploy on merge to main

Two ways — pick one:

1. **GitHub Actions → Coolify webhook (included in this repo).** `.github/workflows/deploy.yml` calls your app's Coolify deploy webhook on every push to `main`. One-time setup: in Coolify open your app → **Webhooks** → copy the **Deploy Webhook** URL; create an API token under **Keys & Tokens** → API tokens; then in GitHub repo **Settings → Secrets and variables → Actions** add `COOLIFY_WEBHOOK` (the URL) and `COOLIFY_TOKEN` (the token). Every merge then redeploys automatically.
2. **Coolify's own Git webhook.** In your app → **Webhooks**, Coolify shows a GitHub webhook URL + secret; add them in the GitHub repo's **Settings → Webhooks** (push events). Apps created through Coolify's GitHub App source get this wired automatically — apps added as a plain public repo URL don't, which is why some of your projects auto-deploy and this one didn't.

## Reading the container logs (debugging a failed boot)

The container runs a wrapper entrypoint: if the server process ever exits, the container **stays alive** and the Logs tab shows full boot diagnostics, the error, and the exit code (the healthcheck goes unhealthy instead of crash-looping). For any startup problem: open the app's **Logs** tab and read the `[entrypoint]` / `[boot]` / `SERVER EXITED with code N` lines. Exit code **137 = out-of-memory kill** (add RAM or swap on the VPS); any other code prints the actual error just above it.

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
