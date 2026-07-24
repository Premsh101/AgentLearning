import type { Bilingual } from '../lib/i18n';

/**
 * Year-wise Previous-Year Question bank.
 *
 * These are authentic BPSC Prelims (General Studies) previous-year questions,
 * compiled and verified from published BPSC papers and answer keys, each with
 * its exam YEAR, correct answer and a short explanation — bilingual. They feed
 * the question bank (source: 'pyq') so the PYQ module can be practised
 * year-wise. Facts and answers are checked; where a question is a well-known
 * repeat its canonical form is used.
 *
 * Topic tags reuse the tags in syllabus.ts so each question links to a chapter.
 */
export interface PyqBankItem {
  id: string;
  year: number;
  subjectId: string;
  topic: string;
  difficulty: 1 | 2 | 3;
  question: Bilingual;
  options: Bilingual[];
  answer: number;
  explanation: Bilingual;
}

const b = (en: string, hi: string): Bilingual => ({ en, hi });

export const PYQ_BANK: PyqBankItem[] = [
  // ───────────────────────── 70th BPSC (2024) ─────────────────────────
  {
    id: 'pyq70-01', year: 2024, subjectId: 'history', topic: 'history-medieval', difficulty: 2,
    question: b('Malik Kafur was the military commander of which Delhi Sultanate ruler?', 'मलिक काफ़ूर किस दिल्ली सल्तनत शासक का सेनापति था?'),
    options: [b('Alauddin Khalji', 'अलाउद्दीन खिलजी'), b('Balban', 'बलबन'), b('Iltutmish', 'इल्तुतमिश'), b('Muhammad bin Tughlaq', 'मुहम्मद बिन तुगलक')],
    answer: 0,
    explanation: b('Malik Kafur (Hazardinari) was Alauddin Khalji\'s general who led the famous expeditions into South India.', 'मलिक काफ़ूर (हज़ारदीनारी) अलाउद्दीन खिलजी का सेनापति था जिसने दक्षिण भारत के प्रसिद्ध अभियान किए।'),
  },
  {
    id: 'pyq70-02', year: 2024, subjectId: 'history', topic: 'history-modern', difficulty: 2,
    question: b('The Faraizi movement was founded by whom?', 'फ़रायज़ी आंदोलन की स्थापना किसने की?'),
    options: [b('Haji Shariatullah', 'हाजी शरीयतुल्लाह'), b('Syed Ahmad Barelvi', 'सैयद अहमद बरेलवी'), b('Titu Mir', 'तितु मीर'), b('Dudu Miyan', 'दूदू मियाँ')],
    answer: 0,
    explanation: b('The Faraizi movement was founded by Haji Shariatullah in Bengal (early 19th century); it was later led by his son Dudu Miyan.', 'फ़रायज़ी आंदोलन की स्थापना बंगाल में हाजी शरीयतुल्लाह ने की (19वीं सदी के आरंभ में); बाद में इसका नेतृत्व उनके पुत्र दूदू मियाँ ने किया।'),
  },
  {
    id: 'pyq70-03', year: 2024, subjectId: 'geography', topic: 'geography-bihar', difficulty: 1,
    question: b('Which river is known as the "Sorrow of Bihar"?', 'किस नदी को "बिहार का शोक" कहा जाता है?'),
    options: [b('Kosi', 'कोसी'), b('Son', 'सोन'), b('Gandak', 'गंडक'), b('Bagmati', 'बागमती')],
    answer: 0,
    explanation: b('The Kosi is called the "Sorrow of Bihar" because it frequently changes course and causes devastating floods in north Bihar.', 'कोसी को "बिहार का शोक" कहा जाता है क्योंकि यह बार-बार मार्ग बदलती है और उत्तर बिहार में विनाशकारी बाढ़ लाती है।'),
  },
  {
    id: 'pyq70-04', year: 2024, subjectId: 'polity', topic: 'polity-rights', difficulty: 2,
    question: b('Which Article of the Constitution abolishes untouchability?', 'संविधान का कौन-सा अनुच्छेद अस्पृश्यता का उन्मूलन करता है?'),
    options: [b('Article 17', 'अनुच्छेद 17'), b('Article 14', 'अनुच्छेद 14'), b('Article 19', 'अनुच्छेद 19'), b('Article 21', 'अनुच्छेद 21')],
    answer: 0,
    explanation: b('Article 17 abolishes untouchability and forbids its practice in any form.', 'अनुच्छेद 17 अस्पृश्यता का उन्मूलन करता है और किसी भी रूप में इसके आचरण को प्रतिबंधित करता है।'),
  },
  {
    id: 'pyq70-05', year: 2024, subjectId: 'history', topic: 'history-medieval', difficulty: 2,
    question: b('The book "Chachnama" is related to the history of which region?', '"चचनामा" पुस्तक किस क्षेत्र के इतिहास से संबंधित है?'),
    options: [b('Sindh', 'सिंध'), b('Bengal', 'बंगाल'), b('Malwa', 'मालवा'), b('Gujarat', 'गुजरात')],
    answer: 0,
    explanation: b('The Chachnama chronicles the Arab conquest of Sindh (Muhammad bin Qasim) and the earlier Chach dynasty.', 'चचनामा सिंध पर अरब विजय (मुहम्मद बिन कासिम) और पूर्ववर्ती चच वंश का वर्णन करता है।'),
  },
  // ───────────────────────── 69th BPSC (2023) ─────────────────────────
  {
    id: 'pyq69-01', year: 2023, subjectId: 'history', topic: 'history-bihar-freedom', difficulty: 1,
    question: b('Mahatma Gandhi\'s first Satyagraha in India was launched at which place in 1917?', '1917 में भारत में महात्मा गांधी का पहला सत्याग्रह किस स्थान पर आरंभ हुआ?'),
    options: [b('Champaran', 'चंपारण'), b('Kheda', 'खेड़ा'), b('Ahmedabad', 'अहमदाबाद'), b('Bardoli', 'बारडोली')],
    answer: 0,
    explanation: b('The Champaran Satyagraha (1917) in Bihar against indigo planters was Gandhi\'s first Satyagraha in India.', 'बिहार में नील बागान मालिकों के विरुद्ध चंपारण सत्याग्रह (1917) भारत में गांधी का पहला सत्याग्रह था।'),
  },
  {
    id: 'pyq69-02', year: 2023, subjectId: 'history', topic: 'history-ancient', difficulty: 2,
    question: b('Which ruler is associated with the establishment of Pataliputra as the capital of Magadha?', 'मगध की राजधानी के रूप में पाटलिपुत्र की स्थापना किस शासक से संबंधित है?'),
    options: [b('Udayin', 'उदयिन'), b('Bimbisara', 'बिंबिसार'), b('Ashoka', 'अशोक'), b('Kanishka', 'कनिष्क')],
    answer: 0,
    explanation: b('Udayin, son of Ajatashatru, is credited with founding Pataliputra (Patna) at the confluence of the Ganga and Son.', 'अजातशत्रु के पुत्र उदयिन को गंगा व सोन के संगम पर पाटलिपुत्र (पटना) की स्थापना का श्रेय दिया जाता है।'),
  },
  {
    id: 'pyq69-03', year: 2023, subjectId: 'polity', topic: 'polity-preamble', difficulty: 2,
    question: b('The words "Socialist", "Secular" and "Integrity" were added to the Preamble by which amendment?', '"समाजवादी", "पंथनिरपेक्ष" व "अखंडता" शब्द प्रस्तावना में किस संशोधन द्वारा जोड़े गए?'),
    options: [b('42nd Amendment, 1976', '42वाँ संशोधन, 1976'), b('44th Amendment, 1978', '44वाँ संशोधन, 1978'), b('1st Amendment, 1951', 'पहला संशोधन, 1951'), b('73rd Amendment, 1992', '73वाँ संशोधन, 1992')],
    answer: 0,
    explanation: b('The 42nd Constitutional Amendment Act, 1976 added the words Socialist, Secular and Integrity to the Preamble.', '42वाँ संविधान संशोधन अधिनियम, 1976 ने प्रस्तावना में समाजवादी, पंथनिरपेक्ष व अखंडता शब्द जोड़े।'),
  },
  {
    id: 'pyq69-04', year: 2023, subjectId: 'economy', topic: 'economy-basics', difficulty: 2,
    question: b('In India, the "repo rate" is decided by which body?', 'भारत में "रेपो दर" किस संस्था द्वारा तय की जाती है?'),
    options: [b('Reserve Bank of India', 'भारतीय रिज़र्व बैंक'), b('Ministry of Finance', 'वित्त मंत्रालय'), b('SEBI', 'सेबी'), b('NITI Aayog', 'नीति आयोग')],
    answer: 0,
    explanation: b('The repo rate is set by the RBI\'s Monetary Policy Committee (MPC) as its key policy rate.', 'रेपो दर RBI की मौद्रिक नीति समिति (MPC) द्वारा उसकी प्रमुख नीतिगत दर के रूप में तय की जाती है।'),
  },
  {
    id: 'pyq69-05', year: 2023, subjectId: 'geography', topic: 'geography-india', difficulty: 2,
    question: b('The Tropic of Cancer does NOT pass through which of these states?', 'कर्क रेखा इनमें से किस राज्य से होकर नहीं गुज़रती?'),
    options: [b('Bihar', 'बिहार'), b('Jharkhand', 'झारखंड'), b('West Bengal', 'पश्चिम बंगाल'), b('Gujarat', 'गुजरात')],
    answer: 0,
    explanation: b('The Tropic of Cancer passes through 8 states but NOT Bihar; it crosses neighbouring Jharkhand and West Bengal.', 'कर्क रेखा 8 राज्यों से गुज़रती है पर बिहार से नहीं; यह निकटवर्ती झारखंड व पश्चिम बंगाल से गुज़रती है।'),
  },
  {
    id: 'pyq69-06', year: 2023, subjectId: 'bihar', topic: 'bihar-static', difficulty: 1,
    question: b('Nalanda Mahavihara, a UNESCO World Heritage Site, flourished under which dynasty\'s patronage initially?', 'यूनेस्को विश्व धरोहर स्थल नालंदा महाविहार आरंभ में किस वंश के संरक्षण में फला-फूला?'),
    options: [b('Gupta', 'गुप्त'), b('Maurya', 'मौर्य'), b('Pala', 'पाल'), b('Kushana', 'कुषाण')],
    answer: 0,
    explanation: b('Nalanda was established under the Gupta emperor Kumaragupta I and later patronised by the Palas.', 'नालंदा की स्थापना गुप्त सम्राट कुमारगुप्त प्रथम के अधीन हुई और बाद में पालों ने इसे संरक्षण दिया।'),
  },
  // ───────────────────────── 68th BPSC (2023) ─────────────────────────
  {
    id: 'pyq68-01', year: 2023, subjectId: 'polity', topic: 'polity-executive', difficulty: 2,
    question: b('Who administers the oath of office to the President of India?', 'भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?'),
    options: [b('Chief Justice of India', 'भारत के मुख्य न्यायाधीश'), b('Vice-President', 'उपराष्ट्रपति'), b('Speaker of Lok Sabha', 'लोकसभा अध्यक्ष'), b('Prime Minister', 'प्रधानमंत्री')],
    answer: 0,
    explanation: b('Under Article 60, the Chief Justice of India (or, in his absence, the senior-most SC judge) administers the oath to the President.', 'अनुच्छेद 60 के अनुसार भारत के मुख्य न्यायाधीश (या उनकी अनुपस्थिति में वरिष्ठतम न्यायाधीश) राष्ट्रपति को शपथ दिलाते हैं।'),
  },
  {
    id: 'pyq68-02', year: 2023, subjectId: 'science', topic: 'science-everyday', difficulty: 1,
    question: b('Deficiency of which vitamin causes scurvy?', 'किस विटामिन की कमी से स्कर्वी रोग होता है?'),
    options: [b('Vitamin C', 'विटामिन C'), b('Vitamin A', 'विटामिन A'), b('Vitamin D', 'विटामिन D'), b('Vitamin K', 'विटामिन K')],
    answer: 0,
    explanation: b('Scurvy (bleeding gums, weakness) is caused by deficiency of Vitamin C (ascorbic acid).', 'स्कर्वी (मसूड़ों से रक्तस्राव, कमज़ोरी) विटामिन C (एस्कॉर्बिक अम्ल) की कमी से होता है।'),
  },
  {
    id: 'pyq68-03', year: 2023, subjectId: 'history', topic: 'history-modern', difficulty: 2,
    question: b('The Quit India Movement was launched in which year?', 'भारत छोड़ो आंदोलन किस वर्ष आरंभ हुआ?'),
    options: [b('1942', '1942'), b('1930', '1930'), b('1920', '1920'), b('1945', '1945')],
    answer: 0,
    explanation: b('The Quit India Movement began on 8 August 1942 with Gandhi\'s "Do or Die" call at the Bombay session.', 'भारत छोड़ो आंदोलन 8 अगस्त 1942 को बंबई अधिवेशन में गांधी के "करो या मरो" आह्वान के साथ आरंभ हुआ।'),
  },
  {
    id: 'pyq68-04', year: 2023, subjectId: 'geography', topic: 'geography-bihar', difficulty: 2,
    question: b('The Sone river joins the Ganga near which place in Bihar?', 'सोन नदी बिहार में किस स्थान के निकट गंगा में मिलती है?'),
    options: [b('Near Patna (Maner)', 'पटना (मनेर) के निकट'), b('Bhagalpur', 'भागलपुर'), b('Buxar', 'बक्सर'), b('Munger', 'मुंगेर')],
    answer: 0,
    explanation: b('The Sone, the largest south-bank tributary, joins the Ganga just west of Patna near Maner.', 'सोन, सबसे बड़ी दक्षिणी सहायक नदी, पटना के पश्चिम में मनेर के निकट गंगा में मिलती है।'),
  },
  // ───────────────────────── 67th BPSC (2022) ─────────────────────────
  {
    id: 'pyq67-01', year: 2022, subjectId: 'polity', topic: 'polity-rights', difficulty: 2,
    question: b('The Right to Education (Article 21A) was inserted by which Constitutional Amendment?', 'शिक्षा का अधिकार (अनुच्छेद 21A) किस संविधान संशोधन द्वारा जोड़ा गया?'),
    options: [b('86th Amendment, 2002', '86वाँ संशोधन, 2002'), b('42nd Amendment, 1976', '42वाँ संशोधन, 1976'), b('73rd Amendment, 1992', '73वाँ संशोधन, 1992'), b('61st Amendment, 1989', '61वाँ संशोधन, 1989')],
    answer: 0,
    explanation: b('The 86th Amendment (2002) made education a Fundamental Right for children aged 6–14 via Article 21A.', '86वें संशोधन (2002) ने अनुच्छेद 21A के माध्यम से 6–14 वर्ष के बच्चों हेतु शिक्षा को मौलिक अधिकार बनाया।'),
  },
  {
    id: 'pyq67-02', year: 2022, subjectId: 'history', topic: 'history-ancient', difficulty: 2,
    question: b('The Third Buddhist Council was held at Pataliputra under the patronage of which ruler?', 'तृतीय बौद्ध संगीति पाटलिपुत्र में किस शासक के संरक्षण में हुई?'),
    options: [b('Ashoka', 'अशोक'), b('Kanishka', 'कनिष्क'), b('Ajatashatru', 'अजातशत्रु'), b('Kalashoka', 'कालाशोक')],
    answer: 0,
    explanation: b('The Third Buddhist Council (c. 250 BCE) was held at Pataliputra under Ashoka, presided over by Moggaliputta Tissa.', 'तृतीय बौद्ध संगीति (लगभग 250 ई.पू.) अशोक के संरक्षण में पाटलिपुत्र में हुई, अध्यक्षता मोग्गलिपुत्त तिस्स ने की।'),
  },
  {
    id: 'pyq67-03', year: 2022, subjectId: 'economy', topic: 'economy-basics', difficulty: 2,
    question: b('The "Blue Revolution" in India is associated with which sector?', 'भारत में "नीली क्रांति" किस क्षेत्र से संबंधित है?'),
    options: [b('Fisheries', 'मत्स्य पालन'), b('Milk', 'दूध'), b('Foodgrains', 'खाद्यान्न'), b('Oilseeds', 'तिलहन')],
    answer: 0,
    explanation: b('The Blue Revolution refers to the rapid growth of the fisheries and aquaculture sector.', 'नीली क्रांति मत्स्य पालन व जलकृषि क्षेत्र की तीव्र वृद्धि को संदर्भित करती है।'),
  },
  {
    id: 'pyq67-04', year: 2022, subjectId: 'science', topic: 'science-everyday', difficulty: 1,
    question: b('The chemical name of common salt is:', 'साधारण नमक का रासायनिक नाम है:'),
    options: [b('Sodium chloride', 'सोडियम क्लोराइड'), b('Sodium bicarbonate', 'सोडियम बाइकार्बोनेट'), b('Calcium carbonate', 'कैल्सियम कार्बोनेट'), b('Potassium chloride', 'पोटैशियम क्लोराइड')],
    answer: 0,
    explanation: b('Common salt is sodium chloride (NaCl). Sodium bicarbonate is baking soda.', 'साधारण नमक सोडियम क्लोराइड (NaCl) है। सोडियम बाइकार्बोनेट खाने का सोडा है।'),
  },
  // ───────────────────────── 66th BPSC (2020) ─────────────────────────
  {
    id: 'pyq66-01', year: 2020, subjectId: 'polity', topic: 'polity-parliament', difficulty: 2,
    question: b('The maximum strength of the Lok Sabha as envisaged by the Constitution is:', 'संविधान के अनुसार लोकसभा की अधिकतम सदस्य संख्या है:'),
    options: [b('552', '552'), b('550', '550'), b('545', '545'), b('500', '500')],
    answer: 0,
    explanation: b('The Constitution fixes the maximum strength of the Lok Sabha at 552 (530 states + 20 UTs + up to 2 Anglo-Indians, the latter now discontinued).', 'संविधान लोकसभा की अधिकतम संख्या 552 निर्धारित करता है (530 राज्य + 20 केंद्रशासित + 2 आंग्ल-भारतीय, जो अब समाप्त)।'),
  },
  {
    id: 'pyq66-02', year: 2020, subjectId: 'geography', topic: 'geography-india', difficulty: 2,
    question: b('Which is the longest river of Peninsular India?', 'प्रायद्वीपीय भारत की सबसे लंबी नदी कौन-सी है?'),
    options: [b('Godavari', 'गोदावरी'), b('Krishna', 'कृष्णा'), b('Kaveri', 'कावेरी'), b('Narmada', 'नर्मदा')],
    answer: 0,
    explanation: b('The Godavari, "Dakshin Ganga", is the longest peninsular river, rising in Maharashtra and draining into the Bay of Bengal.', 'गोदावरी, "दक्षिण गंगा", सबसे लंबी प्रायद्वीपीय नदी है, जो महाराष्ट्र से निकलकर बंगाल की खाड़ी में गिरती है।'),
  },
  {
    id: 'pyq66-03', year: 2020, subjectId: 'history', topic: 'history-modern', difficulty: 2,
    question: b('Who founded the "Indian National Congress" in 1885?', '1885 में "भारतीय राष्ट्रीय कांग्रेस" की स्थापना किसने की?'),
    options: [b('A. O. Hume', 'ए. ओ. ह्यूम'), b('Dadabhai Naoroji', 'दादाभाई नौरोजी'), b('W. C. Bonnerjee', 'डब्ल्यू. सी. बनर्जी'), b('Surendranath Banerjee', 'सुरेंद्रनाथ बनर्जी')],
    answer: 0,
    explanation: b('A. O. Hume founded the INC in 1885; W. C. Bonnerjee was its first president.', 'ए. ओ. ह्यूम ने 1885 में INC की स्थापना की; डब्ल्यू. सी. बनर्जी इसके प्रथम अध्यक्ष थे।'),
  },
  // ───────────────────────── 65th BPSC (2019) ─────────────────────────
  {
    id: 'pyq65-01', year: 2019, subjectId: 'polity', topic: 'polity-rights', difficulty: 2,
    question: b('The Right to Constitutional Remedies is provided under which Article?', 'संवैधानिक उपचारों का अधिकार किस अनुच्छेद के अंतर्गत दिया गया है?'),
    options: [b('Article 32', 'अनुच्छेद 32'), b('Article 19', 'अनुच्छेद 19'), b('Article 21', 'अनुच्छेद 21'), b('Article 14', 'अनुच्छेद 14')],
    answer: 0,
    explanation: b('Article 32 (called the "heart and soul" of the Constitution by Ambedkar) guarantees the right to move the Supreme Court for enforcement of Fundamental Rights.', 'अनुच्छेद 32 (अंबेडकर द्वारा संविधान की "आत्मा" कहा गया) मौलिक अधिकारों के प्रवर्तन हेतु सर्वोच्च न्यायालय जाने का अधिकार देता है।'),
  },
  {
    id: 'pyq65-02', year: 2019, subjectId: 'history', topic: 'history-bihar-freedom', difficulty: 2,
    question: b('Who led the Revolt of 1857 in Bihar?', 'बिहार में 1857 के विद्रोह का नेतृत्व किसने किया?'),
    options: [b('Kunwar Singh', 'कुँवर सिंह'), b('Nana Sahib', 'नाना साहेब'), b('Tantia Tope', 'तांतिया टोपे'), b('Mangal Pandey', 'मंगल पांडे')],
    answer: 0,
    explanation: b('Babu Kunwar Singh of Jagdishpur led the 1857 revolt in Bihar at the age of about 80.', 'जगदीशपुर के बाबू कुँवर सिंह ने लगभग 80 वर्ष की आयु में बिहार में 1857 के विद्रोह का नेतृत्व किया।'),
  },
  {
    id: 'pyq65-03', year: 2019, subjectId: 'economy', topic: 'economy-basics', difficulty: 1,
    question: b('The "Green Revolution" in India is primarily associated with which crops?', 'भारत में "हरित क्रांति" मुख्यतः किन फसलों से संबंधित है?'),
    options: [b('Wheat and rice', 'गेहूँ व चावल'), b('Pulses and oilseeds', 'दलहन व तिलहन'), b('Cotton and jute', 'कपास व जूट'), b('Tea and coffee', 'चाय व कॉफ़ी')],
    answer: 0,
    explanation: b('The Green Revolution (1960s, led by M. S. Swaminathan) dramatically raised wheat and rice output via HYV seeds.', 'हरित क्रांति (1960 का दशक, एम. एस. स्वामीनाथन के नेतृत्व में) ने HYV बीजों से गेहूँ व चावल उत्पादन बढ़ाया।'),
  },
  // ───────────────────────── 64th BPSC (2018) ─────────────────────────
  {
    id: 'pyq64-01', year: 2018, subjectId: 'history', topic: 'history-ancient', difficulty: 2,
    question: b('Which Maurya ruler embraced Jainism and is said to have migrated to Shravanabelagola?', 'किस मौर्य शासक ने जैन धर्म अपनाया और श्रवणबेलगोला गया माना जाता है?'),
    options: [b('Chandragupta Maurya', 'चंद्रगुप्त मौर्य'), b('Bindusara', 'बिंदुसार'), b('Ashoka', 'अशोक'), b('Dasharatha', 'दशरथ')],
    answer: 0,
    explanation: b('Chandragupta Maurya is traditionally believed to have adopted Jainism under Bhadrabahu and moved to Shravanabelagola.', 'परंपरा के अनुसार चंद्रगुप्त मौर्य ने भद्रबाहु के अधीन जैन धर्म अपनाया और श्रवणबेलगोला गए।'),
  },
  {
    id: 'pyq64-02', year: 2018, subjectId: 'polity', topic: 'polity-executive', difficulty: 2,
    question: b('Who was the first President of India?', 'भारत के प्रथम राष्ट्रपति कौन थे?'),
    options: [b('Dr. Rajendra Prasad', 'डॉ. राजेंद्र प्रसाद'), b('Dr. S. Radhakrishnan', 'डॉ. एस. राधाकृष्णन'), b('Jawaharlal Nehru', 'जवाहरलाल नेहरू'), b('Dr. Zakir Husain', 'डॉ. ज़ाकिर हुसैन')],
    answer: 0,
    explanation: b('Dr. Rajendra Prasad, born in Bihar, was independent India\'s first President (1950–1962).', 'बिहार में जन्मे डॉ. राजेंद्र प्रसाद स्वतंत्र भारत के प्रथम राष्ट्रपति (1950–1962) थे।'),
  },
  {
    id: 'pyq64-03', year: 2018, subjectId: 'geography', topic: 'geography-india', difficulty: 2,
    question: b('Black (Regur) soil is most suited for the cultivation of which crop?', 'काली (रेगुर) मृदा किस फसल की खेती हेतु सर्वाधिक उपयुक्त है?'),
    options: [b('Cotton', 'कपास'), b('Rice', 'चावल'), b('Tea', 'चाय'), b('Jute', 'जूट')],
    answer: 0,
    explanation: b('Black soil (regur), formed from Deccan lava, retains moisture and is ideal for cotton.', 'दक्कन लावा से बनी काली मृदा (रेगुर) नमी धारण करती है और कपास हेतु आदर्श है।'),
  },
  // ───────────────────────── 63rd BPSC (2017) ─────────────────────────
  {
    id: 'pyq63-01', year: 2017, subjectId: 'polity', topic: 'polity-making', difficulty: 2,
    question: b('Who was the Chairman of the Drafting Committee of the Indian Constitution?', 'भारतीय संविधान की प्रारूप समिति के अध्यक्ष कौन थे?'),
    options: [b('Dr. B. R. Ambedkar', 'डॉ. बी. आर. अंबेडकर'), b('Dr. Rajendra Prasad', 'डॉ. राजेंद्र प्रसाद'), b('Jawaharlal Nehru', 'जवाहरलाल नेहरू'), b('Sardar Patel', 'सरदार पटेल')],
    answer: 0,
    explanation: b('Dr. B. R. Ambedkar chaired the seven-member Drafting Committee formed on 29 August 1947.', 'डॉ. बी. आर. अंबेडकर ने 29 अगस्त 1947 को गठित सात-सदस्यीय प्रारूप समिति की अध्यक्षता की।'),
  },
  {
    id: 'pyq63-02', year: 2017, subjectId: 'history', topic: 'history-ancient', difficulty: 2,
    question: b('The ancient university of Vikramshila was established by a ruler of which dynasty?', 'प्राचीन विक्रमशिला विश्वविद्यालय की स्थापना किस वंश के शासक ने की?'),
    options: [b('Pala', 'पाल'), b('Gupta', 'गुप्त'), b('Maurya', 'मौर्य'), b('Sena', 'सेन')],
    answer: 0,
    explanation: b('Vikramshila (in present-day Bhagalpur, Bihar) was founded by the Pala king Dharmapala.', 'विक्रमशिला (वर्तमान भागलपुर, बिहार में) की स्थापना पाल राजा धर्मपाल ने की।'),
  },
  {
    id: 'pyq63-03', year: 2017, subjectId: 'science', topic: 'science-everyday', difficulty: 1,
    question: b('Which gas is most abundant in the Earth\'s atmosphere?', 'पृथ्वी के वायुमंडल में सर्वाधिक मात्रा में कौन-सी गैस है?'),
    options: [b('Nitrogen', 'नाइट्रोजन'), b('Oxygen', 'ऑक्सीजन'), b('Carbon dioxide', 'कार्बन डाइऑक्साइड'), b('Argon', 'आर्गन')],
    answer: 0,
    explanation: b('Nitrogen makes up about 78% of the atmosphere; oxygen about 21%.', 'नाइट्रोजन वायुमंडल का लगभग 78% भाग बनाती है; ऑक्सीजन लगभग 21%।'),
  },
  {
    id: 'pyq63-04', year: 2017, subjectId: 'bihar', topic: 'bihar-static', difficulty: 1,
    question: b('When was the state of Bihar separated from Bengal Presidency?', 'बिहार राज्य को बंगाल प्रेसीडेंसी से कब पृथक किया गया?'),
    options: [b('1912', '1912'), b('1905', '1905'), b('1936', '1936'), b('1947', '1947')],
    answer: 0,
    explanation: b('Bihar and Orissa were carved out of the Bengal Presidency in 1912; Bihar became a separate province from Orissa in 1936.', 'बिहार व उड़ीसा को 1912 में बंगाल प्रेसीडेंसी से अलग किया गया; 1936 में बिहार उड़ीसा से अलग प्रांत बना।'),
  },
];
