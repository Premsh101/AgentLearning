export type ProviderId =
  | 'anthropic'
  | 'openai'
  | 'openai-compatible'
  | 'gemini'
  | 'vertex'
  | 'local';

export interface AISettings {
  provider: ProviderId;
  model: string;
  apiKey: string;
  /** Base URL for OpenAI-compatible and local providers (e.g. http://localhost:11434/v1). */
  baseUrl: string;
  vertexProject: string;
  vertexRegion: string;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const DEFAULT_AI_SETTINGS: AISettings = {
  provider: 'anthropic',
  model: 'claude-sonnet-5',
  apiKey: '',
  baseUrl: '',
  vertexProject: '',
  vertexRegion: 'us-central1',
};
