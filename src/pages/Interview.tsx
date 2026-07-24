import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { loadJSON } from '../lib/storage';
import { DEFAULT_AI_SETTINGS, type AISettings, type ChatMessage } from '../lib/ai/types';
import { chat } from '../lib/ai/client';
import { createRecognizer, speak, stopSpeaking, isSpeechSupported } from '../lib/tts';

type Focus = 'bihar' | 'currentAffairs' | 'general' | 'situational';

interface FocusOption {
  id: Focus;
  en: string;
  hi: string;
}

const FOCUS_OPTIONS: FocusOption[] = [
  { id: 'bihar', en: 'Bihar-specific', hi: 'बिहार-विशिष्ट' },
  { id: 'currentAffairs', en: 'Current Affairs', hi: 'करेंट अफेयर्स' },
  { id: 'general', en: 'Graduation/General', hi: 'स्नातक/सामान्य' },
  { id: 'situational', en: 'Situational', hi: 'परिस्थितिजन्य' },
];

const FOCUS_BRIEF: Record<Focus, string> = {
  bihar: 'Bihar-specific topics: geography, history, polity, economy, culture and current developments of Bihar.',
  currentAffairs: 'National and international current affairs, government schemes, and recent events.',
  general: 'General knowledge, the candidate\'s graduation subjects, optional subjects and broad awareness.',
  situational: 'Situational and ethical judgement, administrative decision-making and behavioural questions.',
};

function buildSystemPrompt(focus: Focus, lang: 'en' | 'hi'): string {
  return (
    'You are a courteous but probing member of a BPSC (Bihar Public Service Commission) interview board conducting a mock personality test. ' +
    'Ask ONE question at a time. From the second question onward, first briefly acknowledge or critique the candidate\'s previous answer in a single line, then ask your next question. ' +
    'Keep every question focused on this area: ' + FOCUS_BRIEF[focus] + ' ' +
    'Stay professional, encouraging and realistic, like a real interview panel. Do not answer on the candidate\'s behalf. ' +
    (lang === 'hi'
      ? 'Reply entirely in Hindi.'
      : 'Reply entirely in English.')
  );
}

export function Interview() {
  const { lang } = useLang();
  const [settings] = useState<AISettings>(() => loadJSON('aiSettings', DEFAULT_AI_SETTINGS));
  const [focus, setFocus] = useState<Focus | null>(null);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [listening, setListening] = useState(false);
  const [voiceUnavailable, setVoiceUnavailable] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const configured = settings.provider === 'local' || settings.apiKey.trim().length > 0;
  const speechOn = isSpeechSupported();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const lastQuestion = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'assistant') return messages[i].content;
    }
    return '';
  })();

  const start = async (chosen: Focus) => {
    if (loading) return;
    setFocus(chosen);
    setStarted(true);
    setError('');
    setMessages([]);
    setLoading(true);
    const system = buildSystemPrompt(chosen, lang);
    const kickoff: ChatMessage = {
      role: 'user',
      content:
        lang === 'hi'
          ? 'साक्षात्कार शुरू करें। कृपया अपना पहला प्रश्न पूछें।'
          : 'Please begin the interview and ask me your first question.',
    };
    try {
      const reply = await chat(settings, [{ role: 'system', content: system }, kickoff]);
      const text = reply || '…';
      setMessages([{ role: 'assistant', content: text }]);
      if (speechOn) speak(text, lang);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading || !focus) return;
    setError('');
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    const system = buildSystemPrompt(focus, lang);
    try {
      const reply = await chat(settings, [{ role: 'system', content: system }, ...next]);
      const answer = reply || '…';
      setMessages([...next, { role: 'assistant', content: answer }]);
      if (speechOn) speak(answer, lang);
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
      setVoiceUnavailable(true);
      return;
    }
    rec.start();
    setListening(true);
  };

  const repeat = () => {
    if (speechOn && lastQuestion) speak(lastQuestion, lang);
  };

  return (
    <div>
      <h1>{lang === 'hi' ? '🎤 साक्षात्कार कोच' : '🎤 Interview Coach'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'ब्राउज़र की अंतर्निहित आवाज़ का उपयोग करके एक मॉक BPSC साक्षात्कार का अभ्यास करें (Chrome/Edge में सबसे अच्छा काम करता है)।'
          : 'Practise a mock BPSC panel interview using your browser\'s built-in voice (works best in Chrome/Edge).'}
      </p>

      {!configured && (
        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ margin: 0 }}>
            ⚙️{' '}
            {lang === 'hi'
              ? 'साक्षात्कार कोच का उपयोग करने के लिए सेटिंग्स में AI प्रदाता कॉन्फ़िगर करें।'
              : 'Configure an AI provider in Settings to use the Interview Coach.'}{' '}
            <Link to="/settings">{lang === 'hi' ? 'सेटिंग्स →' : 'Settings →'}</Link>
          </p>
        </div>
      )}

      {!speechOn && (
        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ margin: 0 }}>
            {lang === 'hi'
              ? 'इस ब्राउज़र में आवाज़ (बोलना/सुनना) समर्थित नहीं है। आप केवल टाइप करके साक्षात्कार दे सकते हैं।'
              : 'Voice (speaking/listening) is not supported in this browser. You can still take the interview by typing.'}
          </p>
        </div>
      )}

      {!started && (
        <div className="card" style={{ marginBottom: 16 }}>
          <p className="subtitle" style={{ marginTop: 0 }}>
            {lang === 'hi' ? 'साक्षात्कार का क्षेत्र चुनें:' : 'Choose an interview focus:'}
          </p>
          <div className="toolbar">
            {FOCUS_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                className={`btn${focus === opt.id ? ' primary' : ''}`}
                onClick={() => setFocus(opt.id)}
                disabled={!configured}
              >
                {lang === 'hi' ? opt.hi : opt.en}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 12 }}>
            <button
              className="btn primary"
              onClick={() => focus && start(focus)}
              disabled={!configured || !focus || loading}
            >
              {lang === 'hi' ? 'साक्षात्कार शुरू करें' : 'Start Interview'}
            </button>
          </div>
        </div>
      )}

      {started && focus && (
        <p className="subtitle">
          <span className="badge">
            {lang === 'hi'
              ? FOCUS_OPTIONS.find((o) => o.id === focus)?.hi
              : FOCUS_OPTIONS.find((o) => o.id === focus)?.en}
          </span>
        </p>
      )}

      {started && (
        <>
          <div className="chat">
            {messages.length === 0 && !loading && (
              <div className="msg ai">
                {lang === 'hi'
                  ? 'साक्षात्कार शुरू हो रहा है…'
                  : 'Starting your interview…'}
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

          <div className="toolbar no-print" style={{ marginBottom: 8 }}>
            <button
              className="btn small"
              onClick={repeat}
              disabled={!speechOn || !lastQuestion || loading}
            >
              🔊 {lang === 'hi' ? 'दोहराएँ' : 'Repeat'}
            </button>
            <button className="btn small" onClick={stopSpeaking} disabled={!speechOn}>
              ⏹ {lang === 'hi' ? 'रोकें' : 'Stop'}
            </button>
          </div>

          {voiceUnavailable && (
            <p className="error-text">
              {lang === 'hi'
                ? 'इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। कृपया टाइप करके उत्तर दें।'
                : 'Voice input is not available in this browser. Please type your answer.'}
            </p>
          )}

          <div className="chat-input">
            <textarea
              rows={2}
              value={input}
              placeholder={
                lang === 'hi' ? 'अपना उत्तर यहाँ लिखें…' : 'Type your answer here…'
              }
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              disabled={!configured || loading}
            />
            <button
              className="btn"
              onClick={toggleVoice}
              disabled={!configured || loading}
              title={lang === 'hi' ? 'वॉइस इनपुट' : 'Voice input'}
            >
              {listening ? '🔴' : '🎤'}
            </button>
            <button
              className="btn primary"
              onClick={send}
              disabled={!configured || loading || !input.trim()}
            >
              ➤
            </button>
          </div>
        </>
      )}
    </div>
  );
}
