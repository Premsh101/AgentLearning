import type { Chapter } from '../types';

export const mentalCh01: Chapter = {
  id: 'mental-ch01',
  subjectId: 'mental',
  order: 1,
  title: {
    en: 'Numerical Ability: Percentages, Ratios & Averages',
    hi: 'संख्यात्मक क्षमता: प्रतिशत, अनुपात व औसत',
  },
  intro: {
    en: 'BPSC Prelims includes "General Mental Ability" — simple maths and reasoning that many aspirants ignore and then lose easy marks on. The good news: the maths never goes beyond Class-10 level, and a handful of techniques answer most questions in under a minute. This chapter covers the number-based half.',
    hi: 'BPSC प्रारंभिक परीक्षा में "सामान्य मानसिक क्षमता" शामिल है — सरल गणित व तर्क, जिसे कई अभ्यर्थी छोड़ देते हैं और आसान अंक गँवा देते हैं। अच्छी बात: गणित कभी कक्षा-10 के स्तर से आगे नहीं जाता, और कुछ ही तकनीकें अधिकांश प्रश्न एक मिनट से कम में हल कर देती हैं। यह अध्याय संख्या-आधारित भाग को कवर करता है।',
  },
  sections: [
    {
      id: 'percentages',
      heading: { en: 'Percentages — the Master Key', hi: 'प्रतिशत — मास्टर चाबी' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '"Per cent" simply means **per hundred**. So 25% = 25/100 = **1/4**. The fastest solvers convert percentages to fractions: 50% = 1/2, 25% = 1/4, 20% = 1/5, 12.5% = 1/8, 33⅓% = 1/3. To find x% of N, multiply: **x% of N = (x × N) / 100**.',
            hi: '"प्रतिशत" का अर्थ है **प्रति सौ**। अतः 25% = 25/100 = **1/4**। तेज़ हल करने वाले प्रतिशत को भिन्न में बदलते हैं: 50% = 1/2, 25% = 1/4, 20% = 1/5, 12.5% = 1/8, 33⅓% = 1/3। N का x% निकालने हेतु गुणा करें: **N का x% = (x × N) / 100**।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The fraction–percentage table (memorise this!)', hi: 'भिन्न–प्रतिशत तालिका (इसे कंठस्थ करें!)' },
          headers: [
            { en: 'Fraction', hi: 'भिन्न' },
            { en: 'Percentage', hi: 'प्रतिशत' },
          ],
          rows: [
            [{ en: '1/2', hi: '1/2' }, { en: '50%', hi: '50%' }],
            [{ en: '1/3', hi: '1/3' }, { en: '33⅓%', hi: '33⅓%' }],
            [{ en: '1/4', hi: '1/4' }, { en: '25%', hi: '25%' }],
            [{ en: '1/5', hi: '1/5' }, { en: '20%', hi: '20%' }],
            [{ en: '1/8', hi: '1/8' }, { en: '12.5%', hi: '12.5%' }],
            [{ en: '1/10', hi: '1/10' }, { en: '10%', hi: '10%' }],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: '**Successive changes do not simply add.** Two discounts of 10% and 10% are NOT 20%: ₹100 → ₹90 → ₹81, i.e. **19%** overall. Formula for two successive changes of a% and b%: net = a + b + (a×b)/100 (use minus signs for decreases).',
            hi: '**क्रमिक परिवर्तन सीधे जुड़ते नहीं हैं।** 10% और 10% की दो छूटें 20% नहीं होतीं: ₹100 → ₹90 → ₹81, अर्थात् कुल **19%**। a% व b% के दो क्रमिक परिवर्तनों का सूत्र: शुद्ध = a + b + (a×b)/100 (कमी के लिए ऋण चिह्न लगाएँ)।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: '**Reverse trick:** x% of y = y% of x. So 8% of 50 feels hard, but 50% of 8 = **4** — same answer, instant.',
            hi: '**उल्टी युक्ति:** y का x% = x का y%। अतः 50 का 8% कठिन लगता है, पर 8 का 50% = **4** — वही उत्तर, तुरंत।',
          },
        },
      ],
    },
    {
      id: 'ratio-average',
      heading: { en: 'Ratio, Proportion & Averages', hi: 'अनुपात, समानुपात व औसत' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Ratio:** to divide an amount in the ratio a : b, the parts are a/(a+b) and b/(a+b) of the total. Example: divide 64 in the ratio 3 : 5 → 8 equal parts of 8 each → **24 and 40**.',
              hi: '**अनुपात:** किसी राशि को a : b के अनुपात में बाँटने पर भाग होते हैं कुल का a/(a+b) व b/(a+b)। उदाहरण: 64 को 3 : 5 में बाँटें → 8-8 के 8 बराबर भाग → **24 व 40**।',
            },
            {
              en: '**Average = Sum ÷ Count.** Example: average of 12, 18, 24, 30, 36 = 120 ÷ 5 = **24**. Useful reverse form: **Sum = Average × Count**.',
              hi: '**औसत = योग ÷ संख्या।** उदाहरण: 12, 18, 24, 30, 36 का औसत = 120 ÷ 5 = **24**। उपयोगी उल्टा रूप: **योग = औसत × संख्या**।',
            },
            {
              en: '**Equally spaced numbers:** the average is simply the **middle value** (or the average of the two middle values). In the example above the middle number is 24 — no addition needed!',
              hi: '**समान अंतराल वाली संख्याएँ:** औसत बस **बीच का मान** होता है (या बीच के दो मानों का औसत)। ऊपर के उदाहरण में बीच की संख्या 24 है — जोड़ने की आवश्यकता ही नहीं!',
            },
          ],
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of an average as the **"equal sharing" number**: if 5 friends pool all their money and share it equally, each gets the average. That instantly explains why one very rich friend (an outlier) pulls the average up.',
            hi: 'औसत को **"बराबर बाँटने वाली" संख्या** समझें: यदि 5 मित्र अपना सारा धन मिलाकर बराबर बाँट लें, तो हर एक को औसत मिलता है। इससे तुरंत समझ आता है कि एक बहुत धनी मित्र (विचलित मान) औसत को ऊपर क्यों खींच देता है।',
          },
        },
      ],
    },
    {
      id: 'speed-work',
      heading: { en: 'Speed–Time & Work — Two Formulas Rule All', hi: 'चाल–समय व कार्य — दो सूत्र, सब हल' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Speed = Distance ÷ Time.** Example: 240 km in 4 hours → 240 ÷ 4 = **60 km/h**. Conversion: km/h → m/s multiply by 5/18; m/s → km/h multiply by 18/5.',
              hi: '**चाल = दूरी ÷ समय।** उदाहरण: 4 घंटे में 240 किमी → 240 ÷ 4 = **60 किमी/घंटा**। रूपांतरण: किमी/घंटा → मी/से हेतु 5/18 से गुणा; मी/से → किमी/घंटा हेतु 18/5 से गुणा।',
            },
            {
              en: '**Simple Interest = (P × R × T) / 100.** Example: ₹5,000 at 8% for 3 years → (5000 × 8 × 3)/100 = **₹1,200**.',
              hi: '**साधारण ब्याज = (मूलधन × दर × समय) / 100।** उदाहरण: ₹5,000 पर 8% से 3 वर्ष → (5000 × 8 × 3)/100 = **₹1,200**।',
            },
            {
              en: '**Work:** if A finishes a job in 10 days and B in 15 days, in one day they do 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = **1/6** → together they finish in **6 days**.',
              hi: '**कार्य:** यदि A कोई काम 10 दिन में और B 15 दिन में करे, तो एक दिन में वे करते हैं 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = **1/6** → साथ मिलकर **6 दिन** में पूरा।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Mental-ability questions are the most **score-friendly** in the whole paper: no facts to forget, no current affairs to update — just the same dozen patterns, year after year. Fifteen minutes of practice a day converts this section into guaranteed marks.',
            hi: 'मानसिक-क्षमता के प्रश्न पूरे पेपर में सबसे **अंक-अनुकूल** होते हैं: न भूलने वाले तथ्य, न बदलते करेंट अफेयर्स — बस वही दर्जन भर पैटर्न, हर वर्ष। प्रतिदिन पंद्रह मिनट का अभ्यास इस खंड को पक्के अंकों में बदल देता है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'x% of N = (x × N)/100; learn the fraction table (25% = 1/4, 20% = 1/5, 12.5% = 1/8). **x% of y = y% of x.**',
      hi: 'N का x% = (x × N)/100; भिन्न तालिका याद करें (25% = 1/4, 20% = 1/5, 12.5% = 1/8)। **y का x% = x का y%।**',
    },
    {
      en: 'Successive changes: net = a + b + ab/100. Two 10% discounts = **19%**, not 20%.',
      hi: 'क्रमिक परिवर्तन: शुद्ध = a + b + ab/100। दो 10% छूटें = **19%**, 20% नहीं।',
    },
    {
      en: 'Ratio a : b over total T → parts aT/(a+b) and bT/(a+b). 64 in 3 : 5 → 24 and 40.',
      hi: 'कुल T पर अनुपात a : b → भाग aT/(a+b) व bT/(a+b)। 64 को 3 : 5 में → 24 व 40।',
    },
    {
      en: 'Average = Sum ÷ Count; for equally spaced numbers, average = middle value.',
      hi: 'औसत = योग ÷ संख्या; समान अंतराल की संख्याओं में औसत = बीच का मान।',
    },
    {
      en: 'Speed = Distance ÷ Time (km/h ↔ m/s via 5/18); Simple Interest = PRT/100.',
      hi: 'चाल = दूरी ÷ समय (किमी/घंटा ↔ मी/से हेतु 5/18); साधारण ब्याज = मूलधन×दर×समय/100।',
    },
    {
      en: 'Work: add the per-day fractions — A(10 days) + B(15 days) → 1/10 + 1/15 = 1/6 → 6 days together.',
      hi: 'कार्य: प्रतिदिन के भिन्न जोड़ें — A(10 दिन) + B(15 दिन) → 1/10 + 1/15 = 1/6 → साथ में 6 दिन।',
    },
  ],
  quiz: [
    {
      id: 'm1q1',
      type: 'mcq',
      question: { en: 'What is 25% of 480?', hi: '480 का 25% क्या है?' },
      options: [
        { en: '100', hi: '100' },
        { en: '110', hi: '110' },
        { en: '120', hi: '120' },
        { en: '140', hi: '140' },
      ],
      answer: 2,
      explanation: {
        en: '25% = 1/4, and 480 ÷ 4 = 120.',
        hi: '25% = 1/4, और 480 ÷ 4 = 120।',
      },
      topic: 'mental-numerical',
      difficulty: 1,
    },
    {
      id: 'm1q2',
      type: 'mcq',
      question: {
        en: 'Divide ₹64 between two people in the ratio 3 : 5. The larger share is:',
        hi: '₹64 को दो व्यक्तियों में 3 : 5 के अनुपात में बाँटें। बड़ा भाग है:',
      },
      options: [
        { en: '₹24', hi: '₹24' },
        { en: '₹32', hi: '₹32' },
        { en: '₹40', hi: '₹40' },
        { en: '₹48', hi: '₹48' },
      ],
      answer: 2,
      explanation: {
        en: '3 + 5 = 8 parts; each part = 64/8 = 8. Larger share = 5 × 8 = ₹40.',
        hi: '3 + 5 = 8 भाग; प्रत्येक भाग = 64/8 = 8। बड़ा भाग = 5 × 8 = ₹40।',
      },
      topic: 'mental-numerical',
      difficulty: 1,
    },
    {
      id: 'm1q3',
      type: 'mcq',
      question: { en: 'The average of 12, 18, 24, 30 and 36 is:', hi: '12, 18, 24, 30 व 36 का औसत है:' },
      options: [
        { en: '22', hi: '22' },
        { en: '24', hi: '24' },
        { en: '26', hi: '26' },
        { en: '28', hi: '28' },
      ],
      answer: 1,
      explanation: {
        en: 'These are equally spaced (gap 6), so the average is the middle value: 24. (Check: sum 120 ÷ 5 = 24.)',
        hi: 'ये समान अंतराल (6) पर हैं, अतः औसत बीच का मान है: 24। (जाँच: योग 120 ÷ 5 = 24।)',
      },
      topic: 'mental-numerical',
      difficulty: 1,
    },
    {
      id: 'm1q4',
      type: 'mcq',
      question: {
        en: 'A train covers 240 km in 4 hours. Its speed is:',
        hi: 'एक रेलगाड़ी 4 घंटे में 240 किमी तय करती है। उसकी चाल है:',
      },
      options: [
        { en: '50 km/h', hi: '50 किमी/घंटा' },
        { en: '55 km/h', hi: '55 किमी/घंटा' },
        { en: '60 km/h', hi: '60 किमी/घंटा' },
        { en: '65 km/h', hi: '65 किमी/घंटा' },
      ],
      answer: 2,
      explanation: {
        en: 'Speed = Distance ÷ Time = 240 ÷ 4 = 60 km/h.',
        hi: 'चाल = दूरी ÷ समय = 240 ÷ 4 = 60 किमी/घंटा।',
      },
      topic: 'mental-numerical',
      difficulty: 1,
    },
    {
      id: 'm1q5',
      type: 'mcq',
      question: {
        en: 'The simple interest on ₹5,000 at 8% per annum for 3 years is:',
        hi: '₹5,000 पर 8% वार्षिक दर से 3 वर्ष का साधारण ब्याज है:',
      },
      options: [
        { en: '₹1,000', hi: '₹1,000' },
        { en: '₹1,200', hi: '₹1,200' },
        { en: '₹1,250', hi: '₹1,250' },
        { en: '₹1,500', hi: '₹1,500' },
      ],
      answer: 1,
      explanation: {
        en: 'SI = PRT/100 = (5000 × 8 × 3)/100 = ₹1,200.',
        hi: 'साधारण ब्याज = मूलधन×दर×समय/100 = (5000 × 8 × 3)/100 = ₹1,200।',
      },
      topic: 'mental-numerical',
      difficulty: 2,
    },
    {
      id: 'm1q6',
      type: 'mcq',
      question: {
        en: 'A number increased by 20% becomes 240. The original number is:',
        hi: 'कोई संख्या 20% बढ़ने पर 240 हो जाती है। मूल संख्या है:',
      },
      options: [
        { en: '192', hi: '192' },
        { en: '200', hi: '200' },
        { en: '210', hi: '210' },
        { en: '220', hi: '220' },
      ],
      answer: 1,
      explanation: {
        en: 'If the original is x, then 1.2x = 240 → x = 200. (Trap: 240 − 20% of 240 = 192 is wrong, because the 20% was taken on the original, not on 240.)',
        hi: 'यदि मूल संख्या x है, तो 1.2x = 240 → x = 200। (जाल: 240 − 240 का 20% = 192 गलत है, क्योंकि 20% मूल संख्या पर लिया गया था, 240 पर नहीं।)',
      },
      topic: 'mental-numerical',
      difficulty: 2,
    },
    {
      id: 'm1q7',
      type: 'mcq',
      question: {
        en: 'Two successive discounts of 10% and 10% are equivalent to a single discount of:',
        hi: '10% व 10% की दो क्रमिक छूटें किस एकल छूट के बराबर हैं?',
      },
      options: [
        { en: '20%', hi: '20%' },
        { en: '19%', hi: '19%' },
        { en: '18%', hi: '18%' },
        { en: '21%', hi: '21%' },
      ],
      answer: 1,
      explanation: {
        en: '₹100 → ₹90 → ₹81, so the total discount is ₹19 = 19%. Formula: −10 − 10 + (10×10)/100 = −19%.',
        hi: '₹100 → ₹90 → ₹81, अतः कुल छूट ₹19 = 19%। सूत्र: −10 − 10 + (10×10)/100 = −19%।',
      },
      topic: 'mental-numerical',
      difficulty: 2,
    },
    {
      id: 'm1q8',
      type: 'mcq',
      question: {
        en: 'A can finish a job in 10 days and B in 15 days. Working together they finish it in:',
        hi: 'A कोई काम 10 दिन में और B 15 दिन में कर सकता है। साथ मिलकर वे उसे पूरा करेंगे:',
      },
      options: [
        { en: '5 days', hi: '5 दिन' },
        { en: '6 days', hi: '6 दिन' },
        { en: '7.5 days', hi: '7.5 दिन' },
        { en: '12.5 days', hi: '12.5 दिन' },
      ],
      answer: 1,
      explanation: {
        en: 'Per day: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 of the job → 6 days together.',
        hi: 'प्रतिदिन: 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = काम का 1/6 → साथ में 6 दिन।',
      },
      topic: 'mental-numerical',
      difficulty: 2,
    },
  ],
};
