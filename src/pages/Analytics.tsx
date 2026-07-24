import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { SUBJECTS, CHAPTERS, chaptersOf, chaptersForTopic, TOPIC_LABELS } from '../content/syllabus';
import { computeStreak, loadJSON } from '../lib/storage';
import { getTopicStats, accuracy, totalAttempts } from '../lib/analytics';
import { revisionSummary } from '../lib/revision';

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div style={{ background: 'var(--surface-2)', borderRadius: 6, height: 10, overflow: 'hidden' }}>
      <div style={{ width: `${Math.max(0, Math.min(100, pct))}%`, height: '100%', background: color, borderRadius: 6 }} />
    </div>
  );
}

export function Analytics() {
  const { tb, lang } = useLang();
  const completed = new Set(loadJSON<string[]>('completedChapters', []));
  const totals = totalAttempts();
  const acc = accuracy(totals);
  const rev = revisionSummary();
  const streak = computeStreak();

  const coverage = CHAPTERS.length ? Math.round((completed.size / CHAPTERS.length) * 100) : 0;
  const revScore = rev.enrolled === 0 ? 0 : rev.compliance;
  const readiness = Math.round(0.4 * coverage + 0.35 * acc + 0.25 * revScore);

  const stats = getTopicStats();
  const topicRows = Object.entries(stats)
    .filter(([, s]) => s.attempts >= 1)
    .map(([topic, s]) => ({ topic, acc: accuracy(s), attempts: s.attempts }))
    .sort((a, b) => a.acc - b.acc);
  const weak = topicRows.filter((t) => t.acc < 60);
  const strong = topicRows.filter((t) => t.acc >= 75);

  const topicLabel = (t: string) => (TOPIC_LABELS[t] ? tb(TOPIC_LABELS[t]) : t);

  const readinessColor = readiness >= 70 ? 'var(--green)' : readiness >= 40 ? 'var(--accent)' : 'var(--red)';

  return (
    <div>
      <h1>📊 {lang === 'hi' ? 'प्रदर्शन विश्लेषण' : 'Performance Analytics'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'आपकी तैयारी का पारदर्शी चित्र — कोई अनुमानित "चयन प्रायिकता" नहीं, बस स्पष्ट संख्याएँ जिन्हें आप सुधार सकते हैं।'
          : 'A transparent picture of your preparation — no guessed "selection probability", just clear numbers you can move.'}
      </p>

      {/* Readiness Score */}
      <div className="card" style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: readinessColor, lineHeight: 1 }}>{readiness}</div>
            <div className="lbl" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {lang === 'hi' ? 'तैयारी स्कोर / 100' : 'Readiness / 100'}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <BreakdownRow label={lang === 'hi' ? 'पाठ्यक्रम कवरेज (40%)' : 'Syllabus coverage (40%)'} pct={coverage} color="var(--primary)" />
            <BreakdownRow label={lang === 'hi' ? 'औसत सटीकता (35%)' : 'Average accuracy (35%)'} pct={acc} color="var(--green)" />
            <BreakdownRow label={lang === 'hi' ? 'रिवीजन अनुपालन (25%)' : 'Revision compliance (25%)'} pct={revScore} color="var(--accent)" />
          </div>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '12px 0 0' }}>
          {lang === 'hi'
            ? 'सूत्र: 0.4×कवरेज + 0.35×सटीकता + 0.25×रिवीजन। हर भाग आपके नियंत्रण में है।'
            : 'Formula: 0.4×coverage + 0.35×accuracy + 0.25×revision. Every part is in your control.'}
        </p>
      </div>

      {/* Key stats */}
      <div className="stat-row">
        <div className="card stat"><div className="num">{streak}🔥</div><div className="lbl">{lang === 'hi' ? 'स्ट्रीक' : 'Day streak'}</div></div>
        <div className="card stat"><div className="num">{completed.size}/{CHAPTERS.length}</div><div className="lbl">{lang === 'hi' ? 'अध्याय' : 'Chapters'}</div></div>
        <div className="card stat"><div className="num">{totals.attempts}</div><div className="lbl">{lang === 'hi' ? 'प्रश्न हल किए' : 'Questions done'}</div></div>
        <div className="card stat"><div className="num">{totals.attempts ? acc + '%' : '—'}</div><div className="lbl">{lang === 'hi' ? 'सटीकता' : 'Accuracy'}</div></div>
        <div className="card stat"><div className="num">{rev.due}</div><div className="lbl">{lang === 'hi' ? 'रिवीजन बकाया' : 'Revisions due'}</div></div>
      </div>

      {/* Subject completion */}
      <h2>{lang === 'hi' ? 'विषयवार पूर्णता' : 'Subject completion'}</h2>
      <div className="card">
        {SUBJECTS.map((s) => {
          const chs = chaptersOf(s.id);
          const done = chs.filter((c) => completed.has(c.id)).length;
          const pct = chs.length ? Math.round((done / chs.length) * 100) : 0;
          return (
            <div key={s.id} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: 4 }}>
                <span>{s.icon} {tb(s.name)}</span>
                <span style={{ color: 'var(--text-dim)' }}>{chs.length ? `${done}/${chs.length}` : (lang === 'hi' ? 'जल्द' : 'soon')}</span>
              </div>
              <Bar pct={pct} color="var(--primary)" />
            </div>
          );
        })}
      </div>

      {/* Weak-area improvement plan */}
      <h2>{lang === 'hi' ? 'कमज़ोर क्षेत्र व सुधार योजना' : 'Weak areas & improvement plan'}</h2>
      {topicRows.length === 0 ? (
        <div className="card">
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            {lang === 'hi' ? 'कुछ क्विज़ हल करें — फिर यहाँ आपके कमज़ोर व मज़बूत विषय दिखेंगे।' : 'Attempt a few quizzes — your weak and strong topics will appear here.'}
          </p>
          <Link to="/quiz" className="btn primary" style={{ marginTop: 10 }}>✅ {lang === 'hi' ? 'क्विज़' : 'Take a quiz'}</Link>
        </div>
      ) : weak.length === 0 ? (
        <div className="card"><p style={{ margin: 0 }}>👍 {lang === 'hi' ? 'कोई बड़ा कमज़ोर क्षेत्र नहीं — बढ़िया!' : 'No major weak areas — great work!'}</p></div>
      ) : (
        weak.map((w) => {
          const chapters = chaptersForTopic(w.topic);
          return (
            <div className="card" key={w.topic} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>{topicLabel(w.topic)}</strong>
                <span className="badge orange">{w.acc}% ({w.attempts})</span>
              </div>
              <Bar pct={w.acc} color="var(--red)" />
              <p style={{ fontSize: '0.85rem', margin: '10px 0 6px', color: 'var(--text-dim)' }}>
                {lang === 'hi' ? 'सुझाव: इन अध्यायों को दोबारा पढ़ें' : 'Suggested: revisit these chapters'}
              </p>
              <div className="toolbar" style={{ margin: 0 }}>
                {chapters.map((c) => (
                  <Link key={c.id} to={`/chapter/${c.id}`} className="btn small">
                    {tb(c.title)}
                  </Link>
                ))}
              </div>
            </div>
          );
        })
      )}

      {strong.length > 0 && (
        <>
          <h2>{lang === 'hi' ? 'मज़बूत विषय' : 'Strong topics'}</h2>
          <div className="card">
            {strong.map((s) => (
              <div key={s.topic} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span>{topicLabel(s.topic)}</span>
                <span className="badge green">{s.acc}%</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function BreakdownRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 3 }}>
        <span>{label}</span>
        <span style={{ color: 'var(--text-dim)' }}>{pct}%</span>
      </div>
      <Bar pct={pct} color={color} />
    </div>
  );
}
