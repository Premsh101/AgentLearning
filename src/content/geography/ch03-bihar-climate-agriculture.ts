import type { Chapter } from '../types';

export const geographyCh03: Chapter = {
  id: 'geography-ch03',
  subjectId: 'geography',
  order: 3,
  title: {
    en: 'Climate, Soils & Agriculture of Bihar',
    hi: 'बिहार की जलवायु, मिट्टी एवं कृषि',
  },
  intro: {
    en: 'Bihar lives by the monsoon. Rain arriving from the Bay of Bengal fills the rivers, floods the north, and decides whether the crops grow. On top of the **fertile alluvial soil** left by those rivers, farmers raise paddy, wheat and maize — and Bihar quietly leads India in two special crops: **litchi** and **makhana**. Learn the seasons, the soil and the star crops, and this chapter is easy marks.',
    hi: 'बिहार मानसून के भरोसे जीता है। बंगाल की खाड़ी से आती वर्षा नदियों को भरती है, उत्तर में बाढ़ लाती है, और तय करती है कि फसल उगेगी या नहीं। उन्हीं नदियों की छोड़ी **उपजाऊ जलोढ़ मिट्टी** पर किसान धान, गेहूँ व मक्का उगाते हैं — और बिहार चुपचाप दो विशेष फसलों में भारत में अग्रणी है: **लीची** व **मखाना**। ऋतुएँ, मिट्टी व प्रमुख फसलें सीख लें, तो यह अध्याय आसान अंक है।',
  },
  sections: [
    {
      id: 'climate',
      heading: { en: 'Climate', hi: 'जलवायु' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Bihar has a **subtropical monsoon climate** — hot summers, a rainy south-west monsoon season, and mild winters. **Most of the year\'s rainfall is concentrated in the monsoon** (June–September), which comes mainly from the **Bay of Bengal branch** of the monsoon.',
            hi: 'बिहार की जलवायु **उपोष्ण मानसूनी** है — गर्म ग्रीष्म, वर्षा-युक्त दक्षिण-पश्चिम मानसून ऋतु, व हल्के शीत। **वर्ष की अधिकांश वर्षा मानसून में केंद्रित रहती है** (जून–सितंबर), जो मुख्यतः मानसून की **बंगाल की खाड़ी शाखा** से आती है।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Rainfall is not the same everywhere. **North Bihar generally gets more rain and faces floods**, while parts of **south Bihar are drier and more drought-prone**. So the same monsoon that drowns the north can leave the south thirsty.',
            hi: 'वर्षा हर जगह समान नहीं है। **उत्तर बिहार में सामान्यतः अधिक वर्षा होती है और बाढ़ आती है**, जबकि **दक्षिण बिहार के कुछ भाग शुष्क व अधिक सूखा-प्रवण** हैं। अतः जो मानसून उत्तर को डुबोता है, वही दक्षिण को प्यासा छोड़ सकता है।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Since **most rain falls in a few monsoon months**, both farming and floods depend on it. A good monsoon means a good harvest; a weak or uneven one means drought in the south and, ironically, floods in the north. That is why monsoon dependence is Bihar\'s single biggest agricultural risk.',
            hi: 'चूँकि **अधिकांश वर्षा कुछ मानसूनी महीनों में ही होती है**, खेती व बाढ़ दोनों उसी पर निर्भर हैं। अच्छा मानसून = अच्छी फसल; कमज़ोर या असमान मानसून = दक्षिण में सूखा और विडंबना यह कि उत्तर में बाढ़। इसीलिए मानसून-निर्भरता बिहार का सबसे बड़ा कृषि-जोखिम है।',
          },
        },
      ],
    },
    {
      id: 'soils',
      heading: { en: 'Soils', hi: 'मिट्टी' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The dominant soil of Bihar is fertile **alluvial soil**, deposited by the rivers over thousands of years. This rich soil is the reason Bihar is a strong agricultural state.',
            hi: 'बिहार की प्रमुख मिट्टी उपजाऊ **जलोढ़ मिट्टी** है, जिसे नदियों ने हज़ारों वर्षों में जमा किया है। यही समृद्ध मिट्टी बिहार को एक सशक्त कृषि राज्य बनाती है।',
          },
        },
        {
          type: 'list',
          items: [
            {
              en: '**Khadar** — the *newer* alluvium found near the rivers. It is renewed by fresh silt every flood and is very fertile.',
              hi: '**खादर** — नदियों के निकट पाई जाने वाली *नई* जलोढ़। हर बाढ़ में ताज़ी गाद से नवीनीकृत होती है और बहुत उपजाऊ होती है।',
            },
            {
              en: '**Bhangar** — the *older* alluvium found away from the rivers, on slightly higher ground.',
              hi: '**बांगर** — नदियों से दूर, कुछ ऊँची भूमि पर पाई जाने वाली *पुरानी* जलोढ़।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember by the first letters: **Khadar = Kachcha/new (near river)**, **Bhangar = old (away, on higher "bank")**. "New water reaches the Khadar near the flow; the old Bhangar sits back on the bank."',
            hi: 'पहले अक्षरों से याद रखें: **खादर = नई (नदी के पास)**, **बांगर = पुरानी (दूर, ऊँचे किनारे पर)**। "नई खादर बहाव के पास; पुरानी बांगर पीछे किनारे पर बैठी।"',
          },
        },
      ],
    },
    {
      id: 'agriculture',
      heading: { en: 'Agriculture & Cropping Seasons', hi: 'कृषि व फसल ऋतुएँ' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '**Agriculture is the mainstay of Bihar\'s economy** and employs most of the population. Farming follows three cropping seasons through the year.',
            hi: '**कृषि बिहार की अर्थव्यवस्था की रीढ़ है** और अधिकांश जनसंख्या को रोज़गार देती है। खेती वर्ष भर तीन फसल ऋतुओं के अनुसार होती है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The three cropping seasons', hi: 'तीन फसल ऋतुएँ' },
          headers: [
            { en: 'Season', hi: 'ऋतु' },
            { en: 'When sown', hi: 'कब बोई जाती है' },
            { en: 'Main crops', hi: 'प्रमुख फसलें' },
          ],
          rows: [
            [
              { en: '**Kharif**', hi: '**खरीफ**' },
              { en: 'Sown with the monsoon (around June–July)', hi: 'मानसून के साथ बोई जाती है (लगभग जून–जुलाई)' },
              { en: 'Rice (paddy), maize', hi: 'चावल (धान), मक्का' },
            ],
            [
              { en: '**Rabi**', hi: '**रबी**' },
              { en: 'Sown in winter (around October–November)', hi: 'शीत में बोई जाती है (लगभग अक्टूबर–नवंबर)' },
              { en: 'Wheat, gram, mustard', hi: 'गेहूँ, चना, सरसों' },
            ],
            [
              { en: '**Zaid**', hi: '**ज़ायद**' },
              { en: 'Grown in summer, between rabi and kharif', hi: 'ग्रीष्म में, रबी व खरीफ के बीच उगाई जाती है' },
              { en: 'Short-duration summer crops (e.g. vegetables, melons)', hi: 'अल्पावधि ग्रीष्मकालीन फसलें (जैसे सब्ज़ियाँ, खरबूजा-तरबूज)' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: '**"KaRZ"** helps you order the seasons: **Ka**rif (monsoon) → **R**abi (winter) → **Z**aid (summer). Also link crops: Kharif = **rice** (needs water/rain), Rabi = **wheat** (needs cool weather).',
            hi: 'ऋतुओं का क्रम याद रखने हेतु **"ख–र–ज़ा"**: **ख**रीफ (मानसून) → **र**बी (शीत) → **ज़ा**यद (ग्रीष्म)। फसलें भी जोड़ें: खरीफ = **धान** (पानी/वर्षा चाहिए), रबी = **गेहूँ** (ठंडा मौसम चाहिए)।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The main **food crops** are **rice (paddy), wheat and maize**. Bihar also grows **pulses**, **sugarcane**, and **jute** (mainly in the north-east).',
            hi: 'प्रमुख **खाद्य फसलें** हैं **चावल (धान), गेहूँ व मक्का**। बिहार में **दलहन**, **गन्ना**, तथा **जूट** (मुख्यतः उत्तर-पूर्व में) भी उगाया जाता है।',
          },
        },
      ],
    },
    {
      id: 'horticulture',
      heading: { en: 'Horticulture: Litchi & Makhana', hi: 'बागवानी: लीची व मखाना' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Bihar is famous for **horticulture**. It is a leading producer of two special crops that give the state its identity in national markets.',
            hi: 'बिहार **बागवानी** के लिए प्रसिद्ध है। यह दो विशेष फसलों का अग्रणी उत्पादक है, जो राष्ट्रीय बाज़ारों में राज्य को पहचान देती हैं।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Bihar\'s famous horticulture crops', hi: 'बिहार की प्रसिद्ध बागवानी फसलें' },
          headers: [
            { en: 'Crop', hi: 'फसल' },
            { en: 'Known for / region', hi: 'किसके लिए / क्षेत्र' },
          ],
          rows: [
            [
              { en: '**Litchi**', hi: '**लीची**' },
              { en: 'Leading producer; famous **Shahi Litchi of Muzaffarpur**', hi: 'अग्रणी उत्पादक; प्रसिद्ध **मुजफ्फरपुर की शाही लीची**' },
            ],
            [
              { en: '**Makhana** (fox nut / gorgon nut)', hi: '**मखाना** (फॉक्स नट / गोरगन नट)' },
              { en: 'Produces the large majority of India\'s makhana; **Mithila region (Darbhanga/Madhubani)**', hi: 'भारत के अधिकांश मखाने का उत्पादन; **मिथिला क्षेत्र (दरभंगा/मधुबनी)**' },
            ],
            [
              { en: '**Mango**', hi: '**आम**' },
              { en: 'Famous **Jardalu mango of Bhagalpur**', hi: 'प्रसिद्ध **भागलपुर का जर्दालु आम**' },
            ],
            [
              { en: '**Banana**', hi: '**केला**' },
              { en: 'Widely grown fruit crop', hi: 'व्यापक रूप से उगाई जाने वाली फल फसल' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'story',
          text: {
            en: 'When you eat a bowl of crunchy makhana, chances are it came from Bihar\'s **Mithila** — the ponds of **Darbhanga and Madhubani** grow the large majority of India\'s makhana. And in summer, the sweet **Shahi Litchi of Muzaffarpur** travels across the country. Two humble crops, one state at the top.',
            hi: 'जब आप कुरकुरे मखाने का कटोरा खाते हैं, तो संभवतः वह बिहार के **मिथिला** से आया है — **दरभंगा व मधुबनी** के तालाब भारत के अधिकांश मखाने उगाते हैं। और ग्रीष्म में **मुजफ्फरपुर की मीठी शाही लीची** पूरे देश में पहुँचती है। दो साधारण फसलें, एक राज्य शीर्ष पर।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'Despite this strength, Bihar\'s agriculture faces real **challenges**: heavy **dependence on the monsoon**, recurring **floods in north Bihar** (from Himalayan rivers like the **Kosi**), **small and fragmented landholdings**, and **low mechanisation**.',
            hi: 'इस सामर्थ्य के बावजूद बिहार की कृषि के सामने वास्तविक **चुनौतियाँ** हैं: भारी **मानसून-निर्भरता**, उत्तर बिहार में बार-बार आने वाली **बाढ़** (**कोसी** जैसी हिमालयी नदियों से), **छोटी व बिखरी जोतें**, तथा **कम यंत्रीकरण**।',
          },
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Do not mix up the two star crops with their regions: **Litchi → Muzaffarpur** (Shahi Litchi), **Makhana → Mithila / Darbhanga–Madhubani**. Also, **Jardalu mango → Bhagalpur**. Examiners love swapping these place names.',
            hi: 'दोनों प्रमुख फसलों को उनके क्षेत्रों से न मिलाएँ: **लीची → मुजफ्फरपुर** (शाही लीची), **मखाना → मिथिला / दरभंगा–मधुबनी**। साथ ही, **जर्दालु आम → भागलपुर**। परीक्षक इन स्थान-नामों को आपस में बदलना पसंद करते हैं।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Bihar has a **subtropical monsoon climate**; most rainfall comes in the **south-west monsoon (June–September)**, mainly from the **Bay of Bengal branch**.',
      hi: 'बिहार की जलवायु **उपोष्ण मानसूनी** है; अधिकांश वर्षा **दक्षिण-पश्चिम मानसून (जून–सितंबर)** में होती है, मुख्यतः **बंगाल की खाड़ी शाखा** से।',
    },
    {
      en: '**North Bihar** = more rain and floods; parts of **south Bihar** = drier and drought-prone.',
      hi: '**उत्तर बिहार** = अधिक वर्षा व बाढ़; **दक्षिण बिहार** के भाग = शुष्क व सूखा-प्रवण।',
    },
    {
      en: 'The dominant soil is fertile **alluvial** — **khadar** (newer, near rivers) and **bhangar** (older, away from rivers).',
      hi: 'प्रमुख मिट्टी उपजाऊ **जलोढ़** है — **खादर** (नई, नदियों के पास) व **बांगर** (पुरानी, नदियों से दूर)।',
    },
    {
      en: 'Three cropping seasons: **Kharif** (rice, maize), **Rabi** (wheat, gram, mustard), **Zaid** (summer crops).',
      hi: 'तीन फसल ऋतुएँ: **खरीफ** (धान, मक्का), **रबी** (गेहूँ, चना, सरसों), **ज़ायद** (ग्रीष्मकालीन फसलें)।',
    },
    {
      en: 'Main food crops = **rice, wheat, maize**; also **pulses, sugarcane, jute** (north-east). Agriculture is the **mainstay of the economy**.',
      hi: 'प्रमुख खाद्य फसलें = **चावल, गेहूँ, मक्का**; साथ ही **दलहन, गन्ना, जूट** (उत्तर-पूर्व)। कृषि **अर्थव्यवस्था की रीढ़** है।',
    },
    {
      en: 'Bihar leads India in **litchi** (**Shahi Litchi, Muzaffarpur**) and **makhana** (**Mithila — Darbhanga/Madhubani**); also known for **Jardalu mango (Bhagalpur)** and banana.',
      hi: 'बिहार **लीची** (**शाही लीची, मुजफ्फरपुर**) व **मखाना** (**मिथिला — दरभंगा/मधुबनी**) में भारत में अग्रणी है; **जर्दालु आम (भागलपुर)** व केले के लिए भी प्रसिद्ध।',
    },
    {
      en: 'Key challenges: **monsoon dependence**, **north Bihar floods (Kosi)**, **small/fragmented landholdings**, and **low mechanisation**.',
      hi: 'मुख्य चुनौतियाँ: **मानसून-निर्भरता**, **उत्तर बिहार की बाढ़ (कोसी)**, **छोटी/बिखरी जोतें**, व **कम यंत्रीकरण**।',
    },
  ],
  quiz: [
    {
      id: 'g3q1',
      type: 'mcq',
      question: {
        en: 'What type of climate does Bihar have?',
        hi: 'बिहार की जलवायु किस प्रकार की है?',
      },
      options: [
        { en: 'Arid desert climate', hi: 'शुष्क मरुस्थलीय जलवायु' },
        { en: 'Subtropical monsoon climate', hi: 'उपोष्ण मानसूनी जलवायु' },
        { en: 'Equatorial climate', hi: 'विषुवतीय जलवायु' },
        { en: 'Cold alpine climate', hi: 'ठंडी अल्पाइन जलवायु' },
      ],
      answer: 1,
      explanation: {
        en: 'Bihar has a subtropical monsoon climate — hot summers, a rainy south-west monsoon, and mild winters.',
        hi: 'बिहार की जलवायु उपोष्ण मानसूनी है — गर्म ग्रीष्म, वर्षा-युक्त दक्षिण-पश्चिम मानसून, व हल्के शीत।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 1,
    },
    {
      id: 'g3q2',
      type: 'mcq',
      question: {
        en: 'The dominant soil found in Bihar is:',
        hi: 'बिहार में पाई जाने वाली प्रमुख मिट्टी है:',
      },
      options: [
        { en: 'Laterite soil', hi: 'लैटेराइट मिट्टी' },
        { en: 'Black (regur) soil', hi: 'काली (रेगुर) मिट्टी' },
        { en: 'Alluvial soil', hi: 'जलोढ़ मिट्टी' },
        { en: 'Desert sandy soil', hi: 'मरुस्थलीय बलुई मिट्टी' },
      ],
      answer: 2,
      explanation: {
        en: 'The dominant soil is fertile alluvial soil deposited by the rivers, which makes Bihar a strong agricultural state.',
        hi: 'प्रमुख मिट्टी नदियों द्वारा जमा उपजाऊ जलोढ़ मिट्टी है, जो बिहार को एक सशक्त कृषि राज्य बनाती है।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 1,
    },
    {
      id: 'g3q3',
      type: 'mcq',
      question: {
        en: 'Newer alluvium found near the rivers is called:',
        hi: 'नदियों के निकट पाई जाने वाली नई जलोढ़ को कहते हैं:',
      },
      options: [
        { en: 'Bhangar', hi: 'बांगर' },
        { en: 'Khadar', hi: 'खादर' },
        { en: 'Regur', hi: 'रेगुर' },
        { en: 'Bhabar', hi: 'भाबर' },
      ],
      answer: 1,
      explanation: {
        en: 'Newer alluvium near the rivers is called khadar; older alluvium away from the rivers is called bhangar.',
        hi: 'नदियों के निकट की नई जलोढ़ को खादर कहते हैं; नदियों से दूर की पुरानी जलोढ़ को बांगर कहते हैं।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 2,
    },
    {
      id: 'g3q4',
      type: 'mcq',
      question: {
        en: 'Which crop is grown mainly in the Kharif (monsoon) season in Bihar?',
        hi: 'बिहार में खरीफ (मानसून) ऋतु में मुख्यतः कौन-सी फसल उगाई जाती है?',
      },
      options: [
        { en: 'Wheat', hi: 'गेहूँ' },
        { en: 'Gram', hi: 'चना' },
        { en: 'Rice (paddy)', hi: 'चावल (धान)' },
        { en: 'Mustard', hi: 'सरसों' },
      ],
      answer: 2,
      explanation: {
        en: 'Rice (paddy) and maize are the main Kharif crops, sown with the monsoon. Wheat, gram and mustard are Rabi (winter) crops.',
        hi: 'चावल (धान) व मक्का मुख्य खरीफ फसलें हैं, जो मानसून के साथ बोई जाती हैं। गेहूँ, चना व सरसों रबी (शीत) फसलें हैं।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 2,
    },
    {
      id: 'g3q5',
      type: 'mcq',
      question: {
        en: 'Bihar is the leading Indian producer of makhana (fox nut), grown mostly in which region?',
        hi: 'बिहार मखाना (फॉक्स नट) का भारत में अग्रणी उत्पादक है, जो अधिकांशतः किस क्षेत्र में उगाया जाता है?',
      },
      options: [
        { en: 'Magadh region', hi: 'मगध क्षेत्र' },
        { en: 'Mithila region (Darbhanga/Madhubani)', hi: 'मिथिला क्षेत्र (दरभंगा/मधुबनी)' },
        { en: 'Bhojpur region', hi: 'भोजपुर क्षेत्र' },
        { en: 'Champaran region', hi: 'चंपारण क्षेत्र' },
      ],
      answer: 1,
      explanation: {
        en: 'Bihar produces the large majority of India\'s makhana, mostly in the Mithila region — Darbhanga and Madhubani.',
        hi: 'बिहार भारत के अधिकांश मखाने का उत्पादन करता है, मुख्यतः मिथिला क्षेत्र — दरभंगा व मधुबनी में।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 2,
    },
    {
      id: 'g3q6',
      type: 'mcq',
      question: {
        en: 'The famous "Shahi Litchi" is associated with which district of Bihar?',
        hi: 'प्रसिद्ध "शाही लीची" बिहार के किस ज़िले से संबंधित है?',
      },
      options: [
        { en: 'Muzaffarpur', hi: 'मुजफ्फरपुर' },
        { en: 'Bhagalpur', hi: 'भागलपुर' },
        { en: 'Gaya', hi: 'गया' },
        { en: 'Patna', hi: 'पटना' },
      ],
      answer: 0,
      explanation: {
        en: 'Bihar is a leading producer of litchi, and the Shahi Litchi of Muzaffarpur is especially famous. (Bhagalpur is known for the Jardalu mango.)',
        hi: 'बिहार लीची का अग्रणी उत्पादक है, और मुजफ्फरपुर की शाही लीची विशेष रूप से प्रसिद्ध है। (भागलपुर जर्दालु आम के लिए जाना जाता है।)',
      },
      topic: 'geography-bihar-agri',
      difficulty: 2,
    },
    {
      id: 'g3q7',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. North Bihar generally receives more rain and faces floods.\n2. Parts of south Bihar are drier and more drought-prone.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. उत्तर बिहार में सामान्यतः अधिक वर्षा होती है और बाढ़ आती है।\n2. दक्षिण बिहार के कुछ भाग शुष्क व अधिक सूखा-प्रवण हैं।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. North Bihar gets more rain and floods (from Himalayan rivers like the Kosi), while parts of south Bihar are drier and drought-prone.',
        hi: 'दोनों सही हैं। उत्तर बिहार में अधिक वर्षा व बाढ़ (कोसी जैसी हिमालयी नदियों से) होती है, जबकि दक्षिण बिहार के भाग शुष्क व सूखा-प्रवण हैं।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 2,
    },
    {
      id: 'g3q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements about Bihar\'s agriculture:\n1. Agriculture is the mainstay of Bihar\'s economy and employs most of the population.\n2. Small and fragmented landholdings and low mechanisation are major challenges.\nWhich is/are correct?',
        hi: 'बिहार की कृषि के बारे में निम्न कथनों पर विचार करें:\n1. कृषि बिहार की अर्थव्यवस्था की रीढ़ है और अधिकांश जनसंख्या को रोज़गार देती है।\n2. छोटी व बिखरी जोतें तथा कम यंत्रीकरण प्रमुख चुनौतियाँ हैं।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. Agriculture is the mainstay of the economy, and small/fragmented landholdings and low mechanisation, along with monsoon dependence and floods, are key challenges.',
        hi: 'दोनों सही हैं। कृषि अर्थव्यवस्था की रीढ़ है, और छोटी/बिखरी जोतें व कम यंत्रीकरण, साथ ही मानसून-निर्भरता व बाढ़, प्रमुख चुनौतियाँ हैं।',
      },
      topic: 'geography-bihar-agri',
      difficulty: 3,
    },
  ],
};
