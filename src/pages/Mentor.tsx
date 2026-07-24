import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { useMentorChat } from '../lib/useMentorChat';
import { Markdown } from '../components/Markdown';

export function Mentor() {
  const { t, lang } = useLang();
  const {
    settings, configured, messages, input, setInput,
    loading, error, listening, send, toggleVoice, endRef,
  } = useMentorChat();

  return (
    <div className="mentor-page">
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

      {/* Only this panel scrolls; the composer below stays put. */}
      <div className="chat chat-scroll">
        {messages.length === 0 && (
          <div className="msg ai">
            {lang === 'hi'
              ? 'नमस्ते! मैं आपका BPSC मेंटर हूँ। संविधान, बिहार GK, करेंट अफेयर्स — कुछ भी पूछें।'
              : 'Hello! I am your BPSC mentor. Ask me anything — Polity, Bihar GK, current affairs, and more.'}
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role === 'user' ? 'user' : 'ai'}`}>
            {m.role === 'user' ? m.content : <Markdown text={m.content} />}
          </div>
        ))}
        {loading && <div className="msg ai typing">…</div>}
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
