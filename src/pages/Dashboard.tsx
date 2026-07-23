import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { computeStreak, loadJSON } from '../lib/storage';
import { CHAPTERS } from '../content/syllabus';
import { totalAttempts, accuracy } from '../lib/analytics';

function daysToExam(): number | null {
  const date = loadJSON<string>('examDate', '');
  if (!date) return null;
  const diff = new Date(date).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86400000));
}

export function Dashboard() {
  const { t, lang } = useLang();
  const streak = computeStreak();
  const done = loadJSON<string[]>('completedChapters', []).length;
  const left = daysToExam();
  const totals = totalAttempts();
  const acc = accuracy(totals);
  const greeting = lang === 'hi' ? 'नमस्ते! 👋' : 'Welcome back! 👋';

  return (
    <div>
      <h1>{greeting}</h1>
      <p className="subtitle">{t('app.tagline')}</p>

      <div className="stat-row">
        <div className="card stat">
          <div className="num">{streak}🔥</div>
          <div className="lbl">{t('dash.streak')}</div>
        </div>
        <div className="card stat">
          <div className="num">
            {done}/{CHAPTERS.length}
          </div>
          <div className="lbl">{t('dash.chaptersDone')}</div>
        </div>
        <div className="card stat">
          <div className="num">{left === null ? '—' : left}</div>
          <div className="lbl">{left === null ? t('dash.setExamDate') : t('dash.daysLeft')}</div>
        </div>
        <div className="card stat">
          <div className="num">{totals.attempts ? acc + '%' : '—'}</div>
          <div className="lbl">{lang === 'hi' ? 'औसत सटीकता' : 'Avg. accuracy'}</div>
        </div>
      </div>

      <div className="grid">
        <Link to="/learn" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>📚 {t('nav.learn')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'द्विभाषी अध्याय, सरल भाषा, हर अध्याय के अंत में मुख्य बातें।' : 'Bilingual chapters in simple language, with takeaway notes at the end of each.'}
          </p>
        </Link>
        <Link to="/quiz" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>✅ {t('nav.quiz')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>{t('quiz.desc')}</p>
        </Link>
        <Link to="/mock" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>⏱️ {t('nav.mock')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>{t('mock.desc')}</p>
        </Link>
        <Link to="/mentor" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>🤖 {t('nav.mentor')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'किसी भी प्रदाता (Claude/OpenAI/Gemini/स्थानीय) से अपने संदेह पूछें।' : 'Ask doubts using any provider (Claude/OpenAI/Gemini/Local).'}
          </p>
        </Link>
      </div>
    </div>
  );
}
