import type { Bilingual } from '../lib/i18n';

/**
 * The official BPSC Combined Competitive Exam — Prelims General Studies
 * syllabus (single 150-mark paper), broken into its official sections, each
 * mapped to the app's chapters and maps so this doubles as a clickable index:
 * tap any syllabus point and jump straight to the material that covers it.
 *
 * Section list follows the BPSC notification wording.
 */
export interface SyllabusItem {
  text: Bilingual;
  /** Chapter ids (see content/syllabus.ts) that cover this point. */
  chapters?: string[];
  /** Map ids (see components/maps/ExamMaps.tsx) relevant to this point. */
  maps?: string[];
}

export interface SyllabusSection {
  id: string;
  title: Bilingual;
  icon: string;
  items: SyllabusItem[];
}

const T = (en: string, hi: string): Bilingual => ({ en, hi });

export const SYLLABUS: SyllabusSection[] = [
  {
    id: 'gs-science',
    icon: '🔬',
    title: T('General Science', 'सामान्य विज्ञान'),
    items: [
      { text: T('Everyday science — general appreciation & understanding, no specialised study.', 'दैनिक जीवन का विज्ञान — सामान्य समझ, विशेष अध्ययन की आवश्यकता नहीं।'), chapters: ['science-ch01'] },
      { text: T('The human body, health, nutrition and diseases.', 'मानव शरीर, स्वास्थ्य, पोषण व रोग।'), chapters: ['science-ch02'] },
      { text: T('Physics, chemistry & biology facts asked in the exam.', 'परीक्षा में पूछे जाने वाले भौतिकी, रसायन व जीव विज्ञान तथ्य।'), chapters: ['science-ch01', 'science-ch02'] },
      { text: T('Space, defence and modern technology.', 'अंतरिक्ष, रक्षा व आधुनिक प्रौद्योगिकी।'), chapters: ['science-ch03'] },
    ],
  },
  {
    id: 'gs-current',
    icon: '📰',
    title: T('Current Events of National & International Importance', 'राष्ट्रीय व अंतरराष्ट्रीय महत्व की सामयिक घटनाएँ'),
    items: [
      { text: T('National and international current affairs.', 'राष्ट्रीय व अंतरराष्ट्रीय समसामयिकी।'), chapters: [] },
      { text: T('Schemes, appointments, awards, sports and summits.', 'योजनाएँ, नियुक्तियाँ, पुरस्कार, खेल व शिखर सम्मेलन।'), chapters: ['bihar-ch03'] },
      { text: T('Bihar-specific current affairs and government schemes.', 'बिहार-विशिष्ट समसामयिकी व सरकारी योजनाएँ।'), chapters: ['bihar-ch03', 'economy-ch03'] },
    ],
  },
  {
    id: 'gs-history',
    icon: '📜',
    title: T('History of Bihar & Indian History', 'बिहार का इतिहास व भारतीय इतिहास'),
    items: [
      { text: T('Ancient India & Bihar — Magadha, Mauryas, Guptas, Nalanda.', 'प्राचीन भारत व बिहार — मगध, मौर्य, गुप्त, नालंदा।'), chapters: ['history-ch01'] },
      { text: T('Medieval India & Bihar — Sher Shah Suri, Battle of Buxar.', 'मध्यकालीन भारत व बिहार — शेरशाह सूरी, बक्सर का युद्ध।'), chapters: ['history-ch04'] },
      { text: T('Modern India — 1857 to 1947.', 'आधुनिक भारत — 1857 से 1947 तक।'), chapters: ['history-ch03'] },
      { text: T('Bihar after Independence.', 'स्वतंत्रता के बाद बिहार।'), chapters: ['history-ch05'] },
      { text: T('Art, culture, festivals & heritage of Bihar.', 'बिहार की कला, संस्कृति, पर्व व धरोहर।'), chapters: ['bihar-ch02'], maps: ['bihar-parks'] },
    ],
  },
  {
    id: 'gs-geography',
    icon: '🌍',
    title: T('Geography — India & Bihar (divisions & river systems)', 'भूगोल — भारत व बिहार (विभाग व नदी तंत्र)'),
    items: [
      { text: T('General geography & physical geography of India.', 'भारत का सामान्य व भौतिक भूगोल।'), chapters: ['geography-ch02'], maps: ['india-physical', 'india-political'] },
      { text: T('Geographical divisions of Bihar & its major river systems.', 'बिहार के भौगोलिक विभाग व प्रमुख नदी तंत्र।'), chapters: ['geography-ch01'], maps: ['bihar-physical', 'bihar-rivers', 'bihar-districts'] },
      { text: T('Climate, soils and agriculture of Bihar.', 'बिहार की जलवायु, मृदा व कृषि।'), chapters: ['geography-ch03'], maps: ['india-soil', 'india-crops'] },
      { text: T('Rivers of India; minerals and national parks.', 'भारत की नदियाँ; खनिज व राष्ट्रीय उद्यान।'), chapters: ['geography-ch02'], maps: ['india-rivers', 'india-minerals', 'india-parks'] },
    ],
  },
  {
    id: 'gs-polity',
    icon: '🏛️',
    title: T('Indian Polity', 'भारतीय राजव्यवस्था'),
    items: [
      { text: T('Historical background & making of the Constitution.', 'संविधान की ऐतिहासिक पृष्ठभूमि व निर्माण।'), chapters: ['polity-ch01', 'polity-ch02'] },
      { text: T('Preamble, salient features, Fundamental Rights & Duties, DPSP.', 'प्रस्तावना, प्रमुख विशेषताएँ, मौलिक अधिकार व कर्तव्य, DPSP।'), chapters: ['polity-ch03', 'polity-ch04', 'polity-ch05'] },
      { text: T('Union legislature, executive and judiciary.', 'संघ की विधायिका, कार्यपालिका व न्यायपालिका।'), chapters: ['polity-ch06', 'polity-ch07', 'polity-ch08'] },
      { text: T('State government & the Bihar legislature; Panchayati Raj.', 'राज्य सरकार व बिहार विधानमंडल; पंचायती राज।'), chapters: ['polity-ch10', 'polity-ch09'] },
    ],
  },
  {
    id: 'gs-economy',
    icon: '📈',
    title: T('Indian Economy & changes in Bihar’s economy post-Independence', 'भारतीय अर्थव्यवस्था व स्वतंत्रता के बाद बिहार की अर्थव्यवस्था में परिवर्तन'),
    items: [
      { text: T('Basics of the Indian economy.', 'भारतीय अर्थव्यवस्था की मूल बातें।'), chapters: ['economy-ch01'] },
      { text: T('Budget, banking, money and inflation.', 'बजट, बैंकिंग, मुद्रा व मुद्रास्फीति।'), chapters: ['economy-ch02'] },
      { text: T('Economy of Bihar and its changes after Independence.', 'बिहार की अर्थव्यवस्था व स्वतंत्रता के बाद उसमें परिवर्तन।'), chapters: ['economy-ch03'] },
    ],
  },
  {
    id: 'gs-freedom',
    icon: '🇮🇳',
    title: T('Indian National Movement & the Part Played by Bihar', 'भारतीय राष्ट्रीय आंदोलन व उसमें बिहार की भूमिका'),
    items: [
      { text: T('Nature & character of the 19th-century resurgence and growth of nationalism.', '19वीं सदी के पुनर्जागरण की प्रकृति व राष्ट्रवाद का विकास।'), chapters: ['history-ch03'] },
      { text: T('The freedom struggle and the role of Bihar in it.', 'स्वतंत्रता संग्राम व उसमें बिहार की भूमिका।'), chapters: ['history-ch02'], maps: ['bihar-districts'] },
      { text: T('Champaran Satyagraha, 1942 Quit India movement in Bihar.', 'चंपारण सत्याग्रह, 1942 भारत छोड़ो आंदोलन बिहार में।'), chapters: ['history-ch02'] },
    ],
  },
  {
    id: 'gs-mental',
    icon: '🧠',
    title: T('General Mental Ability', 'सामान्य मानसिक योग्यता'),
    items: [
      { text: T('Numerical ability — percentages, ratios, averages.', 'संख्यात्मक योग्यता — प्रतिशत, अनुपात, औसत।'), chapters: ['mental-ch01'] },
      { text: T('Logical reasoning — series, coding-decoding, puzzles.', 'तार्किक विवेचन — शृंखला, कूटलेखन, पहेलियाँ।'), chapters: ['mental-ch02'] },
    ],
  },
];
