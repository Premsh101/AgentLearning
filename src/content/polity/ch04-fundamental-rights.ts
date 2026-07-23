import type { Chapter } from '../types';

export const polityCh04: Chapter = {
  id: 'polity-ch04',
  subjectId: 'polity',
  order: 4,
  title: {
    en: 'Fundamental Rights (Part III, Articles 12–35)',
    hi: 'मौलिक अधिकार (भाग III, अनुच्छेद 12–35)',
  },
  intro: {
    en: 'Fundamental Rights are the promises the Constitution makes to protect you from the government itself. They are called "fundamental" because they are guaranteed by the Constitution and protected by the courts. This is the single highest-scoring topic in BPSC Polity — if you learn the six rights and their article numbers, you can answer most questions instantly.',
    hi: 'मौलिक अधिकार वे वादे हैं जो संविधान आपको स्वयं सरकार से बचाने के लिए करता है। इन्हें "मौलिक" इसलिए कहा जाता है क्योंकि ये संविधान द्वारा प्रत्याभूत और न्यायालयों द्वारा संरक्षित हैं। BPSC राजव्यवस्था में यह सर्वाधिक अंक देने वाला विषय है — यदि आप छह अधिकार और उनके अनुच्छेद संख्या सीख लें, तो अधिकांश प्रश्न तुरंत हल कर सकते हैं।',
  },
  sections: [
    {
      id: 'six-rights',
      heading: { en: 'The Six Fundamental Rights', hi: 'छह मौलिक अधिकार' },
      blocks: [
        {
          type: 'note',
          kind: 'story',
          text: {
            en: 'Originally there were **seven** Fundamental Rights. The **Right to Property** was removed as a Fundamental Right by the **44th Amendment (1978)** and made an ordinary legal right under **Article 300A**. So today there are **six** Fundamental Rights.',
            hi: 'मूल रूप से **सात** मौलिक अधिकार थे। **संपत्ति का अधिकार** को **44वें संशोधन (1978)** द्वारा मौलिक अधिकार से हटाकर **अनुच्छेद 300A** के अंतर्गत एक सामान्य विधिक अधिकार बना दिया गया। अतः आज **छह** मौलिक अधिकार हैं।',
          },
        },
        {
          type: 'figure',
          figureId: 'fundamental-rights',
          caption: {
            en: 'The six Fundamental Rights with their article ranges — learn this picture and half the topic is done.',
            hi: 'छह मौलिक अधिकार उनके अनुच्छेद परास सहित — यह चित्र सीख लें, आधा विषय पूरा।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember the order with **"E-F-E-R-C-C"**: **E**quality (14–18), **F**reedom (19–22), against **E**xploitation (23–24), **R**eligion (25–28), **C**ultural-Educational (29–30), **C**onstitutional Remedies (32). The article numbers run in one neat sequence.',
            hi: 'क्रम याद रखें **"स-स्व-शो-ध-सां-सं"** से: **स**मता (14–18), **स्व**तंत्रता (19–22), **शो**षण के विरुद्ध (23–24), **ध**र्म (25–28), **सां**स्कृतिक-शैक्षिक (29–30), **सं**वैधानिक उपचार (32)। अनुच्छेद संख्या एक क्रम में चलती हैं।',
          },
        },
      ],
    },
    {
      id: 'equality-freedom',
      heading: { en: 'Right to Equality & Right to Freedom', hi: 'समता का अधिकार व स्वतंत्रता का अधिकार' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'Right to Equality (Articles 14–18)', hi: 'समता का अधिकार (अनुच्छेद 14–18)' },
          headers: [
            { en: 'Article', hi: 'अनुच्छेद' },
            { en: 'Guarantee', hi: 'प्रत्याभूति' },
          ],
          rows: [
            [{ en: '**14**', hi: '**14**' }, { en: 'Equality before law & equal protection of the laws.', hi: 'विधि के समक्ष समता व विधियों का समान संरक्षण।' }],
            [{ en: '**15**', hi: '**15**' }, { en: 'No discrimination on grounds of religion, race, caste, sex or place of birth.', hi: 'धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव नहीं।' }],
            [{ en: '**16**', hi: '**16**' }, { en: 'Equality of opportunity in public employment.', hi: 'लोक नियोजन में अवसर की समता।' }],
            [{ en: '**17**', hi: '**17**' }, { en: 'Abolition of untouchability.', hi: 'अस्पृश्यता का अंत।' }],
            [{ en: '**18**', hi: '**18**' }, { en: 'Abolition of titles (except military & academic).', hi: 'उपाधियों का अंत (सैन्य व शैक्षिक को छोड़कर)।' }],
          ],
        },
        {
          type: 'table',
          caption: { en: 'Right to Freedom (Articles 19–22)', hi: 'स्वतंत्रता का अधिकार (अनुच्छेद 19–22)' },
          headers: [
            { en: 'Article', hi: 'अनुच्छेद' },
            { en: 'Guarantee', hi: 'प्रत्याभूति' },
          ],
          rows: [
            [{ en: '**19**', hi: '**19**' }, { en: 'Six freedoms: speech & expression, assembly, association, movement, residence, profession.', hi: 'छह स्वतंत्रताएँ: वाक् व अभिव्यक्ति, सभा, संघ, संचरण, निवास, वृत्ति।' }],
            [{ en: '**20**', hi: '**20**' }, { en: 'Protection in respect of conviction for offences.', hi: 'अपराधों के लिए दोषसिद्धि के संबंध में संरक्षण।' }],
            [{ en: '**21**', hi: '**21**' }, { en: 'Protection of life and personal liberty.', hi: 'प्राण व दैहिक स्वतंत्रता का संरक्षण।' }],
            [{ en: '**21A**', hi: '**21A**' }, { en: 'Right to Education (6–14 years) — added by the 86th Amendment, 2002.', hi: 'शिक्षा का अधिकार (6–14 वर्ष) — 86वें संशोधन, 2002 द्वारा जोड़ा गया।' }],
            [{ en: '**22**', hi: '**22**' }, { en: 'Protection against arbitrary arrest and detention.', hi: 'मनमानी गिरफ़्तारी व निरोध के विरुद्ध संरक्षण।' }],
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Article 21 is the most powerful right today. In the **Maneka Gandhi case (1978)**, the Supreme Court ruled that "life" means a life with **dignity**, not mere animal existence — and used it to read in rights to privacy, clean environment, health and more. That is why Article 21 keeps appearing in current affairs.',
            hi: 'आज अनुच्छेद 21 सबसे शक्तिशाली अधिकार है। **मेनका गांधी वाद (1978)** में सर्वोच्च न्यायालय ने कहा कि "जीवन" का अर्थ **गरिमामय** जीवन है, केवल पशुवत् अस्तित्व नहीं — और इसी से निजता, स्वच्छ पर्यावरण, स्वास्थ्य आदि अधिकार निकाले गए। इसीलिए अनुच्छेद 21 करेंट अफेयर्स में बार-बार आता है।',
          },
        },
      ],
    },
    {
      id: 'remaining',
      heading: { en: 'The Other Three Rights', hi: 'शेष तीन अधिकार' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Right against Exploitation (23–24):** bans human trafficking and forced labour (*begar*); bans employment of children below 14 in factories, mines and hazardous work.',
              hi: '**शोषण के विरुद्ध अधिकार (23–24):** मानव दुर्व्यापार व बलात् श्रम (बेगार) पर रोक; कारखानों, खानों व खतरनाक कार्यों में 14 वर्ष से कम बच्चों के नियोजन पर रोक।',
            },
            {
              en: '**Right to Freedom of Religion (25–28):** freedom of conscience and free profession, practice and propagation of religion; freedom to manage religious affairs.',
              hi: '**धार्मिक स्वतंत्रता का अधिकार (25–28):** अंतःकरण की स्वतंत्रता तथा धर्म को मानने, आचरण व प्रचार की स्वतंत्रता; धार्मिक मामलों के प्रबंधन की स्वतंत्रता।',
            },
            {
              en: '**Cultural and Educational Rights (29–30):** protect the language, script and culture of minorities and their right to establish and administer educational institutions.',
              hi: '**सांस्कृतिक व शैक्षिक अधिकार (29–30):** अल्पसंख्यकों की भाषा, लिपि व संस्कृति तथा शिक्षा संस्थान स्थापित व संचालित करने के अधिकार की रक्षा।',
            },
          ],
        },
      ],
    },
    {
      id: 'article-32',
      heading: { en: 'Article 32 — the "Heart and Soul"', hi: 'अनुच्छेद 32 — "हृदय और आत्मा"' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A right is useless if you cannot enforce it. **Article 32** gives you the right to move the **Supreme Court directly** if a Fundamental Right is violated. **Dr. B. R. Ambedkar** called Article 32 the **"heart and soul of the Constitution"**.',
            hi: 'कोई अधिकार बेकार है यदि आप उसे लागू न करा सकें। **अनुच्छेद 32** आपको मौलिक अधिकार के उल्लंघन पर सीधे **सर्वोच्च न्यायालय** जाने का अधिकार देता है। **डॉ. बी. आर. आंबेडकर** ने अनुच्छेद 32 को **"संविधान का हृदय और आत्मा"** कहा।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The five writs (weapons of Article 32)', hi: 'पाँच रिट (अनुच्छेद 32 के अस्त्र)' },
          headers: [
            { en: 'Writ', hi: 'रिट' },
            { en: 'Literal meaning → use', hi: 'शाब्दिक अर्थ → उपयोग' },
          ],
          rows: [
            [{ en: '**Habeas Corpus**', hi: '**बंदी प्रत्यक्षीकरण**' }, { en: '"To have the body" → free a person unlawfully detained.', hi: '"शरीर को प्रस्तुत करो" → अवैध रूप से निरुद्ध व्यक्ति को मुक्त कराना।' }],
            [{ en: '**Mandamus**', hi: '**परमादेश**' }, { en: '"We command" → order an official to do their legal duty.', hi: '"हम आदेश देते हैं" → किसी अधिकारी को उसका विधिक कर्तव्य करने का आदेश।' }],
            [{ en: '**Prohibition**', hi: '**प्रतिषेध**' }, { en: 'Stop a lower court from exceeding its jurisdiction (before).', hi: 'निचले न्यायालय को अधिकारिता से बाहर जाने से रोकना (पूर्व में)।' }],
            [{ en: '**Certiorari**', hi: '**उत्प्रेषण**' }, { en: 'Quash an order already passed without jurisdiction (after).', hi: 'अधिकारिता के बिना पारित आदेश को रद्द करना (बाद में)।' }],
            [{ en: '**Quo Warranto**', hi: '**अधिकार-पृच्छा**' }, { en: '"By what authority" → challenge a person holding a public office wrongly.', hi: '"किस अधिकार से" → किसी लोक पद पर अवैध रूप से बैठे व्यक्ति को चुनौती।' }],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'A classic trap: **both** the Supreme Court (**Article 32**) and the High Courts (**Article 226**) can issue writs — but Article 226 is **wider**, because High Courts can issue writs for Fundamental Rights **and** for other legal rights, while Article 32 is only for Fundamental Rights.',
            hi: 'एक क्लासिक जाल: **दोनों** — सर्वोच्च न्यायालय (**अनुच्छेद 32**) और उच्च न्यायालय (**अनुच्छेद 226**) — रिट जारी कर सकते हैं, पर अनुच्छेद 226 **व्यापक** है, क्योंकि उच्च न्यायालय मौलिक अधिकारों **तथा** अन्य विधिक अधिकारों दोनों हेतु रिट जारी कर सकते हैं, जबकि अनुच्छेद 32 केवल मौलिक अधिकारों हेतु है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Fundamental Rights: **Part III, Articles 12–35**. Originally 7; now **6** (Right to Property removed by the 44th Amendment, 1978 → Article 300A).',
      hi: 'मौलिक अधिकार: **भाग III, अनुच्छेद 12–35**। मूल रूप से 7; अब **6** (संपत्ति का अधिकार 44वें संशोधन, 1978 द्वारा हटाया → अनुच्छेद 300A)।',
    },
    {
      en: 'Equality **14–18**, Freedom **19–22**, against Exploitation **23–24**, Religion **25–28**, Cultural-Educational **29–30**, Constitutional Remedies **32**.',
      hi: 'समता **14–18**, स्वतंत्रता **19–22**, शोषण के विरुद्ध **23–24**, धर्म **25–28**, सांस्कृतिक-शैक्षिक **29–30**, संवैधानिक उपचार **32**।',
    },
    {
      en: 'Article 21 (life & personal liberty) was hugely expanded in the **Maneka Gandhi case (1978)**. Article **21A** = Right to Education (86th Amendment, 2002).',
      hi: 'अनुच्छेद 21 (प्राण व दैहिक स्वतंत्रता) का **मेनका गांधी वाद (1978)** में व्यापक विस्तार हुआ। अनुच्छेद **21A** = शिक्षा का अधिकार (86वाँ संशोधन, 2002)।',
    },
    {
      en: 'Article 32 = "heart and soul of the Constitution" (Ambedkar). Five writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto.',
      hi: 'अनुच्छेद 32 = "संविधान का हृदय और आत्मा" (आंबेडकर)। पाँच रिट: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार-पृच्छा।',
    },
    {
      en: 'Writs: SC under **Article 32** (FRs only); High Courts under **Article 226** (wider — FRs + other legal rights).',
      hi: 'रिट: सर्वोच्च न्यायालय **अनुच्छेद 32** (केवल मौलिक अधिकार); उच्च न्यायालय **अनुच्छेद 226** (व्यापक — मौलिक + अन्य विधिक अधिकार)।',
    },
  ],
  quiz: [
    {
      id: 'p4q1',
      type: 'mcq',
      question: {
        en: 'Fundamental Rights are contained in which part of the Constitution?',
        hi: 'मौलिक अधिकार संविधान के किस भाग में हैं?',
      },
      options: [
        { en: 'Part II', hi: 'भाग II' },
        { en: 'Part III', hi: 'भाग III' },
        { en: 'Part IV', hi: 'भाग IV' },
        { en: 'Part IVA', hi: 'भाग IVA' },
      ],
      answer: 1,
      explanation: {
        en: 'Fundamental Rights are in Part III (Articles 12–35). Part IV has the DPSP and Part IVA has the Fundamental Duties.',
        hi: 'मौलिक अधिकार भाग III (अनुच्छेद 12–35) में हैं। भाग IV में नीति-निदेशक तत्व व भाग IVA में मौलिक कर्तव्य हैं।',
      },
      topic: 'polity-rights',
      difficulty: 1,
    },
    {
      id: 'p4q2',
      type: 'mcq',
      question: {
        en: 'Which Fundamental Right did Dr. B. R. Ambedkar call the "heart and soul of the Constitution"?',
        hi: 'डॉ. बी. आर. आंबेडकर ने किस मौलिक अधिकार को "संविधान का हृदय और आत्मा" कहा?',
      },
      options: [
        { en: 'Right to Equality (Article 14)', hi: 'समता का अधिकार (अनुच्छेद 14)' },
        { en: 'Right to Freedom (Article 19)', hi: 'स्वतंत्रता का अधिकार (अनुच्छेद 19)' },
        { en: 'Right to Constitutional Remedies (Article 32)', hi: 'संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)' },
        { en: 'Right to Life (Article 21)', hi: 'जीवन का अधिकार (अनुच्छेद 21)' },
      ],
      answer: 2,
      explanation: {
        en: 'Article 32 (Right to Constitutional Remedies) lets citizens approach the Supreme Court directly; Ambedkar called it the heart and soul of the Constitution.',
        hi: 'अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) नागरिकों को सीधे सर्वोच्च न्यायालय जाने देता है; आंबेडकर ने इसे संविधान का हृदय और आत्मा कहा।',
      },
      topic: 'polity-rights',
      difficulty: 1,
    },
    {
      id: 'p4q3',
      type: 'mcq',
      question: {
        en: 'The Right to Property was removed as a Fundamental Right by which amendment?',
        hi: 'संपत्ति का अधिकार किस संशोधन द्वारा मौलिक अधिकार से हटाया गया?',
      },
      options: [
        { en: '42nd Amendment, 1976', hi: '42वाँ संशोधन, 1976' },
        { en: '44th Amendment, 1978', hi: '44वाँ संशोधन, 1978' },
        { en: '86th Amendment, 2002', hi: '86वाँ संशोधन, 2002' },
        { en: '73rd Amendment, 1992', hi: '73वाँ संशोधन, 1992' },
      ],
      answer: 1,
      explanation: {
        en: 'The 44th Amendment (1978) made the Right to Property an ordinary legal right under Article 300A. So there are now six Fundamental Rights.',
        hi: '44वें संशोधन (1978) ने संपत्ति के अधिकार को अनुच्छेद 300A के अंतर्गत सामान्य विधिक अधिकार बना दिया। अतः अब छह मौलिक अधिकार हैं।',
      },
      topic: 'polity-rights',
      difficulty: 2,
    },
    {
      id: 'p4q4',
      type: 'mcq',
      question: {
        en: 'The writ issued "to have the body" of an unlawfully detained person is:',
        hi: 'अवैध रूप से निरुद्ध व्यक्ति के "शरीर को प्रस्तुत करने" हेतु जारी रिट है:',
      },
      options: [
        { en: 'Mandamus', hi: 'परमादेश' },
        { en: 'Quo Warranto', hi: 'अधिकार-पृच्छा' },
        { en: 'Habeas Corpus', hi: 'बंदी प्रत्यक्षीकरण' },
        { en: 'Certiorari', hi: 'उत्प्रेषण' },
      ],
      answer: 2,
      explanation: {
        en: 'Habeas Corpus ("to have the body") is issued to release a person who has been unlawfully detained.',
        hi: 'बंदी प्रत्यक्षीकरण ("शरीर को प्रस्तुत करो") अवैध रूप से निरुद्ध व्यक्ति को मुक्त कराने हेतु जारी किया जाता है।',
      },
      topic: 'polity-rights',
      difficulty: 1,
    },
    {
      id: 'p4q5',
      type: 'mcq',
      question: {
        en: 'Article 21A, which makes education a Fundamental Right, was added by:',
        hi: 'अनुच्छेद 21A, जो शिक्षा को मौलिक अधिकार बनाता है, किसके द्वारा जोड़ा गया:',
      },
      options: [
        { en: '44th Amendment, 1978', hi: '44वाँ संशोधन, 1978' },
        { en: '86th Amendment, 2002', hi: '86वाँ संशोधन, 2002' },
        { en: '73rd Amendment, 1992', hi: '73वाँ संशोधन, 1992' },
        { en: '42nd Amendment, 1976', hi: '42वाँ संशोधन, 1976' },
      ],
      answer: 1,
      explanation: {
        en: 'The 86th Amendment (2002) inserted Article 21A, guaranteeing free and compulsory education to children aged 6–14 years.',
        hi: '86वें संशोधन (2002) ने अनुच्छेद 21A जोड़ा, जो 6–14 वर्ष के बच्चों को निःशुल्क व अनिवार्य शिक्षा की गारंटी देता है।',
      },
      topic: 'polity-rights',
      difficulty: 2,
    },
    {
      id: 'p4q6',
      type: 'mcq',
      question: {
        en: 'Abolition of untouchability is guaranteed under which Article?',
        hi: 'अस्पृश्यता का अंत किस अनुच्छेद के अंतर्गत सुनिश्चित है?',
      },
      options: [
        { en: 'Article 15', hi: 'अनुच्छेद 15' },
        { en: 'Article 16', hi: 'अनुच्छेद 16' },
        { en: 'Article 17', hi: 'अनुच्छेद 17' },
        { en: 'Article 18', hi: 'अनुच्छेद 18' },
      ],
      answer: 2,
      explanation: {
        en: 'Article 17 abolishes untouchability and forbids its practice in any form. Article 18 abolishes titles.',
        hi: 'अनुच्छेद 17 अस्पृश्यता का अंत करता है और किसी भी रूप में इसके आचरण पर रोक लगाता है। अनुच्छेद 18 उपाधियों का अंत करता है।',
      },
      topic: 'polity-rights',
      difficulty: 2,
    },
    {
      id: 'p4q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements about writs:\n1. Only the Supreme Court can issue writs, not the High Courts.\n2. The scope of Article 226 (High Courts) is wider than Article 32 (Supreme Court).\nWhich is/are correct?',
        hi: 'रिट के बारे में निम्न कथनों पर विचार करें:\n1. केवल सर्वोच्च न्यायालय रिट जारी कर सकता है, उच्च न्यायालय नहीं।\n2. अनुच्छेद 226 (उच्च न्यायालय) का विस्तार अनुच्छेद 32 (सर्वोच्च न्यायालय) से व्यापक है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — both SC (Art 32) and HCs (Art 226) issue writs. Statement 2 is correct — Art 226 is wider (FRs + other legal rights).',
        hi: 'कथन 1 गलत है — सर्वोच्च न्यायालय (अनुच्छेद 32) व उच्च न्यायालय (अनुच्छेद 226) दोनों रिट जारी करते हैं। कथन 2 सही है — अनुच्छेद 226 व्यापक है (मौलिक + अन्य विधिक अधिकार)।',
      },
      topic: 'polity-rights',
      difficulty: 2,
    },
    {
      id: 'p4q8',
      type: 'mcq',
      question: {
        en: 'The six freedoms of citizens (speech, assembly, association, movement, residence, profession) are guaranteed under:',
        hi: 'नागरिकों की छह स्वतंत्रताएँ (वाक्, सभा, संघ, संचरण, निवास, वृत्ति) किसके अंतर्गत सुनिश्चित हैं:',
      },
      options: [
        { en: 'Article 14', hi: 'अनुच्छेद 14' },
        { en: 'Article 19', hi: 'अनुच्छेद 19' },
        { en: 'Article 21', hi: 'अनुच्छेद 21' },
        { en: 'Article 25', hi: 'अनुच्छेद 25' },
      ],
      answer: 1,
      explanation: {
        en: 'Article 19 guarantees the six freedoms. (There were originally seven; the freedom to acquire property was removed by the 44th Amendment.)',
        hi: 'अनुच्छेद 19 छह स्वतंत्रताएँ प्रदान करता है। (मूल रूप से सात थीं; संपत्ति अर्जन की स्वतंत्रता 44वें संशोधन द्वारा हटा दी गई।)',
      },
      topic: 'polity-rights',
      difficulty: 1,
    },
    {
      id: 'p4q9',
      type: 'mcq',
      question: {
        en: 'The landmark case that greatly expanded the meaning of "personal liberty" under Article 21 was:',
        hi: 'वह ऐतिहासिक वाद जिसने अनुच्छेद 21 के अंतर्गत "दैहिक स्वतंत्रता" के अर्थ का व्यापक विस्तार किया, था:',
      },
      options: [
        { en: 'Gopalan v. State of Madras', hi: 'गोपालन बनाम मद्रास राज्य' },
        { en: 'Maneka Gandhi v. Union of India', hi: 'मेनका गांधी बनाम भारत संघ' },
        { en: 'Golaknath v. State of Punjab', hi: 'गोलकनाथ बनाम पंजाब राज्य' },
        { en: 'Shankari Prasad v. Union of India', hi: 'शंकरी प्रसाद बनाम भारत संघ' },
      ],
      answer: 1,
      explanation: {
        en: 'The Maneka Gandhi case (1978) held that "personal liberty" is wide and that any procedure depriving it must be fair, just and reasonable.',
        hi: 'मेनका गांधी वाद (1978) ने माना कि "दैहिक स्वतंत्रता" व्यापक है और उसे छीनने वाली कोई भी प्रक्रिया न्यायसंगत, उचित व तर्कसंगत होनी चाहिए।',
      },
      topic: 'polity-rights',
      difficulty: 3,
    },
  ],
};
