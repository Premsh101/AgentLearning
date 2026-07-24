import type { Chapter } from '../types';

export const mentalCh02: Chapter = {
  id: 'mental-ch02',
  subjectId: 'mental',
  order: 2,
  title: {
    en: 'Logical Reasoning: Series, Coding & Puzzles',
    hi: 'तार्किक तर्कशक्ति: श्रृंखला, कूटलेखन व पहेलियाँ',
  },
  intro: {
    en: 'Reasoning questions look like puzzles but are really **pattern-spotting**: the same seven or eight patterns appear again and again — number series, letter series, coding-decoding, blood relations, directions, odd-one-out and clock angles. Learn to recognise the pattern, and the answer falls out in seconds.',
    hi: 'तर्कशक्ति के प्रश्न पहेली जैसे दिखते हैं पर वास्तव में **पैटर्न-पहचान** हैं: वही सात-आठ पैटर्न बार-बार आते हैं — संख्या श्रृंखला, अक्षर श्रृंखला, कूटलेखन-कूटवाचन, रक्त संबंध, दिशाएँ, विषम की पहचान व घड़ी के कोण। पैटर्न पहचानना सीख लें, उत्तर सेकंडों में निकल आता है।',
  },
  sections: [
    {
      id: 'series',
      heading: { en: 'Number & Letter Series', hi: 'संख्या व अक्षर श्रृंखला' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'For a **number series**, first check the **differences** between terms. Example: 2, 6, 12, 20, 30, ? — differences are 4, 6, 8, 10 (increasing by 2), so the next difference is 12 → answer **42**. (Bonus pattern: these are 1×2, 2×3, 3×4, 4×5, 5×6, so next is 6×7 = 42.)',
            hi: '**संख्या श्रृंखला** में पहले पदों के बीच का **अंतर** देखें। उदाहरण: 2, 6, 12, 20, 30, ? — अंतर हैं 4, 6, 8, 10 (2-2 बढ़ते), अतः अगला अंतर 12 → उत्तर **42**। (बोनस पैटर्न: ये 1×2, 2×3, 3×4, 4×5, 5×6 हैं, अतः अगला 6×7 = 42।)',
          },
        },
        {
          type: 'p',
          text: {
            en: 'For a **letter series**, convert letters to positions (A=1 … Z=26). Example: A, C, F, J, O, ? — positions 1, 3, 6, 10, 15 with gaps +2, +3, +4, +5 → next gap +6 → position 21 = **U**.',
            hi: '**अक्षर श्रृंखला** में अक्षरों को स्थान में बदलें (A=1 … Z=26)। उदाहरण: A, C, F, J, O, ? — स्थान 1, 3, 6, 10, 15, अंतर +2, +3, +4, +5 → अगला अंतर +6 → स्थान 21 = **U**।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Write **A=1 … Z=26** at the top of your rough sheet the moment the exam starts. Half of all coding and series questions become mechanical once the number line is in front of you. Also memorise the reverse pairs: A↔Z, B↔Y, C↔X (positions adding to 27).',
            hi: 'परीक्षा शुरू होते ही रफ शीट पर **A=1 … Z=26** लिख लें। संख्या-रेखा सामने होते ही आधे कूटलेखन व श्रृंखला प्रश्न यांत्रिक हो जाते हैं। उल्टे जोड़े भी याद रखें: A↔Z, B↔Y, C↔X (स्थानों का योग 27)।',
          },
        },
      ],
    },
    {
      id: 'coding',
      heading: { en: 'Coding–Decoding & Odd One Out', hi: 'कूटलेखन–कूटवाचन व विषम की पहचान' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Shift codes:** if MOBILE is written as NPCJMF, every letter moved **+1** (M→N, O→P…). Apply the same shift to the new word: PHONE → **QIPOF**.',
              hi: '**शिफ्ट कूट:** यदि MOBILE को NPCJMF लिखा जाए, तो हर अक्षर **+1** खिसका है (M→N, O→P…)। नए शब्द पर वही शिफ्ट लगाएँ: PHONE → **QIPOF**।',
            },
            {
              en: '**Value codes:** if CAT = 24, check letter positions: C(3) + A(1) + T(20) = 24 — it is a sum code. Then DOG = 4 + 15 + 7 = **26**.',
              hi: '**मान कूट:** यदि CAT = 24, तो अक्षर स्थान जाँचें: C(3) + A(1) + T(20) = 24 — यह योग कूट है। तब DOG = 4 + 15 + 7 = **26**।',
            },
            {
              en: '**Odd one out:** look for the property shared by all but one. In 3, 5, 7, 9, 11 every number is prime **except 9** (9 = 3 × 3).',
              hi: '**विषम की पहचान:** वह गुण खोजें जो एक को छोड़कर सबमें हो। 3, 5, 7, 9, 11 में **9 को छोड़कर** सभी अभाज्य हैं (9 = 3 × 3)।',
            },
          ],
        },
      ],
    },
    {
      id: 'relations-directions',
      heading: { en: 'Blood Relations, Directions & Clocks', hi: 'रक्त संबंध, दिशाएँ व घड़ियाँ' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Blood relations:** decode phrase by phrase from the inside out. "She is the daughter of my grandfather\'s only son" → grandfather\'s only son = **my father** → his daughter = **my sister**.',
              hi: '**रक्त संबंध:** वाक्यांश को भीतर से बाहर की ओर खोलें। "वह मेरे दादा के इकलौते पुत्र की पुत्री है" → दादा का इकलौता पुत्र = **मेरे पिता** → उनकी पुत्री = **मेरी बहन**।',
            },
            {
              en: '**Directions:** always sketch. Facing north, a **right turn** faces you east; a **left turn** faces you west. Distances at right angles combine by Pythagoras: 3 km north then 4 km east = **5 km** from the start (3-4-5 triangle).',
              hi: '**दिशाएँ:** हमेशा चित्र बनाएँ। उत्तर की ओर मुख करके **दाएँ मुड़ने** पर मुख पूर्व की ओर; **बाएँ मुड़ने** पर पश्चिम की ओर। समकोण पर दूरियाँ पाइथागोरस से जुड़ती हैं: 3 किमी उत्तर फिर 4 किमी पूर्व = प्रारंभ से **5 किमी** (3-4-5 त्रिभुज)।',
            },
            {
              en: '**Clocks:** the hour hand moves 30° per hour, the minute hand 6° per minute. At **3:00** the angle between the hands is 3 × 30° = **90°**.',
              hi: '**घड़ियाँ:** घंटे की सुई 30° प्रति घंटा, मिनट की सुई 6° प्रति मिनट चलती है। **3:00 बजे** सुइयों के बीच कोण = 3 × 30° = **90°**।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Treat every reasoning question like **detective work with a pencil**: draw the family tree, draw the walking path, write the letter numbers. Aspirants who solve "in the head" make careless slips; the pencil never does.',
            hi: 'हर तर्क प्रश्न को **पेंसिल से जासूसी** की तरह लें: वंश-वृक्ष बनाएँ, चलने का रास्ता बनाएँ, अक्षरों के अंक लिखें। "दिमाग में" हल करने वाले असावधानी से चूकते हैं; पेंसिल कभी नहीं चूकती।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Number series: check **differences** first (2, 6, 12, 20, 30 → +4, +6, +8, +10 → next 42).',
      hi: 'संख्या श्रृंखला: पहले **अंतर** देखें (2, 6, 12, 20, 30 → +4, +6, +8, +10 → अगला 42)।',
    },
    {
      en: 'Letter puzzles: write **A=1 … Z=26** immediately; reverse pairs add to 27 (A↔Z, B↔Y).',
      hi: 'अक्षर पहेलियाँ: तुरंत **A=1 … Z=26** लिखें; उल्टे जोड़ों का योग 27 (A↔Z, B↔Y)।',
    },
    {
      en: 'Coding: test a constant **shift** (+1, −1…) or a **sum of positions**; apply the same rule to the asked word.',
      hi: 'कूटलेखन: स्थिर **शिफ्ट** (+1, −1…) या **स्थानों का योग** जाँचें; वही नियम पूछे गए शब्द पर लगाएँ।',
    },
    {
      en: 'Blood relations: decode inside-out ("grandfather\'s only son" = father). Directions: sketch; right-angle legs combine by Pythagoras (3-4-5).',
      hi: 'रक्त संबंध: भीतर से बाहर खोलें ("दादा का इकलौता पुत्र" = पिता)। दिशाएँ: चित्र बनाएँ; समकोण भुजाएँ पाइथागोरस से जुड़ती हैं (3-4-5)।',
    },
    {
      en: 'Clocks: hour hand 30°/hour, minute hand 6°/minute; at 3:00 the angle is 90°.',
      hi: 'घड़ियाँ: घंटे की सुई 30°/घंटा, मिनट की सुई 6°/मिनट; 3:00 बजे कोण 90°।',
    },
    {
      en: 'Always solve on paper — draw the tree, the path, the number line. The pencil beats the head.',
      hi: 'हमेशा कागज़ पर हल करें — वृक्ष, रास्ता, संख्या-रेखा बनाएँ। पेंसिल दिमाग से बेहतर है।',
    },
  ],
  quiz: [
    {
      id: 'm2q1',
      type: 'mcq',
      question: { en: 'Find the next term: 2, 6, 12, 20, 30, ?', hi: 'अगला पद ज्ञात करें: 2, 6, 12, 20, 30, ?' },
      options: [
        { en: '36', hi: '36' },
        { en: '40', hi: '40' },
        { en: '42', hi: '42' },
        { en: '44', hi: '44' },
      ],
      answer: 2,
      explanation: {
        en: 'Differences are 4, 6, 8, 10 → next difference 12 → 30 + 12 = 42. (Pattern n(n+1): 6×7 = 42.)',
        hi: 'अंतर 4, 6, 8, 10 → अगला अंतर 12 → 30 + 12 = 42। (पैटर्न n(n+1): 6×7 = 42।)',
      },
      topic: 'mental-reasoning',
      difficulty: 1,
    },
    {
      id: 'm2q2',
      type: 'mcq',
      question: {
        en: 'In a code, CAT = 24 (sum of letter positions). What is DOG?',
        hi: 'किसी कूट में CAT = 24 (अक्षर स्थानों का योग)। DOG क्या होगा?',
      },
      options: [
        { en: '25', hi: '25' },
        { en: '26', hi: '26' },
        { en: '27', hi: '27' },
        { en: '28', hi: '28' },
      ],
      answer: 1,
      explanation: {
        en: 'D(4) + O(15) + G(7) = 26.',
        hi: 'D(4) + O(15) + G(7) = 26।',
      },
      topic: 'mental-reasoning',
      difficulty: 1,
    },
    {
      id: 'm2q3',
      type: 'mcq',
      question: { en: 'Find the next letter: A, C, F, J, O, ?', hi: 'अगला अक्षर ज्ञात करें: A, C, F, J, O, ?' },
      options: [
        { en: 'S', hi: 'S' },
        { en: 'T', hi: 'T' },
        { en: 'U', hi: 'U' },
        { en: 'V', hi: 'V' },
      ],
      answer: 2,
      explanation: {
        en: 'Positions 1, 3, 6, 10, 15 with gaps +2, +3, +4, +5 → next gap +6 → 21 = U.',
        hi: 'स्थान 1, 3, 6, 10, 15, अंतर +2, +3, +4, +5 → अगला अंतर +6 → 21 = U।',
      },
      topic: 'mental-reasoning',
      difficulty: 2,
    },
    {
      id: 'm2q4',
      type: 'mcq',
      question: {
        en: 'Ravi walks 3 km north, turns right and walks 4 km. How far is he from his starting point?',
        hi: 'रवि 3 किमी उत्तर चलता है, दाएँ मुड़कर 4 किमी चलता है। वह प्रारंभिक बिंदु से कितनी दूर है?',
      },
      options: [
        { en: '5 km', hi: '5 किमी' },
        { en: '6 km', hi: '6 किमी' },
        { en: '7 km', hi: '7 किमी' },
        { en: '4 km', hi: '4 किमी' },
      ],
      answer: 0,
      explanation: {
        en: 'North then east are at right angles: distance = √(3² + 4²) = √25 = 5 km (the 3-4-5 triangle).',
        hi: 'उत्तर फिर पूर्व समकोण पर हैं: दूरी = √(3² + 4²) = √25 = 5 किमी (3-4-5 त्रिभुज)।',
      },
      topic: 'mental-reasoning',
      difficulty: 2,
    },
    {
      id: 'm2q5',
      type: 'mcq',
      question: {
        en: 'Pointing to a photo, Ram says, "She is the daughter of my grandfather\'s only son." How is she related to Ram?',
        hi: 'एक फोटो की ओर संकेत कर राम कहता है, "वह मेरे दादा के इकलौते पुत्र की पुत्री है।" वह राम की क्या लगती है?',
      },
      options: [
        { en: 'Mother', hi: 'माता' },
        { en: 'Sister', hi: 'बहन' },
        { en: 'Aunt', hi: 'बुआ/मौसी' },
        { en: 'Daughter', hi: 'पुत्री' },
      ],
      answer: 1,
      explanation: {
        en: 'Grandfather\'s only son = Ram\'s father. The father\'s daughter = Ram\'s sister.',
        hi: 'दादा का इकलौता पुत्र = राम के पिता। पिता की पुत्री = राम की बहन।',
      },
      topic: 'mental-reasoning',
      difficulty: 2,
    },
    {
      id: 'm2q6',
      type: 'mcq',
      question: { en: 'Find the odd one out: 3, 5, 7, 9, 11', hi: 'विषम की पहचान करें: 3, 5, 7, 9, 11' },
      options: [
        { en: '5', hi: '5' },
        { en: '7', hi: '7' },
        { en: '9', hi: '9' },
        { en: '11', hi: '11' },
      ],
      answer: 2,
      explanation: {
        en: 'All are prime numbers except 9 (9 = 3 × 3).',
        hi: '9 को छोड़कर (9 = 3 × 3) सभी अभाज्य संख्याएँ हैं।',
      },
      topic: 'mental-reasoning',
      difficulty: 1,
    },
    {
      id: 'm2q7',
      type: 'mcq',
      question: {
        en: 'What is the angle between the hands of a clock at exactly 3:00?',
        hi: 'ठीक 3:00 बजे घड़ी की सुइयों के बीच कोण क्या होता है?',
      },
      options: [
        { en: '60°', hi: '60°' },
        { en: '75°', hi: '75°' },
        { en: '90°', hi: '90°' },
        { en: '105°', hi: '105°' },
      ],
      answer: 2,
      explanation: {
        en: 'The hour hand moves 30° per hour; at 3:00 it is at 3 × 30° = 90° while the minute hand is at 0°.',
        hi: 'घंटे की सुई 30° प्रति घंटा चलती है; 3:00 बजे वह 3 × 30° = 90° पर होती है जबकि मिनट की सुई 0° पर।',
      },
      topic: 'mental-reasoning',
      difficulty: 1,
    },
    {
      id: 'm2q8',
      type: 'mcq',
      question: {
        en: 'In a certain code, MOBILE is written as NPCJMF. How is PHONE written in that code?',
        hi: 'किसी कूट में MOBILE को NPCJMF लिखा जाता है। उसी कूट में PHONE कैसे लिखा जाएगा?',
      },
      options: [
        { en: 'QIPOF', hi: 'QIPOF' },
        { en: 'QIPNE', hi: 'QIPNE' },
        { en: 'OGNMD', hi: 'OGNMD' },
        { en: 'QJPOF', hi: 'QJPOF' },
      ],
      answer: 0,
      explanation: {
        en: 'Each letter shifts +1 (M→N, O→P, B→C…). So P→Q, H→I, O→P, N→O, E→F = QIPOF.',
        hi: 'हर अक्षर +1 खिसकता है (M→N, O→P, B→C…)। अतः P→Q, H→I, O→P, N→O, E→F = QIPOF।',
      },
      topic: 'mental-reasoning',
      difficulty: 2,
    },
  ],
};
