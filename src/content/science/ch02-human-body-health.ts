import type { Chapter } from '../types';

export const scienceCh02: Chapter = {
  id: 'science-ch02',
  subjectId: 'science',
  order: 2,
  title: {
    en: 'The Human Body & Health',
    hi: 'मानव शरीर व स्वास्थ्य',
  },
  intro: {
    en: 'Your own body is the easiest exam topic to remember — you carry it everywhere. BPSC repeatedly asks how many bones we have, how many chambers the heart has, who is the universal blood donor, and which mosquito spreads malaria. This chapter organises the human body into simple systems and then lists the diseases and deficiencies most asked in the exam, so a few minutes here can fetch several sure marks.',
    hi: 'आपका अपना शरीर परीक्षा का सबसे आसान विषय है — आप इसे हर जगह साथ रखते हैं। BPSC बार-बार पूछता है कि हमारे कितने हड्डियाँ हैं, हृदय में कितने कक्ष हैं, सर्वदाता रक्तदाता कौन है, और मलेरिया कौन-सा मच्छर फैलाता है। यह अध्याय मानव शरीर को सरल तंत्रों में बाँटता है और फिर परीक्षा में सर्वाधिक पूछे जाने वाले रोगों व अभावों की सूची देता है, ताकि यहाँ बिताए कुछ मिनट कई पक्के अंक दिला सकें।',
  },
  sections: [
    {
      id: 'organ-systems',
      heading: { en: 'The Body\'s Organ Systems', hi: 'शरीर के अंग-तंत्र' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The human body is made of many **organ systems** that work together. Each system does one main job. You should know the job of each in one line.',
            hi: 'मानव शरीर कई **अंग-तंत्रों** से बना है जो मिलकर कार्य करते हैं। हर तंत्र एक मुख्य कार्य करता है। आपको प्रत्येक का कार्य एक पंक्ति में जानना चाहिए।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Major organ systems and their main jobs', hi: 'प्रमुख अंग-तंत्र व उनके मुख्य कार्य' },
          headers: [
            { en: 'System', hi: 'तंत्र' },
            { en: 'Main job', hi: 'मुख्य कार्य' },
          ],
          rows: [
            [{ en: 'Skeletal', hi: 'कंकाल तंत्र' }, { en: 'Supports the body and protects organs (**206 bones** in adults)', hi: 'शरीर को सहारा देता है व अंगों की रक्षा करता है (वयस्क में **206 हड्डियाँ**)' }],
            [{ en: 'Muscular', hi: 'पेशीय तंत्र' }, { en: 'Enables movement of the body', hi: 'शरीर की गति संभव बनाता है' }],
            [{ en: 'Circulatory', hi: 'परिसंचरण तंत्र' }, { en: 'Heart pumps blood to carry oxygen and nutrients', hi: 'हृदय ऑक्सीजन व पोषक तत्व पहुँचाने हेतु रक्त पंप करता है' }],
            [{ en: 'Respiratory', hi: 'श्वसन तंत्र' }, { en: 'Lungs take in oxygen, remove carbon dioxide', hi: 'फेफड़े ऑक्सीजन लेते व कार्बन डाइऑक्साइड निकालते हैं' }],
            [{ en: 'Digestive', hi: 'पाचन तंत्र' }, { en: 'Breaks down food to absorb nutrients', hi: 'पोषक तत्व अवशोषित करने हेतु भोजन को पचाता है' }],
            [{ en: 'Nervous', hi: 'तंत्रिका तंत्र' }, { en: 'Brain and nerves control and coordinate the body', hi: 'मस्तिष्क व तंत्रिकाएँ शरीर को नियंत्रित व समन्वित करती हैं' }],
            [{ en: 'Excretory', hi: 'उत्सर्जन तंत्र' }, { en: 'Kidneys remove waste as urine', hi: 'गुर्दे अपशिष्ट को मूत्र के रूप में निकालते हैं' }],
          ],
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'These systems appear as one-line factual questions. The three most tested facts are the **skeletal** (206 bones), the **circulatory** (4-chambered heart), and the **respiratory** (oxygen in, carbon dioxide out) systems — master these first.',
            hi: 'ये तंत्र एक-पंक्ति तथ्यात्मक प्रश्नों के रूप में आते हैं। सर्वाधिक पूछे जाने वाले तीन तथ्य हैं — **कंकाल तंत्र** (206 हड्डियाँ), **परिसंचरण तंत्र** (4 कक्षों वाला हृदय), व **श्वसन तंत्र** (ऑक्सीजन अंदर, कार्बन डाइऑक्साइड बाहर) — इन्हें पहले याद करें।',
          },
        },
      ],
    },
    {
      id: 'heart-blood',
      heading: { en: 'Heart, Blood & Blood Groups', hi: 'हृदय, रक्त व रक्त समूह' },
      blocks: [
        {
          type: 'list',
          items: [
            { en: 'The **heart has 4 chambers** — 2 upper chambers (**atria**) and 2 lower chambers (**ventricles**).', hi: '**हृदय में 4 कक्ष** होते हैं — 2 ऊपरी कक्ष (**अलिंद**) व 2 निचले कक्ष (**निलय**)।' },
            { en: 'Blood is pumped through **arteries** (away from the heart) and returns through **veins** (back to the heart).', hi: 'रक्त **धमनियों** (हृदय से बाहर) द्वारा पंप होता है व **शिराओं** (हृदय की ओर वापस) द्वारा लौटता है।' },
            { en: '**Red blood cells** carry oxygen using **haemoglobin**, which contains **iron**.', hi: '**लाल रक्त कोशिकाएँ** **हीमोग्लोबिन** की सहायता से ऑक्सीजन ले जाती हैं, जिसमें **लोहा (आयरन)** होता है।' },
            { en: 'Blood groups (ABO system) are **A, B, AB, O**, each marked **+ or –** by the **Rh factor**.', hi: 'रक्त समूह (ABO प्रणाली) **A, B, AB, O** हैं, प्रत्येक **Rh कारक** द्वारा **+ या –** से चिह्नित होता है।' },
          ],
        },
        {
          type: 'table',
          caption: { en: 'Blood group: donor and recipient', hi: 'रक्त समूह: दाता व प्राप्तकर्ता' },
          headers: [
            { en: 'Special group', hi: 'विशेष समूह' },
            { en: 'Why it is special', hi: 'क्यों विशेष है' },
          ],
          rows: [
            [{ en: 'O-negative (O–)', hi: 'O-निगेटिव (O–)' }, { en: 'Universal **donor** — can give blood to anyone', hi: 'सर्वदाता **दाता** — किसी को भी रक्त दे सकता है' }],
            [{ en: 'AB-positive (AB+)', hi: 'AB-पॉजिटिव (AB+)' }, { en: 'Universal **recipient** — can receive blood from anyone', hi: 'सर्वग्राही **प्राप्तकर्ता** — किसी से भी रक्त ले सकता है' }],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Remember: **O– gives to all, AB+ takes from all.** "O" for "Offer to everyone" (donor); "AB+" for "Absorbs from everyone" (recipient).',
            hi: 'याद रखें: **O– सबको देता है, AB+ सबसे लेता है।** "O" यानी "सबको देना" (दाता); "AB+" यानी "सबसे लेना" (प्राप्तकर्ता)।',
          },
        },
      ],
    },
    {
      id: 'diseases',
      heading: { en: 'Diseases by Cause', hi: 'कारण के अनुसार रोग' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'The exam loves to ask whether a disease is caused by **bacteria**, a **virus**, or spread by an **insect (vector)**. Learn which basket each disease falls into.',
            hi: 'परीक्षा यह पूछना पसंद करती है कि कोई रोग **जीवाणु**, **विषाणु** से होता है, या **कीट (वाहक)** द्वारा फैलता है। जानें कि प्रत्येक रोग किस श्रेणी में आता है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Common diseases grouped by cause', hi: 'कारण के अनुसार सामान्य रोग' },
          headers: [
            { en: 'Cause', hi: 'कारण' },
            { en: 'Diseases', hi: 'रोग' },
          ],
          rows: [
            [{ en: 'Bacterial', hi: 'जीवाणुजनित' }, { en: 'Tuberculosis (TB), Cholera, Typhoid', hi: 'तपेदिक (TB), हैजा, टाइफाइड' }],
            [{ en: 'Viral', hi: 'विषाणुजनित' }, { en: 'Common cold, Influenza, Dengue, Polio, COVID-19', hi: 'सर्दी-जुकाम, इन्फ्लुएंजा, डेंगू, पोलियो, कोविड-19' }],
            [{ en: 'Vector-borne (spread by insects)', hi: 'वाहकजनित (कीटों द्वारा फैलने वाले)' }, { en: 'Malaria — *Plasmodium* parasite via female *Anopheles* mosquito; Dengue — *Aedes* mosquito', hi: 'मलेरिया — मादा *एनोफिलीज़* मच्छर द्वारा *प्लाज्मोडियम* परजीवी; डेंगू — *एडीज़* मच्छर' }],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Do not confuse the two mosquitoes: **Malaria** is spread by the female **Anopheles** mosquito and is caused by the *Plasmodium* parasite. **Dengue** is spread by the **Aedes** mosquito and is caused by a virus. Malaria = parasite; Dengue = virus.',
            hi: 'दोनों मच्छरों में भ्रम न करें: **मलेरिया** मादा **एनोफिलीज़** मच्छर द्वारा फैलता है व *प्लाज्मोडियम* परजीवी से होता है। **डेंगू** **एडीज़** मच्छर द्वारा फैलता है व विषाणु से होता है। मलेरिया = परजीवी; डेंगू = विषाणु।',
          },
        },
      ],
    },
    {
      id: 'deficiency',
      heading: { en: 'Nutrition-Deficiency Diseases', hi: 'पोषण-अभावजन्य रोग' },
      blocks: [
        {
          type: 'table',
          caption: { en: 'Mineral deficiency and the resulting disease', hi: 'खनिज की कमी व उससे होने वाला रोग' },
          headers: [
            { en: 'Deficiency of', hi: 'किसकी कमी' },
            { en: 'Disease', hi: 'रोग' },
          ],
          rows: [
            [{ en: 'Iron', hi: 'लोहा (आयरन)' }, { en: 'Anaemia (low haemoglobin, weakness)', hi: 'रक्ताल्पता / एनीमिया (कम हीमोग्लोबिन, कमजोरी)' }],
            [{ en: 'Iodine', hi: 'आयोडीन' }, { en: 'Goitre (swelling of the thyroid gland in the neck)', hi: 'घेंघा / गॉइटर (गर्दन में थायरॉइड ग्रंथि की सूजन)' }],
          ],
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'These are **mineral** deficiencies, not vitamin ones. **Iron → Anaemia**, **Iodine → Goitre**. Vitamin-deficiency diseases (like night blindness, scurvy, rickets) are covered in the Everyday Science chapter.',
            hi: 'ये **खनिज** की कमियाँ हैं, विटामिन की नहीं। **लोहा → रक्ताल्पता**, **आयोडीन → घेंघा**। विटामिन-अभावजन्य रोग (जैसे रतौंधी, स्कर्वी, रिकेट्स) दैनिक विज्ञान अध्याय में हैं।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Link them to the body: iron sits in the **blood** (haemoglobin) → too little iron = **Anaemia**. Iodine is used by the **thyroid** in the neck → too little iodine = **Goitre** (neck swelling).',
            hi: 'इन्हें शरीर से जोड़ें: लोहा **रक्त** (हीमोग्लोबिन) में रहता है → कम लोहा = **रक्ताल्पता**। आयोडीन गर्दन की **थायरॉइड** द्वारा प्रयोग होता है → कम आयोडीन = **घेंघा** (गर्दन की सूजन)।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'An adult human body has **206 bones**; the skeletal system supports the body and protects organs.',
      hi: 'वयस्क मानव शरीर में **206 हड्डियाँ** होती हैं; कंकाल तंत्र शरीर को सहारा देता व अंगों की रक्षा करता है।',
    },
    {
      en: 'The heart has **4 chambers** — 2 atria and 2 ventricles. Arteries carry blood away; veins bring it back.',
      hi: 'हृदय में **4 कक्ष** होते हैं — 2 अलिंद व 2 निलय। धमनियाँ रक्त बाहर ले जाती हैं; शिराएँ वापस लाती हैं।',
    },
    {
      en: 'Red blood cells carry oxygen using **haemoglobin**, which contains **iron**. Lungs take in oxygen, give out carbon dioxide.',
      hi: 'लाल रक्त कोशिकाएँ **हीमोग्लोबिन** (जिसमें **लोहा** है) से ऑक्सीजन ले जाती हैं। फेफड़े ऑक्सीजन लेते, कार्बन डाइऑक्साइड छोड़ते हैं।',
    },
    {
      en: '**O-negative** is the universal donor; **AB-positive** is the universal recipient.',
      hi: '**O-निगेटिव** सर्वदाता है; **AB-पॉजिटिव** सर्वग्राही है।',
    },
    {
      en: 'Bacterial: **TB, Cholera, Typhoid.** Viral: **cold, influenza, Dengue, Polio, COVID-19.**',
      hi: 'जीवाणुजनित: **TB, हैजा, टाइफाइड।** विषाणुजनित: **सर्दी-जुकाम, इन्फ्लुएंजा, डेंगू, पोलियो, कोविड-19।**',
    },
    {
      en: '**Malaria** = *Plasmodium* parasite via female **Anopheles** mosquito; **Dengue** = virus via **Aedes** mosquito.',
      hi: '**मलेरिया** = मादा **एनोफिलीज़** मच्छर द्वारा *प्लाज्मोडियम* परजीवी; **डेंगू** = **एडीज़** मच्छर द्वारा विषाणु।',
    },
    {
      en: 'Mineral deficiency: **iron → Anaemia**, **iodine → Goitre.**',
      hi: 'खनिज की कमी: **लोहा → रक्ताल्पता**, **आयोडीन → घेंघा।**',
    },
  ],
  quiz: [
    {
      id: 's2q1',
      type: 'mcq',
      question: {
        en: 'How many bones are there in the body of an adult human?',
        hi: 'एक वयस्क मानव के शरीर में कितनी हड्डियाँ होती हैं?',
      },
      options: [
        { en: '186', hi: '186' },
        { en: '206', hi: '206' },
        { en: '216', hi: '216' },
        { en: '306', hi: '306' },
      ],
      answer: 1,
      explanation: {
        en: 'An adult human has 206 bones. (A newborn baby has more, which fuse together with age.)',
        hi: 'एक वयस्क मानव में 206 हड्डियाँ होती हैं। (नवजात शिशु में अधिक होती हैं, जो उम्र के साथ जुड़ जाती हैं।)',
      },
      topic: 'science-body',
      difficulty: 1,
    },
    {
      id: 's2q2',
      type: 'mcq',
      question: {
        en: 'How many chambers does the human heart have?',
        hi: 'मानव हृदय में कितने कक्ष होते हैं?',
      },
      options: [
        { en: '2', hi: '2' },
        { en: '3', hi: '3' },
        { en: '4', hi: '4' },
        { en: '5', hi: '5' },
      ],
      answer: 2,
      explanation: {
        en: 'The human heart has 4 chambers — 2 atria (upper) and 2 ventricles (lower).',
        hi: 'मानव हृदय में 4 कक्ष होते हैं — 2 अलिंद (ऊपरी) व 2 निलय (निचले)।',
      },
      topic: 'science-body',
      difficulty: 1,
    },
    {
      id: 's2q3',
      type: 'mcq',
      question: {
        en: 'Which blood group is called the universal donor?',
        hi: 'किस रक्त समूह को सर्वदाता कहा जाता है?',
      },
      options: [
        { en: 'AB-positive', hi: 'AB-पॉजिटिव' },
        { en: 'A-positive', hi: 'A-पॉजिटिव' },
        { en: 'O-negative', hi: 'O-निगेटिव' },
        { en: 'B-negative', hi: 'B-निगेटिव' },
      ],
      answer: 2,
      explanation: {
        en: 'O-negative (O–) is the universal donor and can give blood to anyone. AB-positive is the universal recipient.',
        hi: 'O-निगेटिव (O–) सर्वदाता है और किसी को भी रक्त दे सकता है। AB-पॉजिटिव सर्वग्राही है।',
      },
      topic: 'science-body',
      difficulty: 2,
    },
    {
      id: 's2q4',
      type: 'mcq',
      question: {
        en: 'Malaria is caused by which parasite?',
        hi: 'मलेरिया किस परजीवी से होता है?',
      },
      options: [
        { en: 'Aedes', hi: 'एडीज़' },
        { en: 'Plasmodium', hi: 'प्लाज्मोडियम' },
        { en: 'Anopheles', hi: 'एनोफिलीज़' },
        { en: 'Culex', hi: 'क्यूलेक्स' },
      ],
      answer: 1,
      explanation: {
        en: 'Malaria is caused by the Plasmodium parasite, which is spread by the bite of the female Anopheles mosquito. Anopheles is the mosquito, not the parasite.',
        hi: 'मलेरिया प्लाज्मोडियम परजीवी से होता है, जो मादा एनोफिलीज़ मच्छर के काटने से फैलता है। एनोफिलीज़ मच्छर है, परजीवी नहीं।',
      },
      topic: 'science-body',
      difficulty: 2,
    },
    {
      id: 's2q5',
      type: 'mcq',
      question: {
        en: 'The mineral present in haemoglobin, which helps carry oxygen, is:',
        hi: 'हीमोग्लोबिन में उपस्थित वह खनिज, जो ऑक्सीजन ले जाने में मदद करता है, है:',
      },
      options: [
        { en: 'Calcium', hi: 'कैल्शियम' },
        { en: 'Iodine', hi: 'आयोडीन' },
        { en: 'Iron', hi: 'लोहा (आयरन)' },
        { en: 'Sodium', hi: 'सोडियम' },
      ],
      answer: 2,
      explanation: {
        en: 'Haemoglobin in red blood cells contains iron, which binds and carries oxygen. Iron deficiency causes anaemia.',
        hi: 'लाल रक्त कोशिकाओं के हीमोग्लोबिन में लोहा होता है, जो ऑक्सीजन को बाँधकर ले जाता है। लोहे की कमी से रक्ताल्पता होती है।',
      },
      topic: 'science-body',
      difficulty: 2,
    },
    {
      id: 's2q6',
      type: 'mcq',
      question: {
        en: 'Deficiency of iodine in the body causes which disease?',
        hi: 'शरीर में आयोडीन की कमी से कौन-सा रोग होता है?',
      },
      options: [
        { en: 'Anaemia', hi: 'रक्ताल्पता' },
        { en: 'Goitre', hi: 'घेंघा' },
        { en: 'Scurvy', hi: 'स्कर्वी' },
        { en: 'Rickets', hi: 'रिकेट्स' },
      ],
      answer: 1,
      explanation: {
        en: 'Iodine deficiency causes goitre — a swelling of the thyroid gland in the neck. Iron deficiency causes anaemia.',
        hi: 'आयोडीन की कमी से घेंघा होता है — गर्दन में थायरॉइड ग्रंथि की सूजन। लोहे की कमी से रक्ताल्पता होती है।',
      },
      topic: 'science-body',
      difficulty: 2,
    },
    {
      id: 's2q7',
      type: 'mcq',
      question: {
        en: 'Which one of the following diseases is caused by a bacterium?',
        hi: 'निम्न में से कौन-सा रोग जीवाणु से होता है?',
      },
      options: [
        { en: 'Dengue', hi: 'डेंगू' },
        { en: 'Polio', hi: 'पोलियो' },
        { en: 'Tuberculosis', hi: 'तपेदिक (TB)' },
        { en: 'Influenza', hi: 'इन्फ्लुएंजा' },
      ],
      answer: 2,
      explanation: {
        en: 'Tuberculosis (TB) is a bacterial disease. Dengue, polio and influenza are all viral diseases.',
        hi: 'तपेदिक (TB) एक जीवाणुजनित रोग है। डेंगू, पोलियो व इन्फ्लुएंजा सभी विषाणुजनित रोग हैं।',
      },
      topic: 'science-body',
      difficulty: 2,
    },
    {
      id: 's2q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. Dengue is spread by the Aedes mosquito.\n2. AB-positive is the universal blood recipient.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. डेंगू एडीज़ मच्छर द्वारा फैलता है।\n2. AB-पॉजिटिव सर्वग्राही रक्त प्राप्तकर्ता है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. Dengue is spread by the Aedes mosquito, and AB-positive can receive blood from any group, making it the universal recipient.',
        hi: 'दोनों सही हैं। डेंगू एडीज़ मच्छर द्वारा फैलता है, और AB-पॉजिटिव किसी भी समूह से रक्त ले सकता है, अतः यह सर्वग्राही है।',
      },
      topic: 'science-body',
      difficulty: 3,
    },
  ],
};
