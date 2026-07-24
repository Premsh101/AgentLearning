import type { ProviderId } from './types';

export interface ProviderMeta {
  id: ProviderId;
  label: string;
  needsApiKey: boolean;
  needsBaseUrl: boolean;
  needsVertexConfig: boolean;
  /** Static fallback shown before (or instead of) a live model fetch. */
  defaultModels: string[];
  defaultBaseUrl?: string;
  keyHint?: string;
  canListModels: boolean;
}

export const PROVIDERS: ProviderMeta[] = [
  {
    id: 'anthropic',
    label: 'Claude (Anthropic)',
    needsApiKey: true,
    needsBaseUrl: false,
    needsVertexConfig: false,
    defaultModels: ['claude-sonnet-5', 'claude-opus-4-8', 'claude-haiku-4-5-20251001'],
    keyHint: 'sk-ant-…',
    canListModels: true,
  },
  {
    id: 'openai',
    label: 'OpenAI',
    needsApiKey: true,
    needsBaseUrl: false,
    needsVertexConfig: false,
    defaultModels: ['gpt-4o', 'gpt-4o-mini', 'gpt-4.1', 'gpt-4.1-mini'],
    keyHint: 'sk-…',
    canListModels: true,
  },
  {
    id: 'openrouter',
    label: 'OpenRouter',
    needsApiKey: true,
    needsBaseUrl: false,
    needsVertexConfig: false,
    defaultModels: [
      'openai/gpt-4o-mini',
      'anthropic/claude-3.5-sonnet',
      'google/gemini-2.0-flash-001',
      'meta-llama/llama-3.3-70b-instruct',
      'deepseek/deepseek-chat',
    ],
    keyHint: 'sk-or-…',
    canListModels: true,
  },
  {
    id: 'openai-compatible',
    label: 'OpenAI-compatible API',
    needsApiKey: true,
    needsBaseUrl: true,
    needsVertexConfig: false,
    defaultModels: [],
    defaultBaseUrl: 'https://api.example.com/v1',
    keyHint: 'API key (if required)',
    canListModels: true,
  },
  {
    id: 'gemini',
    label: 'Google Gemini',
    needsApiKey: true,
    needsBaseUrl: false,
    needsVertexConfig: false,
    defaultModels: ['gemini-2.5-pro', 'gemini-2.5-flash', 'gemini-2.0-flash'],
    keyHint: 'AIza…',
    canListModels: true,
  },
  {
    id: 'vertex',
    label: 'Vertex AI (Google Cloud)',
    needsApiKey: true,
    needsBaseUrl: false,
    needsVertexConfig: true,
    defaultModels: ['gemini-2.5-pro', 'gemini-2.5-flash'],
    keyHint: 'OAuth access token (gcloud auth print-access-token)',
    canListModels: false,
  },
  {
    id: 'local',
    label: 'Local LLM (Ollama / LM Studio)',
    needsApiKey: false,
    needsBaseUrl: true,
    needsVertexConfig: false,
    defaultModels: ['llama3.1', 'qwen2.5', 'mistral'],
    defaultBaseUrl: 'http://localhost:11434/v1',
    canListModels: true,
  },
];

export function providerMeta(id: ProviderId): ProviderMeta {
  return PROVIDERS.find((p) => p.id === id) ?? PROVIDERS[0];
}
