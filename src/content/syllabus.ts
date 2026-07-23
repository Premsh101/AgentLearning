import type { Bilingual } from '../lib/i18n';
import type { Chapter, Question, Subject } from './types';
import { polityCh01 } from './polity/ch01-historical-background';
import { polityCh02 } from './polity/ch02-making-of-constitution';
import { polityCh03 } from './polity/ch03-preamble';
import { polityCh04 } from './polity/ch04-fundamental-rights';
import { polityCh05 } from './polity/ch05-dpsp-duties';
import { historyCh01 } from './history/ch01-ancient-bihar';
import { historyCh02 } from './history/ch02-freedom-struggle-bihar';
import { geographyCh01 } from './geography/ch01-bihar-geography';
import { biharCh01 } from './bihar/ch01-general-introduction';

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
  historyCh01,
  historyCh02,
  geographyCh01,
  biharCh01,
];

/** Chapters planned for upcoming content drops, shown as "coming soon". */
export const PLANNED: Record<string, Bilingual[]> = {
  polity: [
    { en: 'President, PM & Council of Ministers', hi: 'राष्ट्रपति, प्रधानमंत्री व मंत्रिपरिषद' },
    { en: 'Parliament & State Legislature', hi: 'संसद व राज्य विधानमंडल' },
    { en: 'Judiciary', hi: 'न्यायपालिका' },
    { en: 'Panchayati Raj (Bihar focus)', hi: 'पंचायती राज (बिहार फोकस)' },
  ],
  history: [
    { en: 'Modern India: 1857 to 1947', hi: 'आधुनिक भारत: 1857 से 1947' },
    { en: 'Medieval Bihar', hi: 'मध्यकालीन बिहार' },
  ],
  geography: [
    { en: 'Physical Geography of India', hi: 'भारत का भौतिक भूगोल' },
    { en: 'Climate, Soils & Agriculture of Bihar', hi: 'बिहार की जलवायु, मिट्टी व कृषि' },
  ],
  economy: [
    { en: 'Basics of Indian Economy', hi: 'भारतीय अर्थव्यवस्था की मूल बातें' },
    { en: 'Bihar Economic Survey Highlights', hi: 'बिहार आर्थिक सर्वेक्षण के मुख्य बिंदु' },
  ],
  science: [
    { en: 'Everyday Science', hi: 'दैनिक जीवन का विज्ञान' },
    { en: 'Space & Defence Technology', hi: 'अंतरिक्ष व रक्षा प्रौद्योगिकी' },
  ],
  bihar: [
    { en: 'History of Bihar', hi: 'बिहार का इतिहास' },
    { en: 'Bihar: Schemes & Governance', hi: 'बिहार: योजनाएँ व शासन' },
    { en: 'Art & Culture of Bihar', hi: 'बिहार की कला एवं संस्कृति' },
  ],
};

export function chaptersOf(subjectId: string): Chapter[] {
  return CHAPTERS.filter((c) => c.subjectId === subjectId).sort((a, b) => a.order - b.order);
}

export function chapterById(id: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.id === id);
}

export const QUESTION_BANK: Question[] = CHAPTERS.flatMap((c) => c.quiz);

export const TOPIC_LABELS: Record<string, Bilingual> = {
  'polity-historical': { en: 'Polity: Historical Background', hi: 'राजव्यवस्था: ऐतिहासिक पृष्ठभूमि' },
  'polity-making': { en: 'Polity: Making of the Constitution', hi: 'राजव्यवस्था: संविधान निर्माण' },
  'polity-preamble': { en: 'Polity: Preamble & Features', hi: 'राजव्यवस्था: प्रस्तावना व विशेषताएँ' },
  'polity-rights': { en: 'Polity: Fundamental Rights', hi: 'राजव्यवस्था: मौलिक अधिकार' },
  'polity-dpsp': { en: 'Polity: DPSP & Duties', hi: 'राजव्यवस्था: नीति-निदेशक तत्व व कर्तव्य' },
  'history-ancient-bihar': { en: 'History: Ancient Bihar', hi: 'इतिहास: प्राचीन बिहार' },
  'history-freedom-bihar': { en: 'History: Bihar in Freedom Struggle', hi: 'इतिहास: स्वतंत्रता संग्राम में बिहार' },
  'geography-bihar': { en: 'Geography: Bihar', hi: 'भूगोल: बिहार' },
  'bihar-general': { en: 'Bihar: General Introduction', hi: 'बिहार: सामान्य परिचय' },
};
