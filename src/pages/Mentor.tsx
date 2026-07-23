import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { loadJSON } from '../lib/storage';
import { DEFAULT_AI_SETTINGS, type AISettings, type ChatMessage } from '../lib/ai/types';
import { chat } from '../lib/ai/client';
import { createRecognizer } from '../lib/tts';

const SYSTEM_PROMPT =
  'You are the AI Mentor inside a BPSC (Bihar Public Service Commission) exam-preparation app. ' +
  'Answer in simple, clear language a student can understand. Be accurate and exam-focused. ' +
  'When the student writes in Hindi, reply in Hindi; when in English, reply in English. ' +
  'Prefer concise, well-structured answers with key facts, dates and a short takeaway. ' +
  'If you are unsure of a fact, say so rather than inventing it.';

export function Mentor() {
  const { t, lang } = useLang();
  const [settings] = useState<AISettings>(() => loadJSON('aiSettings', DEFAULT_AI_SETTINGS));
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [listening, setListening] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const configured = settings.provider === 'local' || settings.apiKey.trim().length > 0;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setError('');
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const reply = await chat(settings, [{ role: 'system', content: SYSTEM_PROMPT }, ...next]);
      setMessages([...next, { role: 'assistant', content: reply || '…' }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const toggleVoice = () => {
    if (listening) {
      setListening(false);
      return;
    }
    const rec = createRecognizer(lang, (txt) => {
      setInput((prev) => (prev ? prev + ' ' : '') + txt);
      setListening(false);
    });
    if (!rec) {
      setError(lang === 'hi' ? 'इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है।' : 'Voice input is not available in this browser.');
      return;
    }
    rec.start();
    setListening(true);
  };

  return (
    <div>
      <h1>🤖 {t('nav.mentor')}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? `प्रदाता: ${settings.provider} · मॉडल: ${settings.model}`
          : `Provider: ${settings.provider} · Model: ${settings.model}`}
      </p>

      {!configured && (
        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ margin: 0 }}>
            ⚙️ {t('mentor.configure')} <Link to="/settings">{t('nav.settings')} →</Link>
          </p>
        </div>
      )}

      <div className="chat">
        {messages.length === 0 && (
          <div className="msg ai">
            {lang === 'hi'
              ? 'नमस्ते! मैं आपका BPSC मेंटर हूँ। संविधान, बिहार GK, करेंट अफेयर्स — कुछ भी पूछें।'
              : 'Hello! I am your BPSC mentor. Ask me anything — Polity, Bihar GK, current affairs, and more.'}
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role === 'user' ? 'user' : 'ai'}`}>
            {m.content}
          </div>
        ))}
        {loading && <div className="msg ai">…</div>}
        {error && <div className="error-text">⚠️ {error}</div>}
        <div ref={endRef} />
      </div>

      <div className="chat-input">
        <textarea
          rows={2}
          value={input}
          placeholder={t('mentor.placeholder')}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          disabled={!configured}
        />
        <button className="btn" onClick={toggleVoice} disabled={!configured} title="Voice input">
          {listening ? '🔴' : '🎤'}
        </button>
        <button className="btn primary" onClick={send} disabled={!configured || loading || !input.trim()}>
          ➤
        </button>
      </div>
    </div>
  );
}
