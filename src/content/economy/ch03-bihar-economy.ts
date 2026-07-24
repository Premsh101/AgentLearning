import type { Chapter } from '../types';

export const economyCh03: Chapter = {
  id: 'economy-ch03',
  subjectId: 'economy',
  order: 3,
  title: {
    en: 'The Economy of Bihar',
    hi: 'बिहार की अर्थव्यवस्था',
  },
  intro: {
    en: 'What kind of economy does Bihar have? In one word: **agrarian**. Most people still depend on farming, the state is one of India\'s most rural, and its industrial base is small. In this chapter we look at the **structure** of Bihar\'s economy — which sectors dominate, why industry stayed weak, why so many workers migrate for jobs, and where the real opportunities lie. Instead of chasing changing numbers, focus on these stable, structural facts — they are what BPSC actually tests.',
    hi: 'बिहार की अर्थव्यवस्था कैसी है? एक शब्द में: **कृषि-प्रधान**। अधिकांश लोग आज भी खेती पर निर्भर हैं, राज्य भारत के सबसे अधिक ग्रामीण राज्यों में से एक है, और इसका औद्योगिक आधार छोटा है। इस अध्याय में हम बिहार की अर्थव्यवस्था की **संरचना** देखेंगे — कौन-से क्षेत्रक प्रमुख हैं, उद्योग कमज़ोर क्यों रहा, इतने श्रमिक रोज़गार हेतु पलायन क्यों करते हैं, और असली अवसर कहाँ हैं। बदलते आँकड़ों के पीछे भागने के बजाय इन स्थिर, संरचनात्मक तथ्यों पर ध्यान दें — यही BPSC वास्तव में पूछता है।',
  },
  sections: [
    {
      id: 'agrarian',
      heading: { en: 'An Agrarian, Rural Economy', hi: 'कृषि-प्रधान, ग्रामीण अर्थव्यवस्था' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Bihar\'s economy is predominantly **agrarian** — **agriculture and allied activities** (farming, animal husbandry, fisheries) employ a very large share of the workforce. Bihar is also one of India\'s **most rural (least urbanised)** states, meaning most people live in villages and depend on the land for a living.',
            hi: 'बिहार की अर्थव्यवस्था मुख्यतः **कृषि-प्रधान** है — **कृषि व संबद्ध गतिविधियाँ** (खेती, पशुपालन, मत्स्यपालन) कार्यबल के बहुत बड़े हिस्से को रोज़गार देती हैं। बिहार भारत के **सबसे अधिक ग्रामीण (सबसे कम शहरीकृत)** राज्यों में से एक भी है, अर्थात् अधिकांश लोग गाँवों में रहते हैं और जीविका के लिए भूमि पर निर्भर हैं।',
          },
        },
        {
          type: 'list',
          items: [
            { en: 'The **primary sector (agriculture)** supports the livelihood of most households, even though its share in total output is smaller than the number of people it employs.', hi: '**प्राथमिक क्षेत्रक (कृषि)** अधिकांश परिवारों की जीविका का आधार है, यद्यपि कुल उत्पादन में इसका हिस्सा, इससे जुड़े लोगों की संख्या की तुलना में, छोटा है।' },
            { en: 'The land is **fertile** and watered by the **Ganga and its tributaries** — a natural strength for farming and food processing.', hi: 'भूमि **उपजाऊ** है और **गंगा व उसकी सहायक नदियों** द्वारा सिंचित — खेती व खाद्य प्रसंस्करण के लिए एक प्राकृतिक शक्ति।' },
            { en: 'Because farming dominates and cities are few, **rural jobs and farm incomes** shape the well-being of most people in the state.', hi: 'चूँकि खेती प्रमुख है और शहर कम हैं, **ग्रामीण रोज़गार व कृषि आय** ही राज्य के अधिकांश लोगों की समृद्धि तय करते हैं।' },
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Why this matters: because Bihar leans so heavily on agriculture, a good or bad monsoon can swing the fortunes of millions. Reducing this dependence by building industry and services is the central challenge of the state\'s economy — a favourite BPSC Mains theme.',
            hi: 'यह क्यों महत्वपूर्ण है: क्योंकि बिहार कृषि पर इतना अधिक निर्भर है, अच्छा या बुरा मानसून लाखों लोगों का भाग्य बदल सकता है। उद्योग व सेवाएँ खड़ी कर इस निर्भरता को कम करना राज्य की अर्थव्यवस्था की केंद्रीय चुनौती है — BPSC मुख्य परीक्षा का प्रिय विषय।',
          },
        },
      ],
    },
    {
      id: 'weak-industry',
      heading: { en: 'Why the Industrial Base is Small', hi: 'औद्योगिक आधार छोटा क्यों है' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Compared with the all-India pattern, Bihar has a relatively **small industrial and manufacturing base**. The single biggest reason is historical: when **Jharkhand was carved out of Bihar in 2000**, most of the **mines, minerals and heavy industries** went to Jharkhand. Bihar was left mainly with **agriculture** and very little mineral wealth or large industry.',
            hi: 'संपूर्ण भारत के पैटर्न की तुलना में, बिहार का **औद्योगिक व विनिर्माण आधार अपेक्षाकृत छोटा** है। सबसे बड़ा कारण ऐतिहासिक है: जब **वर्ष 2000 में बिहार से झारखंड अलग हुआ**, तब अधिकांश **खदानें, खनिज व भारी उद्योग** झारखंड के हिस्से में चले गए। बिहार के पास मुख्यतः **कृषि** बची और खनिज संपदा या बड़ा उद्योग बहुत कम रह गया।',
          },
        },
        {
          type: 'timeline',
          caption: {
            en: 'The 2000 bifurcation reshaped Bihar\'s economy.',
            hi: '2000 के विभाजन ने बिहार की अर्थव्यवस्था को नया आकार दिया।',
          },
          events: [
            { when: { en: 'Before 2000', hi: '2000 से पहले' }, label: { en: 'Undivided Bihar held both farmland and the mineral-rich, industrial belt of the south.', hi: 'अविभाजित बिहार में कृषि भूमि और दक्षिण की खनिज-समृद्ध, औद्योगिक पेटी दोनों थीं।' } },
            { when: { en: '2000', hi: '2000' }, label: { en: 'Jharkhand is created; mines, minerals and heavy industry move to the new state.', hi: 'झारखंड बना; खदानें, खनिज व भारी उद्योग नए राज्य में चले गए।' } },
            { when: { en: 'After 2000', hi: '2000 के बाद' }, label: { en: 'Bihar is left mainly agrarian, with a small industrial base to rebuild.', hi: 'बिहार मुख्यतः कृषि-प्रधान रह गया, जिसे पुनः खड़ा करने हेतु छोटा औद्योगिक आधार बचा।' } },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Trap to avoid: do NOT think Bihar\'s weak industry is only about "poor policy". The **loss of minerals and heavy industry to Jharkhand in 2000** is the key structural reason. Places like the steel and coal belt now lie in Jharkhand, not Bihar.',
            hi: 'बचने योग्य जाल: यह मत सोचिए कि बिहार का कमज़ोर उद्योग केवल "खराब नीति" का परिणाम है। **2000 में झारखंड को खनिज व भारी उद्योग का चला जाना** ही प्रमुख संरचनात्मक कारण है। इस्पात व कोयला पेटी जैसे क्षेत्र अब बिहार में नहीं, झारखंड में हैं।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Meanwhile, the **services sector** — trade, transport, construction, communication and public services — has been a **growing** part of Bihar\'s economy, helping to fill the gap left by weak manufacturing.',
            hi: 'इस बीच, **सेवा क्षेत्रक** — व्यापार, परिवहन, निर्माण, संचार व लोक सेवाएँ — बिहार की अर्थव्यवस्था का एक **बढ़ता** हिस्सा रहा है, जो कमज़ोर विनिर्माण से बने अंतर को भरने में सहायता करता है।',
          },
        },
      ],
    },
    {
      id: 'income-migration',
      heading: { en: 'Low Per-Capita Income, Migration & Remittances', hi: 'कम प्रति-व्यक्ति आय, पलायन व विप्रेषण' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Historically, Bihar has had one of the **lowest per-capita incomes** among Indian states. Encouragingly, its economy has been **growing at a healthy pace** in recent years, but incomes still lag behind the national average. A weak industrial base and heavy dependence on farming mean there are **not enough jobs** at home for the state\'s large workforce.',
            hi: 'ऐतिहासिक रूप से, बिहार की भारतीय राज्यों में **सबसे कम प्रति-व्यक्ति आय** में से एक रही है। उत्साहजनक बात यह है कि हाल के वर्षों में इसकी अर्थव्यवस्था **स्वस्थ गति से बढ़ रही है**, फिर भी आय राष्ट्रीय औसत से पीछे है। कमज़ोर औद्योगिक आधार व खेती पर भारी निर्भरता का अर्थ है कि राज्य के बड़े कार्यबल के लिए घर पर **पर्याप्त रोज़गार नहीं** हैं।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'As a result, **out-migration** of workers to other states — such as Delhi, Punjab, Maharashtra and Gujarat — is a major feature of Bihar\'s economy. The money these workers send back home, called **remittances**, is an important source of income for many households.',
            hi: 'परिणामस्वरूप, श्रमिकों का अन्य राज्यों — जैसे दिल्ली, पंजाब, महाराष्ट्र व गुजरात — की ओर **पलायन (आउट-माइग्रेशन)** बिहार की अर्थव्यवस्था की एक प्रमुख विशेषता है। ये श्रमिक जो धन घर वापस भेजते हैं, उसे **विप्रेषण (रेमिटेंस)** कहते हैं, जो कई परिवारों के लिए आय का एक महत्वपूर्ण स्रोत है।',
          },
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of remittances like rain from a distant cloud: the workers earn in far-off states, but the money "rains" back on Bihar\'s villages — paying for food, education and homes. It supports families, yet it also signals that jobs are missing at home.',
            hi: 'विप्रेषण को दूर के बादल से हुई वर्षा समझिए: श्रमिक दूर के राज्यों में कमाते हैं, पर धन बिहार के गाँवों पर वापस "बरसता" है — भोजन, शिक्षा व घरों का खर्च चलाता है। यह परिवारों को सहारा देता है, फिर भी संकेत करता है कि घर पर रोज़गार की कमी है।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Key source: the **Bihar Economic Survey** is a document published **every year** by the **Finance Department of the Government of Bihar**. It reviews the state\'s economy sector by sector and is the standard reference for facts about Bihar\'s economy.',
            hi: 'प्रमुख स्रोत: **बिहार आर्थिक सर्वेक्षण** एक दस्तावेज़ है जो **प्रतिवर्ष** **बिहार सरकार के वित्त विभाग** द्वारा प्रकाशित किया जाता है। यह राज्य की अर्थव्यवस्था की क्षेत्रवार समीक्षा करता है और बिहार की अर्थव्यवस्था संबंधी तथ्यों का मानक संदर्भ है।',
          },
        },
      ],
    },
    {
      id: 'strengths',
      heading: { en: 'Strengths and Opportunities', hi: 'शक्तियाँ व अवसर' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Bihar\'s economy is not only about challenges — it has real strengths that can drive future growth if used well.',
            hi: 'बिहार की अर्थव्यवस्था केवल चुनौतियों की कहानी नहीं है — इसमें वास्तविक शक्तियाँ हैं जो सही उपयोग से भविष्य के विकास को गति दे सकती हैं।',
          },
        },
        {
          type: 'list',
          items: [
            { en: '**Fertile land and abundant water** — ideal for agriculture and for **food processing** industries that add value to crops.', hi: '**उपजाऊ भूमि व प्रचुर जल** — कृषि के लिए और फसलों में मूल्य जोड़ने वाले **खाद्य प्रसंस्करण** उद्योगों के लिए आदर्श।' },
            { en: '**Horticulture** — Bihar is famous for **litchi** (especially Muzaffarpur) and **makhana** (fox nuts), high-value crops with strong market demand.', hi: '**बागवानी** — बिहार **लीची** (विशेषकर मुज़फ़्फ़रपुर) व **मखाना** के लिए प्रसिद्ध है, ये उच्च-मूल्य वाली फसलें हैं जिनकी बाज़ार में तगड़ी माँग है।' },
            { en: 'A **large, young workforce** — a demographic advantage that can power industry and services if skilled and employed.', hi: 'एक **बड़ा, युवा कार्यबल** — एक जनसांख्यिकीय लाभ जो कुशल व नियोजित होने पर उद्योग व सेवाओं को शक्ति दे सकता है।' },
            { en: '**Improving connectivity** — better roads, bridges and power can attract investment and reduce the need to migrate.', hi: '**बेहतर होती कनेक्टिविटी** — उन्नत सड़कें, पुल व बिजली निवेश आकर्षित कर सकते हैं और पलायन की आवश्यकता घटा सकते हैं।' },
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Memory hook for Bihar\'s farm identity — **"Litchi & Makhana"**: Litchi (Muzaffarpur) and Makhana (Mithila region) are the two crops examiners love to link to Bihar. Tie them to **food processing** and you have a ready Mains point on turning agriculture into industry.',
            hi: 'बिहार की कृषि पहचान का स्मृति सूत्र — **"लीची व मखाना"**: लीची (मुज़फ़्फ़रपुर) व मखाना (मिथिला क्षेत्र) वे दो फसलें हैं जिन्हें परीक्षक बिहार से जोड़ना पसंद करते हैं। इन्हें **खाद्य प्रसंस्करण** से जोड़िए और कृषि को उद्योग में बदलने पर एक तैयार मुख्य-परीक्षा बिंदु मिल जाता है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Bihar\'s economy is predominantly **agrarian** and the state is one of India\'s **most rural (least urbanised)**.',
      hi: 'बिहार की अर्थव्यवस्था मुख्यतः **कृषि-प्रधान** है और राज्य भारत के **सबसे अधिक ग्रामीण (सबसे कम शहरीकृत)** राज्यों में से एक है।',
    },
    {
      en: 'The **industrial base is small**, mainly because **mines, minerals and heavy industry went to Jharkhand in 2000**.',
      hi: '**औद्योगिक आधार छोटा** है, मुख्यतः क्योंकि **2000 में खदानें, खनिज व भारी उद्योग झारखंड को चले गए**।',
    },
    {
      en: 'The **services sector** (trade, transport, construction) has been a **growing** part of the economy.',
      hi: '**सेवा क्षेत्रक** (व्यापार, परिवहन, निर्माण) अर्थव्यवस्था का एक **बढ़ता** हिस्सा रहा है।',
    },
    {
      en: 'Bihar has one of the **lowest per-capita incomes**, though its economy has grown at a healthy pace recently.',
      hi: 'बिहार की **सबसे कम प्रति-व्यक्ति आय** में से एक है, यद्यपि हाल में इसकी अर्थव्यवस्था स्वस्थ गति से बढ़ी है।',
    },
    {
      en: '**Out-migration** for jobs is a major feature; **remittances** sent home support many households.',
      hi: 'रोज़गार हेतु **पलायन** एक प्रमुख विशेषता है; घर भेजा गया **विप्रेषण** कई परिवारों को सहारा देता है।',
    },
    {
      en: 'The **Bihar Economic Survey** is published **every year** by the **Finance Department, Government of Bihar**.',
      hi: '**बिहार आर्थिक सर्वेक्षण** **प्रतिवर्ष** **बिहार सरकार के वित्त विभाग** द्वारा प्रकाशित होता है।',
    },
    {
      en: 'Strengths: fertile land & water, **food processing**, horticulture (**litchi, makhana**), a large young workforce, better connectivity.',
      hi: 'शक्तियाँ: उपजाऊ भूमि व जल, **खाद्य प्रसंस्करण**, बागवानी (**लीची, मखाना**), बड़ा युवा कार्यबल, बेहतर कनेक्टिविटी।',
    },
  ],
  quiz: [
    {
      id: 'e3q1',
      type: 'mcq',
      question: {
        en: 'Which sector dominates the economy of Bihar in terms of employment?',
        hi: 'रोज़गार की दृष्टि से बिहार की अर्थव्यवस्था में कौन-सा क्षेत्रक प्रमुख है?',
      },
      options: [
        { en: 'Agriculture (primary)', hi: 'कृषि (प्राथमिक)' },
        { en: 'Manufacturing (secondary)', hi: 'विनिर्माण (द्वितीयक)' },
        { en: 'Information technology', hi: 'सूचना प्रौद्योगिकी' },
        { en: 'Mining', hi: 'खनन' },
      ],
      answer: 0,
      explanation: {
        en: 'Bihar\'s economy is predominantly agrarian — agriculture and allied activities employ a very large share of the workforce.',
        hi: 'बिहार की अर्थव्यवस्था मुख्यतः कृषि-प्रधान है — कृषि व संबद्ध गतिविधियाँ कार्यबल के बहुत बड़े हिस्से को रोज़गार देती हैं।',
      },
      topic: 'economy-bihar',
      difficulty: 1,
    },
    {
      id: 'e3q2',
      type: 'mcq',
      question: {
        en: 'The industrial base of Bihar is relatively small mainly because:',
        hi: 'बिहार का औद्योगिक आधार अपेक्षाकृत छोटा मुख्यतः इसलिए है क्योंकि:',
      },
      options: [
        { en: 'Bihar has no rivers or water', hi: 'बिहार में कोई नदी या जल नहीं है' },
        { en: 'Most mines, minerals and heavy industry went to Jharkhand in 2000', hi: '2000 में अधिकांश खदानें, खनिज व भारी उद्योग झारखंड को चले गए' },
        { en: 'Bihar is fully urbanised', hi: 'बिहार पूर्णतः शहरीकृत है' },
        { en: 'Farming is banned in the state', hi: 'राज्य में खेती प्रतिबंधित है' },
      ],
      answer: 1,
      explanation: {
        en: 'When Jharkhand was separated from Bihar in 2000, most mines, minerals and heavy industries went to Jharkhand, leaving Bihar mainly with agriculture.',
        hi: 'जब 2000 में बिहार से झारखंड अलग हुआ, तब अधिकांश खदानें, खनिज व भारी उद्योग झारखंड को चले गए, जिससे बिहार के पास मुख्यतः कृषि बची।',
      },
      topic: 'economy-bihar',
      difficulty: 1,
    },
    {
      id: 'e3q3',
      type: 'mcq',
      question: {
        en: 'The Bihar Economic Survey is published every year by which body?',
        hi: 'बिहार आर्थिक सर्वेक्षण प्रतिवर्ष किस निकाय द्वारा प्रकाशित किया जाता है?',
      },
      options: [
        { en: 'NITI Aayog', hi: 'नीति आयोग' },
        { en: 'Reserve Bank of India', hi: 'भारतीय रिज़र्व बैंक' },
        { en: 'Finance Department, Government of Bihar', hi: 'वित्त विभाग, बिहार सरकार' },
        { en: 'Ministry of Agriculture, Government of India', hi: 'कृषि मंत्रालय, भारत सरकार' },
      ],
      answer: 2,
      explanation: {
        en: 'The Bihar Economic Survey is published annually by the Finance Department of the Government of Bihar and reviews the state\'s economy.',
        hi: 'बिहार आर्थिक सर्वेक्षण प्रतिवर्ष बिहार सरकार के वित्त विभाग द्वारा प्रकाशित होता है और राज्य की अर्थव्यवस्था की समीक्षा करता है।',
      },
      topic: 'economy-bihar',
      difficulty: 2,
    },
    {
      id: 'e3q4',
      type: 'mcq',
      question: {
        en: 'The money that migrant workers send back to their families in Bihar is called:',
        hi: 'प्रवासी श्रमिक अपने बिहार स्थित परिवारों को जो धन वापस भेजते हैं, उसे कहते हैं:',
      },
      options: [
        { en: 'Subsidies', hi: 'सब्सिडी (अनुदान)' },
        { en: 'Remittances', hi: 'विप्रेषण (रेमिटेंस)' },
        { en: 'Tariffs', hi: 'प्रशुल्क (टैरिफ)' },
        { en: 'Dividends', hi: 'लाभांश' },
      ],
      answer: 1,
      explanation: {
        en: 'Money sent home by migrant workers is called remittances — an important source of income for many households in Bihar.',
        hi: 'प्रवासी श्रमिकों द्वारा घर भेजे गए धन को विप्रेषण कहते हैं — बिहार के कई परिवारों के लिए आय का महत्वपूर्ण स्रोत।',
      },
      topic: 'economy-bihar',
      difficulty: 1,
    },
    {
      id: 'e3q5',
      type: 'mcq',
      question: {
        en: 'Litchi and makhana, high-value crops associated with Bihar, are examples of:',
        hi: 'लीची व मखाना, बिहार से जुड़ी उच्च-मूल्य वाली फसलें, किसके उदाहरण हैं?',
      },
      options: [
        { en: 'Horticulture', hi: 'बागवानी' },
        { en: 'Heavy industry', hi: 'भारी उद्योग' },
        { en: 'Mining products', hi: 'खनन उत्पाद' },
        { en: 'Software services', hi: 'सॉफ्टवेयर सेवाएँ' },
      ],
      answer: 0,
      explanation: {
        en: 'Litchi (Muzaffarpur) and makhana are horticultural crops — a key strength that can feed food-processing industry in Bihar.',
        hi: 'लीची (मुज़फ़्फ़रपुर) व मखाना बागवानी फसलें हैं — एक प्रमुख शक्ति जो बिहार में खाद्य प्रसंस्करण उद्योग को आधार दे सकती है।',
      },
      topic: 'economy-bihar',
      difficulty: 2,
    },
    {
      id: 'e3q6',
      type: 'statement',
      question: {
        en: 'Consider the following statements about Bihar\'s economy:\n1. Bihar is one of the most urbanised states of India.\n2. Bihar has one of the lowest per-capita incomes among Indian states.\nWhich is/are correct?',
        hi: 'बिहार की अर्थव्यवस्था के बारे में निम्न कथनों पर विचार करें:\n1. बिहार भारत के सबसे अधिक शहरीकृत राज्यों में से एक है।\n2. बिहार की भारतीय राज्यों में सबसे कम प्रति-व्यक्ति आय में से एक है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — Bihar is one of the most rural (least urbanised) states. Statement 2 is correct — Bihar has one of the lowest per-capita incomes.',
        hi: 'कथन 1 गलत है — बिहार सबसे अधिक ग्रामीण (सबसे कम शहरीकृत) राज्यों में से एक है। कथन 2 सही है — बिहार की प्रति-व्यक्ति आय सबसे कम में से एक है।',
      },
      topic: 'economy-bihar',
      difficulty: 2,
    },
    {
      id: 'e3q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. The services sector has been a growing part of Bihar\'s economy.\n2. Out-migration of workers to other states is a significant feature of Bihar\'s economy.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. सेवा क्षेत्रक बिहार की अर्थव्यवस्था का बढ़ता हिस्सा रहा है।\n2. श्रमिकों का अन्य राज्यों की ओर पलायन बिहार की अर्थव्यवस्था की एक महत्वपूर्ण विशेषता है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct — services have been growing, and out-migration with remittances is a well-known feature of Bihar\'s economy.',
        hi: 'दोनों सही हैं — सेवाएँ बढ़ती रही हैं, और विप्रेषण सहित पलायन बिहार की अर्थव्यवस्था की सुविख्यात विशेषता है।',
      },
      topic: 'economy-bihar',
      difficulty: 3,
    },
    {
      id: 'e3q8',
      type: 'mcq',
      question: {
        en: 'Which of the following is a natural strength of Bihar\'s economy?',
        hi: 'निम्न में से कौन बिहार की अर्थव्यवस्था की एक प्राकृतिक शक्ति है?',
      },
      options: [
        { en: 'Vast coal and iron-ore mines', hi: 'विशाल कोयला व लौह-अयस्क खदानें' },
        { en: 'Fertile land and abundant river water', hi: 'उपजाऊ भूमि व प्रचुर नदी जल' },
        { en: 'A very high level of urbanisation', hi: 'बहुत उच्च स्तर का शहरीकरण' },
        { en: 'A large petroleum reserve', hi: 'एक बड़ा पेट्रोलियम भंडार' },
      ],
      answer: 1,
      explanation: {
        en: 'Fertile land watered by the Ganga and its tributaries is a key natural strength, ideal for agriculture and food processing. Bihar\'s mineral wealth largely went to Jharkhand in 2000.',
        hi: 'गंगा व उसकी सहायक नदियों से सिंचित उपजाऊ भूमि एक प्रमुख प्राकृतिक शक्ति है, जो कृषि व खाद्य प्रसंस्करण के लिए आदर्श है। बिहार की खनिज संपदा 2000 में मुख्यतः झारखंड को चली गई।',
      },
      topic: 'economy-bihar',
      difficulty: 1,
    },
  ],
};
