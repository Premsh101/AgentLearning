import type { Bilingual } from '../lib/i18n';
import type { Question } from './types';

export interface CACategory {
  id: string;
  label: Bilingual;
  icon: string;
}

export const CA_CATEGORIES: CACategory[] = [
  { id: 'polity', label: { en: 'Polity', hi: 'राजव्यवस्था' }, icon: '🏛️' },
  { id: 'economy', label: { en: 'Economy', hi: 'अर्थव्यवस्था' }, icon: '📈' },
  { id: 'science', label: { en: 'Science & Tech', hi: 'विज्ञान व प्रौद्योगिकी' }, icon: '🔬' },
  { id: 'environment', label: { en: 'Environment', hi: 'पर्यावरण' }, icon: '🌿' },
  { id: 'international', label: { en: 'International', hi: 'अंतरराष्ट्रीय' }, icon: '🌐' },
  { id: 'bihar', label: { en: 'Bihar', hi: 'बिहार' }, icon: '🗺️' },
  { id: 'reports', label: { en: 'Reports & Schemes', hi: 'रिपोर्ट व योजनाएँ' }, icon: '📊' },
];

/**
 * A current-affairs item transformed into complete exam material, exactly as
 * the Current Affairs Intelligence Agent is meant to produce. The seed items
 * below are evergreen, static-GK-linked topics (accurate and exam-stable);
 * fresh daily items are produced by the AI generator or, in the full build,
 * by the server-side pipeline with a human review queue.
 */
export interface CurrentAffair {
  id: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  category: string;
  title: Bilingual;
  summary: Bilingual;
  background: Bilingual;
  /** The static-GK / syllabus connection — the heart of exam relevance. */
  staticLink: Bilingual;
  facts: Bilingual[];
  mcqs: Question[];
  mains: Bilingual[];
}

export const CURRENT_AFFAIRS: CurrentAffair[] = [
  {
    id: 'ca-census',
    date: '2026-07-01',
    category: 'polity',
    title: { en: 'Census of India: How the National Headcount Works', hi: 'भारत की जनगणना: राष्ट्रीय गणना कैसे होती है' },
    summary: {
      en: 'The Census is the official count of India\'s population, done once every ten years. It records not just how many people there are, but details like literacy, occupation, language and housing — the data on which almost every government plan is based.',
      hi: 'जनगणना भारत की जनसंख्या की आधिकारिक गणना है, जो प्रत्येक दस वर्ष में एक बार होती है। यह केवल जनसंख्या ही नहीं, बल्कि साक्षरता, व्यवसाय, भाषा व आवास जैसे विवरण भी दर्ज करती है — वही आँकड़े जिन पर लगभग हर सरकारी योजना आधारित होती है।',
    },
    background: {
      en: 'The first census in India was attempted in 1872 (under Lord Mayo), and the first complete, synchronous census was held in 1881 (under Lord Ripon). Since then it has been conducted every ten years without a break. The Census is conducted by the Office of the Registrar General and Census Commissioner, under the Ministry of Home Affairs.',
      hi: 'भारत में पहली जनगणना का प्रयास 1872 (लॉर्ड मेयो के अधीन) में हुआ, और पहली पूर्ण, समकालिक जनगणना 1881 (लॉर्ड रिपन के अधीन) में हुई। तब से यह प्रत्येक दस वर्ष में बिना रुके होती रही है। जनगणना गृह मंत्रालय के अधीन भारत के महापंजीयक व जनगणना आयुक्त कार्यालय द्वारा की जाती है।',
    },
    staticLink: {
      en: 'Static-GK link: Census is a **Union subject** — entry 69 of the Union List (7th Schedule). Connect this to Polity (federal lists) and to Bihar\'s Census 2011 figures: population 10.41 crore (3rd), density 1,106 (highest), literacy 61.8% (lowest).',
      hi: 'स्थैतिक-GK लिंक: जनगणना एक **संघ सूची का विषय** है — संघ सूची (7वीं अनुसूची) की प्रविष्टि 69। इसे राजव्यवस्था (संघीय सूचियाँ) और बिहार के जनगणना 2011 आँकड़ों से जोड़ें: जनसंख्या 10.41 करोड़ (तीसरी), घनत्व 1,106 (सर्वाधिक), साक्षरता 61.8% (न्यूनतम)।',
    },
    facts: [
      { en: 'First census attempt: **1872**; first complete census: **1881**.', hi: 'पहला जनगणना प्रयास: **1872**; पहली पूर्ण जनगणना: **1881**।' },
      { en: 'Census is listed under **entry 69 of the Union List**.', hi: 'जनगणना **संघ सूची की प्रविष्टि 69** के अंतर्गत है।' },
      { en: 'Conducted by the **Registrar General & Census Commissioner** (Ministry of Home Affairs).', hi: '**महापंजीयक व जनगणना आयुक्त** (गृह मंत्रालय) द्वारा की जाती है।' },
      { en: 'Census 2011 was the **15th** national census and the 7th since Independence.', hi: 'जनगणना 2011 **15वीं** राष्ट्रीय जनगणना और स्वतंत्रता के बाद 7वीं थी।' },
    ],
    mcqs: [
      {
        id: 'ca-census-q1',
        type: 'mcq',
        question: { en: 'The Census in India is a subject under which list?', hi: 'भारत में जनगणना किस सूची के अंतर्गत विषय है?' },
        options: [
          { en: 'State List', hi: 'राज्य सूची' },
          { en: 'Union List', hi: 'संघ सूची' },
          { en: 'Concurrent List', hi: 'समवर्ती सूची' },
          { en: 'Residuary powers', hi: 'अवशिष्ट शक्तियाँ' },
        ],
        answer: 1,
        explanation: {
          en: 'Census is a Union subject (entry 69 of the Union List), so it is conducted by the central government.',
          hi: 'जनगणना एक संघ विषय है (संघ सूची की प्रविष्टि 69), इसलिए यह केंद्र सरकार द्वारा की जाती है।',
        },
        topic: 'current-affairs',
        difficulty: 2,
      },
      {
        id: 'ca-census-q2',
        type: 'mcq',
        question: { en: 'The first complete and synchronous census in India was held in:', hi: 'भारत में पहली पूर्ण व समकालिक जनगणना कब हुई?' },
        options: [
          { en: '1872', hi: '1872' },
          { en: '1881', hi: '1881' },
          { en: '1891', hi: '1891' },
          { en: '1901', hi: '1901' },
        ],
        answer: 1,
        explanation: {
          en: 'The first complete census was held in 1881 under Lord Ripon; an earlier attempt was made in 1872 under Lord Mayo.',
          hi: 'पहली पूर्ण जनगणना 1881 में लॉर्ड रिपन के अधीन हुई; इससे पूर्व 1872 में लॉर्ड मेयो के अधीन प्रयास हुआ था।',
        },
        topic: 'current-affairs',
        difficulty: 2,
      },
    ],
    mains: [
      { en: 'Discuss the importance of Census data for welfare planning and delimitation in India.', hi: 'भारत में कल्याण नियोजन व परिसीमन हेतु जनगणना आँकड़ों के महत्व की चर्चा कीजिए।' },
      { en: 'How does population data shape governance in a state like Bihar?', hi: 'बिहार जैसे राज्य में शासन को जनसंख्या आँकड़े किस प्रकार आकार देते हैं?' },
    ],
  },
  {
    id: 'ca-eci',
    date: '2026-07-05',
    category: 'polity',
    title: { en: 'Election Commission of India: Guardian of Elections', hi: 'भारत निर्वाचन आयोग: चुनावों का संरक्षक' },
    summary: {
      en: 'The Election Commission of India (ECI) is the independent constitutional body that conducts free and fair elections to Parliament, State Legislatures, and the offices of the President and Vice-President.',
      hi: 'भारत निर्वाचन आयोग (ECI) वह स्वतंत्र संवैधानिक निकाय है जो संसद, राज्य विधानमंडलों तथा राष्ट्रपति व उपराष्ट्रपति के पदों हेतु स्वतंत्र व निष्पक्ष चुनाव कराता है।',
    },
    background: {
      en: 'The ECI was established on 25 January 1950 (celebrated as National Voters\' Day). It began as a single-member body and is currently a three-member body (one Chief Election Commissioner and two Election Commissioners). It does NOT conduct panchayat and municipal elections — those are held by the State Election Commissions.',
      hi: 'ECI की स्थापना 25 जनवरी 1950 को हुई (जिसे राष्ट्रीय मतदाता दिवस के रूप में मनाया जाता है)। यह एक सदस्यीय निकाय के रूप में आरंभ हुआ और वर्तमान में तीन सदस्यीय निकाय है (एक मुख्य निर्वाचन आयुक्त व दो निर्वाचन आयुक्त)। यह पंचायत व नगरपालिका चुनाव नहीं कराता — वे राज्य निर्वाचन आयोगों द्वारा होते हैं।',
    },
    staticLink: {
      en: 'Static-GK link: the ECI is established by **Article 324** of the Constitution. Connect this to Polity (constitutional bodies) and remember the contrast: ECI (central) vs State Election Commissions (Articles 243K/243ZA, for local bodies).',
      hi: 'स्थैतिक-GK लिंक: ECI संविधान के **अनुच्छेद 324** द्वारा स्थापित है। इसे राजव्यवस्था (संवैधानिक निकाय) से जोड़ें और अंतर याद रखें: ECI (केंद्रीय) बनाम राज्य निर्वाचन आयोग (अनुच्छेद 243K/243ZA, स्थानीय निकायों हेतु)।',
    },
    facts: [
      { en: 'Established under **Article 324**; came into being on **25 January 1950**.', hi: '**अनुच्छेद 324** के अंतर्गत स्थापित; **25 जनवरी 1950** को अस्तित्व में आया।' },
      { en: 'Currently a **three-member** body (1 CEC + 2 ECs).', hi: 'वर्तमान में **तीन सदस्यीय** निकाय (1 मुख्य निर्वाचन आयुक्त + 2 निर्वाचन आयुक्त)।' },
      { en: 'The first Chief Election Commissioner was **Sukumar Sen**.', hi: 'प्रथम मुख्य निर्वाचन आयुक्त **सुकुमार सेन** थे।' },
      { en: 'It does **not** conduct local body (panchayat/municipal) elections.', hi: 'यह स्थानीय निकाय (पंचायत/नगरपालिका) चुनाव **नहीं** कराता।' },
    ],
    mcqs: [
      {
        id: 'ca-eci-q1',
        type: 'mcq',
        question: { en: 'The Election Commission of India is established under which Article?', hi: 'भारत निर्वाचन आयोग किस अनुच्छेद के अंतर्गत स्थापित है?' },
        options: [
          { en: 'Article 315', hi: 'अनुच्छेद 315' },
          { en: 'Article 324', hi: 'अनुच्छेद 324' },
          { en: 'Article 280', hi: 'अनुच्छेद 280' },
          { en: 'Article 148', hi: 'अनुच्छेद 148' },
        ],
        answer: 1,
        explanation: {
          en: 'Article 324 provides for the Election Commission of India. (Article 315 = UPSC, 280 = Finance Commission, 148 = CAG.)',
          hi: 'अनुच्छेद 324 भारत निर्वाचन आयोग का प्रावधान करता है। (अनुच्छेद 315 = UPSC, 280 = वित्त आयोग, 148 = CAG।)',
        },
        topic: 'current-affairs',
        difficulty: 2,
      },
    ],
    mains: [
      { en: 'Examine the role of the Election Commission in maintaining the integrity of Indian democracy.', hi: 'भारतीय लोकतंत्र की अखंडता बनाए रखने में निर्वाचन आयोग की भूमिका का परीक्षण कीजिए।' },
    ],
  },
  {
    id: 'ca-ramsar',
    date: '2026-07-12',
    category: 'environment',
    title: { en: 'Ramsar Sites: Protecting India\'s Wetlands', hi: 'रामसर स्थल: भारत की आर्द्रभूमियों की रक्षा' },
    summary: {
      en: 'A Ramsar site is a wetland of international importance recognised under the Ramsar Convention. Wetlands act as natural water filters, flood buffers and homes for migratory birds — so their protection is both an environmental and an exam priority.',
      hi: 'रामसर स्थल अंतरराष्ट्रीय महत्व की आर्द्रभूमि है जिसे रामसर अभिसमय के अंतर्गत मान्यता प्राप्त है। आर्द्रभूमियाँ प्राकृतिक जल-निस्यंदक, बाढ़-अवरोधक व प्रवासी पक्षियों के आवास का कार्य करती हैं — इसलिए इनकी रक्षा पर्यावरणीय व परीक्षा दोनों दृष्टि से प्राथमिकता है।',
    },
    background: {
      en: 'The Ramsar Convention on Wetlands was signed in 1971 in Ramsar, Iran, and came into force in 1975. India became a party in 1982. India now has one of the largest networks of Ramsar sites in Asia.',
      hi: 'आर्द्रभूमियों पर रामसर अभिसमय 1971 में ईरान के रामसर में हस्ताक्षरित हुआ और 1975 में प्रभावी हुआ। भारत 1982 में इसका पक्षकार बना। भारत में अब एशिया के सबसे बड़े रामसर स्थल नेटवर्कों में से एक है।',
    },
    staticLink: {
      en: 'Static-GK link: connect to Environment (conventions) and Bihar — **Kanwar Lake (Kabartal) in Begusarai** is Bihar\'s first Ramsar site (Asia\'s largest freshwater oxbow lake). Also link to World Wetlands Day (2 February).',
      hi: 'स्थैतिक-GK लिंक: पर्यावरण (अभिसमय) व बिहार से जोड़ें — **बेगूसराय की कँवर झील (कावर ताल)** बिहार का पहला रामसर स्थल है (एशिया की सबसे बड़ी मीठे पानी की गोखुर झील)। विश्व आर्द्रभूमि दिवस (2 फरवरी) से भी जोड़ें।',
    },
    facts: [
      { en: 'Ramsar Convention: signed **1971** (Ramsar, Iran); India joined in **1982**.', hi: 'रामसर अभिसमय: **1971** में हस्ताक्षरित (रामसर, ईरान); भारत **1982** में शामिल हुआ।' },
      { en: 'Bihar\'s first Ramsar site: **Kanwar Lake (Kabartal), Begusarai**.', hi: 'बिहार का पहला रामसर स्थल: **कँवर झील (कावर ताल), बेगूसराय**।' },
      { en: '**World Wetlands Day** is observed on **2 February**.', hi: '**विश्व आर्द्रभूमि दिवस** **2 फरवरी** को मनाया जाता है।' },
    ],
    mcqs: [
      {
        id: 'ca-ramsar-q1',
        type: 'mcq',
        question: { en: 'The first Ramsar site of Bihar is:', hi: 'बिहार का पहला रामसर स्थल है:' },
        options: [
          { en: 'Kanwar Lake (Kabartal)', hi: 'कँवर झील (कावर ताल)' },
          { en: 'Chilika Lake', hi: 'चिल्का झील' },
          { en: 'Loktak Lake', hi: 'लोकतक झील' },
          { en: 'Sambhar Lake', hi: 'सांभर झील' },
        ],
        answer: 0,
        explanation: {
          en: 'Kanwar Lake (Kabartal) in Begusarai, Asia\'s largest freshwater oxbow lake, is Bihar\'s first Ramsar site.',
          hi: 'बेगूसराय की कँवर झील (कावर ताल), एशिया की सबसे बड़ी मीठे पानी की गोखुर झील, बिहार का पहला रामसर स्थल है।',
        },
        topic: 'current-affairs',
        difficulty: 2,
      },
    ],
    mains: [
      { en: 'Why is wetland conservation important, and what challenges do Bihar\'s wetlands face?', hi: 'आर्द्रभूमि संरक्षण क्यों महत्वपूर्ण है, और बिहार की आर्द्रभूमियों के समक्ष क्या चुनौतियाँ हैं?' },
    ],
  },
];

export function caByCategory(categoryId: string | null): CurrentAffair[] {
  const sorted = [...CURRENT_AFFAIRS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return categoryId ? sorted.filter((c) => c.category === categoryId) : sorted;
}
