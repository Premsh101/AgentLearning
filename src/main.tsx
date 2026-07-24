import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './lib/i18n';
import { App } from './App';
import './styles.css';

// Lazy-load pages so each route is a separate chunk — smaller initial load,
// faster first paint on low-bandwidth connections and modest VPS hosting.
const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const Learn = lazy(() => import('./pages/Learn').then((m) => ({ default: m.Learn })));
const SubjectView = lazy(() => import('./pages/SubjectView').then((m) => ({ default: m.SubjectView })));
const ChapterView = lazy(() => import('./pages/ChapterView').then((m) => ({ default: m.ChapterView })));
const DailyQuiz = lazy(() => import('./pages/DailyQuiz').then((m) => ({ default: m.DailyQuiz })));
const CurrentAffairs = lazy(() => import('./pages/CurrentAffairs').then((m) => ({ default: m.CurrentAffairs })));
const MockTest = lazy(() => import('./pages/MockTest').then((m) => ({ default: m.MockTest })));
const Revision = lazy(() => import('./pages/Revision').then((m) => ({ default: m.Revision })));
const Analytics = lazy(() => import('./pages/Analytics').then((m) => ({ default: m.Analytics })));
const PYQ = lazy(() => import('./pages/PYQ').then((m) => ({ default: m.PYQ })));
const TestPapers = lazy(() => import('./pages/TestPapers').then((m) => ({ default: m.TestPapers })));
const QuestionBank = lazy(() => import('./pages/QuestionBank').then((m) => ({ default: m.QuestionBank })));
const Practice = lazy(() => import('./pages/Practice').then((m) => ({ default: m.Practice })));
const Mains = lazy(() => import('./pages/Mains').then((m) => ({ default: m.Mains })));
const Interview = lazy(() => import('./pages/Interview').then((m) => ({ default: m.Interview })));
const Mentor = lazy(() => import('./pages/Mentor').then((m) => ({ default: m.Mentor })));
const Settings = lazy(() => import('./pages/Settings').then((m) => ({ default: m.Settings })));

function Loading() {
  return <div style={{ padding: 32, color: 'var(--text-dim)' }}>…</div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route path="learn" element={<Suspense fallback={<Loading />}><Learn /></Suspense>} />
            <Route path="learn/:subjectId" element={<Suspense fallback={<Loading />}><SubjectView /></Suspense>} />
            <Route path="chapter/:chapterId" element={<Suspense fallback={<Loading />}><ChapterView /></Suspense>} />
            <Route path="quiz" element={<Suspense fallback={<Loading />}><DailyQuiz /></Suspense>} />
            <Route path="current-affairs" element={<Suspense fallback={<Loading />}><CurrentAffairs /></Suspense>} />
            <Route path="mock" element={<Suspense fallback={<Loading />}><MockTest /></Suspense>} />
            <Route path="test-papers" element={<Suspense fallback={<Loading />}><TestPapers /></Suspense>} />
            <Route path="pyq" element={<Suspense fallback={<Loading />}><PYQ /></Suspense>} />
            <Route path="question-bank" element={<Suspense fallback={<Loading />}><QuestionBank /></Suspense>} />
            <Route path="practice" element={<Suspense fallback={<Loading />}><Practice /></Suspense>} />
            <Route path="revision" element={<Suspense fallback={<Loading />}><Revision /></Suspense>} />
            <Route path="analytics" element={<Suspense fallback={<Loading />}><Analytics /></Suspense>} />
            <Route path="mains" element={<Suspense fallback={<Loading />}><Mains /></Suspense>} />
            <Route path="interview" element={<Suspense fallback={<Loading />}><Interview /></Suspense>} />
            <Route path="mentor" element={<Suspense fallback={<Loading />}><Mentor /></Suspense>} />
            <Route path="settings" element={<Suspense fallback={<Loading />}><Settings /></Suspense>} />
          </Route>
        </Routes>
      </HashRouter>
    </LangProvider>
  </React.StrictMode>
);
