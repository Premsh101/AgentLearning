import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './lib/i18n';
import { App } from './App';
import { Dashboard } from './pages/Dashboard';
import { Learn } from './pages/Learn';
import { SubjectView } from './pages/SubjectView';
import { ChapterView } from './pages/ChapterView';
import { DailyQuiz } from './pages/DailyQuiz';
import { CurrentAffairs } from './pages/CurrentAffairs';
import { MockTest } from './pages/MockTest';
import { Revision } from './pages/Revision';
import { Analytics } from './pages/Analytics';
import { Mentor } from './pages/Mentor';
import { Settings } from './pages/Settings';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="learn" element={<Learn />} />
            <Route path="learn/:subjectId" element={<SubjectView />} />
            <Route path="chapter/:chapterId" element={<ChapterView />} />
            <Route path="quiz" element={<DailyQuiz />} />
            <Route path="current-affairs" element={<CurrentAffairs />} />
            <Route path="mock" element={<MockTest />} />
            <Route path="revision" element={<Revision />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="mentor" element={<Mentor />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </HashRouter>
    </LangProvider>
  </React.StrictMode>
);
