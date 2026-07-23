import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { SUBJECTS, chaptersOf, PLANNED } from '../content/syllabus';

export function Learn() {
  const { t, tb } = useLang();
  return (
    <div>
      <h1>📚 {t('nav.learn')}</h1>
      <p className="subtitle">{t('app.tagline')}</p>
      <div className="grid">
        {SUBJECTS.map((s) => {
          const live = chaptersOf(s.id).length;
          const planned = (PLANNED[s.id] ?? []).length;
          return (
            <Link key={s.id} to={`/learn/${s.id}`} className="card" style={{ color: 'var(--text)' }}>
              <h2 style={{ marginTop: 0 }}>
                {s.icon} {tb(s.name)}
              </h2>
              <p style={{ color: 'var(--text-dim)' }}>{tb(s.description)}</p>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                {live} {t('common.chapters')}
                {planned > 0 && ` · +${planned} ${t('common.comingSoon').toLowerCase()}`}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
