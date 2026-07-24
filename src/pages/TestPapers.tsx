import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';
import { api, type ApiBlueprint, type ApiPaper } from '../lib/api';
import { SUBJECTS } from '../content/syllabus';
import { RichText } from '../components/RichText';
import { recordAttempt } from '../lib/analytics';
import { touchStudyDay } from '../lib/storage';

type Phase = 'browse' | 'running' | 'result';

function fmt(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function TestPapers() {
  const { tb, lang } = useLang();
  const [phase, setPhase] = useState<Phase>('browse');
  const [blueprints, setBlueprints] = useState<ApiBlueprint[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [paper, setPaper] = useState<ApiPaper | null>(null);

  // runner state
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [review, setReview] = useState<Set<number>>(new Set());
  const [cur, setCur] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    api
      .blueprints()
      .then((r) => setBlueprints(r.blueprints))
      .catch((e) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  const start = async (blueprintId: string) => {
    setBusy(true);
    setError('');
    try {
      const { paper: p } = await api.generatePaper(blueprintId);
      setPaper(p);
      setAnswers({});
      setReview(new Set());
      setCur(0);
      setRemaining(p.durationMin * 60);
      setPhase('running');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const finish = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (paper) {
      paper.questions.forEach((q, i) => {
        if (answers[i] !== undefined) recordAttempt(q.topic, answers[i] === q.answer);
      });
      touchStudyDay();
    }
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

  const subjectName = (id: string) => SUBJECTS.find((s) => s.id === id)?.name ?? { en: id, hi: id };

  if (phase === 'browse') {
    return (
      <div>
        <h1>🗂️ {lang === 'hi' ? 'मॉडल टेस्ट पेपर' : 'Model Test Papers'}</h1>
        <p className="subtitle">
          {lang === 'hi'
            ? 'सर्वर के प्रश्न बैंक से ब्लूप्रिंट के अनुसार ताज़ा पेपर तैयार करें — वास्तविक परीक्षा सिमुलेशन।'
            : 'Generate a fresh paper from the server question bank to a blueprint — a real exam simulation.'}
        </p>

        {error && (
          <div className="card" style={{ marginBottom: 14, borderColor: 'var(--red)' }}>
            <p className="error-text" style={{ margin: 0 }}>⚠️ {error}</p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', margin: '6px 0 0' }}>
              {lang === 'hi'
                ? 'यह सुविधा बैकएंड सर्वर से जुड़ती है। सुनिश्चित करें कि सर्वर चल रहा है (एकल-कंटेनर परिनियोजन में यह स्वतः उपलब्ध है)।'
                : 'This feature talks to the backend server. Make sure the server is running (it is automatic in the single-container deployment).'}
            </p>
          </div>
        )}

        {!blueprints && !error && <p className="subtitle">{lang === 'hi' ? 'लोड हो रहा है…' : 'Loading…'}</p>}

        <div className="grid">
          {(blueprints ?? []).map((b) => (
            <div key={b.id} className="card">
              <h2 style={{ marginTop: 0 }}>{tb(b.title)}</h2>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                ⏱ {b.durationMin} {lang === 'hi' ? 'मिनट' : 'min'}
                {' · '}
                {b.sections.reduce((n, s) => n + s.count, 0)} {lang === 'hi' ? 'प्रश्न' : 'questions'}
                {b.negativeMarking > 0 && ` · −${b.negativeMarking}`}
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: 10 }}>
                {b.sections.map((s) => `${tb(subjectName(s.subjectId))} ${s.count}`).join(' · ')}
              </div>
              <button className="btn primary" onClick={() => start(b.id)} disabled={busy}>
                {busy ? '…' : `▶ ${lang === 'hi' ? 'पेपर तैयार करें व शुरू करें' : 'Generate & start'}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!paper) return null;

  if (phase === 'result') {
    let correct = 0;
    let wrong = 0;
    const perSubject: Record<string, { c: number; total: number }> = {};
    paper.questions.forEach((q, i) => {
      const ps = (perSubject[q.subjectId] ??= { c: 0, total: 0 });
      ps.total += 1;
      if (answers[i] === undefined) return;
      if (answers[i] === q.answer) { correct += 1; ps.c += 1; } else wrong += 1;
    });
    const score = correct - wrong * paper.negativeMarking;
    const max = paper.questions.length;
    const pct = Math.round((score / max) * 100);

    return (
      <div>
        <h1>📊 {lang === 'hi' ? 'परिणाम' : 'Result'} — {paper.title}</h1>
        <div className="stat-row">
          <div className="card stat"><div className="num">{score.toFixed(2)}</div><div className="lbl">{lang === 'hi' ? 'स्कोर' : 'Score'} / {max}</div></div>
          <div className="card stat"><div className="num" style={{ color: 'var(--green)' }}>{correct}</div><div className="lbl">{lang === 'hi' ? 'सही' : 'Correct'}</div></div>
          <div className="card stat"><div className="num" style={{ color: 'var(--red)' }}>{wrong}</div><div className="lbl">{lang === 'hi' ? 'गलत' : 'Wrong'}</div></div>
          <div className="card stat"><div className="num">{max - correct - wrong}</div><div className="lbl">{lang === 'hi' ? 'छोड़े' : 'Skipped'}</div></div>
          <div className="card stat"><div className="num">{pct}%</div><div className="lbl">%</div></div>
        </div>

        <h2>{lang === 'hi' ? 'विषयवार' : 'Subject-wise'}</h2>
        <div className="table-wrap">
          <table className="content-table">
            <thead><tr><th>{lang === 'hi' ? 'विषय' : 'Subject'}</th><th>{lang === 'hi' ? 'सही / कुल' : 'Correct / Total'}</th></tr></thead>
            <tbody>
              {Object.entries(perSubject).map(([sid, s]) => (
                <tr key={sid}><td>{tb(subjectName(sid))}</td><td>{s.c} / {s.total}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>{lang === 'hi' ? 'समीक्षा' : 'Review'}</h2>
        {paper.questions.map((q, i) => (
          <div className="card" key={q.id} style={{ marginBottom: 10 }}>
            <p style={{ fontWeight: 600, marginTop: 0 }}>{i + 1}. <RichText text={tb(q.question)} /></p>
            {q.options.map((opt, jdx) => {
              let cls = 'option';
              if (jdx === q.answer) cls += ' correct';
              else if (answers[i] === jdx) cls += ' wrong';
              return <div key={jdx} className={cls}><RichText text={tb(opt)} /></div>;
            })}
            {q.explanation.en && <div className="explanation"><RichText text={tb(q.explanation)} /></div>}
          </div>
        ))}
        <button className="btn primary" onClick={() => setPhase('browse')}>🔄 {lang === 'hi' ? 'नया पेपर' : 'New paper'}</button>
      </div>
    );
  }

  // running
  const q = paper.questions[cur];
  const low = remaining <= 60;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <h1 style={{ margin: 0 }}>🗂️ {paper.title}</h1>
        <div className={`timer ${low ? 'low' : ''}`}>⏳ {fmt(remaining)}</div>
      </div>

      <div className="palette">
        {paper.questions.map((_, i) => {
          let cls = '';
          if (review.has(i)) cls = 'review';
          else if (answers[i] !== undefined) cls = 'answered';
          if (i === cur) cls += ' current';
          return <button key={i} className={cls} onClick={() => setCur(i)}>{i + 1}</button>;
        })}
      </div>

      <div className="card">
        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: 6 }}>{cur + 1} / {paper.questions.length}</div>
        <p style={{ fontWeight: 600 }}><RichText text={tb(q.question)} /></p>
        {q.options.map((opt, jdx) => (
          <button key={jdx} className={`option ${answers[cur] === jdx ? 'selected' : ''}`} onClick={() => setAnswers({ ...answers, [cur]: jdx })}>
            <RichText text={tb(opt)} />
          </button>
        ))}
        <div className="toolbar" style={{ marginBottom: 0 }}>
          <button className="btn small" onClick={() => { const n = new Set(review); n.has(cur) ? n.delete(cur) : n.add(cur); setReview(n); }}>🚩 {lang === 'hi' ? 'समीक्षा' : 'Mark'}</button>
          <button className="btn small" onClick={() => { const n = { ...answers }; delete n[cur]; setAnswers(n); }}>{lang === 'hi' ? 'हटाएँ' : 'Clear'}</button>
          <button className="btn small" onClick={() => setCur((c) => Math.min(paper.questions.length - 1, c + 1))} disabled={cur >= paper.questions.length - 1}>{lang === 'hi' ? 'अगला' : 'Next'} →</button>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <button className="btn primary" onClick={finish}>{lang === 'hi' ? 'टेस्ट जमा करें' : 'Submit test'}</button>
      </div>
    </div>
  );
}
