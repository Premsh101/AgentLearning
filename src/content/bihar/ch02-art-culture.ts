import type { Chapter } from '../types';

export const biharCh02: Chapter = {
  id: 'bihar-ch02',
  subjectId: 'bihar',
  order: 2,
  title: {
    en: 'Art, Culture & Festivals of Bihar',
    hi: 'बिहार की कला, संस्कृति एवं पर्व',
  },
  intro: {
    en: 'This is the most enjoyable Bihar chapter — and one of the most rewarding in the exam. BPSC regularly asks about Madhubani painting, the Chhath festival, folk arts and Bihar\'s famous GI-tagged products. Best of all, most of this is culture you already live, so it sticks fast.',
    hi: 'यह बिहार का सबसे आनंददायक अध्याय है — और परीक्षा में सबसे लाभकारी में से एक। BPSC नियमित रूप से मधुबनी चित्रकला, छठ पर्व, लोक कलाओं व बिहार के प्रसिद्ध GI-टैग उत्पादों के बारे में पूछता है। सबसे अच्छी बात — इसमें से अधिकांश वह संस्कृति है जिसे आप जीते हैं, इसलिए यह जल्दी याद रहती है।',
  },
  sections: [
    {
      id: 'paintings',
      heading: { en: 'Traditional Paintings & Crafts', hi: 'पारंपरिक चित्रकला व शिल्प' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'Art forms of Bihar', hi: 'बिहार की कला विधाएँ' },
          headers: [
            { en: 'Art form', hi: 'कला विधा' },
            { en: 'Region & description', hi: 'क्षेत्र व विवरण' },
          ],
          rows: [
            [
              { en: '**Madhubani / Mithila painting**', hi: '**मधुबनी / मिथिला चित्रकला**' },
              { en: 'From the **Mithila** region; bright natural colours, themes from nature and mythology. Has a **GI tag**. Famous artists: Sita Devi, Ganga Devi, Mahasundari Devi, Baua Devi.', hi: '**मिथिला** क्षेत्र से; चटख प्राकृतिक रंग, प्रकृति व पौराणिक विषय। इसे **GI टैग** प्राप्त है। प्रसिद्ध कलाकार: सीता देवी, गंगा देवी, महासुंदरी देवी, बउआ देवी।' },
            ],
            [
              { en: '**Manjusha art**', hi: '**मंजूषा कला**' },
              { en: 'From **Bhagalpur (Anga region)**; linked to the Bihula–Bishahari folk tale; called "snake painting" (uses pink, green, yellow).', hi: '**भागलपुर (अंग क्षेत्र)** से; बिहुला–बिशहरी लोककथा से जुड़ी; "साँप चित्रकला" कहलाती है (गुलाबी, हरा, पीला रंग)।' },
            ],
            [
              { en: '**Tikuli art**', hi: '**टिकुली कला**' },
              { en: 'From **Patna**; traditionally decorative work using glass and gold.', hi: '**पटना** से; काँच व स्वर्ण का पारंपरिक अलंकरण कार्य।' },
            ],
            [
              { en: '**Sujni embroidery**', hi: '**सुजनी कढ़ाई**' },
              { en: 'From the **Muzaffarpur** area; storytelling embroidery on cloth. Has a **GI tag**.', hi: '**मुज़फ़्फ़रपुर** क्षेत्र से; कपड़े पर कथात्मक कढ़ाई। इसे **GI टैग** प्राप्त है।' },
            ],
            [
              { en: '**Sikki grass craft**', hi: '**सिक्की घास शिल्प**' },
              { en: 'From north Bihar; colourful boxes and figures woven from golden sikki grass.', hi: 'उत्तर बिहार से; सुनहरी सिक्की घास से बुने रंगीन डिब्बे व आकृतियाँ।' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Tie each art to its place: **Madhubani → Mithila**, **Manjusha → Bhagalpur**, **Tikuli → Patna**, **Sujni → Muzaffarpur**. The place is usually the answer.',
            hi: 'हर कला को उसके स्थान से बाँधें: **मधुबनी → मिथिला**, **मंजूषा → भागलपुर**, **टिकुली → पटना**, **सुजनी → मुज़फ़्फ़रपुर**। स्थान ही प्रायः उत्तर होता है।',
          },
        },
      ],
    },
    {
      id: 'festivals',
      heading: { en: 'Festivals — Chhath Above All', hi: 'पर्व — सबसे ऊपर छठ' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '**Chhath Puja** is the most important festival of Bihar — a four-day festival dedicated to the **Sun God (Surya)** and **Chhathi Maiya**, thanking the sun for life and seeking well-being. Devotees offer *arghya* (water) to the **setting sun** on the third day and the **rising sun** on the fourth. The main Chhath falls in the month of **Kartik** (October–November); a second, **Chaiti Chhath**, falls in spring.',
            hi: '**छठ पूजा** बिहार का सबसे महत्वपूर्ण पर्व है — चार दिवसीय पर्व जो **सूर्य देव** व **छठी मैया** को समर्पित है, जीवन के लिए सूर्य को धन्यवाद व कल्याण की कामना। व्रती तीसरे दिन **अस्ताचलगामी सूर्य** को और चौथे दिन **उदयगामी सूर्य** को *अर्घ्य* (जल) अर्पित करते हैं। मुख्य छठ **कार्तिक** माह (अक्टूबर–नवंबर) में; दूसरी, **चैती छठ**, वसंत में होती है।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'A special fact BPSC likes: Chhath is one of the few festivals where the **setting sun** is worshipped, not just the rising sun — a reminder that even things in decline deserve gratitude. It is now celebrated far beyond Bihar, wherever Biharis live.',
            hi: 'BPSC को प्रिय एक विशेष तथ्य: छठ उन कुछ पर्वों में से है जहाँ केवल उगते नहीं, बल्कि **अस्त होते सूर्य** की भी पूजा होती है — यह स्मरण कराता है कि ढलती वस्तुएँ भी कृतज्ञता की पात्र हैं। अब यह बिहार से कहीं आगे, जहाँ भी बिहारी हैं, मनाया जाता है।',
          },
        },
      ],
    },
    {
      id: 'folk',
      heading: { en: 'Folk Dance, Theatre & Language', hi: 'लोक नृत्य, रंगमंच व भाषा' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Folk dances:** Jat-Jatin, Jhijhian, Paika, Domkach, Kajari and the famous **Bidesia**.',
              hi: '**लोक नृत्य:** जट-जटिन, झिझिया, पाइका, डोमकच, कजरी व प्रसिद्ध **बिदेसिया**।',
            },
            {
              en: '**Bhikhari Thakur** — creator of the Bidesia folk theatre; called the **"Shakespeare of Bhojpuri"** for his powerful social plays.',
              hi: '**भिखारी ठाकुर** — बिदेसिया लोक रंगमंच के सर्जक; अपने सशक्त सामाजिक नाटकों के लिए **"भोजपुरी का शेक्सपियर"** कहलाए।',
            },
            {
              en: '**Languages of Bihar:** Hindi and Urdu are official, but the great folk languages are **Bhojpuri, Magahi, Maithili, Angika and Bajjika**. **Maithili** is included in the **8th Schedule** of the Constitution.',
              hi: '**बिहार की भाषाएँ:** हिंदी व उर्दू राजभाषा हैं, पर महान लोकभाषाएँ हैं **भोजपुरी, मगही, मैथिली, अंगिका व बज्जिका**। **मैथिली** संविधान की **8वीं अनुसूची** में सम्मिलित है।',
            },
          ],
        },
      ],
    },
    {
      id: 'gi-tags',
      heading: { en: 'Famous GI-Tagged Products of Bihar', hi: 'बिहार के प्रसिद्ध GI-टैग उत्पाद' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A **GI (Geographical Indication) tag** shows that a product belongs to a specific place. Bihar has many — a favourite BPSC topic.',
            hi: '**GI (भौगोलिक संकेत) टैग** दर्शाता है कि कोई उत्पाद किसी विशिष्ट स्थान का है। बिहार के पास ऐसे अनेक हैं — BPSC का प्रिय विषय।',
          },
        },
        {
          type: 'table',
          headers: [
            { en: 'Product', hi: 'उत्पाद' },
            { en: 'Place', hi: 'स्थान' },
          ],
          rows: [
            [{ en: '**Shahi Litchi**', hi: '**शाही लीची**' }, { en: 'Muzaffarpur', hi: 'मुज़फ़्फ़रपुर' }],
            [{ en: '**Jardalu Mango**', hi: '**जरदालु आम**' }, { en: 'Bhagalpur', hi: 'भागलपुर' }],
            [{ en: '**Katarni Rice**', hi: '**कतरनी चावल**' }, { en: 'Bhagalpur / Banka', hi: 'भागलपुर / बांका' }],
            [{ en: '**Magahi Paan**', hi: '**मगही पान**' }, { en: 'Magadh region', hi: 'मगध क्षेत्र' }],
            [{ en: '**Silao Khaja**', hi: '**सिलाव खाजा**' }, { en: 'Nalanda', hi: 'नालंदा' }],
            [{ en: '**Bhagalpur Silk (Tussar)**', hi: '**भागलपुर सिल्क (टसर)**' }, { en: 'Bhagalpur', hi: 'भागलपुर' }],
            [{ en: '**Madhubani Painting**', hi: '**मधुबनी चित्रकला**' }, { en: 'Mithila', hi: 'मिथिला' }],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Two easily confused GI tags: **Shahi Litchi = Muzaffarpur**, but **Jardalu Mango, Katarni Rice and Tussar Silk = Bhagalpur**. Bhagalpur is the answer to several — remember it as Bihar\'s "GI capital".',
            hi: 'दो आसानी से भ्रमित GI टैग: **शाही लीची = मुज़फ़्फ़रपुर**, पर **जरदालु आम, कतरनी चावल व टसर सिल्क = भागलपुर**। भागलपुर कई का उत्तर है — इसे बिहार की "GI राजधानी" के रूप में याद रखें।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Paintings: **Madhubani → Mithila** (GI), **Manjusha → Bhagalpur** (snake painting), **Tikuli → Patna**, **Sujni → Muzaffarpur** (GI).',
      hi: 'चित्रकला: **मधुबनी → मिथिला** (GI), **मंजूषा → भागलपुर** (साँप चित्रकला), **टिकुली → पटना**, **सुजनी → मुज़फ़्फ़रपुर** (GI)।',
    },
    {
      en: '**Chhath Puja** — four-day festival for the **Sun God** & Chhathi Maiya; worships both **setting and rising sun**; main Chhath in **Kartik**.',
      hi: '**छठ पूजा** — चार दिवसीय पर्व **सूर्य देव** व छठी मैया हेतु; **अस्त व उदय दोनों सूर्य** की पूजा; मुख्य छठ **कार्तिक** में।',
    },
    {
      en: '**Bhikhari Thakur** = "Shakespeare of Bhojpuri", creator of **Bidesia**. Folk dances: Jat-Jatin, Jhijhian, Paika, Domkach.',
      hi: '**भिखारी ठाकुर** = "भोजपुरी का शेक्सपियर", **बिदेसिया** के सर्जक। लोक नृत्य: जट-जटिन, झिझिया, पाइका, डोमकच।',
    },
    {
      en: 'Languages: Bhojpuri, Magahi, Maithili, Angika, Bajjika. **Maithili** is in the **8th Schedule**.',
      hi: 'भाषाएँ: भोजपुरी, मगही, मैथिली, अंगिका, बज्जिका। **मैथिली** **8वीं अनुसूची** में है।',
    },
    {
      en: 'GI tags: **Shahi Litchi (Muzaffarpur)**; **Jardalu Mango, Katarni Rice, Tussar Silk (Bhagalpur)**; **Silao Khaja (Nalanda)**; **Magahi Paan**.',
      hi: 'GI टैग: **शाही लीची (मुज़फ़्फ़रपुर)**; **जरदालु आम, कतरनी चावल, टसर सिल्क (भागलपुर)**; **सिलाव खाजा (नालंदा)**; **मगही पान**।',
    },
  ],
  quiz: [
    {
      id: 'b2q1',
      type: 'mcq',
      question: {
        en: 'Madhubani painting originates from which region of Bihar?',
        hi: 'मधुबनी चित्रकला बिहार के किस क्षेत्र से उत्पन्न होती है?',
      },
      options: [
        { en: 'Anga', hi: 'अंग' },
        { en: 'Magadh', hi: 'मगध' },
        { en: 'Mithila', hi: 'मिथिला' },
        { en: 'Bhojpur', hi: 'भोजपुर' },
      ],
      answer: 2,
      explanation: {
        en: 'Madhubani (Mithila) painting comes from the Mithila region of north Bihar and has a GI tag.',
        hi: 'मधुबनी (मिथिला) चित्रकला उत्तर बिहार के मिथिला क्षेत्र से आती है और इसे GI टैग प्राप्त है।',
      },
      topic: 'bihar-culture',
      difficulty: 1,
    },
    {
      id: 'b2q2',
      type: 'mcq',
      question: {
        en: 'Manjusha art, associated with the Bihula–Bishahari tale, belongs to which place?',
        hi: 'बिहुला–बिशहरी कथा से जुड़ी मंजूषा कला किस स्थान से संबंधित है?',
      },
      options: [
        { en: 'Patna', hi: 'पटना' },
        { en: 'Bhagalpur', hi: 'भागलपुर' },
        { en: 'Gaya', hi: 'गया' },
        { en: 'Darbhanga', hi: 'दरभंगा' },
      ],
      answer: 1,
      explanation: {
        en: 'Manjusha art is from Bhagalpur (the Anga region) and is also called "snake painting".',
        hi: 'मंजूषा कला भागलपुर (अंग क्षेत्र) से है और इसे "साँप चित्रकला" भी कहते हैं।',
      },
      topic: 'bihar-culture',
      difficulty: 2,
    },
    {
      id: 'b2q3',
      type: 'mcq',
      question: {
        en: 'The Chhath festival is primarily dedicated to which deity?',
        hi: 'छठ पर्व मुख्यतः किस देवता को समर्पित है?',
      },
      options: [
        { en: 'Lord Vishnu', hi: 'भगवान विष्णु' },
        { en: 'The Sun God (Surya)', hi: 'सूर्य देव' },
        { en: 'Goddess Durga', hi: 'देवी दुर्गा' },
        { en: 'Lord Shiva', hi: 'भगवान शिव' },
      ],
      answer: 1,
      explanation: {
        en: 'Chhath is dedicated to the Sun God (Surya) and Chhathi Maiya; devotees offer arghya to both the setting and rising sun.',
        hi: 'छठ सूर्य देव व छठी मैया को समर्पित है; व्रती अस्त व उदय दोनों सूर्य को अर्घ्य अर्पित करते हैं।',
      },
      topic: 'bihar-culture',
      difficulty: 1,
    },
    {
      id: 'b2q4',
      type: 'mcq',
      question: {
        en: 'Who is known as the "Shakespeare of Bhojpuri"?',
        hi: '"भोजपुरी का शेक्सपियर" किसे कहा जाता है?',
      },
      options: [
        { en: 'Bhikhari Thakur', hi: 'भिखारी ठाकुर' },
        { en: 'Ramdhari Singh Dinkar', hi: 'रामधारी सिंह दिनकर' },
        { en: 'Vidyapati', hi: 'विद्यापति' },
        { en: 'Devaki Nandan Khatri', hi: 'देवकीनंदन खत्री' },
      ],
      answer: 0,
      explanation: {
        en: 'Bhikhari Thakur, creator of the Bidesia folk theatre, is called the "Shakespeare of Bhojpuri".',
        hi: 'बिदेसिया लोक रंगमंच के सर्जक भिखारी ठाकुर को "भोजपुरी का शेक्सपियर" कहा जाता है।',
      },
      topic: 'bihar-culture',
      difficulty: 2,
    },
    {
      id: 'b2q5',
      type: 'mcq',
      question: {
        en: 'Which language of Bihar is included in the 8th Schedule of the Constitution?',
        hi: 'बिहार की कौन-सी भाषा संविधान की 8वीं अनुसूची में सम्मिलित है?',
      },
      options: [
        { en: 'Bhojpuri', hi: 'भोजपुरी' },
        { en: 'Magahi', hi: 'मगही' },
        { en: 'Maithili', hi: 'मैथिली' },
        { en: 'Angika', hi: 'अंगिका' },
      ],
      answer: 2,
      explanation: {
        en: 'Maithili is included in the 8th Schedule of the Constitution (added by the 92nd Amendment, 2003).',
        hi: 'मैथिली संविधान की 8वीं अनुसूची में सम्मिलित है (92वें संशोधन, 2003 द्वारा जोड़ी गई)।',
      },
      topic: 'bihar-culture',
      difficulty: 2,
    },
    {
      id: 'b2q6',
      type: 'mcq',
      question: {
        en: 'The GI-tagged "Shahi Litchi" is famously grown in which district of Bihar?',
        hi: 'GI-टैग "शाही लीची" बिहार के किस ज़िले में प्रसिद्ध रूप से उगाई जाती है?',
      },
      options: [
        { en: 'Bhagalpur', hi: 'भागलपुर' },
        { en: 'Muzaffarpur', hi: 'मुज़फ़्फ़रपुर' },
        { en: 'Nalanda', hi: 'नालंदा' },
        { en: 'Patna', hi: 'पटना' },
      ],
      answer: 1,
      explanation: {
        en: 'Shahi Litchi of Muzaffarpur has a GI tag. (Jardalu mango, Katarni rice and Tussar silk are from Bhagalpur.)',
        hi: 'मुज़फ़्फ़रपुर की शाही लीची को GI टैग प्राप्त है। (जरदालु आम, कतरनी चावल व टसर सिल्क भागलपुर से हैं।)',
      },
      topic: 'bihar-culture',
      difficulty: 2,
    },
    {
      id: 'b2q7',
      type: 'mcq',
      question: {
        en: 'The GI-tagged sweet "Silao Khaja" is associated with which place?',
        hi: 'GI-टैग मिठाई "सिलाव खाजा" किस स्थान से संबंधित है?',
      },
      options: [
        { en: 'Gaya', hi: 'गया' },
        { en: 'Nalanda', hi: 'नालंदा' },
        { en: 'Vaishali', hi: 'वैशाली' },
        { en: 'Saran', hi: 'सारण' },
      ],
      answer: 1,
      explanation: {
        en: 'Silao Khaja, a layered sweet, comes from Silao in the Nalanda district and has a GI tag.',
        hi: 'परतदार मिठाई सिलाव खाजा नालंदा ज़िले के सिलाव से आती है और इसे GI टैग प्राप्त है।',
      },
      topic: 'bihar-culture',
      difficulty: 3,
    },
  ],
};
