import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { SYLLABUS } from '../content/syllabusIndex';
import { chapterById } from '../content/syllabus';
import { EXAM_MAPS } from '../components/maps/ExamMaps';
import { loadJSON } from '../lib/storage';

export function Syllabus() {
  const { t, tb, lang } = useLang();
  const completed = useMemo(() => new Set(loadJSON<string[]>('completedChapters', [])), []);

  const totalItems = SYLLABUS.reduce((n, s) => n + s.items.length, 0);

  return (
    <div>
      <h1>🧭 {t('nav.syllabus')}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'BPSC प्रारंभिक (सामान्य अध्ययन) का आधिकारिक पाठ्यक्रम — हर बिंदु से संबंधित अध्याय व मानचित्र पर क्लिक कर सीधे पहुँचें। यही आपकी तैयारी का सूचकांक है।'
          : 'The official BPSC Prelims (General Studies) syllabus — click any point to jump straight to the chapter or map that covers it. This is your preparation index.'}
      </p>

      <div className="card" style={{ marginBottom: 18, display: 'flex', gap: 22, flexWrap: 'wrap' }}>
        <div className="stat"><div className="num">{SYLLABUS.length}</div><div className="lbl">{lang === 'hi' ? 'खंड' : 'Sections'}</div></div>
        <div className="stat"><div className="num">{totalItems}</div><div className="lbl">{lang === 'hi' ? 'पाठ्यक्रम बिंदु' : 'Syllabus points'}</div></div>
        <div className="stat"><div className="num">{EXAM_MAPS.length}</div><div className="lbl">{lang === 'hi' ? 'मानचित्र' : 'Maps'}</div></div>
        <div className="stat"><div className="num">150</div><div className="lbl">{lang === 'hi' ? 'प्रारंभिक अंक' : 'Prelims marks'}</div></div>
      </div>

      {SYLLABUS.map((sec) => (
        <section key={sec.id} className="syl-section">
          <h2 className="syl-head">
            <span>{sec.icon}</span> {tb(sec.title)}
          </h2>
          <ul className="syl-list">
            {sec.items.map((item, i) => {
              const chapters = (item.chapters ?? []).map((id) => chapterById(id)).filter(Boolean);
              const maps = (item.maps ?? []).map((id) => EXAM_MAPS.find((m) => m.id === id)).filter(Boolean);
              const allDone = chapters.length > 0 && chapters.every((c) => completed.has(c!.id));
              return (
                <li key={i} className="syl-item">
                  <div className="syl-text">
                    {allDone && <span className="syl-check" title={lang === 'hi' ? 'पूर्ण' : 'Completed'}>✓</span>}
                    {tb(item.text)}
                  </div>
                  {(chapters.length > 0 || maps.length > 0) && (
                    <div className="syl-links">
                      {chapters.map((c) => (
                        <Link key={c!.id} to={`/chapter/${c!.id}`} className={'syl-chip' + (completed.has(c!.id) ? ' done' : '')}>
                          📖 {tb(c!.title)}
                        </Link>
                      ))}
                      {maps.map((m) => (
                        <Link key={m!.id} to="/maps" className="syl-chip map">
                          🗺️ {tb(m!.title)}
                        </Link>
                      ))}
                    </div>
                  )}
                  {chapters.length === 0 && maps.length === 0 && (
                    <div className="syl-links">
                      <Link to="/current-affairs" className="syl-chip map">📰 {lang === 'hi' ? 'करेंट अफेयर्स' : 'Current Affairs'}</Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <p className="hint" style={{ marginTop: 20 }}>
        {lang === 'hi'
          ? 'स्रोत: BPSC संयुक्त प्रतियोगी परीक्षा (प्रारंभिक) सामान्य अध्ययन पाठ्यक्रम। समसामयिकी बिंदु दैनिक करेंट अफेयर्स मॉड्यूल से जुड़ते हैं।'
          : 'Source: BPSC Combined Competitive Exam (Prelims) General Studies syllabus. Current-affairs points link to the daily Current Affairs module.'}
      </p>
    </div>
  );
}
