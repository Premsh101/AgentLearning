import type { Chapter } from '../types';

export const polityCh09: Chapter = {
  id: 'polity-ch09',
  subjectId: 'polity',
  order: 9,
  title: {
    en: 'Panchayati Raj (with Bihar focus)',
    hi: 'पंचायती राज (बिहार केंद्रित)',
  },
  intro: {
    en: 'Panchayati Raj means **local self-government in rural areas** — village people running their own village. The **73rd Constitutional Amendment Act, 1992** turned this idea into a constitutional guarantee. For BPSC this chapter is a **big Bihar differentiator**: Bihar was the **first state in India to give 50% reservation to women** in Panchayats. Learn the three tiers, the 73rd Amendment details, and the Bihar fact, and you can score full marks here.',
    hi: 'पंचायती राज का अर्थ है **ग्रामीण क्षेत्रों में स्थानीय स्वशासन** — गाँव के लोग स्वयं अपने गाँव का प्रबंधन करें। **73वें संविधान संशोधन अधिनियम, 1992** ने इस विचार को संवैधानिक गारंटी बना दिया। BPSC के लिए यह अध्याय एक **बड़ा बिहार विभेदक** है: बिहार **पंचायतों में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य** था। तीन स्तर, 73वें संशोधन का विवरण और बिहार तथ्य सीख लें, तो यहाँ पूरे अंक पा सकते हैं।',
  },
  sections: [
    {
      id: 'meaning-73rd',
      heading: { en: 'What is Panchayati Raj & the 73rd Amendment', hi: 'पंचायती राज क्या है व 73वाँ संशोधन' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Panchayati Raj is a system of **local self-government in rural areas**, so that decisions about a village are taken by the villagers themselves. Before 1992 panchayats existed only because state laws allowed them — they had no protection in the Constitution.',
            hi: 'पंचायती राज **ग्रामीण क्षेत्रों में स्थानीय स्वशासन** की व्यवस्था है, ताकि गाँव से जुड़े निर्णय स्वयं ग्रामीण लें। 1992 से पहले पंचायतें केवल राज्य के कानूनों के कारण थीं — उन्हें संविधान में कोई संरक्षण नहीं था।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The **73rd Constitutional Amendment Act, 1992** gave **constitutional status** to Panchayati Raj Institutions (PRIs). It added **Part IX (Articles 243 to 243-O)** and the **11th Schedule**, which lists **29 subjects/functions** that can be handed over to panchayats.',
            hi: '**73वें संविधान संशोधन अधिनियम, 1992** ने पंचायती राज संस्थाओं (PRIs) को **संवैधानिक दर्जा** दिया। इसने **भाग IX (अनुच्छेद 243 से 243-O)** और **11वीं अनुसूची** जोड़ी, जिसमें **29 विषय/कार्य** सूचीबद्ध हैं जो पंचायतों को सौंपे जा सकते हैं।',
          },
        },
        {
          type: 'note',
          kind: 'trap',
          title: { en: 'Rural vs Urban — do not mix up', hi: 'ग्रामीण बनाम शहरी — गड्डमड्ड न करें' },
          text: {
            en: 'A very common trap: the **73rd Amendment = rural (Panchayats)** and the **74th Amendment = urban (Municipalities)**. The 74th added Part IXA and the 12th Schedule (18 subjects). If a question says "Panchayats", the answer is **73rd**.',
            hi: 'एक बहुत आम जाल: **73वाँ संशोधन = ग्रामीण (पंचायतें)** और **74वाँ संशोधन = शहरी (नगरपालिकाएँ)**। 74वें ने भाग IXA और 12वीं अनुसूची (18 विषय) जोड़ी। यदि प्रश्न में "पंचायत" हो, तो उत्तर **73वाँ** है।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember **"73 = 7 letters in RURAL... almost!"** Simpler: **odd-first-73 for the village (gaon), 74 for the town**. 73 → Panchayat, 74 → Nagarpalika.',
            hi: 'याद रखें: **73 गाँव के लिए, 74 शहर के लिए**। 73 → पंचायत, 74 → नगरपालिका। छोटा नंबर = छोटी इकाई (गाँव)।',
          },
        },
      ],
    },
    {
      id: 'three-tier',
      heading: { en: 'The Three-Tier Structure & Gram Sabha', hi: 'त्रि-स्तरीय संरचना व ग्राम सभा' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The 73rd Amendment created a uniform **three-tier system** across the country. The **intermediate tier (block level) is optional** for states with a population **below 20 lakh**.',
            hi: '73वें संशोधन ने पूरे देश में एक समान **त्रि-स्तरीय व्यवस्था** बनाई। **20 लाख से कम** जनसंख्या वाले राज्यों के लिए **मध्यवर्ती स्तर (प्रखंड स्तर) वैकल्पिक** है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The three tiers of Panchayati Raj', hi: 'पंचायती राज के तीन स्तर' },
          headers: [
            { en: 'Tier', hi: 'स्तर' },
            { en: 'Body', hi: 'संस्था' },
            { en: 'Level', hi: 'स्तर' },
          ],
          rows: [
            [{ en: 'Lowest', hi: 'निम्नतम' }, { en: '**Gram Panchayat**', hi: '**ग्राम पंचायत**' }, { en: 'Village level', hi: 'ग्राम स्तर' }],
            [{ en: 'Middle', hi: 'मध्य' }, { en: '**Panchayat Samiti**', hi: '**पंचायत समिति**' }, { en: 'Intermediate / Block level (optional if population below 20 lakh)', hi: 'मध्यवर्ती / प्रखंड स्तर (20 लाख से कम जनसंख्या पर वैकल्पिक)' }],
            [{ en: 'Highest', hi: 'उच्चतम' }, { en: '**Zila Parishad**', hi: '**जिला परिषद**' }, { en: 'District level', hi: 'जिला स्तर' }],
          ],
        },
        {
          type: 'note',
          kind: 'why',
          title: { en: 'Gram Sabha — the foundation', hi: 'ग्राम सभा — आधारशिला' },
          text: {
            en: 'The **Gram Sabha** is the body of **all registered voters** of a village. It is the **foundation of the whole system** — it is the only permanent, directly democratic body where every adult villager is a member. The Gram Panchayat is elected, but the Gram Sabha is everyone.',
            hi: '**ग्राम सभा** किसी गाँव के **सभी पंजीकृत मतदाताओं** का निकाय है। यह **पूरी व्यवस्था की आधारशिला** है — यह एकमात्र स्थायी, प्रत्यक्ष लोकतांत्रिक निकाय है जिसमें हर वयस्क ग्रामवासी सदस्य होता है। ग्राम पंचायत निर्वाचित होती है, पर ग्राम सभा में सभी होते हैं।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Elections to PRIs are conducted by the **State Election Commission (SEC)** — **not** the Election Commission of India. The **term of every panchayat is 5 years**, and fresh elections must be held before the term ends (or within 6 months if it is dissolved early).',
            hi: 'पंचायती राज संस्थाओं के चुनाव **राज्य निर्वाचन आयोग (SEC)** कराता है — भारत निर्वाचन आयोग **नहीं**। **प्रत्येक पंचायत का कार्यकाल 5 वर्ष** है, और कार्यकाल समाप्त होने से पहले नए चुनाव अनिवार्य हैं (या समय से पहले भंग होने पर 6 माह के भीतर)।',
          },
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Trap alert: PRI elections are held by the **State Election Commission**, appointed by the Governor — **not** by the Election Commission of India. Confusing the two is a favourite BPSC trick.',
            hi: 'जाल चेतावनी: पंचायत चुनाव **राज्य निर्वाचन आयोग** कराता है, जिसकी नियुक्ति राज्यपाल करते हैं — भारत निर्वाचन आयोग **नहीं**। दोनों को मिलाना BPSC की पसंदीदा चाल है।',
          },
        },
      ],
    },
    {
      id: 'reservation-committees',
      heading: { en: 'Reservation & the Key Committees', hi: 'आरक्षण व प्रमुख समितियाँ' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: 'Seats are reserved for **SCs and STs in proportion to their population** in that panchayat area.',
              hi: '**अनुसूचित जातियों व अनुसूचित जनजातियों** के लिए उस पंचायत क्षेत्र की **जनसंख्या के अनुपात में** सीटें आरक्षित हैं।',
            },
            {
              en: 'Originally, **not less than one-third (1/3)** of all seats (and of chairperson posts) were reserved for **women**.',
              hi: 'मूल रूप से सभी सीटों (व अध्यक्ष पदों) में से **कम से कम एक-तिहाई (1/3)** **महिलाओं** के लिए आरक्षित थीं।',
            },
          ],
        },
        {
          type: 'timeline',
          caption: { en: 'How Panchayati Raj developed', hi: 'पंचायती राज का विकास' },
          events: [
            { when: { en: '1957', hi: '1957' }, label: { en: '**Balwant Rai Mehta Committee** recommended a **three-tier** system.', hi: '**बलवंत राय मेहता समिति** ने **त्रि-स्तरीय** व्यवस्था की सिफ़ारिश की।' } },
            { when: { en: '2 Oct 1959', hi: '2 अक्टूबर 1959' }, label: { en: '**Rajasthan (Nagaur district)** became the **first state** to inaugurate Panchayati Raj; **Andhra Pradesh** followed.', hi: '**राजस्थान (नागौर जिला)** पंचायती राज शुरू करने वाला **पहला राज्य** बना; इसके बाद **आंध्र प्रदेश**।' } },
            { when: { en: '1977', hi: '1977' }, label: { en: '**Ashok Mehta Committee** recommended a **two-tier** system.', hi: '**अशोक मेहता समिति** ने **द्वि-स्तरीय** व्यवस्था की सिफ़ारिश की।' } },
            { when: { en: '1992', hi: '1992' }, label: { en: '**73rd Amendment** gave constitutional status to PRIs (Part IX, 11th Schedule).', hi: '**73वें संशोधन** ने पंचायती राज संस्थाओं को संवैधानिक दर्जा दिया (भाग IX, 11वीं अनुसूची)।' } },
            { when: { en: '2006', hi: '2006' }, label: { en: '**Bihar** became the **first state** to give **50% reservation to women** in PRIs.', hi: '**बिहार** पंचायती राज संस्थाओं में **महिलाओं को 50% आरक्षण** देने वाला **पहला राज्य** बना।' } },
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Mnemonic for the committees: **"B for three, A for two"** — **B**alwant Rai Mehta = **three**-tier; **A**shok Mehta = **two**-tier. And the **first state** is **Rajasthan** (2 October 1959, Nagaur).',
            hi: 'समितियों के लिए ट्रिक: **"B तीन के लिए, A दो के लिए"** — **B**लवंत राय मेहता = **तीन** स्तर; **A**शोक मेहता = **दो** स्तर। और **पहला राज्य** = **राजस्थान** (2 अक्टूबर 1959, नागौर)।',
          },
        },
      ],
    },
    {
      id: 'bihar-focus',
      heading: { en: 'Bihar Focus — 50% Reservation for Women', hi: 'बिहार केंद्रित — महिलाओं को 50% आरक्षण' },
      blocks: [
        {
          type: 'note',
          kind: 'story',
          title: { en: 'Bihar leads the nation', hi: 'बिहार ने देश का नेतृत्व किया' },
          text: {
            en: 'In **2006, Bihar became the FIRST state in India to provide 50% reservation for women** in Panchayati Raj Institutions — going well beyond the one-third minimum set by the 73rd Amendment. This bold step brought a large number of women into rural leadership, and many other states later followed Bihar. **This is the single most important Bihar fact in this chapter for BPSC.**',
            hi: '**2006 में, बिहार पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य बना** — 73वें संशोधन द्वारा तय एक-तिहाई न्यूनतम से कहीं आगे। इस साहसिक कदम ने बड़ी संख्या में महिलाओं को ग्रामीण नेतृत्व में लाया, और बाद में कई अन्य राज्यों ने बिहार का अनुसरण किया। **BPSC के लिए इस अध्याय का यह सबसे महत्वपूर्ण बिहार तथ्य है।**',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Because of this, in Bihar **half of all seats and chairperson posts** in Gram Panchayats, Panchayat Samitis and Zila Parishads are reserved for women. If a BPSC question asks which state was first to give women 50% reservation in panchayats, the answer is always **Bihar**.',
            hi: 'इसी कारण बिहार में ग्राम पंचायतों, पंचायत समितियों व जिला परिषदों की **सभी सीटों व अध्यक्ष पदों में से आधी** महिलाओं के लिए आरक्षित हैं। यदि BPSC प्रश्न पूछे कि पंचायतों में महिलाओं को 50% आरक्षण देने वाला पहला राज्य कौन-सा था, तो उत्तर सदैव **बिहार** है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Panchayati Raj = **local self-government in rural areas**. The **73rd Amendment, 1992** gave it constitutional status via **Part IX (Articles 243–243-O)** and the **11th Schedule (29 subjects)**.',
      hi: 'पंचायती राज = **ग्रामीण क्षेत्रों में स्थानीय स्वशासन**। **73वें संशोधन, 1992** ने इसे **भाग IX (अनुच्छेद 243–243-O)** व **11वीं अनुसूची (29 विषय)** द्वारा संवैधानिक दर्जा दिया।',
    },
    {
      en: 'Three tiers: **Gram Panchayat** (village), **Panchayat Samiti** (block), **Zila Parishad** (district). Middle tier is **optional if population is below 20 lakh**.',
      hi: 'तीन स्तर: **ग्राम पंचायत** (गाँव), **पंचायत समिति** (प्रखंड), **जिला परिषद** (जिला)। **20 लाख से कम जनसंख्या पर मध्य स्तर वैकल्पिक**।',
    },
    {
      en: '**Gram Sabha** = all registered voters of a village — the **foundation** of the system.',
      hi: '**ग्राम सभा** = गाँव के सभी पंजीकृत मतदाता — व्यवस्था की **आधारशिला**।',
    },
    {
      en: 'PRI elections are held by the **State Election Commission** (not ECI); **term = 5 years**.',
      hi: 'पंचायत चुनाव **राज्य निर्वाचन आयोग** कराता है (भारत निर्वाचन आयोग नहीं); **कार्यकाल = 5 वर्ष**।',
    },
    {
      en: 'Committees: **Balwant Rai Mehta (1957) → three-tier**; **Ashok Mehta (1977) → two-tier**. **Rajasthan (Nagaur, 2 Oct 1959)** was the **first state**, followed by Andhra Pradesh.',
      hi: 'समितियाँ: **बलवंत राय मेहता (1957) → त्रि-स्तरीय**; **अशोक मेहता (1977) → द्वि-स्तरीय**। **राजस्थान (नागौर, 2 अक्टूबर 1959)** **पहला राज्य**, फिर आंध्र प्रदेश।',
    },
    {
      en: 'Reservation: SC/ST in proportion to population; women originally **not less than one-third (1/3)**.',
      hi: 'आरक्षण: SC/ST जनसंख्या के अनुपात में; महिलाएँ मूल रूप से **कम से कम एक-तिहाई (1/3)**।',
    },
    {
      en: '**BIHAR: first state in India (2006) to give 50% reservation to women in Panchayats** — the key Bihar fact for BPSC.',
      hi: '**बिहार: पंचायतों में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य (2006)** — BPSC हेतु मुख्य बिहार तथ्य।',
    },
    {
      en: '**73rd = rural (Panchayats)**, **74th = urban (Municipalities)** — never mix them up.',
      hi: '**73वाँ = ग्रामीण (पंचायतें)**, **74वाँ = शहरी (नगरपालिकाएँ)** — इन्हें कभी न मिलाएँ।',
    },
  ],
  quiz: [
    {
      id: 'p9q1',
      type: 'mcq',
      question: {
        en: 'Which Constitutional Amendment gave constitutional status to Panchayati Raj Institutions?',
        hi: 'किस संविधान संशोधन ने पंचायती राज संस्थाओं को संवैधानिक दर्जा दिया?',
      },
      options: [
        { en: '72nd Amendment, 1992', hi: '72वाँ संशोधन, 1992' },
        { en: '73rd Amendment, 1992', hi: '73वाँ संशोधन, 1992' },
        { en: '74th Amendment, 1992', hi: '74वाँ संशोधन, 1992' },
        { en: '44th Amendment, 1978', hi: '44वाँ संशोधन, 1978' },
      ],
      answer: 1,
      explanation: {
        en: 'The 73rd Amendment (1992) gave constitutional status to PRIs and added Part IX and the 11th Schedule. The 74th Amendment deals with urban local bodies.',
        hi: '73वें संशोधन (1992) ने पंचायती राज संस्थाओं को संवैधानिक दर्जा दिया और भाग IX व 11वीं अनुसूची जोड़ी। 74वाँ संशोधन शहरी स्थानीय निकायों से संबंधित है।',
      },
      topic: 'polity-panchayat',
      difficulty: 1,
    },
    {
      id: 'p9q2',
      type: 'mcq',
      question: {
        en: 'Which state was the first in India to provide 50% reservation for women in Panchayati Raj Institutions?',
        hi: 'पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य कौन-सा था?',
      },
      options: [
        { en: 'Rajasthan', hi: 'राजस्थान' },
        { en: 'Bihar', hi: 'बिहार' },
        { en: 'Andhra Pradesh', hi: 'आंध्र प्रदेश' },
        { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश' },
      ],
      answer: 1,
      explanation: {
        en: 'In 2006 Bihar became the first state in India to give 50% reservation to women in PRIs, going beyond the one-third minimum set by the 73rd Amendment.',
        hi: '2006 में बिहार पंचायती राज संस्थाओं में महिलाओं को 50% आरक्षण देने वाला भारत का पहला राज्य बना, जो 73वें संशोधन के एक-तिहाई न्यूनतम से आगे था।',
      },
      topic: 'polity-panchayat',
      difficulty: 1,
    },
    {
      id: 'p9q3',
      type: 'mcq',
      question: {
        en: 'The 73rd Amendment added which new Part and Schedule to the Constitution?',
        hi: '73वें संशोधन ने संविधान में कौन-सा नया भाग व अनुसूची जोड़ी?',
      },
      options: [
        { en: 'Part IXA and the 12th Schedule', hi: 'भाग IXA व 12वीं अनुसूची' },
        { en: 'Part IX and the 11th Schedule', hi: 'भाग IX व 11वीं अनुसूची' },
        { en: 'Part VIII and the 10th Schedule', hi: 'भाग VIII व 10वीं अनुसूची' },
        { en: 'Part IV and the 9th Schedule', hi: 'भाग IV व 9वीं अनुसूची' },
      ],
      answer: 1,
      explanation: {
        en: 'The 73rd Amendment added Part IX (Articles 243 to 243-O) and the 11th Schedule, which lists 29 subjects. Part IXA and the 12th Schedule belong to the 74th Amendment (urban).',
        hi: '73वें संशोधन ने भाग IX (अनुच्छेद 243 से 243-O) व 11वीं अनुसूची जोड़ी, जिसमें 29 विषय हैं। भाग IXA व 12वीं अनुसूची 74वें संशोधन (शहरी) से संबंधित हैं।',
      },
      topic: 'polity-panchayat',
      difficulty: 2,
    },
    {
      id: 'p9q4',
      type: 'mcq',
      question: {
        en: 'Elections to Panchayati Raj Institutions are conducted by:',
        hi: 'पंचायती राज संस्थाओं के चुनाव किसके द्वारा कराए जाते हैं?',
      },
      options: [
        { en: 'The Election Commission of India', hi: 'भारत निर्वाचन आयोग' },
        { en: 'The State Election Commission', hi: 'राज्य निर्वाचन आयोग' },
        { en: 'The District Collector', hi: 'जिला कलेक्टर' },
        { en: 'The Gram Sabha', hi: 'ग्राम सभा' },
      ],
      answer: 1,
      explanation: {
        en: 'PRI elections are conducted by the State Election Commission, not the Election Commission of India. This is a common exam trap.',
        hi: 'पंचायत चुनाव राज्य निर्वाचन आयोग कराता है, भारत निर्वाचन आयोग नहीं। यह एक आम परीक्षा जाल है।',
      },
      topic: 'polity-panchayat',
      difficulty: 2,
    },
    {
      id: 'p9q5',
      type: 'mcq',
      question: {
        en: 'Which committee (1957) recommended the three-tier Panchayati Raj system?',
        hi: 'किस समिति (1957) ने त्रि-स्तरीय पंचायती राज व्यवस्था की सिफ़ारिश की?',
      },
      options: [
        { en: 'Ashok Mehta Committee', hi: 'अशोक मेहता समिति' },
        { en: 'Balwant Rai Mehta Committee', hi: 'बलवंत राय मेहता समिति' },
        { en: 'Sarkaria Commission', hi: 'सरकारिया आयोग' },
        { en: 'L. M. Singhvi Committee', hi: 'एल. एम. सिंघवी समिति' },
      ],
      answer: 1,
      explanation: {
        en: 'The Balwant Rai Mehta Committee (1957) recommended a three-tier structure. The Ashok Mehta Committee (1977) later recommended a two-tier structure.',
        hi: 'बलवंत राय मेहता समिति (1957) ने त्रि-स्तरीय संरचना की सिफ़ारिश की। बाद में अशोक मेहता समिति (1977) ने द्वि-स्तरीय संरचना की सिफ़ारिश की।',
      },
      topic: 'polity-panchayat',
      difficulty: 2,
    },
    {
      id: 'p9q6',
      type: 'mcq',
      question: {
        en: 'Which state was the first in India to inaugurate the Panchayati Raj system (on 2 October 1959)?',
        hi: 'भारत में पंचायती राज व्यवस्था का शुभारंभ करने वाला पहला राज्य कौन-सा था (2 अक्टूबर 1959 को)?',
      },
      options: [
        { en: 'Bihar', hi: 'बिहार' },
        { en: 'Andhra Pradesh', hi: 'आंध्र प्रदेश' },
        { en: 'Rajasthan', hi: 'राजस्थान' },
        { en: 'Gujarat', hi: 'गुजरात' },
      ],
      answer: 2,
      explanation: {
        en: 'Rajasthan (Nagaur district) inaugurated Panchayati Raj on 2 October 1959, becoming the first state; Andhra Pradesh followed.',
        hi: 'राजस्थान (नागौर जिला) ने 2 अक्टूबर 1959 को पंचायती राज का शुभारंभ किया और पहला राज्य बना; इसके बाद आंध्र प्रदेश।',
      },
      topic: 'polity-panchayat',
      difficulty: 2,
    },
    {
      id: 'p9q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. The 73rd Amendment deals with rural local bodies (Panchayats), while the 74th deals with urban local bodies (Municipalities).\n2. The term of every panchayat is five years.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. 73वाँ संशोधन ग्रामीण स्थानीय निकायों (पंचायतों) से संबंधित है, जबकि 74वाँ शहरी स्थानीय निकायों (नगरपालिकाओं) से।\n2. प्रत्येक पंचायत का कार्यकाल पाँच वर्ष है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The 73rd Amendment covers Panchayats (rural) and the 74th covers Municipalities (urban); the term of every panchayat is fixed at five years.',
        hi: 'दोनों सही हैं। 73वाँ संशोधन पंचायतों (ग्रामीण) और 74वाँ नगरपालिकाओं (शहरी) को कवर करता है; प्रत्येक पंचायत का कार्यकाल पाँच वर्ष निश्चित है।',
      },
      topic: 'polity-panchayat',
      difficulty: 2,
    },
    {
      id: 'p9q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the three-tier structure:\n1. The intermediate (block) level is optional for states with a population below 20 lakh.\n2. The Gram Sabha is made up of all registered voters of a village.\nWhich is/are correct?',
        hi: 'त्रि-स्तरीय संरचना के बारे में निम्न कथनों पर विचार करें:\n1. 20 लाख से कम जनसंख्या वाले राज्यों के लिए मध्यवर्ती (प्रखंड) स्तर वैकल्पिक है।\n2. ग्राम सभा गाँव के सभी पंजीकृत मतदाताओं से बनी होती है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The intermediate tier (Panchayat Samiti) is optional for states with population below 20 lakh, and the Gram Sabha consists of all registered voters of a village — the foundation of the system.',
        hi: 'दोनों सही हैं। मध्यवर्ती स्तर (पंचायत समिति) 20 लाख से कम जनसंख्या वाले राज्यों के लिए वैकल्पिक है, और ग्राम सभा गाँव के सभी पंजीकृत मतदाताओं से बनी होती है — व्यवस्था की आधारशिला।',
      },
      topic: 'polity-panchayat',
      difficulty: 3,
    },
  ],
};
