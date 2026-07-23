import type { Chapter } from '../types';

export const polityCh01: Chapter = {
  id: 'polity-ch01',
  subjectId: 'polity',
  order: 1,
  title: {
    en: 'Historical Background of the Indian Constitution (1773–1947)',
    hi: 'भारतीय संविधान की ऐतिहासिक पृष्ठभूमि (1773–1947)',
  },
  intro: {
    en: 'Our Constitution did not appear overnight. It grew step by step out of laws made during British rule. BPSC repeatedly asks direct questions from this chapter — which Act came in which year, and what it did first. Master the acts, the years, and the "firsts", and these become guaranteed marks.',
    hi: 'हमारा संविधान रातों-रात नहीं बना। यह ब्रिटिश शासन के दौरान बने कानूनों से धीरे-धीरे विकसित हुआ। BPSC इस अध्याय से सीधे प्रश्न पूछता है — कौन-सा अधिनियम किस वर्ष आया और उसने पहली बार क्या किया। अधिनियम, वर्ष और "प्रथम" याद कर लें, तो ये पक्के अंक बन जाते हैं।',
  },
  sections: [
    {
      id: 'company-rule',
      heading: { en: 'Phase 1: Company Rule (1773–1858)', hi: 'चरण 1: कंपनी का शासन (1773–1858)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The East India Company came to trade but slowly became a ruler. To control the Company, the British Parliament passed a series of Acts. Each Act added one new brick to the building that finally became our Constitution.',
            hi: 'ईस्ट इंडिया कंपनी व्यापार करने आई थी, पर धीरे-धीरे शासक बन गई। कंपनी पर नियंत्रण के लिए ब्रिटिश संसद ने कई अधिनियम पारित किए। हर अधिनियम ने उस इमारत में एक नई ईंट जोड़ी, जो अंततः हमारा संविधान बनी।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Acts during Company Rule — what each did first', hi: 'कंपनी शासन के अधिनियम — किसने पहली बार क्या किया' },
          headers: [
            { en: 'Act & Year', hi: 'अधिनियम व वर्ष' },
            { en: 'Key Provisions (remember these!)', hi: 'मुख्य प्रावधान (इन्हें याद रखें!)' },
          ],
          rows: [
            [
              { en: '**Regulating Act, 1773**', hi: '**रेगुलेटिंग एक्ट, 1773**' },
              {
                en: 'First step by Parliament to control the Company. Governor of Bengal became **Governor-General of Bengal** (first: **Warren Hastings**). **Supreme Court at Calcutta (1774)**. Executive Council of 4 members.',
                hi: 'कंपनी पर नियंत्रण हेतु संसद का पहला कदम। बंगाल का गवर्नर बना **बंगाल का गवर्नर-जनरल** (प्रथम: **वारेन हेस्टिंग्स**)। **कलकत्ता में सर्वोच्च न्यायालय (1774)**। 4 सदस्यीय कार्यकारी परिषद।',
              },
            ],
            [
              { en: "**Pitt's India Act, 1784**", hi: '**पिट्स इंडिया एक्ट, 1784**' },
              {
                en: 'Set up **Board of Control** → start of **dual government** (Company + Crown). Company territories first called **"British possessions in India"**.',
                hi: '**बोर्ड ऑफ कंट्रोल** की स्थापना → **द्वैध शासन** की शुरुआत (कंपनी + क्राउन)। कंपनी के क्षेत्रों को पहली बार **"भारत में ब्रिटिश अधिकार क्षेत्र"** कहा गया।',
              },
            ],
            [
              { en: '**Charter Act, 1813**', hi: '**चार्टर एक्ट, 1813**' },
              {
                en: "Ended Company's **trade monopoly in India** (kept only tea & trade with China). ₹1 lakh per year for **education** of Indians.",
                hi: 'कंपनी का **भारत में व्यापार एकाधिकार समाप्त** (केवल चाय व चीन से व्यापार बचा)। भारतीयों की **शिक्षा** हेतु प्रतिवर्ष ₹1 लाख।',
              },
            ],
            [
              { en: '**Charter Act, 1833**', hi: '**चार्टर एक्ट, 1833**' },
              {
                en: 'Governor-General of Bengal became **Governor-General of India** (first: **William Bentinck**). Company became a purely **administrative body** — all trade ended. Laws made under it were now called **Acts**, not Regulations.',
                hi: 'बंगाल का गवर्नर-जनरल बना **भारत का गवर्नर-जनरल** (प्रथम: **विलियम बेंटिंक**)। कंपनी पूर्णतः **प्रशासनिक निकाय** बनी — सारा व्यापार समाप्त। अब कानून **रेगुलेशन** नहीं, **एक्ट** कहलाए।',
              },
            ],
            [
              { en: '**Charter Act, 1853**', hi: '**चार्टर एक्ट, 1853**' },
              {
                en: '**Separated legislative and executive** functions — separate Legislative Council. Introduced **open competition** for civil services (Macaulay Committee, 1854). Indians were also eligible.',
                hi: '**विधायी और कार्यकारी** कार्य अलग — अलग विधान परिषद बनी। सिविल सेवा हेतु **खुली प्रतियोगिता** शुरू (मैकाले समिति, 1854)। भारतीय भी पात्र बने।',
              },
            ],
          ],
        },
        {
          type: 'note',
          title: { en: 'Simple trick', hi: 'आसान ट्रिक' },
          text: {
            en: '1773 → **control** begins; 1784 → **dual govt**; 1813 → **trade opens**; 1833 → **one India, one Governor-General**; 1853 → **competition for jobs**. Say it as a story and the years stick.',
            hi: '1773 → **नियंत्रण** शुरू; 1784 → **द्वैध शासन**; 1813 → **व्यापार खुला**; 1833 → **एक भारत, एक गवर्नर-जनरल**; 1853 → **नौकरी हेतु प्रतियोगिता**। इसे कहानी की तरह बोलें, वर्ष खुद याद रहेंगे।',
          },
        },
      ],
    },
    {
      id: 'crown-rule',
      heading: { en: 'Phase 2: Crown Rule (1858–1947)', hi: 'चरण 2: क्राउन (ताज) का शासन (1858–1947)' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'After the Revolt of 1857, Britain removed the Company and took direct control. Now the Acts slowly started including Indians in governance — first by nomination, then by election.',
            hi: '1857 की क्रांति के बाद ब्रिटेन ने कंपनी को हटाकर सीधा शासन संभाला। अब अधिनियमों में धीरे-धीरे भारतीयों को शासन में शामिल किया जाने लगा — पहले मनोनयन से, फिर चुनाव से।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Acts during Crown Rule', hi: 'क्राउन शासन के अधिनियम' },
          headers: [
            { en: 'Act & Year', hi: 'अधिनियम व वर्ष' },
            { en: 'Key Provisions', hi: 'मुख्य प्रावधान' },
          ],
          rows: [
            [
              { en: '**Government of India Act, 1858**', hi: '**भारत सरकार अधिनियम, 1858**' },
              {
                en: 'Rule transferred from Company to **British Crown**. Post of **Secretary of State for India** created. Governor-General also became **Viceroy** (first: **Lord Canning**).',
                hi: 'शासन कंपनी से **ब्रिटिश क्राउन** को हस्तांतरित। **भारत सचिव** का पद बना। गवर्नर-जनरल अब **वायसराय** भी बने (प्रथम: **लॉर्ड कैनिंग**)।',
              },
            ],
            [
              { en: '**Indian Councils Act, 1861**', hi: '**भारत परिषद अधिनियम, 1861**' },
              {
                en: 'Indians first **nominated** into law-making (e.g. Raja of Banaras, Maharaja of Patiala, Sir Dinkar Rao). **Portfolio system** introduced. Legislative powers **restored to Bombay & Madras** (start of decentralisation).',
                hi: 'भारतीयों को पहली बार विधि-निर्माण में **मनोनीत** किया गया (जैसे बनारस के राजा, पटियाला के महाराजा, सर दिनकर राव)। **विभागीय (पोर्टफोलियो) प्रणाली** शुरू। **बंबई व मद्रास को विधायी शक्तियाँ वापस** (विकेंद्रीकरण की शुरुआत)।',
              },
            ],
            [
              { en: '**Indian Councils Act, 1892**', hi: '**भारत परिषद अधिनियम, 1892**' },
              {
                en: 'Beginning of **indirect elections** (nomination on recommendation). Members could **discuss the budget** and ask questions.',
                hi: '**अप्रत्यक्ष चुनाव** की शुरुआत (सिफारिश पर मनोनयन)। सदस्य **बजट पर चर्चा** और प्रश्न पूछ सकते थे।',
              },
            ],
            [
              { en: '**Morley–Minto Reforms, 1909**', hi: '**मॉर्ले–मिंटो सुधार, 1909**' },
              {
                en: '**Separate electorate for Muslims** — Lord Minto called "Father of Communal Electorate". **Satyendra Prasad Sinha**: first Indian in the Viceroy\'s Executive Council.',
                hi: '**मुसलमानों के लिए पृथक निर्वाचन** — लॉर्ड मिंटो को "सांप्रदायिक निर्वाचन का जनक" कहा गया। **सत्येंद्र प्रसाद सिन्हा**: वायसराय की कार्यकारी परिषद में पहले भारतीय।',
              },
            ],
            [
              { en: '**Montagu–Chelmsford Reforms, 1919**', hi: '**मोंटेग्यू–चेम्सफोर्ड सुधार, 1919**' },
              {
                en: '**Dyarchy in provinces** (subjects split into transferred & reserved). **Bicameral** central legislature. **Direct elections** introduced. Provided for a **Public Service Commission** (set up 1926).',
                hi: '**प्रांतों में द्वैध शासन** (विषय हस्तांतरित व आरक्षित में बँटे)। केंद्र में **द्विसदनीय** विधायिका। **प्रत्यक्ष चुनाव** शुरू। **लोक सेवा आयोग** का प्रावधान (स्थापना 1926)।',
              },
            ],
            [
              { en: '**Government of India Act, 1935**', hi: '**भारत सरकार अधिनियम, 1935**' },
              {
                en: 'Longest Act; **biggest source of our Constitution**. Proposed **All-India Federation** (never formed). **Provincial autonomy** — dyarchy ended in provinces, introduced at Centre. **Federal Court (1937)**, **RBI (1935)**. Extended separate electorates.',
                hi: 'सबसे लंबा अधिनियम; **हमारे संविधान का सबसे बड़ा स्रोत**। **अखिल भारतीय संघ** का प्रस्ताव (कभी बना नहीं)। **प्रांतीय स्वायत्तता** — प्रांतों से द्वैध शासन समाप्त, केंद्र में लागू। **संघीय न्यायालय (1937)**, **RBI (1935)**। पृथक निर्वाचन का विस्तार।',
              },
            ],
            [
              { en: '**Indian Independence Act, 1947**', hi: '**भारतीय स्वतंत्रता अधिनियम, 1947**' },
              {
                en: 'British rule ended on **15 August 1947**. Two dominions: **India & Pakistan**. Constituent Assemblies became fully **sovereign** — free to frame any constitution.',
                hi: '**15 अगस्त 1947** को ब्रिटिश शासन समाप्त। दो डोमिनियन: **भारत व पाकिस्तान**। संविधान सभाएँ पूर्णतः **संप्रभु** — कोई भी संविधान बनाने के लिए स्वतंत्र।',
              },
            ],
          ],
        },
        {
          type: 'note',
          title: { en: 'BPSC exam angle', hi: 'BPSC परीक्षा दृष्टिकोण' },
          text: {
            en: 'BPSC loves "firsts": first Governor-General of Bengal (Warren Hastings), of India (William Bentinck), first Viceroy (Canning), first Indian in Executive Council (S.P. Sinha), first separate electorate (1909), first dyarchy (1919). Revise this list before every prelims.',
            hi: 'BPSC को "प्रथम" बहुत पसंद हैं: बंगाल के प्रथम गवर्नर-जनरल (वारेन हेस्टिंग्स), भारत के (विलियम बेंटिंक), प्रथम वायसराय (कैनिंग), कार्यकारी परिषद में प्रथम भारतीय (एस.पी. सिन्हा), प्रथम पृथक निर्वाचन (1909), प्रथम द्वैध शासन (1919)। हर प्रारंभिक परीक्षा से पहले यह सूची दोहराएँ।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**1773 Regulating Act** — Parliament\'s first control over the Company; Governor-General of Bengal; Supreme Court at Calcutta (1774).',
      hi: '**1773 रेगुलेटिंग एक्ट** — कंपनी पर संसद का पहला नियंत्रण; बंगाल का गवर्नर-जनरल; कलकत्ता में सर्वोच्च न्यायालय (1774)।',
    },
    {
      en: "**1784 Pitt's India Act** — Board of Control; dual government begins.",
      hi: '**1784 पिट्स इंडिया एक्ट** — बोर्ड ऑफ कंट्रोल; द्वैध शासन की शुरुआत।',
    },
    {
      en: '**1813** — trade monopoly ended; ₹1 lakh for education. **1833** — Governor-General of India (Bentinck); Company became purely administrative.',
      hi: '**1813** — व्यापार एकाधिकार समाप्त; शिक्षा हेतु ₹1 लाख। **1833** — भारत का गवर्नर-जनरल (बेंटिंक); कंपनी केवल प्रशासनिक निकाय।',
    },
    {
      en: '**1853** — legislative & executive separated; open competition for civil services.',
      hi: '**1853** — विधायी व कार्यकारी अलग; सिविल सेवा में खुली प्रतियोगिता।',
    },
    {
      en: '**1858** — Crown rule; Secretary of State; first Viceroy Lord Canning.',
      hi: '**1858** — क्राउन का शासन; भारत सचिव; प्रथम वायसराय लॉर्ड कैनिंग।',
    },
    {
      en: '**1861** — Indians nominated to councils; portfolio system. **1892** — indirect elections; budget discussion.',
      hi: '**1861** — परिषदों में भारतीय मनोनीत; पोर्टफोलियो प्रणाली। **1892** — अप्रत्यक्ष चुनाव; बजट पर चर्चा।',
    },
    {
      en: '**1909 Morley–Minto** — separate electorate for Muslims; S.P. Sinha first Indian in Executive Council.',
      hi: '**1909 मॉर्ले–मिंटो** — मुसलमानों हेतु पृथक निर्वाचन; एस.पी. सिन्हा कार्यकारी परिषद में प्रथम भारतीय।',
    },
    {
      en: '**1919 Montagu–Chelmsford** — dyarchy in provinces; bicameralism; direct elections; PSC provision.',
      hi: '**1919 मोंटेग्यू–चेम्सफोर्ड** — प्रांतों में द्वैध शासन; द्विसदनीयता; प्रत्यक्ष चुनाव; लोक सेवा आयोग का प्रावधान।',
    },
    {
      en: '**1935 GoI Act** — provincial autonomy, Federal Court, RBI; the single biggest source of the Indian Constitution.',
      hi: '**1935 भारत सरकार अधिनियम** — प्रांतीय स्वायत्तता, संघीय न्यायालय, RBI; भारतीय संविधान का सबसे बड़ा स्रोत।',
    },
    {
      en: '**1947 Independence Act** — 15 August 1947; two dominions; sovereign Constituent Assembly.',
      hi: '**1947 स्वतंत्रता अधिनियम** — 15 अगस्त 1947; दो डोमिनियन; संप्रभु संविधान सभा।',
    },
  ],
  quiz: [
    {
      id: 'p1q1',
      type: 'mcq',
      question: {
        en: 'Under which Act was the post of Governor-General of Bengal created?',
        hi: 'बंगाल के गवर्नर-जनरल का पद किस अधिनियम के अंतर्गत बनाया गया?',
      },
      options: [
        { en: 'Regulating Act, 1773', hi: 'रेगुलेटिंग एक्ट, 1773' },
        { en: "Pitt's India Act, 1784", hi: 'पिट्स इंडिया एक्ट, 1784' },
        { en: 'Charter Act, 1833', hi: 'चार्टर एक्ट, 1833' },
        { en: 'Government of India Act, 1858', hi: 'भारत सरकार अधिनियम, 1858' },
      ],
      answer: 0,
      explanation: {
        en: 'The Regulating Act, 1773 made the Governor of Bengal the Governor-General of Bengal. Warren Hastings was the first.',
        hi: 'रेगुलेटिंग एक्ट, 1773 ने बंगाल के गवर्नर को बंगाल का गवर्नर-जनरल बनाया। वारेन हेस्टिंग्स प्रथम थे।',
      },
      topic: 'polity-historical',
      difficulty: 1,
    },
    {
      id: 'p1q2',
      type: 'mcq',
      question: {
        en: 'The Supreme Court at Calcutta was established in which year?',
        hi: 'कलकत्ता में सर्वोच्च न्यायालय की स्थापना किस वर्ष हुई?',
      },
      options: [
        { en: '1773', hi: '1773' },
        { en: '1774', hi: '1774' },
        { en: '1784', hi: '1784' },
        { en: '1813', hi: '1813' },
      ],
      answer: 1,
      explanation: {
        en: 'Provided by the Regulating Act 1773, the Supreme Court at Calcutta was actually set up in 1774 (Chief Justice: Elijah Impey).',
        hi: 'रेगुलेटिंग एक्ट 1773 में प्रावधान हुआ, पर कलकत्ता का सर्वोच्च न्यायालय 1774 में स्थापित हुआ (मुख्य न्यायाधीश: एलिजा इम्पे)।',
      },
      topic: 'polity-historical',
      difficulty: 2,
    },
    {
      id: 'p1q3',
      type: 'mcq',
      question: {
        en: 'Who was the first Governor-General of India?',
        hi: 'भारत के प्रथम गवर्नर-जनरल कौन थे?',
      },
      options: [
        { en: 'Warren Hastings', hi: 'वारेन हेस्टिंग्स' },
        { en: 'Lord Canning', hi: 'लॉर्ड कैनिंग' },
        { en: 'William Bentinck', hi: 'विलियम बेंटिंक' },
        { en: 'Lord Mountbatten', hi: 'लॉर्ड माउंटबेटन' },
      ],
      answer: 2,
      explanation: {
        en: 'The Charter Act 1833 made the Governor-General of Bengal the Governor-General of India — William Bentinck was the first. (Warren Hastings = first of Bengal; Canning = first Viceroy.)',
        hi: 'चार्टर एक्ट 1833 ने बंगाल के गवर्नर-जनरल को भारत का गवर्नर-जनरल बनाया — विलियम बेंटिंक प्रथम थे। (वारेन हेस्टिंग्स = बंगाल के प्रथम; कैनिंग = प्रथम वायसराय।)',
      },
      topic: 'polity-historical',
      difficulty: 1,
    },
    {
      id: 'p1q4',
      type: 'mcq',
      question: {
        en: 'Separate electorate for Muslims was introduced by which reform?',
        hi: 'मुसलमानों के लिए पृथक निर्वाचन किस सुधार द्वारा लागू किया गया?',
      },
      options: [
        { en: 'Indian Councils Act, 1892', hi: 'भारत परिषद अधिनियम, 1892' },
        { en: 'Morley–Minto Reforms, 1909', hi: 'मॉर्ले–मिंटो सुधार, 1909' },
        { en: 'Montagu–Chelmsford Reforms, 1919', hi: 'मोंटेग्यू–चेम्सफोर्ड सुधार, 1919' },
        { en: 'Government of India Act, 1935', hi: 'भारत सरकार अधिनियम, 1935' },
      ],
      answer: 1,
      explanation: {
        en: 'The Indian Councils Act 1909 (Morley–Minto Reforms) introduced separate electorates for Muslims; Lord Minto is called the "Father of Communal Electorate".',
        hi: 'भारत परिषद अधिनियम 1909 (मॉर्ले–मिंटो सुधार) ने मुसलमानों हेतु पृथक निर्वाचन शुरू किया; लॉर्ड मिंटो को "सांप्रदायिक निर्वाचन का जनक" कहा जाता है।',
      },
      topic: 'polity-historical',
      difficulty: 1,
    },
    {
      id: 'p1q5',
      type: 'mcq',
      question: {
        en: 'Dyarchy in the provinces was introduced by which Act?',
        hi: 'प्रांतों में द्वैध शासन किस अधिनियम द्वारा लागू किया गया?',
      },
      options: [
        { en: 'Government of India Act, 1919', hi: 'भारत सरकार अधिनियम, 1919' },
        { en: 'Government of India Act, 1935', hi: 'भारत सरकार अधिनियम, 1935' },
        { en: 'Indian Councils Act, 1909', hi: 'भारत परिषद अधिनियम, 1909' },
        { en: 'Government of India Act, 1858', hi: 'भारत सरकार अधिनियम, 1858' },
      ],
      answer: 0,
      explanation: {
        en: 'The GoI Act 1919 (Montagu–Chelmsford) introduced dyarchy in provinces. The 1935 Act abolished it in provinces and introduced it at the Centre.',
        hi: 'भारत सरकार अधिनियम 1919 (मोंटेग्यू–चेम्सफोर्ड) ने प्रांतों में द्वैध शासन लागू किया। 1935 के अधिनियम ने इसे प्रांतों से हटाकर केंद्र में लागू किया।',
      },
      topic: 'polity-historical',
      difficulty: 2,
    },
    {
      id: 'p1q6',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the Charter Act, 1833:\n1. It made the Governor-General of Bengal the Governor-General of India.\n2. It ended the commercial activities of the East India Company.\nWhich of the statements is/are correct?',
        hi: 'चार्टर एक्ट, 1833 के बारे में निम्न कथनों पर विचार करें:\n1. इसने बंगाल के गवर्नर-जनरल को भारत का गवर्नर-जनरल बनाया।\n2. इसने ईस्ट इंडिया कंपनी की व्यापारिक गतिविधियाँ समाप्त कर दीं।\nकौन-सा/से कथन सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The 1833 Act centralised administration under a Governor-General of India and made the Company a purely administrative body.',
        hi: 'दोनों सही हैं। 1833 के अधिनियम ने प्रशासन को भारत के गवर्नर-जनरल के अधीन केंद्रीकृत किया और कंपनी को केवल प्रशासनिक निकाय बना दिया।',
      },
      topic: 'polity-historical',
      difficulty: 2,
    },
    {
      id: 'p1q7',
      type: 'mcq',
      question: {
        en: 'Who was the first Indian to become a member of the Viceroy\'s Executive Council?',
        hi: 'वायसराय की कार्यकारी परिषद के सदस्य बनने वाले प्रथम भारतीय कौन थे?',
      },
      options: [
        { en: 'Rajendra Prasad', hi: 'राजेन्द्र प्रसाद' },
        { en: 'Satyendra Prasad Sinha', hi: 'सत्येंद्र प्रसाद सिन्हा' },
        { en: 'Surendranath Banerjee', hi: 'सुरेन्द्रनाथ बनर्जी' },
        { en: 'Dadabhai Naoroji', hi: 'दादाभाई नौरोजी' },
      ],
      answer: 1,
      explanation: {
        en: 'Under the 1909 reforms, Satyendra Prasad Sinha became the first Indian member of the Viceroy\'s Executive Council (as Law Member).',
        hi: '1909 के सुधारों के अंतर्गत सत्येंद्र प्रसाद सिन्हा वायसराय की कार्यकारी परिषद के प्रथम भारतीय सदस्य (विधि सदस्य) बने।',
      },
      topic: 'polity-historical',
      difficulty: 2,
    },
    {
      id: 'p1q8',
      type: 'mcq',
      question: {
        en: 'The Reserve Bank of India was established under the provisions of which Act?',
        hi: 'भारतीय रिज़र्व बैंक की स्थापना किस अधिनियम के प्रावधानों के अंतर्गत हुई?',
      },
      options: [
        { en: 'Government of India Act, 1919', hi: 'भारत सरकार अधिनियम, 1919' },
        { en: 'Government of India Act, 1935', hi: 'भारत सरकार अधिनियम, 1935' },
        { en: 'RBI Act, 1934', hi: 'RBI अधिनियम, 1934' },
        { en: 'Indian Independence Act, 1947', hi: 'भारतीय स्वतंत्रता अधिनियम, 1947' },
      ],
      answer: 2,
      explanation: {
        en: 'RBI was established on 1 April 1935 under the RBI Act, 1934. The GoI Act 1935 is associated with it in exams, but the establishing law is the RBI Act 1934 — a classic trap question.',
        hi: 'RBI की स्थापना 1 अप्रैल 1935 को RBI अधिनियम, 1934 के अंतर्गत हुई। परीक्षा में इसे 1935 के अधिनियम से जोड़ा जाता है, पर स्थापना का कानून RBI अधिनियम 1934 है — यह एक क्लासिक ट्रैप प्रश्न है।',
      },
      topic: 'polity-historical',
      difficulty: 3,
    },
    {
      id: 'p1q9',
      type: 'mcq',
      question: {
        en: 'Which Act first introduced open competition for the civil services?',
        hi: 'सिविल सेवाओं के लिए खुली प्रतियोगिता सबसे पहले किस अधिनियम ने शुरू की?',
      },
      options: [
        { en: 'Charter Act, 1833', hi: 'चार्टर एक्ट, 1833' },
        { en: 'Charter Act, 1853', hi: 'चार्टर एक्ट, 1853' },
        { en: 'Indian Councils Act, 1861', hi: 'भारत परिषद अधिनियम, 1861' },
        { en: 'Government of India Act, 1919', hi: 'भारत सरकार अधिनियम, 1919' },
      ],
      answer: 1,
      explanation: {
        en: 'The Charter Act 1853 introduced open competition for civil services; the Macaulay Committee (1854) worked out the details.',
        hi: 'चार्टर एक्ट 1853 ने सिविल सेवा हेतु खुली प्रतियोगिता शुरू की; मैकाले समिति (1854) ने इसका विवरण तय किया।',
      },
      topic: 'polity-historical',
      difficulty: 2,
    },
    {
      id: 'p1q10',
      type: 'mcq',
      question: {
        en: 'The office of Secretary of State for India was created by:',
        hi: 'भारत सचिव (Secretary of State for India) का पद किसके द्वारा बनाया गया:',
      },
      options: [
        { en: 'Charter Act, 1853', hi: 'चार्टर एक्ट, 1853' },
        { en: 'Government of India Act, 1858', hi: 'भारत सरकार अधिनियम, 1858' },
        { en: 'Indian Councils Act, 1861', hi: 'भारत परिषद अधिनियम, 1861' },
        { en: 'Government of India Act, 1919', hi: 'भारत सरकार अधिनियम, 1919' },
      ],
      answer: 1,
      explanation: {
        en: 'The GoI Act 1858 transferred power to the Crown and created the Secretary of State for India, assisted by a 15-member Council of India.',
        hi: 'भारत सरकार अधिनियम 1858 ने सत्ता क्राउन को सौंपी और भारत सचिव का पद बनाया, जिसकी सहायता हेतु 15 सदस्यीय भारत परिषद थी।',
      },
      topic: 'polity-historical',
      difficulty: 1,
    },
  ],
};
