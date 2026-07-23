import { useState } from 'react';
import type { Question } from '../content/types';
import { useLang } from '../lib/i18n';
import { RichText } from './RichText';
import { recordAttempt } from '../lib/analytics';

/** Interactive quiz with instant per-question feedback and explanations. */
export function QuizRunner({ questions, onDone }: { questions: Question[]; onDone?: (score: number) => void }) {
  const { t, tb } = useLang();
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[idx];

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === q.answer;
    if (correct) setScore((s) => s + 1);
    recordAttempt(q.topic, correct);
  };

  const next = () => {
    if (idx + 1 >= questions.length) {
      setFinished(true);
      onDone?.(score);
    } else {
      setIdx((n) => n + 1);
      setPicked(null);
    }
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>{t('common.score')}</h2>
        <div className="stat" style={{ margin: '10px 0' }}>
          <div className="num">
            {score} / {questions.length}
          </div>
          <div className="lbl">{pct}%</div>
        </div>
        <span className={`badge ${pct >= 60 ? 'green' : 'orange'}`}>{pct >= 60 ? '👍' : '📈'} {pct}%</span>
      </div>
    );
  }

  return (
    <div className="card">
      <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: 6 }}>
        {idx + 1} / {questions.length}
      </div>
      <p style={{ fontWeight: 600 }}>
        <RichText text={tb(q.question)} />
      </p>
      {q.options.map((opt, i) => {
        let cls = 'option';
        if (picked !== null) {
          if (i === q.answer) cls += ' correct';
          else if (i === picked) cls += ' wrong';
        }
        return (
          <button key={i} className={cls} onClick={() => choose(i)} disabled={picked !== null}>
            <RichText text={tb(opt)} />
          </button>
        );
      })}
      {picked !== null && (
        <>
          <div className="explanation">
            <strong>{picked === q.answer ? '✅ ' + t('quiz.correct') : '❌ ' + t('quiz.wrong')}</strong>
            <div style={{ marginTop: 6 }}>
              <strong>{t('quiz.explanation')}: </strong>
              <RichText text={tb(q.explanation)} />
            </div>
          </div>
          <div style={{ marginTop: 14, textAlign: 'right' }}>
            <button className="btn primary" onClick={next}>
              {idx + 1 >= questions.length ? t('quiz.finish') : t('common.next')} →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
