import type { Chapter } from '../types';

export const polityCh10: Chapter = {
  id: 'polity-ch10',
  subjectId: 'polity',
  order: 10,
  title: {
    en: 'State Government: Governor, CM & the Bihar Legislature',
    hi: 'राज्य सरकार: राज्यपाल, मुख्यमंत्री व बिहार विधानमंडल',
  },
  intro: {
    en: 'The state government is a smaller mirror of the Union: the **Governor** stands where the President stands, and the **Chief Minister** stands where the Prime Minister stands. Bihar is special — it is one of the few states with **two houses** (Vidhan Sabha and Vidhan Parishad). BPSC loves this chapter because Bihar\'s own numbers — 243 and 75 — come straight from it.',
    hi: 'राज्य सरकार संघ का एक छोटा प्रतिबिम्ब है: **राज्यपाल** वहाँ खड़े हैं जहाँ राष्ट्रपति, और **मुख्यमंत्री** वहाँ जहाँ प्रधानमंत्री। बिहार विशेष है — यह उन गिने-चुने राज्यों में से है जहाँ **दो सदन** हैं (विधान सभा व विधान परिषद)। BPSC को यह अध्याय प्रिय है क्योंकि बिहार की अपनी संख्याएँ — 243 और 75 — सीधे इसी से आती हैं।',
  },
  sections: [
    {
      id: 'governor',
      heading: { en: 'The Governor: Constitutional Head of the State', hi: 'राज्यपाल: राज्य का संवैधानिक प्रमुख' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '**Article 153** says there shall be a Governor for each state — and the **same person can be Governor of two or more states**. Under **Article 154**, the executive power of the state is vested in the Governor. But remember the biggest exam point: the Governor is **appointed by the President (Article 155)** — not elected — and holds office **during the pleasure of the President (Article 156)**. Minimum age is **35 years (Article 157)**.',
            hi: '**अनुच्छेद 153** कहता है कि प्रत्येक राज्य के लिए एक राज्यपाल होगा — और **एक ही व्यक्ति दो या अधिक राज्यों का राज्यपाल हो सकता है**। **अनुच्छेद 154** के अंतर्गत, राज्य की कार्यपालिका शक्ति राज्यपाल में निहित है। पर सबसे बड़ा परीक्षा-बिंदु याद रखें: राज्यपाल की **नियुक्ति राष्ट्रपति करते हैं (अनुच्छेद 155)** — निर्वाचन नहीं होता — और वे **राष्ट्रपति के प्रसादपर्यंत (अनुच्छेद 156)** पद पर रहते हैं। न्यूनतम आयु **35 वर्ष (अनुच्छेद 157)** है।',
          },
        },
        {
          type: 'table',
          caption: { en: 'President vs Governor — same seat, different rules', hi: 'राष्ट्रपति बनाम राज्यपाल — एक जैसी कुर्सी, अलग नियम' },
          headers: [
            { en: 'Feature', hi: 'विशेषता' },
            { en: 'President (Union)', hi: 'राष्ट्रपति (संघ)' },
            { en: 'Governor (State)', hi: 'राज्यपाल (राज्य)' },
          ],
          rows: [
            [
              { en: 'How chosen', hi: 'चयन कैसे' },
              { en: '**Elected** (indirectly, by an electoral college)', hi: '**निर्वाचित** (अप्रत्यक्ष रूप से, निर्वाचक मंडल द्वारा)' },
              { en: '**Appointed** by the President (Art 155)', hi: 'राष्ट्रपति द्वारा **नियुक्त** (अनु. 155)' },
            ],
            [
              { en: 'Holds office', hi: 'पदावधि' },
              { en: 'Fixed term; removable only by impeachment', hi: 'निश्चित कार्यकाल; केवल महाभियोग से हटाए जा सकते हैं' },
              { en: 'During the **pleasure of the President** (Art 156)', hi: '**राष्ट्रपति के प्रसादपर्यंत** (अनु. 156)' },
            ],
            [
              { en: 'Minimum age', hi: 'न्यूनतम आयु' },
              { en: '35 years', hi: '35 वर्ष' },
              { en: '**35 years** (Art 157)', hi: '**35 वर्ष** (अनु. 157)' },
            ],
            [
              { en: 'Ordinance power', hi: 'अध्यादेश शक्ति' },
              { en: 'Article **123**', hi: 'अनुच्छेद **123**' },
              { en: 'Article **213**', hi: 'अनुच्छेद **213**' },
            ],
            [
              { en: 'Discretionary powers', hi: 'विवेकाधीन शक्तियाँ' },
              { en: 'Narrower', hi: 'सीमित' },
              { en: '**Wider** than the President\'s', hi: 'राष्ट्रपति से **अधिक व्यापक**' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Classic trap: "The Governor is elected by the people/MLAs of the state." **Wrong.** The Governor is **appointed by the President** and is not elected at all. Also note: one person **can** be Governor of two or more states.',
            hi: 'क्लासिक जाल: "राज्यपाल का निर्वाचन राज्य की जनता/विधायकों द्वारा होता है।" **गलत।** राज्यपाल की **नियुक्ति राष्ट्रपति करते हैं**, कोई निर्वाचन नहीं होता। यह भी नोट करें: एक ही व्यक्ति दो या अधिक राज्यों का राज्यपाल **हो सकता है**।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Why does the Governor have **wider discretion** than the President? Because the Constitution expects the Governor to also act as a **link between the Centre and the state** — a role the President does not need at the Union level.',
            hi: 'राज्यपाल के पास राष्ट्रपति से **अधिक विवेकाधिकार** क्यों? क्योंकि संविधान राज्यपाल से **केंद्र और राज्य के बीच कड़ी** की भूमिका की भी अपेक्षा करता है — ऐसी भूमिका जिसकी राष्ट्रपति को संघ स्तर पर आवश्यकता नहीं।',
          },
        },
      ],
    },
    {
      id: 'cm-com',
      heading: { en: 'Chief Minister & Council of Ministers: The Real Executive', hi: 'मुख्यमंत्री व मंत्रिपरिषद: वास्तविक कार्यपालिका' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Just as the President is the nominal head and the PM the real head at the Union, in a state the **Governor is the constitutional head** while the **Chief Minister is the real head** of the government. Under **Article 164**, the Chief Minister is **appointed by the Governor**, and the **other ministers are appointed by the Governor on the advice of the CM**.',
            hi: 'जिस प्रकार संघ में राष्ट्रपति नाममात्र के प्रमुख और प्रधानमंत्री वास्तविक प्रमुख हैं, उसी प्रकार राज्य में **राज्यपाल संवैधानिक प्रमुख** हैं जबकि **मुख्यमंत्री सरकार के वास्तविक प्रमुख**। **अनुच्छेद 164** के अंतर्गत, मुख्यमंत्री की **नियुक्ति राज्यपाल करते हैं**, और **अन्य मंत्रियों की नियुक्ति राज्यपाल मुख्यमंत्री की सलाह पर करते हैं**।',
          },
        },
        {
          type: 'note',
          kind: 'analogy',
          text: {
            en: 'Think of it as the **same drama on a smaller stage**: President ↔ Governor, Prime Minister ↔ Chief Minister, Parliament ↔ Vidhan Mandal. Whatever you learned about the President–PM relationship, replay it at the state level.',
            hi: 'इसे **छोटे मंच पर वही नाटक** समझें: राष्ट्रपति ↔ राज्यपाल, प्रधानमंत्री ↔ मुख्यमंत्री, संसद ↔ विधान मंडल। राष्ट्रपति–प्रधानमंत्री संबंध के बारे में जो सीखा है, उसे राज्य स्तर पर दोहरा दें।',
          },
        },
        {
          type: 'p',
          text: {
            en: 'The **91st Constitutional Amendment (2003)** put a cap on jumbo ministries: the total number of ministers, **including the Chief Minister**, must not exceed **15% of the strength of the Legislative Assembly**. For Bihar (243 MLAs), that keeps the ministry within about 36 ministers.',
            hi: '**91वें संविधान संशोधन (2003)** ने विशाल मंत्रिमंडलों पर रोक लगाई: मंत्रियों की कुल संख्या, **मुख्यमंत्री सहित**, विधान सभा की सदस्य संख्या के **15% से अधिक नहीं** हो सकती। बिहार (243 विधायक) के लिए इसका अर्थ है कि मंत्रिपरिषद लगभग 36 मंत्रियों तक सीमित रहती है।',
          },
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'Memory hook: **"91 caps at 15"** — the **91st** Amendment fixed the **15%** ceiling on the Council of Ministers (CM included), at both Union and state level.',
            hi: 'स्मृति-सूत्र: **"91 पर 15 की टोपी"** — **91वें** संशोधन ने मंत्रिपरिषद (मुख्यमंत्री सहित) पर **15%** की सीमा लगाई, संघ और राज्य दोनों स्तरों पर।',
          },
        },
      ],
    },
    {
      id: 'bihar-legislature',
      heading: { en: 'Bihar\'s Bicameral Vidhan Mandal', hi: 'बिहार का द्विसदनीय विधान मंडल' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Most states have only one house, but Bihar has a **bicameral legislature (Vidhan Mandal)**: the **Vidhan Sabha** (Legislative Assembly) with **243 members** and the **Vidhan Parishad** (Legislative Council) with **75 members**. Only a handful of states have Councils — Bihar, **Uttar Pradesh, Maharashtra, Karnataka, Andhra Pradesh and Telangana** are among them.',
            hi: 'अधिकांश राज्यों में केवल एक सदन है, पर बिहार में **द्विसदनीय विधानमंडल (विधान मंडल)** है: **विधान सभा** जिसमें **243 सदस्य** हैं और **विधान परिषद** जिसमें **75 सदस्य**। गिने-चुने राज्यों में ही परिषद है — बिहार, **उत्तर प्रदेश, महाराष्ट्र, कर्नाटक, आंध्र प्रदेश व तेलंगाना** इनमें शामिल हैं।',
          },
        },
        {
          type: 'table',
          caption: { en: 'Vidhan Sabha vs Vidhan Parishad (Bihar)', hi: 'विधान सभा बनाम विधान परिषद (बिहार)' },
          headers: [
            { en: 'Feature', hi: 'विशेषता' },
            { en: 'Vidhan Sabha', hi: 'विधान सभा' },
            { en: 'Vidhan Parishad', hi: 'विधान परिषद' },
          ],
          rows: [
            [
              { en: 'Strength (Bihar)', hi: 'सदस्य संख्या (बिहार)' },
              { en: '**243**', hi: '**243**' },
              { en: '**75**', hi: '**75**' },
            ],
            [
              { en: 'How chosen', hi: 'चयन कैसे' },
              { en: '**Directly elected** by the people', hi: 'जनता द्वारा **प्रत्यक्ष निर्वाचित**' },
              { en: 'Indirectly elected + partly **nominated** by the Governor', hi: 'अप्रत्यक्ष निर्वाचित + आंशिक रूप से राज्यपाल द्वारा **मनोनीत**' },
            ],
            [
              { en: 'Term', hi: 'कार्यकाल' },
              { en: '**5 years**; can be dissolved earlier', hi: '**5 वर्ष**; पहले विघटित हो सकती है' },
              { en: '**Permanent** house — 1/3 retire every 2 years; member term **6 years**', hi: '**स्थायी** सदन — प्रत्येक 2 वर्ष में 1/3 सेवानिवृत्त; सदस्य कार्यकाल **6 वर्ष**' },
            ],
            [
              { en: 'Minimum age', hi: 'न्यूनतम आयु' },
              { en: '**25 years**', hi: '**25 वर्ष**' },
              { en: '**30 years**', hi: '**30 वर्ष**' },
            ],
            [
              { en: 'Money Bills', hi: 'धन विधेयक' },
              { en: 'Can be introduced **only here**', hi: 'केवल **यहीं** प्रस्तुत हो सकते हैं' },
              { en: 'Can only **delay for 14 days**', hi: 'केवल **14 दिनों** तक रोक सकती है' },
            ],
          ],
        },
        {
          type: 'note',
          kind: 'trick',
          text: {
            en: 'The Vidhan Parishad is a **carbon copy of the Rajya Sabha pattern**: permanent house, 1/3 retiring every 2 years, 6-year member term, minimum age 30. Learn one, get both.',
            hi: 'विधान परिषद **राज्य सभा के ढाँचे की कार्बन कॉपी** है: स्थायी सदन, प्रत्येक 2 वर्ष में 1/3 सेवानिवृत्ति, 6 वर्ष का सदस्य कार्यकाल, न्यूनतम आयु 30। एक याद करें, दोनों याद हो जाएँगे।',
          },
        },
        {
          type: 'note',
          kind: 'info',
          text: {
            en: 'Composition of the Council: roughly **1/3 elected by local bodies**, **1/3 by MLAs**, **1/12 by graduates**, **1/12 by teachers**, and **1/6 nominated by the Governor** from persons distinguished in **literature, science, art, cooperative movement and social service**.',
            hi: 'परिषद की संरचना: लगभग **1/3 स्थानीय निकायों द्वारा निर्वाचित**, **1/3 विधायकों द्वारा**, **1/12 स्नातकों द्वारा**, **1/12 शिक्षकों द्वारा**, और **1/6 राज्यपाल द्वारा मनोनीत** — **साहित्य, विज्ञान, कला, सहकारिता आंदोलन व समाज सेवा** में विशिष्ट व्यक्तियों में से।',
          },
        },
      ],
    },
    {
      id: 'council-powers',
      heading: { en: 'Article 169 & Why the Parishad is Weaker than the Rajya Sabha', hi: 'अनुच्छेद 169 व परिषद राज्य सभा से कमजोर क्यों' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'A Legislative Council is **created or abolished by Parliament under Article 169** — but only after the **state Assembly passes a resolution by special majority**. So the state proposes, **Parliament disposes**. A state cannot create or abolish its Council on its own.',
            hi: 'विधान परिषद का **सृजन या उत्सादन (समाप्ति) संसद अनुच्छेद 169 के अंतर्गत करती है** — पर तभी जब **राज्य की विधान सभा विशेष बहुमत से संकल्प पारित करे**। अर्थात राज्य प्रस्ताव करता है, **निर्णय संसद करती है**। कोई राज्य अपने बल पर परिषद न बना सकता है, न समाप्त कर सकता है।',
          },
        },
        {
          type: 'list',
          items: [
            {
              en: '**Money Bills**: introduced only in the **Vidhan Sabha**; the Parishad can delay them for at most **14 days**.',
              hi: '**धन विधेयक**: केवल **विधान सभा** में प्रस्तुत; परिषद इन्हें अधिकतम **14 दिनों** तक ही रोक सकती है।',
            },
            {
              en: '**Ordinary bills**: the Assembly can ultimately **override the Council** — the Council can delay, not block.',
              hi: '**सामान्य विधेयक**: विधान सभा अंततः **परिषद की अनदेखी (ओवरराइड)** कर सकती है — परिषद विलंब कर सकती है, रोक नहीं सकती।',
            },
            {
              en: '**No joint sitting** exists at the state level to resolve deadlocks — unlike Parliament.',
              hi: 'गतिरोध सुलझाने हेतु राज्य स्तर पर **कोई संयुक्त बैठक नहीं** होती — संसद से भिन्न।',
            },
            {
              en: 'The Governor can promulgate **ordinances under Article 213** — the state counterpart of Article 123.',
              hi: 'राज्यपाल **अनुच्छेद 213 के अंतर्गत अध्यादेश** जारी कर सकते हैं — अनुच्छेद 123 का राज्य-स्तरीय समकक्ष।',
            },
          ],
        },
        {
          type: 'note',
          kind: 'trap',
          text: {
            en: 'Two traps in one line: (1) There is **no joint sitting** in a state legislature — if a question says the Governor calls a joint sitting, it is wrong. (2) Council abolition is done **by Parliament (Art 169)**, not by the state Assembly alone — the Assembly\'s special-majority resolution is only the first step.',
            hi: 'एक पंक्ति में दो जाल: (1) राज्य विधानमंडल में **कोई संयुक्त बैठक नहीं** होती — यदि प्रश्न कहे कि राज्यपाल संयुक्त बैठक बुलाते हैं, तो वह गलत है। (2) परिषद की समाप्ति **संसद (अनु. 169)** करती है, अकेली राज्य विधान सभा नहीं — विधान सभा का विशेष-बहुमत संकल्प केवल पहला कदम है।',
          },
        },
        {
          type: 'note',
          kind: 'why',
          text: {
            en: 'Why is the Parishad weaker than the Rajya Sabha? The Rajya Sabha protects **federalism** (states\' voice at the Centre), so it got real teeth. The Parishad is only a **revising chamber** within one state — so the directly elected Assembly was deliberately kept supreme.',
            hi: 'परिषद राज्य सभा से कमजोर क्यों? राज्य सभा **संघवाद** की रक्षा करती है (केंद्र में राज्यों की आवाज), इसलिए उसे वास्तविक शक्तियाँ मिलीं। परिषद एक ही राज्य के भीतर केवल **पुनर्विचार सदन** है — इसलिए प्रत्यक्ष निर्वाचित विधान सभा को जान-बूझकर सर्वोच्च रखा गया।',
          },
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Governor: **Art 153** (one per state; same person can serve 2+ states), **Art 154** (executive power), **Art 155** (**appointed by President**), **Art 156** (pleasure of President), **Art 157** (min age **35**).',
      hi: 'राज्यपाल: **अनु. 153** (प्रत्येक राज्य हेतु एक; एक व्यक्ति 2+ राज्यों में हो सकता है), **अनु. 154** (कार्यपालिका शक्ति), **अनु. 155** (**राष्ट्रपति द्वारा नियुक्त**), **अनु. 156** (राष्ट्रपति का प्रसादपर्यंत), **अनु. 157** (न्यूनतम आयु **35**)।',
    },
    {
      en: 'The Governor has **wider discretionary powers** than the President; ordinance power under **Article 213** (state twin of Art 123).',
      hi: 'राज्यपाल के पास राष्ट्रपति से **अधिक व्यापक विवेकाधीन शक्तियाँ** हैं; अध्यादेश शक्ति **अनुच्छेद 213** के अंतर्गत (अनु. 123 का राज्य-रूप)।',
    },
    {
      en: '**Art 164**: CM appointed by the Governor; other ministers on the CM\'s advice. CM is the **real head**; Governor is the constitutional head.',
      hi: '**अनु. 164**: मुख्यमंत्री की नियुक्ति राज्यपाल करते हैं; अन्य मंत्री मुख्यमंत्री की सलाह पर। मुख्यमंत्री **वास्तविक प्रमुख**; राज्यपाल संवैधानिक प्रमुख।',
    },
    {
      en: '**91st Amendment (2003)**: ministers including the CM ≤ **15%** of Assembly strength.',
      hi: '**91वाँ संशोधन (2003)**: मुख्यमंत्री सहित मंत्री विधान सभा की संख्या के **15%** से अधिक नहीं।',
    },
    {
      en: 'Bihar Vidhan Sabha: **243** members, directly elected, **5-year** term, min age **25**.',
      hi: 'बिहार विधान सभा: **243** सदस्य, प्रत्यक्ष निर्वाचित, **5 वर्ष** कार्यकाल, न्यूनतम आयु **25**।',
    },
    {
      en: 'Bihar Vidhan Parishad: **75** members, **permanent** house, 1/3 retire every 2 years, member term **6 years**, min age **30** — the Rajya Sabha pattern.',
      hi: 'बिहार विधान परिषद: **75** सदस्य, **स्थायी** सदन, प्रत्येक 2 वर्ष में 1/3 सेवानिवृत्त, सदस्य कार्यकाल **6 वर्ष**, न्यूनतम आयु **30** — राज्य सभा का ढाँचा।',
    },
    {
      en: 'Council created/abolished by **Parliament under Art 169** after the Assembly\'s special-majority resolution. Composition includes **1/6 nominated** by the Governor.',
      hi: 'परिषद का सृजन/समाप्ति **संसद अनु. 169 के अंतर्गत** करती है, विधान सभा के विशेष-बहुमत संकल्प के बाद। संरचना में राज्यपाल द्वारा **1/6 मनोनीत** शामिल।',
    },
    {
      en: 'Money Bill only in the **Vidhan Sabha**; Parishad delays at most **14 days**. **No joint sitting** in states — the Assembly overrides the Council on ordinary bills.',
      hi: 'धन विधेयक केवल **विधान सभा** में; परिषद अधिकतम **14 दिन** रोक सकती है। राज्यों में **संयुक्त बैठक नहीं** — सामान्य विधेयकों पर विधान सभा परिषद पर भारी पड़ती है।',
    },
  ],
  quiz: [
    {
      id: 'p10q1',
      type: 'mcq',
      question: {
        en: 'The Governor of a state is:',
        hi: 'किसी राज्य का राज्यपाल होता है:',
      },
      options: [
        { en: 'Elected directly by the people of the state', hi: 'राज्य की जनता द्वारा प्रत्यक्ष निर्वाचित' },
        { en: 'Elected by the MLAs of the state', hi: 'राज्य के विधायकों द्वारा निर्वाचित' },
        { en: 'Appointed by the President', hi: 'राष्ट्रपति द्वारा नियुक्त' },
        { en: 'Appointed by the Chief Minister', hi: 'मुख्यमंत्री द्वारा नियुक्त' },
      ],
      answer: 2,
      explanation: {
        en: 'Under Article 155, the Governor is appointed by the President — there is no election. The Governor holds office during the pleasure of the President (Article 156).',
        hi: 'अनुच्छेद 155 के अंतर्गत राज्यपाल की नियुक्ति राष्ट्रपति करते हैं — कोई निर्वाचन नहीं होता। राज्यपाल राष्ट्रपति के प्रसादपर्यंत पद पर रहते हैं (अनुच्छेद 156)।',
      },
      topic: 'polity-state',
      difficulty: 1,
    },
    {
      id: 'p10q2',
      type: 'mcq',
      question: {
        en: 'The minimum age to be appointed as Governor of a state is:',
        hi: 'राज्य के राज्यपाल के रूप में नियुक्ति हेतु न्यूनतम आयु है:',
      },
      options: [
        { en: '25 years', hi: '25 वर्ष' },
        { en: '30 years', hi: '30 वर्ष' },
        { en: '35 years', hi: '35 वर्ष' },
        { en: '40 years', hi: '40 वर्ष' },
      ],
      answer: 2,
      explanation: {
        en: 'Article 157 prescribes a minimum age of 35 years for the office of Governor — the same as for the President.',
        hi: 'अनुच्छेद 157 राज्यपाल पद हेतु न्यूनतम आयु 35 वर्ष निर्धारित करता है — राष्ट्रपति के समान।',
      },
      topic: 'polity-state',
      difficulty: 1,
    },
    {
      id: 'p10q3',
      type: 'mcq',
      question: {
        en: 'The strength of the Bihar Vidhan Sabha (Legislative Assembly) is:',
        hi: 'बिहार विधान सभा की सदस्य संख्या है:',
      },
      options: [
        { en: '224', hi: '224' },
        { en: '243', hi: '243' },
        { en: '250', hi: '250' },
        { en: '294', hi: '294' },
      ],
      answer: 1,
      explanation: {
        en: 'The Bihar Vidhan Sabha has 243 directly elected members with a 5-year term; the Vidhan Parishad has 75 members.',
        hi: 'बिहार विधान सभा में 243 प्रत्यक्ष निर्वाचित सदस्य हैं, कार्यकाल 5 वर्ष; विधान परिषद में 75 सदस्य हैं।',
      },
      topic: 'polity-state',
      difficulty: 1,
    },
    {
      id: 'p10q4',
      type: 'mcq',
      question: {
        en: 'A Legislative Council in a state is created or abolished by:',
        hi: 'किसी राज्य में विधान परिषद का सृजन या उत्सादन (समाप्ति) कौन करता है?',
      },
      options: [
        { en: 'The state Assembly alone, by special majority', hi: 'अकेली राज्य विधान सभा, विशेष बहुमत से' },
        { en: 'The Governor, on the CM\'s advice', hi: 'राज्यपाल, मुख्यमंत्री की सलाह पर' },
        { en: 'Parliament under Article 169, after the Assembly\'s special-majority resolution', hi: 'संसद, अनुच्छेद 169 के अंतर्गत, विधान सभा के विशेष-बहुमत संकल्प के बाद' },
        { en: 'The President by ordinance', hi: 'राष्ट्रपति, अध्यादेश द्वारा' },
      ],
      answer: 2,
      explanation: {
        en: 'Under Article 169, only Parliament can create or abolish a Legislative Council — but the state Assembly must first pass a resolution by special majority. The state cannot do it alone.',
        hi: 'अनुच्छेद 169 के अंतर्गत, विधान परिषद का सृजन या समाप्ति केवल संसद कर सकती है — पर पहले राज्य विधान सभा को विशेष बहुमत से संकल्प पारित करना होता है। राज्य अकेले यह नहीं कर सकता।',
      },
      topic: 'polity-state',
      difficulty: 2,
    },
    {
      id: 'p10q5',
      type: 'statement',
      question: {
        en: 'Consider the following statements about the Bihar Vidhan Parishad:\n1. It is a permanent house and one-third of its members retire every two years.\n2. The term of a member is 6 years, and the minimum age is 30 years.\nWhich is/are correct?',
        hi: 'बिहार विधान परिषद के बारे में निम्न कथनों पर विचार करें:\n1. यह एक स्थायी सदन है और इसके एक-तिहाई सदस्य प्रत्येक दो वर्ष में सेवानिवृत्त होते हैं।\n2. सदस्य का कार्यकाल 6 वर्ष है, और न्यूनतम आयु 30 वर्ष है।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 2,
      explanation: {
        en: 'Both are correct. The Vidhan Parishad follows the Rajya Sabha pattern: a permanent house, 1/3 retiring every 2 years, 6-year member term, minimum age 30.',
        hi: 'दोनों सही हैं। विधान परिषद राज्य सभा के ढाँचे का अनुसरण करती है: स्थायी सदन, प्रत्येक 2 वर्ष में 1/3 सेवानिवृत्ति, 6 वर्ष का सदस्य कार्यकाल, न्यूनतम आयु 30।',
      },
      topic: 'polity-state',
      difficulty: 2,
    },
    {
      id: 'p10q6',
      type: 'mcq',
      question: {
        en: 'A Money Bill in the Bihar legislature can be introduced only in the Vidhan Sabha. For how long, at most, can the Vidhan Parishad delay it?',
        hi: 'बिहार विधानमंडल में धन विधेयक केवल विधान सभा में प्रस्तुत हो सकता है। विधान परिषद इसे अधिकतम कितने समय तक रोक सकती है?',
      },
      options: [
        { en: '14 days', hi: '14 दिन' },
        { en: '1 month', hi: '1 माह' },
        { en: '3 months', hi: '3 माह' },
        { en: '6 months', hi: '6 माह' },
      ],
      answer: 0,
      explanation: {
        en: 'A state Money Bill is introduced only in the Vidhan Sabha, and the Vidhan Parishad can delay it for at most 14 days — just like the Rajya Sabha at the Union level.',
        hi: 'राज्य का धन विधेयक केवल विधान सभा में प्रस्तुत होता है, और विधान परिषद इसे अधिकतम 14 दिनों तक रोक सकती है — संघ स्तर पर राज्य सभा की तरह।',
      },
      topic: 'polity-state',
      difficulty: 2,
    },
    {
      id: 'p10q7',
      type: 'mcq',
      question: {
        en: 'Under the 91st Amendment (2003), the total number of ministers in a state, including the Chief Minister, must not exceed:',
        hi: '91वें संशोधन (2003) के अंतर्गत, किसी राज्य में मुख्यमंत्री सहित मंत्रियों की कुल संख्या इससे अधिक नहीं हो सकती:',
      },
      options: [
        { en: '10% of the Assembly\'s strength', hi: 'विधान सभा की संख्या का 10%' },
        { en: '15% of the Assembly\'s strength', hi: 'विधान सभा की संख्या का 15%' },
        { en: '20% of the Assembly\'s strength', hi: 'विधान सभा की संख्या का 20%' },
        { en: '25% of the Assembly\'s strength', hi: 'विधान सभा की संख्या का 25%' },
      ],
      answer: 1,
      explanation: {
        en: 'The 91st Amendment (2003) caps the Council of Ministers, including the CM, at 15% of the Legislative Assembly\'s strength.',
        hi: '91वाँ संशोधन (2003) मंत्रिपरिषद को, मुख्यमंत्री सहित, विधान सभा की संख्या के 15% तक सीमित करता है।',
      },
      topic: 'polity-state',
      difficulty: 2,
    },
    {
      id: 'p10q8',
      type: 'statement',
      question: {
        en: 'Consider the following statements:\n1. In case of a deadlock over an ordinary bill, a joint sitting of the Vidhan Sabha and Vidhan Parishad is held.\n2. The Governor can promulgate ordinances under Article 213.\nWhich is/are correct?',
        hi: 'निम्न कथनों पर विचार करें:\n1. सामान्य विधेयक पर गतिरोध की स्थिति में विधान सभा व विधान परिषद की संयुक्त बैठक होती है।\n2. राज्यपाल अनुच्छेद 213 के अंतर्गत अध्यादेश जारी कर सकते हैं।\nकौन-सा/से सही है/हैं?',
      },
      options: [
        { en: 'Only 1', hi: 'केवल 1' },
        { en: 'Only 2', hi: 'केवल 2' },
        { en: 'Both 1 and 2', hi: '1 और 2 दोनों' },
        { en: 'Neither 1 nor 2', hi: 'न 1, न 2' },
      ],
      answer: 1,
      explanation: {
        en: 'Statement 1 is wrong — there is no provision for a joint sitting at the state level; the Assembly can override the Council on ordinary bills. Statement 2 is correct — Article 213 gives the Governor ordinance power (the state counterpart of Article 123).',
        hi: 'कथन 1 गलत है — राज्य स्तर पर संयुक्त बैठक का कोई प्रावधान नहीं है; सामान्य विधेयकों पर विधान सभा परिषद की अनदेखी कर सकती है। कथन 2 सही है — अनुच्छेद 213 राज्यपाल को अध्यादेश शक्ति देता है (अनुच्छेद 123 का राज्य-समकक्ष)।',
      },
      topic: 'polity-state',
      difficulty: 3,
    },
  ],
};
