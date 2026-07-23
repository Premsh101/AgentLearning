import type { Chapter } from '../types';

export const biharCh01: Chapter = {
  id: 'bihar-ch01',
  subjectId: 'bihar',
  order: 1,
  title: {
    en: 'Bihar: General Introduction & Key Facts',
    hi: 'बिहार: सामान्य परिचय एवं प्रमुख तथ्य',
  },
  intro: {
    en: 'Bihar-specific GK is what separates BPSC from every other exam — and this is where toppers score. This chapter gives you the foundation facts about Bihar that appear in almost every BPSC prelims: formation, geography, census numbers and state symbols.',
    hi: 'बिहार-विशेष सामान्य ज्ञान ही BPSC को अन्य परीक्षाओं से अलग बनाता है — और यहीं टॉपर आगे निकलते हैं। यह अध्याय बिहार के वे आधारभूत तथ्य देता है जो लगभग हर BPSC प्रारंभिक परीक्षा में आते हैं: गठन, भूगोल, जनगणना के आँकड़े और राज्य प्रतीक।',
  },
  sections: [
    {
      id: 'formation',
      heading: { en: 'Formation of Bihar', hi: 'बिहार का गठन' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**22 March 1912** — Bihar (with Orissa) was separated from the **Bengal Presidency**. This day is celebrated every year as **Bihar Diwas**.',
              hi: '**22 मार्च 1912** — बिहार (उड़ीसा सहित) को **बंगाल प्रेसीडेंसी** से अलग किया गया। यह दिन हर वर्ष **बिहार दिवस** के रूप में मनाया जाता है।',
            },
            {
              en: '**1 April 1936** — Orissa was separated from Bihar and became a separate province.',
              hi: '**1 अप्रैल 1936** — उड़ीसा को बिहार से अलग कर एक पृथक प्रांत बनाया गया।',
            },
            {
              en: '**15 November 2000** — **Jharkhand** was carved out of southern Bihar (India\'s 28th state).',
              hi: '**15 नवंबर 2000** — दक्षिणी बिहार से **झारखंड** बना (भारत का 28वाँ राज्य)।',
            },
            {
              en: '**Patna High Court** was established in **1916**.',
              hi: '**पटना उच्च न्यायालय** की स्थापना **1916** में हुई।',
            },
          ],
        },
        {
          type: 'note',
          title: { en: 'Remember the trio of dates', hi: 'तीन तिथियाँ याद रखें' },
          text: {
            en: '**1912** (born from Bengal) → **1936** (Orissa left) → **2000** (Jharkhand left). Three dates, three separations — asked in some form in almost every BPSC exam.',
            hi: '**1912** (बंगाल से जन्म) → **1936** (उड़ीसा अलग) → **2000** (झारखंड अलग)। तीन तिथियाँ, तीन विभाजन — लगभग हर BPSC परीक्षा में किसी न किसी रूप में पूछा जाता है।',
          },
        },
      ],
    },
    {
      id: 'geography',
      heading: { en: 'Location, Borders & Administration', hi: 'स्थिति, सीमाएँ व प्रशासन' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Area: 94,163 sq km** — 12th largest state of India. Bihar is a **landlocked** state.',
              hi: '**क्षेत्रफल: 94,163 वर्ग किमी** — भारत का 12वाँ सबसे बड़ा राज्य। बिहार **स्थलरुद्ध (landlocked)** राज्य है।',
            },
            {
              en: 'Borders: **Nepal (north)** — an international border; **West Bengal (east)**; **Uttar Pradesh (west)**; **Jharkhand (south)**.',
              hi: 'सीमाएँ: **नेपाल (उत्तर)** — अंतरराष्ट्रीय सीमा; **पश्चिम बंगाल (पूर्व)**; **उत्तर प्रदेश (पश्चिम)**; **झारखंड (दक्षिण)**।',
            },
            {
              en: 'Administrative units: **9 divisions, 38 districts**. Capital: **Patna**.',
              hi: 'प्रशासनिक इकाइयाँ: **9 प्रमंडल, 38 जिले**। राजधानी: **पटना**।',
            },
            {
              en: 'The **Ganga** flows west-to-east and divides Bihar into the **North Bihar plain** and **South Bihar plain**.',
              hi: '**गंगा** पश्चिम से पूर्व बहती हुई बिहार को **उत्तर बिहार मैदान** और **दक्षिण बिहार मैदान** में बाँटती है।',
            },
            {
              en: 'North-flowing tributaries: **Kosi ("Sorrow of Bihar")**, Gandak, Bagmati, Kamla. South of the Ganga: **Sone, Punpun, Falgu**.',
              hi: 'उत्तर की सहायक नदियाँ: **कोसी ("बिहार का शोक")**, गंडक, बागमती, कमला। गंगा के दक्षिण: **सोन, पुनपुन, फल्गु**।',
            },
          ],
        },
      ],
    },
    {
      id: 'census',
      heading: { en: 'Census 2011 — Bihar Highlights', hi: 'जनगणना 2011 — बिहार के मुख्य आँकड़े' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'Bihar in Census 2011 (very high yield)', hi: 'जनगणना 2011 में बिहार (अति महत्वपूर्ण)' },
          headers: [
            { en: 'Indicator', hi: 'संकेतक' },
            { en: 'Bihar figure', hi: 'बिहार का आँकड़ा' },
          ],
          rows: [
            [
              { en: 'Population', hi: 'जनसंख्या' },
              {
                en: '**10.41 crore** (104 million) — **3rd** most populous state (after UP, Maharashtra)',
                hi: '**10.41 करोड़** — जनसंख्या में **तीसरा** स्थान (यूपी, महाराष्ट्र के बाद)',
              },
            ],
            [
              { en: 'Population density', hi: 'जनसंख्या घनत्व' },
              {
                en: '**1,106 per sq km** — the **highest** among Indian states',
                hi: '**1,106 प्रति वर्ग किमी** — भारतीय राज्यों में **सर्वाधिक**',
              },
            ],
            [
              { en: 'Decadal growth (2001–11)', hi: 'दशकीय वृद्धि (2001–11)' },
              { en: '**25.4%** — among the highest in India', hi: '**25.4%** — भारत में सर्वाधिक में से' },
            ],
            [
              { en: 'Sex ratio', hi: 'लिंगानुपात' },
              { en: '**918** females per 1,000 males', hi: '**918** महिलाएँ प्रति 1,000 पुरुष' },
            ],
            [
              { en: 'Literacy', hi: 'साक्षरता' },
              {
                en: '**61.8%** (male 71.2%, female 51.5%) — the **lowest** among states in 2011',
                hi: '**61.8%** (पुरुष 71.2%, महिला 51.5%) — 2011 में राज्यों में **न्यूनतम**',
              },
            ],
            [
              { en: 'Urban population', hi: 'शहरी जनसंख्या' },
              { en: 'About **11.3%** — one of the least urbanised states', hi: 'लगभग **11.3%** — सबसे कम शहरीकृत राज्यों में से' },
            ],
          ],
        },
        {
          type: 'note',
          title: { en: 'Exam trick', hi: 'परीक्षा ट्रिक' },
          text: {
            en: 'For Bihar in 2011, remember the pattern of extremes: density **highest**, literacy **lowest**, urbanisation **among the lowest**, population **3rd**. BPSC frames questions exactly around these superlatives.',
            hi: '2011 में बिहार के लिए चरम स्थितियों का पैटर्न याद रखें: घनत्व **सर्वाधिक**, साक्षरता **न्यूनतम**, शहरीकरण **सबसे कम में**, जनसंख्या **तीसरी**। BPSC इन्हीं "सबसे" शब्दों पर प्रश्न बनाता है।',
          },
        },
      ],
    },
    {
      id: 'symbols',
      heading: { en: 'State Symbols of Bihar', hi: 'बिहार के राज्य प्रतीक' },
      blocks: [
        {
          type: 'table',
          headers: [
            { en: 'Symbol', hi: 'प्रतीक' },
            { en: 'Bihar', hi: 'बिहार' },
          ],
          rows: [
            [
              { en: 'State animal', hi: 'राजकीय पशु' },
              { en: '**Gaur** (Indian bison)', hi: '**गौर** (भारतीय बाइसन)' },
            ],
            [
              { en: 'State bird', hi: 'राजकीय पक्षी' },
              { en: '**House sparrow** (Gauraiya)', hi: '**गौरैया** (हाउस स्पैरो)' },
            ],
            [
              { en: 'State tree', hi: 'राजकीय वृक्ष' },
              { en: '**Peepal** (Ficus religiosa)', hi: '**पीपल** (फाइकस रिलिजिओसा)' },
            ],
            [
              { en: 'State flower', hi: 'राजकीय पुष्प' },
              { en: '**Kachnar** (Bauhinia variegata)', hi: '**कचनार** (बॉहिनिया वेरिएगाटा)' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            en: 'Bihar\'s identity runs deep in Indian history — ancient **Magadha**, the **Nalanda and Vikramshila** universities, and **Pataliputra** (modern Patna) as the capital of the Maurya and Gupta empires. We will cover the history of Bihar in a dedicated chapter.',
            hi: 'बिहार की पहचान भारतीय इतिहास में गहरी है — प्राचीन **मगध**, **नालंदा व विक्रमशिला** विश्वविद्यालय, और मौर्य व गुप्त साम्राज्यों की राजधानी **पाटलिपुत्र** (आधुनिक पटना)। बिहार का इतिहास हम एक अलग अध्याय में पढ़ेंगे।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**22 March 1912** — Bihar separated from Bengal (Bihar Diwas). Orissa separated **1936**; Jharkhand separated **15 Nov 2000**.',
      hi: '**22 मार्च 1912** — बिहार बंगाल से अलग (बिहार दिवस)। उड़ीसा **1936** में अलग; झारखंड **15 नवंबर 2000** को अलग।',
    },
    {
      en: 'Area **94,163 sq km** (12th largest); landlocked; borders Nepal, WB, UP, Jharkhand.',
      hi: 'क्षेत्रफल **94,163 वर्ग किमी** (12वाँ सबसे बड़ा); स्थलरुद्ध; सीमाएँ — नेपाल, पश्चिम बंगाल, यूपी, झारखंड।',
    },
    {
      en: '**9 divisions, 38 districts**; capital Patna; Patna High Court est. **1916**.',
      hi: '**9 प्रमंडल, 38 जिले**; राजधानी पटना; पटना उच्च न्यायालय की स्थापना **1916**।',
    },
    {
      en: 'Ganga divides Bihar into North & South plains. **Kosi = "Sorrow of Bihar"**; Sone, Punpun, Falgu flow south of the Ganga.',
      hi: 'गंगा बिहार को उत्तर व दक्षिण मैदानों में बाँटती है। **कोसी = "बिहार का शोक"**; सोन, पुनपुन, फल्गु गंगा के दक्षिण में।',
    },
    {
      en: 'Census 2011: population **10.41 crore (3rd)**; density **1,106 (highest)**; sex ratio **918**; literacy **61.8% (lowest)**.',
      hi: 'जनगणना 2011: जनसंख्या **10.41 करोड़ (तीसरी)**; घनत्व **1,106 (सर्वाधिक)**; लिंगानुपात **918**; साक्षरता **61.8% (न्यूनतम)**।',
    },
    {
      en: 'State symbols: animal **Gaur**, bird **house sparrow**, tree **Peepal**, flower **Kachnar**.',
      hi: 'राज्य प्रतीक: पशु **गौर**, पक्षी **गौरैया**, वृक्ष **पीपल**, पुष्प **कचनार**।',
    },
  ],
  quiz: [
    {
      id: 'b1q1',
      type: 'mcq',
      question: {
        en: 'Bihar Diwas is celebrated on which date?',
        hi: 'बिहार दिवस किस तिथि को मनाया जाता है?',
      },
      options: [
        { en: '22 March', hi: '22 मार्च' },
        { en: '1 April', hi: '1 अप्रैल' },
        { en: '15 November', hi: '15 नवंबर' },
        { en: '26 January', hi: '26 जनवरी' },
      ],
      answer: 0,
      explanation: {
        en: 'Bihar was separated from the Bengal Presidency on 22 March 1912 — celebrated as Bihar Diwas.',
        hi: 'बिहार 22 मार्च 1912 को बंगाल प्रेसीडेंसी से अलग हुआ — इसी दिन बिहार दिवस मनाया जाता है।',
      },
      topic: 'bihar-general',
      difficulty: 1,
    },
    {
      id: 'b1q2',
      type: 'mcq',
      question: {
        en: 'Jharkhand was separated from Bihar in which year?',
        hi: 'झारखंड किस वर्ष बिहार से अलग हुआ?',
      },
      options: [
        { en: '1998', hi: '1998' },
        { en: '2000', hi: '2000' },
        { en: '2001', hi: '2001' },
        { en: '1996', hi: '1996' },
      ],
      answer: 1,
      explanation: {
        en: 'Jharkhand became a separate state on 15 November 2000 (birth anniversary of Birsa Munda).',
        hi: 'झारखंड 15 नवंबर 2000 (बिरसा मुंडा जयंती) को अलग राज्य बना।',
      },
      topic: 'bihar-general',
      difficulty: 1,
    },
    {
      id: 'b1q3',
      type: 'mcq',
      question: {
        en: 'Which river is called the "Sorrow of Bihar"?',
        hi: 'किस नदी को "बिहार का शोक" कहा जाता है?',
      },
      options: [
        { en: 'Gandak', hi: 'गंडक' },
        { en: 'Sone', hi: 'सोन' },
        { en: 'Kosi', hi: 'कोसी' },
        { en: 'Bagmati', hi: 'बागमती' },
      ],
      answer: 2,
      explanation: {
        en: 'The Kosi frequently changes course and causes devastating floods in north Bihar, earning the name "Sorrow of Bihar".',
        hi: 'कोसी बार-बार धारा बदलती है और उत्तर बिहार में विनाशकारी बाढ़ लाती है, इसलिए इसे "बिहार का शोक" कहते हैं।',
      },
      topic: 'bihar-general',
      difficulty: 1,
    },
    {
      id: 'b1q4',
      type: 'mcq',
      question: {
        en: 'As per Census 2011, the population density of Bihar was:',
        hi: 'जनगणना 2011 के अनुसार बिहार का जनसंख्या घनत्व था:',
      },
      options: [
        { en: '904 per sq km', hi: '904 प्रति वर्ग किमी' },
        { en: '1,106 per sq km', hi: '1,106 प्रति वर्ग किमी' },
        { en: '1,001 per sq km', hi: '1,001 प्रति वर्ग किमी' },
        { en: '1,286 per sq km', hi: '1,286 प्रति वर्ग किमी' },
      ],
      answer: 1,
      explanation: {
        en: 'Bihar\'s density of 1,106 persons per sq km was the highest among Indian states in Census 2011.',
        hi: 'जनगणना 2011 में बिहार का घनत्व 1,106 व्यक्ति प्रति वर्ग किमी था — भारतीय राज्यों में सर्वाधिक।',
      },
      topic: 'bihar-general',
      difficulty: 2,
    },
    {
      id: 'b1q5',
      type: 'mcq',
      question: {
        en: 'How many administrative divisions (pramandal) does Bihar have?',
        hi: 'बिहार में कितने प्रमंडल हैं?',
      },
      options: [
        { en: '7', hi: '7' },
        { en: '8', hi: '8' },
        { en: '9', hi: '9' },
        { en: '10', hi: '10' },
      ],
      answer: 2,
      explanation: {
        en: 'Bihar has 9 divisions — Patna, Tirhut, Saran, Darbhanga, Kosi, Purnia, Bhagalpur, Munger and Magadh — and 38 districts.',
        hi: 'बिहार में 9 प्रमंडल हैं — पटना, तिरहुत, सारण, दरभंगा, कोसी, पूर्णिया, भागलपुर, मुंगेर और मगध — तथा 38 जिले।',
      },
      topic: 'bihar-general',
      difficulty: 2,
    },
    {
      id: 'b1q6',
      type: 'mcq',
      question: {
        en: 'The state bird of Bihar is:',
        hi: 'बिहार का राजकीय पक्षी है:',
      },
      options: [
        { en: 'Peacock', hi: 'मोर' },
        { en: 'House sparrow', hi: 'गौरैया' },
        { en: 'Sarus crane', hi: 'सारस' },
        { en: 'Indian roller', hi: 'नीलकंठ' },
      ],
      answer: 1,
      explanation: {
        en: 'The house sparrow (gauraiya) is Bihar\'s state bird; the state animal is the gaur, tree is peepal, flower is kachnar.',
        hi: 'गौरैया बिहार का राजकीय पक्षी है; राजकीय पशु गौर, वृक्ष पीपल और पुष्प कचनार है।',
      },
      topic: 'bihar-general',
      difficulty: 1,
    },
    {
      id: 'b1q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. Bihar shares an international border with Nepal.\n2. As per Census 2011, Bihar\'s literacy rate was the lowest among Indian states.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. बिहार की अंतरराष्ट्रीय सीमा नेपाल से लगती है।\n2. जनगणना 2011 के अनुसार बिहार की साक्षरता दर भारतीय राज्यों में न्यूनतम थी।\nकौन-सा/से कथन सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct: Nepal lies to Bihar\'s north (international border), and Bihar\'s 61.8% literacy was the lowest among states in 2011.',
        hi: 'दोनों सही हैं: नेपाल बिहार के उत्तर में है (अंतरराष्ट्रीय सीमा), और 2011 में बिहार की 61.8% साक्षरता राज्यों में न्यूनतम थी।',
      },
      topic: 'bihar-general',
      difficulty: 2,
    },
    {
      id: 'b1q8',
      type: 'mcq',
      question: {
        en: 'Patna High Court was established in which year?',
        hi: 'पटना उच्च न्यायालय की स्थापना किस वर्ष हुई?',
      },
      options: [
        { en: '1912', hi: '1912' },
        { en: '1916', hi: '1916' },
        { en: '1935', hi: '1935' },
        { en: '1947', hi: '1947' },
      ],
      answer: 1,
      explanation: {
        en: 'Patna High Court was established in 1916, four years after Bihar became a separate province.',
        hi: 'पटना उच्च न्यायालय की स्थापना 1916 में हुई — बिहार के अलग प्रांत बनने के चार वर्ष बाद।',
      },
      topic: 'bihar-general',
      difficulty: 2,
    },
  ],
};
