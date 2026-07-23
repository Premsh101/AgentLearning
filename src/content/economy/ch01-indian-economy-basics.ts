import type { Chapter } from '../types';

export const economyCh01: Chapter = {
  id: 'economy-ch01',
  subjectId: 'economy',
  order: 1,
  title: {
    en: 'Basics of the Indian Economy',
    hi: 'भारतीय अर्थव्यवस्था की मूल बातें',
  },
  intro: {
    en: 'Economy sounds difficult, but the basics are just common sense with labels. What kind of economy is India? Who does the planning? What changed in 1991? Get these foundations right and the harder topics — budget, banking, inflation — become much easier later. We\'ll also connect each idea to Bihar.',
    hi: 'अर्थव्यवस्था कठिन लगती है, पर मूल बातें बस नामों के साथ सामान्य समझ हैं। भारत कैसी अर्थव्यवस्था है? नियोजन कौन करता है? 1991 में क्या बदला? इन आधारों को समझ लें तो कठिन विषय — बजट, बैंकिंग, मुद्रास्फीति — आगे बहुत सरल हो जाते हैं। हम हर विचार को बिहार से भी जोड़ेंगे।',
  },
  sections: [
    {
      id: 'type',
      heading: { en: 'What Type of Economy is India?', hi: 'भारत कैसी अर्थव्यवस्था है?' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'India is a **mixed economy** — it combines a private sector (businesses run for profit) with a public sector (government-run enterprises). This is a middle path between pure **capitalism** (everything private, like the USA) and pure **socialism** (everything state-run, like the former USSR).',
            hi: 'भारत एक **मिश्रित अर्थव्यवस्था** है — इसमें निजी क्षेत्र (लाभ हेतु चलने वाले व्यवसाय) और सार्वजनिक क्षेत्र (सरकार-संचालित उद्यम) दोनों हैं। यह शुद्ध **पूँजीवाद** (सब कुछ निजी, जैसे अमेरिका) और शुद्ध **समाजवाद** (सब कुछ राज्य-संचालित, जैसे पूर्व सोवियत संघ) के बीच का मध्य मार्ग है।',
          },
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of a mixed economy like a cricket team with both **star batsmen (private companies)** and a **strong coach (the government)**. Neither runs the show alone — they work together, and the government steps in where the market alone would fail (like roads, defence, or helping the poor).',
            hi: 'मिश्रित अर्थव्यवस्था को ऐसी क्रिकेट टीम समझिए जिसमें **स्टार बल्लेबाज़ (निजी कंपनियाँ)** भी हों और एक **सशक्त कोच (सरकार)** भी। कोई अकेले खेल नहीं चलाता — वे साथ काम करते हैं, और जहाँ केवल बाज़ार विफल होता (जैसे सड़कें, रक्षा, या गरीबों की सहायता) वहाँ सरकार हस्तक्षेप करती है।',
          },
        },
      ],
    },
    {
      id: 'sectors',
      heading: { en: 'The Three Sectors', hi: 'तीन क्षेत्रक' },
      blocks: [
        {
          type: 'figure',
          figureId: 'economy-sectors',
          caption: {
            en: 'Every economic activity fits into one of three sectors. In India, the tertiary (services) sector is the largest.',
            hi: 'हर आर्थिक गतिविधि तीन क्षेत्रकों में से एक में आती है। भारत में तृतीयक (सेवा) क्षेत्रक सबसे बड़ा है।',
          },
        },
        {
          type: 'list',
          items: [
            { en: '**Primary** — gets things directly from **nature**: agriculture, mining, fishing, forestry.', hi: '**प्राथमिक** — वस्तुएँ सीधे **प्रकृति** से: कृषि, खनन, मत्स्य, वानिकी।' },
            { en: '**Secondary** — turns raw materials into goods: **manufacturing**, construction, factories.', hi: '**द्वितीयक** — कच्चे माल को वस्तुओं में बदलता है: **विनिर्माण**, निर्माण, कारखाने।' },
            { en: '**Tertiary** — provides **services**: banking, IT, transport, trade. This is the **largest** sector of India\'s economy today.', hi: '**तृतीयक** — **सेवाएँ** प्रदान करता है: बैंकिंग, IT, परिवहन, व्यापार। यह आज भारत की अर्थव्यवस्था का **सबसे बड़ा** क्षेत्रक है।' },
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Bihar connection: unlike India overall, Bihar\'s economy still leans heavily on the **primary sector (agriculture)**, with a large services sector but a **small industrial base**. That is why creating industry and jobs is Bihar\'s biggest economic challenge — a common BPSC Mains theme.',
            hi: 'बिहार कनेक्शन: संपूर्ण भारत के विपरीत, बिहार की अर्थव्यवस्था आज भी **प्राथमिक क्षेत्रक (कृषि)** पर अत्यधिक निर्भर है, बड़ा सेवा क्षेत्र पर **छोटा औद्योगिक आधार**। इसीलिए उद्योग व रोज़गार सृजन बिहार की सबसे बड़ी आर्थिक चुनौती है — BPSC मुख्य परीक्षा का सामान्य विषय।',
          },
        },
      ],
    },
    {
      id: 'planning',
      heading: { en: 'Planning: From Planning Commission to NITI Aayog', hi: 'नियोजन: योजना आयोग से नीति आयोग तक' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'The **Planning Commission** was set up in **1950** and ran the **Five Year Plans**. The **First Five Year Plan (1951–56)** focused on **agriculture** (Harrod–Domar model).', hi: '**योजना आयोग** की स्थापना **1950** में हुई और इसने **पंचवर्षीय योजनाएँ** चलाईं। **प्रथम पंचवर्षीय योजना (1951–56)** का केंद्र **कृषि** था (हैरोड–डोमर मॉडल)।' },
            { en: 'The **Second Plan (1956–61)** focused on **heavy industry** (Mahalanobis model).', hi: '**द्वितीय योजना (1956–61)** का केंद्र **भारी उद्योग** था (महालनोबिस मॉडल)।' },
            { en: 'In **2015**, the Planning Commission was replaced by the **NITI Aayog** (National Institution for Transforming India) — a policy think-tank, not a fund-allocating body.', hi: '**2015** में योजना आयोग के स्थान पर **नीति आयोग** (नेशनल इंस्टीट्यूशन फॉर ट्रांसफॉर्मिंग इंडिया) आया — एक नीति थिंक-टैंक, निधि-आवंटन निकाय नहीं।' },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Trap to avoid: the **Planning Commission** and **NITI Aayog** were created by an **executive resolution**, NOT by the Constitution — they are **non-constitutional (and non-statutory)** bodies. Also, the last Five Year Plan was the **12th (2012–17)**.',
            hi: 'बचने योग्य जाल: **योजना आयोग** व **नीति आयोग** एक **कार्यकारी प्रस्ताव** द्वारा बने, संविधान द्वारा **नहीं** — ये **गैर-संवैधानिक (व गैर-सांविधिक)** निकाय हैं। साथ ही, अंतिम पंचवर्षीय योजना **12वीं (2012–17)** थी।',
          },
        },
      ],
    },
    {
      id: 'reforms',
      heading: { en: 'The 1991 Reforms (LPG)', hi: '1991 के सुधार (LPG)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Facing a severe economic crisis, India launched major reforms in **1991** under PM **P. V. Narasimha Rao** and Finance Minister **Dr. Manmohan Singh**. These are remembered as **LPG**: **Liberalisation** (fewer licences and controls), **Privatisation** (a bigger role for private business), and **Globalisation** (opening up to world trade).',
            hi: 'गंभीर आर्थिक संकट का सामना करते हुए, भारत ने **1991** में प्रधानमंत्री **पी. वी. नरसिम्हा राव** व वित्त मंत्री **डॉ. मनमोहन सिंह** के नेतृत्व में बड़े सुधार आरंभ किए। इन्हें **LPG** के रूप में याद किया जाता है: **उदारीकरण** (कम लाइसेंस व नियंत्रण), **निजीकरण** (निजी व्यवसाय की बड़ी भूमिका), व **वैश्वीकरण** (विश्व व्यापार के लिए खुलना)।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Two key institutions: the **Reserve Bank of India (RBI)** — the central bank, established in **1935** and nationalised in **1949** — controls monetary policy. The **Union Budget** (Article 112, the "Annual Financial Statement") is presented in Parliament every year, now on **1 February**.',
            hi: 'दो प्रमुख संस्थाएँ: **भारतीय रिज़र्व बैंक (RBI)** — केंद्रीय बैंक, स्थापना **1935**, राष्ट्रीयकरण **1949** — मौद्रिक नीति नियंत्रित करता है। **केंद्रीय बजट** (अनुच्छेद 112, "वार्षिक वित्तीय विवरण") प्रतिवर्ष संसद में, अब **1 फरवरी** को प्रस्तुत किया जाता है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'India = a **mixed economy** (private + public sector); a middle path between capitalism and socialism.',
      hi: 'भारत = **मिश्रित अर्थव्यवस्था** (निजी + सार्वजनिक क्षेत्र); पूँजीवाद व समाजवाद के बीच मध्य मार्ग।',
    },
    {
      en: 'Three sectors: **Primary** (nature/agriculture), **Secondary** (industry), **Tertiary** (services — largest in India).',
      hi: 'तीन क्षेत्रक: **प्राथमिक** (प्रकृति/कृषि), **द्वितीयक** (उद्योग), **तृतीयक** (सेवाएँ — भारत में सबसे बड़ा)।',
    },
    {
      en: 'Planning Commission (**1950**) → **NITI Aayog (2015)**; both non-constitutional. Last Five Year Plan = 12th (2012–17).',
      hi: 'योजना आयोग (**1950**) → **नीति आयोग (2015)**; दोनों गैर-संवैधानिक। अंतिम पंचवर्षीय योजना = 12वीं (2012–17)।',
    },
    {
      en: '**1991 reforms (LPG):** Liberalisation, Privatisation, Globalisation — PM Narasimha Rao, FM Manmohan Singh.',
      hi: '**1991 सुधार (LPG):** उदारीकरण, निजीकरण, वैश्वीकरण — प्रधानमंत्री नरसिम्हा राव, वित्त मंत्री मनमोहन सिंह।',
    },
    {
      en: 'RBI: central bank, est. **1935**, nationalised **1949**. Bihar\'s economy leans on agriculture with a small industrial base.',
      hi: 'RBI: केंद्रीय बैंक, स्थापना **1935**, राष्ट्रीयकरण **1949**। बिहार की अर्थव्यवस्था कृषि पर निर्भर, औद्योगिक आधार छोटा।',
    },
  ],
  quiz: [
    {
      id: 'e1q1',
      type: 'mcq',
      question: {
        en: 'The Indian economy is best described as a:',
        hi: 'भारतीय अर्थव्यवस्था का सर्वोत्तम वर्णन है:',
      },
      options: [
        { en: 'Capitalist economy', hi: 'पूँजीवादी अर्थव्यवस्था' },
        { en: 'Socialist economy', hi: 'समाजवादी अर्थव्यवस्था' },
        { en: 'Mixed economy', hi: 'मिश्रित अर्थव्यवस्था' },
        { en: 'Traditional economy', hi: 'पारंपरिक अर्थव्यवस्था' },
      ],
      answer: 2,
      explanation: {
        en: 'India is a mixed economy, combining private and public sectors — a middle path between capitalism and socialism.',
        hi: 'भारत एक मिश्रित अर्थव्यवस्था है, जिसमें निजी व सार्वजनिक क्षेत्र दोनों हैं — पूँजीवाद व समाजवाद के बीच मध्य मार्ग।',
      },
      topic: 'economy-basics',
      difficulty: 1,
    },
    {
      id: 'e1q2',
      type: 'mcq',
      question: {
        en: 'Agriculture, mining and fishing belong to which sector of the economy?',
        hi: 'कृषि, खनन व मत्स्य अर्थव्यवस्था के किस क्षेत्रक में आते हैं?',
      },
      options: [
        { en: 'Primary sector', hi: 'प्राथमिक क्षेत्रक' },
        { en: 'Secondary sector', hi: 'द्वितीयक क्षेत्रक' },
        { en: 'Tertiary sector', hi: 'तृतीयक क्षेत्रक' },
        { en: 'Quaternary sector', hi: 'चतुर्थक क्षेत्रक' },
      ],
      answer: 0,
      explanation: {
        en: 'These activities take resources directly from nature and belong to the primary sector.',
        hi: 'ये गतिविधियाँ संसाधन सीधे प्रकृति से लेती हैं और प्राथमिक क्षेत्रक में आती हैं।',
      },
      topic: 'economy-basics',
      difficulty: 1,
    },
    {
      id: 'e1q3',
      type: 'mcq',
      question: {
        en: 'Which sector contributes the largest share to India\'s GDP today?',
        hi: 'आज भारत के सकल घरेलू उत्पाद (GDP) में सबसे बड़ा योगदान किस क्षेत्रक का है?',
      },
      options: [
        { en: 'Primary (agriculture)', hi: 'प्राथमिक (कृषि)' },
        { en: 'Secondary (industry)', hi: 'द्वितीयक (उद्योग)' },
        { en: 'Tertiary (services)', hi: 'तृतीयक (सेवाएँ)' },
        { en: 'All contribute equally', hi: 'सभी समान योगदान करते हैं' },
      ],
      answer: 2,
      explanation: {
        en: 'The tertiary (services) sector — banking, IT, transport, trade — is the largest contributor to India\'s GDP.',
        hi: 'तृतीयक (सेवा) क्षेत्रक — बैंकिंग, IT, परिवहन, व्यापार — भारत के GDP में सबसे बड़ा योगदानकर्ता है।',
      },
      topic: 'economy-basics',
      difficulty: 2,
    },
    {
      id: 'e1q4',
      type: 'mcq',
      question: {
        en: 'The Planning Commission was replaced by which body in 2015?',
        hi: '2015 में योजना आयोग के स्थान पर कौन-सा निकाय आया?',
      },
      options: [
        { en: 'Finance Commission', hi: 'वित्त आयोग' },
        { en: 'NITI Aayog', hi: 'नीति आयोग' },
        { en: 'Economic Advisory Council', hi: 'आर्थिक सलाहकार परिषद' },
        { en: 'National Development Council', hi: 'राष्ट्रीय विकास परिषद' },
      ],
      answer: 1,
      explanation: {
        en: 'In 2015 the Planning Commission was replaced by NITI Aayog (National Institution for Transforming India).',
        hi: '2015 में योजना आयोग के स्थान पर नीति आयोग (नेशनल इंस्टीट्यूशन फॉर ट्रांसफॉर्मिंग इंडिया) आया।',
      },
      topic: 'economy-basics',
      difficulty: 1,
    },
    {
      id: 'e1q5',
      type: 'mcq',
      question: {
        en: 'The economic reforms of 1991 are popularly summarised by the abbreviation LPG, which stands for:',
        hi: '1991 के आर्थिक सुधारों को संक्षेप LPG से जाना जाता है, जिसका अर्थ है:',
      },
      options: [
        { en: 'Land, Power, Growth', hi: 'भूमि, शक्ति, विकास' },
        { en: 'Liberalisation, Privatisation, Globalisation', hi: 'उदारीकरण, निजीकरण, वैश्वीकरण' },
        { en: 'Labour, Production, Goods', hi: 'श्रम, उत्पादन, वस्तुएँ' },
        { en: 'Loans, Profit, Gains', hi: 'ऋण, लाभ, प्राप्ति' },
      ],
      answer: 1,
      explanation: {
        en: 'LPG stands for Liberalisation, Privatisation and Globalisation — the 1991 reforms under Narasimha Rao and Manmohan Singh.',
        hi: 'LPG का अर्थ उदारीकरण, निजीकरण व वैश्वीकरण है — नरसिम्हा राव व मनमोहन सिंह के नेतृत्व में 1991 के सुधार।',
      },
      topic: 'economy-basics',
      difficulty: 1,
    },
    {
      id: 'e1q6',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. The Planning Commission was a constitutional body.\n2. The First Five Year Plan focused on agriculture.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. योजना आयोग एक संवैधानिक निकाय था।\n2. प्रथम पंचवर्षीय योजना का केंद्र कृषि था।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — the Planning Commission was a non-constitutional body (set up by an executive resolution). Statement 2 is correct.',
        hi: 'कथन 1 गलत है — योजना आयोग एक गैर-संवैधानिक निकाय था (कार्यकारी प्रस्ताव द्वारा गठित)। कथन 2 सही है।',
      },
      topic: 'economy-basics',
      difficulty: 2,
    },
    {
      id: 'e1q7',
      type: 'mcq',
      question: {
        en: 'The Reserve Bank of India (RBI) was nationalised in which year?',
        hi: 'भारतीय रिज़र्व बैंक (RBI) का राष्ट्रीयकरण किस वर्ष हुआ?',
      },
      options: [
        { en: '1935', hi: '1935' },
        { en: '1947', hi: '1947' },
        { en: '1949', hi: '1949' },
        { en: '1969', hi: '1969' },
      ],
      answer: 2,
      explanation: {
        en: 'The RBI was established in 1935 and nationalised in 1949. (In 1969, 14 major commercial banks were nationalised — a different event.)',
        hi: 'RBI की स्थापना 1935 में हुई और राष्ट्रीयकरण 1949 में। (1969 में 14 बड़े वाणिज्यिक बैंकों का राष्ट्रीयकरण हुआ — एक अलग घटना।)',
      },
      topic: 'economy-basics',
      difficulty: 3,
    },
  ],
};
