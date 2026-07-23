import { useMemo, useState } from 'react';
import { useLang } from '../lib/i18n';
import { QUESTION_BANK } from '../content/syllabus';
import { QuizRunner } from '../components/QuizRunner';
import { weakTopics } from '../lib/analytics';
import { touchStudyDay } from '../lib/storage';
import type { Question } from '../content/types';

/** Deterministic daily-quiz selection (no AI): weak topics first, then a spread across the bank. */
function pickDaily(count: number): Question[] {
  const weak = new Set(weakTopics().slice(0, 2).map((w) => w.topic));
  const weakQs = QUESTION_BANK.filter((q) => weak.has(q.topic));
  const rest = QUESTION_BANK.filter((q) => !weak.has(q.topic));
  // rotate the pool by day so the same student sees variety day to day
  const day = Math.floor(Date.now() / 86400000);
  const rotate = <T,>(arr: T[]) => arr.map((_, i) => arr[(i + day) % arr.length]);
  const ordered = [...rotate(weakQs), ...rotate(rest)];
  const seen = new Set<string>();
  const out: Question[] = [];
  for (const q of ordered) {
    if (seen.has(q.id)) continue;
    seen.add(q.id);
    out.push(q);
    if (out.length >= count) break;
  }
  return out;
}

export function DailyQuiz() {
  const { t } = useLang();
  const [started, setStarted] = useState(false);
  const [nonce, setNonce] = useState(0);
  const questions = useMemo(() => pickDaily(10), [nonce]);

  return (
    <div>
      <h1>✅ {t('quiz.title')}</h1>
      <p className="subtitle">{t('quiz.desc')}</p>
      {!started ? (
        <button className="btn primary" onClick={() => setStarted(true)}>
          {t('quiz.start')}
        </button>
      ) : (
        <>
          <QuizRunner key={nonce} questions={questions} onDone={() => touchStudyDay()} />
          <div style={{ marginTop: 16 }}>
            <button
              className="btn"
              onClick={() => {
                setNonce((n) => n + 1);
                setStarted(true);
              }}
            >
              🔄 {t('quiz.retry')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
