import type { Bilingual } from '../lib/i18n';

/**
 * PYQ Intelligence data module (pure build-time content — no AI, no backend).
 *
 * Instead of merely storing previous-year questions, we tag each item with the
 * same subject + topic tags the rest of the app uses. That lets us COMPUTE which
 * topics repeat most and how subject weightage is distributed, so a learner can
 * prioritise. The `topic` strings deliberately reuse the tags in syllabus.ts so
 * every PYQ can link straight to the mapped chapter(s).
 *
 * This is a curated, growing SAMPLE of exam-pattern questions. Frequencies are
 * computed from this sample and are NOT official BPSC counts.
 */
export interface PYQ {
  id: string;
  /** Plausible recent year for some items; omitted for others. */
  year?: number;
  subjectId: string;
  /** Reuses the topic tags from syllabus.ts so it maps to chapters. */
  topic: string;
  question: Bilingual;
}

export const PYQS: PYQ[] = [
  // ─── Polity (highest weightage) ───────────────────────────────────────────
  {
    id: 'pyq-pol-01',
    year: 2019,
    subjectId: 'polity',
    topic: 'polity-rights',
    question: {
      en: 'The Right to Constitutional Remedies is guaranteed under which Article of the Constitution?',
      hi: 'संवैधानिक उपचारों का अधिकार संविधान के किस अनुच्छेद के अंतर्गत प्रदान किया गया है?',
    },
  },
  {
    id: 'pyq-pol-02',
    year: 2021,
    subjectId: 'polity',
    topic: 'polity-rights',
    question: {
      en: 'Which Fundamental Right did Dr. B. R. Ambedkar call the "heart and soul" of the Constitution?',
      hi: 'डॉ. बी. आर. अंबेडकर ने किस मौलिक अधिकार को संविधान की "आत्मा" कहा था?',
    },
  },
  {
    id: 'pyq-pol-03',
    subjectId: 'polity',
    topic: 'polity-rights',
    question: {
      en: 'The Right to Education was added as a Fundamental Right under which Article?',
      hi: 'शिक्षा का अधिकार किस अनुच्छेद के अंतर्गत मौलिक अधिकार के रूप में जोड़ा गया?',
    },
  },
  {
    id: 'pyq-pol-04',
    year: 2018,
    subjectId: 'polity',
    topic: 'polity-rights',
    question: {
      en: 'Which Article abolishes untouchability and forbids its practice in any form?',
      hi: 'कौन-सा अनुच्छेद अस्पृश्यता का अंत करता है और किसी भी रूप में इसके आचरण को निषिद्ध करता है?',
    },
  },
  {
    id: 'pyq-pol-05',
    year: 2020,
    subjectId: 'polity',
    topic: 'polity-making',
    question: {
      en: 'Who was the Chairman of the Drafting Committee of the Constituent Assembly?',
      hi: 'संविधान सभा की प्रारूप समिति के अध्यक्ष कौन थे?',
    },
  },
  {
    id: 'pyq-pol-06',
    subjectId: 'polity',
    topic: 'polity-making',
    question: {
      en: 'The Constitution of India was adopted by the Constituent Assembly on which date?',
      hi: 'भारत का संविधान संविधान सभा द्वारा किस तिथि को अंगीकृत किया गया?',
    },
  },
  {
    id: 'pyq-pol-07',
    year: 2022,
    subjectId: 'polity',
    topic: 'polity-preamble',
    question: {
      en: 'Which words were added to the Preamble by the 42nd Constitutional Amendment Act, 1976?',
      hi: '42वें संविधान संशोधन अधिनियम, 1976 द्वारा प्रस्तावना में कौन-से शब्द जोड़े गए?',
    },
  },
  {
    id: 'pyq-pol-08',
    year: 2019,
    subjectId: 'polity',
    topic: 'polity-parliament',
    question: {
      en: 'What is the maximum permissible gap between two sessions of Parliament?',
      hi: 'संसद के दो सत्रों के बीच अधिकतम अनुमेय अंतराल कितना है?',
    },
  },
  {
    id: 'pyq-pol-09',
    subjectId: 'polity',
    topic: 'polity-executive',
    question: {
      en: 'Who among the following administers the oath of office to the President of India?',
      hi: 'निम्नलिखित में से कौन भारत के राष्ट्रपति को पद की शपथ दिलाता है?',
    },
  },
  {
    id: 'pyq-pol-10',
    year: 2021,
    subjectId: 'polity',
    topic: 'polity-judiciary',
    question: {
      en: 'The power of judicial review in India is primarily derived from which Article?',
      hi: 'भारत में न्यायिक पुनर्विलोकन की शक्ति मुख्यतः किस अनुच्छेद से प्राप्त होती है?',
    },
  },

  // ─── History ────────────────────────────────────────────────────────────
  {
    id: 'pyq-his-01',
    year: 2018,
    subjectId: 'history',
    topic: 'history-freedom-bihar',
    question: {
      en: 'The Champaran Satyagraha of 1917 was led by which leader in Bihar?',
      hi: '1917 का चंपारण सत्याग्रह बिहार में किस नेता के नेतृत्व में हुआ?',
    },
  },
  {
    id: 'pyq-his-02',
    year: 2020,
    subjectId: 'history',
    topic: 'history-freedom-bihar',
    question: {
      en: 'Who is popularly known as the "Sher-e-Bihar" for his role in the freedom movement?',
      hi: 'स्वतंत्रता आंदोलन में अपनी भूमिका के लिए "शेर-ए-बिहार" के नाम से कौन प्रसिद्ध हैं?',
    },
  },
  {
    id: 'pyq-his-03',
    subjectId: 'history',
    topic: 'history-freedom-bihar',
    question: {
      en: 'The 1942 Quit India Movement saw a famous hoisting of the flag at the Patna Secretariat; how many students are remembered as martyrs there?',
      hi: '1942 के भारत छोड़ो आंदोलन में पटना सचिवालय पर ध्वजारोहण प्रसिद्ध है; वहाँ कितने छात्र शहीदों के रूप में स्मरण किए जाते हैं?',
    },
  },
  {
    id: 'pyq-his-04',
    year: 2019,
    subjectId: 'history',
    topic: 'history-freedom-bihar',
    question: {
      en: 'Who was the first President of independent India and hailed from Bihar?',
      hi: 'स्वतंत्र भारत के प्रथम राष्ट्रपति कौन थे, जो बिहार से थे?',
    },
  },
  {
    id: 'pyq-his-05',
    year: 2021,
    subjectId: 'history',
    topic: 'history-ancient-bihar',
    question: {
      en: 'Which ancient university, located in present-day Bihar, was a renowned centre of Buddhist learning?',
      hi: 'वर्तमान बिहार में स्थित कौन-सा प्राचीन विश्वविद्यालय बौद्ध शिक्षा का प्रसिद्ध केंद्र था?',
    },
  },
  {
    id: 'pyq-his-06',
    subjectId: 'history',
    topic: 'history-ancient-bihar',
    question: {
      en: 'Chandragupta Maurya founded the Mauryan Empire with its capital at which city?',
      hi: 'चंद्रगुप्त मौर्य ने किस नगर को राजधानी बनाकर मौर्य साम्राज्य की स्थापना की?',
    },
  },
  {
    id: 'pyq-his-07',
    year: 2018,
    subjectId: 'history',
    topic: 'history-modern-india',
    question: {
      en: 'The Indian National Congress was founded in the year:',
      hi: 'भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई?',
    },
  },
  {
    id: 'pyq-his-08',
    subjectId: 'history',
    topic: 'history-medieval-bihar',
    question: {
      en: 'Sher Shah Suri, the medieval ruler associated with the Grand Trunk Road, was born in which region?',
      hi: 'ग्रैंड ट्रंक रोड से जुड़े मध्यकालीन शासक शेरशाह सूरी का जन्म किस क्षेत्र में हुआ था?',
    },
  },

  // ─── Geography ──────────────────────────────────────────────────────────
  {
    id: 'pyq-geo-01',
    year: 2019,
    subjectId: 'geography',
    topic: 'geography-bihar',
    question: {
      en: 'Which river is popularly known as the "Sorrow of Bihar"?',
      hi: 'कौन-सी नदी "बिहार का शोक" के नाम से प्रसिद्ध है?',
    },
  },
  {
    id: 'pyq-geo-02',
    year: 2022,
    subjectId: 'geography',
    topic: 'geography-bihar',
    question: {
      en: 'The river Ganga enters Bihar near which western district?',
      hi: 'गंगा नदी किस पश्चिमी जिले के पास बिहार में प्रवेश करती है?',
    },
  },
  {
    id: 'pyq-geo-03',
    subjectId: 'geography',
    topic: 'geography-bihar',
    question: {
      en: 'Bihar was bifurcated in the year 2000 to create which new state?',
      hi: 'वर्ष 2000 में बिहार का विभाजन कर कौन-सा नया राज्य बनाया गया?',
    },
  },
  {
    id: 'pyq-geo-04',
    year: 2020,
    subjectId: 'geography',
    topic: 'geography-india',
    question: {
      en: 'The Tropic of Cancer passes through approximately how many Indian states?',
      hi: 'कर्क रेखा भारत के लगभग कितने राज्यों से होकर गुजरती है?',
    },
  },
  {
    id: 'pyq-geo-05',
    subjectId: 'geography',
    topic: 'geography-india',
    question: {
      en: 'Which is the longest river flowing entirely within India?',
      hi: 'पूर्णतः भारत के भीतर बहने वाली सबसे लंबी नदी कौन-सी है?',
    },
  },
  {
    id: 'pyq-geo-06',
    year: 2021,
    subjectId: 'geography',
    topic: 'geography-bihar-agri',
    question: {
      en: 'Which crop is the principal food grain (kharif) crop of Bihar?',
      hi: 'बिहार की प्रमुख खाद्यान्न (खरीफ) फसल कौन-सी है?',
    },
  },
  {
    id: 'pyq-geo-07',
    subjectId: 'geography',
    topic: 'geography-bihar-agri',
    question: {
      en: 'Bihar is a leading producer of which fruit, especially the Shahi variety of Muzaffarpur?',
      hi: 'बिहार किस फल का अग्रणी उत्पादक है, विशेषकर मुजफ्फरपुर की शाही किस्म का?',
    },
  },

  // ─── Economy ───────────────────────────────────────────────────────────
  {
    id: 'pyq-eco-01',
    year: 2019,
    subjectId: 'economy',
    topic: 'economy-basics',
    question: {
      en: 'Which body in India is responsible for computing the Gross Domestic Product (GDP)?',
      hi: 'भारत में सकल घरेलू उत्पाद (GDP) की गणना के लिए कौन-सी संस्था उत्तरदायी है?',
    },
  },
  {
    id: 'pyq-eco-02',
    subjectId: 'economy',
    topic: 'economy-basics',
    question: {
      en: 'The term "primary sector" of an economy chiefly refers to which type of activity?',
      hi: 'अर्थव्यवस्था के "प्राथमिक क्षेत्र" शब्द से मुख्यतः किस प्रकार की गतिविधि का बोध होता है?',
    },
  },
  {
    id: 'pyq-eco-03',
    year: 2022,
    subjectId: 'economy',
    topic: 'economy-money',
    question: {
      en: 'Which institution issues currency notes (other than the one-rupee note) in India?',
      hi: 'भारत में (एक रुपये के नोट को छोड़कर) करेंसी नोट कौन-सी संस्था जारी करती है?',
    },
  },
  {
    id: 'pyq-eco-04',
    year: 2020,
    subjectId: 'economy',
    topic: 'economy-bihar',
    question: {
      en: 'The Bihar Economic Survey is presented every year by which department of the state government?',
      hi: 'बिहार आर्थिक सर्वेक्षण प्रतिवर्ष राज्य सरकार के किस विभाग द्वारा प्रस्तुत किया जाता है?',
    },
  },
  {
    id: 'pyq-eco-05',
    subjectId: 'economy',
    topic: 'economy-bihar',
    question: {
      en: 'Agriculture and allied activities form a major part of Bihar\'s economy; which sector employs the largest share of its workforce?',
      hi: 'कृषि व संबद्ध गतिविधियाँ बिहार की अर्थव्यवस्था का बड़ा भाग हैं; कौन-सा क्षेत्र इसके कार्यबल के सबसे बड़े हिस्से को रोज़गार देता है?',
    },
  },

  // ─── Science & Technology ─────────────────────────────────────────────────
  {
    id: 'pyq-sci-01',
    year: 2019,
    subjectId: 'science',
    topic: 'science-everyday',
    question: {
      en: 'Which gas is most abundant in the Earth\'s atmosphere?',
      hi: 'पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन-सी गैस पाई जाती है?',
    },
  },
  {
    id: 'pyq-sci-02',
    subjectId: 'science',
    topic: 'science-everyday',
    question: {
      en: 'The chemical formula of common table salt is:',
      hi: 'साधारण खाने के नमक का रासायनिक सूत्र क्या है?',
    },
  },
  {
    id: 'pyq-sci-03',
    year: 2021,
    subjectId: 'science',
    topic: 'science-body',
    question: {
      en: 'Which vitamin is synthesised by the human skin on exposure to sunlight?',
      hi: 'सूर्य के प्रकाश के संपर्क में आने पर मानव त्वचा द्वारा कौन-सा विटामिन संश्लेषित होता है?',
    },
  },
  {
    id: 'pyq-sci-04',
    subjectId: 'science',
    topic: 'science-space',
    question: {
      en: 'What is the name of the Indian space agency headquartered in Bengaluru?',
      hi: 'बेंगलुरु में मुख्यालय वाली भारतीय अंतरिक्ष एजेंसी का नाम क्या है?',
    },
  },

  // ─── Bihar Special (high weightage) ──────────────────────────────────────
  {
    id: 'pyq-bih-01',
    year: 2018,
    subjectId: 'bihar',
    topic: 'bihar-general',
    question: {
      en: 'What is the capital city of Bihar?',
      hi: 'बिहार की राजधानी कौन-सा नगर है?',
    },
  },
  {
    id: 'pyq-bih-02',
    year: 2020,
    subjectId: 'bihar',
    topic: 'bihar-general',
    question: {
      en: 'In which year did Bihar attain the status of a separate province, separated from Bengal?',
      hi: 'बंगाल से पृथक होकर बिहार को किस वर्ष एक अलग प्रांत का दर्जा प्राप्त हुआ?',
    },
  },
  {
    id: 'pyq-bih-03',
    subjectId: 'bihar',
    topic: 'bihar-general',
    question: {
      en: 'Bihar shares an international border with which neighbouring country?',
      hi: 'बिहार किस पड़ोसी देश के साथ अंतरराष्ट्रीय सीमा साझा करता है?',
    },
  },
  {
    id: 'pyq-bih-04',
    year: 2023,
    subjectId: 'bihar',
    topic: 'bihar-general',
    question: {
      en: 'Which is the official language of the State of Bihar?',
      hi: 'बिहार राज्य की राजभाषा कौन-सी है?',
    },
  },
  {
    id: 'pyq-bih-05',
    year: 2021,
    subjectId: 'bihar',
    topic: 'bihar-culture',
    question: {
      en: 'Which folk painting style, famous worldwide, originates from the Mithila region of Bihar?',
      hi: 'विश्वप्रसिद्ध कौन-सी लोक चित्रकला शैली बिहार के मिथिला क्षेत्र से उत्पन्न हुई है?',
    },
  },
  {
    id: 'pyq-bih-06',
    subjectId: 'bihar',
    topic: 'bihar-schemes',
    question: {
      en: 'The Bihar government\'s cycle scheme for schoolgirls is popularly known by which name?',
      hi: 'स्कूली छात्राओं के लिए बिहार सरकार की साइकिल योजना किस नाम से लोकप्रिय है?',
    },
  },
];

export const TOTAL_PYQS = PYQS.length;

/** Count of PYQs per subject, sorted descending by count. */
export function subjectWeightage(): { subjectId: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of PYQS) counts.set(p.subjectId, (counts.get(p.subjectId) ?? 0) + 1);
  return [...counts.entries()]
    .map(([subjectId, count]) => ({ subjectId, count }))
    .sort((a, b) => b.count - a.count);
}

export type PYQPriority = 'Very High' | 'High' | 'Medium';

/** Count of PYQs per topic, sorted descending, with a priority band. */
export function topicFrequency(): { topic: string; count: number; priority: PYQPriority }[] {
  const counts = new Map<string, number>();
  for (const p of PYQS) counts.set(p.topic, (counts.get(p.topic) ?? 0) + 1);
  return [...counts.entries()]
    .map(([topic, count]) => ({
      topic,
      count,
      priority: (count >= 4 ? 'Very High' : count === 3 ? 'High' : 'Medium') as PYQPriority,
    }))
    .sort((a, b) => b.count - a.count);
}

/** All PYQs tagged with a given topic. */
export function pyqsForTopic(topic: string): PYQ[] {
  return PYQS.filter((p) => p.topic === topic);
}
