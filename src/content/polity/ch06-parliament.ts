import type { Chapter } from '../types';

export const polityCh06: Chapter = {
  id: 'polity-ch06',
  subjectId: 'polity',
  order: 6,
  title: {
    en: 'The Parliament of India (Union Legislature)',
    hi: 'भारत की संसद (संघीय विधानमंडल)',
  },
  intro: {
    en: 'Parliament is where India\'s laws are made. It has two houses and — surprisingly to many students — the President is a part of it too. If you can remember the numbers (how many members, how many years, what minimum age) and who is more powerful over money, you have this chapter\'s marks secured.',
    hi: 'संसद वह स्थान है जहाँ भारत के कानून बनते हैं। इसके दो सदन हैं और — कई छात्रों के लिए आश्चर्यजनक रूप से — राष्ट्रपति भी इसका अंग है। यदि आप संख्याएँ (कितने सदस्य, कितने वर्ष, न्यूनतम आयु) और धन के मामले में कौन अधिक शक्तिशाली है, यह याद रखें, तो इस अध्याय के अंक पक्के हैं।',
  },
  sections: [
    {
      id: 'structure',
      heading: { en: 'The Three Parts of Parliament', hi: 'संसद के तीन अंग' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Under **Article 79**, the Parliament of India consists of **three** parts: the **President**, the **Rajya Sabha** (Council of States) and the **Lok Sabha** (House of the People). Yes — the President is a part of Parliament, even though the President does not sit in either house.',
            hi: '**अनुच्छेद 79** के अंतर्गत, भारत की संसद के **तीन** अंग हैं: **राष्ट्रपति**, **राज्य सभा** (राज्यों की परिषद) व **लोक सभा** (लोगों का सदन)। हाँ — राष्ट्रपति संसद का अंग है, यद्यपि राष्ट्रपति किसी भी सदन में नहीं बैठते।',
          },
        },
        {
          type: 'figure',
          figureId: 'parliament-structure',
          caption: {
            en: 'Parliament = President + Rajya Sabha + Lok Sabha. Learn the numbers on each side.',
            hi: 'संसद = राष्ट्रपति + राज्य सभा + लोक सभा। हर ओर की संख्याएँ याद रखें।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Link the ages to the houses: Lok Sabha (the "younger", directly-elected house) needs a **younger** minimum age — **25**. Rajya Sabha (the "elders\'" house) needs **30**. Younger house = younger age.',
            hi: 'आयु को सदनों से जोड़ें: लोक सभा ("युवा", प्रत्यक्ष निर्वाचित सदन) हेतु **कम** न्यूनतम आयु — **25**। राज्य सभा ("बुज़ुर्गों" का सदन) हेतु **30**। युवा सदन = कम आयु।',
          },
        },
      ],
    },
    {
      id: 'two-houses',
      heading: { en: 'Rajya Sabha vs. Lok Sabha', hi: 'राज्य सभा बनाम लोक सभा' },
      blocks: [
        {
          type: 'table',
          headers: [
            { en: 'Feature', hi: 'विशेषता' },
            { en: 'Rajya Sabha', hi: 'राज्य सभा' },
            { en: 'Lok Sabha', hi: 'लोक सभा' },
          ],
          rows: [
            [
              { en: 'Maximum strength', hi: 'अधिकतम संख्या' },
              { en: '**250** (238 elected + 12 nominated)', hi: '**250** (238 निर्वाचित + 12 मनोनीत)' },
              { en: '**550** (530 states + 20 UTs)', hi: '**550** (530 राज्य + 20 केंद्रशासित)' },
            ],
            [
              { en: 'How elected', hi: 'निर्वाचन कैसे' },
              { en: 'Indirectly, by state assembly MLAs (single transferable vote)', hi: 'अप्रत्यक्ष, राज्य विधानसभा विधायकों द्वारा (एकल संक्रमणीय मत)' },
              { en: 'Directly by the people', hi: 'जनता द्वारा प्रत्यक्ष' },
            ],
            [
              { en: 'Term', hi: 'कार्यकाल' },
              { en: '**Permanent** house — 1/3 retire every 2 years; member term 6 years', hi: '**स्थायी** सदन — प्रत्येक 2 वर्ष में 1/3 सेवानिवृत्त; सदस्य कार्यकाल 6 वर्ष' },
              { en: '5 years; can be **dissolved** earlier', hi: '5 वर्ष; पहले **विघटित** हो सकती है' },
            ],
            [
              { en: 'Presiding officer', hi: 'पीठासीन अधिकारी' },
              { en: 'Chairman = the **Vice-President**', hi: 'सभापति = **उपराष्ट्रपति**' },
              { en: 'The **Speaker**', hi: '**अध्यक्ष**' },
            ],
            [
              { en: 'Minimum age', hi: 'न्यूनतम आयु' },
              { en: '30 years', hi: '30 वर्ष' },
              { en: '25 years', hi: '25 वर्ष' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'The **quorum** (minimum members needed to do business) for either house is **one-tenth** of its total membership. The maximum gap allowed between two sessions of Parliament is **six months**.',
            hi: 'किसी भी सदन के कार्य हेतु आवश्यक न्यूनतम सदस्य (**गणपूर्ति / कोरम**) उसकी कुल सदस्य संख्या का **दसवाँ भाग** है। संसद के दो सत्रों के बीच अधिकतम अंतराल **छह माह** है।',
          },
        },
      ],
    },
    {
      id: 'money-bill',
      heading: { en: 'Who Controls the Money?', hi: 'धन पर नियंत्रण किसका?' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'On ordinary matters the two houses are almost equal, but on **money** the Lok Sabha is clearly more powerful. A **Money Bill (Article 110)** can be introduced **only in the Lok Sabha**, and only on the President\'s recommendation. The **Speaker** decides whether a bill is a Money Bill.',
            hi: 'सामान्य मामलों में दोनों सदन लगभग बराबर हैं, पर **धन** के मामले में लोक सभा स्पष्ट रूप से अधिक शक्तिशाली है। एक **धन विधेयक (अनुच्छेद 110)** केवल **लोक सभा में** प्रस्तुत हो सकता है, और वह भी केवल राष्ट्रपति की सिफारिश पर। कोई विधेयक धन विधेयक है या नहीं, यह **अध्यक्ष** तय करते हैं।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Once the Lok Sabha passes a Money Bill, the Rajya Sabha can only **discuss and recommend** — it cannot reject or amend it, and must return it within **14 days**. The Lok Sabha may accept or reject those recommendations. This is why we say the Lok Sabha holds the "power of the purse".',
            hi: 'लोक सभा द्वारा धन विधेयक पारित होने पर, राज्य सभा केवल **चर्चा व सिफारिश** कर सकती है — वह इसे न अस्वीकार कर सकती है, न संशोधित, और इसे **14 दिनों** में लौटाना होता है। लोक सभा उन सिफारिशों को माने या न माने। इसीलिए कहा जाता है कि "धन की शक्ति" लोक सभा के पास है।',
          },
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'A **joint sitting** of both houses (to resolve a deadlock on an *ordinary* bill) is called under **Article 108** and is presided over by the **Speaker of the Lok Sabha** — not the Vice-President. And a joint sitting is **never** held for a Money Bill or a Constitutional Amendment Bill.',
            hi: 'दोनों सदनों की **संयुक्त बैठक** (किसी *सामान्य* विधेयक पर गतिरोध सुलझाने हेतु) **अनुच्छेद 108** के अंतर्गत बुलाई जाती है और इसकी अध्यक्षता **लोक सभा के अध्यक्ष** करते हैं — उपराष्ट्रपति नहीं। और संयुक्त बैठक धन विधेयक या संविधान संशोधन विधेयक हेतु **कभी नहीं** होती।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**Article 79:** Parliament = President + Rajya Sabha + Lok Sabha. The President is a part of Parliament.',
      hi: '**अनुच्छेद 79:** संसद = राष्ट्रपति + राज्य सभा + लोक सभा। राष्ट्रपति संसद का अंग है।',
    },
    {
      en: 'Rajya Sabha: max **250** (238 elected + 12 nominated), permanent, 6-yr term, Chair = Vice-President, min age **30**.',
      hi: 'राज्य सभा: अधिकतम **250** (238 निर्वाचित + 12 मनोनीत), स्थायी, 6-वर्ष कार्यकाल, सभापति = उपराष्ट्रपति, न्यूनतम आयु **30**।',
    },
    {
      en: 'Lok Sabha: max **550**, directly elected, 5-yr term, Speaker presides, min age **25**.',
      hi: 'लोक सभा: अधिकतम **550**, प्रत्यक्ष निर्वाचित, 5-वर्ष कार्यकाल, अध्यक्ष पीठासीन, न्यूनतम आयु **25**।',
    },
    {
      en: 'Money Bill (**Art 110**): only in Lok Sabha; Speaker certifies; Rajya Sabha returns in **14 days** (recommend only).',
      hi: 'धन विधेयक (**अनु. 110**): केवल लोक सभा में; अध्यक्ष प्रमाणित करते हैं; राज्य सभा **14 दिनों** में लौटाती है (केवल सिफारिश)।',
    },
    {
      en: 'Joint sitting (**Art 108**) — presided by the **Speaker**; never for Money or Constitutional Amendment bills. Quorum = 1/10; max gap between sessions = 6 months.',
      hi: 'संयुक्त बैठक (**अनु. 108**) — **अध्यक्ष** पीठासीन; धन या संविधान संशोधन विधेयक हेतु कभी नहीं। कोरम = 1/10; सत्रों में अधिकतम अंतराल = 6 माह।',
    },
  ],
  quiz: [
    {
      id: 'p6q1',
      type: 'mcq',
      question: {
        en: 'Under Article 79, the Parliament of India consists of:',
        hi: 'अनुच्छेद 79 के अंतर्गत, भारत की संसद में सम्मिलित हैं:',
      },
      options: [
        { en: 'Only Lok Sabha and Rajya Sabha', hi: 'केवल लोक सभा व राज्य सभा' },
        { en: 'President, Rajya Sabha and Lok Sabha', hi: 'राष्ट्रपति, राज्य सभा व लोक सभा' },
        { en: 'President, Prime Minister and both houses', hi: 'राष्ट्रपति, प्रधानमंत्री व दोनों सदन' },
        { en: 'Lok Sabha and the Council of Ministers', hi: 'लोक सभा व मंत्रिपरिषद' },
      ],
      answer: 1,
      explanation: {
        en: 'Article 79 states Parliament consists of the President, the Rajya Sabha and the Lok Sabha. The President is a part of Parliament.',
        hi: 'अनुच्छेद 79 के अनुसार संसद में राष्ट्रपति, राज्य सभा व लोक सभा सम्मिलित हैं। राष्ट्रपति संसद का अंग है।',
      },
      topic: 'polity-parliament',
      difficulty: 1,
    },
    {
      id: 'p6q2',
      type: 'mcq',
      question: {
        en: 'The presiding officer (Chairman) of the Rajya Sabha is the:',
        hi: 'राज्य सभा के पीठासीन अधिकारी (सभापति) होते हैं:',
      },
      options: [
        { en: 'Speaker', hi: 'अध्यक्ष' },
        { en: 'President', hi: 'राष्ट्रपति' },
        { en: 'Vice-President', hi: 'उपराष्ट्रपति' },
        { en: 'Prime Minister', hi: 'प्रधानमंत्री' },
      ],
      answer: 2,
      explanation: {
        en: 'The Vice-President of India is the ex-officio Chairman of the Rajya Sabha.',
        hi: 'भारत के उपराष्ट्रपति राज्य सभा के पदेन सभापति होते हैं।',
      },
      topic: 'polity-parliament',
      difficulty: 1,
    },
    {
      id: 'p6q3',
      type: 'mcq',
      question: {
        en: 'The maximum strength of the Lok Sabha as envisaged by the Constitution is:',
        hi: 'संविधान द्वारा परिकल्पित लोक सभा की अधिकतम सदस्य संख्या है:',
      },
      options: [
        { en: '500', hi: '500' },
        { en: '545', hi: '545' },
        { en: '550', hi: '550' },
        { en: '552', hi: '552' },
      ],
      answer: 2,
      explanation: {
        en: 'The maximum strength of the Lok Sabha is 550 (530 from states + 20 from Union Territories).',
        hi: 'लोक सभा की अधिकतम संख्या 550 है (530 राज्यों से + 20 केंद्रशासित प्रदेशों से)।',
      },
      topic: 'polity-parliament',
      difficulty: 2,
    },
    {
      id: 'p6q4',
      type: 'mcq',
      question: {
        en: 'A Money Bill can be introduced only in the:',
        hi: 'धन विधेयक केवल किसमें प्रस्तुत किया जा सकता है?',
      },
      options: [
        { en: 'Rajya Sabha', hi: 'राज्य सभा' },
        { en: 'Lok Sabha', hi: 'लोक सभा' },
        { en: 'Either house', hi: 'किसी भी सदन में' },
        { en: 'Joint sitting', hi: 'संयुक्त बैठक में' },
      ],
      answer: 1,
      explanation: {
        en: 'Under Article 110, a Money Bill can be introduced only in the Lok Sabha, on the recommendation of the President.',
        hi: 'अनुच्छेद 110 के अंतर्गत, धन विधेयक केवल लोक सभा में, राष्ट्रपति की सिफारिश पर प्रस्तुत किया जा सकता है।',
      },
      topic: 'polity-parliament',
      difficulty: 1,
    },
    {
      id: 'p6q5',
      type: 'mcq',
      question: {
        en: 'Who decides whether a bill is a Money Bill or not?',
        hi: 'यह कौन तय करता है कि कोई विधेयक धन विधेयक है या नहीं?',
      },
      options: [
        { en: 'The President', hi: 'राष्ट्रपति' },
        { en: 'The Prime Minister', hi: 'प्रधानमंत्री' },
        { en: 'The Speaker of the Lok Sabha', hi: 'लोक सभा के अध्यक्ष' },
        { en: 'The Finance Minister', hi: 'वित्त मंत्री' },
      ],
      answer: 2,
      explanation: {
        en: 'The Speaker of the Lok Sabha certifies whether a bill is a Money Bill, and this decision is final.',
        hi: 'लोक सभा के अध्यक्ष प्रमाणित करते हैं कि कोई विधेयक धन विधेयक है, और यह निर्णय अंतिम होता है।',
      },
      topic: 'polity-parliament',
      difficulty: 2,
    },
    {
      id: 'p6q6',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the Rajya Sabha:\n1. It is a permanent house and cannot be dissolved.\n2. One-third of its members retire every two years.\nWhich is/are correct?',
        hi: 'राज्य सभा के बारे में निम्न कथनों पर विचार करें:\n1. यह एक स्थायी सदन है और विघटित नहीं की जा सकती।\n2. इसके एक-तिहाई सदस्य प्रत्येक दो वर्ष में सेवानिवृत्त होते हैं।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct — the Rajya Sabha is a permanent body, and one-third of its members retire every two years (each member serves 6 years).',
        hi: 'दोनों सही हैं — राज्य सभा स्थायी निकाय है, और इसके एक-तिहाई सदस्य प्रत्येक दो वर्ष में सेवानिवृत्त होते हैं (प्रत्येक सदस्य 6 वर्ष सेवा करता है)।',
      },
      topic: 'polity-parliament',
      difficulty: 2,
    },
    {
      id: 'p6q7',
      type: 'mcq',
      question: {
        en: 'A joint sitting of both houses of Parliament is presided over by the:',
        hi: 'संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?',
      },
      options: [
        { en: 'President', hi: 'राष्ट्रपति' },
        { en: 'Vice-President', hi: 'उपराष्ट्रपति' },
        { en: 'Speaker of the Lok Sabha', hi: 'लोक सभा के अध्यक्ष' },
        { en: 'Senior-most member', hi: 'वरिष्ठतम सदस्य' },
      ],
      answer: 2,
      explanation: {
        en: 'Under Article 108, a joint sitting is presided over by the Speaker of the Lok Sabha (not the Vice-President).',
        hi: 'अनुच्छेद 108 के अंतर्गत, संयुक्त बैठक की अध्यक्षता लोक सभा के अध्यक्ष करते हैं (उपराष्ट्रपति नहीं)।',
      },
      topic: 'polity-parliament',
      difficulty: 3,
    },
    {
      id: 'p6q8',
      type: 'mcq',
      question: {
        en: 'The quorum to constitute a sitting of either House of Parliament is:',
        hi: 'संसद के किसी भी सदन की बैठक हेतु गणपूर्ति (कोरम) है:',
      },
      options: [
        { en: 'One-tenth of the total members', hi: 'कुल सदस्यों का दसवाँ भाग' },
        { en: 'One-fourth of the total members', hi: 'कुल सदस्यों का चौथाई भाग' },
        { en: 'One-half of the total members', hi: 'कुल सदस्यों का आधा भाग' },
        { en: 'One-third of the total members', hi: 'कुल सदस्यों का तिहाई भाग' },
      ],
      answer: 0,
      explanation: {
        en: 'The quorum is one-tenth of the total number of members of that House.',
        hi: 'गणपूर्ति उस सदन के कुल सदस्यों की संख्या का दसवाँ भाग है।',
      },
      topic: 'polity-parliament',
      difficulty: 2,
    },
  ],
};
