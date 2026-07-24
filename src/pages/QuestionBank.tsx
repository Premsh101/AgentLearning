import { useEffect, useState } from 'react';
import { useLang } from '../lib/i18n';
import { api, type ApiQuestion, type ScrapeSource } from '../lib/api';
import { SUBJECTS } from '../content/syllabus';
import { RichText } from '../components/RichText';
import { loadJSON, saveJSON } from '../lib/storage';
import { parsePaper } from '../lib/paperParse';

type Tab = 'scrape' | 'review' | 'import' | 'paper';

export function QuestionBank() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>('review');
  const [token, setToken] = useState<string>(() => loadJSON('adminToken', ''));
  const [health, setHealth] = useState<{ questions: number; adminRequired: boolean } | null>(null);

  useEffect(() => {
    api.health().then((h) => setHealth({ questions: h.questions, adminRequired: h.adminRequired })).catch(() => setHealth(null));
  }, []);

  const saveToken = () => saveJSON('adminToken', token);

  return (
    <div>
      <h1>🛠️ {lang === 'hi' ? 'प्रश्न बैंक (एडमिन)' : 'Question Bank (Admin)'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'प्रश्न स्क्रैप/आयात करें, समीक्षा करें और स्वीकृत करें। केवल स्वीकृत प्रश्न ही क्विज़ व टेस्ट पेपर में आते हैं।'
          : 'Scrape/import questions, review and approve them. Only approved questions appear in quizzes and test papers.'}
        {health && ` · ${health.questions} ${lang === 'hi' ? 'प्रश्न बैंक में' : 'in the bank'}`}
      </p>

      <div className="card" style={{ marginBottom: 14 }}>
        <div className="field" style={{ marginBottom: 0 }}>
          <label>{lang === 'hi' ? 'एडमिन टोकन (यदि सर्वर पर ADMIN_TOKEN सेट है)' : 'Admin token (if ADMIN_TOKEN is set on the server)'}</label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <input type="password" value={token} onChange={(e) => setToken(e.target.value)} placeholder={lang === 'hi' ? 'खाली छोड़ें यदि सेट नहीं' : 'leave blank if not set'} />
            <button className="btn small" onClick={saveToken}>{lang === 'hi' ? 'सहेजें' : 'Save'}</button>
          </div>
          <div className="hint">
            {health?.adminRequired
              ? (lang === 'hi' ? '🔒 यह सर्वर टोकन आवश्यक करता है।' : '🔒 This server requires a token for changes.')
              : (lang === 'hi' ? 'यह सर्वर टोकन आवश्यक नहीं करता (खुला)।' : 'This server does not require a token (open).')}
          </div>
        </div>
      </div>

      <div className="toolbar no-print">
        <button className={`btn ${tab === 'paper' ? 'primary' : ''}`} onClick={() => setTab('paper')}>📄 {lang === 'hi' ? 'पेपर चिपकाएँ' : 'Paste paper'}</button>
        <button className={`btn ${tab === 'review' ? 'primary' : ''}`} onClick={() => setTab('review')}>📋 {lang === 'hi' ? 'समीक्षा कतार' : 'Review queue'}</button>
        <button className={`btn ${tab === 'scrape' ? 'primary' : ''}`} onClick={() => setTab('scrape')}>🌐 {lang === 'hi' ? 'स्क्रैप' : 'Scrape'}</button>
        <button className={`btn ${tab === 'import' ? 'primary' : ''}`} onClick={() => setTab('import')}>📥 {lang === 'hi' ? 'JSON आयात' : 'JSON import'}</button>
      </div>

      {tab === 'paper' && <PaperPanel />}
      {tab === 'review' && <ReviewQueue />}
      {tab === 'scrape' && <ScrapePanel />}
      {tab === 'import' && <ImportPanel />}
    </div>
  );
}

function ReviewQueue() {
  const { lang, tb } = useLang();
  const [items, setItems] = useState<ApiQuestion[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState<string>('');

  const load = () => {
    setError('');
    api.pending().then((r) => setItems(r.questions)).catch((e) => setError(e instanceof Error ? e.message : String(e)));
  };
  useEffect(load, []);

  const act = async (id: string, action: 'approve' | 'reject') => {
    setBusy(id);
    setError('');
    try {
      await api.review(id, action);
      setItems((cur) => (cur ?? []).filter((q) => q.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy('');
    }
  };

  const subjectName = (id: string) => SUBJECTS.find((s) => s.id === id)?.name ?? { en: id, hi: id };

  if (error) return <p className="error-text">⚠️ {error}</p>;
  if (!items) return <p className="subtitle">{lang === 'hi' ? 'लोड हो रहा है…' : 'Loading…'}</p>;
  if (items.length === 0)
    return (
      <div className="card">
        <p style={{ margin: 0 }}>✅ {lang === 'hi' ? 'समीक्षा हेतु कुछ भी बकाया नहीं। "स्क्रैप" या "आयात" से प्रश्न जोड़ें।' : 'Nothing pending review. Add questions via Scrape or Import.'}</p>
      </div>
    );

  return (
    <>
      <p className="subtitle">{items.length} {lang === 'hi' ? 'प्रश्न समीक्षा हेतु बकाया' : 'question(s) pending review'}</p>
      {items.map((q) => (
        <div className="card" key={q.id} style={{ marginBottom: 10 }}>
          <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)', marginBottom: 4 }}>
            {tb(subjectName(q.subjectId))} · {q.topic}{q.year ? ` · ${q.year}` : ''}
          </div>
          <p style={{ fontWeight: 600, margin: '2px 0 8px' }}><RichText text={tb(q.question)} /></p>
          {q.options.map((o, i) => (
            <div key={i} className={`option ${i === q.answer ? 'correct' : ''}`}><RichText text={tb(o)} /></div>
          ))}
          <div className="toolbar" style={{ marginBottom: 0, marginTop: 8 }}>
            <button className="btn small primary" onClick={() => act(q.id, 'approve')} disabled={busy === q.id}>✅ {lang === 'hi' ? 'स्वीकृत' : 'Approve'}</button>
            <button className="btn small" onClick={() => act(q.id, 'reject')} disabled={busy === q.id}>❌ {lang === 'hi' ? 'अस्वीकृत' : 'Reject'}</button>
          </div>
        </div>
      ))}
    </>
  );
}

function PaperPanel() {
  const { lang } = useLang();
  const [text, setText] = useState('');
  const [year, setYear] = useState<number>(2024);
  const [subjectId, setSubjectId] = useState<string>('unclassified');
  const [preview, setPreview] = useState<ReturnType<typeof parsePaper> | null>(null);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const sample =
    lang === 'hi'
      ? `1. भारत के प्रथम राष्ट्रपति कौन थे?\n(a) डॉ. राजेंद्र प्रसाद\n(b) जवाहरलाल नेहरू\n(c) डॉ. एस. राधाकृष्णन\n(d) सरदार पटेल\nउत्तर: (a)\n\n2. "बिहार का शोक" किस नदी को कहा जाता है?\n(a) सोन\n(b) कोसी\n(c) गंडक\n(d) बागमती\nउत्तर: b`
      : `1. Who was the first President of India?\n(a) Dr. Rajendra Prasad\n(b) Jawaharlal Nehru\n(c) Dr. S. Radhakrishnan\n(d) Sardar Patel\nAnswer: (a)\n\n2. Which river is called the "Sorrow of Bihar"?\n(a) Son\n(b) Kosi\n(c) Gandak\n(d) Bagmati\nAnswer: b`;

  const doPreview = () => {
    setError('');
    setMsg('');
    try {
      const r = parsePaper(text, { year, subjectId });
      setPreview(r);
      if (r.questions.length === 0) setError(lang === 'hi' ? 'कोई प्रश्न नहीं मिला — प्रारूप जाँचें।' : 'No questions parsed — check the format.');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const doImport = async () => {
    if (!preview || preview.questions.length === 0) return;
    setBusy(true);
    setError('');
    setMsg('');
    try {
      const r = await api.importQuestions(preview.questions);
      setMsg(`${r.added} ${lang === 'hi' ? 'प्रश्न जोड़े गए' : 'questions added'} (${year}). ${r.dropped ? `${r.dropped} ${lang === 'hi' ? 'छोड़े' : 'dropped'}.` : ''}`);
      setPreview(null);
      setText('');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  return (
    <div className="card">
      <p style={{ marginTop: 0, fontSize: '0.9rem' }}>
        {lang === 'hi'
          ? 'किसी विगत वर्ष के पेपर/आंसर-की का टेक्स्ट यहाँ चिपकाएँ (PDF से कॉपी करें)। प्रश्न, विकल्प व उत्तर अपने-आप पहचान लिए जाते हैं। वर्ष चुनकर आयात करें — वे "वर्ष अनुसार अभ्यास" में आ जाएँगे।'
          : 'Paste the text of a previous-year paper / answer key (copy from the official PDF). Questions, options and answers are detected automatically. Pick the year and import — they appear under “Practice by year”.'}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
        <div className="field" style={{ marginBottom: 0 }}>
          <label>{lang === 'hi' ? 'वर्ष' : 'Year'}</label>
          <select value={year} onChange={(e) => setYear(Number(e.target.value))} style={{ maxWidth: 130 }}>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="field" style={{ marginBottom: 0 }}>
          <label>{lang === 'hi' ? 'विषय (वैकल्पिक)' : 'Subject (optional)'}</label>
          <select value={subjectId} onChange={(e) => setSubjectId(e.target.value)} style={{ maxWidth: 220 }}>
            <option value="unclassified">{lang === 'hi' ? 'मिश्रित / अवर्गीकृत' : 'Mixed / unclassified'}</option>
            {SUBJECTS.map((s) => <option key={s.id} value={s.id}>{s.icon} {s.name.en}</option>)}
          </select>
        </div>
      </div>
      <textarea
        style={{ width: '100%', minHeight: 220, padding: 10, borderRadius: 9, border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '0.86rem' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={sample}
      />
      <div className="toolbar" style={{ marginTop: 8, marginBottom: 0 }}>
        <button className="btn" onClick={doPreview} disabled={!text.trim()}>🔍 {lang === 'hi' ? 'पूर्वावलोकन' : 'Preview'}</button>
        {preview && preview.questions.length > 0 && (
          <button className="btn primary" onClick={doImport} disabled={busy}>
            {busy ? '…' : `📥 ${lang === 'hi' ? `${preview.questions.length} प्रश्न आयात करें` : `Import ${preview.questions.length} questions`}`}
          </button>
        )}
      </div>
      {preview && (
        <div style={{ marginTop: 12 }}>
          <p style={{ margin: '0 0 8px', color: 'var(--green)' }}>
            ✓ {preview.questions.length} {lang === 'hi' ? 'प्रश्न पहचाने गए' : 'questions detected'}
          </p>
          {preview.warnings.length > 0 && (
            <details style={{ marginBottom: 8 }}>
              <summary style={{ color: 'var(--accent)', cursor: 'pointer' }}>⚠️ {preview.warnings.length} {lang === 'hi' ? 'चेतावनियाँ' : 'warnings'}</summary>
              <ul style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                {preview.warnings.slice(0, 20).map((w, i) => <li key={i}>{w}</li>)}
              </ul>
            </details>
          )}
          {preview.questions.slice(0, 3).map((q, i) => (
            <div className="card" key={i} style={{ marginBottom: 8, background: 'var(--bg)' }}>
              <p style={{ fontWeight: 600, margin: '0 0 6px' }}>{i + 1}. {q.question.en}</p>
              {q.options.map((o, j) => (
                <div key={j} className={`option ${j === q.answer ? 'correct' : ''}`} style={{ margin: '4px 0', padding: '6px 10px' }}>{o.en}</div>
              ))}
            </div>
          ))}
          {preview.questions.length > 3 && <p className="hint">…{lang === 'hi' ? `और ${preview.questions.length - 3} प्रश्न` : `and ${preview.questions.length - 3} more`}</p>}
        </div>
      )}
      {msg && <p style={{ color: 'var(--green)', marginTop: 10 }}>✓ {msg}</p>}
      {error && <p className="error-text" style={{ marginTop: 10 }}>⚠️ {error}</p>}
    </div>
  );
}

function ScrapePanel() {
  const { lang } = useLang();
  const [sources, setSources] = useState<ScrapeSource[]>([]);
  const [source, setSource] = useState('');
  const [url, setUrl] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api.scrapeSources().then((r) => { setSources(r.sources); if (r.sources[0]) setSource(r.sources[0].id); }).catch((e) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  const selected = sources.find((s) => s.id === source);

  const run = async () => {
    setBusy(true);
    setError('');
    setMsg('');
    try {
      const r = await api.runScrape(source, url || undefined);
      setMsg(r.message);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card">
      <div className="field">
        <label>{lang === 'hi' ? 'स्रोत' : 'Source'}</label>
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          {sources.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
        {selected && <div className="hint">{selected.description}</div>}
      </div>
      {selected?.needsUrl && (
        <div className="field">
          <label>URL</label>
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/pyqs.json" />
          <div className="hint">{lang === 'hi' ? 'JSON सरणी लौटाने वाला URL।' : 'A URL returning a JSON array of questions.'}</div>
        </div>
      )}
      <button className="btn primary" onClick={run} disabled={busy || !source}>{busy ? '…' : `🌐 ${lang === 'hi' ? 'स्क्रैप चलाएँ' : 'Run scrape'}`}</button>
      {msg && <p style={{ color: 'var(--green)', marginTop: 10 }}>✓ {msg} {lang === 'hi' ? '"समीक्षा कतार" में देखें।' : 'Check the Review queue.'}</p>}
      {error && <p className="error-text" style={{ marginTop: 10 }}>⚠️ {error}</p>}
    </div>
  );
}

function ImportPanel() {
  const { lang } = useLang();
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const sample = `[
  {
    "subjectId": "bihar",
    "topic": "bihar-general",
    "difficulty": 1,
    "question": { "en": "…", "hi": "…" },
    "options": [ {"en":"A","hi":"A"}, {"en":"B","hi":"B"}, {"en":"C","hi":"C"}, {"en":"D","hi":"D"} ],
    "answer": 0,
    "explanation": { "en": "…", "hi": "…" }
  }
]`;

  const run = async () => {
    setBusy(true);
    setError('');
    setMsg('');
    try {
      const arr = JSON.parse(text);
      if (!Array.isArray(arr)) throw new Error(lang === 'hi' ? 'JSON एक सरणी होनी चाहिए।' : 'JSON must be an array.');
      const r = await api.importQuestions(arr);
      setMsg(`${r.added} ${lang === 'hi' ? 'जोड़े' : 'added'}, ${r.dropped} ${lang === 'hi' ? 'अमान्य छोड़े' : 'dropped'} (${r.received} ${lang === 'hi' ? 'प्राप्त' : 'received'}).`);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card">
      <p style={{ marginTop: 0, fontSize: '0.86rem', color: 'var(--text-dim)' }}>
        {lang === 'hi' ? 'प्रश्नों की JSON सरणी चिपकाएँ (स्वीकृत के रूप में जोड़े जाएँगे)।' : 'Paste a JSON array of questions (added as approved).'}
      </p>
      <textarea
        style={{ width: '100%', minHeight: 200, padding: 10, borderRadius: 9, border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'monospace', fontSize: '0.82rem' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={sample}
      />
      <button className="btn primary" onClick={run} disabled={busy || !text.trim()} style={{ marginTop: 8 }}>{busy ? '…' : `📥 ${lang === 'hi' ? 'आयात करें' : 'Import'}`}</button>
      {msg && <p style={{ color: 'var(--green)', marginTop: 10 }}>✓ {msg}</p>}
      {error && <p className="error-text" style={{ marginTop: 10 }}>⚠️ {error}</p>}
    </div>
  );
}
