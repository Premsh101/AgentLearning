import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { SUBJECTS, TOPIC_LABELS, chaptersForTopic, CHAPTERS } from '../content/syllabus';
import { PYQS, TOTAL_PYQS, subjectWeightage, topicFrequency } from '../content/pyqs';
import { api, type PyqStats } from '../lib/api';

export function PYQ() {
  const { lang, tb } = useLang();
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [live, setLive] = useState<PyqStats | null>(null);
  const [years, setYears] = useState<{ year: number; count: number }[]>([]);

  // Prefer live stats computed over the real (growing) question bank; fall back
  // to the bundled sample dataset when the backend isn't reachable (offline).
  useEffect(() => {
    api.pyqStats().then(setLive).catch(() => setLive(null));
    api.pyqYears().then((r) => setYears(r.years)).catch(() => setYears([]));
  }, []);

  const subjectName = (id: string) => {
    const s = SUBJECTS.find((x) => x.id === id);
    return s ? `${s.icon} ${tb(s.name)}` : id;
  };
  const topicLabel = (t: string) => (TOPIC_LABELS[t] ? tb(TOPIC_LABELS[t]) : t);

  // Map each topic to the subject it appears under (topic tags are shared).
  const topicSubject = new Map<string, string>();
  for (const p of PYQS) if (!topicSubject.has(p.topic)) topicSubject.set(p.topic, p.subjectId);
  for (const c of CHAPTERS) for (const q of c.quiz) if (!topicSubject.has(q.topic)) topicSubject.set(q.topic, c.subjectId);

  const total = live ? live.total : TOTAL_PYQS;
  const weightage = live ? live.subjects : subjectWeightage();
  const maxCount = weightage.length ? Math.max(...weightage.map((w) => w.count)) : 1;

  const allFrequencies: { topic: string; count: number; priority: string }[] = live ? live.topics : topicFrequency();
  const frequencies =
    subjectFilter === 'all' ? allFrequencies : allFrequencies.filter((f) => topicSubject.get(f.topic) === subjectFilter);

  const priorityBadge = (priority: string) => (priority === 'Medium' ? 'badge' : 'badge orange');
  const priorityLabel = (priority: string) => {
    if (lang !== 'hi') return priority;
    return priority === 'Very High' ? 'बहुत उच्च' : priority === 'High' ? 'उच्च' : 'मध्यम';
  };

  return (
    <div>
      <h1>🎯 {lang === 'hi' ? 'PYQ इंटेलिजेंस' : 'PYQ Intelligence'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? `पिछले वर्षों के प्रश्नों को केवल संग्रहीत करने के बजाय, यह ऐप उनका विश्लेषण करता है — जिससे सबसे अधिक दोहराए जाने वाले विषय और विषयवार महत्व सामने आते हैं। (${total} प्रश्नों पर आधारित।)`
          : `Instead of just storing previous-year questions, the app analyses them to reveal the most-repeated topics and subject weightage. (Computed over ${total} questions.)`}
        {' '}
        <span className={`badge ${live ? 'green' : 'orange'}`} style={{ marginLeft: 4 }}>
          {live ? (lang === 'hi' ? 'लाइव बैंक' : 'live bank') : (lang === 'hi' ? 'नमूना (ऑफ़लाइन)' : 'sample (offline)')}
        </span>
      </p>

      {/* Section 1 — Subject weightage */}
      <h2>{lang === 'hi' ? 'विषयवार महत्व' : 'Subject weightage'}</h2>
      <div className="card">
        {weightage.map((w) => {
          const pct = maxCount ? (w.count / maxCount) * 100 : 0;
          return (
            <div key={w.subjectId} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: 4 }}>
                <span>{subjectName(w.subjectId)}</span>
                <span style={{ color: 'var(--text-dim)' }}>{w.count}</span>
              </div>
              <div style={{ background: 'var(--surface-2)', borderRadius: 6, height: 10, overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${Math.max(0, Math.min(100, pct))}%`,
                    height: '100%',
                    background: 'var(--primary)',
                    borderRadius: 6,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Section 2 — Practice by year */}
      {years.length > 0 && (
        <>
          <h2>{lang === 'hi' ? 'वर्ष अनुसार अभ्यास (विगत वर्ष प्रश्न)' : 'Practice by year (previous-year questions)'}</h2>
          <p className="subtitle" style={{ marginBottom: 12 }}>
            {lang === 'hi'
              ? 'BPSC प्रारंभिक के वास्तविक विगत वर्ष प्रश्न — उत्तर व व्याख्या सहित। कोई वर्ष चुनें और अभ्यास करें।'
              : 'Authentic BPSC prelims previous-year questions with answers and explanations. Pick a year to practise.'}
          </p>
          <div className="year-grid">
            {years.map((y) => (
              <Link key={y.year} to={`/practice?year=${y.year}`} className="year-card">
                <div className="year-num">{y.year}</div>
                <div className="year-count">{y.count} {lang === 'hi' ? 'प्रश्न' : 'questions'}</div>
              </Link>
            ))}
          </div>
          <p className="hint" style={{ marginTop: 8 }}>
            {lang === 'hi'
              ? 'पूरा पेपर जोड़ना है? '
              : 'Want to load a whole paper? '}
            <Link to="/question-bank">{lang === 'hi' ? 'प्रश्न बैंक → पेपर चिपकाएँ' : 'Question Bank → Paste paper'}</Link>
            {lang === 'hi'
              ? ' में आधिकारिक PDF का टेक्स्ट चिपकाएँ — सभी प्रश्न उसी वर्ष में जुड़ जाएँगे।'
              : ' — paste the official PDF text and every question is added under that year.'}
          </p>
        </>
      )}

      {/* Section 3 — Topic priority */}
      <h2>{lang === 'hi' ? 'विषय प्राथमिकता' : 'Topic priority'}</h2>
      <div className="toolbar no-print">
        <button
          className={subjectFilter === 'all' ? 'btn small primary' : 'btn small'}
          onClick={() => setSubjectFilter('all')}
        >
          {lang === 'hi' ? 'सभी' : 'All'}
        </button>
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            className={subjectFilter === s.id ? 'btn small primary' : 'btn small'}
            onClick={() => setSubjectFilter(s.id)}
          >
            {s.icon} {tb(s.name)}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table className="content-table">
          <thead>
            <tr>
              <th>{lang === 'hi' ? 'विषय' : 'Topic'}</th>
              <th>{lang === 'hi' ? 'बारंबारता' : 'Frequency'}</th>
              <th>{lang === 'hi' ? 'प्राथमिकता' : 'Priority'}</th>
              <th className="no-print">{lang === 'hi' ? 'अभ्यास व अध्याय' : 'Practice & chapters'}</th>
            </tr>
          </thead>
          <tbody>
            {frequencies.map((f) => {
              const chapters = chaptersForTopic(f.topic);
              return (
                <tr key={f.topic}>
                  <td>{topicLabel(f.topic)}</td>
                  <td>{f.count}</td>
                  <td>
                    <span className={priorityBadge(f.priority)}>{priorityLabel(f.priority)}</span>
                  </td>
                  <td className="no-print">
                    <div className="toolbar" style={{ margin: 0 }}>
                      <Link to={`/practice?topic=${encodeURIComponent(f.topic)}`} className="btn small primary">
                        ✏️ {lang === 'hi' ? 'अभ्यास' : 'Practice'}
                      </Link>
                      {chapters.map((c) => (
                        <Link key={c.id} to={`/chapter/${c.id}`} className="btn small">
                          {tb(c.title)}
                        </Link>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Section 3 — Honesty note */}
      <div className="note-box note-info" style={{ marginTop: 18 }}>
        <div className="note-title">{lang === 'hi' ? 'ईमानदारी नोट' : 'Honesty note'}</div>
        <p style={{ margin: 0 }}>
          {lang === 'hi'
            ? 'यह PYQ डेटाबेस परीक्षा-पैटर्न प्रश्नों का एक क्यूरेटेड, बढ़ता हुआ नमूना है। यहाँ दिखाई गई बारंबारता इसी नमूने से गणना की जाती है — ये आधिकारिक BPSC गणनाएँ नहीं हैं। इन्हें प्राथमिकता तय करने के मार्गदर्शक के रूप में उपयोग करें, निश्चित संख्याओं के रूप में नहीं।'
            : 'This PYQ database is a curated, growing sample of exam-pattern questions. The frequencies shown here are computed from this sample — they are not official BPSC counts. Use them as a guide to prioritise, not as exact figures.'}
        </p>
      </div>
    </div>
  );
}
