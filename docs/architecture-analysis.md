# BPSC AI Operating System — Architecture Analysis

**What actually needs an AI agent, what should be plain code, and what should be built as content during development.**

---

## TL;DR

The pitch describes 11 "agents" plus a CEO agent. In reality, only **4 runtime AI surfaces** are justified:

| # | AI surface | Shape |
|---|-----------|-------|
| 1 | **AI Mentor** (doubt-solving chat) | Single RAG chatbot with tool-calling — *not* an orchestrator of other agents |
| 2 | **Current Affairs Intelligence** | Daily **batch pipeline** (cron), run once and shared by all users |
| 3 | **Mains Answer Evaluation** | On-demand structured LLM call (vision/OCR + rubric prompt) |
| 4 | **Interview Coach** | Conversational voice agent (Phase 4, defer) |

Everything else — planner, spaced repetition, quizzes, weak-area detection, motivation, analytics, PYQ trends — is **deterministic code over well-prepared data**. And a large share of the product's value (syllabus, notes, flashcards, question bank, PYQ tagging) is **content created once during development**, not generated at runtime.

The correct mental model is not "a company of 12 agents." It is:

```
┌─────────────────────────────────────────────────────────┐
│  CONTENT LAYER (built during development, human-reviewed)│
│  syllabus tree · notes · flashcards · question bank ·    │
│  tagged PYQs · maps/infographics · Bihar GK               │
├─────────────────────────────────────────────────────────┤
│  DETERMINISTIC APP CORE (pure code)                       │
│  planner · spaced repetition (FSRS) · quiz selection ·    │
│  weak-area analytics · streaks/habits · dashboard         │
├─────────────────────────────────────────────────────────┤
│  AI LAYER (only where generation/judgment is unavoidable) │
│  mentor chat (RAG + tools) · daily CA batch pipeline ·    │
│  mains evaluation · interview coach (later)               │
└─────────────────────────────────────────────────────────┘
```

---

## Agent-by-agent verdict

### CEO Agent (orchestrator) — ❌ Not needed as an agent

An LLM "CEO" routing requests to 11 sub-agents adds latency, cost, and failure modes for zero user value. What the user actually touches is a chat box and app screens.

**Replace with:** one chat model given *tools* (function calling): `get_todays_plan()`, `get_due_revisions()`, `search_knowledge_base()`, `get_weak_topics()`, `generate_flashcards(topic)`. The app's normal navigation/routing is ordinary code. One model + tools gives you all the "coordination" the pitch describes.

### Agent 1 — Study Planner — 🟨 90% code, thin AI edge

Timetables, weekly/monthly roadmaps, adaptive rescheduling, catch-up, subject prioritization, exam countdown: all of this is a **constraint-scheduling algorithm**, and it *should* be deterministic — users need the plan to be explainable and stable, not creatively different each morning.

- Inputs: syllabus tree with per-topic effort estimates (build-time data), exam date, user's available hours, weak-area scores, revision-due queue.
- "Skip today → tomorrow adjusts" = re-run the scheduler with the backlog. Pure code.

**AI only for:** parsing free-text constraints ("I have a wedding next week, only mornings") into structured scheduler inputs, and optionally phrasing the plan conversationally. Both are cheap single calls inside the mentor chat.

### Agent 2 — Current Affairs Intelligence — ✅ Real AI, but a *batch pipeline*, not an interactive agent

This is the differentiator and genuinely needs LLMs — but the right shape is a **cron job**, not an agent:

```
scrapers/RSS (code) → dedup via embeddings (code + vector sim)
  → BPSC-relevance classifier (small/cheap model)
  → exam-content generation: summary, background, static-GK link,
    MCQs, mains Qs (LLM, structured output)
  → human review queue (editor approves/edits)   ← critical, see below
  → digest assembly + PDF export (code, templates)
  → publish to all users
```

Key economics: this runs **once per day for everyone**. Content is generated once and served to every user, so LLM cost does not scale with user count. Weekly/monthly magazines are code that reassembles the already-approved daily items into a template — no new generation.

**Add a human review step.** In exam prep, one hallucinated fact (wrong article number, wrong year) destroys trust permanently. Daily volume after relevance filtering is ~15–30 items — one editor can review in under an hour. This is the single most important quality decision in the product.

Theme-frequency tracking and "probable topics" = analytics over the accumulated tagged items (code), with an optional monthly LLM pass to write the narrative.

### Agent 3 — PYQ Intelligence — 🟦 Build-time data prep + code analytics

PYQs are a **fixed, finite corpus** (~30 years of papers). There is nothing to "learn" at runtime.

- **During development:** digitize all PYQs, tag each with topic/sub-topic/difficulty/year. Use an LLM to draft the tags, then human-verify. This is a one-time job.
- **At runtime:** "Constitution appeared 18 times, Very High Priority" is a `GROUP BY` query. Trends, weightage, repetition — all SQL/code over the tagged corpus.
- "Predicted questions" can be a periodic (monthly) LLM batch job, cached — never on-demand.

### Agent 4 — Notes Agent — 🟦 Mostly build-time content

The syllabus doesn't change between attempts. Notes, mind maps, tables, one-pagers, flashcards for the **static syllabus** should be created during development (AI-assisted authoring is fine), human-reviewed, and shipped as content — with images, graphs, infographics, and maps, exactly as you said. This gives you consistent quality and zero runtime cost.

**Runtime AI remains only for:** (a) notes on new current affairs — that's already the CA pipeline's output; (b) on-demand "summarize/re-explain this topic for me" — that's the mentor chat.

### Agent 5 — Quiz Generator — 🟨 Code selection over a pre-built bank

Build a large tagged **question bank during development** (MCQ, statement-based, match, assertion-reason — AI-drafted, human-verified, tagged by topic/difficulty). The "daily quiz" is then a **selection algorithm** (pure code): X questions from today's topics, Y from weak areas, Z from revision-due topics, W from yesterday's current affairs.

Fresh generation is needed only for new current affairs questions — and the CA pipeline already produces those. Do **not** generate quiz questions per-user per-day with an LLM: it's expensive, unverifiable, and duplicates the bank.

### Agent 6 — Smart Revision — ❌ 100% code

Spaced repetition is a solved algorithm. Use **FSRS** (better than the naive 1/3/7/15/30/60 fixed ladder — it adapts intervals per-card from the user's actual recall). No AI anywhere in this feature.

### Agent 7 — Weak Area Detection — ❌ 100% code

Accuracy, speed, skips, wrong-answer patterns per topic = analytics queries over attempt logs. The "improvement plan" = those scores feeding back into the planner's prioritization weights (code). Optional cheap LLM call to phrase the weekly insight in friendly language — cosmetic, not core.

### Agent 8 — Mains Answer Evaluation — ✅ Real AI

Genuinely needs an LLM: judging structure, flow, keyword coverage against a rubric is generation/judgment work. Shape: one **structured, on-demand call** — vision model (or OCR + text model) for handwritten uploads, a fixed BPSC rubric in the prompt, structured output (per-dimension scores, suggestions, model answer). Not an "agent," a well-prompted endpoint. Calibrate the rubric against real topper answer copies. Phase 4 is the right slot.

### Agent 9 — Interview Coach — ✅ Real AI (defer)

Mock interviews with voice are a legitimate conversational agent (STT → LLM with persona/DAF context → TTS). This is the only feature besides the mentor that is truly "agentic." It's also the most expensive per-session — correctly parked in Phase 4.

### Agent 10 — Motivation & Habit — ❌ Code + templates

Streaks, hours, missed targets, consistency = event tracking. Burnout detection = threshold rules (declining accuracy + rising skips + falling hours). Daily motivation = a curated template library with personalization variables; an LLM adds nothing a good copywriter can't pre-write. At most, one cheap weekly LLM call to write the personalized weekly review narrative.

### Agent 11 — Performance Analytics — ❌ 100% code

Dashboard = queries + charts. One warning: **"Estimated Selection Probability" is a number you cannot honestly compute** and it invites both false hope and despair. Replace with a transparent **Readiness Score** — a visible formula over syllabus coverage %, accuracy, revision compliance, and mock percentile — so students see exactly what moves it.

---

## What this buys you

| Metric | 12-agent design | This design |
|---|---|---|
| Runtime LLM surfaces | 12+ | 3 (+1 in Phase 4) |
| Per-user marginal AI cost | High (agents per user per day) | Near-zero (chat only; CA is shared batch) |
| Debuggability | Agent-to-agent failures | Deterministic core + isolated AI endpoints |
| Content quality | Generated on the fly, unreviewed | Human-reviewed, versioned |
| Offline capability | Impossible | Content + SRS + quiz bank work offline |

---

## Revised MVP roadmap

- **Phase 1 — Content + core code:** auth, syllabus tree, study-material authoring (notes/images/maps/infographics), tagged PYQ corpus, question bank, deterministic planner, FSRS revision engine, quiz selection. *One* AI feature: mentor chat with RAG over the content.
- **Phase 2 — The differentiator:** Current Affairs batch pipeline + human review queue + daily/weekly/monthly digests + PDF export.
- **Phase 3 — Analytics loop:** dashboard, weak-area detection, readiness score, planner feedback loop, habit/streak tracking.
- **Phase 4 — Judgment AI:** mains evaluation (OCR + rubric), interview coach (voice), predicted-questions batch job.

---

## Capabilities worth adding (not in the original idea)

1. **Hindi / bilingual everything.** The majority of BPSC aspirants are Hindi-medium. English-only kills the product; bilingual content is a bigger differentiator than any single agent. Bake it into the content schema from day one (`text_hi`, `text_en`), don't retrofit.
2. **Human review queue + "report a mistake" loop.** Editor approval for all AI-generated CA content; a one-tap error report on every note/question, feeding a correction workflow. Trust is the product.
3. **WhatsApp/Telegram delivery** of the daily current-affairs digest and revision reminders. Meets Bihar students where they already are; dramatically cheaper user activation than pushing app opens.
4. **Offline-first PWA + PDF exports.** Low-connectivity usage is the norm for much of the audience. The content layer + SRS + quiz bank can all work offline; only chat and CA sync need network.
5. **BPSC notification watcher** (pure code): scrape the BPSC site for official notices, exam date changes, syllabus updates → push alert. Cheap to build, high perceived value.
6. **FSRS over fixed intervals** (noted above) — measurably better retention for the same study time.
7. **Content versioning tied to syllabus changes**, so when BPSC revises the pattern (as it did recently), you can re-map material instead of rewriting.
8. **Mock-test engine with real exam simulation** (timer, OMR-style UI, negative marking, percentile vs. other users) — pure code, and the single strongest retention feature in this category.
9. **Answer-copy OCR tuned for handwriting** (for mains eval) — test early with real handwritten samples; this is the risky part of Phase 4, not the rubric.
10. **Cost guardrails:** per-user daily token budget on the mentor chat, cached embeddings, small model for CA relevance classification, big model only for content generation. Keeps unit economics viable at scale.
