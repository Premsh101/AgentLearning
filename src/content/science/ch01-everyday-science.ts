import type { Chapter } from '../types';

export const scienceCh01: Chapter = {
  id: 'science-ch01',
  subjectId: 'science',
  order: 1,
  title: {
    en: 'Everyday Science: High-Yield Facts',
    hi: 'दैनिक जीवन का विज्ञान: महत्वपूर्ण तथ्य',
  },
  intro: {
    en: 'You do not need a science degree to score in this section — BPSC asks direct, factual questions from everyday life. Which vitamin prevents which disease? What is the chemical name of common salt? These are pure memory marks. This chapter collects the most repeated facts so you revise smart, not hard.',
    hi: 'इस खंड में अंक पाने के लिए विज्ञान की डिग्री की आवश्यकता नहीं — BPSC दैनिक जीवन से सीधे, तथ्यात्मक प्रश्न पूछता है। कौन-सा विटामिन किस रोग से बचाता है? साधारण नमक का रासायनिक नाम क्या है? ये शुद्ध स्मृति के अंक हैं। यह अध्याय सर्वाधिक दोहराए जाने वाले तथ्यों को एकत्र करता है ताकि आप कठिन नहीं, समझदारी से दोहराएँ।',
  },
  sections: [
    {
      id: 'vitamins',
      heading: { en: 'Vitamins & Deficiency Diseases', hi: 'विटामिन व अभावजन्य रोग' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'The single most-asked science table', hi: 'विज्ञान की सर्वाधिक पूछी जाने वाली तालिका' },
          headers: [
            { en: 'Vitamin (chemical name)', hi: 'विटामिन (रासायनिक नाम)' },
            { en: 'Deficiency disease', hi: 'अभावजन्य रोग' },
          ],
          rows: [
            [{ en: 'Vitamin A (Retinol)', hi: 'विटामिन A (रेटिनॉल)' }, { en: 'Night blindness', hi: 'रतौंधी' }],
            [{ en: 'Vitamin B1 (Thiamine)', hi: 'विटामिन B1 (थायमिन)' }, { en: 'Beri-beri', hi: 'बेरी-बेरी' }],
            [{ en: 'Vitamin C (Ascorbic acid)', hi: 'विटामिन C (एस्कॉर्बिक अम्ल)' }, { en: 'Scurvy', hi: 'स्कर्वी' }],
            [{ en: 'Vitamin D (Calciferol)', hi: 'विटामिन D (कैल्सीफेरॉल)' }, { en: 'Rickets (children), Osteomalacia (adults)', hi: 'रिकेट्स (बच्चे), ऑस्टियोमैलेशिया (वयस्क)' }],
            [{ en: 'Vitamin K', hi: 'विटामिन K' }, { en: 'Poor blood clotting', hi: 'रक्त का थक्का न बनना' }],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Memory line: **"A for eyes (night blindness), C for scurvy, D for bones (rickets), K for klotting."** Also, Vitamin **D** is the "sunshine vitamin" — our skin makes it from sunlight.',
            hi: 'याद रखने की पंक्ति: **"A आँखों के लिए (रतौंधी), C स्कर्वी, D हड्डियों के लिए (रिकेट्स), K थक्के (klotting) के लिए।"** साथ ही, विटामिन **D** "धूप विटामिन" है — हमारी त्वचा इसे सूर्य के प्रकाश से बनाती है।',
          },
        },
      ],
    },
    {
      id: 'chemistry',
      heading: { en: 'Chemistry in the Kitchen', hi: 'रसोई का रसायन' },
      blocks: [
        {
          type: 'table',
          headers: [
            { en: 'Everyday name', hi: 'दैनिक नाम' },
            { en: 'Chemical name & formula', hi: 'रासायनिक नाम व सूत्र' },
          ],
          rows: [
            [{ en: 'Common salt', hi: 'साधारण नमक' }, { en: 'Sodium chloride — NaCl', hi: 'सोडियम क्लोराइड — NaCl' }],
            [{ en: 'Baking soda', hi: 'खाने का सोडा' }, { en: 'Sodium bicarbonate — NaHCO₃', hi: 'सोडियम बाइकार्बोनेट — NaHCO₃' }],
            [{ en: 'Washing soda', hi: 'धोने का सोडा' }, { en: 'Sodium carbonate — Na₂CO₃', hi: 'सोडियम कार्बोनेट — Na₂CO₃' }],
            [{ en: 'Lime / quicklime', hi: 'चूना / बिना बुझा चूना' }, { en: 'Calcium oxide — CaO', hi: 'कैल्शियम ऑक्साइड — CaO' }],
            [{ en: 'Chalk / marble', hi: 'खड़िया / संगमरमर' }, { en: 'Calcium carbonate — CaCO₃', hi: 'कैल्शियम कार्बोनेट — CaCO₃' }],
          ],
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Acids vs bases: an **acid** turns blue litmus **red** (e.g. lemon, vinegar); a **base** turns red litmus **blue** (e.g. soap, baking soda). The **pH scale** runs 0–14: **below 7 = acidic, 7 = neutral (pure water), above 7 = basic (alkaline)**.',
            hi: 'अम्ल बनाम क्षार: **अम्ल** नीले लिटमस को **लाल** करता है (जैसे नींबू, सिरका); **क्षार** लाल लिटमस को **नीला** करता है (जैसे साबुन, खाने का सोडा)। **pH मान** 0–14 तक: **7 से कम = अम्लीय, 7 = उदासीन (शुद्ध जल), 7 से अधिक = क्षारीय**।',
          },
        },
      ],
    },
    {
      id: 'physics',
      heading: { en: 'Physics You Can Feel', hi: 'अनुभव करने योग्य भौतिकी' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: '**Light** travels at about **3 × 10⁸ metres per second** — the fastest thing in the universe. That is why we see lightning before we hear thunder.', hi: '**प्रकाश** लगभग **3 × 10⁸ मीटर प्रति सेकंड** की गति से चलता है — ब्रह्मांड की सबसे तेज़ वस्तु। इसीलिए हम बिजली की गड़गड़ाहट से पहले उसकी चमक देखते हैं।' },
            { en: '**Sound needs a medium** (air, water, solid) to travel — it **cannot** travel through a vacuum. It travels faster in solids than in air.', hi: '**ध्वनि को चलने के लिए माध्यम** (वायु, जल, ठोस) चाहिए — यह **निर्वात** में नहीं चल सकती। यह वायु की अपेक्षा ठोस में तेज़ चलती है।' },
            { en: '**SI units:** length = metre, mass = kilogram, time = second, temperature = kelvin, electric current = ampere.', hi: '**SI इकाइयाँ:** लंबाई = मीटर, द्रव्यमान = किलोग्राम, समय = सेकंड, तापमान = केल्विन, विद्युत धारा = ऐम्पियर।' },
            { en: '**Newton\'s first law (inertia):** an object stays at rest or keeps moving unless a force acts on it — this is why you lurch forward when a bus suddenly stops.', hi: '**न्यूटन का प्रथम नियम (जड़त्व):** कोई वस्तु तब तक विराम या गति में रहती है जब तक उस पर बल न लगे — इसीलिए बस के अचानक रुकने पर आप आगे झुक जाते हैं।' },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'A common confusion: the unit of **force** is the **newton (N)**, the unit of **energy/work** is the **joule (J)**, and the unit of **power** is the **watt (W)**. Force → newton, work → joule, power → watt. Don\'t swap them.',
            hi: 'एक सामान्य भ्रम: **बल** की इकाई **न्यूटन (N)**, **ऊर्जा/कार्य** की इकाई **जूल (J)**, व **शक्ति** की इकाई **वाट (W)** है। बल → न्यूटन, कार्य → जूल, शक्ति → वाट। इन्हें न बदलें।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Vitamins: **A → night blindness, B1 → beri-beri, C → scurvy, D → rickets, K → poor clotting.** D = sunshine vitamin.',
      hi: 'विटामिन: **A → रतौंधी, B1 → बेरी-बेरी, C → स्कर्वी, D → रिकेट्स, K → थक्का न बनना।** D = धूप विटामिन।',
    },
    {
      en: 'Salt = NaCl; baking soda = NaHCO₃; washing soda = Na₂CO₃; chalk/marble = CaCO₃.',
      hi: 'नमक = NaCl; खाने का सोडा = NaHCO₃; धोने का सोडा = Na₂CO₃; खड़िया/संगमरमर = CaCO₃।',
    },
    {
      en: 'pH: below 7 = acidic, 7 = neutral, above 7 = basic. Acid reddens blue litmus; base blues red litmus.',
      hi: 'pH: 7 से कम = अम्लीय, 7 = उदासीन, 7 से अधिक = क्षारीय। अम्ल नीले लिटमस को लाल; क्षार लाल लिटमस को नीला करता है।',
    },
    {
      en: 'Light ≈ 3 × 10⁸ m/s; sound needs a medium (no sound in vacuum), faster in solids.',
      hi: 'प्रकाश ≈ 3 × 10⁸ मी/से; ध्वनि को माध्यम चाहिए (निर्वात में ध्वनि नहीं), ठोस में तेज़।',
    },
    {
      en: 'Units: force → **newton**, work/energy → **joule**, power → **watt**. Newton\'s 1st law = inertia.',
      hi: 'इकाइयाँ: बल → **न्यूटन**, कार्य/ऊर्जा → **जूल**, शक्ति → **वाट**। न्यूटन का प्रथम नियम = जड़त्व।',
    },
  ],
  quiz: [
    {
      id: 's1q1',
      type: 'mcq',
      question: {
        en: 'Deficiency of which vitamin causes night blindness?',
        hi: 'किस विटामिन की कमी से रतौंधी होती है?',
      },
      options: [
        { en: 'Vitamin A', hi: 'विटामिन A' },
        { en: 'Vitamin C', hi: 'विटामिन C' },
        { en: 'Vitamin D', hi: 'विटामिन D' },
        { en: 'Vitamin K', hi: 'विटामिन K' },
      ],
      answer: 0,
      explanation: {
        en: 'Deficiency of Vitamin A (Retinol) causes night blindness.',
        hi: 'विटामिन A (रेटिनॉल) की कमी से रतौंधी होती है।',
      },
      topic: 'science-everyday',
      difficulty: 1,
    },
    {
      id: 's1q2',
      type: 'mcq',
      question: {
        en: 'Scurvy is caused by the deficiency of:',
        hi: 'स्कर्वी किसकी कमी से होता है?',
      },
      options: [
        { en: 'Vitamin A', hi: 'विटामिन A' },
        { en: 'Vitamin B1', hi: 'विटामिन B1' },
        { en: 'Vitamin C', hi: 'विटामिन C' },
        { en: 'Vitamin D', hi: 'विटामिन D' },
      ],
      answer: 2,
      explanation: {
        en: 'Scurvy is caused by a deficiency of Vitamin C (Ascorbic acid), found in citrus fruits like lemon and orange.',
        hi: 'स्कर्वी विटामिन C (एस्कॉर्बिक अम्ल) की कमी से होता है, जो नींबू व संतरे जैसे खट्टे फलों में पाया जाता है।',
      },
      topic: 'science-everyday',
      difficulty: 1,
    },
    {
      id: 's1q3',
      type: 'mcq',
      question: {
        en: 'The chemical name of common salt is:',
        hi: 'साधारण नमक का रासायनिक नाम है:',
      },
      options: [
        { en: 'Sodium bicarbonate', hi: 'सोडियम बाइकार्बोनेट' },
        { en: 'Sodium chloride', hi: 'सोडियम क्लोराइड' },
        { en: 'Sodium carbonate', hi: 'सोडियम कार्बोनेट' },
        { en: 'Calcium carbonate', hi: 'कैल्शियम कार्बोनेट' },
      ],
      answer: 1,
      explanation: {
        en: 'Common salt is sodium chloride (NaCl). Sodium bicarbonate is baking soda; sodium carbonate is washing soda.',
        hi: 'साधारण नमक सोडियम क्लोराइड (NaCl) है। सोडियम बाइकार्बोनेट खाने का सोडा; सोडियम कार्बोनेट धोने का सोडा है।',
      },
      topic: 'science-everyday',
      difficulty: 1,
    },
    {
      id: 's1q4',
      type: 'mcq',
      question: {
        en: 'What is the pH value of a neutral solution like pure water?',
        hi: 'शुद्ध जल जैसे उदासीन विलयन का pH मान क्या होता है?',
      },
      options: [
        { en: '0', hi: '0' },
        { en: '7', hi: '7' },
        { en: '10', hi: '10' },
        { en: '14', hi: '14' },
      ],
      answer: 1,
      explanation: {
        en: 'Pure water is neutral with a pH of 7. Below 7 is acidic and above 7 is basic (alkaline).',
        hi: 'शुद्ध जल उदासीन है, जिसका pH 7 होता है। 7 से कम अम्लीय व 7 से अधिक क्षारीय होता है।',
      },
      topic: 'science-everyday',
      difficulty: 1,
    },
    {
      id: 's1q5',
      type: 'mcq',
      question: {
        en: 'The SI unit of force is the:',
        hi: 'बल की SI इकाई है:',
      },
      options: [
        { en: 'Joule', hi: 'जूल' },
        { en: 'Watt', hi: 'वाट' },
        { en: 'Newton', hi: 'न्यूटन' },
        { en: 'Pascal', hi: 'पास्कल' },
      ],
      answer: 2,
      explanation: {
        en: 'The SI unit of force is the newton (N). The joule is the unit of energy/work and the watt is the unit of power.',
        hi: 'बल की SI इकाई न्यूटन (N) है। जूल ऊर्जा/कार्य की इकाई है और वाट शक्ति की इकाई है।',
      },
      topic: 'science-everyday',
      difficulty: 2,
    },
    {
      id: 's1q6',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. Sound can travel through a vacuum.\n2. Light travels faster than sound.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. ध्वनि निर्वात में चल सकती है।\n2. प्रकाश ध्वनि से तेज़ चलता है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — sound needs a medium and cannot travel through a vacuum. Statement 2 is correct — light is much faster than sound.',
        hi: 'कथन 1 गलत है — ध्वनि को माध्यम चाहिए और यह निर्वात में नहीं चल सकती। कथन 2 सही है — प्रकाश ध्वनि से बहुत तेज़ है।',
      },
      topic: 'science-everyday',
      difficulty: 2,
    },
    {
      id: 's1q7',
      type: 'mcq',
      question: {
        en: 'Which disease is caused by the deficiency of Vitamin D in children?',
        hi: 'बच्चों में विटामिन D की कमी से कौन-सा रोग होता है?',
      },
      options: [
        { en: 'Beri-beri', hi: 'बेरी-बेरी' },
        { en: 'Rickets', hi: 'रिकेट्स' },
        { en: 'Scurvy', hi: 'स्कर्वी' },
        { en: 'Night blindness', hi: 'रतौंधी' },
      ],
      answer: 1,
      explanation: {
        en: 'Vitamin D deficiency causes rickets in children (and osteomalacia in adults). Vitamin D is called the sunshine vitamin.',
        hi: 'विटामिन D की कमी से बच्चों में रिकेट्स (व वयस्कों में ऑस्टियोमैलेशिया) होता है। विटामिन D को धूप विटामिन कहते हैं।',
      },
      topic: 'science-everyday',
      difficulty: 2,
    },
    {
      id: 's1q8',
      type: 'mcq',
      question: {
        en: 'The chemical formula NaHCO₃ represents:',
        hi: 'रासायनिक सूत्र NaHCO₃ किसे दर्शाता है?',
      },
      options: [
        { en: 'Washing soda', hi: 'धोने का सोडा' },
        { en: 'Baking soda', hi: 'खाने का सोडा' },
        { en: 'Common salt', hi: 'साधारण नमक' },
        { en: 'Bleaching powder', hi: 'विरंजक चूर्ण' },
      ],
      answer: 1,
      explanation: {
        en: 'NaHCO₃ is sodium bicarbonate, commonly known as baking soda.',
        hi: 'NaHCO₃ सोडियम बाइकार्बोनेट है, जिसे सामान्यतः खाने का सोडा कहते हैं।',
      },
      topic: 'science-everyday',
      difficulty: 2,
    },
  ],
};
