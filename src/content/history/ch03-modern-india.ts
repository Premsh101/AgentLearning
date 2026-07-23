import type { Chapter } from '../types';

export const historyCh03: Chapter = {
  id: 'history-ch03',
  subjectId: 'history',
  order: 3,
  title: {
    en: 'Modern India: The Freedom Struggle (1857–1947)',
    hi: 'आधुनिक भारत: स्वतंत्रता संग्राम (1857–1947)',
  },
  intro: {
    en: 'Ninety years, one goal: freedom. This chapter is a map of the whole national movement — from the first great revolt in 1857 to Independence in 1947. Do not try to memorise everything at once. Fix the **spine of dates** first (the timeline below), and every other fact will hang neatly on it.',
    hi: 'नब्बे वर्ष, एक लक्ष्य: स्वतंत्रता। यह अध्याय पूरे राष्ट्रीय आंदोलन का मानचित्र है — 1857 की प्रथम महान क्रांति से 1947 की स्वतंत्रता तक। एक साथ सब कुछ रटने का प्रयास न करें। पहले **तिथियों की रीढ़** (नीचे की समयरेखा) पक्की करें, हर अन्य तथ्य उसी पर सुव्यवस्थित रूप से टिक जाएगा।',
  },
  sections: [
    {
      id: 'spine',
      heading: { en: 'The Spine of Dates', hi: 'तिथियों की रीढ़' },
      blocks: [
        {
          type: 'timeline',
          caption: { en: 'Nine milestones that hold the whole story together', hi: 'नौ मील के पत्थर जो पूरी कहानी को जोड़ते हैं' },
          events: [
            { when: { en: '1857', hi: '1857' }, label: { en: 'The **Revolt of 1857** — the First War of Independence; ended Company rule.', hi: '**1857 की क्रांति** — प्रथम स्वतंत्रता संग्राम; कंपनी शासन समाप्त।' } },
            { when: { en: '1885', hi: '1885' }, label: { en: 'The **Indian National Congress** is founded (A. O. Hume).', hi: '**भारतीय राष्ट्रीय कांग्रेस** की स्थापना (ए. ओ. ह्यूम)।' } },
            { when: { en: '1905', hi: '1905' }, label: { en: '**Partition of Bengal** (Curzon) → the **Swadeshi Movement**.', hi: '**बंगाल का विभाजन** (कर्ज़न) → **स्वदेशी आंदोलन**।' } },
            { when: { en: '1919', hi: '1919' }, label: { en: '**Rowlatt Act** and the **Jallianwala Bagh massacre** (13 April).', hi: '**रौलट अधिनियम** व **जलियाँवाला बाग हत्याकांड** (13 अप्रैल)।' } },
            { when: { en: '1920–22', hi: '1920–22' }, label: { en: '**Non-Cooperation Movement**; withdrawn after **Chauri Chaura** (1922).', hi: '**असहयोग आंदोलन**; **चौरी-चौरा** (1922) के बाद वापस।' } },
            { when: { en: '1930', hi: '1930' }, label: { en: '**Civil Disobedience** begins with the **Dandi Salt March** (12 March).', hi: '**सविनय अवज्ञा** का आरंभ **दांडी नमक यात्रा** (12 मार्च) से।' } },
            { when: { en: '1942', hi: '1942' }, label: { en: '**Quit India Movement** — Gandhi\'s call of **"Do or Die"** (8 August).', hi: '**भारत छोड़ो आंदोलन** — गांधी का **"करो या मरो"** आह्वान (8 अगस्त)।' } },
            { when: { en: '15 August 1947', hi: '15 अगस्त 1947' }, label: { en: '**Independence** and the Partition into India and Pakistan.', hi: '**स्वतंत्रता** और भारत व पाकिस्तान में विभाजन।' } },
          ],
        },
      ],
    },
    {
      id: 'revolt',
      heading: { en: 'The Revolt of 1857', hi: '1857 की क्रांति' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The revolt began at **Meerut on 10 May 1857**, sparked by the greased-cartridge issue (soldiers believed the cartridges were coated with cow and pig fat). Earlier, **Mangal Pandey** had rebelled at Barrackpore (March 1857). The rebels declared the old Mughal emperor **Bahadur Shah Zafar** their leader. Though it failed, it ended the East India Company\'s rule — power passed to the **British Crown** (Government of India Act, 1858).',
            hi: 'क्रांति **10 मई 1857 को मेरठ** में आरंभ हुई, जिसका तात्कालिक कारण चर्बी वाले कारतूस थे (सैनिकों का मानना था कि कारतूसों पर गाय व सूअर की चर्बी लगी है)। इससे पूर्व **मंगल पांडे** ने बैरकपुर में विद्रोह किया था (मार्च 1857)। विद्रोहियों ने वृद्ध मुगल सम्राट **बहादुर शाह ज़फ़र** को अपना नेता घोषित किया। यद्यपि यह असफल रहा, इसने ईस्ट इंडिया कंपनी का शासन समाप्त कर दिया — सत्ता **ब्रिटिश क्राउन** को चली गई (भारत सरकार अधिनियम, 1858)।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Key centres and leaders: **Delhi** (Bahadur Shah Zafar, General Bakht Khan), **Kanpur** (Nana Saheb, Tantia Tope), **Jhansi** (Rani Lakshmibai), **Lucknow** (Begum Hazrat Mahal), and **Jagdishpur in Bihar** (Kunwar Singh).',
            hi: 'प्रमुख केंद्र व नेता: **दिल्ली** (बहादुर शाह ज़फ़र, जनरल बख्त खान), **कानपुर** (नाना साहेब, तांत्या टोपे), **झाँसी** (रानी लक्ष्मीबाई), **लखनऊ** (बेगम हज़रत महल), व **बिहार का जगदीशपुर** (कुँवर सिंह)।',
          },
        },
      ],
    },
    {
      id: 'gandhi-era',
      heading: { en: 'The Gandhian Movements', hi: 'गांधीवादी आंदोलन' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'The three great mass movements led by Gandhi', hi: 'गांधी द्वारा नेतृत्व किए गए तीन महान जन-आंदोलन' },
          headers: [
            { en: 'Movement', hi: 'आंदोलन' },
            { en: 'Year', hi: 'वर्ष' },
            { en: 'Trigger / feature', hi: 'कारण / विशेषता' },
          ],
          rows: [
            [
              { en: 'Non-Cooperation', hi: 'असहयोग' },
              { en: '1920–22', hi: '1920–22' },
              { en: 'Against Rowlatt Act, Jallianwala Bagh & Khilafat; boycott of schools, courts, titles. Called off after Chauri Chaura.', hi: 'रौलट अधिनियम, जलियाँवाला बाग व खिलाफत के विरुद्ध; विद्यालय, न्यायालय, उपाधियों का बहिष्कार। चौरी-चौरा के बाद स्थगित।' },
            ],
            [
              { en: 'Civil Disobedience', hi: 'सविनय अवज्ञा' },
              { en: '1930', hi: '1930' },
              { en: 'Began with the Dandi Salt March (breaking the salt law); non-payment of taxes.', hi: 'दांडी नमक यात्रा से आरंभ (नमक कानून तोड़ना); करों का भुगतान न करना।' },
            ],
            [
              { en: 'Quit India', hi: 'भारत छोड़ो' },
              { en: '1942', hi: '1942' },
              { en: '"Do or Die"; leaders arrested; a spontaneous mass uprising followed.', hi: '"करो या मरो"; नेता गिरफ्तार; उसके बाद स्वतःस्फूर्त जन-विद्रोह।' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of the three movements as three rising waves: **1920 boycott → 1930 break the law → 1942 leave now**. Each wave asked for more and pushed the British closer to the exit.',
            hi: 'तीन आंदोलनों को तीन बढ़ती लहरों की तरह सोचें: **1920 बहिष्कार → 1930 कानून तोड़ो → 1942 अभी छोड़ो**। हर लहर ने अधिक माँगा और अंग्रेज़ों को निकास के और निकट धकेला।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**1857:** began at Meerut (10 May); Bahadur Shah Zafar as figurehead; ended Company rule → Crown rule (GoI Act 1858).',
      hi: '**1857:** मेरठ में आरंभ (10 मई); बहादुर शाह ज़फ़र प्रतीक नेता; कंपनी शासन समाप्त → क्राउन शासन (भारत सरकार अधिनियम 1858)।',
    },
    {
      en: '**1885** Congress founded (A. O. Hume); **1905** Partition of Bengal → Swadeshi; **1906** Muslim League.',
      hi: '**1885** कांग्रेस की स्थापना (ए. ओ. ह्यूम); **1905** बंगाल विभाजन → स्वदेशी; **1906** मुस्लिम लीग।',
    },
    {
      en: '**1919:** Rowlatt Act & Jallianwala Bagh massacre (13 April, Amritsar, General Dyer).',
      hi: '**1919:** रौलट अधिनियम व जलियाँवाला बाग हत्याकांड (13 अप्रैल, अमृतसर, जनरल डायर)।',
    },
    {
      en: 'Three movements: **Non-Cooperation (1920–22)** → **Civil Disobedience/Dandi March (1930)** → **Quit India (1942, "Do or Die")**.',
      hi: 'तीन आंदोलन: **असहयोग (1920–22)** → **सविनय अवज्ञा/दांडी यात्रा (1930)** → **भारत छोड़ो (1942, "करो या मरो")**।',
    },
    {
      en: 'Non-Cooperation was withdrawn after the **Chauri Chaura** incident (1922). Independence: **15 August 1947** with Partition.',
      hi: '**चौरी-चौरा** घटना (1922) के बाद असहयोग वापस लिया गया। स्वतंत्रता: **15 अगस्त 1947** विभाजन सहित।',
    },
  ],
  quiz: [
    {
      id: 'h3q1',
      type: 'mcq',
      question: {
        en: 'The Revolt of 1857 began on 10 May 1857 at:',
        hi: '1857 की क्रांति 10 मई 1857 को कहाँ आरंभ हुई?',
      },
      options: [
        { en: 'Delhi', hi: 'दिल्ली' },
        { en: 'Meerut', hi: 'मेरठ' },
        { en: 'Barrackpore', hi: 'बैरकपुर' },
        { en: 'Kanpur', hi: 'कानपुर' },
      ],
      answer: 1,
      explanation: {
        en: 'The revolt broke out at Meerut on 10 May 1857; from there the rebels marched to Delhi.',
        hi: 'क्रांति 10 मई 1857 को मेरठ में भड़की; वहाँ से विद्रोही दिल्ली की ओर बढ़े।',
      },
      topic: 'history-modern-india',
      difficulty: 1,
    },
    {
      id: 'h3q2',
      type: 'mcq',
      question: {
        en: 'The Indian National Congress was founded in which year?',
        hi: 'भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई?',
      },
      options: [
        { en: '1857', hi: '1857' },
        { en: '1885', hi: '1885' },
        { en: '1905', hi: '1905' },
        { en: '1919', hi: '1919' },
      ],
      answer: 1,
      explanation: {
        en: 'The Congress was founded in 1885, with A. O. Hume playing a key role; its first president was W. C. Bonnerjee.',
        hi: 'कांग्रेस की स्थापना 1885 में हुई, जिसमें ए. ओ. ह्यूम की प्रमुख भूमिका थी; इसके प्रथम अध्यक्ष डब्ल्यू. सी. बनर्जी थे।',
      },
      topic: 'history-modern-india',
      difficulty: 1,
    },
    {
      id: 'h3q3',
      type: 'mcq',
      question: {
        en: 'The Jallianwala Bagh massacre took place on 13 April 1919 in which city?',
        hi: 'जलियाँवाला बाग हत्याकांड 13 अप्रैल 1919 को किस नगर में हुआ?',
      },
      options: [
        { en: 'Lahore', hi: 'लाहौर' },
        { en: 'Amritsar', hi: 'अमृतसर' },
        { en: 'Delhi', hi: 'दिल्ली' },
        { en: 'Jallandhar', hi: 'जालंधर' },
      ],
      answer: 1,
      explanation: {
        en: 'The massacre occurred at Jallianwala Bagh in Amritsar, where General Dyer ordered firing on a peaceful gathering.',
        hi: 'यह हत्याकांड अमृतसर के जलियाँवाला बाग में हुआ, जहाँ जनरल डायर ने शांतिपूर्ण सभा पर गोली चलाने का आदेश दिया।',
      },
      topic: 'history-modern-india',
      difficulty: 1,
    },
    {
      id: 'h3q4',
      type: 'mcq',
      question: {
        en: 'The Non-Cooperation Movement was withdrawn by Gandhi after which incident?',
        hi: 'गांधी ने किस घटना के बाद असहयोग आंदोलन वापस लिया?',
      },
      options: [
        { en: 'Jallianwala Bagh massacre', hi: 'जलियाँवाला बाग हत्याकांड' },
        { en: 'Chauri Chaura incident', hi: 'चौरी-चौरा घटना' },
        { en: 'Dandi March', hi: 'दांडी यात्रा' },
        { en: 'Partition of Bengal', hi: 'बंगाल विभाजन' },
      ],
      answer: 1,
      explanation: {
        en: 'After a mob burned a police station at Chauri Chaura (1922), Gandhi called off the Non-Cooperation Movement over the violence.',
        hi: 'चौरी-चौरा (1922) में भीड़ द्वारा एक पुलिस थाना जलाने के बाद, हिंसा के कारण गांधी ने असहयोग आंदोलन स्थगित कर दिया।',
      },
      topic: 'history-modern-india',
      difficulty: 2,
    },
    {
      id: 'h3q5',
      type: 'mcq',
      question: {
        en: 'The Civil Disobedience Movement of 1930 began with:',
        hi: '1930 का सविनय अवज्ञा आंदोलन किससे आरंभ हुआ?',
      },
      options: [
        { en: 'The Quit India resolution', hi: 'भारत छोड़ो प्रस्ताव' },
        { en: 'The Dandi Salt March', hi: 'दांडी नमक यात्रा' },
        { en: 'The Khilafat Movement', hi: 'खिलाफत आंदोलन' },
        { en: 'The Swadeshi Movement', hi: 'स्वदेशी आंदोलन' },
      ],
      answer: 1,
      explanation: {
        en: 'The Civil Disobedience Movement began with Gandhi\'s Dandi Salt March (12 March 1930), breaking the salt law.',
        hi: 'सविनय अवज्ञा आंदोलन गांधी की दांडी नमक यात्रा (12 मार्च 1930) से आरंभ हुआ, जिसमें नमक कानून तोड़ा गया।',
      },
      topic: 'history-modern-india',
      difficulty: 1,
    },
    {
      id: 'h3q6',
      type: 'mcq',
      question: {
        en: 'The slogan "Do or Die" is associated with which movement?',
        hi: '"करो या मरो" का नारा किस आंदोलन से संबंधित है?',
      },
      options: [
        { en: 'Non-Cooperation Movement', hi: 'असहयोग आंदोलन' },
        { en: 'Civil Disobedience Movement', hi: 'सविनय अवज्ञा आंदोलन' },
        { en: 'Quit India Movement', hi: 'भारत छोड़ो आंदोलन' },
        { en: 'Swadeshi Movement', hi: 'स्वदेशी आंदोलन' },
      ],
      answer: 2,
      explanation: {
        en: 'Gandhi gave the call of "Do or Die" during the Quit India Movement launched on 8 August 1942.',
        hi: 'गांधी ने 8 अगस्त 1942 को आरंभ भारत छोड़ो आंदोलन के दौरान "करो या मरो" का आह्वान दिया।',
      },
      topic: 'history-modern-india',
      difficulty: 1,
    },
    {
      id: 'h3q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the Partition of Bengal (1905):\n1. It was carried out by Lord Curzon.\n2. It led to the Swadeshi Movement.\nWhich is/are correct?',
        hi: 'बंगाल विभाजन (1905) के बारे में निम्न कथनों पर विचार करें:\n1. यह लॉर्ड कर्ज़न द्वारा किया गया।\n2. इसने स्वदेशी आंदोलन को जन्म दिया।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. Lord Curzon partitioned Bengal in 1905, which sparked the Swadeshi (boycott of British goods) Movement.',
        hi: 'दोनों सही हैं। लॉर्ड कर्ज़न ने 1905 में बंगाल का विभाजन किया, जिसने स्वदेशी (ब्रिटिश वस्तुओं का बहिष्कार) आंदोलन को जन्म दिया।',
      },
      topic: 'history-modern-india',
      difficulty: 2,
    },
    {
      id: 'h3q8',
      type: 'mcq',
      question: {
        en: 'During the Revolt of 1857, the rebels proclaimed which person as their symbolic leader?',
        hi: '1857 की क्रांति के दौरान, विद्रोहियों ने किसे अपना प्रतीकात्मक नेता घोषित किया?',
      },
      options: [
        { en: 'Nana Saheb', hi: 'नाना साहेब' },
        { en: 'Bahadur Shah Zafar', hi: 'बहादुर शाह ज़फ़र' },
        { en: 'Rani Lakshmibai', hi: 'रानी लक्ष्मीबाई' },
        { en: 'Tantia Tope', hi: 'तांत्या टोपे' },
      ],
      answer: 1,
      explanation: {
        en: 'The rebels proclaimed the last Mughal emperor Bahadur Shah Zafar as their symbolic leader at Delhi.',
        hi: 'विद्रोहियों ने दिल्ली में अंतिम मुगल सम्राट बहादुर शाह ज़फ़र को अपना प्रतीकात्मक नेता घोषित किया।',
      },
      topic: 'history-modern-india',
      difficulty: 2,
    },
  ],
};
