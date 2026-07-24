// Captures the screenshots used by the user manual (public/user-manual/).
// Prereq: the app server running on SHOT_PORT (default 3120) with seeded data.
// Run: npx tsx server/scripts/screenshots.ts
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const PORT = Number(process.env.SHOT_PORT) || 3120;
const BASE = `http://localhost:${PORT}`;
const OUT = resolve(process.cwd(), 'public/user-manual/images');
mkdirSync(OUT, { recursive: true });

// Realistic user state so pages look alive in the manual.
const LOCAL_STATE: Record<string, unknown> = {
  lang: 'en',
  examDate: '2026-12-15',
  completedChapters: ['polity-ch01', 'polity-ch02', 'polity-ch03', 'history-ch01', 'bihar-ch01', 'geography-ch01'],
  studyDays: ['2026-07-18', '2026-07-19', '2026-07-20', '2026-07-21', '2026-07-22', '2026-07-23', '2026-07-24'],
  topicStats: {
    'polity-rights': { attempts: 12, correct: 5 },
    'polity-historical': { attempts: 10, correct: 9 },
    'bihar-general': { attempts: 8, correct: 7 },
    'geography-bihar': { attempts: 6, correct: 3 },
    'history-modern-india': { attempts: 5, correct: 4 },
    'mental-numerical': { attempts: 6, correct: 5 },
  },
  revision: {
    'polity-ch01': { stage: 1, due: '2026-07-22', reps: 2 },
    'bihar-ch01': { stage: 0, due: '2026-07-24', reps: 1 },
  },
};

async function main() {
  const browser = await chromium.launch({
    // Use the environment's pre-installed Chromium regardless of playwright version.
    executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.5 });
  await ctx.addInitScript((state: Record<string, unknown>) => {
    for (const [k, v] of Object.entries(state)) localStorage.setItem('bpscai.' + k, JSON.stringify(v));
  }, LOCAL_STATE);
  const page = await ctx.newPage();

  const shot = async (route: string, name: string, opts: { before?: () => Promise<void>; fullPage?: boolean } = {}) => {
    await page.goto(`${BASE}/${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);
    if (opts.before) await opts.before();
    await page.screenshot({ path: resolve(OUT, `${name}.png`), fullPage: opts.fullPage ?? false });
    console.log('✓', name);
  };

  await shot('', 'dashboard');
  await shot('#/learn', 'learn');
  await shot('#/chapter/polity-ch04', 'chapter', { fullPage: false });
  await shot('#/quiz', 'quiz', {
    before: async () => {
      await page.getByRole('button', { name: /start quiz/i }).click();
      await page.waitForTimeout(500);
    },
  });
  await shot('#/current-affairs', 'current-affairs');
  await shot('#/current-affairs', 'live-news', {
    before: async () => {
      await page.getByRole('button', { name: /live news/i }).click();
      await page.waitForTimeout(800);
    },
  });
  await shot('#/mock', 'mock');
  await shot('#/test-papers', 'test-papers', { fullPage: true });
  await shot('#/pyq', 'pyq');
  await shot('#/practice?topic=polity-rights', 'practice');
  await shot('#/revision', 'revision');
  await shot('#/analytics', 'analytics', { fullPage: true });
  await shot('#/mains', 'mains');
  await shot('#/interview', 'interview');
  await shot('#/mentor', 'mentor');
  await shot('#/question-bank', 'question-bank');
  await shot('#/settings', 'settings');

  // One shot in Hindi to show the bilingual toggle.
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'हिंदी' }).click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: resolve(OUT, 'dashboard-hindi.png') });
  console.log('✓ dashboard-hindi');

  await browser.close();
  console.log('All screenshots saved to', OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
