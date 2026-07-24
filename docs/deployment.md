# Deploying BPSC AI OS on KVM with Coolify

This app is a **static, self-contained PWA** — the production build is plain HTML/CSS/JS with a service worker. There is no backend, no database, and no server-side secrets to manage (users enter their own AI key in the browser). That makes it very cheap and simple to host.

We deploy it as a Docker image (Node build → nginx serve) via **Coolify** running on a **KVM VPS**.

---

## What's in the repo for deployment

| File | Purpose |
|---|---|
| `Dockerfile` | Multi-stage build: `node:20-alpine` builds the PWA, `nginx:1.27-alpine` serves it on port **80**. |
| `nginx.conf` | SPA fallback, gzip, and PWA-aware caching (never cache `sw.js`/`index.html`; cache hashed `/assets/` for a year). |
| `.dockerignore` | Keeps `node_modules`, `dist`, `.git` etc. out of the build context. |

## Quick deploy on a KVM box (no Coolify needed — for testing)

If you just want it running to test, any KVM VPS with Docker works:

```bash
git clone https://github.com/Premsh101/AgentLearning.git
cd AgentLearning
docker compose up -d --build      # builds the image and starts nginx on :8080
```

Open `http://<server-ip>:8080`. To update after new commits: `git pull && docker compose up -d --build`. To stop: `docker compose down`.

Or without compose:

```bash
docker build -t bpsc-ai-os .
docker run -d --name bpsc-ai-os -p 8080:80 --restart unless-stopped bpsc-ai-os
```

> **PWA note:** installability and offline caching (the service worker) require **HTTPS** in production — but they also work on `http://localhost`, so plain HTTP on `:8080` is fine for testing. For a public URL, front it with a TLS-terminating reverse proxy (Coolify/Traefik below, or Caddy / Nginx Proxy Manager). No app config changes are needed — the app uses hash-based routing and serves under any domain.

## Requirements

- A KVM VPS (1 vCPU / 1 GB RAM is plenty for this static app; 2 GB recommended so image builds are comfortable).
- **Coolify** installed on the VPS. If it isn't yet:
  ```bash
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
  ```
  Then open `http://<server-ip>:8000` and finish the onboarding.
- A domain (or subdomain) pointing an **A record** at the server's IP — needed so Coolify can issue HTTPS (the PWA service worker only runs over HTTPS or `localhost`).

---

## One-time setup in Coolify

1. **Create a project** (e.g. `bpsc-ai-os`) and an environment (`production`).
2. **Add a resource → Application → Public/Private Git Repository.**
   - Repository: `https://github.com/Premsh101/AgentLearning`
   - Branch: `main`
   - **Build Pack: `Dockerfile`** (Coolify auto-detects the `Dockerfile` at the repo root).
3. **Port:** set the exposed/ports mapping to **80** (the container serves nginx on 80). Coolify's Traefik proxy sits in front and terminates HTTPS.
4. **Domain:** enter your domain (e.g. `https://bpsc.example.com`). Coolify requests a Let's Encrypt certificate automatically.
5. **Environment variables:** none required for the MVP. (AI provider keys are entered by each user in **Settings** and stored only in their browser.)
6. **Deploy.** Coolify clones the repo, builds the Dockerfile, and starts the container. The `HEALTHCHECK` in the Dockerfile lets Coolify mark it healthy once nginx responds.

## Continuous deployment

Enable Coolify's **automatic deployment / webhook** on the resource. After that, every push to `main` (each merged PR) triggers a rebuild and redeploy. No manual step.

---

## Verifying the deploy

After the first deploy, open your domain and check:

- The dashboard loads and the **EN / हिंदी** toggle switches the whole UI.
- **Install app** is offered by the browser (PWA), and the app still opens after going offline (service worker caching).
- A chapter opens with its figures, timeline and takeaways; **Export PDF** prints cleanly.
- **Settings → AI Provider** saves; the mentor answers once a provider/key is configured.

## Notes & troubleshooting

- **Service worker / HTTPS:** the PWA needs HTTPS in production. If install/offline don't work, confirm Coolify issued the TLS certificate and the site is served over `https://`.
- **Stateless:** no volumes or persistent storage are needed — all user progress lives in the browser's `localStorage`. Redeploys never lose user data because it was never on the server.
- **Updates rolling out:** `sw.js` and `index.html` are served with `no-cache`, so a new deploy reaches users on their next visit without a hard refresh.
- **Resource use:** the running container is just nginx serving static files — a few MB of RAM. You can host several such apps on a small KVM box.
- **Rollback:** use Coolify's deployment history to redeploy a previous build if a release regresses.
