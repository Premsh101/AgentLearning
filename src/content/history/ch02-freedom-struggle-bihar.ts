import type { Chapter } from '../types';

export const historyCh02: Chapter = {
  id: 'history-ch02',
  subjectId: 'history',
  order: 2,
  title: {
    en: 'Bihar in the Freedom Struggle',
    hi: 'स्वतंत्रता संग्राम में बिहार',
  },
  intro: {
    en: 'Bihar was not a bystander in India\'s freedom struggle — it was often the centre of it. From an 80-year-old king who fought the British in 1857, to Gandhi\'s very first satyagraha on Indian soil, to seven students who died for the flag in 1942, Bihar\'s story is packed with exactly the names, dates and places BPSC asks. This is your highest-value Bihar chapter.',
    hi: 'बिहार भारत के स्वतंत्रता संग्राम में दर्शक नहीं था — यह प्रायः उसका केंद्र था। 1857 में अंग्रेज़ों से लड़ने वाले 80 वर्षीय राजा से लेकर, भारत की भूमि पर गांधी के प्रथम सत्याग्रह तक, और 1942 में ध्वज के लिए बलिदान देने वाले सात छात्रों तक — बिहार की कहानी ठीक उन्हीं नामों, तिथियों व स्थानों से भरी है जो BPSC पूछता है। यह आपका सर्वाधिक महत्वपूर्ण बिहार अध्याय है।',
  },
  sections: [
    {
      id: 'overview',
      heading: { en: 'Bihar\'s Role — the Big Moments', hi: 'बिहार की भूमिका — बड़े क्षण' },
      blocks: [
        {
          type: 'figure',
          figureId: 'bihar-freedom-sites',
          caption: {
            en: 'Three sites, three eras: Jagdishpur (1857), Champaran (1917) and Patna (1942).',
            hi: 'तीन स्थान, तीन युग: जगदीशपुर (1857), चंपारण (1917) व पटना (1942)।',
          },
        },
        {
          type: 'timeline',
          caption: { en: 'Bihar in the freedom struggle — a quick chronology', hi: 'स्वतंत्रता संग्राम में बिहार — त्वरित कालक्रम' },
          events: [
            {
              when: { en: '1857', hi: '1857' },
              label: {
                en: '**Babu Kunwar Singh** of Jagdishpur leads the Revolt in Bihar at nearly **80 years** of age.',
                hi: 'जगदीशपुर के **बाबू कुँवर सिंह** लगभग **80 वर्ष** की आयु में बिहार में क्रांति का नेतृत्व करते हैं।',
              },
            },
            {
              when: { en: '1917', hi: '1917' },
              label: {
                en: '**Champaran Satyagraha** — Gandhi\'s **first satyagraha in India**, against the indigo planters.',
                hi: '**चंपारण सत्याग्रह** — भारत में गांधी का **प्रथम सत्याग्रह**, नील बागान मालिकों के विरुद्ध।',
              },
            },
            {
              when: { en: '1936', hi: '1936' },
              label: {
                en: '**Swami Sahajanand Saraswati** leads the peasant (Kisan Sabha) movement from Bihar.',
                hi: '**स्वामी सहजानंद सरस्वती** बिहार से किसान सभा आंदोलन का नेतृत्व करते हैं।',
              },
            },
            {
              when: { en: '11 August 1942', hi: '11 अगस्त 1942' },
              label: {
                en: 'The **Seven Martyrs (Sapt Shaheed)** die hoisting the national flag at the Patna Secretariat during **Quit India**.',
                hi: '**भारत छोड़ो** के दौरान पटना सचिवालय पर राष्ट्रध्वज फहराते हुए **सात शहीद (सप्त शहीद)** बलिदान देते हैं।',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'kunwar-singh',
      heading: { en: '1857: Babu Kunwar Singh', hi: '1857: बाबू कुँवर सिंह' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '**Babu Veer Kunwar Singh**, the zamindar of **Jagdishpur** (in today\'s Bhojpur district), was the chief leader of the Revolt of 1857 in Bihar. Remarkably, he took up arms at nearly **80 years of age** and fought the British with great skill in guerrilla warfare. He is one of Bihar\'s greatest heroes; **Vijayotsav** (his victory day) is celebrated on **23 April**.',
            hi: '**बाबू वीर कुँवर सिंह**, **जगदीशपुर** (आज के भोजपुर ज़िले) के ज़मींदार, बिहार में 1857 की क्रांति के प्रमुख नेता थे। उल्लेखनीय है कि उन्होंने लगभग **80 वर्ष की आयु** में शस्त्र उठाए और छापामार युद्ध में अत्यंत कुशलता से अंग्रेज़ों से लड़े। वे बिहार के महानतम नायकों में से हैं; **विजयोत्सव** (उनका विजय दिवस) **23 अप्रैल** को मनाया जाता है।',
          },
        },
      ],
    },
    {
      id: 'champaran',
      heading: { en: '1917: The Champaran Satyagraha', hi: '1917: चंपारण सत्याग्रह' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'In Champaran (north Bihar), European planters forced farmers to grow indigo on part of their land under the oppressive **"Tinkathia" system**. A local farmer, **Raj Kumar Shukla**, persuaded Gandhi to come to Champaran in 1917. This became Gandhi\'s **first satyagraha in India** and his first great success.',
            hi: 'चंपारण (उत्तर बिहार) में यूरोपीय बागान मालिक किसानों को उनकी भूमि के एक भाग पर नील उगाने के लिए दमनकारी **"तिनकठिया प्रणाली"** के अंतर्गत बाध्य करते थे। एक स्थानीय किसान **राजकुमार शुक्ल** ने गांधी को 1917 में चंपारण आने के लिए प्रेरित किया। यह भारत में गांधी का **प्रथम सत्याग्रह** व उनकी पहली बड़ी सफलता बना।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          title: { en: "Gandhi's Champaran team", hi: 'गांधी की चंपारण टीम' },
          text: {
            en: 'Gandhi was assisted by future national leaders — **Dr. Rajendra Prasad**, **Brajkishore Prasad**, **Anugrah Narayan Sinha**, **J. B. Kripalani** and **Mazharul Haque** — many of them from Bihar. The struggle led to the **Champaran Agrarian Act, 1918**, which abolished the Tinkathia system.',
            hi: 'गांधी की सहायता भावी राष्ट्रीय नेताओं ने की — **डॉ. राजेन्द्र प्रसाद**, **ब्रजकिशोर प्रसाद**, **अनुग्रह नारायण सिन्हा**, **जे. बी. कृपलानी** व **मज़हरुल हक़** — जिनमें कई बिहार से थे। इस संघर्ष से **चंपारण कृषि अधिनियम, 1918** बना, जिसने तिनकठिया प्रणाली समाप्त की।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Why Champaran matters so much: it was here that Gandhi first tested **satyagraha** (truth-force) on Indian soil and won. That success gave the whole national movement a new, non-violent method — and it started in Bihar.',
            hi: 'चंपारण इतना महत्वपूर्ण क्यों है: यहीं गांधी ने भारत की भूमि पर पहली बार **सत्याग्रह** (सत्य-बल) का प्रयोग किया और सफल हुए। उस सफलता ने पूरे राष्ट्रीय आंदोलन को एक नई, अहिंसक पद्धति दी — और इसकी शुरुआत बिहार से हुई।',
          },
        },
      ],
    },
    {
      id: 'quit-india',
      heading: { en: '1942: Quit India & the Seven Martyrs', hi: '1942: भारत छोड़ो व सात शहीद' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The **Quit India Movement (August 1942)** was especially fierce in Bihar. On **11 August 1942**, a group of young students marched to hoist the national flag on the **Patna Secretariat**. Seven of them were **shot dead** by police. They are remembered as the **Sapt Shaheed (Seven Martyrs)**, and the **Shaheed Smarak** statue in Patna stands in their memory.',
            hi: '**भारत छोड़ो आंदोलन (अगस्त 1942)** बिहार में विशेष रूप से प्रचंड था। **11 अगस्त 1942** को युवा छात्रों का एक समूह **पटना सचिवालय** पर राष्ट्रध्वज फहराने बढ़ा। उनमें से सात को पुलिस ने **गोली मार दी**। उन्हें **सप्त शहीद (सात शहीद)** के रूप में स्मरण किया जाता है, और पटना में **शहीद स्मारक** प्रतिमा उनकी स्मृति में खड़ी है।',
          },
        },
        {
          type: 'note',
          kind: 'story',
          text: {
            en: '**Jayaprakash Narayan (JP)**, a son of Bihar, became a hero of the 1942 underground movement — he famously escaped from **Hazaribagh Central Jail** to lead resistance. Decades later, in 1974, he led the "Total Revolution" (Sampoorna Kranti) movement, again from Bihar.',
            hi: 'बिहार के सपूत **जयप्रकाश नारायण (जे.पी.)** 1942 के भूमिगत आंदोलन के नायक बने — वे प्रसिद्ध रूप से **हज़ारीबाग केंद्रीय कारागार** से भागकर प्रतिरोध का नेतृत्व करने निकले। दशकों बाद, 1974 में, उन्होंने पुनः बिहार से "संपूर्ण क्रांति" आंदोलन का नेतृत्व किया।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**1857:** Babu Kunwar Singh of **Jagdishpur** (Bhojpur) led the Revolt in Bihar at ~80; Vijayotsav on 23 April.',
      hi: '**1857:** **जगदीशपुर** (भोजपुर) के बाबू कुँवर सिंह ने ~80 वर्ष की आयु में बिहार में क्रांति का नेतृत्व किया; विजयोत्सव 23 अप्रैल।',
    },
    {
      en: '**1917 Champaran Satyagraha:** Gandhi\'s **first satyagraha in India**, against indigo (Tinkathia system); Raj Kumar Shukla invited him.',
      hi: '**1917 चंपारण सत्याग्रह:** भारत में गांधी का **प्रथम सत्याग्रह**, नील (तिनकठिया प्रणाली) के विरुद्ध; राजकुमार शुक्ल ने आमंत्रित किया।',
    },
    {
      en: 'Champaran team: Rajendra Prasad, Brajkishore Prasad, Anugrah Narayan Sinha, J. B. Kripalani, Mazharul Haque → **Champaran Agrarian Act, 1918.**',
      hi: 'चंपारण टीम: राजेन्द्र प्रसाद, ब्रजकिशोर प्रसाद, अनुग्रह नारायण सिन्हा, जे.बी. कृपलानी, मज़हरुल हक़ → **चंपारण कृषि अधिनियम, 1918।**',
    },
    {
      en: '**11 August 1942:** the **Seven Martyrs (Sapt Shaheed)** died hoisting the flag at the Patna Secretariat during Quit India.',
      hi: '**11 अगस्त 1942:** भारत छोड़ो के दौरान पटना सचिवालय पर ध्वज फहराते हुए **सात शहीद (सप्त शहीद)** बलिदान हुए।',
    },
    {
      en: '**Jayaprakash Narayan (JP)** — 1942 underground hero (escaped Hazaribagh Jail); later led the 1974 Total Revolution.',
      hi: '**जयप्रकाश नारायण (जे.पी.)** — 1942 भूमिगत आंदोलन के नायक (हज़ारीबाग जेल से भागे); बाद में 1974 की संपूर्ण क्रांति का नेतृत्व किया।',
    },
  ],
  quiz: [
    {
      id: 'h2q1',
      type: 'mcq',
      question: {
        en: 'Who led the Revolt of 1857 in Bihar at nearly 80 years of age?',
        hi: 'लगभग 80 वर्ष की आयु में बिहार में 1857 की क्रांति का नेतृत्व किसने किया?',
      },
      options: [
        { en: 'Tantia Tope', hi: 'तांत्या टोपे' },
        { en: 'Babu Kunwar Singh', hi: 'बाबू कुँवर सिंह' },
        { en: 'Mangal Pandey', hi: 'मंगल पांडे' },
        { en: 'Nana Saheb', hi: 'नाना साहेब' },
      ],
      answer: 1,
      explanation: {
        en: 'Babu Kunwar Singh of Jagdishpur (Bhojpur) led the 1857 Revolt in Bihar at nearly 80 years of age.',
        hi: 'जगदीशपुर (भोजपुर) के बाबू कुँवर सिंह ने लगभग 80 वर्ष की आयु में बिहार में 1857 की क्रांति का नेतृत्व किया।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 1,
    },
    {
      id: 'h2q2',
      type: 'mcq',
      question: {
        en: 'The Champaran Satyagraha of 1917 is significant because it was:',
        hi: '1917 का चंपारण सत्याग्रह महत्वपूर्ण है क्योंकि यह था:',
      },
      options: [
        { en: "Gandhi's first satyagraha in India", hi: 'भारत में गांधी का प्रथम सत्याग्रह' },
        { en: 'The first session of the Congress', hi: 'कांग्रेस का प्रथम अधिवेशन' },
        { en: 'The start of the Non-Cooperation Movement', hi: 'असहयोग आंदोलन का आरंभ' },
        { en: "Gandhi's first fast unto death", hi: 'गांधी का प्रथम आमरण अनशन' },
      ],
      answer: 0,
      explanation: {
        en: 'Champaran (1917) was Gandhi\'s first satyagraha on Indian soil, launched against the exploitative indigo (Tinkathia) system.',
        hi: 'चंपारण (1917) भारत की भूमि पर गांधी का प्रथम सत्याग्रह था, जो शोषक नील (तिनकठिया) प्रणाली के विरुद्ध चलाया गया।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 1,
    },
    {
      id: 'h2q3',
      type: 'mcq',
      question: {
        en: 'Who persuaded Mahatma Gandhi to come to Champaran?',
        hi: 'महात्मा गांधी को चंपारण आने के लिए किसने प्रेरित किया?',
      },
      options: [
        { en: 'Rajendra Prasad', hi: 'राजेन्द्र प्रसाद' },
        { en: 'Raj Kumar Shukla', hi: 'राजकुमार शुक्ल' },
        { en: 'Anugrah Narayan Sinha', hi: 'अनुग्रह नारायण सिन्हा' },
        { en: 'Brajkishore Prasad', hi: 'ब्रजकिशोर प्रसाद' },
      ],
      answer: 1,
      explanation: {
        en: 'The local farmer Raj Kumar Shukla repeatedly requested Gandhi and brought him to Champaran in 1917.',
        hi: 'स्थानीय किसान राजकुमार शुक्ल ने बार-बार अनुरोध कर गांधी को 1917 में चंपारण लाया।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 2,
    },
    {
      id: 'h2q4',
      type: 'mcq',
      question: {
        en: 'The oppressive system under which Champaran farmers were forced to grow indigo was called:',
        hi: 'वह दमनकारी प्रणाली जिसके अंतर्गत चंपारण के किसानों को नील उगाने हेतु बाध्य किया जाता था, कहलाती थी:',
      },
      options: [
        { en: 'Ryotwari', hi: 'रैयतवाड़ी' },
        { en: 'Mahalwari', hi: 'महलवाड़ी' },
        { en: 'Tinkathia', hi: 'तिनकठिया' },
        { en: 'Permanent Settlement', hi: 'स्थायी बंदोबस्त' },
      ],
      answer: 2,
      explanation: {
        en: 'Under the Tinkathia system, farmers had to grow indigo on 3 out of every 20 parts (kathas) of their land for European planters.',
        hi: 'तिनकठिया प्रणाली के अंतर्गत किसानों को अपनी भूमि के प्रत्येक 20 भाग (कट्ठा) में से 3 पर यूरोपीय बागान मालिकों हेतु नील उगाना पड़ता था।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 2,
    },
    {
      id: 'h2q5',
      type: 'mcq',
      question: {
        en: 'The "Seven Martyrs" (Sapt Shaheed) of Patna are associated with which movement?',
        hi: 'पटना के "सात शहीद" (सप्त शहीद) किस आंदोलन से संबंधित हैं?',
      },
      options: [
        { en: 'Non-Cooperation Movement, 1920', hi: 'असहयोग आंदोलन, 1920' },
        { en: 'Civil Disobedience Movement, 1930', hi: 'सविनय अवज्ञा आंदोलन, 1930' },
        { en: 'Quit India Movement, 1942', hi: 'भारत छोड़ो आंदोलन, 1942' },
        { en: 'Revolt of 1857', hi: '1857 की क्रांति' },
      ],
      answer: 2,
      explanation: {
        en: 'On 11 August 1942, during the Quit India Movement, seven students were shot dead while hoisting the national flag on the Patna Secretariat.',
        hi: '11 अगस्त 1942 को भारत छोड़ो आंदोलन के दौरान, पटना सचिवालय पर राष्ट्रध्वज फहराते हुए सात छात्रों को गोली मार दी गई।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 1,
    },
    {
      id: 'h2q6',
      type: 'mcq',
      question: {
        en: 'The Champaran struggle led to the passing of which law?',
        hi: 'चंपारण संघर्ष के परिणामस्वरूप कौन-सा कानून पारित हुआ?',
      },
      options: [
        { en: 'Champaran Agrarian Act, 1918', hi: 'चंपारण कृषि अधिनियम, 1918' },
        { en: 'Rowlatt Act, 1919', hi: 'रौलट अधिनियम, 1919' },
        { en: 'Bengal Tenancy Act, 1885', hi: 'बंगाल काश्तकारी अधिनियम, 1885' },
        { en: 'Government of India Act, 1919', hi: 'भारत सरकार अधिनियम, 1919' },
      ],
      answer: 0,
      explanation: {
        en: 'The Champaran Agrarian Act, 1918 was passed, abolishing the Tinkathia system and giving relief to the indigo farmers.',
        hi: 'चंपारण कृषि अधिनियम, 1918 पारित हुआ, जिसने तिनकठिया प्रणाली समाप्त कर नील किसानों को राहत दी।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 3,
    },
    {
      id: 'h2q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements about Jayaprakash Narayan (JP):\n1. He was a leader of the 1942 underground movement in Bihar.\n2. He led the "Total Revolution" movement in 1974.\nWhich is/are correct?',
        hi: 'जयप्रकाश नारायण (जे.पी.) के बारे में निम्न कथनों पर विचार करें:\n1. वे बिहार में 1942 के भूमिगत आंदोलन के नेता थे।\n2. उन्होंने 1974 में "संपूर्ण क्रांति" आंदोलन का नेतृत्व किया।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. JP was a hero of the 1942 movement (escaping Hazaribagh Jail) and led the Total Revolution (Sampoorna Kranti) in 1974.',
        hi: 'दोनों सही हैं। जे.पी. 1942 के आंदोलन के नायक थे (हज़ारीबाग जेल से भागे) और 1974 में संपूर्ण क्रांति का नेतृत्व किया।',
      },
      topic: 'history-freedom-bihar',
      difficulty: 2,
    },
  ],
};
