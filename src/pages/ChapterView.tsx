import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { chapterById } from '../content/syllabus';
import { Blocks } from '../components/Blocks';
import { RichText } from '../components/RichText';
import { QuizRunner } from '../components/QuizRunner';
import { ReportMistake } from '../components/ReportMistake';
import { loadJSON, saveJSON, touchStudyDay } from '../lib/storage';
import { speak, stopSpeaking, isSpeechSupported } from '../lib/tts';

export function ChapterView() {
  const { chapterId = '' } = useParams();
  const { t, tb, lang } = useLang();
  const chapter = chapterById(chapterId);
  const [speaking, setSpeaking] = useState(false);
  const [practice, setPractice] = useState(false);
  const [completed, setCompleted] = useState(() => loadJSON<string[]>('completedChapters', []).includes(chapterId));

  if (!chapter) return <p>Not found. <Link to="/learn">← Back</Link></p>;

  const readAloud = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }
    const parts = [tb(chapter.title), tb(chapter.intro), ...chapter.takeaways.map(tb)];
    speak(parts.join('. '), lang);
    setSpeaking(true);
  };

  const markComplete = () => {
    const list = loadJSON<string[]>('completedChapters', []);
    if (!list.includes(chapterId)) {
      list.push(chapterId);
      saveJSON('completedChapters', list);
    }
    touchStudyDay();
    setCompleted(true);
  };

  return (
    <div>
      <Link to={`/learn/${chapter.subjectId}`} className="btn small no-print" style={{ marginBottom: 14 }}>
        ← {t('common.chapters')}
      </Link>
      <h1>{tb(chapter.title)}</h1>
      <p className="subtitle">
        <RichText text={tb(chapter.intro)} />
      </p>

      <div className="toolbar no-print">
        {isSpeechSupported() && (
          <button className="btn" onClick={readAloud}>
            {speaking ? `⏹️ ${t('common.stop')}` : `🔊 ${t('common.listen')}`}
          </button>
        )}
        <button className="btn" onClick={() => window.print()}>
          📄 {t('common.exportPdf')}
        </button>
        <button className={`btn ${completed ? '' : 'primary'}`} onClick={markComplete} disabled={completed}>
          {completed ? t('common.completed') : t('common.markComplete')}
        </button>
        <ReportMistake context={`${tb(chapter.title)}`} />
      </div>

      {chapter.sections.map((sec) => (
        <section key={sec.id}>
          <h2>{tb(sec.heading)}</h2>
          <Blocks blocks={sec.blocks} />
        </section>
      ))}

      <div className="takeaways">
        <h2>📌 {t('common.takeaways')}</h2>
        <ul>
          {chapter.takeaways.map((tk, i) => (
            <li key={i}>
              <RichText text={tb(tk)} />
            </li>
          ))}
        </ul>
      </div>

      <div className="no-print">
        <h2>❓ {t('common.practice')}</h2>
        {!practice ? (
          <button className="btn primary" onClick={() => setPractice(true)}>
            {t('quiz.start')} ({chapter.quiz.length})
          </button>
        ) : (
          <QuizRunner questions={chapter.quiz} onDone={() => touchStudyDay()} />
        )}
      </div>
    </div>
  );
}
