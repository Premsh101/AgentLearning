import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { computeStreak, loadJSON } from '../lib/storage';
import { CHAPTERS } from '../content/syllabus';
import { totalAttempts, accuracy } from '../lib/analytics';
import { revisionSummary } from '../lib/revision';

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

  const due = revisionSummary().due;

  return (
    <div>
      <h1>{greeting}</h1>
      <p className="subtitle">{t('app.tagline')}</p>

      {due > 0 && (
        <Link to="/revision" className="card" style={{ display: 'block', color: 'var(--text)', borderColor: 'var(--accent)', marginBottom: 18 }}>
          🔁 <strong>{due}</strong>{' '}
          {lang === 'hi' ? 'अध्याय आज रिवीजन हेतु बकाया — अभी दोहराएँ →' : `chapter(s) due for revision today — review now →`}
        </Link>
      )}

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
        <Link to="/current-affairs" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>📰 {t('nav.ca')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'हर समाचार को सारांश, तथ्य, MCQ व मुख्य प्रश्नों सहित परीक्षा सामग्री में बदलें।' : 'Turn any news into exam material — summary, facts, MCQs and mains questions.'}
          </p>
        </Link>
        <Link to="/mock" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>⏱️ {t('nav.mock')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>{t('mock.desc')}</p>
        </Link>
        <Link to="/test-papers" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>🗂️ {t('nav.papers')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'सर्वर प्रश्न बैंक से ब्लूप्रिंट अनुसार मॉडल टेस्ट पेपर तैयार करें।' : 'Generate model test papers to a blueprint from the server question bank.'}
          </p>
        </Link>
        <Link to="/pyq" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>🎯 {t('nav.pyq')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'सर्वाधिक दोहराए गए विषय व विषयवार महत्व का विश्लेषण।' : 'Analysis of the most-repeated topics and subject weightage.'}
          </p>
        </Link>
        <Link to="/mains" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>📝 {t('nav.mains')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'अपना मुख्य परीक्षा उत्तर लिखें — AI संरचना, तथ्य व भाषा पर अंक व सुझाव देता है।' : 'Write a mains answer — AI scores structure, facts & language and gives a model answer.'}
          </p>
        </Link>
        <Link to="/interview" className="card" style={{ color: 'var(--text)' }}>
          <h2 style={{ marginTop: 0 }}>🎤 {t('nav.interview')}</h2>
          <p style={{ color: 'var(--text-dim)', margin: 0 }}>
            {lang === 'hi' ? 'ब्राउज़र की आवाज़ से मॉक साक्षात्कार का अभ्यास करें।' : 'Practise a mock interview by voice, using your browser.'}
          </p>
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
