import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { useMentorChat } from '../lib/useMentorChat';
import { Markdown } from '../components/Markdown';
import { exportAnswerDoc, exportChatDoc } from '../lib/exportDoc';

export function Mentor() {
  const { t, lang } = useLang();
  const {
    settings, configured, messages, input, setInput,
    loading, error, listening, send, toggleVoice, endRef,
  } = useMentorChat();
  const chatRef = useRef<HTMLDivElement>(null);

  // Question that produced the reply at index i (for the export header).
  const questionFor = (i: number) => {
    for (let j = i - 1; j >= 0; j--) if (messages[j].role === 'user') return messages[j].content;
    return '';
  };

  const downloadWhole = () => {
    const nodes = chatRef.current?.querySelectorAll('.msg.ai .md') ?? [];
    const pairs: { q: string; html: string }[] = [];
    let n = 0;
    messages.forEach((m, i) => {
      if (m.role === 'assistant') {
        const el = nodes[n++] as HTMLElement | undefined;
        if (el) pairs.push({ q: questionFor(i), html: el.innerHTML });
      }
    });
    if (pairs.length) exportChatDoc(pairs);
  };

  return (
    <div className="mentor-page">
      <div className="mentor-head">
        <div>
          <h1>🤖 {t('nav.mentor')}</h1>
          <p className="subtitle" style={{ marginBottom: 0 }}>
            {lang === 'hi'
              ? `प्रदाता: ${settings.provider} · मॉडल: ${settings.model}`
              : `Provider: ${settings.provider} · Model: ${settings.model}`}
          </p>
        </div>
        {messages.some((m) => m.role === 'assistant') && (
          <button className="btn small no-print" onClick={downloadWhole}>
            📄 {lang === 'hi' ? 'चैट Word में सहेजें' : 'Download chat (Word)'}
          </button>
        )}
      </div>

      {!configured && (
        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ margin: 0 }}>
            ⚙️ {t('mentor.configure')} <Link to="/settings">{t('nav.settings')} →</Link>
          </p>
        </div>
      )}

      {/* Only this panel scrolls; the composer below stays put. */}
      <div className="chat chat-scroll" ref={chatRef}>
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
            {m.role === 'assistant' && (
              <div className="msg-tools no-print">
                <button
                  title={lang === 'hi' ? 'Word में डाउनलोड करें' : 'Download as Word'}
                  onClick={(e) => {
                    const md = (e.currentTarget.closest('.msg')?.querySelector('.md') as HTMLElement | null)?.innerHTML ?? '';
                    exportAnswerDoc(questionFor(i), md);
                  }}
                >
                  📄 Word
                </button>
              </div>
            )}
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
