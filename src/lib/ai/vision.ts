import type { AISettings } from './types';
import type { Lang } from '../i18n';

/**
 * Client-side OCR for handwritten/printed answer images, using the user's
 * configured vision-capable provider. No server, no OCR library — the image
 * is sent straight from the browser to the provider and transcribed text
 * comes back. Keeps the Coolify deploy a single static container.
 */

async function readError(res: Response): Promise<never> {
  let detail = '';
  try {
    detail = (await res.text()).slice(0, 300);
  } catch {
    // ignore
  }
  throw new Error(`API error ${res.status}: ${detail || res.statusText}`);
}

function splitDataUrl(dataUrl: string): { mime: string; b64: string } {
  const [meta, b64] = dataUrl.split(',');
  const mime = /data:(.*?);/.exec(meta)?.[1] || 'image/jpeg';
  return { mime, b64: b64 ?? '' };
}

const PROMPT =
  'You are an OCR engine. Transcribe the handwritten or printed answer in this image into plain text. ' +
  'Preserve paragraph breaks. Output ONLY the transcribed text — no commentary, no markdown.';

/** Returns the transcribed text of an image (data URL). Throws on error/unsupported provider. */
export async function transcribeImage(s: AISettings, dataUrl: string, _lang: Lang): Promise<string> {
  const { mime, b64 } = splitDataUrl(dataUrl);

  if (s.provider === 'anthropic') {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': s.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: s.model,
        max_tokens: 2048,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'image', source: { type: 'base64', media_type: mime, data: b64 } },
              { type: 'text', text: PROMPT },
            ],
          },
        ],
      }),
    });
    if (!res.ok) await readError(res);
    const data = await res.json();
    return data.content?.[0]?.text ?? '';
  }

  if (s.provider === 'openai' || s.provider === 'openrouter' || s.provider === 'openai-compatible' || s.provider === 'local') {
    const baseUrl =
      s.provider === 'openai'
        ? 'https://api.openai.com/v1'
        : s.provider === 'openrouter'
          ? 'https://openrouter.ai/api/v1'
          : (s.baseUrl || 'http://localhost:11434/v1');
    const headers: Record<string, string> = { 'content-type': 'application/json' };
    if (s.apiKey) headers.authorization = `Bearer ${s.apiKey}`;
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: s.model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: PROMPT },
              { type: 'image_url', image_url: { url: dataUrl } },
            ],
          },
        ],
      }),
    });
    if (!res.ok) await readError(res);
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? '';
  }

  if (s.provider === 'gemini' || s.provider === 'vertex') {
    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: PROMPT }, { inlineData: { mimeType: mime, data: b64 } }],
        },
      ],
    };
    const url =
      s.provider === 'gemini'
        ? `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s.model)}:generateContent?key=${encodeURIComponent(s.apiKey)}`
        : `https://${s.vertexRegion}-aiplatform.googleapis.com/v1/projects/${s.vertexProject}/locations/${s.vertexRegion}/publishers/google/models/${encodeURIComponent(s.model)}:generateContent`;
    const headers: Record<string, string> = { 'content-type': 'application/json' };
    if (s.provider === 'vertex') headers.authorization = `Bearer ${s.apiKey}`;
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
    if (!res.ok) await readError(res);
    const data = await res.json();
    return (
      (data as { candidates?: { content?: { parts?: { text?: string }[] } }[] }).candidates?.[0]?.content?.parts
        ?.map((p) => p.text ?? '')
        .join('') ?? ''
    );
  }

  throw new Error('This provider does not support image transcription.');
}
