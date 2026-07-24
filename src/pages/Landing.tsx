import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { getAuth } from '../lib/auth';

interface Feat {
  icon: string;
  en: string;
  hi: string;
  den: string;
  dhi: string;
}

const FEATURES: Feat[] = [
  { icon: '📚', en: 'Full Bilingual Syllabus', hi: 'संपूर्ण द्विभाषी पाठ्यक्रम', den: '29 chapters across 7 subjects in simple Hindi & English — with maps, infographics, timelines and chapter takeaways.', dhi: '7 विषयों में 29 अध्याय, सरल हिंदी व अंग्रेज़ी में — मानचित्र, इन्फोग्राफिक्स, टाइमलाइन व मुख्य बातों सहित।' },
  { icon: '✅', en: 'Daily Quiz & Mock Tests', hi: 'दैनिक क्विज़ व मॉक टेस्ट', den: 'Instant-feedback quizzes and a real exam simulator with timer, palette and negative marking.', dhi: 'तुरंत परिणाम वाले क्विज़ और टाइमर, पैलेट व नकारात्मक अंकन सहित वास्तविक परीक्षा सिम्युलेटर।' },
  { icon: '🗂️', en: 'Model Test Papers', hi: 'मॉडल टेस्ट पेपर', den: 'Generate full test papers to a blueprint from a growing question bank — or build your own.', dhi: 'बढ़ते प्रश्न बैंक से ब्लूप्रिंट अनुसार पूरे टेस्ट पेपर बनाएँ — या अपना कस्टम पेपर।' },
  { icon: '🎯', en: 'PYQ Intelligence', hi: 'PYQ इंटेलिजेंस', den: 'Analyses previous-year questions to reveal the most-repeated topics and subject weightage.', dhi: 'पिछले वर्षों के प्रश्नों का विश्लेषण कर सर्वाधिक दोहराए विषय व विषयवार महत्व दिखाता है।' },
  { icon: '🔁', en: 'Smart Revision', hi: 'स्मार्ट रिवीजन', den: 'Spaced repetition (1→3→7→15→30→60 days) so nothing you learn gets forgotten.', dhi: 'स्पेस्ड रिपिटीशन (1→3→7→15→30→60 दिन) ताकि सीखा हुआ भूले नहीं।' },
  { icon: '📊', en: 'Analytics & Readiness Score', hi: 'विश्लेषण व तैयारी स्कोर', den: 'A transparent readiness score, subject completion, and a weak-area improvement plan.', dhi: 'पारदर्शी तैयारी स्कोर, विषय पूर्णता, व कमज़ोर क्षेत्र सुधार योजना।' },
  { icon: '🤖', en: 'AI Mentor', hi: 'AI मेंटर', den: 'Ask any BPSC doubt any time — powered by your choice of Claude, OpenAI, Gemini or a local model.', dhi: 'कभी भी कोई भी BPSC संदेह पूछें — Claude, OpenAI, Gemini या स्थानीय मॉडल आपकी पसंद से।' },
  { icon: '📝', en: 'Mains Answer Evaluation', hi: 'मुख्य परीक्षा उत्तर मूल्यांकन', den: 'Type or photograph your answer; AI grades structure, content and language with a model answer.', dhi: 'उत्तर लिखें या फोटो लें; AI संरचना, विषय-वस्तु व भाषा पर अंक व आदर्श उत्तर देता है।' },
  { icon: '🎤', en: 'Voice Interview Coach', hi: 'वॉइस साक्षात्कार कोच', den: 'Practise a mock BPSC interview by voice, in your browser, on your chosen focus area.', dhi: 'ब्राउज़र में आवाज़ से मॉक BPSC साक्षात्कार का अभ्यास, अपने चुने विषय पर।' },
  { icon: '📰', en: 'Current Affairs → Exam Material', hi: 'करेंट अफेयर्स → परीक्षा सामग्री', den: 'Daily news is turned into summaries, static-GK links, MCQs and mains questions.', dhi: 'दैनिक समाचार को सारांश, स्थैतिक-GK लिंक, MCQ व मुख्य प्रश्नों में बदला जाता है।' },
  { icon: '📱', en: 'Works Offline (PWA)', hi: 'ऑफ़लाइन चलता है (PWA)', den: 'Install it like an app; study chapters and quizzes even without internet.', dhi: 'ऐप की तरह इंस्टॉल करें; बिना इंटरनेट भी अध्याय व क्विज़ पढ़ें।' },
  { icon: '☁️', en: 'Your Progress, Everywhere', hi: 'आपकी प्रगति, हर जगह', den: 'Log in and your streak, chapters, scores and revision follow you across mobile and laptop.', dhi: 'लॉगिन करें और आपकी स्ट्रीक, अध्याय, स्कोर व रिवीजन मोबाइल व लैपटॉप हर जगह साथ।' },
];

export function Landing() {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  if (getAuth()) return <Navigate to="/" replace />;
  const T = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="brand">📘 BPSC AI OS</div>
        <div className="nav-actions">
          <div className="lang-switch" style={{ marginTop: 0, width: 96 }}>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'hi' ? 'on' : ''} onClick={() => setLang('hi')}>हिं</button>
          </div>
          <Link to="/login" className="btn">{T('Log in', 'लॉगिन')}</Link>
          <Link to="/login?mode=register" className="btn primary">{T('Get started', 'शुरू करें')}</Link>
        </div>
      </nav>

      <header className="landing-hero">
        <div>
          <h1>
            {T('Your personal ', 'BPSC क्रैक करने के लिए ')}
            <span className="accent">{T('AI coach', 'आपका निजी AI कोच')}</span>
            {T(' to crack BPSC', '')}
          </h1>
          <p className="lead">
            {T(
              'One app that plans, teaches, revises, evaluates and motivates — in Hindi and English. No more juggling coaching, YouTube and PDFs.',
              'एक ऐप जो योजना बनाता, पढ़ाता, दोहराता, मूल्यांकन करता व प्रेरित करता है — हिंदी व अंग्रेज़ी में। अब कोचिंग, YouTube व PDF की जद्दोजहद नहीं।'
            )}
          </p>
          <div className="hero-cta">
            <button className="btn primary lg" onClick={() => navigate('/login?mode=register')}>
              🚀 {T('Start free', 'निःशुल्क शुरू करें')}
            </button>
            <button className="btn lg" onClick={() => navigate('/login')}>
              {T('I already have an account', 'मेरा खाता पहले से है')}
            </button>
          </div>
          <div className="hero-badges">
            <span className="badge green">✓ {T('Bilingual', 'द्विभाषी')}</span>
            <span className="badge green">✓ {T('Works offline', 'ऑफ़लाइन')}</span>
            <span className="badge green">✓ {T('Bihar-focused', 'बिहार-केंद्रित')}</span>
            <span className="badge orange">{T('Free to use', 'उपयोग निःशुल्क')}</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="stat-line"><span>{T('Chapters', 'अध्याय')}</span><span className="big">29</span></div>
          <div className="stat-line"><span>{T('Subjects', 'विषय')}</span><span className="big">7</span></div>
          <div className="stat-line"><span>{T('Practice questions', 'अभ्यास प्रश्न')}</span><span className="big">230+</span></div>
          <div className="stat-line"><span>{T('AI tools', 'AI उपकरण')}</span><span className="big">4</span></div>
        </div>
      </header>

      <section className="landing-section">
        <h2>{T('Everything you need in one place', 'सब कुछ एक ही जगह')}</h2>
        <p className="section-sub">{T('An AI-powered operating system for your entire preparation.', 'आपकी पूरी तैयारी के लिए एक AI-संचालित ऑपरेटिंग सिस्टम।')}</p>
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="fi">{f.icon}</div>
              <h3>{T(f.en, f.hi)}</h3>
              <p>{T(f.den, f.dhi)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="landing-band">
        <section className="landing-section">
          <h2>{T('How it works', 'यह कैसे काम करता है')}</h2>
          <div className="steps">
            <div className="step"><div className="num">1</div><strong>{T('Create your free account', 'निःशुल्क खाता बनाएँ')}</strong><p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>{T('Sign up in seconds — just a username and password.', 'सेकंडों में साइन अप — बस उपयोगकर्ता नाम व पासवर्ड।')}</p></div>
            <div className="step"><div className="num">2</div><strong>{T('Study, practise, revise', 'पढ़ें, अभ्यास करें, दोहराएँ')}</strong><p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>{T('Chapters, quizzes, mock tests and spaced revision.', 'अध्याय, क्विज़, मॉक टेस्ट व स्पेस्ड रिवीजन।')}</p></div>
            <div className="step"><div className="num">3</div><strong>{T('Track your readiness', 'अपनी तैयारी मापें')}</strong><p style={{ color: 'rgba(255,255,255,.8)', fontSize: '.9rem' }}>{T('Analytics show exactly what to improve next.', 'विश्लेषण दिखाता है आगे क्या सुधारना है।')}</p></div>
          </div>
        </section>
      </div>

      <section className="landing-cta-final">
        <h2 style={{ fontSize: '1.8rem', margin: '0 0 10px' }}>{T('Ready to begin?', 'शुरू करने के लिए तैयार?')}</h2>
        <p className="subtitle" style={{ maxWidth: 520, margin: '0 auto 22px' }}>{T('Create your account and your progress is saved and synced across all your devices.', 'खाता बनाएँ और आपकी प्रगति सहेजी जाकर सभी डिवाइस पर सिंक होती है।')}</p>
        <button className="btn primary lg" onClick={() => navigate('/login?mode=register')}>🚀 {T('Start free now', 'अभी निःशुल्क शुरू करें')}</button>
      </section>

      <footer className="landing-footer">
        BPSC AI OS · {T('Your Personal AI Coach to Crack BPSC', 'BPSC क्रैक करने के लिए आपका निजी AI कोच')} · <a href="/user-manual/index.html" target="_blank" rel="noreferrer">{T('User manual', 'उपयोग पुस्तिका')}</a>
      </footer>
    </div>
  );
}
