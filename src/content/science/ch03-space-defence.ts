import type { Chapter } from '../types';

export const scienceCh03: Chapter = {
  id: 'science-ch03',
  subjectId: 'science',
  order: 3,
  title: {
    en: 'Space & Defence Technology',
    hi: 'अंतरिक्ष एवं रक्षा प्रौद्योगिकी',
  },
  intro: {
    en: 'India\'s space and defence achievements are a favourite of BPSC — they are in the news, they build national pride, and the facts are fixed and easy to memorise. Who founded **ISRO** and where? Which was India\'s first satellite? What did **Chandrayaan** discover? Which missile did India build with Russia? This chapter turns these headlines into sure-shot marks.',
    hi: 'भारत की अंतरिक्ष एवं रक्षा उपलब्धियाँ BPSC की पसंदीदा हैं — ये समाचारों में रहती हैं, राष्ट्रीय गौरव बढ़ाती हैं, और इनके तथ्य निश्चित तथा याद रखने में आसान हैं। **इसरो** की स्थापना किसने और कहाँ की? भारत का पहला उपग्रह कौन-सा था? **चंद्रयान** ने क्या खोजा? भारत ने रूस के साथ कौन-सी मिसाइल बनाई? यह अध्याय इन सुर्खियों को पक्के अंकों में बदल देता है।',
  },
  sections: [
    {
      id: 'isro-basics',
      heading: { en: 'ISRO: The Basics', hi: 'इसरो: आधारभूत तथ्य' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The **Indian Space Research Organisation (ISRO)** was established in **1969** and has its headquarters in **Bengaluru**. **Dr. Vikram Sarabhai** is regarded as the **"father of the Indian space programme"**.',
            hi: '**भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो)** की स्थापना **1969** में हुई और इसका मुख्यालय **बेंगलुरु** में है। **डॉ. विक्रम साराभाई** को **"भारतीय अंतरिक्ष कार्यक्रम का जनक"** माना जाता है।',
          },
        },
        {
          type: 'list',
          items: [
            { en: 'ISRO builds and launches its own **satellites** and **launch vehicles (rockets)**.', hi: 'इसरो अपने स्वयं के **उपग्रह** और **प्रक्षेपण यान (रॉकेट)** बनाता व प्रक्षेपित करता है।' },
            { en: 'Two main launch vehicles: the **PSLV (Polar Satellite Launch Vehicle)** and the **GSLV (Geosynchronous Satellite Launch Vehicle)**.', hi: 'दो मुख्य प्रक्षेपण यान: **PSLV (ध्रुवीय उपग्रह प्रक्षेपण यान)** और **GSLV (भूस्थिर उपग्रह प्रक्षेपण यान)**।' },
            { en: 'The PSLV is ISRO\'s reliable "workhorse" rocket, used for many satellite launches.', hi: 'PSLV इसरो का भरोसेमंद "वर्कहॉर्स" रॉकेट है, जिसका उपयोग कई उपग्रह प्रक्षेपणों में होता है।' },
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember the trio: **1969, Bengaluru, Vikram Sarabhai.** Think "**1969** — the year humans first walked on the Moon — is also when India began its own space journey."',
            hi: 'तिकड़ी याद रखें: **1969, बेंगलुरु, विक्रम साराभाई।** सोचें "**1969** — जिस वर्ष मनुष्य पहली बार चंद्रमा पर चला — उसी वर्ष भारत ने भी अपनी अंतरिक्ष यात्रा शुरू की।"',
          },
        },
      ],
    },
    {
      id: 'isro-milestones',
      heading: { en: 'ISRO Milestones', hi: 'इसरो की उपलब्धियाँ' },
      blocks: [
        {
          type: 'timeline',
          caption: { en: 'Landmark missions of the Indian space programme', hi: 'भारतीय अंतरिक्ष कार्यक्रम के मील के पत्थर' },
          events: [
            { when: { en: '1975', hi: '1975' }, label: { en: '**Aryabhata** — India\'s first satellite.', hi: '**आर्यभट्ट** — भारत का पहला उपग्रह।' } },
            { when: { en: '2008', hi: '2008' }, label: { en: '**Chandrayaan-1** — India\'s first Moon mission; helped confirm **water molecules** on the Moon.', hi: '**चंद्रयान-1** — भारत का पहला चंद्र मिशन; चंद्रमा पर **जल के अणुओं** की पुष्टि में सहायक।' } },
            { when: { en: '2013–2014', hi: '2013–2014' }, label: { en: '**Mars Orbiter Mission (Mangalyaan)** — launched 2013, entered Mars orbit in 2014; India was the **first country to reach Mars on its first attempt**.', hi: '**मंगल ऑर्बिटर मिशन (मंगलयान)** — 2013 में प्रक्षेपित, 2014 में मंगल की कक्षा में पहुँचा; भारत **पहले ही प्रयास में मंगल पहुँचने वाला पहला देश** बना।' } },
            { when: { en: '2023', hi: '2023' }, label: { en: '**Chandrayaan-3** — India became the **first country to land near the Moon\'s south pole** (lander **Vikram**, rover **Pragyan**).', hi: '**चंद्रयान-3** — भारत **चंद्रमा के दक्षिणी ध्रुव के पास उतरने वाला पहला देश** बना (लैंडर **विक्रम**, रोवर **प्रज्ञान**)।' } },
          ],
        },
        {
          type: 'note',
          kind: 'story',
          text: {
            en: 'When **Mangalyaan** reached Mars in 2014, India did on its **first try** what the USA, Russia and Europe took many attempts to achieve — and at a remarkably low cost. It is one of India\'s proudest scientific moments.',
            hi: 'जब **मंगलयान** 2014 में मंगल पहुँचा, तो भारत ने **पहले ही प्रयास** में वह कर दिखाया जिसके लिए अमेरिका, रूस व यूरोप को कई प्रयास लगे थे — और वह भी बेहद कम खर्च में। यह भारत के सबसे गौरवशाली वैज्ञानिक क्षणों में से एक है।',
          },
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Do not mix them up: **Chandrayaan-1 (2008)** confirmed **water on the Moon**; **Chandrayaan-3 (2023)** made the **south-pole landing**. Aryabhata (1975) was only a satellite, **not** a Moon mission.',
            hi: 'इन्हें न मिलाएँ: **चंद्रयान-1 (2008)** ने **चंद्रमा पर जल** की पुष्टि की; **चंद्रयान-3 (2023)** ने **दक्षिणी ध्रुव पर लैंडिंग** की। आर्यभट्ट (1975) केवल एक उपग्रह था, चंद्र मिशन **नहीं**।',
          },
        },
      ],
    },
    {
      id: 'defence',
      heading: { en: 'Defence Technology & Missiles', hi: 'रक्षा प्रौद्योगिकी एवं मिसाइलें' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'India\'s defence technology is developed mainly by the **DRDO (Defence Research and Development Organisation)**. Its most famous work is India\'s family of **missiles**.',
            hi: 'भारत की रक्षा प्रौद्योगिकी मुख्यतः **DRDO (रक्षा अनुसंधान एवं विकास संगठन)** द्वारा विकसित की जाती है। इसका सबसे प्रसिद्ध कार्य भारत की **मिसाइलों** की श्रृंखला है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Important Indian missiles', hi: 'महत्वपूर्ण भारतीय मिसाइलें' },
          headers: [
            { en: 'Missile', hi: 'मिसाइल' },
            { en: 'Type / key fact', hi: 'प्रकार / मुख्य तथ्य' },
          ],
          rows: [
            [{ en: 'Agni series', hi: 'अग्नि श्रृंखला' }, { en: 'Long-range surface-to-surface ballistic missiles', hi: 'लंबी दूरी की सतह-से-सतह बैलिस्टिक मिसाइलें' }],
            [{ en: 'Prithvi series', hi: 'पृथ्वी श्रृंखला' }, { en: 'Short-range surface-to-surface ballistic missiles', hi: 'कम दूरी की सतह-से-सतह बैलिस्टिक मिसाइलें' }],
            [{ en: 'BrahMos', hi: 'ब्रह्मोस' }, { en: 'Supersonic cruise missile — developed jointly by India and Russia', hi: 'सुपरसोनिक क्रूज़ मिसाइल — भारत व रूस द्वारा संयुक्त रूप से विकसित' }],
            [{ en: 'Akash', hi: 'आकाश' }, { en: 'Surface-to-air missile', hi: 'सतह-से-वायु मिसाइल' }],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Easy hooks: **Agni** means "fire" → the long-range (far-reaching) missile. **BrahMos** = **Brah**maputra (India) + **Mos**kva (Russia) → a joint India–Russia missile. **Akash** means "sky" → the surface-to-**air** missile.',
            hi: 'आसान संकेत: **अग्नि** का अर्थ "आग" → लंबी दूरी (दूर तक मार करने वाली) मिसाइल। **ब्रह्मोस** = **ब्रह्म**पुत्र (भारत) + **मॉस**क्वा (रूस) → भारत–रूस की संयुक्त मिसाइल। **आकाश** का अर्थ "आसमान" → सतह-से-**वायु** मिसाइल।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**ISRO** founded **1969**, headquarters **Bengaluru**; **Dr. Vikram Sarabhai** = father of the Indian space programme.',
      hi: '**इसरो** की स्थापना **1969**, मुख्यालय **बेंगलुरु**; **डॉ. विक्रम साराभाई** = भारतीय अंतरिक्ष कार्यक्रम के जनक।',
    },
    {
      en: '**Aryabhata (1975)** was India\'s first satellite.',
      hi: '**आर्यभट्ट (1975)** भारत का पहला उपग्रह था।',
    },
    {
      en: '**Chandrayaan-1 (2008)** helped confirm **water molecules on the Moon**.',
      hi: '**चंद्रयान-1 (2008)** ने **चंद्रमा पर जल के अणुओं** की पुष्टि में सहायता की।',
    },
    {
      en: '**Mangalyaan / Mars Orbiter Mission** — India was the **first country to reach Mars on its first attempt** (orbit entered 2014).',
      hi: '**मंगलयान / मंगल ऑर्बिटर मिशन** — भारत **पहले ही प्रयास में मंगल पहुँचने वाला पहला देश** बना (2014 में कक्षा में प्रवेश)।',
    },
    {
      en: '**Chandrayaan-3 (2023)** — India became the **first country to land near the Moon\'s south pole** (lander Vikram, rover Pragyan).',
      hi: '**चंद्रयान-3 (2023)** — भारत **चंद्रमा के दक्षिणी ध्रुव के पास उतरने वाला पहला देश** बना (लैंडर विक्रम, रोवर प्रज्ञान)।',
    },
    {
      en: 'Launch vehicles: **PSLV** and **GSLV**. Defence R&D body = **DRDO**.',
      hi: 'प्रक्षेपण यान: **PSLV** व **GSLV**। रक्षा अनुसंधान संस्था = **DRDO**।',
    },
    {
      en: 'Missiles: **Agni** (long-range), **Prithvi** (short-range), **Akash** (surface-to-air); **BrahMos** = joint **India + Russia** supersonic cruise missile.',
      hi: 'मिसाइलें: **अग्नि** (लंबी दूरी), **पृथ्वी** (कम दूरी), **आकाश** (सतह-से-वायु); **ब्रह्मोस** = **भारत + रूस** की संयुक्त सुपरसोनिक क्रूज़ मिसाइल।',
    },
  ],
  quiz: [
    {
      id: 's3q1',
      type: 'mcq',
      question: {
        en: 'In which year was ISRO established?',
        hi: 'इसरो की स्थापना किस वर्ष हुई थी?',
      },
      options: [
        { en: '1962', hi: '1962' },
        { en: '1969', hi: '1969' },
        { en: '1975', hi: '1975' },
        { en: '1980', hi: '1980' },
      ],
      answer: 1,
      explanation: {
        en: 'ISRO (Indian Space Research Organisation) was established in 1969, with its headquarters in Bengaluru.',
        hi: 'इसरो (भारतीय अंतरिक्ष अनुसंधान संगठन) की स्थापना 1969 में हुई, जिसका मुख्यालय बेंगलुरु में है।',
      },
      topic: 'science-space',
      difficulty: 1,
    },
    {
      id: 's3q2',
      type: 'mcq',
      question: {
        en: 'Who is regarded as the "father of the Indian space programme"?',
        hi: '"भारतीय अंतरिक्ष कार्यक्रम का जनक" किसे माना जाता है?',
      },
      options: [
        { en: 'A. P. J. Abdul Kalam', hi: 'ए. पी. जे. अब्दुल कलाम' },
        { en: 'Homi Bhabha', hi: 'होमी भाभा' },
        { en: 'Vikram Sarabhai', hi: 'विक्रम साराभाई' },
        { en: 'C. V. Raman', hi: 'सी. वी. रमन' },
      ],
      answer: 2,
      explanation: {
        en: 'Dr. Vikram Sarabhai is regarded as the father of the Indian space programme.',
        hi: 'डॉ. विक्रम साराभाई को भारतीय अंतरिक्ष कार्यक्रम का जनक माना जाता है।',
      },
      topic: 'science-space',
      difficulty: 1,
    },
    {
      id: 's3q3',
      type: 'mcq',
      question: {
        en: 'What was the name of India\'s first satellite?',
        hi: 'भारत के पहले उपग्रह का नाम क्या था?',
      },
      options: [
        { en: 'Aryabhata', hi: 'आर्यभट्ट' },
        { en: 'Bhaskara', hi: 'भास्कर' },
        { en: 'Rohini', hi: 'रोहिणी' },
        { en: 'INSAT', hi: 'इनसैट' },
      ],
      answer: 0,
      explanation: {
        en: 'Aryabhata, launched in 1975, was India\'s first satellite.',
        hi: 'आर्यभट्ट, जो 1975 में प्रक्षेपित हुआ, भारत का पहला उपग्रह था।',
      },
      topic: 'science-space',
      difficulty: 1,
    },
    {
      id: 's3q4',
      type: 'mcq',
      question: {
        en: 'Which Indian mission helped confirm the presence of water molecules on the Moon?',
        hi: 'किस भारतीय मिशन ने चंद्रमा पर जल के अणुओं की उपस्थिति की पुष्टि में सहायता की?',
      },
      options: [
        { en: 'Chandrayaan-1', hi: 'चंद्रयान-1' },
        { en: 'Mangalyaan', hi: 'मंगलयान' },
        { en: 'Aryabhata', hi: 'आर्यभट्ट' },
        { en: 'Chandrayaan-3', hi: 'चंद्रयान-3' },
      ],
      answer: 0,
      explanation: {
        en: 'Chandrayaan-1 (2008), India\'s first Moon mission, helped confirm the presence of water molecules on the Moon.',
        hi: 'चंद्रयान-1 (2008), भारत के पहले चंद्र मिशन, ने चंद्रमा पर जल के अणुओं की उपस्थिति की पुष्टि में सहायता की।',
      },
      topic: 'science-space',
      difficulty: 2,
    },
    {
      id: 's3q5',
      type: 'mcq',
      question: {
        en: 'With which country did India jointly develop the BrahMos supersonic cruise missile?',
        hi: 'भारत ने ब्रह्मोस सुपरसोनिक क्रूज़ मिसाइल किस देश के साथ मिलकर विकसित की?',
      },
      options: [
        { en: 'USA', hi: 'अमेरिका' },
        { en: 'France', hi: 'फ्रांस' },
        { en: 'Russia', hi: 'रूस' },
        { en: 'Israel', hi: 'इज़राइल' },
      ],
      answer: 2,
      explanation: {
        en: 'BrahMos is a supersonic cruise missile developed jointly by India and Russia.',
        hi: 'ब्रह्मोस एक सुपरसोनिक क्रूज़ मिसाइल है जिसे भारत व रूस ने मिलकर विकसित किया है।',
      },
      topic: 'science-space',
      difficulty: 2,
    },
    {
      id: 's3q6',
      type: 'mcq',
      question: {
        en: 'Near which part of the Moon did Chandrayaan-3 make its historic landing in 2023?',
        hi: '2023 में चंद्रयान-3 ने चंद्रमा के किस भाग के पास ऐतिहासिक लैंडिंग की?',
      },
      options: [
        { en: 'North pole', hi: 'उत्तरी ध्रुव' },
        { en: 'South pole', hi: 'दक्षिणी ध्रुव' },
        { en: 'Equator', hi: 'भूमध्य रेखा' },
        { en: 'Far side centre', hi: 'सुदूर भाग का केंद्र' },
      ],
      answer: 1,
      explanation: {
        en: 'With Chandrayaan-3 (2023), India became the first country to land near the Moon\'s south pole. Its lander was Vikram and rover was Pragyan.',
        hi: 'चंद्रयान-3 (2023) के साथ भारत चंद्रमा के दक्षिणी ध्रुव के पास उतरने वाला पहला देश बना। इसका लैंडर विक्रम और रोवर प्रज्ञान था।',
      },
      topic: 'science-space',
      difficulty: 2,
    },
    {
      id: 's3q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. India reached Mars orbit on its very first attempt.\n2. The Agni series consists of long-range missiles.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. भारत पहले ही प्रयास में मंगल की कक्षा में पहुँच गया।\n2. अग्नि श्रृंखला लंबी दूरी की मिसाइलों की है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The Mars Orbiter Mission (Mangalyaan) made India the first country to reach Mars orbit on its first attempt, and the Agni series are long-range missiles.',
        hi: 'दोनों सही हैं। मंगल ऑर्बिटर मिशन (मंगलयान) ने भारत को पहले ही प्रयास में मंगल की कक्षा में पहुँचने वाला पहला देश बनाया, और अग्नि श्रृंखला लंबी दूरी की मिसाइलें हैं।',
      },
      topic: 'science-space',
      difficulty: 3,
    },
    {
      id: 's3q8',
      type: 'mcq',
      question: {
        en: 'Which organisation is mainly responsible for developing India\'s defence technology?',
        hi: 'भारत की रक्षा प्रौद्योगिकी विकसित करने के लिए मुख्यतः कौन-सा संगठन जिम्मेदार है?',
      },
      options: [
        { en: 'ISRO', hi: 'इसरो' },
        { en: 'DRDO', hi: 'DRDO' },
        { en: 'BARC', hi: 'बार्क' },
        { en: 'CSIR', hi: 'सीएसआईआर' },
      ],
      answer: 1,
      explanation: {
        en: 'The DRDO (Defence Research and Development Organisation) develops India\'s defence technology, including missiles like Agni, Prithvi and Akash.',
        hi: 'DRDO (रक्षा अनुसंधान एवं विकास संगठन) भारत की रक्षा प्रौद्योगिकी विकसित करता है, जिसमें अग्नि, पृथ्वी व आकाश जैसी मिसाइलें शामिल हैं।',
      },
      topic: 'science-space',
      difficulty: 2,
    },
  ],
};
