import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { loadJSON } from '../lib/storage';
import { DEFAULT_AI_SETTINGS, type AISettings } from '../lib/ai/types';
import { evaluateAnswer, type MainsEvaluation } from '../lib/ai/mains';
import { transcribeImage } from '../lib/ai/vision';

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Could not read the image file.'));
    reader.readAsDataURL(file);
  });
}

export function Mains() {
  const { lang } = useLang();
  const [settings] = useState<AISettings>(() => loadJSON('aiSettings', DEFAULT_AI_SETTINGS));
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [ocrLoading, setOcrLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<MainsEvaluation | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const configured = settings.provider === 'local' || settings.apiKey.trim().length > 0;
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (fileRef.current) fileRef.current.value = ''; // allow re-selecting the same file
    if (!file || !configured) return;
    setError('');
    setOcrLoading(true);
    try {
      const dataUrl = await readFileAsDataUrl(file);
      const text = await transcribeImage(settings, dataUrl, lang);
      setAnswer((prev) => (prev.trim() ? prev + '\n' + text : text));
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setOcrLoading(false);
    }
  };

  const run = async () => {
    if (!question.trim() || !answer.trim() || loading || !configured) return;
    setError('');
    setResult(null);
    setLoading(true);
    try {
      const evaluation = await evaluateAnswer(settings, question, answer, lang);
      setResult(evaluation);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const textareaStyle = {
    width: '100%',
    minHeight: 120,
    padding: '10px 12px',
    borderRadius: 9,
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--text)',
    fontFamily: 'inherit',
  };

  return (
    <div>
      <h1>📝 {lang === 'hi' ? 'मुख्य परीक्षा उत्तर मूल्यांकन' : 'Mains Answer Evaluation'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'अपना उत्तर एक सख्त-किन्तु-निष्पक्ष BPSC मुख्य परीक्षक की तरह जँचवाएँ — अंक, आयाम-वार प्रतिक्रिया व आदर्श उत्तर।'
          : 'Get your answer graded like a strict-but-fair BPSC Mains examiner — marks, dimension-wise feedback and a model answer.'}
      </p>

      {!configured && (
        <div className="card" style={{ marginBottom: 14 }}>
          ⚙️ {lang === 'hi'
            ? 'यह सुविधा उपयोग करने के लिए सेटिंग्स में AI प्रदाता कॉन्फ़िगर करें।'
            : 'Configure an AI provider in Settings to use this feature.'}{' '}
          <Link to="/settings">Settings →</Link>
        </div>
      )}

      <div className="field">
        <label>{lang === 'hi' ? 'प्रश्न' : 'Question'}</label>
        <textarea
          style={{ ...textareaStyle, minHeight: 80 }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={lang === 'hi' ? 'मुख्य परीक्षा का प्रश्न यहाँ लिखें…' : 'Paste the mains question here…'}
          disabled={!configured}
        />
      </div>

      <div className="field">
        <label>{lang === 'hi' ? 'आपका उत्तर' : 'Your answer'}</label>
        <textarea
          style={textareaStyle}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={lang === 'hi' ? 'अपना उत्तर यहाँ लिखें…' : 'Write your answer here…'}
          disabled={!configured}
        />
        <div className="hint" style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: 4 }}>
          {lang === 'hi' ? `शब्द गणना: ${wordCount}` : `Word count: ${wordCount}`}
        </div>
        <div className="toolbar no-print" style={{ marginTop: 8 }}>
          <input ref={fileRef} type="file" accept="image/*" onChange={onUpload} style={{ display: 'none' }} />
          <button className="btn small" onClick={() => fileRef.current?.click()} disabled={!configured || ocrLoading}>
            {ocrLoading
              ? lang === 'hi' ? '📷 पढ़ रहा है…' : '📷 Reading…'
              : lang === 'hi' ? '📷 हस्तलिखित उत्तर की फोटो अपलोड करें' : '📷 Upload a photo of your handwritten answer'}
          </button>
          <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
            {lang === 'hi'
              ? 'फोटो को आपके AI प्रदाता द्वारा टेक्स्ट में बदला जाता है (विज़न आवश्यक)।'
              : 'The photo is transcribed to text by your AI provider (needs a vision model).'}
          </span>
        </div>
      </div>

      <button
        className="btn primary"
        onClick={run}
        disabled={!configured || loading || !question.trim() || !answer.trim()}
      >
        {loading
          ? lang === 'hi' ? 'मूल्यांकन हो रहा है…' : 'Evaluating…'
          : `📝 ${lang === 'hi' ? 'मूल्यांकन करें' : 'Evaluate'}`}
      </button>

      {error && <p className="error-text" style={{ marginTop: 12 }}>⚠️ {error}</p>}

      {result && <EvaluationCard result={result} />}
    </div>
  );
}

function EvaluationCard({ result }: { result: MainsEvaluation }) {
  const { lang } = useLang();
  return (
    <div className="card" style={{ marginTop: 18 }}>
      <div className="toolbar no-print" style={{ marginTop: 0 }}>
        <button className="btn small" onClick={() => window.print()}>📄 {lang === 'hi' ? 'PDF' : 'PDF'}</button>
      </div>

      <div style={{ textAlign: 'center', margin: '4px 0 18px' }}>
        <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.1 }}>
          {result.estimatedMarks} / {result.maxMarks}
        </div>
        <div className="subtitle" style={{ margin: 0 }}>
          {lang === 'hi' ? 'अनुमानित अंक' : 'Estimated marks'}
        </div>
      </div>

      <h3>{lang === 'hi' ? 'आयाम-वार मूल्यांकन' : 'Dimension-wise breakdown'}</h3>
      {result.dimensions.map((d, i) => {
        const pct = d.max > 0 ? Math.round((d.score / d.max) * 100) : 0;
        return (
          <div key={i} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
              <span style={{ fontWeight: 600 }}>{d.name}</span>
              <span style={{ color: 'var(--text-dim)' }}>{d.score} / {d.max}</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: 'var(--surface-2)', overflow: 'hidden', margin: '5px 0' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: 'var(--primary)' }} />
            </div>
            {d.comment && <div style={{ fontSize: '0.86rem', color: 'var(--text-dim)' }}>{d.comment}</div>}
          </div>
        );
      })}

      {result.strengths.length > 0 && (
        <>
          <h3 style={{ color: 'var(--green)' }}>✅ {lang === 'hi' ? 'खूबियाँ' : 'Strengths'}</h3>
          <ul>{result.strengths.map((s, i) => <li key={i} style={{ color: 'var(--green)' }}>{s}</li>)}</ul>
        </>
      )}

      {result.improvements.length > 0 && (
        <>
          <h3 style={{ color: 'var(--accent)' }}>🔧 {lang === 'hi' ? 'सुधार के क्षेत्र' : 'Improvements'}</h3>
          <ul>{result.improvements.map((s, i) => <li key={i} style={{ color: 'var(--accent)' }}>{s}</li>)}</ul>
        </>
      )}

      {result.modelAnswer && (
        <div className="note-box note-why">
          <div className="note-title">🎯 {lang === 'hi' ? 'आदर्श उत्तर' : 'Model answer'}</div>
          <div style={{ whiteSpace: 'pre-wrap' }}>{result.modelAnswer}</div>
        </div>
      )}

      <p className="subtitle no-print" style={{ fontSize: '0.8rem', marginTop: 14 }}>
        {lang === 'hi'
          ? '⚠️ AI-जनित मूल्यांकन — इसे मार्गदर्शन के रूप में लें, अंतिम निर्णय के रूप में नहीं।'
          : '⚠️ AI-generated — treat this as guidance, not a final verdict. Verify facts before relying on them.'}
      </p>
    </div>
  );
}
