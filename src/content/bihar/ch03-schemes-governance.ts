import type { Chapter } from '../types';

export const biharCh03: Chapter = {
  id: 'bihar-ch03',
  subjectId: 'bihar',
  order: 3,
  title: {
    en: 'Bihar: Governance & Flagship Schemes',
    hi: 'बिहार: शासन एवं प्रमुख योजनाएँ',
  },
  intro: {
    en: 'This chapter covers how Bihar is governed and the big welfare schemes it is famous for. BPSC loves two things here: the **structure of the state government** (who is the head, how many houses the legislature has) and Bihar\'s **flagship schemes** — especially those for women and girls. Learn what each scheme is *for*, and the questions become easy.',
    hi: 'यह अध्याय बताता है कि बिहार का शासन कैसे चलता है और वह किन बड़ी कल्याण योजनाओं के लिए प्रसिद्ध है। BPSC को यहाँ दो बातें प्रिय हैं: **राज्य सरकार की संरचना** (मुखिया कौन, विधानमंडल में कितने सदन) और बिहार की **प्रमुख योजनाएँ** — विशेषकर महिलाओं व बालिकाओं के लिए। हर योजना किस *उद्देश्य* के लिए है, यह सीख लें तो प्रश्न आसान हो जाते हैं।',
  },
  sections: [
    {
      id: 'governance-structure',
      heading: { en: 'How Bihar is Governed', hi: 'बिहार का शासन कैसे चलता है' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Like every Indian state, Bihar follows the parliamentary system. The **Governor** is the **constitutional (nominal) head** of the state — appointed by the President. The **Chief Minister** is the **real head of the government**, leading the council of ministers that actually runs the state.',
            hi: 'हर भारतीय राज्य की तरह बिहार भी संसदीय प्रणाली का पालन करता है। **राज्यपाल** राज्य के **संवैधानिक (नाममात्र) प्रमुख** होते हैं — राष्ट्रपति द्वारा नियुक्त। **मुख्यमंत्री** सरकार के **वास्तविक प्रमुख** होते हैं, जो मंत्रिपरिषद का नेतृत्व करते हुए वास्तव में राज्य चलाते हैं।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Bihar has a **bicameral (two-house) legislature** — one of only a few Indian states to do so. The two houses are the **Vidhan Sabha (Legislative Assembly)** with **243 seats**, whose members are directly elected by the people, and the **Vidhan Parishad (Legislative Council)**, the smaller upper house.',
            hi: 'बिहार में **द्विसदनीय (दो सदनों वाला) विधानमंडल** है — ऐसा करने वाले कुछ ही भारतीय राज्यों में से एक। दो सदन हैं **विधान सभा** जिसमें **243 सीटें** हैं और जिसके सदस्य जनता द्वारा सीधे चुने जाते हैं, तथा **विधान परिषद**, छोटा उच्च सदन।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The two houses of Bihar\'s legislature', hi: 'बिहार विधानमंडल के दो सदन' },
          headers: [
            { en: 'House', hi: 'सदन' },
            { en: 'Key points', hi: 'मुख्य बिंदु' },
          ],
          rows: [
            [
              { en: '**Vidhan Sabha** (Legislative Assembly)', hi: '**विधान सभा**' },
              { en: 'Lower house; **243 seats**; members directly elected by voters.', hi: 'निम्न सदन; **243 सीटें**; सदस्य मतदाताओं द्वारा सीधे निर्वाचित।' },
            ],
            [
              { en: '**Vidhan Parishad** (Legislative Council)', hi: '**विधान परिषद**' },
              { en: 'Upper house; permanent body; only a few states have one, and Bihar is one of them.', hi: 'उच्च सदन; स्थायी निकाय; केवल कुछ राज्यों में है, और बिहार उनमें से एक है।' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Do not confuse the two heads: the **Governor** is the *constitutional* head, but the **Chief Minister** is the *real* head who runs the government. Also remember Bihar is **bicameral** — the Assembly has **243** seats.',
            hi: 'दो प्रमुखों में भ्रमित न हों: **राज्यपाल** *संवैधानिक* प्रमुख हैं, पर **मुख्यमंत्री** *वास्तविक* प्रमुख हैं जो सरकार चलाते हैं। साथ ही याद रखें बिहार **द्विसदनीय** है — विधान सभा में **243** सीटें हैं।',
          },
        },
      ],
    },
    {
      id: 'women-empowerment',
      heading: { en: 'Bihar\'s Lead in Women\'s Empowerment', hi: 'महिला सशक्तीकरण में बिहार की अगुवाई' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Bihar is nationally known for putting women at the centre of governance. In **2006** it became the **first state in India** to give **50% reservation for women** in **Panchayati Raj Institutions** (local self-government). Later, the state extended strong reservation for women in state government jobs. Together these steps are seen as a landmark for women\'s participation in public life.',
            hi: 'बिहार शासन के केंद्र में महिलाओं को रखने के लिए राष्ट्रीय स्तर पर जाना जाता है। **2006** में यह **पंचायती राज संस्थाओं** (स्थानीय स्वशासन) में महिलाओं को **50% आरक्षण** देने वाला **भारत का पहला राज्य** बना। बाद में राज्य ने राज्य सरकारी नौकरियों में भी महिलाओं के लिए सशक्त आरक्षण बढ़ाया। ये कदम मिलकर सार्वजनिक जीवन में महिला भागीदारी हेतु मील का पत्थर माने जाते हैं।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Why this matters for the exam: "**first state** to give **50% reservation to women in panchayats (2006)**" is a factual line BPSC can ask directly. It also connects to the women-focused schemes in the next section.',
            hi: 'परीक्षा के लिए यह क्यों मायने रखता है: "**पंचायतों में महिलाओं को 50% आरक्षण देने वाला पहला राज्य (2006)**" एक तथ्यात्मक पंक्ति है जिसे BPSC सीधे पूछ सकता है। यह अगले खंड की महिला-केंद्रित योजनाओं से भी जुड़ती है।',
          },
        },
      ],
    },
    {
      id: 'flagship-schemes',
      heading: { en: 'Flagship Schemes — What Each One is For', hi: 'प्रमुख योजनाएँ — प्रत्येक का उद्देश्य' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'Major schemes of the Bihar government', hi: 'बिहार सरकार की प्रमुख योजनाएँ' },
          headers: [
            { en: 'Scheme', hi: 'योजना' },
            { en: 'Purpose', hi: 'उद्देश्य' },
          ],
          rows: [
            [
              { en: '**JEEViKA** (Bihar Rural Livelihoods Project)', hi: '**जीविका** (बिहार ग्रामीण आजीविका परियोजना)' },
              { en: 'Organises rural women into **Self-Help Groups (SHGs)** to promote livelihoods, savings and empowerment.', hi: 'ग्रामीण महिलाओं को **स्वयं सहायता समूहों (SHG)** में संगठित कर आजीविका, बचत व सशक्तीकरण को बढ़ावा देती है।' },
            ],
            [
              { en: '**Mukhyamantri Balika Cycle Yojana** (Bicycle scheme)', hi: '**मुख्यमंत्री बालिका साइकिल योजना**' },
              { en: 'Provides money for **bicycles to schoolgirls**; widely credited with sharply increasing girls\' school attendance and retention.', hi: '**स्कूली बालिकाओं को साइकिल** के लिए धन देती है; बालिकाओं की स्कूल उपस्थिति व निरंतरता तेज़ी से बढ़ाने का श्रेय इसे व्यापक रूप से दिया जाता है।' },
            ],
            [
              { en: '**Mukhyamantri Kanya Utthan Yojana**', hi: '**मुख्यमंत्री कन्या उत्थान योजना**' },
              { en: 'Financial support for the **girl child from birth through education**, to promote girls\' welfare and education.', hi: '**जन्म से शिक्षा तक बालिका** के लिए आर्थिक सहायता, ताकि बालिकाओं का कल्याण व शिक्षा बढ़े।' },
            ],
            [
              { en: '**Har Ghar Nal Ka Jal**', hi: '**हर घर नल का जल**' },
              { en: 'Part of the **Saat Nishchay** programme; aims to provide **piped tap water to every household**.', hi: '**सात निश्चय** कार्यक्रम का हिस्सा; **हर घर तक नल से जल** पहुँचाना लक्ष्य।' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Link scheme to goal: **JEEViKA → women\'s SHGs**, **Cycle scheme → girls\' education**, **Kanya Utthan → girl child from birth to education**, **Har Ghar Nal Ka Jal → tap water**.',
            hi: 'योजना को लक्ष्य से जोड़ें: **जीविका → महिला SHG**, **साइकिल योजना → बालिका शिक्षा**, **कन्या उत्थान → जन्म से शिक्षा तक बालिका**, **हर घर नल का जल → नल का पानी**।',
          },
        },
      ],
    },
    {
      id: 'saat-nishchay',
      heading: { en: 'Saat Nishchay — The Seven Resolves', hi: 'सात निश्चय — सात संकल्प' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The **"Saat Nishchay" (Seven Resolves)** is a well-known governance and development programme of the Bihar government. It is an umbrella of promises covering basic needs and opportunity — including **clean tap water, electricity, roads, skills for the youth, and women\'s empowerment**. Har Ghar Nal Ka Jal is one of its most visible parts.',
            hi: '**"सात निश्चय" (सात संकल्प)** बिहार सरकार का एक सुप्रसिद्ध शासन व विकास कार्यक्रम है। यह बुनियादी आवश्यकताओं व अवसरों को समेटने वाला संकल्पों का समूह है — जिसमें **स्वच्छ नल का जल, बिजली, सड़कें, युवाओं के लिए कौशल व महिला सशक्तीकरण** शामिल हैं। हर घर नल का जल इसका सबसे दृश्यमान हिस्सा है।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Just remember the theme: **"Saat Nishchay" means seven resolves** for water, electricity, roads, youth skills and women. You do not need to memorise every point — the phrase "seven resolves" is usually enough.',
            hi: 'बस विषय याद रखें: **"सात निश्चय" का अर्थ है सात संकल्प** — जल, बिजली, सड़क, युवा कौशल व महिलाओं के लिए। हर बिंदु रटने की ज़रूरत नहीं — "सात संकल्प" वाक्यांश प्रायः पर्याप्त है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'The **Governor** is the constitutional (nominal) head of Bihar; the **Chief Minister** is the real head of the government.',
      hi: '**राज्यपाल** बिहार के संवैधानिक (नाममात्र) प्रमुख हैं; **मुख्यमंत्री** सरकार के वास्तविक प्रमुख हैं।',
    },
    {
      en: 'Bihar has a **bicameral legislature**: **Vidhan Sabha (243 seats)** + **Vidhan Parishad** (only a few states have a Council).',
      hi: 'बिहार में **द्विसदनीय विधानमंडल** है: **विधान सभा (243 सीटें)** + **विधान परिषद** (परिषद केवल कुछ ही राज्यों में है)।',
    },
    {
      en: 'Bihar was the **first state** to give **50% reservation for women in Panchayati Raj Institutions (2006)**, later extending strong reservation in state jobs.',
      hi: 'बिहार **पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण (2006)** देने वाला **पहला राज्य** था, बाद में राज्य नौकरियों में भी सशक्त आरक्षण।',
    },
    {
      en: '**JEEViKA** organises rural women into **Self-Help Groups (SHGs)** for livelihoods, savings and empowerment.',
      hi: '**जीविका** ग्रामीण महिलाओं को आजीविका, बचत व सशक्तीकरण हेतु **स्वयं सहायता समूहों (SHG)** में संगठित करती है।',
    },
    {
      en: 'The **Bicycle scheme (Balika Cycle Yojana)** boosts **girls\' education**; **Kanya Utthan Yojana** supports the girl child from birth through education.',
      hi: '**साइकिल योजना (बालिका साइकिल योजना)** **बालिका शिक्षा** बढ़ाती है; **कन्या उत्थान योजना** जन्म से शिक्षा तक बालिका को सहायता देती है।',
    },
    {
      en: '**Har Ghar Nal Ka Jal** aims for **piped tap water to every household**, under the **Saat Nishchay (Seven Resolves)** programme.',
      hi: '**हर घर नल का जल** का लक्ष्य **हर घर तक नल का पानी** है, जो **सात निश्चय (सात संकल्प)** कार्यक्रम के अंतर्गत है।',
    },
    {
      en: '**Saat Nishchay** = seven resolves covering water, electricity, roads, youth skills and women\'s empowerment.',
      hi: '**सात निश्चय** = जल, बिजली, सड़क, युवा कौशल व महिला सशक्तीकरण को समेटने वाले सात संकल्प।',
    },
  ],
  quiz: [
    {
      id: 'b3q1',
      type: 'mcq',
      question: {
        en: 'Who is the constitutional (nominal) head of the state of Bihar?',
        hi: 'बिहार राज्य के संवैधानिक (नाममात्र) प्रमुख कौन होते हैं?',
      },
      options: [
        { en: 'The Chief Minister', hi: 'मुख्यमंत्री' },
        { en: 'The Governor', hi: 'राज्यपाल' },
        { en: 'The Speaker', hi: 'विधानसभा अध्यक्ष' },
        { en: 'The Chief Justice', hi: 'मुख्य न्यायाधीश' },
      ],
      answer: 1,
      explanation: {
        en: 'The Governor is the constitutional (nominal) head of the state. The Chief Minister is the real head of the government.',
        hi: 'राज्यपाल राज्य के संवैधानिक (नाममात्र) प्रमुख होते हैं। मुख्यमंत्री सरकार के वास्तविक प्रमुख होते हैं।',
      },
      topic: 'bihar-schemes',
      difficulty: 1,
    },
    {
      id: 'b3q2',
      type: 'mcq',
      question: {
        en: 'How many seats are there in the Bihar Vidhan Sabha (Legislative Assembly)?',
        hi: 'बिहार विधान सभा में कितनी सीटें हैं?',
      },
      options: [
        { en: '200', hi: '200' },
        { en: '243', hi: '243' },
        { en: '250', hi: '250' },
        { en: '288', hi: '288' },
      ],
      answer: 1,
      explanation: {
        en: 'The Bihar Vidhan Sabha (Legislative Assembly) has 243 seats, whose members are directly elected.',
        hi: 'बिहार विधान सभा में 243 सीटें हैं, जिनके सदस्य सीधे निर्वाचित होते हैं।',
      },
      topic: 'bihar-schemes',
      difficulty: 1,
    },
    {
      id: 'b3q3',
      type: 'mcq',
      question: {
        en: 'The legislature of Bihar is best described as:',
        hi: 'बिहार का विधानमंडल किस रूप में वर्णित है?',
      },
      options: [
        { en: 'Unicameral (one house)', hi: 'एकसदनीय (एक सदन)' },
        { en: 'Bicameral (two houses)', hi: 'द्विसदनीय (दो सदन)' },
        { en: 'Tricameral (three houses)', hi: 'त्रिसदनीय (तीन सदन)' },
        { en: 'It has no legislature', hi: 'इसका कोई विधानमंडल नहीं है' },
      ],
      answer: 1,
      explanation: {
        en: 'Bihar has a bicameral legislature — the Vidhan Sabha (Assembly) and the Vidhan Parishad (Council). Only a few states have a Council.',
        hi: 'बिहार में द्विसदनीय विधानमंडल है — विधान सभा और विधान परिषद। परिषद केवल कुछ ही राज्यों में है।',
      },
      topic: 'bihar-schemes',
      difficulty: 2,
    },
    {
      id: 'b3q4',
      type: 'mcq',
      question: {
        en: 'Bihar is remembered as the first state in India to give 50% reservation for women in:',
        hi: 'बिहार भारत का पहला राज्य माना जाता है जिसने महिलाओं को 50% आरक्षण किसमें दिया?',
      },
      options: [
        { en: 'The Vidhan Sabha', hi: 'विधान सभा में' },
        { en: 'Panchayati Raj Institutions', hi: 'पंचायती राज संस्थाओं में' },
        { en: 'The Lok Sabha', hi: 'लोक सभा में' },
        { en: 'The judiciary', hi: 'न्यायपालिका में' },
      ],
      answer: 1,
      explanation: {
        en: 'In 2006 Bihar became the first state to provide 50% reservation for women in Panchayati Raj Institutions.',
        hi: '2006 में बिहार पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण देने वाला पहला राज्य बना।',
      },
      topic: 'bihar-schemes',
      difficulty: 2,
    },
    {
      id: 'b3q5',
      type: 'mcq',
      question: {
        en: 'JEEViKA (the Bihar Rural Livelihoods Project) is mainly aimed at:',
        hi: 'जीविका (बिहार ग्रामीण आजीविका परियोजना) मुख्यतः किसके लिए है?',
      },
      options: [
        { en: 'Building highways', hi: 'राजमार्ग बनाने के लिए' },
        { en: 'Organising rural women into Self-Help Groups', hi: 'ग्रामीण महिलाओं को स्वयं सहायता समूहों में संगठित करने के लिए' },
        { en: 'Providing free electricity', hi: 'मुफ़्त बिजली देने के लिए' },
        { en: 'Distributing textbooks', hi: 'पाठ्यपुस्तकें बाँटने के लिए' },
      ],
      answer: 1,
      explanation: {
        en: 'JEEViKA organises rural women into Self-Help Groups (SHGs) to promote livelihoods, savings and empowerment.',
        hi: 'जीविका ग्रामीण महिलाओं को स्वयं सहायता समूहों (SHG) में संगठित कर आजीविका, बचत व सशक्तीकरण को बढ़ावा देती है।',
      },
      topic: 'bihar-schemes',
      difficulty: 1,
    },
    {
      id: 'b3q6',
      type: 'mcq',
      question: {
        en: 'The Mukhyamantri Balika Cycle Yojana (bicycle scheme) is credited mainly with improving:',
        hi: 'मुख्यमंत्री बालिका साइकिल योजना (साइकिल योजना) का श्रेय मुख्यतः किसमें सुधार को दिया जाता है?',
      },
      options: [
        { en: 'Farmers\' incomes', hi: 'किसानों की आय' },
        { en: 'Girls\' school attendance and retention', hi: 'बालिकाओं की स्कूल उपस्थिति व निरंतरता' },
        { en: 'Road construction', hi: 'सड़क निर्माण' },
        { en: 'Electricity supply', hi: 'बिजली आपूर्ति' },
      ],
      answer: 1,
      explanation: {
        en: 'The bicycle scheme gives money for bicycles to schoolgirls and is widely credited with sharply raising girls\' school attendance and retention.',
        hi: 'साइकिल योजना स्कूली बालिकाओं को साइकिल के लिए धन देती है और बालिकाओं की स्कूल उपस्थिति व निरंतरता तेज़ी से बढ़ाने का श्रेय इसे दिया जाता है।',
      },
      topic: 'bihar-schemes',
      difficulty: 2,
    },
    {
      id: 'b3q7',
      type: 'mcq',
      question: {
        en: 'Under which programme does the "Har Ghar Nal Ka Jal" (tap water to every home) initiative fall?',
        hi: '"हर घर नल का जल" पहल किस कार्यक्रम के अंतर्गत आती है?',
      },
      options: [
        { en: 'Saat Nishchay (Seven Resolves)', hi: 'सात निश्चय (सात संकल्प)' },
        { en: 'JEEViKA', hi: 'जीविका' },
        { en: 'Kanya Utthan Yojana', hi: 'कन्या उत्थान योजना' },
        { en: 'Balika Cycle Yojana', hi: 'बालिका साइकिल योजना' },
      ],
      answer: 0,
      explanation: {
        en: 'Har Ghar Nal Ka Jal, aiming to provide piped tap water to every household, is part of the Saat Nishchay (Seven Resolves) programme.',
        hi: 'हर घर तक नल का पानी पहुँचाने का लक्ष्य रखने वाली हर घर नल का जल पहल सात निश्चय (सात संकल्प) कार्यक्रम का हिस्सा है।',
      },
      topic: 'bihar-schemes',
      difficulty: 2,
    },
    {
      id: 'b3q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. The Chief Minister is the constitutional head of Bihar.\n2. The Mukhyamantri Kanya Utthan Yojana provides financial support for the girl child from birth through education.\nWhich is/are correct?',
        hi: 'निम्नलिखित कथनों पर विचार करें:\n1. मुख्यमंत्री बिहार के संवैधानिक प्रमुख हैं।\n2. मुख्यमंत्री कन्या उत्थान योजना जन्म से शिक्षा तक बालिका को आर्थिक सहायता देती है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1 न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — the Governor is the constitutional head, while the Chief Minister is the real head of the government. Statement 2 is correct: Kanya Utthan Yojana supports the girl child from birth through education.',
        hi: 'कथन 1 गलत है — राज्यपाल संवैधानिक प्रमुख हैं, जबकि मुख्यमंत्री सरकार के वास्तविक प्रमुख हैं। कथन 2 सही है: कन्या उत्थान योजना जन्म से शिक्षा तक बालिका को सहायता देती है।',
      },
      topic: 'bihar-schemes',
      difficulty: 3,
    },
  ],
};
