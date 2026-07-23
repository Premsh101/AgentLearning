import type { Chapter } from '../types';

export const historyCh01: Chapter = {
  id: 'history-ch01',
  subjectId: 'history',
  order: 1,
  title: {
    en: 'Ancient Bihar: Magadha to the Guptas',
    hi: 'प्राचीन बिहार: मगध से गुप्त तक',
  },
  intro: {
    en: 'For more than a thousand years, the land that is now Bihar was the political and intellectual centre of India. The first great empires, the first universities, and two world religions all began here. Because BPSC is a Bihar exam, this is not just "history" — it is your home ground, and questions from it are almost guaranteed.',
    hi: 'एक हज़ार वर्षों से अधिक समय तक, जो भूमि आज बिहार है, वह भारत का राजनीतिक व बौद्धिक केंद्र रही। प्रथम महान साम्राज्य, प्रथम विश्वविद्यालय, और दो विश्व-धर्म — सब यहीं आरंभ हुए। चूँकि BPSC बिहार की परीक्षा है, यह केवल "इतिहास" नहीं — यह आपकी अपनी भूमि है, और इससे प्रश्न लगभग निश्चित हैं।',
  },
  sections: [
    {
      id: 'why-magadha',
      heading: { en: 'Why Magadha Rose to Power', hi: 'मगध क्यों शक्तिशाली बना' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Magadha (roughly today\'s Patna and Gaya region) was one of the sixteen **Mahajanapadas** (great states) of ancient India. It defeated all its rivals and became the seat of India\'s first empires. Its first capital was **Rajgriha (Rajgir)**, later shifted to **Pataliputra (Patna)**.',
            hi: 'मगध (लगभग आज का पटना व गया क्षेत्र) प्राचीन भारत के सोलह **महाजनपदों** में से एक था। इसने अपने सभी प्रतिद्वंद्वियों को हराकर भारत के प्रथम साम्राज्यों की राजधानी बनने का गौरव पाया। इसकी प्रथम राजधानी **राजगृह (राजगीर)** थी, जो बाद में **पाटलिपुत्र (पटना)** स्थानांतरित हुई।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Magadha won because of geography and resources: **fertile Gangetic plains** (food & taxes), **iron ore** nearby (better weapons), the **Ganga** for trade and defence, and **elephants** from the forests for its army. Ambitious kings like Bimbisara and Ajatashatru then did the rest.',
            hi: 'मगध की विजय का कारण भूगोल व संसाधन थे: **उपजाऊ गंगा मैदान** (अन्न व कर), निकट **लौह अयस्क** (उत्तम शस्त्र), व्यापार व रक्षा हेतु **गंगा**, और सेना के लिए वनों से **हाथी**। बिंबिसार व अजातशत्रु जैसे महत्वाकांक्षी राजाओं ने शेष कार्य पूरा किया।',
          },
        },
        {
          type: 'figure',
          figureId: 'ancient-centres',
          caption: {
            en: 'The heritage centres of ancient Bihar — capitals, republics and universities, all along the Ganga.',
            hi: 'प्राचीन बिहार के धरोहर केंद्र — राजधानियाँ, गणराज्य व विश्वविद्यालय, सभी गंगा के किनारे।',
          },
        },
      ],
    },
    {
      id: 'dynasties',
      heading: { en: 'The Dynasties of Magadha', hi: 'मगध के राजवंश' },
      blocks: [
        {
          type: 'timeline',
          caption: { en: 'From Bimbisara to the Guptas (an easy sequence to remember)', hi: 'बिंबिसार से गुप्त तक (याद रखने योग्य सरल क्रम)' },
          events: [
            {
              when: { en: 'Haryanka Dynasty', hi: 'हर्यंक वंश' },
              label: {
                en: '**Bimbisara** (contemporary of Buddha & Mahavira) and his son **Ajatashatru** expanded Magadha. **Udayin** founded the city of **Pataliputra**.',
                hi: '**बिंबिसार** (बुद्ध व महावीर के समकालीन) व उनके पुत्र **अजातशत्रु** ने मगध का विस्तार किया। **उदयिन** ने **पाटलिपुत्र** नगर बसाया।',
              },
            },
            {
              when: { en: 'Shishunaga Dynasty', hi: 'शिशुनाग वंश' },
              label: {
                en: 'Destroyed the power of **Avanti** and briefly shifted the capital to Vaishali.',
                hi: '**अवंति** की शक्ति नष्ट की और कुछ समय हेतु राजधानी वैशाली स्थानांतरित की।',
              },
            },
            {
              when: { en: 'Nanda Dynasty', hi: 'नंद वंश' },
              label: {
                en: '**Mahapadma Nanda** built a huge army; **Dhana Nanda** was ruling when **Alexander** invaded India (326 BCE).',
                hi: '**महापद्म नंद** ने विशाल सेना खड़ी की; **धनानंद** के शासन में **सिकंदर** ने भारत पर आक्रमण किया (326 ईसा पूर्व)।',
              },
            },
            {
              when: { en: 'Maurya Dynasty (322 BCE)', hi: 'मौर्य वंश (322 ईसा पूर्व)' },
              label: {
                en: '**Chandragupta Maurya**, guided by **Chanakya (Kautilya)**, overthrew the Nandas and built India\'s first great empire; **Ashoka** was its greatest king.',
                hi: '**चंद्रगुप्त मौर्य** ने **चाणक्य (कौटिल्य)** के मार्गदर्शन में नंदों को हराकर भारत का प्रथम महान साम्राज्य बनाया; **अशोक** इसका महानतम राजा था।',
              },
            },
            {
              when: { en: 'Gupta Dynasty (~320 CE)', hi: 'गुप्त वंश (~320 ईस्वी)' },
              label: {
                en: 'The **"Golden Age of India"** — Samudragupta and Chandragupta II (Vikramaditya); flowering of art, science and Nalanda.',
                hi: '**"भारत का स्वर्ण युग"** — समुद्रगुप्त व चंद्रगुप्त द्वितीय (विक्रमादित्य); कला, विज्ञान व नालंदा का विकास।',
              },
            },
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember the dynasty order with **"Ha-Shi-Na-Ma-Gupta"**: **Ha**ryanka → **Shi**shunaga → **Na**nda → **Ma**urya → **Gupta**. Say it a few times aloud and the whole timeline locks in.',
            hi: 'राजवंश क्रम **"ह-शि-नं-मौ-गुप्त"** से याद रखें: **ह**र्यंक → **शि**शुनाग → **नं**द → **मौ**र्य → **गुप्त**। इसे कुछ बार बोलकर दोहराएँ, पूरी समयरेखा याद हो जाएगी।',
          },
        },
      ],
    },
    {
      id: 'maurya-gupta',
      heading: { en: 'The Mauryas and the Guptas', hi: 'मौर्य व गुप्त' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'The two great empires, side by side', hi: 'दोनों महान साम्राज्य, आमने-सामने' },
          headers: [
            { en: 'Point', hi: 'बिंदु' },
            { en: 'Maurya Empire', hi: 'मौर्य साम्राज्य' },
            { en: 'Gupta Empire', hi: 'गुप्त साम्राज्य' },
          ],
          rows: [
            [
              { en: 'Founder', hi: 'संस्थापक' },
              { en: 'Chandragupta Maurya (with Chanakya)', hi: 'चंद्रगुप्त मौर्य (चाणक्य के साथ)' },
              { en: 'Sri Gupta; rise under Chandragupta I', hi: 'श्रीगुप्त; उदय चंद्रगुप्त प्रथम के अधीन' },
            ],
            [
              { en: 'Greatest ruler', hi: 'महानतम शासक' },
              { en: 'Ashoka (Kalinga War, 261 BCE → embraced Buddhism)', hi: 'अशोक (कलिंग युद्ध, 261 ईसा पूर्व → बौद्ध धर्म अपनाया)' },
              { en: 'Samudragupta ("Napoleon of India") & Chandragupta II (Vikramaditya)', hi: 'समुद्रगुप्त ("भारत का नेपोलियन") व चंद्रगुप्त द्वितीय (विक्रमादित्य)' },
            ],
            [
              { en: 'Foreign visitor', hi: 'विदेशी यात्री' },
              { en: 'Megasthenes (Greek) — wrote *Indica*', hi: 'मेगस्थनीज़ (यूनानी) — *इंडिका* लिखी' },
              { en: 'Fa-Hien (Chinese) — during Chandragupta II', hi: 'फाह्यान (चीनी) — चंद्रगुप्त द्वितीय के काल में' },
            ],
            [
              { en: 'Capital', hi: 'राजधानी' },
              { en: 'Pataliputra', hi: 'पाटलिपुत्र' },
              { en: 'Pataliputra', hi: 'पाटलिपुत्र' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Do not mix them up: **Megasthenes** = **Mauryas** (both start with M); **Fa-Hien** = the **Guptas**. And **Chandragupta *Maurya*** (founder of the Maurya empire) is a different person from **Chandragupta *II*** of the Guptas.',
            hi: 'इन्हें न मिलाएँ: **मेगस्थनीज़** = **मौर्य** (दोनों "म" से); **फाह्यान** = **गुप्त**। तथा **चंद्रगुप्त *मौर्य*** (मौर्य साम्राज्य का संस्थापक) व गुप्तों का **चंद्रगुप्त *द्वितीय*** भिन्न व्यक्ति हैं।',
          },
        },
      ],
    },
    {
      id: 'learning-centres',
      heading: { en: 'Religions & the Great Universities', hi: 'धर्म व महान विश्वविद्यालय' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Bodh Gaya** — the Buddha attained **enlightenment** here under the Bodhi tree. **Vaishali** was where he preached and where the second Buddhist council was held; it was also the capital of the **Licchavis**, one of the world\'s earliest **republics**.',
              hi: '**बोधगया** — यहीं बुद्ध ने बोधि वृक्ष के नीचे **ज्ञान प्राप्त** किया। **वैशाली** में उन्होंने उपदेश दिए और द्वितीय बौद्ध संगीति हुई; यह **लिच्छवि** की राजधानी भी थी, जो विश्व के आरंभिक **गणराज्यों** में से एक था।',
            },
            {
              en: '**Nalanda University** — a great Buddhist centre of learning, patronised by the Guptas and later kings; the Chinese pilgrim **Hiuen Tsang** studied here. It was destroyed by **Bakhtiyar Khalji** (c. 1193).',
              hi: '**नालंदा विश्वविद्यालय** — बौद्ध शिक्षा का महान केंद्र, गुप्तों व बाद के राजाओं द्वारा संरक्षित; चीनी यात्री **ह्वेनसांग** ने यहाँ अध्ययन किया। इसे **बख्तियार खिलजी** (लगभग 1193) ने नष्ट किया।',
            },
            {
              en: '**Vikramshila University** — founded by the **Pala** king **Dharmapala**, famous for Tantric Buddhism.',
              hi: '**विक्रमशिला विश्वविद्यालय** — **पाल** राजा **धर्मपाल** द्वारा स्थापित, तांत्रिक बौद्ध धर्म हेतु प्रसिद्ध।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Jainism\'s 24th and last Tirthankara, **Mahavira**, was born near **Vaishali** (at Kundagrama). So Bihar is the birthplace of one religion (Jainism\'s final Tirthankara) and the enlightenment place of another (Buddhism).',
            hi: 'जैन धर्म के 24वें व अंतिम तीर्थंकर **महावीर** का जन्म **वैशाली** के निकट (कुंडग्राम में) हुआ। अतः बिहार एक धर्म का जन्मस्थान (जैन धर्म के अंतिम तीर्थंकर) और दूसरे का ज्ञानस्थान (बौद्ध धर्म) है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Magadha was a Mahajanapada; first capital **Rajgriha**, later **Pataliputra**. It rose due to fertile land, iron, the Ganga and elephants.',
      hi: 'मगध एक महाजनपद था; प्रथम राजधानी **राजगृह**, बाद में **पाटलिपुत्र**। उपजाऊ भूमि, लोहा, गंगा व हाथियों के कारण इसका उदय हुआ।',
    },
    {
      en: 'Dynasty order: **Haryanka → Shishunaga → Nanda → Maurya → Gupta.** Bimbisara & Ajatashatru = Haryanka; Udayin founded Pataliputra.',
      hi: 'राजवंश क्रम: **हर्यंक → शिशुनाग → नंद → मौर्य → गुप्त।** बिंबिसार व अजातशत्रु = हर्यंक; उदयिन ने पाटलिपुत्र बसाया।',
    },
    {
      en: 'Maurya: Chandragupta + Chanakya; Ashoka (Kalinga War 261 BCE). Visitor **Megasthenes** (*Indica*). Capital Pataliputra.',
      hi: 'मौर्य: चंद्रगुप्त + चाणक्य; अशोक (कलिंग युद्ध 261 ईसा पूर्व)। यात्री **मेगस्थनीज़** (*इंडिका*)। राजधानी पाटलिपुत्र।',
    },
    {
      en: 'Gupta = "Golden Age"; Samudragupta ("Napoleon of India"), Chandragupta II (Vikramaditya); visitor **Fa-Hien**.',
      hi: 'गुप्त = "स्वर्ण युग"; समुद्रगुप्त ("भारत का नेपोलियन"), चंद्रगुप्त द्वितीय (विक्रमादित्य); यात्री **फाह्यान**।',
    },
    {
      en: 'Bodh Gaya = Buddha\'s enlightenment; Vaishali = Licchavi republic & Mahavira\'s birthplace region. Nalanda destroyed by Bakhtiyar Khalji (~1193); Vikramshila founded by Dharmapala (Pala).',
      hi: 'बोधगया = बुद्ध की ज्ञानप्राप्ति; वैशाली = लिच्छवि गणराज्य व महावीर का जन्म-क्षेत्र। नालंदा बख्तियार खिलजी (~1193) द्वारा नष्ट; विक्रमशिला धर्मपाल (पाल) द्वारा स्थापित।',
    },
  ],
  quiz: [
    {
      id: 'h1q1',
      type: 'mcq',
      question: {
        en: 'The first capital of Magadha was:',
        hi: 'मगध की प्रथम राजधानी थी:',
      },
      options: [
        { en: 'Pataliputra', hi: 'पाटलिपुत्र' },
        { en: 'Rajgriha (Rajgir)', hi: 'राजगृह (राजगीर)' },
        { en: 'Vaishali', hi: 'वैशाली' },
        { en: 'Champa', hi: 'चंपा' },
      ],
      answer: 1,
      explanation: {
        en: 'Magadha\'s first capital was Rajgriha (Rajgir); it was later shifted to Pataliputra.',
        hi: 'मगध की प्रथम राजधानी राजगृह (राजगीर) थी; बाद में यह पाटलिपुत्र स्थानांतरित हुई।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 1,
    },
    {
      id: 'h1q2',
      type: 'mcq',
      question: {
        en: 'Which ruler of the Haryanka dynasty was a contemporary of both Buddha and Mahavira?',
        hi: 'हर्यंक वंश का कौन-सा शासक बुद्ध व महावीर दोनों का समकालीन था?',
      },
      options: [
        { en: 'Ajatashatru', hi: 'अजातशत्रु' },
        { en: 'Udayin', hi: 'उदयिन' },
        { en: 'Bimbisara', hi: 'बिंबिसार' },
        { en: 'Mahapadma Nanda', hi: 'महापद्म नंद' },
      ],
      answer: 2,
      explanation: {
        en: 'Bimbisara of the Haryanka dynasty was a contemporary of Gautama Buddha and Mahavira.',
        hi: 'हर्यंक वंश का बिंबिसार गौतम बुद्ध व महावीर का समकालीन था।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 1,
    },
    {
      id: 'h1q3',
      type: 'mcq',
      question: {
        en: 'The city of Pataliputra was founded by:',
        hi: 'पाटलिपुत्र नगर की स्थापना किसने की?',
      },
      options: [
        { en: 'Bimbisara', hi: 'बिंबिसार' },
        { en: 'Udayin', hi: 'उदयिन' },
        { en: 'Chandragupta Maurya', hi: 'चंद्रगुप्त मौर्य' },
        { en: 'Ashoka', hi: 'अशोक' },
      ],
      answer: 1,
      explanation: {
        en: 'Udayin (a Haryanka ruler, son of Ajatashatru) founded the city of Pataliputra on the banks of the Ganga.',
        hi: 'उदयिन (हर्यंक शासक, अजातशत्रु का पुत्र) ने गंगा के तट पर पाटलिपुत्र नगर की स्थापना की।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 2,
    },
    {
      id: 'h1q4',
      type: 'mcq',
      question: {
        en: 'Chandragupta Maurya overthrew which dynasty to establish the Maurya Empire?',
        hi: 'चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना हेतु किस वंश को उखाड़ फेंका?',
      },
      options: [
        { en: 'Haryanka dynasty', hi: 'हर्यंक वंश' },
        { en: 'Shishunaga dynasty', hi: 'शिशुनाग वंश' },
        { en: 'Nanda dynasty', hi: 'नंद वंश' },
        { en: 'Gupta dynasty', hi: 'गुप्त वंश' },
      ],
      answer: 2,
      explanation: {
        en: 'Chandragupta Maurya, guided by Chanakya, overthrew the Nanda dynasty (Dhana Nanda) around 322 BCE.',
        hi: 'चंद्रगुप्त मौर्य ने चाणक्य के मार्गदर्शन में लगभग 322 ईसा पूर्व नंद वंश (धनानंद) को उखाड़ फेंका।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 1,
    },
    {
      id: 'h1q5',
      type: 'mcq',
      question: {
        en: 'The Greek ambassador Megasthenes, who wrote "Indica", visited the court of:',
        hi: 'यूनानी राजदूत मेगस्थनीज़, जिसने "इंडिका" लिखी, किसके दरबार में आया था?',
      },
      options: [
        { en: 'Ashoka', hi: 'अशोक' },
        { en: 'Chandragupta Maurya', hi: 'चंद्रगुप्त मौर्य' },
        { en: 'Samudragupta', hi: 'समुद्रगुप्त' },
        { en: 'Chandragupta II', hi: 'चंद्रगुप्त द्वितीय' },
      ],
      answer: 1,
      explanation: {
        en: 'Megasthenes was the ambassador of Seleucus Nicator at the court of Chandragupta Maurya, and wrote "Indica".',
        hi: 'मेगस्थनीज़ सेल्यूकस निकेटर का राजदूत था, जो चंद्रगुप्त मौर्य के दरबार में आया और "इंडिका" लिखी।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 2,
    },
    {
      id: 'h1q6',
      type: 'mcq',
      question: {
        en: 'The Gupta period is often called the "Golden Age of India". Which ruler is known as the "Napoleon of India"?',
        hi: 'गुप्त काल को प्रायः "भारत का स्वर्ण युग" कहा जाता है। किस शासक को "भारत का नेपोलियन" कहा जाता है?',
      },
      options: [
        { en: 'Chandragupta I', hi: 'चंद्रगुप्त प्रथम' },
        { en: 'Samudragupta', hi: 'समुद्रगुप्त' },
        { en: 'Chandragupta II', hi: 'चंद्रगुप्त द्वितीय' },
        { en: 'Skandagupta', hi: 'स्कंदगुप्त' },
      ],
      answer: 1,
      explanation: {
        en: 'Samudragupta is called the "Napoleon of India" (a term coined by historian V. A. Smith) for his many military conquests.',
        hi: 'समुद्रगुप्त को उसकी अनेक सैन्य विजयों के कारण "भारत का नेपोलियन" कहा जाता है (यह शब्द इतिहासकार वी. ए. स्मिथ ने दिया)।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 2,
    },
    {
      id: 'h1q7',
      type: 'mcq',
      question: {
        en: 'Nalanda University was destroyed by:',
        hi: 'नालंदा विश्वविद्यालय को किसने नष्ट किया?',
      },
      options: [
        { en: 'Muhammad Ghori', hi: 'मुहम्मद गोरी' },
        { en: 'Bakhtiyar Khalji', hi: 'बख्तियार खिलजी' },
        { en: 'Mahmud of Ghazni', hi: 'महमूद गजनवी' },
        { en: 'Timur', hi: 'तैमूर' },
      ],
      answer: 1,
      explanation: {
        en: 'The Turkish invader Bakhtiyar Khalji destroyed Nalanda University around 1193 CE.',
        hi: 'तुर्क आक्रमणकारी बख्तियार खिलजी ने लगभग 1193 ईस्वी में नालंदा विश्वविद्यालय को नष्ट किया।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 2,
    },
    {
      id: 'h1q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. Vaishali was the capital of the Licchavis, one of the earliest republics.\n2. The Buddha attained enlightenment at Vaishali.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. वैशाली लिच्छवियों की राजधानी थी, जो आरंभिक गणराज्यों में से एक थी।\n2. बुद्ध ने वैशाली में ज्ञान प्राप्त किया।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 0,
      explanation: {
        en: 'Statement 1 is correct. Statement 2 is wrong — the Buddha attained enlightenment at Bodh Gaya, not Vaishali.',
        hi: 'कथन 1 सही है। कथन 2 गलत है — बुद्ध ने बोधगया में ज्ञान प्राप्त किया, वैशाली में नहीं।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 2,
    },
    {
      id: 'h1q9',
      type: 'mcq',
      question: {
        en: 'Vikramshila University was founded by which Pala ruler?',
        hi: 'विक्रमशिला विश्वविद्यालय की स्थापना किस पाल शासक ने की?',
      },
      options: [
        { en: 'Gopala', hi: 'गोपाल' },
        { en: 'Dharmapala', hi: 'धर्मपाल' },
        { en: 'Devapala', hi: 'देवपाल' },
        { en: 'Mahipala', hi: 'महिपाल' },
      ],
      answer: 1,
      explanation: {
        en: 'The Pala king Dharmapala founded Vikramshila University, a renowned centre of Tantric Buddhism.',
        hi: 'पाल राजा धर्मपाल ने विक्रमशिला विश्वविद्यालय की स्थापना की, जो तांत्रिक बौद्ध धर्म का प्रसिद्ध केंद्र था।',
      },
      topic: 'history-ancient-bihar',
      difficulty: 3,
    },
  ],
};
