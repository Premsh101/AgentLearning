import { Link, useParams } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { SUBJECTS, chaptersOf, PLANNED } from '../content/syllabus';
import { loadJSON } from '../lib/storage';

export function SubjectView() {
  const { subjectId = '' } = useParams();
  const { t, tb } = useLang();
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const chapters = chaptersOf(subjectId);
  const planned = PLANNED[subjectId] ?? [];
  const completed = new Set(loadJSON<string[]>('completedChapters', []));

  if (!subject) return <p>Not found. <Link to="/learn">← Back</Link></p>;

  return (
    <div>
      <Link to="/learn" className="btn small no-print" style={{ marginBottom: 14 }}>
        ← {t('nav.learn')}
      </Link>
      <h1>
        {subject.icon} {tb(subject.name)}
      </h1>
      <p className="subtitle">{tb(subject.description)}</p>

      {chapters.map((c) => (
        <Link key={c.id} to={`/chapter/${c.id}`} className="chapter-item">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <strong>
              {c.order}. {tb(c.title)}
            </strong>
            {completed.has(c.id) && <span className="badge green">✓</span>}
          </div>
          <div className="meta">
            {c.sections.length} {tb({ en: 'sections', hi: 'खंड' })} · {c.quiz.length} {tb({ en: 'questions', hi: 'प्रश्न' })}
          </div>
        </Link>
      ))}

      {planned.map((p, i) => (
        <div key={i} className="chapter-item soon">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <strong>
              {chapters.length + i + 1}. {tb(p)}
            </strong>
            <span className="badge orange">{t('common.comingSoon')}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
