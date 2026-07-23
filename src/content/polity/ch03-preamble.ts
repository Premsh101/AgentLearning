import type { Chapter } from '../types';

export const polityCh03: Chapter = {
  id: 'polity-ch03',
  subjectId: 'polity',
  order: 3,
  title: {
    en: 'The Preamble & Salient Features of the Constitution',
    hi: 'संविधान की प्रस्तावना एवं प्रमुख विशेषताएँ',
  },
  intro: {
    en: 'Think of the Preamble as the "cover letter" of the Constitution — in just one sentence it tells you who made it, what kind of country India is, and what it promises to every citizen. It is short, it is beautiful, and BPSC asks something from it almost every year. Master these few lines and you own easy marks.',
    hi: 'प्रस्तावना को संविधान का "परिचय-पत्र" समझिए — केवल एक वाक्य में यह बताती है कि संविधान किसने बनाया, भारत कैसा देश है, और वह हर नागरिक से क्या वादा करता है। यह छोटी है, सुंदर है, और BPSC लगभग हर वर्ष इससे प्रश्न पूछता है। इन कुछ पंक्तियों को साध लें तो अंक पक्के हैं।',
  },
  sections: [
    {
      id: 'text',
      heading: { en: 'What the Preamble Says', hi: 'प्रस्तावना क्या कहती है' },
      blocks: [
        {
          type: 'note',
          kind: 'story',
          title: { en: 'Where it came from', hi: 'यह कहाँ से आई' },
          text: {
            en: 'The Preamble is based on the **Objectives Resolution**, moved by **Jawaharlal Nehru on 13 December 1946** and adopted on 22 January 1947. So the soul of the Preamble was decided at the very start — the rest of the Constitution was then built to fulfil that promise.',
            hi: 'प्रस्तावना **उद्देश्य प्रस्ताव** पर आधारित है, जिसे **जवाहरलाल नेहरू ने 13 दिसंबर 1946** को प्रस्तुत किया और 22 जनवरी 1947 को स्वीकार किया गया। अर्थात् प्रस्तावना की आत्मा शुरुआत में ही तय हो गई थी — शेष संविधान उसी वादे को पूरा करने हेतु बनाया गया।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The Preamble declares India to be a **Sovereign Socialist Secular Democratic Republic** and secures **Justice, Liberty, Equality and Fraternity** to all citizens. It opens with **"We, the People of India"** — meaning the ultimate source of authority is the people themselves.',
            hi: 'प्रस्तावना भारत को **संप्रभु समाजवादी पंथनिरपेक्ष लोकतांत्रिक गणराज्य** घोषित करती है और सभी नागरिकों को **न्याय, स्वतंत्रता, समता और बंधुत्व** प्रदान करती है। यह **"हम भारत के लोग"** से आरंभ होती है — अर्थात् सत्ता का अंतिम स्रोत स्वयं जनता है।',
          },
        },
        {
          type: 'figure',
          figureId: 'preamble-keywords',
          caption: {
            en: 'The Preamble at a glance: nature of the State (top) and the four objectives it secures (bottom).',
            hi: 'एक नज़र में प्रस्तावना: राज्य का स्वरूप (ऊपर) और चार उद्देश्य (नीचे)।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The key words, decoded simply', hi: 'मुख्य शब्द, सरल अर्थ सहित' },
          headers: [
            { en: 'Word', hi: 'शब्द' },
            { en: 'Simple meaning', hi: 'सरल अर्थ' },
          ],
          rows: [
            [
              { en: '**Sovereign**', hi: '**संप्रभु**' },
              { en: 'India takes its own decisions — no outside power controls it.', hi: 'भारत अपने निर्णय स्वयं लेता है — कोई बाहरी शक्ति इसे नियंत्रित नहीं करती।' },
            ],
            [
              { en: '**Socialist**', hi: '**समाजवादी**' },
              { en: 'The State works to reduce inequality of wealth (democratic socialism, not communism).', hi: 'राज्य धन की असमानता घटाने का प्रयास करता है (लोकतांत्रिक समाजवाद, साम्यवाद नहीं)।' },
            ],
            [
              { en: '**Secular**', hi: '**पंथनिरपेक्ष**' },
              { en: 'The State has no religion of its own and treats all faiths equally.', hi: 'राज्य का अपना कोई धर्म नहीं और वह सभी पंथों को समान मानता है।' },
            ],
            [
              { en: '**Democratic**', hi: '**लोकतांत्रिक**' },
              { en: 'The government is chosen by the people through elections.', hi: 'सरकार जनता द्वारा चुनाव के माध्यम से चुनी जाती है।' },
            ],
            [
              { en: '**Republic**', hi: '**गणराज्य**' },
              { en: 'The head of state (President) is elected, not a hereditary king.', hi: 'राज्य का प्रमुख (राष्ट्रपति) निर्वाचित होता है, वंशानुगत राजा नहीं।' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Read Justice → Liberty → Equality → Fraternity as a ladder. First we remove injustice, then people are free, free people must be treated equally, and equal people live together as brothers. This logical order is exactly why the Preamble lists them in this sequence.',
            hi: 'न्याय → स्वतंत्रता → समता → बंधुत्व को एक सीढ़ी की तरह पढ़ें। पहले अन्याय हटता है, फिर लोग स्वतंत्र होते हैं, स्वतंत्र लोगों के साथ समान व्यवहार आवश्यक है, और समान लोग भाईचारे से रहते हैं। इसी तार्किक क्रम के कारण प्रस्तावना उन्हें इसी क्रम में रखती है।',
          },
        },
      ],
    },
    {
      id: 'origins-values',
      heading: { en: 'Where the Ideals Came From', hi: 'आदर्श कहाँ से आए' },
      blocks: [
        {
          type: 'table',
          headers: [
            { en: 'Ideal', hi: 'आदर्श' },
            { en: 'Borrowed from', hi: 'स्रोत' },
          ],
          rows: [
            [
              { en: 'Justice (social, economic, political)', hi: 'न्याय (सामाजिक, आर्थिक, राजनीतिक)' },
              { en: 'Russian Revolution (1917)', hi: 'रूसी क्रांति (1917)' },
            ],
            [
              { en: 'Liberty, Equality, Fraternity', hi: 'स्वतंत्रता, समता, बंधुत्व' },
              { en: 'French Revolution (1789)', hi: 'फ्रांसीसी क्रांति (1789)' },
            ],
            [
              { en: '"We, the People" & Republic idea', hi: '"हम भारत के लोग" व गणराज्य का विचार' },
              { en: 'Constitution of the USA', hi: 'अमेरिका का संविधान' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: '**"Justice from Russia, the three sisters (Liberty-Equality-Fraternity) from France, the People from America."** One line fixes all three sources.',
            hi: '**"न्याय रूस से, तीन बहनें (स्वतंत्रता-समता-बंधुत्व) फ्रांस से, जनता अमेरिका से।"** एक पंक्ति में तीनों स्रोत पक्के।',
          },
        },
      ],
    },
    {
      id: 'amendment-status',
      heading: { en: 'Is the Preamble Part of the Constitution?', hi: 'क्या प्रस्तावना संविधान का भाग है?' },
      blocks: [
        {
          type: 'timeline',
          caption: { en: 'The Preamble in the Supreme Court', hi: 'सर्वोच्च न्यायालय में प्रस्तावना' },
          events: [
            {
              when: { en: 'Berubari Case, 1960', hi: 'बेरुबारी वाद, 1960' },
              label: {
                en: 'SC held the Preamble is **not** a part of the Constitution (but is a key to its makers\' minds).',
                hi: 'न्यायालय ने माना कि प्रस्तावना संविधान का भाग **नहीं** है (पर यह निर्माताओं के मन की कुंजी है)।',
              },
            },
            {
              when: { en: 'Kesavananda Bharati, 1973', hi: 'केशवानंद भारती, 1973' },
              label: {
                en: 'SC reversed itself: the Preamble **is** a part of the Constitution and can be amended — but the **basic structure** cannot be destroyed.',
                hi: 'न्यायालय ने निर्णय बदला: प्रस्तावना संविधान का भाग **है** और इसमें संशोधन हो सकता है — पर **मूल ढाँचा** नष्ट नहीं किया जा सकता।',
              },
            },
            {
              when: { en: '42nd Amendment, 1976', hi: '42वाँ संशोधन, 1976' },
              label: {
                en: 'The **only** time the Preamble was amended — added the words **Socialist, Secular** and **Integrity**.',
                hi: 'प्रस्तावना में संशोधन का **एकमात्र** अवसर — **समाजवादी, पंथनिरपेक्ष** और **अखंडता** शब्द जोड़े गए।',
              },
            },
            {
              when: { en: 'LIC of India Case, 1995', hi: 'भारतीय जीवन बीमा निगम वाद, 1995' },
              label: {
                en: 'SC again confirmed the Preamble is a part of the Constitution.',
                hi: 'न्यायालय ने पुनः पुष्टि की कि प्रस्तावना संविधान का भाग है।',
              },
            },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Two favourite traps: (1) The Preamble has been amended **only once** — by the **42nd Amendment (1976)**. (2) The Preamble is **non-justiciable** — you cannot go to court just to enforce the Preamble by itself. Remember both.',
            hi: 'दो प्रिय जाल: (1) प्रस्तावना में संशोधन **केवल एक बार** हुआ — **42वें संशोधन (1976)** द्वारा। (2) प्रस्तावना **वाद-योग्य नहीं** है — केवल प्रस्तावना को लागू कराने हेतु न्यायालय नहीं जाया जा सकता। दोनों याद रखें।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          title: { en: 'Famous descriptions', hi: 'प्रसिद्ध कथन' },
          text: {
            en: 'K. M. Munshi called the Preamble the **"political horoscope"** of the Constitution; N. A. Palkhivala called it the **"identity card of the Constitution"**.',
            hi: 'के. एम. मुंशी ने प्रस्तावना को संविधान की **"राजनीतिक कुंडली"** कहा; एन. ए. पालकीवाला ने इसे **"संविधान का पहचान-पत्र"** कहा।',
          },
        },
      ],
    },
    {
      id: 'salient-features',
      heading: { en: 'Salient Features — the Big Picture', hi: 'प्रमुख विशेषताएँ — समग्र चित्र' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Beyond the Preamble, the Constitution as a whole has some defining features. You do not need to memorise all — just recognise them, because BPSC asks "which of the following is a feature".',
            hi: 'प्रस्तावना के परे, संपूर्ण संविधान की कुछ परिभाषित विशेषताएँ हैं। सब रटने की आवश्यकता नहीं — बस पहचानें, क्योंकि BPSC पूछता है "इनमें से कौन-सी विशेषता है"।',
          },
        },
        {
          type: 'list',
          items: [
            { en: '**Lengthiest written constitution** in the world.', hi: 'विश्व का **सबसे लंबा लिखित संविधान**।' },
            { en: '**Blend of rigidity and flexibility** — some parts easy to amend, some hard.', hi: '**कठोरता व लचीलेपन का मिश्रण** — कुछ भाग सरलता से, कुछ कठिनता से संशोधित होते हैं।' },
            { en: '**Federal system with a unitary (strong-Centre) bias.**', hi: '**संघीय व्यवस्था, पर एकात्मक (सशक्त-केंद्र) झुकाव के साथ।**' },
            { en: '**Parliamentary form** of government (borrowed from the UK).', hi: 'शासन का **संसदीय रूप** (यूके से लिया गया)।' },
            { en: '**Integrated and independent judiciary** with the Supreme Court at the top.', hi: '**एकीकृत व स्वतंत्र न्यायपालिका**, शीर्ष पर सर्वोच्च न्यायालय।' },
            { en: 'Fundamental Rights, Fundamental Duties and Directive Principles.', hi: 'मौलिक अधिकार, मौलिक कर्तव्य व नीति-निदेशक तत्व।' },
            { en: '**Secular state, single citizenship, universal adult franchise.**', hi: '**पंथनिरपेक्ष राज्य, एकल नागरिकता, सार्वभौमिक वयस्क मताधिकार।**' },
            { en: '**Three-tier government** (Centre, State, and local bodies after the 73rd/74th Amendments).', hi: '**त्रिस्तरीय शासन** (केंद्र, राज्य, तथा 73वें/74वें संशोधन के बाद स्थानीय निकाय)।' },
          ],
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'The Preamble is based on the **Objectives Resolution** (Nehru, 13 Dec 1946).',
      hi: 'प्रस्तावना **उद्देश्य प्रस्ताव** पर आधारित है (नेहरू, 13 दिसंबर 1946)।',
    },
    {
      en: 'India = **Sovereign Socialist Secular Democratic Republic**; secures **Justice, Liberty, Equality, Fraternity**.',
      hi: 'भारत = **संप्रभु समाजवादी पंथनिरपेक्ष लोकतांत्रिक गणराज्य**; प्रदान करती है **न्याय, स्वतंत्रता, समता, बंधुत्व**।',
    },
    {
      en: 'Justice → Russian Revolution; Liberty-Equality-Fraternity → French Revolution; "We, the People" → USA.',
      hi: 'न्याय → रूसी क्रांति; स्वतंत्रता-समता-बंधुत्व → फ्रांसीसी क्रांति; "हम भारत के लोग" → अमेरिका।',
    },
    {
      en: 'Amended **only once** — the **42nd Amendment (1976)** added **Socialist, Secular, Integrity**.',
      hi: 'संशोधन **केवल एक बार** — **42वें संशोधन (1976)** ने **समाजवादी, पंथनिरपेक्ष, अखंडता** जोड़े।',
    },
    {
      en: 'Berubari (1960): not part → Kesavananda Bharati (1973): part of the Constitution; Preamble is **non-justiciable**.',
      hi: 'बेरुबारी (1960): भाग नहीं → केशवानंद भारती (1973): संविधान का भाग; प्रस्तावना **वाद-योग्य नहीं**।',
    },
    {
      en: 'Salient features: lengthiest written constitution, federal with unitary bias, parliamentary, integrated judiciary, single citizenship.',
      hi: 'प्रमुख विशेषताएँ: सबसे लंबा लिखित संविधान, एकात्मक झुकाव सहित संघीय, संसदीय, एकीकृत न्यायपालिका, एकल नागरिकता।',
    },
  ],
  quiz: [
    {
      id: 'p3q1',
      type: 'mcq',
      question: {
        en: 'The Preamble of the Indian Constitution is based on which document?',
        hi: 'भारतीय संविधान की प्रस्तावना किस दस्तावेज़ पर आधारित है?',
      },
      options: [
        { en: 'Government of India Act, 1935', hi: 'भारत सरकार अधिनियम, 1935' },
        { en: 'The Objectives Resolution', hi: 'उद्देश्य प्रस्ताव' },
        { en: 'Cabinet Mission Plan', hi: 'कैबिनेट मिशन योजना' },
        { en: 'Nehru Report, 1928', hi: 'नेहरू रिपोर्ट, 1928' },
      ],
      answer: 1,
      explanation: {
        en: 'The Preamble is based on the Objectives Resolution moved by Nehru on 13 December 1946 and adopted on 22 January 1947.',
        hi: 'प्रस्तावना नेहरू द्वारा 13 दिसंबर 1946 को प्रस्तुत उद्देश्य प्रस्ताव पर आधारित है, जो 22 जनवरी 1947 को स्वीकृत हुआ।',
      },
      topic: 'polity-preamble',
      difficulty: 1,
    },
    {
      id: 'p3q2',
      type: 'mcq',
      question: {
        en: 'Which words were added to the Preamble by the 42nd Amendment (1976)?',
        hi: '42वें संशोधन (1976) द्वारा प्रस्तावना में कौन-से शब्द जोड़े गए?',
      },
      options: [
        { en: 'Sovereign, Democratic, Republic', hi: 'संप्रभु, लोकतांत्रिक, गणराज्य' },
        { en: 'Socialist, Secular, Integrity', hi: 'समाजवादी, पंथनिरपेक्ष, अखंडता' },
        { en: 'Justice, Liberty, Equality', hi: 'न्याय, स्वतंत्रता, समता' },
        { en: 'Federal, Unity, Fraternity', hi: 'संघीय, एकता, बंधुत्व' },
      ],
      answer: 1,
      explanation: {
        en: 'The 42nd Amendment 1976 added Socialist, Secular and Integrity. It is the only amendment ever made to the Preamble.',
        hi: '42वें संशोधन 1976 ने समाजवादी, पंथनिरपेक्ष व अखंडता जोड़े। प्रस्तावना में यही एकमात्र संशोधन है।',
      },
      topic: 'polity-preamble',
      difficulty: 1,
    },
    {
      id: 'p3q3',
      type: 'mcq',
      question: {
        en: 'The ideals of Liberty, Equality and Fraternity in the Preamble were inspired by:',
        hi: 'प्रस्तावना में स्वतंत्रता, समता व बंधुत्व के आदर्श किससे प्रेरित हैं:',
      },
      options: [
        { en: 'The Russian Revolution', hi: 'रूसी क्रांति' },
        { en: 'The American Revolution', hi: 'अमेरिकी क्रांति' },
        { en: 'The French Revolution', hi: 'फ्रांसीसी क्रांति' },
        { en: 'The Irish Movement', hi: 'आयरिश आंदोलन' },
      ],
      answer: 2,
      explanation: {
        en: 'Liberty, Equality and Fraternity come from the French Revolution (1789). Justice (social, economic, political) comes from the Russian Revolution.',
        hi: 'स्वतंत्रता, समता व बंधुत्व फ्रांसीसी क्रांति (1789) से हैं। न्याय (सामाजिक, आर्थिक, राजनीतिक) रूसी क्रांति से है।',
      },
      topic: 'polity-preamble',
      difficulty: 1,
    },
    {
      id: 'p3q4',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the Preamble:\n1. In the Kesavananda Bharati case (1973), the Supreme Court held that the Preamble is a part of the Constitution.\n2. The Preamble is enforceable in a court of law.\nWhich is/are correct?',
        hi: 'प्रस्तावना के बारे में निम्न कथनों पर विचार करें:\n1. केशवानंद भारती वाद (1973) में सर्वोच्च न्यायालय ने माना कि प्रस्तावना संविधान का भाग है।\n2. प्रस्तावना न्यायालय में प्रवर्तनीय (लागू करने योग्य) है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 0,
      explanation: {
        en: 'Statement 1 is correct. Statement 2 is wrong — the Preamble is non-justiciable; it cannot be enforced by itself in court.',
        hi: 'कथन 1 सही है। कथन 2 गलत है — प्रस्तावना वाद-योग्य नहीं है; इसे स्वयं न्यायालय में लागू नहीं कराया जा सकता।',
      },
      topic: 'polity-preamble',
      difficulty: 2,
    },
    {
      id: 'p3q5',
      type: 'mcq',
      question: {
        en: 'In which case did the Supreme Court first hold that the Preamble is NOT a part of the Constitution?',
        hi: 'किस वाद में सर्वोच्च न्यायालय ने पहली बार माना कि प्रस्तावना संविधान का भाग नहीं है?',
      },
      options: [
        { en: 'Kesavananda Bharati Case', hi: 'केशवानंद भारती वाद' },
        { en: 'Berubari Union Case', hi: 'बेरुबारी संघ वाद' },
        { en: 'Golaknath Case', hi: 'गोलकनाथ वाद' },
        { en: 'Minerva Mills Case', hi: 'मिनर्वा मिल्स वाद' },
      ],
      answer: 1,
      explanation: {
        en: 'In the Berubari Union Case (1960), the SC held the Preamble was not a part of the Constitution — a view later reversed in Kesavananda Bharati (1973).',
        hi: 'बेरुबारी संघ वाद (1960) में न्यायालय ने माना कि प्रस्तावना संविधान का भाग नहीं है — जिसे बाद में केशवानंद भारती (1973) में बदल दिया गया।',
      },
      topic: 'polity-preamble',
      difficulty: 2,
    },
    {
      id: 'p3q6',
      type: 'mcq',
      question: {
        en: 'The word "Republic" in the Preamble implies that:',
        hi: 'प्रस्तावना में "गणराज्य" शब्द का अर्थ है कि:',
      },
      options: [
        { en: 'India has a parliamentary system', hi: 'भारत में संसदीय प्रणाली है' },
        { en: 'The head of state is elected, not hereditary', hi: 'राज्य का प्रमुख निर्वाचित होता है, वंशानुगत नहीं' },
        { en: 'India is a federation', hi: 'भारत एक संघ है' },
        { en: 'All citizens have equal wealth', hi: 'सभी नागरिकों के पास समान धन है' },
      ],
      answer: 1,
      explanation: {
        en: 'A Republic means the head of state (the President) is elected for a fixed term and the office is not hereditary like a monarchy.',
        hi: 'गणराज्य का अर्थ है राज्य का प्रमुख (राष्ट्रपति) एक निश्चित अवधि हेतु निर्वाचित होता है और यह पद राजतंत्र की भाँति वंशानुगत नहीं होता।',
      },
      topic: 'polity-preamble',
      difficulty: 1,
    },
    {
      id: 'p3q7',
      type: 'mcq',
      question: {
        en: 'Who described the Preamble as the "identity card of the Constitution"?',
        hi: 'किसने प्रस्तावना को "संविधान का पहचान-पत्र" कहा?',
      },
      options: [
        { en: 'K. M. Munshi', hi: 'के. एम. मुंशी' },
        { en: 'N. A. Palkhivala', hi: 'एन. ए. पालकीवाला' },
        { en: 'B. R. Ambedkar', hi: 'बी. आर. आंबेडकर' },
        { en: 'B. N. Rau', hi: 'बी. एन. राव' },
      ],
      answer: 1,
      explanation: {
        en: 'N. A. Palkhivala called the Preamble the "identity card of the Constitution". K. M. Munshi called it the "political horoscope".',
        hi: 'एन. ए. पालकीवाला ने प्रस्तावना को "संविधान का पहचान-पत्र" कहा। के. एम. मुंशी ने इसे "राजनीतिक कुंडली" कहा।',
      },
      topic: 'polity-preamble',
      difficulty: 3,
    },
    {
      id: 'p3q8',
      type: 'statement',
      question: {
        en: 'Consider the following features of the Indian Constitution:\n1. It provides for a federal system with a strong Centre.\n2. It establishes a single, integrated judiciary.\nWhich is/are correct?',
        hi: 'भारतीय संविधान की निम्न विशेषताओं पर विचार करें:\n1. यह सशक्त केंद्र वाली संघीय व्यवस्था देता है।\n2. यह एकल, एकीकृत न्यायपालिका स्थापित करता है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct — the Indian Constitution is federal with a unitary bias and has a single integrated judiciary headed by the Supreme Court.',
        hi: 'दोनों सही हैं — भारतीय संविधान एकात्मक झुकाव सहित संघीय है और इसमें सर्वोच्च न्यायालय के नेतृत्व में एकल एकीकृत न्यायपालिका है।',
      },
      topic: 'polity-preamble',
      difficulty: 2,
    },
  ],
};
