import type { Bilingual } from '../lib/i18n';
import type { Chapter, Question, Subject } from './types';
import { polityCh01 } from './polity/ch01-historical-background';
import { polityCh02 } from './polity/ch02-making-of-constitution';
import { polityCh03 } from './polity/ch03-preamble';
import { polityCh04 } from './polity/ch04-fundamental-rights';
import { polityCh05 } from './polity/ch05-dpsp-duties';
import { polityCh06 } from './polity/ch06-parliament';
import { polityCh07 } from './polity/ch07-executive';
import { polityCh08 } from './polity/ch08-judiciary';
import { polityCh09 } from './polity/ch09-panchayati-raj';
import { historyCh01 } from './history/ch01-ancient-bihar';
import { historyCh02 } from './history/ch02-freedom-struggle-bihar';
import { historyCh03 } from './history/ch03-modern-india';
import { historyCh04 } from './history/ch04-medieval-bihar';
import { historyCh05 } from './history/ch05-post-independence-bihar';
import { geographyCh01 } from './geography/ch01-bihar-geography';
import { geographyCh02 } from './geography/ch02-physical-geography-india';
import { geographyCh03 } from './geography/ch03-bihar-climate-agriculture';
import { economyCh01 } from './economy/ch01-indian-economy-basics';
import { economyCh02 } from './economy/ch02-budget-banking-inflation';
import { economyCh03 } from './economy/ch03-bihar-economy';
import { scienceCh01 } from './science/ch01-everyday-science';
import { scienceCh02 } from './science/ch02-human-body-health';
import { scienceCh03 } from './science/ch03-space-defence';
import { biharCh01 } from './bihar/ch01-general-introduction';
import { biharCh02 } from './bihar/ch02-art-culture';
import { biharCh03 } from './bihar/ch03-schemes-governance';

export const SUBJECTS: Subject[] = [
  {
    id: 'polity',
    name: { en: 'Indian Polity', hi: 'भारतीय राजव्यवस्था' },
    icon: '🏛️',
    description: {
      en: 'Constitution, governance, institutions — the highest-weightage BPSC subject.',
      hi: 'संविधान, शासन, संस्थाएँ — BPSC में सर्वाधिक महत्व वाला विषय।',
    },
  },
  {
    id: 'history',
    name: { en: 'History', hi: 'इतिहास' },
    icon: '📜',
    description: {
      en: 'Ancient, medieval and modern India with special focus on the freedom struggle.',
      hi: 'प्राचीन, मध्यकालीन व आधुनिक भारत — स्वतंत्रता संग्राम पर विशेष बल।',
    },
  },
  {
    id: 'geography',
    name: { en: 'Geography', hi: 'भूगोल' },
    icon: '🌍',
    description: {
      en: 'Indian and world geography — physical, economic and human.',
      hi: 'भारत व विश्व का भूगोल — भौतिक, आर्थिक व मानवीय।',
    },
  },
  {
    id: 'economy',
    name: { en: 'Economy', hi: 'अर्थव्यवस्था' },
    icon: '📈',
    description: {
      en: 'Indian economy, budget, banking and Bihar\'s economic survey.',
      hi: 'भारतीय अर्थव्यवस्था, बजट, बैंकिंग व बिहार का आर्थिक सर्वेक्षण।',
    },
  },
  {
    id: 'science',
    name: { en: 'Science & Technology', hi: 'विज्ञान एवं प्रौद्योगिकी' },
    icon: '🔬',
    description: {
      en: 'General science and current developments in technology.',
      hi: 'सामान्य विज्ञान और प्रौद्योगिकी की समसामयिक प्रगति।',
    },
  },
  {
    id: 'bihar',
    name: { en: 'Bihar Special', hi: 'बिहार विशेष' },
    icon: '🗺️',
    description: {
      en: 'Bihar GK — the section that decides BPSC selection.',
      hi: 'बिहार सामान्य ज्ञान — वह खंड जो BPSC चयन तय करता है।',
    },
  },
];

export const CHAPTERS: Chapter[] = [
  polityCh01,
  polityCh02,
  polityCh03,
  polityCh04,
  polityCh05,
  polityCh06,
  polityCh07,
  polityCh08,
  polityCh09,
  historyCh01,
  historyCh02,
  historyCh03,
  historyCh04,
  historyCh05,
  geographyCh01,
  geographyCh02,
  geographyCh03,
  economyCh01,
  economyCh02,
  economyCh03,
  scienceCh01,
  scienceCh02,
  scienceCh03,
  biharCh01,
  biharCh02,
  biharCh03,
];

/** Chapters planned for upcoming content drops, shown as "coming soon". Empty — the core Phase 1 syllabus is now complete. */
export const PLANNED: Record<string, Bilingual[]> = {};

export function chaptersOf(subjectId: string): Chapter[] {
  return CHAPTERS.filter((c) => c.subjectId === subjectId).sort((a, b) => a.order - b.order);
}

export function chapterById(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

export const QUESTION_BANK: Question[] = CHAPTERS.flatMap((c) => c.quiz);

/** Chapters whose question bank covers a given topic — used for the weak-area improvement plan. */
export function chaptersForTopic(topic: string): Chapter[] {
  return CHAPTERS.filter((c) => c.quiz.some((q) => q.topic === topic));
}

export const TOPIC_LABELS: Record<string, Bilingual> = {
  'polity-historical': { en: 'Polity: Historical Background', hi: 'राजव्यवस्था: ऐतिहासिक पृष्ठभूमि' },
  'polity-making': { en: 'Polity: Making of the Constitution', hi: 'राजव्यवस्था: संविधान निर्माण' },
  'polity-preamble': { en: 'Polity: Preamble & Features', hi: 'राजव्यवस्था: प्रस्तावना व विशेषताएँ' },
  'polity-rights': { en: 'Polity: Fundamental Rights', hi: 'राजव्यवस्था: मौलिक अधिकार' },
  'polity-dpsp': { en: 'Polity: DPSP & Duties', hi: 'राजव्यवस्था: नीति-निदेशक तत्व व कर्तव्य' },
  'polity-parliament': { en: 'Polity: Parliament', hi: 'राजव्यवस्था: संसद' },
  'polity-executive': { en: 'Polity: Union Executive', hi: 'राजव्यवस्था: संघीय कार्यपालिका' },
  'polity-judiciary': { en: 'Polity: Judiciary', hi: 'राजव्यवस्था: न्यायपालिका' },
  'polity-panchayat': { en: 'Polity: Panchayati Raj', hi: 'राजव्यवस्था: पंचायती राज' },
  'history-ancient-bihar': { en: 'History: Ancient Bihar', hi: 'इतिहास: प्राचीन बिहार' },
  'history-freedom-bihar': { en: 'History: Bihar in Freedom Struggle', hi: 'इतिहास: स्वतंत्रता संग्राम में बिहार' },
  'history-modern-india': { en: 'History: Modern India', hi: 'इतिहास: आधुनिक भारत' },
  'history-medieval-bihar': { en: 'History: Medieval Bihar', hi: 'इतिहास: मध्यकालीन बिहार' },
  'history-post-independence': { en: 'History: Post-Independence Bihar', hi: 'इतिहास: स्वतंत्रता के बाद बिहार' },
  'geography-bihar': { en: 'Geography: Bihar', hi: 'भूगोल: बिहार' },
  'geography-india': { en: 'Geography: Physical India', hi: 'भूगोल: भौतिक भारत' },
  'geography-bihar-agri': { en: 'Geography: Bihar Climate & Agriculture', hi: 'भूगोल: बिहार जलवायु व कृषि' },
  'economy-basics': { en: 'Economy: Basics', hi: 'अर्थव्यवस्था: मूल बातें' },
  'economy-money': { en: 'Economy: Budget, Banking & Inflation', hi: 'अर्थव्यवस्था: बजट, बैंकिंग व मुद्रास्फीति' },
  'economy-bihar': { en: 'Economy: Bihar', hi: 'अर्थव्यवस्था: बिहार' },
  'science-everyday': { en: 'Science: Everyday Science', hi: 'विज्ञान: दैनिक विज्ञान' },
  'science-body': { en: 'Science: Human Body & Health', hi: 'विज्ञान: मानव शरीर व स्वास्थ्य' },
  'science-space': { en: 'Science: Space & Defence', hi: 'विज्ञान: अंतरिक्ष व रक्षा' },
  'bihar-general': { en: 'Bihar: General Introduction', hi: 'बिहार: सामान्य परिचय' },
  'bihar-schemes': { en: 'Bihar: Schemes & Governance', hi: 'बिहार: योजनाएँ व शासन' },
  'bihar-culture': { en: 'Bihar: Art & Culture', hi: 'बिहार: कला व संस्कृति' },
};
