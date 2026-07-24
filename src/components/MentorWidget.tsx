import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { useMentorChat } from '../lib/useMentorChat';
import { Markdown } from './Markdown';
import { exportAnswerDoc } from '../lib/exportDoc';

/**
 * Floating quick-access AI Mentor. A button pinned to the bottom-right of every
 * page opens a chat panel. Inside the panel only the message list scrolls — the
 * composer is fixed at the bottom so the input never jumps around.
 */
export function MentorWidget() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const {
    configured, messages, input, setInput,
    loading, error, listening, send, toggleVoice, reset, endRef,
  } = useMentorChat();

  return (
    <>
      <button
        className={'mentor-fab no-print' + (open ? ' open' : '')}
        onClick={() => setOpen((o) => !o)}
        title={t('nav.mentor')}
        aria-label={t('nav.mentor')}
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className="mentor-widget no-print" role="dialog" aria-label={t('nav.mentor')}>
          <header className="mw-head">
            <span className="mw-title">🤖 {t('nav.mentor')}</span>
            <div className="mw-actions">
              <button className="mw-icon" title={lang === 'hi' ? 'नई चैट' : 'New chat'} onClick={reset}>🗑️</button>
              <Link className="mw-icon" title={lang === 'hi' ? 'पूरा पृष्ठ' : 'Full page'} to="/mentor" onClick={() => setOpen(false)}>⤢</Link>
              <button className="mw-icon" title={lang === 'hi' ? 'बंद करें' : 'Close'} onClick={() => setOpen(false)}>✕</button>
            </div>
          </header>

          {!configured && (
            <div className="mw-note">
              ⚙️ {t('mentor.configure')} <Link to="/settings" onClick={() => setOpen(false)}>{t('nav.settings')} →</Link>
            </div>
          )}

          <div className="mw-body">
            {messages.length === 0 && (
              <div className="msg ai">
                {lang === 'hi'
                  ? 'नमस्ते! कुछ भी पूछें — संविधान, बिहार GK, करेंट अफेयर्स।'
                  : 'Hi! Ask me anything — Polity, Bihar GK, current affairs.'}
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
                        let q = '';
                        for (let j = i - 1; j >= 0; j--) if (messages[j].role === 'user') { q = messages[j].content; break; }
                        exportAnswerDoc(q, md);
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

          <div className="mw-input">
            <textarea
              rows={1}
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
            <button className="btn primary" onClick={send} disabled={!configured || loading || !input.trim()}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
