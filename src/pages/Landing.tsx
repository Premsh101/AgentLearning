import { useEffect, useRef, useState, type ReactNode } from 'react';
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
  { icon: '🗺️', en: 'Real Exam Maps', hi: 'वास्तविक परीक्षा मानचित्र', den: 'Zoomable India & Bihar maps with real boundaries, plus exam-angle facts on every map.', dhi: 'वास्तविक सीमाओं वाले ज़ूम-योग्य भारत व बिहार मानचित्र, हर मानचित्र पर परीक्षा-दृष्टि तथ्य।' },
  { icon: '🎯', en: 'PYQ Intelligence', hi: 'PYQ इंटेलिजेंस', den: 'Analyses previous-year questions to reveal the most-repeated topics and subject weightage.', dhi: 'पिछले वर्षों के प्रश्नों का विश्लेषण कर सर्वाधिक दोहराए विषय व विषयवार महत्व दिखाता है।' },
  { icon: '🔁', en: 'Smart Revision', hi: 'स्मार्ट रिवीजन', den: 'Spaced repetition (1→3→7→15→30→60 days) so nothing you learn gets forgotten.', dhi: 'स्पेस्ड रिपिटीशन (1→3→7→15→30→60 दिन) ताकि सीखा हुआ भूले नहीं।' },
  { icon: '📓', en: 'Highlight → Notebook', hi: 'हाइलाइट → नोटबुक', den: 'Select any line in a chapter and save it; subject-wise notebook pages build themselves.', dhi: 'अध्याय की कोई भी पंक्ति चुनकर सहेजें; विषयवार नोटबुक पेज अपने-आप बनते हैं।' },
  { icon: '🤖', en: 'AI Mentor', hi: 'AI मेंटर', den: 'Ask any BPSC doubt any time — answers arrive as structured tables and notes you can download as Word.', dhi: 'कभी भी कोई BPSC संदेह पूछें — उत्तर तालिकाओं में, Word में डाउनलोड योग्य।' },
  { icon: '📝', en: 'Mains Answer Evaluation', hi: 'मुख्य परीक्षा उत्तर मूल्यांकन', den: 'Type or photograph your answer; AI grades structure, content and language with a model answer.', dhi: 'उत्तर लिखें या फोटो लें; AI संरचना, विषय-वस्तु व भाषा पर अंक व आदर्श उत्तर देता है।' },
  { icon: '🎤', en: 'Voice Interview Coach', hi: 'वॉइस साक्षात्कार कोच', den: 'Practise a mock BPSC interview by voice, in your browser, on your chosen focus area.', dhi: 'ब्राउज़र में आवाज़ से मॉक BPSC साक्षात्कार का अभ्यास, अपने चुने विषय पर।' },
  { icon: '📰', en: 'Current Affairs → Exam Material', hi: 'करेंट अफेयर्स → परीक्षा सामग्री', den: 'Daily news is turned into summaries, static-GK links, MCQs and mains questions.', dhi: 'दैनिक समाचार को सारांश, स्थैतिक-GK लिंक, MCQ व मुख्य प्रश्नों में बदला जाता है।' },
  { icon: '📱', en: 'Works Offline (PWA)', hi: 'ऑफ़लाइन चलता है (PWA)', den: 'Install it like an app; study chapters and quizzes even without internet.', dhi: 'ऐप की तरह इंस्टॉल करें; बिना इंटरनेट भी अध्याय व क्विज़ पढ़ें।' },
  { icon: '☁️', en: 'Your Progress, Everywhere', hi: 'आपकी प्रगति, हर जगह', den: 'Log in and your streak, chapters, scores and revision follow you across mobile and laptop.', dhi: 'लॉगिन करें और आपकी स्ट्रीक, अध्याय, स्कोर व रिवीजन मोबाइल व लैपटॉप हर जगह साथ।' },
];

/** Animated count-up number, starts when scrolled into view. */
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/** 3D tilt-on-hover wrapper (pointer-tracked rotateX/rotateY + glare). */
function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || e.pointerType === 'touch') return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-4px)`;
        el.style.setProperty('--gx', `${(px + 0.5) * 100}%`);
        el.style.setProperty('--gy', `${(py + 0.5) * 100}%`);
      }}
      onPointerLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = '';
      }}
    >
      {children}
    </div>
  );
}

/** Adds .in when scrolled into view (CSS handles the reveal animation). */
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Landing() {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  if (getAuth()) return <Navigate to="/" replace />;
  const T = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="landing landing-v2">
      {/* Animated aurora background */}
      <div className="aurora" aria-hidden>
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <nav className="landing-nav">
        <div className="brand light">📘 BPSC AI OS</div>
        <div className="nav-actions">
          <div className="lang-switch glass" style={{ marginTop: 0, width: 96 }}>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'hi' ? 'on' : ''} onClick={() => setLang('hi')}>हिं</button>
          </div>
          <Link to="/login" className="btn glass-btn">{T('Log in', 'लॉगिन')}</Link>
          <Link to="/login?mode=register" className="btn cta-glow">{T('Get started', 'शुरू करें')}</Link>
        </div>
      </nav>

      <header className="landing-hero hero-v2">
        <div className="hero-copy">
          <div className="hero-eyebrow">✨ {T('AI-powered BPSC preparation', 'AI-संचालित BPSC तैयारी')}</div>
          <h1>
            {T('Your personal ', '')}
            <span className="grad-text">{T('AI coach', 'आपका निजी AI कोच')}</span>
            {T(' to crack BPSC', ' — BPSC क्रैक करने के लिए')}
          </h1>
          <p className="lead">
            {T(
              'One app that plans, teaches, revises, evaluates and motivates — in Hindi and English. No more juggling coaching, YouTube and PDFs.',
              'एक ऐप जो योजना बनाता, पढ़ाता, दोहराता, मूल्यांकन करता व प्रेरित करता है — हिंदी व अंग्रेज़ी में। अब कोचिंग, YouTube व PDF की जद्दोजहद नहीं।'
            )}
          </p>
          <div className="hero-cta">
            <button className="btn cta-glow lg" onClick={() => navigate('/login?mode=register')}>
              🚀 {T('Start free', 'निःशुल्क शुरू करें')}
            </button>
            <button className="btn glass-btn lg" onClick={() => navigate('/login')}>
              {T('I already have an account', 'मेरा खाता पहले से है')}
            </button>
          </div>
          <div className="hero-stats">
            <div><span className="big"><CountUp to={29} /></span><span>{T('Chapters', 'अध्याय')}</span></div>
            <div><span className="big"><CountUp to={7} /></span><span>{T('Subjects', 'विषय')}</span></div>
            <div><span className="big"><CountUp to={230} suffix="+" /></span><span>{T('Questions', 'प्रश्न')}</span></div>
            <div><span className="big"><CountUp to={11} /></span><span>{T('Study maps', 'मानचित्र')}</span></div>
          </div>
        </div>

        {/* 3D floating app mockup */}
        <div className="hero-3d" aria-hidden>
          <div className="mockup-float">
            <div className="mockup">
              <div className="mk-head">
                <span className="mk-dot" /><span className="mk-dot" /><span className="mk-dot" />
                <span className="mk-title">BPSC AI OS</span>
              </div>
              <div className="mk-body">
                <div className="mk-side">
                  <div className="mk-nav on" /><div className="mk-nav" /><div className="mk-nav" /><div className="mk-nav" /><div className="mk-nav" />
                </div>
                <div className="mk-main">
                  <div className="mk-row">
                    <div className="mk-stat"><b>68%</b><i>{T('Ready', 'तैयारी')}</i></div>
                    <div className="mk-stat"><b>21</b><i>{T('Streak', 'स्ट्रीक')}</i></div>
                    <div className="mk-stat"><b>84</b><i>{T('Days left', 'दिन शेष')}</i></div>
                  </div>
                  <div className="mk-bars">
                    <div style={{ height: '38%' }} /><div style={{ height: '65%' }} /><div style={{ height: '48%' }} />
                    <div style={{ height: '80%' }} /><div style={{ height: '58%' }} /><div style={{ height: '90%' }} />
                  </div>
                  <div className="mk-line w80" /><div className="mk-line w60" /><div className="mk-line w70" />
                </div>
              </div>
            </div>
            <div className="chip c1">🤖 {T('AI Mentor', 'AI मेंटर')}</div>
            <div className="chip c2">🗺️ {T('Real maps', 'वास्तविक मानचित्र')}</div>
            <div className="chip c3">🔁 {T('Revision due: 4', 'रिवीजन शेष: 4')}</div>
            <div className="chip c4">✅ {T('Quiz 9/10', 'क्विज़ 9/10')}</div>
          </div>
        </div>
      </header>

      <section className="landing-section">
        <Reveal>
          <h2 className="sec-title">{T('Everything you need in one place', 'सब कुछ एक ही जगह')}</h2>
          <p className="section-sub">{T('An AI-powered operating system for your entire preparation.', 'आपकी पूरी तैयारी के लिए एक AI-संचालित ऑपरेटिंग सिस्टम।')}</p>
        </Reveal>
        <div className="feature-grid v2">
          {FEATURES.map((f, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <Tilt className="feature-card v2">
                <div className="fi">{f.icon}</div>
                <h3>{T(f.en, f.hi)}</h3>
                <p>{T(f.den, f.dhi)}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="landing-band v2">
        <section className="landing-section">
          <Reveal>
            <h2>{T('How it works', 'यह कैसे काम करता है')}</h2>
          </Reveal>
          <div className="steps v2">
            {[
              { n: '1', t: T('Create your free account', 'निःशुल्क खाता बनाएँ'), d: T('Sign up in seconds — just a username and password.', 'सेकंडों में साइन अप — बस उपयोगकर्ता नाम व पासवर्ड।') },
              { n: '2', t: T('Study, practise, revise', 'पढ़ें, अभ्यास करें, दोहराएँ'), d: T('Chapters, quizzes, mock tests, maps and spaced revision.', 'अध्याय, क्विज़, मॉक टेस्ट, मानचित्र व स्पेस्ड रिवीजन।') },
              { n: '3', t: T('Track your readiness', 'अपनी तैयारी मापें'), d: T('Analytics show exactly what to improve next.', 'विश्लेषण दिखाता है आगे क्या सुधारना है।') },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="step">
                  <div className="num">{s.n}</div>
                  <strong>{s.t}</strong>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <section className="landing-cta-final v2">
        <Reveal>
          <h2 className="grad-text" style={{ fontSize: '2rem', margin: '0 0 10px' }}>{T('Ready to begin?', 'शुरू करने के लिए तैयार?')}</h2>
          <p className="section-sub" style={{ maxWidth: 520, margin: '0 auto 22px' }}>
            {T('Create your account and your progress is saved and synced across all your devices.', 'खाता बनाएँ और आपकी प्रगति सहेजी जाकर सभी डिवाइस पर सिंक होती है।')}
          </p>
          <button className="btn cta-glow lg" onClick={() => navigate('/login?mode=register')}>🚀 {T('Start free now', 'अभी निःशुल्क शुरू करें')}</button>
        </Reveal>
      </section>

      <footer className="landing-footer v2">
        BPSC AI OS · {T('Your Personal AI Coach to Crack BPSC', 'BPSC क्रैक करने के लिए आपका निजी AI कोच')} · <a href="/user-manual/index.html" target="_blank" rel="noreferrer">{T('User manual', 'उपयोग पुस्तिका')}</a>
      </footer>
    </div>
  );
}
