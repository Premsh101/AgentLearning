import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';
import { QUESTION_BANK, TOPIC_LABELS } from '../content/syllabus';
import type { Question } from '../content/types';
import { RichText } from '../components/RichText';
import { recordAttempt } from '../lib/analytics';
import { touchStudyDay } from '../lib/storage';

type Phase = 'setup' | 'running' | 'result';

interface Config {
  count: number;
  minutes: number;
  negative: number;
}

function shuffle<T>(arr: T[], seed: number): T[] {
  // deterministic LCG shuffle so a session is stable across re-renders
  const a = [...arr];
  let s = seed || 1;
  const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function MockTest() {
  const { t, tb, lang } = useLang();
  const [phase, setPhase] = useState<Phase>('setup');
  const [cfg, setCfg] = useState<Config>({ count: 10, minutes: 12, negative: 0 });
  const [seed, setSeed] = useState(1);

  const questions = useMemo<Question[]>(
    () => shuffle(QUESTION_BANK, seed).slice(0, Math.min(cfg.count, QUESTION_BANK.length)),
    [cfg.count, seed]
  );

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [review, setReview] = useState<Set<number>>(new Set());
  const [cur, setCur] = useState(0);
  const [remaining, setRemaining] = useState(cfg.minutes * 60);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    setSeed(Math.floor(Date.now() / 1000) % 100000 || 1);
    setAnswers({});
    setReview(new Set());
    setCur(0);
    setRemaining(cfg.minutes * 60);
    setPhase('running');
  };

  const finish = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    questions.forEach((q, i) => {
      if (answers[i] !== undefined) recordAttempt(q.topic, answers[i] === q.answer);
    });
    touchStudyDay();
    setPhase('result');
  };

  useEffect(() => {
    if (phase !== 'running') return;
    timerRef.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(timerRef.current!);
          finish();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === 'setup') {
    return (
      <div>
        <h1>⏱️ {t('mock.title')}</h1>
        <p className="subtitle">{t('mock.desc')}</p>
        <div className="card" style={{ maxWidth: 460 }}>
          <div className="field">
            <label>{t('mock.questions')}</label>
            <select value={cfg.count} onChange={(e) => setCfg({ ...cfg, count: +e.target.value })}>
              {[10, 15, 20, 25].map((n) => (
                <option key={n} value={n} disabled={n > QUESTION_BANK.length}>
                  {n} {n > QUESTION_BANK.length ? `(${t('common.comingSoon')})` : ''}
                </option>
              ))}
            </select>
            <div className="hint">
              {lang === 'hi' ? `प्रश्न बैंक में अभी ${QUESTION_BANK.length} प्रश्न हैं।` : `${QUESTION_BANK.length} questions in the bank so far.`}
            </div>
          </div>
          <div className="field">
            <label>{t('mock.minutes')}</label>
            <select value={cfg.minutes} onChange={(e) => setCfg({ ...cfg, minutes: +e.target.value })}>
              {[5, 10, 12, 15, 20, 30].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>{t('mock.negative')}</label>
            <select value={cfg.negative} onChange={(e) => setCfg({ ...cfg, negative: +e.target.value })}>
              {[0, 0.25, 0.33, 0.5, 1].map((n) => (
                <option key={n} value={n}>
                  {n === 0 ? (lang === 'hi' ? 'कोई नहीं (0)' : 'None (0)') : `- ${n}`}
                </option>
              ))}
            </select>
            <div className="hint">{t('mock.negativeNote')}</div>
          </div>
          <button className="btn primary" onClick={start}>
            {t('mock.start')} →
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'result') {
    let correct = 0;
    let wrong = 0;
    const perTopic: Record<string, { c: number; total: number }> = {};
    questions.forEach((q, i) => {
      const pt = (perTopic[q.topic] ??= { c: 0, total: 0 });
      pt.total += 1;
      if (answers[i] === undefined) return;
      if (answers[i] === q.answer) {
        correct += 1;
        pt.c += 1;
      } else wrong += 1;
    });
    const score = correct - wrong * cfg.negative;
    const maxScore = questions.length;
    const pct = Math.round((score / maxScore) * 100);

    return (
      <div>
        <h1>📊 {t('mock.result')}</h1>
        <div className="stat-row">
          <div className="card stat">
            <div className="num">{score.toFixed(2)}</div>
            <div className="lbl">
              {t('common.score')} / {maxScore}
            </div>
          </div>
          <div className="card stat">
            <div className="num" style={{ color: 'var(--green)' }}>
              {correct}
            </div>
            <div className="lbl">{lang === 'hi' ? 'सही' : 'Correct'}</div>
          </div>
          <div className="card stat">
            <div className="num" style={{ color: 'var(--red)' }}>
              {wrong}
            </div>
            <div className="lbl">{lang === 'hi' ? 'गलत' : 'Wrong'}</div>
          </div>
          <div className="card stat">
            <div className="num">{questions.length - correct - wrong}</div>
            <div className="lbl">{lang === 'hi' ? 'छोड़े गए' : 'Skipped'}</div>
          </div>
        </div>

        <div className="card">
          <span className={`badge ${pct >= 60 ? 'green' : 'orange'}`}>{pct}%</span>
        </div>

        <h2>{t('mock.topicWise')}</h2>
        <div className="table-wrap">
          <table className="content-table">
            <thead>
              <tr>
                <th>{lang === 'hi' ? 'विषय' : 'Topic'}</th>
                <th>{lang === 'hi' ? 'सही / कुल' : 'Correct / Total'}</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(perTopic).map(([topic, s]) => (
                <tr key={topic}>
                  <td>{TOPIC_LABELS[topic] ? tb(TOPIC_LABELS[topic]) : topic}</td>
                  <td>
                    {s.c} / {s.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>{lang === 'hi' ? 'समीक्षा' : 'Answer review'}</h2>
        {questions.map((q, i) => (
          <div className="card" key={q.id} style={{ marginBottom: 10 }}>
            <p style={{ fontWeight: 600, marginTop: 0 }}>
              {i + 1}. <RichText text={tb(q.question)} />
            </p>
            {q.options.map((opt, j) => {
              let cls = 'option';
              if (j === q.answer) cls += ' correct';
              else if (answers[i] === j) cls += ' wrong';
              return (
                <div key={j} className={cls}>
                  <RichText text={tb(opt)} />
                </div>
              );
            })}
            <div className="explanation">
              <RichText text={tb(q.explanation)} />
            </div>
          </div>
        ))}

        <button className="btn primary" onClick={() => setPhase('setup')}>
          🔄 {lang === 'hi' ? 'नया टेस्ट' : 'New test'}
        </button>
      </div>
    );
  }

  // running
  const q = questions[cur];
  const low = remaining <= 30;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <h1 style={{ margin: 0 }}>⏱️ {t('mock.title')}</h1>
        <div className={`timer ${low ? 'low' : ''}`}>⏳ {fmt(remaining)}</div>
      </div>

      <div className="palette">
        {questions.map((_, i) => {
          let cls = '';
          if (review.has(i)) cls = 'review';
          else if (answers[i] !== undefined) cls = 'answered';
          if (i === cur) cls += ' current';
          return (
            <button key={i} className={cls} onClick={() => setCur(i)}>
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="card">
        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: 6 }}>
          {cur + 1} / {questions.length}
        </div>
        <p style={{ fontWeight: 600 }}>
          <RichText text={tb(q.question)} />
        </p>
        {q.options.map((opt, j) => (
          <button
            key={j}
            className={`option ${answers[cur] === j ? 'selected' : ''}`}
            onClick={() => setAnswers({ ...answers, [cur]: j })}
          >
            <RichText text={tb(opt)} />
          </button>
        ))}
        <div className="toolbar" style={{ marginBottom: 0 }}>
          <button
            className="btn small"
            onClick={() => {
              const nx = new Set(review);
              nx.has(cur) ? nx.delete(cur) : nx.add(cur);
              setReview(nx);
            }}
          >
            🚩 {t('mock.markReview')}
          </button>
          <button
            className="btn small"
            onClick={() => {
              const nx = { ...answers };
              delete nx[cur];
              setAnswers(nx);
            }}
          >
            {t('mock.clear')}
          </button>
          <button className="btn small" onClick={() => setCur((c) => Math.min(questions.length - 1, c + 1))} disabled={cur >= questions.length - 1}>
            {t('common.next')} →
          </button>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <button className="btn primary" onClick={finish}>
          {t('mock.submitTest')}
        </button>
      </div>
    </div>
  );
}
