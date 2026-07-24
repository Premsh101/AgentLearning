import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { api, type ApiQuestion } from '../lib/api';
import { SUBJECTS, TOPIC_LABELS } from '../content/syllabus';
import type { Question } from '../content/types';
import { QuizRunner } from '../components/QuizRunner';
import { touchStudyDay } from '../lib/storage';

/** Map a server question to the app's Question shape used by the quiz engine. */
function toQuestion(a: ApiQuestion): Question {
  return {
    id: a.id,
    type: a.type === 'statement' ? 'statement' : 'mcq',
    question: a.question,
    options: a.options,
    answer: a.answer,
    explanation: a.explanation,
    topic: a.topic,
    difficulty: (a.difficulty === 1 || a.difficulty === 2 || a.difficulty === 3 ? a.difficulty : 2) as 1 | 2 | 3,
  };
}

export function Practice() {
  const { lang, tb } = useLang();
  const [params] = useSearchParams();
  const topic = params.get('topic') || undefined;
  const subject = params.get('subject') || undefined;

  const [questions, setQuestions] = useState<ApiQuestion[] | null>(null);
  const [error, setError] = useState('');
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    setQuestions(null);
    setError('');
    api
      .questions({ topic, subject, limit: 15 })
      .then((r) => setQuestions(r.questions))
      .catch((e) => setError(e instanceof Error ? e.message : String(e)));
  }, [topic, subject, nonce]);

  const label = useMemo(() => {
    if (topic) return TOPIC_LABELS[topic] ? tb(TOPIC_LABELS[topic]) : topic;
    if (subject) { const s = SUBJECTS.find((x) => x.id === subject); return s ? tb(s.name) : subject; }
    return lang === 'hi' ? 'प्रश्न बैंक' : 'Question bank';
  }, [topic, subject, lang, tb]);

  const mapped = useMemo(() => (questions ?? []).map(toQuestion), [questions]);

  return (
    <div>
      <h1>✏️ {lang === 'hi' ? 'बैंक अभ्यास' : 'Bank Practice'} — {label}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'सर्वर प्रश्न बैंक से इस विषय पर प्रश्न — जितना चाहें अभ्यास करें।'
          : 'Questions on this topic from the server question bank — practise as much as you like.'}
      </p>

      {error && (
        <div className="card" style={{ borderColor: 'var(--red)' }}>
          <p className="error-text" style={{ margin: 0 }}>⚠️ {error}</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', margin: '6px 0 0' }}>
            {lang === 'hi' ? 'यह सुविधा बैकएंड सर्वर से जुड़ती है।' : 'This feature needs the backend server.'}
          </p>
          <Link to="/pyq" className="btn" style={{ marginTop: 10 }}>← PYQ</Link>
        </div>
      )}

      {!error && !questions && <p className="subtitle">{lang === 'hi' ? 'लोड हो रहा है…' : 'Loading…'}</p>}

      {!error && questions && questions.length === 0 && (
        <div className="card">
          <p style={{ margin: 0 }}>{lang === 'hi' ? 'इस विषय पर बैंक में अभी प्रश्न नहीं हैं।' : 'No questions in the bank for this topic yet.'}</p>
          <Link to="/pyq" className="btn" style={{ marginTop: 10 }}>← PYQ</Link>
        </div>
      )}

      {!error && questions && questions.length > 0 && (
        <>
          <QuizRunner key={nonce} questions={mapped} onDone={() => touchStudyDay()} />
          <div style={{ marginTop: 16 }}>
            <button className="btn" onClick={() => setNonce((n) => n + 1)}>🔄 {lang === 'hi' ? 'फिर से' : 'Fresh set'}</button>
          </div>
        </>
      )}
    </div>
  );
}
