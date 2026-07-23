import type { Lang } from './i18n';

/** Read-aloud via the browser's built-in speech synthesis. No server TTS. */
export function speak(text: string, lang: Lang): void {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
  utter.rate = 0.95;
  const voices = window.speechSynthesis.getVoices();
  const match = voices.find((v) => v.lang.toLowerCase().startsWith(utter.lang.toLowerCase()));
  if (match) utter.voice = match;
  window.speechSynthesis.speak(utter);
}

export function stopSpeaking(): void {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window;
}

/** Voice input via the browser's built-in speech recognition. No server STT. */
export function createRecognizer(lang: Lang, onResult: (text: string) => void): { start: () => void; stop: () => void } | null {
  const w = window as unknown as Record<string, unknown>;
  const Ctor = (w.SpeechRecognition || w.webkitSpeechRecognition) as
    | (new () => {
        lang: string;
        interimResults: boolean;
        onresult: (e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void;
        start: () => void;
        stop: () => void;
      })
    | undefined;
  if (!Ctor) return null;
  const rec = new Ctor();
  rec.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
  rec.interimResults = false;
  rec.onresult = (e) => {
    const last = e.results[e.results.length - 1];
    if (last && last[0]) onResult(last[0].transcript);
  };
  return { start: () => rec.start(), stop: () => rec.stop() };
}
