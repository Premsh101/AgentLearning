import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { loadJSON, saveJSON } from './storage';

export type Lang = 'en' | 'hi';

export interface Bilingual {
  en: string;
  hi: string;
}

export function pick(b: Bilingual, lang: Lang): string {
  return b[lang] || b.en;
}

/** UI chrome strings. Content carries its own Bilingual fields. */
const UI: Record<string, Bilingual> = {
  'nav.dashboard': { en: 'Dashboard', hi: 'डैशबोर्ड' },
  'nav.learn': { en: 'Learn', hi: 'अध्ययन' },
  'nav.quiz': { en: 'Daily Quiz', hi: 'दैनिक क्विज़' },
  'nav.ca': { en: 'Current Affairs', hi: 'करेंट अफेयर्स' },
  'nav.mock': { en: 'Mock Test', hi: 'मॉक टेस्ट' },
  'nav.papers': { en: 'Test Papers', hi: 'टेस्ट पेपर' },
  'nav.pyq': { en: 'PYQ Intelligence', hi: 'PYQ इंटेलिजेंस' },
  'nav.revision': { en: 'Revision', hi: 'रिवीजन' },
  'nav.analytics': { en: 'Analytics', hi: 'विश्लेषण' },
  'nav.mains': { en: 'Mains Evaluation', hi: 'मुख्य परीक्षा मूल्यांकन' },
  'nav.interview': { en: 'Interview Coach', hi: 'साक्षात्कार कोच' },
  'nav.mentor': { en: 'AI Mentor', hi: 'AI मेंटर' },
  'nav.settings': { en: 'Settings', hi: 'सेटिंग्स' },
  'app.tagline': { en: 'Your Personal AI Coach to Crack BPSC', hi: 'BPSC क्रैक करने के लिए आपका निजी AI कोच' },
  'common.chapters': { en: 'Chapters', hi: 'अध्याय' },
  'common.comingSoon': { en: 'Coming soon', hi: 'जल्द आ रहा है' },
  'common.takeaways': { en: 'Chapter Takeaways', hi: 'अध्याय की मुख्य बातें' },
  'common.listen': { en: 'Listen', hi: 'सुनें' },
  'common.stop': { en: 'Stop', hi: 'रोकें' },
  'common.exportPdf': { en: 'Export PDF', hi: 'PDF निर्यात करें' },
  'common.reportMistake': { en: 'Report a mistake', hi: 'गलती की सूचना दें' },
  'common.markComplete': { en: 'Mark as complete', hi: 'पूर्ण चिह्नित करें' },
  'common.completed': { en: 'Completed ✓', hi: 'पूर्ण ✓' },
  'common.practice': { en: 'Practice questions from this chapter', hi: 'इस अध्याय के अभ्यास प्रश्न' },
  'common.submit': { en: 'Submit', hi: 'जमा करें' },
  'common.next': { en: 'Next', hi: 'अगला' },
  'common.cancel': { en: 'Cancel', hi: 'रद्द करें' },
  'common.score': { en: 'Score', hi: 'स्कोर' },
  'quiz.title': { en: 'Daily Quiz', hi: 'दैनिक क्विज़' },
  'quiz.desc': { en: '10 questions picked from your study material. Instant feedback with explanations.', hi: 'आपकी अध्ययन सामग्री से चुने गए 10 प्रश्न। व्याख्या सहित तुरंत परिणाम।' },
  'quiz.start': { en: 'Start Quiz', hi: 'क्विज़ शुरू करें' },
  'quiz.correct': { en: 'Correct!', hi: 'सही!' },
  'quiz.wrong': { en: 'Incorrect', hi: 'गलत' },
  'quiz.explanation': { en: 'Explanation', hi: 'व्याख्या' },
  'quiz.finish': { en: 'Finish', hi: 'समाप्त करें' },
  'quiz.retry': { en: 'Try another quiz', hi: 'दूसरा क्विज़ खेलें' },
  'mock.title': { en: 'Mock Test', hi: 'मॉक टेस्ट' },
  'mock.desc': { en: 'Real exam simulation — timer, question palette, mark for review and detailed result analysis.', hi: 'वास्तविक परीक्षा जैसा अनुभव — टाइमर, प्रश्न पैलेट, समीक्षा हेतु चिह्न और विस्तृत परिणाम विश्लेषण।' },
  'mock.questions': { en: 'Questions', hi: 'प्रश्न' },
  'mock.minutes': { en: 'Minutes', hi: 'मिनट' },
  'mock.negative': { en: 'Negative marking (per wrong answer)', hi: 'नकारात्मक अंकन (प्रति गलत उत्तर)' },
  'mock.negativeNote': { en: 'BPSC Prelims currently has no negative marking. Keep 0 for the real pattern.', hi: 'BPSC प्रारंभिक परीक्षा में वर्तमान में नकारात्मक अंकन नहीं है। वास्तविक पैटर्न के लिए 0 रखें।' },
  'mock.start': { en: 'Start Test', hi: 'टेस्ट शुरू करें' },
  'mock.markReview': { en: 'Mark for review', hi: 'समीक्षा हेतु चिह्नित करें' },
  'mock.clear': { en: 'Clear response', hi: 'उत्तर हटाएँ' },
  'mock.submitTest': { en: 'Submit Test', hi: 'टेस्ट जमा करें' },
  'mock.result': { en: 'Result', hi: 'परिणाम' },
  'mock.topicWise': { en: 'Topic-wise performance', hi: 'विषयवार प्रदर्शन' },
  'mentor.placeholder': { en: 'Ask any BPSC doubt…', hi: 'BPSC से जुड़ा कोई भी प्रश्न पूछें…' },
  'mentor.configure': { en: 'Configure an AI provider in Settings to use the mentor.', hi: 'मेंटर का उपयोग करने के लिए सेटिंग्स में AI प्रदाता कॉन्फ़िगर करें।' },
  'dash.streak': { en: 'Day streak', hi: 'दिन की स्ट्रीक' },
  'dash.chaptersDone': { en: 'Chapters completed', hi: 'पूर्ण अध्याय' },
  'dash.daysLeft': { en: 'Days to exam', hi: 'परीक्षा में शेष दिन' },
  'dash.setExamDate': { en: 'Set exam date in Settings', hi: 'सेटिंग्स में परीक्षा तिथि चुनें' },
  'dash.continue': { en: 'Continue learning', hi: 'अध्ययन जारी रखें' },
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tb: (b: Bilingual) => string;
}

const Ctx = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
  tb: (b) => b.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => loadJSON<Lang>('lang', 'en'));
  useEffect(() => saveJSON('lang', lang), [lang]);
  const t = (key: string) => {
    const entry = UI[key];
    return entry ? pick(entry, lang) : key;
  };
  const tb = (b: Bilingual) => pick(b, lang);
  return <Ctx.Provider value={{ lang, setLang, t, tb }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
