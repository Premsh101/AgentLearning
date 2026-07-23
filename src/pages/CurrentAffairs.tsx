import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { CA_CATEGORIES, caByCategory, type CurrentAffair } from '../content/currentAffairs';
import { RichText } from '../components/RichText';
import { QuizRunner } from '../components/QuizRunner';
import { loadJSON } from '../lib/storage';
import { DEFAULT_AI_SETTINGS, type AISettings } from '../lib/ai/types';
import { generateExamMaterial, type GeneratedCA } from '../lib/ai/currentAffairs';

type Tab = 'digest' | 'generate';

export function CurrentAffairs() {
  const { t, lang } = useLang();
  const [tab, setTab] = useState<Tab>('digest');

  return (
    <div>
      <h1>📰 {lang === 'hi' ? 'करेंट अफेयर्स' : 'Current Affairs'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'हर समाचार को पूरी परीक्षा सामग्री में बदलें — सारांश, पृष्ठभूमि, स्थैतिक-GK लिंक, MCQ व मुख्य प्रश्न।'
          : 'Turn every news item into complete exam material — summary, background, static-GK link, MCQs and mains questions.'}
      </p>

      <div className="toolbar no-print">
        <button className={`btn ${tab === 'digest' ? 'primary' : ''}`} onClick={() => setTab('digest')}>
          📚 {lang === 'hi' ? 'डाइजेस्ट' : 'Digest'}
        </button>
        <button className={`btn ${tab === 'generate' ? 'primary' : ''}`} onClick={() => setTab('generate')}>
          ✨ {lang === 'hi' ? 'समाचार → परीक्षा सामग्री' : 'News → Exam Material'}
        </button>
      </div>

      {tab === 'digest' ? <Digest /> : <Generator />}

      {tab === 'digest' && (
        <p className="subtitle" style={{ marginTop: 24, fontSize: '0.82rem' }}>
          {lang === 'hi'
            ? 'ℹ️ ये सदाबहार, स्थैतिक-GK से जुड़े उदाहरण हैं। दैनिक/साप्ताहिक स्वचालित डाइजेस्ट (स्रोत मॉनिटरिंग + मानव समीक्षा) अगले चरण का सर्वर कार्य है।'
            : 'ℹ️ These are evergreen, static-GK-linked examples. Automated daily/weekly digests (source monitoring + human review) are the next server-side step.'}
        </p>
      )}
      {tab === 'digest' && <span className="no-print"><Link to="/settings" style={{ fontSize: '0.82rem' }}>{t('nav.settings')} →</Link></span>}
    </div>
  );
}

function Digest() {
  const { tb, lang, t } = useLang();
  const [cat, setCat] = useState<string | null>(null);
  const items = useMemo(() => caByCategory(cat), [cat]);

  return (
    <div>
      <div className="toolbar no-print" style={{ marginTop: 0 }}>
        <button className={`btn small ${cat === null ? 'primary' : ''}`} onClick={() => setCat(null)}>
          {lang === 'hi' ? 'सभी' : 'All'}
        </button>
        {CA_CATEGORIES.map((c) => (
          <button key={c.id} className={`btn small ${cat === c.id ? 'primary' : ''}`} onClick={() => setCat(c.id)}>
            {c.icon} {tb(c.label)}
          </button>
        ))}
        <button className="btn small" onClick={() => window.print()}>
          📄 {t('common.exportPdf')}
        </button>
      </div>
      {items.map((item) => (
        <CACard key={item.id} item={item} />
      ))}
    </div>
  );
}

function CACard({ item }: { item: CurrentAffair }) {
  const { tb, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const cat = CA_CATEGORIES.find((c) => c.id === item.category);

  return (
    <div className="card" style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center' }}>
        <div>
          <span className="badge orange">{cat ? `${cat.icon} ${tb(cat.label)}` : item.category}</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: 8 }}>{item.date}</span>
        </div>
        <button className="btn small no-print" onClick={() => setOpen((o) => !o)}>
          {open ? '▲' : '▼'}
        </button>
      </div>
      <h2 style={{ margin: '8px 0 4px' }}>{tb(item.title)}</h2>
      <p style={{ margin: 0 }}>
        <RichText text={tb(item.summary)} />
      </p>

      {open && (
        <div style={{ marginTop: 12 }}>
          <h3>{lang === 'hi' ? 'पृष्ठभूमि' : 'Background'}</h3>
          <p><RichText text={tb(item.background)} /></p>

          <div className="note-box note-why">
            <div className="note-title">🎯 {lang === 'hi' ? 'स्थैतिक-GK लिंक' : 'Static-GK link'}</div>
            <RichText text={tb(item.staticLink)} />
          </div>

          <h3>{lang === 'hi' ? 'मुख्य तथ्य' : 'Key facts'}</h3>
          <ul>
            {item.facts.map((f, i) => (
              <li key={i}><RichText text={tb(f)} /></li>
            ))}
          </ul>

          <h3>{lang === 'hi' ? 'मुख्य परीक्षा प्रश्न' : 'Mains questions'}</h3>
          <ul>
            {item.mains.map((m, i) => (
              <li key={i}><RichText text={tb(m)} /></li>
            ))}
          </ul>

          <div className="no-print">
            <h3>{lang === 'hi' ? 'अभ्यास MCQ' : 'Practice MCQs'}</h3>
            {!quiz ? (
              <button className="btn primary" onClick={() => setQuiz(true)}>
                {lang === 'hi' ? 'MCQ हल करें' : 'Practice MCQs'} ({item.mcqs.length})
              </button>
            ) : (
              <QuizRunner questions={item.mcqs} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Generator() {
  const { lang } = useLang();
  const [settings] = useState<AISettings>(() => loadJSON('aiSettings', DEFAULT_AI_SETTINGS));
  const [news, setNews] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<GeneratedCA | null>(null);

  const configured = settings.provider === 'local' || settings.apiKey.trim().length > 0;

  const run = async () => {
    if (!news.trim() || loading) return;
    setError('');
    setResult(null);
    setLoading(true);
    try {
      const gen = await generateExamMaterial(settings, news, lang);
      setResult(gen);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!configured && (
        <div className="card" style={{ marginBottom: 14 }}>
          ⚙️ {lang === 'hi'
            ? 'यह सुविधा उपयोग करने के लिए सेटिंग्स में AI प्रदाता कॉन्फ़िगर करें।'
            : 'Configure an AI provider in Settings to use this feature.'}{' '}
          <Link to="/settings">Settings →</Link>
        </div>
      )}
      <div className="field">
        <label>{lang === 'hi' ? 'कोई भी समाचार यहाँ पेस्ट करें' : 'Paste any news item here'}</label>
        <textarea
          style={{ width: '100%', minHeight: 120, padding: '10px 12px', borderRadius: 9, border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', fontFamily: 'inherit' }}
          value={news}
          onChange={(e) => setNews(e.target.value)}
          placeholder={lang === 'hi' ? 'उदा. समाचार का पैराग्राफ…' : 'e.g. a news paragraph…'}
          disabled={!configured}
        />
      </div>
      <button className="btn primary" onClick={run} disabled={!configured || loading || !news.trim()}>
        {loading ? (lang === 'hi' ? 'बना रहा है…' : 'Generating…') : `✨ ${lang === 'hi' ? 'परीक्षा सामग्री बनाएँ' : 'Generate exam material'}`}
      </button>
      {error && <p className="error-text" style={{ marginTop: 12 }}>⚠️ {error}</p>}

      {result && <GeneratedCard gen={result} />}
    </div>
  );
}

function GeneratedCard({ gen }: { gen: GeneratedCA }) {
  const { lang } = useLang();
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  return (
    <div className="card" style={{ marginTop: 18 }}>
      <div className="toolbar no-print" style={{ marginTop: 0 }}>
        <button className="btn small" onClick={() => window.print()}>📄 {lang === 'hi' ? 'PDF' : 'PDF'}</button>
      </div>
      <h2 style={{ marginTop: 0 }}>{gen.title}</h2>
      <span className="badge orange">{gen.category}</span>

      <h3>{lang === 'hi' ? 'सारांश' : 'Summary'}</h3>
      <p>{gen.summary}</p>
      <h3>{lang === 'hi' ? 'पृष्ठभूमि' : 'Background'}</h3>
      <p>{gen.background}</p>

      <div className="note-box note-why">
        <div className="note-title">🎯 {lang === 'hi' ? 'स्थैतिक-GK लिंक' : 'Static-GK link'}</div>
        {gen.staticLink}
      </div>

      {gen.facts.length > 0 && (
        <>
          <h3>{lang === 'hi' ? 'मुख्य तथ्य' : 'Key facts'}</h3>
          <ul>{gen.facts.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </>
      )}

      {gen.mcqs.length > 0 && (
        <>
          <h3>{lang === 'hi' ? 'MCQ' : 'MCQs'}</h3>
          {gen.mcqs.map((m, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <p style={{ fontWeight: 600 }}>{i + 1}. {m.question}</p>
              {m.options.map((o, j) => {
                let cls = 'option';
                if (revealed[i]) cls += j === m.answer ? ' correct' : '';
                return (
                  <div key={j} className={cls}>{o}</div>
                );
              })}
              {revealed[i] ? (
                <div className="explanation">{m.explanation}</div>
              ) : (
                <button className="btn small no-print" style={{ marginTop: 6 }} onClick={() => setRevealed((r) => ({ ...r, [i]: true }))}>
                  {lang === 'hi' ? 'उत्तर दिखाएँ' : 'Show answer'}
                </button>
              )}
            </div>
          ))}
        </>
      )}

      {gen.mains.length > 0 && (
        <>
          <h3>{lang === 'hi' ? 'मुख्य परीक्षा प्रश्न' : 'Mains questions'}</h3>
          <ul>{gen.mains.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </>
      )}

      <p className="subtitle no-print" style={{ fontSize: '0.8rem', marginTop: 14 }}>
        {lang === 'hi'
          ? '⚠️ AI-जनित सामग्री — तथ्यों की पुष्टि विश्वसनीय स्रोत से करें।'
          : '⚠️ AI-generated — verify facts against a trusted source before relying on them.'}
      </p>
    </div>
  );
}
