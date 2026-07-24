# BPSC AI OS — Your Personal AI Coach to Crack BPSC

An AI-powered, **bilingual (Hindi + English)**, **offline-first** study operating system for BPSC aspirants. Built on the principle that **AI is used only where generation or judgment is genuinely required** — everything else is deterministic code over high-quality, human-reviewable content.

> See [`docs/architecture-analysis.md`](docs/architecture-analysis.md) for the full breakdown of *what needs an AI agent vs. plain code vs. build-time content*.

---

## What's in this MVP (Phase 1)

| Area | Status | AI or code? |
|---|---|---|
| **Bilingual study material** (Polity ×6, History ×3, Geography ×1, Economy ×1, Science ×1, Bihar GK ×2) with chapter takeaways | ✅ | Build-time content |
| **Visual learning** — inline-SVG maps, infographics & timelines | ✅ | Build-time content (offline-safe) |
| **Read-aloud** (Hindi/English) | ✅ | Browser TTS (`speechSynthesis`) — no server voice |
| **PDF export** of any chapter | ✅ | Print-optimized CSS |
| **Daily Quiz** engine with instant explanations | ✅ | Deterministic selection over question bank |
| **Current Affairs** — digest + "news → exam material" generator | ✅ | Curated content + client-side AI (user's key) |
| **Mock Test** — real exam simulation | ✅ | Pure code |
| **"Report a mistake"** on every chapter | ✅ | Local store + pre-filled GitHub issue |
| **AI Mentor** chat with pluggable providers | ✅ | AI (user's own key) |
| **Smart Revision** — spaced repetition (1/3/7/15/30/60-day ladder) | ✅ | Pure code |
| **Performance Analytics** — Readiness Score, subject bars, weak-area plan | ✅ | Pure code |
| **Weak-area detection** with chapter-level improvement plan | ✅ | Pure code |
| Streaks, chapter completion, exam countdown | ✅ | Pure code |
| **PWA / installable / offline** | ✅ | Service worker |

### Mock Test — real exam simulation
Countdown **timer** (auto-submits at zero), **question palette** with answered / marked-for-review / current states, **mark-for-review** and **clear-response**, configurable **negative marking** (defaults to 0 — the real BPSC prelims pattern), and a detailed result screen with score, correct/wrong/skipped counts, **topic-wise breakdown** and full answer review with explanations.

### Pluggable AI providers
The AI Mentor works with the provider **you** choose in Settings — your API key is stored **only in your browser** (`localStorage`) and is sent directly to the provider, never to our servers:

- **Claude (Anthropic)**
- **OpenAI**
- **OpenAI-compatible API** (any `/v1/chat/completions` endpoint)
- **Google Gemini**
- **Vertex AI** (Google Cloud, via access token)
- **Local LLM** (Ollama / LM Studio — no key needed)

Models are listed in a dropdown, fetched **live** from the provider where the API allows (Anthropic, OpenAI-compatible, Gemini, Ollama), with static fallbacks otherwise.

### Voice
Uses the **browser's built-in Web Speech API** only — `speechSynthesis` for read-aloud and `SpeechRecognition` for voice input in the mentor. No third-party TTS/STT, zero server voice cost. (Availability depends on the browser; Chrome/Edge have the best support.)

---

## Tech stack

- **React 18 + TypeScript + Vite**
- **vite-plugin-pwa** (Workbox) for offline-first installability
- No backend required for the MVP — content ships with the app; AI calls go browser-direct to the user's chosen provider
- All progress (streaks, completion, quiz stats, settings) persists in `localStorage`

## Content model

Content is authored as **structured, bilingual data** (`src/content/`), not raw markdown — every string carries `{ en, hi }`, so the language toggle is instant and correct everywhere, and rendering to screen or PDF stays deterministic. Each chapter has: intro, sections (paragraphs / lists / tables / **timelines** / **figures** / psychology-based note-boxes), **mandatory takeaway notes**, and a tagged question bank.

### Learning design (why the content sticks)
Chapters are written for real aspirants, applying a few well-known learning principles:
- **Dual coding** — key facts are paired with a visual: inline-SVG **maps** (Bihar & neighbours, river system, ancient heritage centres), **infographics** (Preamble keywords, the six Fundamental Rights) and **timelines** (dynasties, court judgments). All SVG, so they're crisp, tiny, work offline and need no external images.
- **Memory hooks & mnemonics** — colour-coded note-boxes: 🧠 memory trick, 🎯 why it matters, 💡 analogy, 📖 story, ⚠️ exam trap.
- **Chunking & retrieval** — short labelled sections, then a per-chapter quiz, then takeaways for spaced revision.
- **Simple language** — plain Hindi/English a first-time learner can follow, with the exam angle made explicit.

Adding a chapter = add one typed file under `src/content/<subject>/` and register it in `src/content/syllabus.ts`. Adding a diagram = add one component to `src/components/figures/Figures.tsx` and reference it by id. No other code changes.

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
```

## Deployment

Ships as a static PWA behind nginx via a multi-stage `Dockerfile`, designed for **Coolify on a KVM VPS**. No backend, no database, no server-side secrets. See [`docs/deployment.md`](docs/deployment.md) for the full Coolify setup.

---

## Roadmap

- **Phase 1:** content + core code + AI mentor + mock engine + PWA. ✅
- **Phase 2 (started):** Current Affairs Intelligence. **Delivered client-side:** a curated, static-GK-linked digest (browse by category, PDF export) and the signature **"news → exam material"** generator that turns any pasted news item into a summary, background, static-GK link, key facts, MCQs and mains questions using the user's own AI provider. **Next (server-side):** the automated daily batch pipeline (source monitoring → dedup via embeddings → BPSC-relevance classifier → exam-content generation) with a **human review queue** before publishing, and auto-assembled daily/weekly/monthly magazines. That part needs a backend and is intentionally out of the current no-backend MVP.
- **Phase 3 (delivered):** Smart Revision (spaced-repetition interval ladder with recall grades), Performance Analytics with a transparent **Readiness Score** (0.4×coverage + 0.35×accuracy + 0.25×revision — deliberately *not* a guessed "selection probability"), subject-completion bars, and weak-area detection that maps weak topics to the exact chapters to revisit. *Next:* planner feedback loop, BPSC notification watcher.
- **Phase 4:** mains answer evaluation (OCR + rubric), interview coach (browser voice), predicted-questions batch job.

The reusable architecture means swapping the syllabus, PYQs and knowledge base retargets the same OS to UPSC, SSC, and other exams.
