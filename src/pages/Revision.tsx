import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { chapterById, SUBJECTS } from '../content/syllabus';
import { RichText } from '../components/RichText';
import { getDue, grade, type Grade } from '../lib/revision';

const GRADES: { g: Grade; label: { en: string; hi: string }; hint: string; cls: string }[] = [
  { g: 'again', label: { en: 'Again', hi: 'फिर से' }, hint: '1d', cls: '' },
  { g: 'hard', label: { en: 'Hard', hi: 'कठिन' }, hint: '=', cls: '' },
  { g: 'good', label: { en: 'Good', hi: 'अच्छा' }, hint: '→', cls: 'primary' },
  { g: 'easy', label: { en: 'Easy', hi: 'आसान' }, hint: '→→', cls: '' },
];

export function Revision() {
  const { tb, lang } = useLang();
  const [due, setDue] = useState<string[]>(() => getDue());
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const onGrade = (chapterId: string, g: Grade) => {
    grade(chapterId, g);
    setDue((d) => d.filter((id) => id !== chapterId));
  };

  const subjectName = (subjectId: string) => {
    const s = SUBJECTS.find((x) => x.id === subjectId);
    return s ? tb(s.name) : subjectId;
  };

  return (
    <div>
      <h1>🔁 {lang === 'hi' ? 'स्मार्ट रिवीजन' : 'Smart Revision'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'स्पेस्ड रिपिटीशन — आज → 1 → 3 → 7 → 15 → 30 → 60 दिन। कुछ भी नहीं भूलेगा।'
          : 'Spaced repetition — Today → 1 → 3 → 7 → 15 → 30 → 60 days. Nothing gets forgotten.'}
      </p>

      {due.length === 0 ? (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>✅ {lang === 'hi' ? 'आज कुछ बकाया नहीं!' : 'Nothing due today!'}</h2>
          <p style={{ color: 'var(--text-dim)' }}>
            {lang === 'hi'
              ? 'किसी अध्याय को "पूर्ण चिह्नित" करने पर वह स्वतः रिवीजन शेड्यूल में जुड़ जाता है।'
              : 'Marking a chapter complete automatically adds it to your revision schedule.'}
          </p>
          <Link to="/learn" className="btn primary">
            📚 {lang === 'hi' ? 'अध्ययन करें' : 'Go study'}
          </Link>
        </div>
      ) : (
        <>
          <p style={{ color: 'var(--text-dim)' }}>
            {due.length} {lang === 'hi' ? 'अध्याय आज रिवीजन हेतु बकाया' : 'chapter(s) due for revision today'}
          </p>
          {due.map((id) => {
            const chapter = chapterById(id);
            if (!chapter) return null;
            const show = revealed[id];
            return (
              <div className="card" key={id} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{subjectName(chapter.subjectId)}</div>
                <h2 style={{ margin: '4px 0 10px' }}>{tb(chapter.title)}</h2>

                {!show ? (
                  <>
                    <p style={{ color: 'var(--text-dim)' }}>
                      {lang === 'hi'
                        ? '🧠 पहले याद करने का प्रयास करें, फिर मुख्य बातें देखें।'
                        : '🧠 Try to recall the key points first, then reveal the takeaways.'}
                    </p>
                    <button className="btn primary" onClick={() => setRevealed((r) => ({ ...r, [id]: true }))}>
                      {lang === 'hi' ? 'मुख्य बातें दिखाएँ' : 'Show takeaways'}
                    </button>
                    <Link to={`/chapter/${id}`} className="btn" style={{ marginLeft: 8 }}>
                      {lang === 'hi' ? 'पूरा अध्याय' : 'Full chapter'}
                    </Link>
                  </>
                ) : (
                  <>
                    <ul>
                      {chapter.takeaways.map((tk, i) => (
                        <li key={i}>
                          <RichText text={tb(tk)} />
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 6 }}>
                      {lang === 'hi' ? 'आपने कितनी अच्छी तरह याद रखा?' : 'How well did you recall it?'}
                    </p>
                    <div className="toolbar" style={{ margin: 0 }}>
                      {GRADES.map((gr) => (
                        <button key={gr.g} className={`btn small ${gr.cls}`} onClick={() => onGrade(id, gr.g)}>
                          {tb(gr.label)}
                          <span style={{ opacity: 0.6, marginLeft: 4 }}>{gr.hint}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
