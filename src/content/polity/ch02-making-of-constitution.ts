import type { Chapter } from '../types';

export const polityCh02: Chapter = {
  id: 'polity-ch02',
  subjectId: 'polity',
  order: 2,
  title: {
    en: 'Making of the Indian Constitution',
    hi: 'भारतीय संविधान का निर्माण',
  },
  intro: {
    en: 'Who wrote our Constitution, how long did it take, and where did its ideas come from? This chapter has two Bihar connections that BPSC loves to ask — both the temporary and the permanent President of the Constituent Assembly were from Bihar.',
    hi: 'हमारा संविधान किसने लिखा, कितना समय लगा, और इसके विचार कहाँ से आए? इस अध्याय में बिहार से जुड़े दो तथ्य हैं जो BPSC बार-बार पूछता है — संविधान सभा के अस्थायी और स्थायी, दोनों अध्यक्ष बिहार से थे।',
  },
  sections: [
    {
      id: 'constituent-assembly',
      heading: { en: 'The Constituent Assembly', hi: 'संविधान सभा' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The idea of a Constituent Assembly was first put forward by **M. N. Roy in 1934**. It finally took shape under the **Cabinet Mission Plan, 1946**.',
            hi: 'संविधान सभा का विचार सबसे पहले **1934 में एम. एन. रॉय** ने रखा। यह अंततः **कैबिनेट मिशन योजना, 1946** के अंतर्गत साकार हुई।',
          },
        },
        {
          type: 'list',
          items: [
            {
              en: '**Total members: 389** — 296 from British India + 93 from princely states (after Partition, strength reduced to **299**).',
              hi: '**कुल सदस्य: 389** — 296 ब्रिटिश भारत से + 93 देशी रियासतों से (विभाजन के बाद संख्या घटकर **299**)।',
            },
            {
              en: 'Members were **indirectly elected** by provincial assemblies — not by the people directly.',
              hi: 'सदस्य प्रांतीय विधानसभाओं द्वारा **अप्रत्यक्ष रूप से निर्वाचित** थे — जनता द्वारा सीधे नहीं।',
            },
            {
              en: '**First meeting: 9 December 1946** — the oldest member, **Dr. Sachchidananda Sinha (from Bihar)**, was elected temporary President.',
              hi: '**पहली बैठक: 9 दिसंबर 1946** — सबसे वरिष्ठ सदस्य **डॉ. सच्चिदानंद सिन्हा (बिहार से)** अस्थायी अध्यक्ष चुने गए।',
            },
            {
              en: 'On **11 December 1946, Dr. Rajendra Prasad (from Bihar)** became the permanent President. **H. C. Mukherjee** was Vice-President and **B. N. Rau** the Constitutional Advisor.',
              hi: '**11 दिसंबर 1946 को डॉ. राजेन्द्र प्रसाद (बिहार से)** स्थायी अध्यक्ष बने। **एच. सी. मुखर्जी** उपाध्यक्ष और **बी. एन. राव** संवैधानिक सलाहकार थे।',
            },
            {
              en: '**Objectives Resolution** — moved by **Jawaharlal Nehru on 13 December 1946**, adopted on 22 January 1947. Its ideals became the **Preamble**.',
              hi: '**उद्देश्य प्रस्ताव** — **13 दिसंबर 1946 को जवाहरलाल नेहरू** ने प्रस्तुत किया, 22 जनवरी 1947 को स्वीकृत। इसके आदर्श **प्रस्तावना** बने।',
            },
          ],
        },
        {
          type: 'note',
          title: { en: 'Bihar connection ⭐', hi: 'बिहार कनेक्शन ⭐' },
          text: {
            en: 'Both presidents of the Constituent Assembly were from Bihar: **Dr. Sachchidananda Sinha** (temporary) and **Dr. Rajendra Prasad** (permanent, later first President of India). BPSC asks this again and again.',
            hi: 'संविधान सभा के दोनों अध्यक्ष बिहार से थे: **डॉ. सच्चिदानंद सिन्हा** (अस्थायी) और **डॉ. राजेन्द्र प्रसाद** (स्थायी, बाद में भारत के प्रथम राष्ट्रपति)। BPSC यह बार-बार पूछता है।',
          },
        },
      ],
    },
    {
      id: 'drafting',
      heading: { en: 'The Drafting Committee & Enactment', hi: 'प्रारूप समिति और अधिनियमन' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The most important of all committees was the **Drafting Committee (29 August 1947)** chaired by **Dr. B. R. Ambedkar** — the "Father of the Indian Constitution".',
            hi: 'सभी समितियों में सबसे महत्वपूर्ण थी **प्रारूप समिति (29 अगस्त 1947)**, जिसके अध्यक्ष **डॉ. बी. आर. आंबेडकर** थे — "भारतीय संविधान के जनक"।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Dates you must not confuse', hi: 'तिथियाँ जिनमें भ्रम नहीं होना चाहिए' },
          headers: [
            { en: 'Event', hi: 'घटना' },
            { en: 'Date', hi: 'तिथि' },
          ],
          rows: [
            [
              { en: 'Constitution **adopted** (passed by Assembly)', hi: 'संविधान **अंगीकृत** (सभा द्वारा पारित)' },
              { en: '**26 November 1949** (Constitution Day / Samvidhan Divas)', hi: '**26 नवंबर 1949** (संविधान दिवस)' },
            ],
            [
              { en: 'Constitution fully **enforced**', hi: 'संविधान पूर्णतः **लागू**' },
              { en: '**26 January 1950** (Republic Day)', hi: '**26 जनवरी 1950** (गणतंत्र दिवस)' },
            ],
            [
              { en: 'Why 26 January?', hi: '26 जनवरी ही क्यों?' },
              {
                en: 'On 26 January 1930, Congress celebrated **Purna Swaraj Day** (Lahore Session, 1929)',
                hi: '26 जनवरी 1930 को कांग्रेस ने **पूर्ण स्वराज दिवस** मनाया था (लाहौर अधिवेशन, 1929)',
              },
            ],
            [
              { en: 'Time taken', hi: 'लगा समय' },
              { en: '**2 years, 11 months, 18 days**; 11 sessions', hi: '**2 वर्ष, 11 माह, 18 दिन**; 11 सत्र' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            en: 'On 26 November 1949 the Constitution had a **Preamble, 395 Articles and 8 Schedules**. Some provisions — citizenship, elections, provisional parliament — came into force immediately; the rest on 26 January 1950.',
            hi: '26 नवंबर 1949 को संविधान में **प्रस्तावना, 395 अनुच्छेद और 8 अनुसूचियाँ** थीं। कुछ प्रावधान — नागरिकता, चुनाव, अस्थायी संसद — तुरंत लागू हुए; शेष 26 जनवरी 1950 को।',
          },
        },
      ],
    },
    {
      id: 'sources',
      heading: { en: 'Sources of the Constitution', hi: 'संविधान के स्रोत' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Our makers took the best ideas from around the world and adapted them to India. The **Government of India Act 1935** remains the single biggest source (federal scheme, governor, judiciary, PSCs, emergency).',
            hi: 'हमारे निर्माताओं ने दुनिया भर के सर्वोत्तम विचार लेकर उन्हें भारत के अनुरूप ढाला। **भारत सरकार अधिनियम 1935** आज भी सबसे बड़ा स्रोत है (संघीय योजना, राज्यपाल, न्यायपालिका, लोक सेवा आयोग, आपातकाल)।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Borrowed features (very high yield for prelims)', hi: 'उधार ली गई विशेषताएँ (प्रारंभिक परीक्षा हेतु अति महत्वपूर्ण)' },
          headers: [
            { en: 'Source', hi: 'स्रोत' },
            { en: 'Features', hi: 'विशेषताएँ' },
          ],
          rows: [
            [
              { en: '**UK (Britain)**', hi: '**यूके (ब्रिटेन)**' },
              {
                en: 'Parliamentary government, rule of law, single citizenship, cabinet system, bicameralism',
                hi: 'संसदीय शासन, विधि का शासन, एकल नागरिकता, मंत्रिमंडल प्रणाली, द्विसदनीयता',
              },
            ],
            [
              { en: '**USA**', hi: '**अमेरिका (USA)**' },
              {
                en: 'Fundamental Rights, judicial review, independence of judiciary, impeachment of President, Vice-President',
                hi: 'मौलिक अधिकार, न्यायिक पुनर्विलोकन, न्यायपालिका की स्वतंत्रता, राष्ट्रपति पर महाभियोग, उपराष्ट्रपति',
              },
            ],
            [
              { en: '**Ireland**', hi: '**आयरलैंड**' },
              {
                en: 'Directive Principles (DPSP), nomination to Rajya Sabha, method of President\'s election',
                hi: 'राज्य के नीति-निदेशक तत्व (DPSP), राज्यसभा में मनोनयन, राष्ट्रपति के निर्वाचन की पद्धति',
              },
            ],
            [
              { en: '**Canada**', hi: '**कनाडा**' },
              {
                en: 'Federation with a strong Centre, residuary powers with Centre, Centre-appointed governors',
                hi: 'सशक्त केंद्र वाला संघ, अवशिष्ट शक्तियाँ केंद्र के पास, केंद्र द्वारा नियुक्त राज्यपाल',
              },
            ],
            [
              { en: '**Australia**', hi: '**ऑस्ट्रेलिया**' },
              {
                en: 'Concurrent List, joint sitting of the two Houses, freedom of trade & commerce',
                hi: 'समवर्ती सूची, दोनों सदनों की संयुक्त बैठक, व्यापार व वाणिज्य की स्वतंत्रता',
              },
            ],
            [
              { en: '**USSR (Russia)**', hi: '**सोवियत संघ (रूस)**' },
              {
                en: 'Fundamental Duties, ideals of justice in the Preamble',
                hi: 'मौलिक कर्तव्य, प्रस्तावना में न्याय के आदर्श',
              },
            ],
            [
              { en: '**France**', hi: '**फ्रांस**' },
              {
                en: 'Republic; liberty, equality, fraternity in the Preamble',
                hi: 'गणतंत्र; प्रस्तावना में स्वतंत्रता, समता, बंधुता',
              },
            ],
            [
              { en: '**Germany (Weimar)**', hi: '**जर्मनी (वाइमर)**' },
              {
                en: 'Suspension of Fundamental Rights during Emergency',
                hi: 'आपातकाल में मौलिक अधिकारों का निलंबन',
              },
            ],
            [
              { en: '**South Africa**', hi: '**दक्षिण अफ्रीका**' },
              {
                en: 'Amendment procedure, election of Rajya Sabha members',
                hi: 'संविधान संशोधन की प्रक्रिया, राज्यसभा सदस्यों का निर्वाचन',
              },
            ],
            [
              { en: '**Japan**', hi: '**जापान**' },
              {
                en: 'Procedure established by law',
                hi: 'विधि द्वारा स्थापित प्रक्रिया',
              },
            ],
          ],
        },
        {
          type: 'note',
          title: { en: 'Memory hook', hi: 'याद रखने की ट्रिक' },
          text: {
            en: 'US = **Rights** (courts protect you), Ireland = **Directions** (DPSP), Canada = **Strong Centre**, Australia = **Concurrent**, USSR = **Duties**, France = **Republic**, Germany = **Emergency**, Japan = **Procedure**. One word per country is enough in the exam hall.',
            hi: 'अमेरिका = **अधिकार**, आयरलैंड = **निदेशक तत्व**, कनाडा = **सशक्त केंद्र**, ऑस्ट्रेलिया = **समवर्ती**, सोवियत संघ = **कर्तव्य**, फ्रांस = **गणतंत्र**, जर्मनी = **आपातकाल**, जापान = **प्रक्रिया**। परीक्षा भवन में प्रति देश एक शब्द ही काफी है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Constituent Assembly idea: **M. N. Roy (1934)**; formed under **Cabinet Mission Plan 1946**; 389 members (299 after Partition); indirectly elected.',
      hi: 'संविधान सभा का विचार: **एम. एन. रॉय (1934)**; **कैबिनेट मिशन योजना 1946** के अंतर्गत गठन; 389 सदस्य (विभाजन के बाद 299); अप्रत्यक्ष निर्वाचन।',
    },
    {
      en: 'First meeting **9 Dec 1946**; temporary President **Sachchidananda Sinha (Bihar)**; permanent President **Rajendra Prasad (Bihar)** from 11 Dec 1946.',
      hi: 'पहली बैठक **9 दिसंबर 1946**; अस्थायी अध्यक्ष **सच्चिदानंद सिन्हा (बिहार)**; 11 दिसंबर 1946 से स्थायी अध्यक्ष **राजेन्द्र प्रसाद (बिहार)**।',
    },
    {
      en: '**Objectives Resolution**: Nehru, 13 Dec 1946; adopted 22 Jan 1947; became the Preamble\'s soul.',
      hi: '**उद्देश्य प्रस्ताव**: नेहरू, 13 दिसंबर 1946; 22 जनवरी 1947 को स्वीकृत; प्रस्तावना की आत्मा बना।',
    },
    {
      en: '**Drafting Committee** (29 Aug 1947), 7 members, chairman **Dr. B. R. Ambedkar**.',
      hi: '**प्रारूप समिति** (29 अगस्त 1947), 7 सदस्य, अध्यक्ष **डॉ. बी. आर. आंबेडकर**।',
    },
    {
      en: 'Adopted **26 Nov 1949** (395 Articles, 8 Schedules); fully enforced **26 Jan 1950** — date chosen to honour **Purna Swaraj Day 1930**.',
      hi: 'अंगीकृत **26 नवंबर 1949** (395 अनुच्छेद, 8 अनुसूचियाँ); पूर्ण रूप से लागू **26 जनवरी 1950** — तिथि **पूर्ण स्वराज दिवस 1930** के सम्मान में चुनी गई।',
    },
    {
      en: 'Time taken: **2 years 11 months 18 days**, 11 sessions.',
      hi: 'लगा समय: **2 वर्ष 11 माह 18 दिन**, 11 सत्र।',
    },
    {
      en: 'Biggest source: **GoI Act 1935**. US → Fundamental Rights; Ireland → DPSP; Canada → strong Centre; Australia → Concurrent List; USSR → Fundamental Duties.',
      hi: 'सबसे बड़ा स्रोत: **भारत सरकार अधिनियम 1935**। अमेरिका → मौलिक अधिकार; आयरलैंड → नीति-निदेशक तत्व; कनाडा → सशक्त केंद्र; ऑस्ट्रेलिया → समवर्ती सूची; सोवियत संघ → मौलिक कर्तव्य।',
    },
  ],
  quiz: [
    {
      id: 'p2q1',
      type: 'mcq',
      question: {
        en: 'Who was elected the temporary President of the Constituent Assembly on 9 December 1946?',
        hi: '9 दिसंबर 1946 को संविधान सभा का अस्थायी अध्यक्ष किसे चुना गया?',
      },
      options: [
        { en: 'Dr. Rajendra Prasad', hi: 'डॉ. राजेन्द्र प्रसाद' },
        { en: 'Dr. Sachchidananda Sinha', hi: 'डॉ. सच्चिदानंद सिन्हा' },
        { en: 'Dr. B. R. Ambedkar', hi: 'डॉ. बी. आर. आंबेडकर' },
        { en: 'Jawaharlal Nehru', hi: 'जवाहरलाल नेहरू' },
      ],
      answer: 1,
      explanation: {
        en: 'Dr. Sachchidananda Sinha, the oldest member (and from Bihar), was the temporary President; Dr. Rajendra Prasad became permanent President on 11 December 1946.',
        hi: 'सबसे वरिष्ठ सदस्य डॉ. सच्चिदानंद सिन्हा (बिहार से) अस्थायी अध्यक्ष बने; डॉ. राजेन्द्र प्रसाद 11 दिसंबर 1946 को स्थायी अध्यक्ष बने।',
      },
      topic: 'polity-making',
      difficulty: 1,
    },
    {
      id: 'p2q2',
      type: 'mcq',
      question: {
        en: 'The Objectives Resolution was moved in the Constituent Assembly by:',
        hi: 'संविधान सभा में उद्देश्य प्रस्ताव किसने प्रस्तुत किया:',
      },
      options: [
        { en: 'Dr. B. R. Ambedkar', hi: 'डॉ. बी. आर. आंबेडकर' },
        { en: 'Dr. Rajendra Prasad', hi: 'डॉ. राजेन्द्र प्रसाद' },
        { en: 'Jawaharlal Nehru', hi: 'जवाहरलाल नेहरू' },
        { en: 'Sardar Patel', hi: 'सरदार पटेल' },
      ],
      answer: 2,
      explanation: {
        en: 'Jawaharlal Nehru moved the Objectives Resolution on 13 December 1946; it was adopted on 22 January 1947 and its ideals shaped the Preamble.',
        hi: 'जवाहरलाल नेहरू ने 13 दिसंबर 1946 को उद्देश्य प्रस्ताव प्रस्तुत किया; यह 22 जनवरी 1947 को स्वीकृत हुआ और इसके आदर्शों से प्रस्तावना बनी।',
      },
      topic: 'polity-making',
      difficulty: 1,
    },
    {
      id: 'p2q3',
      type: 'mcq',
      question: {
        en: 'How much time did the Constituent Assembly take to frame the Constitution?',
        hi: 'संविधान सभा को संविधान बनाने में कितना समय लगा?',
      },
      options: [
        { en: '2 years 11 months 18 days', hi: '2 वर्ष 11 माह 18 दिन' },
        { en: '3 years 11 months 18 days', hi: '3 वर्ष 11 माह 18 दिन' },
        { en: '2 years 7 months 23 days', hi: '2 वर्ष 7 माह 23 दिन' },
        { en: '4 years 1 month 8 days', hi: '4 वर्ष 1 माह 8 दिन' },
      ],
      answer: 0,
      explanation: {
        en: 'From 9 December 1946 to 26 November 1949: 2 years, 11 months, 18 days across 11 sessions.',
        hi: '9 दिसंबर 1946 से 26 नवंबर 1949 तक: 2 वर्ष, 11 माह, 18 दिन — कुल 11 सत्र।',
      },
      topic: 'polity-making',
      difficulty: 1,
    },
    {
      id: 'p2q4',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. The Constitution was adopted on 26 January 1950.\n2. 26 January was chosen because Purna Swaraj Day was celebrated on this date in 1930.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. संविधान 26 जनवरी 1950 को अंगीकृत हुआ।\n2. 26 जनवरी इसलिए चुनी गई क्योंकि 1930 में इसी तिथि को पूर्ण स्वराज दिवस मनाया गया था।\nकौन-सा/से कथन सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — the Constitution was ADOPTED on 26 November 1949 and ENFORCED on 26 January 1950. Statement 2 is correct.',
        hi: 'कथन 1 गलत है — संविधान 26 नवंबर 1949 को अंगीकृत हुआ और 26 जनवरी 1950 को लागू हुआ। कथन 2 सही है।',
      },
      topic: 'polity-making',
      difficulty: 2,
    },
    {
      id: 'p2q5',
      type: 'mcq',
      question: {
        en: 'The Directive Principles of State Policy (DPSP) have been borrowed from the constitution of:',
        hi: 'राज्य के नीति-निदेशक तत्व (DPSP) किस देश के संविधान से लिए गए हैं:',
      },
      options: [
        { en: 'USA', hi: 'अमेरिका' },
        { en: 'Ireland', hi: 'आयरलैंड' },
        { en: 'Canada', hi: 'कनाडा' },
        { en: 'Australia', hi: 'ऑस्ट्रेलिया' },
      ],
      answer: 1,
      explanation: {
        en: 'DPSP came from Ireland (which itself took the idea from Spain). Ireland also gave the method of President\'s election and Rajya Sabha nominations.',
        hi: 'DPSP आयरलैंड से लिए गए (आयरलैंड ने यह विचार स्पेन से लिया था)। आयरलैंड से राष्ट्रपति के निर्वाचन की पद्धति और राज्यसभा मनोनयन भी लिए गए।',
      },
      topic: 'polity-making',
      difficulty: 1,
    },
    {
      id: 'p2q6',
      type: 'mcq',
      question: {
        en: 'Fundamental Duties were borrowed from which country?',
        hi: 'मौलिक कर्तव्य किस देश से लिए गए?',
      },
      options: [
        { en: 'USA', hi: 'अमेरिका' },
        { en: 'UK', hi: 'यूके' },
        { en: 'USSR', hi: 'सोवियत संघ (USSR)' },
        { en: 'France', hi: 'फ्रांस' },
      ],
      answer: 2,
      explanation: {
        en: 'Fundamental Duties came from the USSR. They were added by the 42nd Amendment (1976) on the Swaran Singh Committee\'s recommendation.',
        hi: 'मौलिक कर्तव्य सोवियत संघ से लिए गए। इन्हें स्वर्ण सिंह समिति की सिफारिश पर 42वें संशोधन (1976) द्वारा जोड़ा गया।',
      },
      topic: 'polity-making',
      difficulty: 1,
    },
    {
      id: 'p2q7',
      type: 'mcq',
      question: {
        en: 'How many Articles and Schedules did the original Constitution (1949) contain?',
        hi: 'मूल संविधान (1949) में कितने अनुच्छेद और अनुसूचियाँ थीं?',
      },
      options: [
        { en: '395 Articles, 8 Schedules', hi: '395 अनुच्छेद, 8 अनुसूचियाँ' },
        { en: '448 Articles, 12 Schedules', hi: '448 अनुच्छेद, 12 अनुसूचियाँ' },
        { en: '395 Articles, 12 Schedules', hi: '395 अनुच्छेद, 12 अनुसूचियाँ' },
        { en: '368 Articles, 8 Schedules', hi: '368 अनुच्छेद, 8 अनुसूचियाँ' },
      ],
      answer: 0,
      explanation: {
        en: 'Originally: Preamble, 395 Articles (in 22 Parts) and 8 Schedules. Today there are 12 Schedules and 470+ Articles after amendments.',
        hi: 'मूल रूप से: प्रस्तावना, 395 अनुच्छेद (22 भागों में) और 8 अनुसूचियाँ। संशोधनों के बाद आज 12 अनुसूचियाँ और 470+ अनुच्छेद हैं।',
      },
      topic: 'polity-making',
      difficulty: 2,
    },
    {
      id: 'p2q8',
      type: 'mcq',
      question: {
        en: 'The Drafting Committee of the Constituent Assembly was constituted on:',
        hi: 'संविधान सभा की प्रारूप समिति का गठन कब हुआ:',
      },
      options: [
        { en: '9 December 1946', hi: '9 दिसंबर 1946' },
        { en: '22 January 1947', hi: '22 जनवरी 1947' },
        { en: '29 August 1947', hi: '29 अगस्त 1947' },
        { en: '26 November 1949', hi: '26 नवंबर 1949' },
      ],
      answer: 2,
      explanation: {
        en: 'The 7-member Drafting Committee was set up on 29 August 1947 with Dr. B. R. Ambedkar as chairman.',
        hi: '7 सदस्यीय प्रारूप समिति 29 अगस्त 1947 को बनी, अध्यक्ष डॉ. बी. आर. आंबेडकर थे।',
      },
      topic: 'polity-making',
      difficulty: 2,
    },
    {
      id: 'p2q9',
      type: 'mcq',
      question: {
        en: '"Procedure established by law" in Article 21 is taken from:',
        hi: 'अनुच्छेद 21 में "विधि द्वारा स्थापित प्रक्रिया" किस देश से ली गई है:',
      },
      options: [
        { en: 'USA', hi: 'अमेरिका' },
        { en: 'Japan', hi: 'जापान' },
        { en: 'Germany', hi: 'जर्मनी' },
        { en: 'South Africa', hi: 'दक्षिण अफ्रीका' },
      ],
      answer: 1,
      explanation: {
        en: '"Procedure established by law" came from Japan. (The USA follows "due process of law" — a favourite comparison in exams.)',
        hi: '"विधि द्वारा स्थापित प्रक्रिया" जापान से ली गई। (अमेरिका में "विधि की सम्यक प्रक्रिया" है — परीक्षा में यह तुलना प्रिय है।)',
      },
      topic: 'polity-making',
      difficulty: 2,
    },
    {
      id: 'p2q10',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the Constituent Assembly:\n1. Its members were directly elected by the people of India.\n2. It was formed under the Cabinet Mission Plan of 1946.\nWhich is/are correct?',
        hi: 'संविधान सभा के बारे में निम्न कथनों पर विचार करें:\n1. इसके सदस्य भारत की जनता द्वारा प्रत्यक्ष रूप से चुने गए थे।\n2. इसका गठन 1946 की कैबिनेट मिशन योजना के अंतर्गत हुआ था।\nकौन-सा/से कथन सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Members were INDIRECTLY elected by provincial assemblies, so statement 1 is wrong; statement 2 is correct.',
        hi: 'सदस्य प्रांतीय विधानसभाओं द्वारा अप्रत्यक्ष रूप से चुने गए थे, अतः कथन 1 गलत; कथन 2 सही।',
      },
      topic: 'polity-making',
      difficulty: 2,
    },
  ],
};
