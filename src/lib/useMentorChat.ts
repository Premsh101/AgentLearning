import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from './i18n';
import { loadJSON, onSave } from './storage';
import { DEFAULT_AI_SETTINGS, type AISettings, type ChatMessage } from './ai/types';
import { chat } from './ai/client';
import { createRecognizer } from './tts';

export const MENTOR_SYSTEM_PROMPT =
  'You are the AI Mentor inside a BPSC (Bihar Public Service Commission) exam-preparation app. ' +
  'Answer in simple, clear language a student can understand. Be accurate and exam-focused. ' +
  'When the student writes in Hindi, reply in Hindi; when in English, reply in English. ' +
  'Structure every answer with Markdown so it is easy to scan: use short paragraphs, ' +
  '**bold** for key terms, bullet or numbered lists for points, and a Markdown table ' +
  '(| col | col |) whenever you compare things, list features/dates, or give classifications. ' +
  'Keep it concise and end with a one-line **Takeaway**. ' +
  'If you are unsure of a fact, say so rather than inventing it.';

/**
 * Shared mentor-chat state + actions, so the full Mentor page and the floating
 * quick-access widget behave identically and stay in sync with saved settings.
 */
export function useMentorChat() {
  const { lang } = useLang();
  const [settings, setSettings] = useState<AISettings>(() => loadJSON('aiSettings', DEFAULT_AI_SETTINGS));
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [listening, setListening] = useState(false);

  // Keep settings fresh if the user changes provider/key in another tab/page.
  useEffect(() => onSave((key) => { if (key === 'aiSettings') setSettings(loadJSON('aiSettings', DEFAULT_AI_SETTINGS)); }), []);

  const configured = settings.provider === 'local' || settings.apiKey.trim().length > 0;

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setError('');
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const reply = await chat(settings, [{ role: 'system', content: MENTOR_SYSTEM_PROMPT }, ...next]);
      setMessages([...next, { role: 'assistant', content: reply || '…' }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, settings]);

  const toggleVoice = useCallback(() => {
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
  }, [lang, listening]);

  const reset = useCallback(() => {
    setMessages([]);
    setError('');
    setInput('');
  }, []);

  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return {
    settings, configured, messages, input, setInput,
    loading, error, listening, send, toggleVoice, reset, endRef,
  };
}
