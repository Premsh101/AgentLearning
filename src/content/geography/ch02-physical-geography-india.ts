import type { Chapter } from '../types';

export const geographyCh02: Chapter = {
  id: 'geography-ch02',
  subjectId: 'geography',
  order: 2,
  title: {
    en: 'Physical Geography of India',
    hi: 'भारत का भौतिक भूगोल',
  },
  intro: {
    en: 'India is like a small continent packed into one country. In the north stand the young, tall **Himalayas**; below them lie the flat, fertile **Northern Plains**; further south rises the old, hard **Peninsular Plateau**; and along the edges run the **coastal plains** and **islands**. If you hold this simple picture — mountains on top, plains in the middle, plateau at the bottom — every question about India\'s rivers, monsoon and relief becomes easy to place.',
    hi: 'भारत मानो एक देश में समाया छोटा-सा उपमहाद्वीप है। उत्तर में खड़े हैं नए, ऊँचे **हिमालय**; उनके नीचे बिछे हैं समतल, उपजाऊ **उत्तरी मैदान**; और दक्षिण में उठता है पुराना, कठोर **प्रायद्वीपीय पठार**; तथा किनारों पर फैले हैं **तटीय मैदान** व **द्वीप**। यदि यह सरल चित्र मन में रखें — ऊपर पर्वत, बीच में मैदान, नीचे पठार — तो भारत की नदियों, मानसून व उच्चावच का हर प्रश्न सहजता से बैठ जाता है।',
  },
  sections: [
    {
      id: 'physiographic-divisions',
      heading: { en: 'The Physiographic Divisions', hi: 'भौतिक विभाग' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'India is divided into **six major physiographic divisions**. Each was formed differently, so each has its own rocks, rivers and problems. Learning them in order — from north to south — makes the whole map fall into place.',
            hi: 'भारत **छह प्रमुख भौतिक विभागों** में बँटा है। प्रत्येक का निर्माण अलग ढंग से हुआ, इसलिए हर एक की अपनी चट्टानें, नदियाँ व समस्याएँ हैं। इन्हें क्रम से — उत्तर से दक्षिण — सीखने पर पूरा मानचित्र स्पष्ट हो जाता है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'The six physiographic divisions of India', hi: 'भारत के छह भौतिक विभाग' },
          headers: [
            { en: 'Division', hi: 'विभाग' },
            { en: 'Key feature', hi: 'मुख्य विशेषता' },
          ],
          rows: [
            [
              { en: '1. Northern (Himalayan) Mountains', hi: '1. उत्तरी (हिमालयी) पर्वत' },
              { en: 'Young fold mountains; highest relief; source of perennial rivers', hi: 'नवीन वलित पर्वत; सर्वाधिक उच्चावच; सदानीरा नदियों का स्रोत' },
            ],
            [
              { en: '2. Northern Plains (Indo-Gangetic)', hi: '2. उत्तरी मैदान (सिंधु-गंगा)' },
              { en: 'Flat, fertile **alluvial** plains built by rivers', hi: 'समतल, उपजाऊ नदियों द्वारा निर्मित **जलोढ़** मैदान' },
            ],
            [
              { en: '3. Peninsular Plateau (Deccan)', hi: '3. प्रायद्वीपीय पठार (दक्कन)' },
              { en: 'Oldest, hard rock; rich in minerals', hi: 'सबसे पुरानी, कठोर चट्टान; खनिजों में समृद्ध' },
            ],
            [
              { en: '4. Indian Desert (Thar)', hi: '4. भारतीय मरुस्थल (थार)' },
              { en: 'Sandy, dry region in the north-west', hi: 'उत्तर-पश्चिम का रेतीला, शुष्क क्षेत्र' },
            ],
            [
              { en: '5. Coastal Plains', hi: '5. तटीय मैदान' },
              { en: 'Narrow strips along east and west coasts', hi: 'पूर्वी व पश्चिमी तटों के साथ सँकरी पट्टियाँ' },
            ],
            [
              { en: '6. Islands', hi: '6. द्वीप' },
              { en: 'Andaman & Nicobar (Bay of Bengal), Lakshadweep (Arabian Sea)', hi: 'अंडमान व निकोबार (बंगाल की खाड़ी), लक्षद्वीप (अरब सागर)' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember the order top-to-bottom as **"Mountains, Plains, Plateau, Desert, Coasts, Islands"**. The first three are the big ones you must never mix up: **Himalayas (young & high) → Plains (flat & fertile) → Plateau (old & hard)**.',
            hi: 'ऊपर से नीचे का क्रम याद रखें — **"पर्वत, मैदान, पठार, मरुस्थल, तट, द्वीप"**। पहले तीन सबसे बड़े हैं, जिन्हें कभी न मिलाएँ: **हिमालय (नए व ऊँचे) → मैदान (समतल व उपजाऊ) → पठार (पुराने व कठोर)**।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'The **Tropic of Cancer** passes through India, crossing **eight states**, and roughly divides the country into a **tropical** zone (south) and a **subtropical** zone (north).',
            hi: '**कर्क रेखा** भारत से होकर गुजरती है, **आठ राज्यों** को पार करती है, और देश को मोटे तौर पर **उष्णकटिबंधीय** क्षेत्र (दक्षिण) व **उपोष्णकटिबंधीय** क्षेत्र (उत्तर) में बाँटती है।',
          },
        },
      ],
    },
    {
      id: 'himalayas',
      heading: { en: 'The Himalayas', hi: 'हिमालय' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The Himalayas are **young fold mountains** that run in **three parallel ranges** from west to east. Think of them as three steps rising as you go from the plains towards Tibet.',
            hi: 'हिमालय **नवीन वलित पर्वत** हैं जो पश्चिम से पूर्व की ओर **तीन समानांतर श्रेणियों** में फैले हैं। इन्हें मैदान से तिब्बत की ओर बढ़ते तीन चरणों के रूप में समझिए।',
          },
        },
        {
          type: 'list',
          items: [
            {
              en: '**Greater Himalayas (Himadri):** the **highest** range, with permanent snow and the tallest peaks.',
              hi: '**वृहत् हिमालय (हिमाद्रि):** **सर्वोच्च** श्रेणी, जहाँ स्थायी हिम व सबसे ऊँची चोटियाँ हैं।',
            },
            {
              en: '**Lesser Himalayas (Himachal):** the middle range, home to famous hill stations.',
              hi: '**लघु हिमालय (हिमाचल):** मध्य श्रेणी, जहाँ प्रसिद्ध पर्वतीय पर्यटन स्थल हैं।',
            },
            {
              en: '**Outer Himalayas (Shiwaliks):** the **youngest** and **lowest** range, closest to the plains.',
              hi: '**बाह्य हिमालय (शिवालिक):** **सबसे नई** व **सबसे नीची** श्रेणी, जो मैदानों के सबसे निकट है।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: '**Kanchenjunga** is the highest mountain peak located **within India\'s territory**. Do not write "Everest" — **Mount Everest is in Nepal**, and **K2 lies in the Pakistan-administered region**. So among peaks inside India, Kanchenjunga is the highest.',
            hi: '**कंचनजंगा** **भारत की सीमा के भीतर** स्थित सबसे ऊँची पर्वत चोटी है। "एवरेस्ट" न लिखें — **माउंट एवरेस्ट नेपाल में है**, और **K2 पाकिस्तान-प्रशासित क्षेत्र में है**। अतः भारत के भीतर की चोटियों में कंचनजंगा सबसे ऊँची है।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'The Himalayas matter for two big reasons: they **block cold winds** from the north (keeping India warmer) and force the monsoon to shed rain, and their snow feeds India\'s great **perennial rivers**. That is why the north is well-watered while the plateau depends on rain.',
            hi: 'हिमालय दो बड़े कारणों से महत्वपूर्ण हैं: वे उत्तर से आती **ठंडी हवाओं को रोकते हैं** (भारत को गर्म रखते हैं) और मानसून को वर्षा देने पर विवश करते हैं, तथा इनका हिम भारत की महान **सदानीरा नदियों** को पोषित करता है। इसीलिए उत्तर सुजलित है जबकि पठार वर्षा पर निर्भर है।',
          },
        },
      ],
    },
    {
      id: 'rivers',
      heading: { en: 'The River Systems', hi: 'नदी तंत्र' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'India\'s rivers fall into two great families. **Himalayan rivers** are fed by snow, so they flow all year (**perennial**). **Peninsular rivers** are fed mainly by rain, so they shrink in the dry season (**seasonal**). This single difference explains most river questions.',
            hi: 'भारत की नदियाँ दो बड़े परिवारों में आती हैं। **हिमालयी नदियाँ** हिम से पोषित होती हैं, इसलिए वर्ष भर बहती हैं (**सदानीरा**)। **प्रायद्वीपीय नदियाँ** मुख्यतः वर्षा से पोषित होती हैं, इसलिए शुष्क ऋतु में सिकुड़ जाती हैं (**मौसमी**)। यही एक अंतर अधिकांश नदी-प्रश्नों को समझा देता है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Himalayan vs Peninsular rivers', hi: 'हिमालयी बनाम प्रायद्वीपीय नदियाँ' },
          headers: [
            { en: 'Feature', hi: 'विशेषता' },
            { en: 'Himalayan rivers', hi: 'हिमालयी नदियाँ' },
            { en: 'Peninsular rivers', hi: 'प्रायद्वीपीय नदियाँ' },
          ],
          rows: [
            [
              { en: 'Water source', hi: 'जल स्रोत' },
              { en: 'Snow + rain — **perennial** (flow all year)', hi: 'हिम + वर्षा — **सदानीरा** (वर्ष भर बहती हैं)' },
              { en: 'Mainly rain — **seasonal**', hi: 'मुख्यतः वर्षा — **मौसमी**' },
            ],
            [
              { en: 'Examples', hi: 'उदाहरण' },
              { en: '**Indus, Ganga, Brahmaputra**', hi: '**सिंधु, गंगा, ब्रह्मपुत्र**' },
              { en: '**Godavari, Krishna, Kaveri, Narmada, Tapi**', hi: '**गोदावरी, कृष्णा, कावेरी, नर्मदा, ताप्ती**' },
            ],
            [
              { en: 'General flow', hi: 'सामान्य प्रवाह' },
              { en: 'Long courses; large basins', hi: 'लंबे मार्ग; बड़े जलग्रहण' },
              { en: 'Most flow **east** into the Bay of Bengal', hi: 'अधिकांश **पूर्व** की ओर बंगाल की खाड़ी में गिरती हैं' },
            ],
          ],
        },
        {
          type: 'list',
          items: [
            {
              en: 'The **Godavari** is the **largest peninsular river**, so big that it is called the **"Dakshin Ganga"** (the Ganga of the South).',
              hi: '**गोदावरी** **सबसे बड़ी प्रायद्वीपीय नदी** है, इतनी विशाल कि इसे **"दक्षिण गंगा"** कहा जाता है।',
            },
            {
              en: 'Most peninsular rivers flow **east** into the **Bay of Bengal**, but the **Narmada** and **Tapi** are famous exceptions — they flow **west** into the **Arabian Sea**.',
              hi: 'अधिकांश प्रायद्वीपीय नदियाँ **पूर्व** की ओर **बंगाल की खाड़ी** में गिरती हैं, परंतु **नर्मदा** व **ताप्ती** प्रसिद्ध अपवाद हैं — ये **पश्चिम** की ओर **अरब सागर** में गिरती हैं।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'To remember the two west-flowing rivers, think **"NT flows West"** — **N**armada and **T**api are the two big peninsular rivers that turn **west** into the Arabian Sea while all their neighbours go east.',
            hi: 'दो पश्चिम-बहने वाली नदियाँ याद रखने के लिए सोचें **"न-ता पश्चिम"** — **न**र्मदा व **ता**प्ती दो बड़ी प्रायद्वीपीय नदियाँ हैं जो **पश्चिम** मुड़कर अरब सागर में गिरती हैं, जबकि इनके पड़ोसी पूर्व जाते हैं।',
          },
        },
      ],
    },
    {
      id: 'monsoon',
      heading: { en: 'Climate & the Monsoon', hi: 'जलवायु व मानसून' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'India has a **monsoon** climate — its weather is ruled by seasonal winds. The rains that make or break Indian farming come mostly from one season: the **South-West Monsoon**.',
            hi: 'भारत की जलवायु **मानसूनी** है — इसका मौसम ऋतुनिष्ठ पवनों द्वारा नियंत्रित होता है। भारतीय कृषि को बनाने या बिगाड़ने वाली वर्षा अधिकांशतः एक ही ऋतु से आती है: **दक्षिण-पश्चिम मानसून**।',
          },
        },
        {
          type: 'list',
          items: [
            {
              en: '**South-West Monsoon (June–September):** brings **most of India\'s rainfall**. It arrives in **two branches** — the **Arabian Sea branch** and the **Bay of Bengal branch**.',
              hi: '**दक्षिण-पश्चिम मानसून (जून–सितंबर):** भारत की **अधिकांश वर्षा** लाता है। यह **दो शाखाओं** में आता है — **अरब सागर शाखा** व **बंगाल की खाड़ी शाखा**।',
            },
            {
              en: '**Retreating / North-East Monsoon (October–December):** as the winds reverse, they bring rain especially to the **Tamil Nadu (Coromandel) coast**.',
              hi: '**लौटता / उत्तर-पूर्वी मानसून (अक्टूबर–दिसंबर):** पवनों के पलटने पर ये विशेषकर **तमिलनाडु (कोरोमंडल) तट** पर वर्षा लाते हैं।',
            },
          ],
        },
        {
          type: 'timeline',
          caption: { en: 'The rhythm of the Indian monsoon', hi: 'भारतीय मानसून की लय' },
          events: [
            {
              when: { en: 'June–September', hi: 'जून–सितंबर' },
              label: { en: 'South-West Monsoon — main rainy season (most rainfall)', hi: 'दक्षिण-पश्चिम मानसून — मुख्य वर्षा ऋतु (सर्वाधिक वर्षा)' },
            },
            {
              when: { en: 'October–December', hi: 'अक्टूबर–दिसंबर' },
              label: { en: 'Retreating / North-East Monsoon — rain to the Tamil Nadu coast', hi: 'लौटता / उत्तर-पूर्वी मानसून — तमिलनाडु तट पर वर्षा' },
            },
          ],
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of the South-West Monsoon as **two arms reaching around the Peninsula**: one arm comes over the **Arabian Sea** on the west, the other over the **Bay of Bengal** on the east. Together they hug India and pour down the year\'s main rains.',
            hi: 'दक्षिण-पश्चिम मानसून को **प्रायद्वीप को घेरती दो भुजाओं** के रूप में सोचें: एक भुजा पश्चिम में **अरब सागर** से आती है, दूसरी पूर्व में **बंगाल की खाड़ी** से। मिलकर ये भारत को घेरती हैं और वर्ष की मुख्य वर्षा बरसाती हैं।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'India has **six physiographic divisions**: Northern (Himalayan) Mountains, Northern Plains, Peninsular Plateau, Indian (Thar) Desert, Coastal Plains, and Islands.',
      hi: 'भारत के **छह भौतिक विभाग**: उत्तरी (हिमालयी) पर्वत, उत्तरी मैदान, प्रायद्वीपीय पठार, भारतीय (थार) मरुस्थल, तटीय मैदान, व द्वीप।',
    },
    {
      en: 'The Himalayas run in **three ranges**: Greater (Himadri — **highest**, permanent snow), Lesser (Himachal), and Outer (Shiwaliks — **youngest, lowest**).',
      hi: 'हिमालय **तीन श्रेणियों** में हैं: वृहत् (हिमाद्रि — **सर्वोच्च**, स्थायी हिम), लघु (हिमाचल), व बाह्य (शिवालिक — **सबसे नई, सबसे नीची**)।',
    },
    {
      en: '**Kanchenjunga** is the highest peak **within India** (Everest is in Nepal; K2 in the Pakistan-administered region).',
      hi: '**कंचनजंगा** **भारत के भीतर** सबसे ऊँची चोटी है (एवरेस्ट नेपाल में; K2 पाकिस्तान-प्रशासित क्षेत्र में)।',
    },
    {
      en: 'Himalayan rivers (**Indus, Ganga, Brahmaputra**) are snow-fed and **perennial**; peninsular rivers are rain-fed and **seasonal**.',
      hi: 'हिमालयी नदियाँ (**सिंधु, गंगा, ब्रह्मपुत्र**) हिम-पोषित व **सदानीरा** हैं; प्रायद्वीपीय नदियाँ वर्षा-पोषित व **मौसमी** हैं।',
    },
    {
      en: 'The **Godavari** is the largest peninsular river (**"Dakshin Ganga"**); **Narmada** and **Tapi** flow **west** into the Arabian Sea while most others flow east.',
      hi: '**गोदावरी** सबसे बड़ी प्रायद्वीपीय नदी है (**"दक्षिण गंगा"**); **नर्मदा** व **ताप्ती** **पश्चिम** की ओर अरब सागर में गिरती हैं जबकि अधिकांश अन्य पूर्व की ओर।',
    },
    {
      en: 'The **South-West Monsoon (June–September)** brings most rainfall in two branches (Arabian Sea & Bay of Bengal); the retreating **North-East Monsoon (Oct–Dec)** rains on the Tamil Nadu coast.',
      hi: '**दक्षिण-पश्चिम मानसून (जून–सितंबर)** दो शाखाओं (अरब सागर व बंगाल की खाड़ी) में अधिकांश वर्षा लाता है; लौटता **उत्तर-पूर्वी मानसून (अक्टूबर–दिसंबर)** तमिलनाडु तट पर बरसता है।',
    },
    {
      en: 'The **Tropic of Cancer** passes through India (through **8 states**), dividing it into tropical and subtropical zones.',
      hi: '**कर्क रेखा** भारत से होकर गुजरती है (**8 राज्यों** से), जो इसे उष्णकटिबंधीय व उपोष्णकटिबंधीय क्षेत्रों में बाँटती है।',
    },
  ],
  quiz: [
    {
      id: 'g2q1',
      type: 'mcq',
      question: {
        en: 'How many major physiographic divisions is India traditionally divided into?',
        hi: 'भारत को परंपरागत रूप से कितने प्रमुख भौतिक विभागों में बाँटा जाता है?',
      },
      options: [
        { en: 'Four', hi: 'चार' },
        { en: 'Five', hi: 'पाँच' },
        { en: 'Six', hi: 'छह' },
        { en: 'Seven', hi: 'सात' },
      ],
      answer: 2,
      explanation: {
        en: 'India has six major physiographic divisions: the Northern Mountains, the Northern Plains, the Peninsular Plateau, the Indian Desert, the Coastal Plains, and the Islands.',
        hi: 'भारत के छह प्रमुख भौतिक विभाग हैं: उत्तरी पर्वत, उत्तरी मैदान, प्रायद्वीपीय पठार, भारतीय मरुस्थल, तटीय मैदान, व द्वीप।',
      },
      topic: 'geography-india',
      difficulty: 1,
    },
    {
      id: 'g2q2',
      type: 'mcq',
      question: {
        en: 'Which of the three Himalayan ranges is the highest, with permanent snow?',
        hi: 'हिमालय की तीन श्रेणियों में कौन-सी सर्वोच्च है, जहाँ स्थायी हिम है?',
      },
      options: [
        { en: 'Shiwaliks (Outer Himalayas)', hi: 'शिवालिक (बाह्य हिमालय)' },
        { en: 'Himachal (Lesser Himalayas)', hi: 'हिमाचल (लघु हिमालय)' },
        { en: 'Himadri (Greater Himalayas)', hi: 'हिमाद्रि (वृहत् हिमालय)' },
        { en: 'The three ranges are of equal height', hi: 'तीनों श्रेणियाँ समान ऊँचाई की हैं' },
      ],
      answer: 2,
      explanation: {
        en: 'The Greater Himalayas (Himadri) form the highest range and hold permanent snow; the Shiwaliks are the youngest and lowest.',
        hi: 'वृहत् हिमालय (हिमाद्रि) सर्वोच्च श्रेणी है और इसमें स्थायी हिम रहता है; शिवालिक सबसे नई व सबसे नीची है।',
      },
      topic: 'geography-india',
      difficulty: 2,
    },
    {
      id: 'g2q3',
      type: 'mcq',
      question: {
        en: 'Which is the highest mountain peak located within the territory of India?',
        hi: 'भारत की सीमा के भीतर स्थित सबसे ऊँची पर्वत चोटी कौन-सी है?',
      },
      options: [
        { en: 'Mount Everest', hi: 'माउंट एवरेस्ट' },
        { en: 'K2 (Godwin Austen)', hi: 'K2 (गॉडविन ऑस्टिन)' },
        { en: 'Kanchenjunga', hi: 'कंचनजंगा' },
        { en: 'Nanda Devi', hi: 'नंदा देवी' },
      ],
      answer: 2,
      explanation: {
        en: 'Kanchenjunga is the highest peak within India. Mount Everest lies in Nepal, and K2 is in the Pakistan-administered region.',
        hi: 'कंचनजंगा भारत के भीतर सबसे ऊँची चोटी है। माउंट एवरेस्ट नेपाल में है, और K2 पाकिस्तान-प्रशासित क्षेत्र में है।',
      },
      topic: 'geography-india',
      difficulty: 2,
    },
    {
      id: 'g2q4',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. Himalayan rivers such as the Indus, Ganga and Brahmaputra are perennial.\n2. Most peninsular rivers are rain-fed and seasonal.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. सिंधु, गंगा व ब्रह्मपुत्र जैसी हिमालयी नदियाँ सदानीरा हैं।\n2. अधिकांश प्रायद्वीपीय नदियाँ वर्षा-पोषित व मौसमी हैं।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. Himalayan rivers are snow-fed and flow all year (perennial), while peninsular rivers depend mainly on rain and are seasonal.',
        hi: 'दोनों सही हैं। हिमालयी नदियाँ हिम-पोषित होकर वर्ष भर बहती हैं (सदानीरा), जबकि प्रायद्वीपीय नदियाँ मुख्यतः वर्षा पर निर्भर व मौसमी हैं।',
      },
      topic: 'geography-india',
      difficulty: 2,
    },
    {
      id: 'g2q5',
      type: 'mcq',
      question: {
        en: 'Which river is the largest peninsular river and is known as the "Dakshin Ganga"?',
        hi: 'कौन-सी नदी सबसे बड़ी प्रायद्वीपीय नदी है और "दक्षिण गंगा" के नाम से जानी जाती है?',
      },
      options: [
        { en: 'Krishna', hi: 'कृष्णा' },
        { en: 'Kaveri', hi: 'कावेरी' },
        { en: 'Godavari', hi: 'गोदावरी' },
        { en: 'Narmada', hi: 'नर्मदा' },
      ],
      answer: 2,
      explanation: {
        en: 'The Godavari is the largest peninsular river and is called the "Dakshin Ganga" (Ganga of the South).',
        hi: 'गोदावरी सबसे बड़ी प्रायद्वीपीय नदी है और इसे "दक्षिण गंगा" कहा जाता है।',
      },
      topic: 'geography-india',
      difficulty: 2,
    },
    {
      id: 'g2q6',
      type: 'statement',
      question: {
        en: 'Consider the following statements about west-flowing peninsular rivers:\n1. The Narmada flows west into the Arabian Sea.\n2. The Tapi flows west into the Arabian Sea.\nWhich is/are correct?',
        hi: 'पश्चिम की ओर बहने वाली प्रायद्वीपीय नदियों के बारे में निम्न कथनों पर विचार करें:\n1. नर्मदा पश्चिम की ओर अरब सागर में गिरती है।\n2. ताप्ती पश्चिम की ओर अरब सागर में गिरती है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The Narmada and Tapi are the notable west-flowing peninsular rivers, draining into the Arabian Sea, while most other peninsular rivers flow east into the Bay of Bengal.',
        hi: 'दोनों सही हैं। नर्मदा व ताप्ती उल्लेखनीय पश्चिम-बहने वाली प्रायद्वीपीय नदियाँ हैं, जो अरब सागर में गिरती हैं, जबकि अधिकांश अन्य प्रायद्वीपीय नदियाँ पूर्व की ओर बंगाल की खाड़ी में गिरती हैं।',
      },
      topic: 'geography-india',
      difficulty: 3,
    },
    {
      id: 'g2q7',
      type: 'mcq',
      question: {
        en: 'Most of India\'s annual rainfall is brought by which of the following?',
        hi: 'भारत की अधिकांश वार्षिक वर्षा निम्न में से किससे प्राप्त होती है?',
      },
      options: [
        { en: 'South-West Monsoon (June–September)', hi: 'दक्षिण-पश्चिम मानसून (जून–सितंबर)' },
        { en: 'North-East (retreating) Monsoon (October–December)', hi: 'उत्तर-पूर्वी (लौटता) मानसून (अक्टूबर–दिसंबर)' },
        { en: 'Western disturbances in winter', hi: 'शीत ऋतु में पश्चिमी विक्षोभ' },
        { en: 'Pre-monsoon thunderstorms in summer', hi: 'ग्रीष्म में मानसून-पूर्व आँधी-तूफान' },
      ],
      answer: 0,
      explanation: {
        en: 'The South-West Monsoon (June–September) brings most of India\'s rainfall, arriving in the Arabian Sea and Bay of Bengal branches.',
        hi: 'दक्षिण-पश्चिम मानसून (जून–सितंबर) भारत की अधिकांश वर्षा लाता है, जो अरब सागर व बंगाल की खाड़ी शाखाओं में आता है।',
      },
      topic: 'geography-india',
      difficulty: 1,
    },
    {
      id: 'g2q8',
      type: 'mcq',
      question: {
        en: 'The retreating (North-East) Monsoon of October–December brings significant rainfall especially to which coast?',
        hi: 'अक्टूबर–दिसंबर का लौटता (उत्तर-पूर्वी) मानसून विशेष रूप से किस तट पर पर्याप्त वर्षा लाता है?',
      },
      options: [
        { en: 'The Konkan (west) coast', hi: 'कोंकण (पश्चिमी) तट' },
        { en: 'The Tamil Nadu (Coromandel) coast', hi: 'तमिलनाडु (कोरोमंडल) तट' },
        { en: 'The Gujarat coast', hi: 'गुजरात तट' },
        { en: 'The Odisha coast', hi: 'ओडिशा तट' },
      ],
      answer: 1,
      explanation: {
        en: 'During the retreating monsoon (October–December), the North-East winds pick up moisture over the Bay of Bengal and bring rain especially to the Tamil Nadu (Coromandel) coast.',
        hi: 'लौटते मानसून (अक्टूबर–दिसंबर) में, उत्तर-पूर्वी पवनें बंगाल की खाड़ी से नमी लेकर विशेषकर तमिलनाडु (कोरोमंडल) तट पर वर्षा लाती हैं।',
      },
      topic: 'geography-india',
      difficulty: 3,
    },
  ],
};
