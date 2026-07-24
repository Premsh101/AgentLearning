import type { AISettings, ChatMessage } from './types';
import { providerMeta } from './providers';

async function readError(res: Response): Promise<never> {
  let detail = '';
  try {
    detail = (await res.text()).slice(0, 300);
  } catch {
    // ignore
  }
  throw new Error(`API error ${res.status}: ${detail || res.statusText}`);
}

function splitSystem(messages: ChatMessage[]): { system: string; rest: ChatMessage[] } {
  const system = messages
    .filter((m) => m.role === 'system')
    .map((m) => m.content)
    .join('\n');
  return { system, rest: messages.filter((m) => m.role !== 'system') };
}

async function chatAnthropic(s: AISettings, messages: ChatMessage[]): Promise<string> {
  const { system, rest } = splitSystem(messages);
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
      system: system || undefined,
      messages: rest.map((m) => ({ role: m.role, content: m.content })),
    }),
  });
  if (!res.ok) await readError(res);
  const data = await res.json();
  return data.content?.[0]?.text ?? '';
}

async function chatOpenAICompatible(s: AISettings, messages: ChatMessage[], baseUrl: string): Promise<string> {
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (s.apiKey) headers.authorization = `Bearer ${s.apiKey}`;
  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ model: s.model, messages }),
  });
  if (!res.ok) await readError(res);
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? '';
}

function toGeminiBody(messages: ChatMessage[]) {
  const { system, rest } = splitSystem(messages);
  return {
    systemInstruction: system ? { parts: [{ text: system }] } : undefined,
    contents: rest.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
  };
}

function fromGeminiResponse(data: unknown): string {
  const d = data as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
  return d.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';
}

async function chatGemini(s: AISettings, messages: ChatMessage[]): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s.model)}:generateContent?key=${encodeURIComponent(s.apiKey)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(toGeminiBody(messages)),
  });
  if (!res.ok) await readError(res);
  return fromGeminiResponse(await res.json());
}

async function chatVertex(s: AISettings, messages: ChatMessage[]): Promise<string> {
  const url = `https://${s.vertexRegion}-aiplatform.googleapis.com/v1/projects/${s.vertexProject}/locations/${s.vertexRegion}/publishers/google/models/${encodeURIComponent(s.model)}:generateContent`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${s.apiKey}` },
    body: JSON.stringify(toGeminiBody(messages)),
  });
  if (!res.ok) await readError(res);
  return fromGeminiResponse(await res.json());
}

/** Unified chat entry point — routes to the configured provider. */
export async function chat(s: AISettings, messages: ChatMessage[]): Promise<string> {
  switch (s.provider) {
    case 'anthropic':
      return chatAnthropic(s, messages);
    case 'openai':
      return chatOpenAICompatible(s, messages, 'https://api.openai.com/v1');
    case 'openrouter':
      return chatOpenAICompatible(s, messages, 'https://openrouter.ai/api/v1');
    case 'openai-compatible':
      return chatOpenAICompatible(s, messages, s.baseUrl);
    case 'local':
      return chatOpenAICompatible(s, messages, s.baseUrl || 'http://localhost:11434/v1');
    case 'gemini':
      return chatGemini(s, messages);
    case 'vertex':
      return chatVertex(s, messages);
  }
}

/** Live model list where the provider API supports it; falls back to static defaults. */
export async function listModels(s: AISettings): Promise<string[]> {
  const meta = providerMeta(s.provider);
  try {
    if (s.provider === 'anthropic') {
      const res = await fetch('https://api.anthropic.com/v1/models', {
        headers: {
          'x-api-key': s.apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
      });
      if (!res.ok) await readError(res);
      const data = await res.json();
      const ids = (data.data ?? []).map((m: { id: string }) => m.id);
      return ids.length ? ids : meta.defaultModels;
    }
    if (s.provider === 'openai' || s.provider === 'openrouter' || s.provider === 'openai-compatible' || s.provider === 'local') {
      const baseUrl =
        s.provider === 'openai'
          ? 'https://api.openai.com/v1'
          : s.provider === 'openrouter'
            ? 'https://openrouter.ai/api/v1'
            : s.baseUrl || meta.defaultBaseUrl || '';
      const headers: Record<string, string> = {};
      if (s.apiKey) headers.authorization = `Bearer ${s.apiKey}`;
      const res = await fetch(`${baseUrl.replace(/\/$/, '')}/models`, { headers });
      if (!res.ok) await readError(res);
      const data = await res.json();
      const ids = (data.data ?? []).map((m: { id: string }) => m.id).sort();
      return ids.length ? ids : meta.defaultModels;
    }
    if (s.provider === 'gemini') {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(s.apiKey)}`
      );
      if (!res.ok) await readError(res);
      const data = await res.json();
      const ids = (data.models ?? [])
        .filter((m: { supportedGenerationMethods?: string[] }) =>
          (m.supportedGenerationMethods ?? []).includes('generateContent')
        )
        .map((m: { name: string }) => m.name.replace(/^models\//, ''));
      return ids.length ? ids : meta.defaultModels;
    }
  } catch {
    return meta.defaultModels;
  }
  return meta.defaultModels;
}
