import type { Chapter } from '../types';

export const geographyCh01: Chapter = {
  id: 'geography-ch01',
  subjectId: 'geography',
  order: 1,
  title: {
    en: 'Geography of Bihar: Rivers & Physical Divisions',
    hi: 'बिहार का भूगोल: नदियाँ एवं भौतिक विभाग',
  },
  intro: {
    en: 'To understand Bihar, understand the Ganga. One river shapes the state\'s farming, its floods, its cities and its history. If you can picture the map — the Ganga in the middle, Himalayan rivers rushing down from the north, and rain-fed rivers rising from the southern plateau — you can answer almost any Bihar geography question.',
    hi: 'बिहार को समझना है तो गंगा को समझिए। एक नदी राज्य की खेती, बाढ़, नगरों व इतिहास को गढ़ती है। यदि आप मानचित्र की कल्पना कर सकें — बीच में गंगा, उत्तर से उतरती हिमालयी नदियाँ, और दक्षिणी पठार से निकलती वर्षा-पोषित नदियाँ — तो बिहार भूगोल का लगभग कोई भी प्रश्न हल कर सकते हैं।',
  },
  sections: [
    {
      id: 'location',
      heading: { en: 'Location & Physical Divisions', hi: 'स्थिति व भौतिक विभाग' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Bihar is a landlocked state in eastern India, lying almost entirely in the fertile **Middle Ganga Plain**. The **Ganga flows across it from west to east**, splitting Bihar into two natural halves: the **North Bihar Plain** and the **South Bihar Plain**.',
            hi: 'बिहार पूर्वी भारत का एक स्थलरुद्ध राज्य है, जो लगभग पूर्णतः उपजाऊ **मध्य गंगा मैदान** में स्थित है। **गंगा इसके आर-पार पश्चिम से पूर्व की ओर बहती है**, और बिहार को दो प्राकृतिक भागों में बाँटती है: **उत्तर बिहार मैदान** व **दक्षिण बिहार मैदान**।',
          },
        },
        {
          type: 'figure',
          figureId: 'bihar-neighbours',
          caption: {
            en: 'Bihar and its neighbours — Nepal to the north (international border), and the Ganga running through the middle.',
            hi: 'बिहार व उसके पड़ोसी — उत्तर में नेपाल (अंतरराष्ट्रीय सीमा), और बीच से बहती गंगा।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The two physical divisions', hi: 'दो भौतिक विभाग' },
          headers: [
            { en: 'Feature', hi: 'विशेषता' },
            { en: 'North Bihar Plain', hi: 'उत्तर बिहार मैदान' },
            { en: 'South Bihar Plain', hi: 'दक्षिण बिहार मैदान' },
          ],
          rows: [
            [
              { en: 'Rivers come from', hi: 'नदियाँ आती हैं' },
              { en: 'The Himalayas (Nepal) — snow-fed, **perennial**', hi: 'हिमालय (नेपाल) — हिम-पोषित, **सदानीरा**' },
              { en: 'The southern plateau — **rain-fed**, seasonal', hi: 'दक्षिणी पठार — **वर्षा-पोषित**, मौसमी' },
            ],
            [
              { en: 'Main problem', hi: 'मुख्य समस्या' },
              { en: 'Severe **floods** almost every year', hi: 'लगभग हर वर्ष भीषण **बाढ़**' },
              { en: 'Relatively drier; some drought', hi: 'तुलनात्मक रूप से शुष्क; कुछ सूखा' },
            ],
            [
              { en: 'Key rivers', hi: 'प्रमुख नदियाँ' },
              { en: 'Ghaghara, Gandak, Bagmati, Kamla, **Kosi**, Mahananda', hi: 'घाघरा, गंडक, बागमती, कमला, **कोसी**, महानंदा' },
              { en: '**Sone** (largest), Punpun, Falgu, Kiul', hi: '**सोन** (सबसे बड़ी), पुनपुन, फल्गु, कियूल' },
            ],
          ],
        },
      ],
    },
    {
      id: 'rivers',
      heading: { en: 'The River System', hi: 'नदी तंत्र' },
      blocks: [
        {
          type: 'figure',
          figureId: 'bihar-rivers',
          caption: {
            en: 'The Ganga divides Bihar; Himalayan rivers pour in from the north, peninsular rivers rise from the south.',
            hi: 'गंगा बिहार को बाँटती है; उत्तर से हिमालयी नदियाँ गिरती हैं, दक्षिण से प्रायद्वीपीय नदियाँ निकलती हैं।',
          },
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Picture the Ganga as the **spine** of a fish. The bones on the **top** side (north) — Gandak, Bagmati, Kosi — are long and come down from the tall Himalayas, so they carry snow-melt all year and flood often. The bones on the **bottom** side (south) — Sone, Punpun, Falgu — are shorter and only fill up in the monsoon.',
            hi: 'गंगा को एक मछली की **रीढ़** समझिए। **ऊपरी** ओर (उत्तर) की हड्डियाँ — गंडक, बागमती, कोसी — लंबी हैं और ऊँचे हिमालय से उतरती हैं, इसलिए वर्ष भर हिम-जल लाती हैं और अक्सर बाढ़ लाती हैं। **नीचे** की ओर (दक्षिण) की हड्डियाँ — सोन, पुनपुन, फल्गु — छोटी हैं और केवल मानसून में भरती हैं।',
          },
        },
        {
          type: 'list',
          items: [
            {
              en: 'The **Kosi** is the most important — and most feared — river of north Bihar. Because it repeatedly changes its course and floods vast areas, it is called the **"Sorrow of Bihar"**. It rises in Nepal/Tibet.',
              hi: '**कोसी** उत्तर बिहार की सबसे महत्वपूर्ण — और सबसे भयभीत करने वाली — नदी है। बार-बार धारा बदलने व विशाल क्षेत्रों में बाढ़ के कारण इसे **"बिहार का शोक"** कहा जाता है। यह नेपाल/तिब्बत में निकलती है।',
            },
            {
              en: 'The **Sone** is the largest river of south Bihar; it joins the Ganga near Patna (at Maner) after flowing north.',
              hi: '**सोन** दक्षिण बिहार की सबसे बड़ी नदी है; उत्तर की ओर बहकर यह पटना के निकट (मनेर में) गंगा में मिलती है।',
            },
            {
              en: 'The **Gandak** (also called Narayani) and the **Ghaghara** are other major north-bank tributaries of the Ganga.',
              hi: '**गंडक** (नारायणी भी कहते हैं) व **घाघरा** गंगा की अन्य प्रमुख उत्तरी तटवर्ती सहायक नदियाँ हैं।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Do not confuse the "sorrows": the **Kosi** is the **"Sorrow of Bihar"**, while the **Damodar** was the "Sorrow of Bengal". Also remember direction — north-bank rivers flow **southward** into the Ganga; south-bank rivers flow **northward** into it.',
            hi: '"शोक" में भ्रम न करें: **कोसी** = **"बिहार का शोक"**, जबकि **दामोदर** = "बंगाल का शोक" था। दिशा भी याद रखें — उत्तरी तट की नदियाँ **दक्षिण** की ओर गंगा में मिलती हैं; दक्षिणी तट की नदियाँ **उत्तर** की ओर।',
          },
        },
      ],
    },
    {
      id: 'climate-soil',
      heading: { en: 'Climate & Soil', hi: 'जलवायु व मिट्टी' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              en: '**Climate:** subtropical monsoon — hot summers, a rainy monsoon (June–September, mostly from the Bay of Bengal branch), and mild winters. Most rainfall comes in the monsoon, which is why floods and farming both depend on it.',
              hi: '**जलवायु:** उपोष्ण मानसूनी — गर्म ग्रीष्म, वर्षा-युक्त मानसून (जून–सितंबर, मुख्यतः बंगाल की खाड़ी शाखा से), व हल्के शीत। अधिकांश वर्षा मानसून में होती है, इसीलिए बाढ़ व खेती दोनों उसी पर निर्भर हैं।',
            },
            {
              en: '**Soil:** mostly rich **alluvial soil** deposited by the rivers — ideal for crops like paddy, wheat, maize, pulses and sugarcane. Newer alluvium (*khadar*) lies near the rivers; older alluvium (*bhangar*) lies away from them.',
              hi: '**मिट्टी:** अधिकांशतः नदियों द्वारा जमा उपजाऊ **जलोढ़ मिट्टी** — धान, गेहूँ, मक्का, दलहन व गन्ना जैसी फसलों हेतु आदर्श। नई जलोढ़ (*खादर*) नदियों के निकट, पुरानी जलोढ़ (*बांगर*) नदियों से दूर होती है।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'This geography explains Bihar\'s economy and its problems in one line: fertile alluvial soil makes it a strong **agricultural** state, but its dependence on flood-prone Himalayan rivers makes **flood management** a permanent governance challenge — a favourite theme for BPSC Mains.',
            hi: 'यह भूगोल एक पंक्ति में बिहार की अर्थव्यवस्था व समस्याओं को समझाता है: उपजाऊ जलोढ़ मिट्टी इसे सशक्त **कृषि** राज्य बनाती है, पर बाढ़-प्रवण हिमालयी नदियों पर निर्भरता **बाढ़ प्रबंधन** को स्थायी शासन-चुनौती बनाती है — जो BPSC मुख्य परीक्षा का प्रिय विषय है।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'The **Ganga** flows west→east and divides Bihar into the **North Bihar Plain** and **South Bihar Plain**.',
      hi: '**गंगा** पश्चिम→पूर्व बहती है और बिहार को **उत्तर बिहार मैदान** व **दक्षिण बिहार मैदान** में बाँटती है।',
    },
    {
      en: 'North-bank rivers (Himalayan, perennial, flood-prone): Ghaghara, **Gandak**, Bagmati, Kamla, **Kosi**, Mahananda.',
      hi: 'उत्तरी तट की नदियाँ (हिमालयी, सदानीरा, बाढ़-प्रवण): घाघरा, **गंडक**, बागमती, कमला, **कोसी**, महानंदा।',
    },
    {
      en: 'South-bank rivers (peninsular, rain-fed): **Sone** (largest), Punpun, Falgu, Kiul.',
      hi: 'दक्षिणी तट की नदियाँ (प्रायद्वीपीय, वर्षा-पोषित): **सोन** (सबसे बड़ी), पुनपुन, फल्गु, कियूल।',
    },
    {
      en: '**Kosi = "Sorrow of Bihar"** (changes course, floods north Bihar). Damodar = "Sorrow of Bengal".',
      hi: '**कोसी = "बिहार का शोक"** (धारा बदलती है, उत्तर बिहार में बाढ़)। दामोदर = "बंगाल का शोक"।',
    },
    {
      en: 'Soil is mostly fertile **alluvial** (khadar = newer, bhangar = older); subtropical monsoon climate → strong agriculture but chronic flood challenge.',
      hi: 'मिट्टी अधिकांशतः उपजाऊ **जलोढ़** (खादर = नई, बांगर = पुरानी); उपोष्ण मानसूनी जलवायु → सशक्त कृषि पर स्थायी बाढ़ चुनौती।',
    },
  ],
  quiz: [
    {
      id: 'g1q1',
      type: 'mcq',
      question: {
        en: 'The Ganga divides Bihar into how many physical plains?',
        hi: 'गंगा बिहार को कितने भौतिक मैदानों में बाँटती है?',
      },
      options: [
        { en: 'Two (North & South Bihar plains)', hi: 'दो (उत्तर व दक्षिण बिहार मैदान)' },
        { en: 'Three', hi: 'तीन' },
        { en: 'Four', hi: 'चार' },
        { en: 'It does not divide Bihar', hi: 'यह बिहार को नहीं बाँटती' },
      ],
      answer: 0,
      explanation: {
        en: 'Flowing west to east, the Ganga divides Bihar into the North Bihar Plain and the South Bihar Plain.',
        hi: 'पश्चिम से पूर्व बहती हुई गंगा बिहार को उत्तर बिहार मैदान व दक्षिण बिहार मैदान में बाँटती है।',
      },
      topic: 'geography-bihar',
      difficulty: 1,
    },
    {
      id: 'g1q2',
      type: 'mcq',
      question: {
        en: 'Which is the largest river of the South Bihar plain?',
        hi: 'दक्षिण बिहार मैदान की सबसे बड़ी नदी कौन-सी है?',
      },
      options: [
        { en: 'Kosi', hi: 'कोसी' },
        { en: 'Gandak', hi: 'गंडक' },
        { en: 'Sone', hi: 'सोन' },
        { en: 'Bagmati', hi: 'बागमती' },
      ],
      answer: 2,
      explanation: {
        en: 'The Sone is the largest south-bank tributary of the Ganga in Bihar, joining it near Patna (Maner).',
        hi: 'सोन बिहार में गंगा की सबसे बड़ी दक्षिणी तटवर्ती सहायक नदी है, जो पटना (मनेर) के निकट मिलती है।',
      },
      topic: 'geography-bihar',
      difficulty: 2,
    },
    {
      id: 'g1q3',
      type: 'mcq',
      question: {
        en: 'The river known as the "Sorrow of Bihar" is:',
        hi: '"बिहार का शोक" के नाम से प्रसिद्ध नदी है:',
      },
      options: [
        { en: 'Sone', hi: 'सोन' },
        { en: 'Kosi', hi: 'कोसी' },
        { en: 'Damodar', hi: 'दामोदर' },
        { en: 'Punpun', hi: 'पुनपुन' },
      ],
      answer: 1,
      explanation: {
        en: 'The Kosi is called the "Sorrow of Bihar" because it frequently changes course and causes floods. (The Damodar was the "Sorrow of Bengal".)',
        hi: 'कोसी को "बिहार का शोक" कहा जाता है क्योंकि यह बार-बार धारा बदलकर बाढ़ लाती है। (दामोदर "बंगाल का शोक" थी।)',
      },
      topic: 'geography-bihar',
      difficulty: 1,
    },
    {
      id: 'g1q4',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. The rivers of North Bihar are perennial and originate in the Himalayas.\n2. The rivers of South Bihar are mainly rain-fed and seasonal.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. उत्तर बिहार की नदियाँ सदानीरा हैं और हिमालय में निकलती हैं।\n2. दक्षिण बिहार की नदियाँ मुख्यतः वर्षा-पोषित व मौसमी हैं।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. North Bihar\'s Himalayan rivers are snow-fed and perennial; South Bihar\'s plateau rivers are rain-fed and seasonal.',
        hi: 'दोनों सही हैं। उत्तर बिहार की हिमालयी नदियाँ हिम-पोषित व सदानीरा हैं; दक्षिण बिहार की पठारी नदियाँ वर्षा-पोषित व मौसमी हैं।',
      },
      topic: 'geography-bihar',
      difficulty: 2,
    },
    {
      id: 'g1q5',
      type: 'mcq',
      question: {
        en: 'The predominant soil type of the Bihar plains, ideal for agriculture, is:',
        hi: 'बिहार के मैदानों की प्रमुख मिट्टी, जो कृषि हेतु आदर्श है, है:',
      },
      options: [
        { en: 'Black soil', hi: 'काली मिट्टी' },
        { en: 'Red soil', hi: 'लाल मिट्टी' },
        { en: 'Alluvial soil', hi: 'जलोढ़ मिट्टी' },
        { en: 'Laterite soil', hi: 'लैटेराइट मिट्टी' },
      ],
      answer: 2,
      explanation: {
        en: 'The Bihar plains have rich alluvial soil deposited by the rivers — newer alluvium (khadar) near rivers, older alluvium (bhangar) away from them.',
        hi: 'बिहार के मैदानों में नदियों द्वारा जमा उपजाऊ जलोढ़ मिट्टी है — नदियों के निकट नई जलोढ़ (खादर), दूर पुरानी जलोढ़ (बांगर)।',
      },
      topic: 'geography-bihar',
      difficulty: 2,
    },
    {
      id: 'g1q6',
      type: 'mcq',
      question: {
        en: 'The Gandak river is also known as:',
        hi: 'गंडक नदी को किस अन्य नाम से भी जाना जाता है?',
      },
      options: [
        { en: 'Narayani', hi: 'नारायणी' },
        { en: 'Kamla', hi: 'कमला' },
        { en: 'Mahananda', hi: 'महानंदा' },
        { en: 'Karmanasa', hi: 'कर्मनाशा' },
      ],
      answer: 0,
      explanation: {
        en: 'The Gandak is also called the Narayani. It is a major north-bank Himalayan tributary of the Ganga.',
        hi: 'गंडक को नारायणी भी कहते हैं। यह गंगा की एक प्रमुख उत्तरी तटवर्ती हिमालयी सहायक नदी है।',
      },
      topic: 'geography-bihar',
      difficulty: 3,
    },
    {
      id: 'g1q7',
      type: 'mcq',
      question: {
        en: 'Most of Bihar\'s annual rainfall is received during which season?',
        hi: 'बिहार की अधिकांश वार्षिक वर्षा किस ऋतु में होती है?',
      },
      options: [
        { en: 'Winter (December–February)', hi: 'शीत (दिसंबर–फरवरी)' },
        { en: 'Summer (March–May)', hi: 'ग्रीष्म (मार्च–मई)' },
        { en: 'Southwest monsoon (June–September)', hi: 'दक्षिण-पश्चिम मानसून (जून–सितंबर)' },
        { en: 'Post-monsoon (October–November)', hi: 'मानसूनोत्तर (अक्टूबर–नवंबर)' },
      ],
      answer: 2,
      explanation: {
        en: 'Bihar has a subtropical monsoon climate; most rain falls during the southwest monsoon (June–September), mainly from the Bay of Bengal branch.',
        hi: 'बिहार की जलवायु उपोष्ण मानसूनी है; अधिकांश वर्षा दक्षिण-पश्चिम मानसून (जून–सितंबर) में होती है, मुख्यतः बंगाल की खाड़ी शाखा से।',
      },
      topic: 'geography-bihar',
      difficulty: 2,
    },
  ],
};
