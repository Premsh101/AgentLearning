import type { Chapter } from '../types';

export const economyCh02: Chapter = {
  id: 'economy-ch02',
  subjectId: 'economy',
  order: 2,
  title: {
    en: 'Budget, Banking & Inflation',
    hi: 'बजट, बैंकिंग व मुद्रास्फीति',
  },
  intro: {
    en: 'This chapter covers three topics that scare many students but are really just household ideas made big. The **Budget** is the government\'s income-and-expenditure diary. **Banking** is about the RBI controlling the flow of money. **Inflation** is simply prices going up and your rupee buying less. Learn who does what — the government (budget) versus the RBI (banking) — and the exam questions become easy marks.',
    hi: 'यह अध्याय तीन ऐसे विषयों को समझाता है जो कई विद्यार्थियों को डराते हैं, पर असल में ये घर-गृहस्थी के विचार ही हैं, बस बड़े पैमाने पर। **बजट** सरकार की आय-व्यय की डायरी है। **बैंकिंग** में RBI धन के प्रवाह को नियंत्रित करता है। **मुद्रास्फीति** का अर्थ बस इतना है कि कीमतें बढ़ें और आपका रुपया कम खरीद पाए। यह समझ लें कि कौन क्या करता है — सरकार (बजट) बनाम RBI (बैंकिंग) — तो परीक्षा के प्रश्न आसान अंक बन जाते हैं।',
  },
  sections: [
    {
      id: 'budget',
      heading: { en: 'The Union Budget', hi: 'केंद्रीय बजट' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The **Union Budget** is the government\'s annual statement of its **income (receipts)** and **expenditure (spending)**. The Constitution calls it the **"Annual Financial Statement"** under **Article 112**. In recent years it is presented on **1 February**. It has two parts: the **Revenue Budget** (day-to-day income and spending) and the **Capital Budget** (long-term assets and borrowings).',
            hi: '**केंद्रीय बजट** सरकार की **आय (प्राप्तियाँ)** व **व्यय (खर्च)** का वार्षिक विवरण है। संविधान इसे **अनुच्छेद 112** के अंतर्गत **"वार्षिक वित्तीय विवरण"** कहता है। हाल के वर्षों में यह **1 फरवरी** को प्रस्तुत किया जाता है। इसके दो भाग हैं: **राजस्व बजट** (दैनिक आय व व्यय) व **पूँजी बजट** (दीर्घकालिक परिसंपत्तियाँ व उधार)।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'When the government spends more than it earns, there is a **deficit**. The most important one is the **Fiscal Deficit** — the gap between the government\'s **total expenditure** and its **total income (excluding borrowings)**. In simple words, it shows **how much the government must borrow** in a year.',
            hi: 'जब सरकार अपनी आय से अधिक खर्च करती है, तो **घाटा** होता है। सबसे महत्वपूर्ण है **राजकोषीय घाटा (Fiscal Deficit)** — सरकार के **कुल व्यय** व उसकी **कुल आय (उधार को छोड़कर)** के बीच का अंतर। सरल शब्दों में, यह दर्शाता है कि सरकार को एक वर्ष में **कितना उधार लेना पड़ेगा**।',
          },
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of a household: your salary is the government\'s **income**, and your monthly spending is its **expenditure**. If you spend more than you earn and take a loan to cover the gap, that loan amount is your **fiscal deficit**. The Budget is simply this same diary — for the whole country.',
            hi: 'एक परिवार की कल्पना करें: आपकी तनख्वाह सरकार की **आय** है, और आपका मासिक खर्च उसका **व्यय**। यदि आप कमाई से अधिक खर्च करते हैं और अंतर पूरा करने के लिए ऋण लेते हैं, तो वह ऋण राशि आपका **राजकोषीय घाटा** है। बजट बस यही डायरी है — पूरे देश के लिए।',
          },
        },
      ],
    },
    {
      id: 'taxes',
      heading: { en: 'Taxes: Direct vs Indirect, and GST', hi: 'कर: प्रत्यक्ष बनाम अप्रत्यक्ष, व GST' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The government\'s biggest source of income is **taxes**. There are two families of taxes — **direct** and **indirect** — and telling them apart is a favourite exam question.',
            hi: 'सरकार की आय का सबसे बड़ा स्रोत **कर** हैं। करों के दो परिवार हैं — **प्रत्यक्ष** व **अप्रत्यक्ष** — और इन्हें अलग पहचानना परीक्षा का प्रिय प्रश्न है।',
          },
        },
        {
          type: 'table',
          caption: {
            en: 'Direct taxes vs Indirect taxes',
            hi: 'प्रत्यक्ष कर बनाम अप्रत्यक्ष कर',
          },
          headers: [
            { en: 'Feature', hi: 'विशेषता' },
            { en: 'Direct Tax', hi: 'प्रत्यक्ष कर' },
            { en: 'Indirect Tax', hi: 'अप्रत्यक्ष कर' },
          ],
          rows: [
            [
              { en: 'Levied on', hi: 'किस पर लगता है' },
              { en: 'Income or wealth of a person/company', hi: 'व्यक्ति/कंपनी की आय या संपत्ति' },
              { en: 'Goods and services', hi: 'वस्तुओं व सेवाओं पर' },
            ],
            [
              { en: 'Who pays', hi: 'कौन चुकाता है' },
              { en: 'Paid directly by the taxpayer', hi: 'सीधे करदाता द्वारा' },
              { en: 'Passed on to the final consumer', hi: 'अंतिम उपभोक्ता पर टाल दिया जाता है' },
            ],
            [
              { en: 'Examples', hi: 'उदाहरण' },
              { en: 'Income Tax, Corporate Tax', hi: 'आयकर, निगम कर' },
              { en: 'GST, Customs Duty', hi: 'GST, सीमा शुल्क' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            en: 'The **Goods and Services Tax (GST)** was introduced on **1 July 2017** with the slogan **"One Nation, One Tax"**. It replaced a maze of many indirect taxes with a single system. GST is governed by the **GST Council**, a **constitutional body under Article 279A**.',
            hi: '**वस्तु एवं सेवा कर (GST)** को **1 जुलाई 2017** को **"एक राष्ट्र, एक कर"** नारे के साथ लागू किया गया। इसने अनेक अप्रत्यक्ष करों की भूलभुलैया के स्थान पर एक ही व्यवस्था दी। GST को **GST परिषद** द्वारा शासित किया जाता है, जो **अनुच्छेद 279A के अंतर्गत एक संवैधानिक निकाय** है।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Memory trick: in a **DIRECT** tax the burden hits you **directly** and cannot be shifted — you earn, you pay (Income Tax). In an **INDIRECT** tax the shop collects it but passes it on **indirectly** to you, the buyer (GST). "Direct = on income; Indirect = on goods."',
            hi: 'याद रखने की तरकीब: **प्रत्यक्ष** कर का बोझ आप पर **सीधे** पड़ता है और टाला नहीं जा सकता — आप कमाते हैं, आप चुकाते हैं (आयकर)। **अप्रत्यक्ष** कर दुकान वसूलती है पर उसे **परोक्ष रूप से** आप, खरीदार पर, टाल देती है (GST)। "प्रत्यक्ष = आय पर; अप्रत्यक्ष = वस्तुओं पर।"',
          },
        },
      ],
    },
    {
      id: 'banking',
      heading: { en: 'Banking and the RBI', hi: 'बैंकिंग व RBI' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The **Reserve Bank of India (RBI)** is India\'s **central bank** — the "bank of banks". Its most important job is to control the country\'s **Monetary Policy**, meaning it manages how much money and credit flow through the economy. This is different from **fiscal policy**, which is about the government\'s budget, taxing and spending.',
            hi: '**भारतीय रिज़र्व बैंक (RBI)** भारत का **केंद्रीय बैंक** है — "बैंकों का बैंक"। इसका सबसे महत्वपूर्ण कार्य देश की **मौद्रिक नीति** को नियंत्रित करना है, अर्थात यह प्रबंधित करता है कि अर्थव्यवस्था में कितना धन व ऋण प्रवाहित हो। यह **राजकोषीय नीति** से भिन्न है, जो सरकार के बजट, कर व व्यय से संबंधित है।',
          },
        },
        {
          type: 'table',
          caption: {
            en: 'Key tools the RBI uses to control money',
            hi: 'धन नियंत्रण हेतु RBI के प्रमुख उपकरण',
          },
          headers: [
            { en: 'Tool', hi: 'उपकरण' },
            { en: 'What it means', hi: 'इसका अर्थ' },
          ],
          rows: [
            [
              { en: 'Repo Rate', hi: 'रेपो दर' },
              { en: 'The rate at which the RBI lends money to banks', hi: 'वह दर जिस पर RBI बैंकों को उधार देता है' },
            ],
            [
              { en: 'CRR (Cash Reserve Ratio)', hi: 'CRR (नकद आरक्षित अनुपात)' },
              { en: 'Share of deposits banks must keep as cash with the RBI', hi: 'जमा का वह भाग जो बैंकों को RBI के पास नकद रखना पड़ता है' },
            ],
            [
              { en: 'SLR (Statutory Liquidity Ratio)', hi: 'SLR (सांविधिक तरलता अनुपात)' },
              { en: 'Share of deposits banks must keep in safe assets (like cash, gold, govt. securities)', hi: 'जमा का वह भाग जो बैंकों को सुरक्षित परिसंपत्तियों (नकद, स्वर्ण, सरकारी प्रतिभूतियाँ) में रखना पड़ता है' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Why these tools matter: when the RBI **raises** the repo rate, borrowing becomes costlier, banks lend less, and money in the market shrinks — this helps **fight inflation**. When it **cuts** the rate, loans get cheaper and spending rises — this helps **boost a slow economy**. So one small rate decision touches every EMI in the country.',
            hi: 'ये उपकरण क्यों मायने रखते हैं: जब RBI रेपो दर **बढ़ाता** है, उधार महँगा होता है, बैंक कम ऋण देते हैं, और बाज़ार में धन घटता है — इससे **मुद्रास्फीति से लड़ने** में मदद मिलती है। जब वह दर **घटाता** है, ऋण सस्ते होते हैं और खर्च बढ़ता है — इससे **सुस्त अर्थव्यवस्था को गति** मिलती है। इस प्रकार एक छोटा दर-निर्णय देश की हर EMI को छूता है।',
          },
        },
        {
          type: 'timeline',
          caption: {
            en: 'Major bank nationalisation in India',
            hi: 'भारत में प्रमुख बैंक राष्ट्रीयकरण',
          },
          events: [
            {
              when: { en: '1969', hi: '1969' },
              label: { en: '14 major commercial banks nationalised', hi: '14 बड़े वाणिज्यिक बैंकों का राष्ट्रीयकरण' },
            },
            {
              when: { en: '1980', hi: '1980' },
              label: { en: '6 more banks nationalised', hi: '6 और बैंकों का राष्ट्रीयकरण' },
            },
          ],
        },
      ],
    },
    {
      id: 'inflation',
      heading: { en: 'Inflation: When Prices Rise', hi: 'मुद्रास्फीति: जब कीमतें बढ़ें' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '**Inflation** is a **sustained rise in the general level of prices**. Its real effect is that it **reduces the purchasing power of money** — the same 100 rupees buys less than before. It is measured using **price indices**: the **Consumer Price Index (CPI)**, which tracks retail prices paid by ordinary people, and the **Wholesale Price Index (WPI)**, which tracks bulk/wholesale prices.',
            hi: '**मुद्रास्फीति** का अर्थ है **कीमतों के सामान्य स्तर में निरंतर वृद्धि**। इसका असली प्रभाव यह है कि यह **मुद्रा की क्रय शक्ति घटाती** है — वही 100 रुपये पहले से कम खरीदते हैं। इसे **मूल्य सूचकांकों** से मापा जाता है: **उपभोक्ता मूल्य सूचकांक (CPI)**, जो आम लोगों द्वारा चुकाई गई खुदरा कीमतों को दर्शाता है, व **थोक मूल्य सूचकांक (WPI)**, जो थोक कीमतों को दर्शाता है।',
          },
        },
        {
          type: 'list',
          items: [
            { en: '**Demand-Pull inflation** — prices rise because there is **too much demand** chasing too few goods (everyone wants to buy, so sellers raise prices).', hi: '**माँग-जनित मुद्रास्फीति (Demand-Pull)** — कीमतें इसलिए बढ़ती हैं क्योंकि कम वस्तुओं के पीछे **बहुत अधिक माँग** होती है (सब खरीदना चाहते हैं, तो विक्रेता दाम बढ़ाते हैं)।' },
            { en: '**Cost-Push inflation** — prices rise because the **cost of production goes up** (costlier fuel, raw materials or wages push prices higher).', hi: '**लागत-जनित मुद्रास्फीति (Cost-Push)** — कीमतें इसलिए बढ़ती हैं क्योंकि **उत्पादन की लागत बढ़** जाती है (महँगा ईंधन, कच्चा माल या मज़दूरी कीमतें ऊपर धकेलते हैं)।' },
          ],
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Imagine your 100-rupee note as an ice cube. In a hot room (high inflation) it **melts fast** — its real value shrinks quickly. In a cool room (low, stable inflation) it barely melts. This is why inflation is described as the silent tax that quietly eats your savings.',
            hi: 'अपने 100 रुपये के नोट को एक बर्फ का टुकड़ा समझिए। गर्म कमरे (उच्च मुद्रास्फीति) में यह **तेज़ी से पिघलता** है — इसका वास्तविक मूल्य जल्दी घटता है। ठंडे कमरे (कम, स्थिर मुद्रास्फीति) में यह मुश्किल से पिघलता है। इसीलिए मुद्रास्फीति को वह मौन कर कहा जाता है जो चुपचाप आपकी बचत खा जाती है।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Under India\'s **inflation-targeting framework**, the RBI aims to keep **CPI inflation at 4%**, within a band of **+/- 2%** (that is, between 2% and 6%). This is the number to remember for the exam: **target 4% (±2%)**.',
            hi: 'भारत के **मुद्रास्फीति-लक्ष्यीकरण ढाँचे** के अंतर्गत, RBI का लक्ष्य **CPI मुद्रास्फीति को 4%** पर रखना है, **+/- 2%** के दायरे में (अर्थात 2% से 6% के बीच)। परीक्षा हेतु यही संख्या याद रखें: **लक्ष्य 4% (±2%)**।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: '**Union Budget** = "Annual Financial Statement" under **Article 112**; presented on **1 February**; two parts — Revenue Budget and Capital Budget.',
      hi: '**केंद्रीय बजट** = **अनुच्छेद 112** के अंतर्गत "वार्षिक वित्तीय विवरण"; **1 फरवरी** को प्रस्तुत; दो भाग — राजस्व बजट व पूँजी बजट।',
    },
    {
      en: '**Fiscal Deficit** = total expenditure − total income (excluding borrowings); it shows how much the government must **borrow**.',
      hi: '**राजकोषीय घाटा** = कुल व्यय − कुल आय (उधार को छोड़कर); यह दर्शाता है कि सरकार को कितना **उधार** लेना पड़ेगा।',
    },
    {
      en: '**Direct taxes** (Income, Corporate) are on income/wealth; **indirect taxes** (GST, Customs) are on goods/services and passed to the consumer.',
      hi: '**प्रत्यक्ष कर** (आयकर, निगम कर) आय/संपत्ति पर; **अप्रत्यक्ष कर** (GST, सीमा शुल्क) वस्तुओं/सेवाओं पर व उपभोक्ता पर टाले जाते हैं।',
    },
    {
      en: '**GST** launched **1 July 2017**, "One Nation, One Tax"; run by the **GST Council** (Article **279A**).',
      hi: '**GST** **1 जुलाई 2017** को लागू, "एक राष्ट्र, एक कर"; संचालन **GST परिषद** (अनुच्छेद **279A**) द्वारा।',
    },
    {
      en: '**RBI** = central bank; controls **Monetary Policy** via **Repo Rate, CRR and SLR**. Bank nationalisation: **1969 (14)** and **1980 (6)**.',
      hi: '**RBI** = केंद्रीय बैंक; **रेपो दर, CRR व SLR** के माध्यम से **मौद्रिक नीति** नियंत्रित करता है। बैंक राष्ट्रीयकरण: **1969 (14)** व **1980 (6)**।',
    },
    {
      en: '**Inflation** = sustained rise in prices; cuts purchasing power. Measured by **CPI and WPI**; types = **Demand-Pull** and **Cost-Push**.',
      hi: '**मुद्रास्फीति** = कीमतों में निरंतर वृद्धि; क्रय शक्ति घटाती है। मापन **CPI व WPI** से; प्रकार = **माँग-जनित** व **लागत-जनित**।',
    },
    {
      en: 'RBI\'s inflation target = **CPI 4% (±2%)**. Remember: **Budget = government/fiscal policy**; **RBI = monetary policy**.',
      hi: 'RBI का मुद्रास्फीति लक्ष्य = **CPI 4% (±2%)**। याद रखें: **बजट = सरकार/राजकोषीय नीति**; **RBI = मौद्रिक नीति**।',
    },
  ],
  quiz: [
    {
      id: 'e2q1',
      type: 'mcq',
      question: {
        en: 'Under which Article of the Constitution is the Union Budget referred to as the "Annual Financial Statement"?',
        hi: 'केंद्रीय बजट को संविधान के किस अनुच्छेद के अंतर्गत "वार्षिक वित्तीय विवरण" कहा जाता है?',
      },
      options: [
        { en: 'Article 108', hi: 'अनुच्छेद 108' },
        { en: 'Article 110', hi: 'अनुच्छेद 110' },
        { en: 'Article 112', hi: 'अनुच्छेद 112' },
        { en: 'Article 280', hi: 'अनुच्छेद 280' },
      ],
      answer: 2,
      explanation: {
        en: 'The Union Budget is called the "Annual Financial Statement" under Article 112 of the Constitution.',
        hi: 'केंद्रीय बजट को संविधान के अनुच्छेद 112 के अंतर्गत "वार्षिक वित्तीय विवरण" कहा जाता है।',
      },
      topic: 'economy-money',
      difficulty: 2,
    },
    {
      id: 'e2q2',
      type: 'mcq',
      question: {
        en: 'The fiscal deficit of the government is best defined as:',
        hi: 'सरकार के राजकोषीय घाटे की सर्वोत्तम परिभाषा है:',
      },
      options: [
        { en: 'Total income minus total tax collected', hi: 'कुल आय घटा कुल कर संग्रह' },
        { en: 'Total expenditure minus total income (excluding borrowings)', hi: 'कुल व्यय घटा कुल आय (उधार को छोड़कर)' },
        { en: 'Revenue expenditure minus capital expenditure', hi: 'राजस्व व्यय घटा पूँजी व्यय' },
        { en: 'Total exports minus total imports', hi: 'कुल निर्यात घटा कुल आयात' },
      ],
      answer: 1,
      explanation: {
        en: 'The fiscal deficit is the gap between total expenditure and total income (excluding borrowings); it shows how much the government must borrow.',
        hi: 'राजकोषीय घाटा कुल व्यय व कुल आय (उधार को छोड़कर) के बीच का अंतर है; यह दर्शाता है कि सरकार को कितना उधार लेना पड़ेगा।',
      },
      topic: 'economy-money',
      difficulty: 2,
    },
    {
      id: 'e2q3',
      type: 'mcq',
      question: {
        en: 'Which of the following is a direct tax?',
        hi: 'निम्न में से कौन-सा एक प्रत्यक्ष कर है?',
      },
      options: [
        { en: 'Goods and Services Tax (GST)', hi: 'वस्तु एवं सेवा कर (GST)' },
        { en: 'Customs Duty', hi: 'सीमा शुल्क' },
        { en: 'Income Tax', hi: 'आयकर' },
        { en: 'Excise Duty', hi: 'उत्पाद शुल्क' },
      ],
      answer: 2,
      explanation: {
        en: 'Income Tax is a direct tax paid directly on income. GST, customs and excise are indirect taxes on goods and services.',
        hi: 'आयकर एक प्रत्यक्ष कर है जो आय पर सीधे चुकाया जाता है। GST, सीमा शुल्क व उत्पाद शुल्क वस्तुओं व सेवाओं पर अप्रत्यक्ष कर हैं।',
      },
      topic: 'economy-money',
      difficulty: 1,
    },
    {
      id: 'e2q4',
      type: 'mcq',
      question: {
        en: 'The Goods and Services Tax (GST) was introduced in India on:',
        hi: 'भारत में वस्तु एवं सेवा कर (GST) कब लागू किया गया?',
      },
      options: [
        { en: '1 April 2016', hi: '1 अप्रैल 2016' },
        { en: '1 July 2017', hi: '1 जुलाई 2017' },
        { en: '1 January 2018', hi: '1 जनवरी 2018' },
        { en: '1 February 2019', hi: '1 फरवरी 2019' },
      ],
      answer: 1,
      explanation: {
        en: 'GST was introduced on 1 July 2017 with the slogan "One Nation, One Tax", governed by the GST Council under Article 279A.',
        hi: 'GST को 1 जुलाई 2017 को "एक राष्ट्र, एक कर" नारे के साथ लागू किया गया, जो अनुच्छेद 279A के अंतर्गत GST परिषद द्वारा शासित है।',
      },
      topic: 'economy-money',
      difficulty: 1,
    },
    {
      id: 'e2q5',
      type: 'mcq',
      question: {
        en: 'The rate at which the RBI lends money to commercial banks is called the:',
        hi: 'वह दर जिस पर RBI वाणिज्यिक बैंकों को उधार देता है, कहलाती है:',
      },
      options: [
        { en: 'Repo Rate', hi: 'रेपो दर' },
        { en: 'Cash Reserve Ratio (CRR)', hi: 'नकद आरक्षित अनुपात (CRR)' },
        { en: 'Statutory Liquidity Ratio (SLR)', hi: 'सांविधिक तरलता अनुपात (SLR)' },
        { en: 'Bank Rate of Interest on deposits', hi: 'जमा पर बैंक ब्याज दर' },
      ],
      answer: 0,
      explanation: {
        en: 'The Repo Rate is the rate at which the RBI lends to banks. CRR and SLR are reserve requirements banks must maintain.',
        hi: 'रेपो दर वह दर है जिस पर RBI बैंकों को उधार देता है। CRR व SLR आरक्षण आवश्यकताएँ हैं जो बैंकों को बनाए रखनी पड़ती हैं।',
      },
      topic: 'economy-money',
      difficulty: 1,
    },
    {
      id: 'e2q6',
      type: 'mcq',
      question: {
        en: 'Which indices are used in India to measure inflation?',
        hi: 'भारत में मुद्रास्फीति मापने के लिए कौन-से सूचकांक प्रयुक्त होते हैं?',
      },
      options: [
        { en: 'Sensex and Nifty', hi: 'सेंसेक्स व निफ्टी' },
        { en: 'Human Development Index and GDP', hi: 'मानव विकास सूचकांक व GDP' },
        { en: 'Consumer Price Index (CPI) and Wholesale Price Index (WPI)', hi: 'उपभोक्ता मूल्य सूचकांक (CPI) व थोक मूल्य सूचकांक (WPI)' },
        { en: 'Gini Coefficient and Poverty Ratio', hi: 'गिनी गुणांक व गरीबी अनुपात' },
      ],
      answer: 2,
      explanation: {
        en: 'Inflation is measured using price indices — the Consumer Price Index (CPI, retail) and the Wholesale Price Index (WPI, wholesale).',
        hi: 'मुद्रास्फीति मूल्य सूचकांकों से मापी जाती है — उपभोक्ता मूल्य सूचकांक (CPI, खुदरा) व थोक मूल्य सूचकांक (WPI, थोक)।',
      },
      topic: 'economy-money',
      difficulty: 2,
    },
    {
      id: 'e2q7',
      type: 'mcq',
      question: {
        en: 'Under the inflation-targeting framework, the RBI aims to keep CPI inflation at:',
        hi: 'मुद्रास्फीति-लक्ष्यीकरण ढाँचे के अंतर्गत, RBI का लक्ष्य CPI मुद्रास्फीति को किस स्तर पर रखना है?',
      },
      options: [
        { en: '2% (within a band of +/- 1%)', hi: '2% (+/- 1% के दायरे में)' },
        { en: '4% (within a band of +/- 2%)', hi: '4% (+/- 2% के दायरे में)' },
        { en: '6% (within a band of +/- 2%)', hi: '6% (+/- 2% के दायरे में)' },
        { en: '8% (within a band of +/- 3%)', hi: '8% (+/- 3% के दायरे में)' },
      ],
      answer: 1,
      explanation: {
        en: 'The RBI aims to keep CPI inflation at 4%, within a band of +/- 2% (i.e. between 2% and 6%).',
        hi: 'RBI का लक्ष्य CPI मुद्रास्फीति को 4% पर रखना है, +/- 2% के दायरे में (अर्थात 2% से 6% के बीच)।',
      },
      topic: 'economy-money',
      difficulty: 2,
    },
    {
      id: 'e2q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. Monetary policy in India is controlled by the RBI.\n2. In 1969, 14 major commercial banks were nationalised.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. भारत में मौद्रिक नीति RBI द्वारा नियंत्रित होती है।\n2. 1969 में 14 बड़े वाणिज्यिक बैंकों का राष्ट्रीयकरण हुआ।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The RBI controls monetary policy (repo/CRR/SLR), and 14 major banks were nationalised in 1969 (6 more in 1980).',
        hi: 'दोनों सही हैं। RBI मौद्रिक नीति (रेपो/CRR/SLR) नियंत्रित करता है, व 1969 में 14 बड़े बैंकों का राष्ट्रीयकरण हुआ (1980 में 6 और)।',
      },
      topic: 'economy-money',
      difficulty: 3,
    },
  ],
};
