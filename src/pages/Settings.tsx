import { useState } from 'react';
import { useLang } from '../lib/i18n';
import { loadJSON, saveJSON } from '../lib/storage';
import { DEFAULT_AI_SETTINGS, type AISettings, type ProviderId } from '../lib/ai/types';
import { PROVIDERS, providerMeta } from '../lib/ai/providers';
import { listModels } from '../lib/ai/client';

export function Settings() {
  const { t, lang } = useLang();
  const [settings, setSettings] = useState<AISettings>(() => loadJSON('aiSettings', DEFAULT_AI_SETTINGS));
  const [examDate, setExamDate] = useState<string>(() => loadJSON('examDate', ''));
  const [models, setModels] = useState<string[]>(() => providerMeta(settings.provider).defaultModels);
  const [loadingModels, setLoadingModels] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const [modelMsg, setModelMsg] = useState('');

  const meta = providerMeta(settings.provider);

  const update = (patch: Partial<AISettings>) => setSettings((s) => ({ ...s, ...patch }));

  const onProviderChange = (provider: ProviderId) => {
    const m = providerMeta(provider);
    update({
      provider,
      model: m.defaultModels[0] ?? '',
      baseUrl: m.defaultBaseUrl ?? '',
    });
    setModels(m.defaultModels);
    setModelMsg('');
  };

  const refreshModels = async () => {
    setLoadingModels(true);
    setModelMsg('');
    try {
      const list = await listModels(settings);
      setModels(list);
      if (list.length && !list.includes(settings.model)) update({ model: list[0] });
      setModelMsg(lang === 'hi' ? `${list.length} मॉडल मिले` : `${list.length} models found`);
    } catch {
      setModelMsg(lang === 'hi' ? 'मॉडल सूची लोड नहीं हो सकी' : 'Could not load models');
    } finally {
      setLoadingModels(false);
    }
  };

  const save = () => {
    saveJSON('aiSettings', settings);
    saveJSON('examDate', examDate);
    setSavedMsg(lang === 'hi' ? 'सहेजा गया ✓' : 'Saved ✓');
    setTimeout(() => setSavedMsg(''), 2000);
  };

  return (
    <div>
      <h1>⚙️ {t('nav.settings')}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'AI प्रदाता चुनें और परीक्षा तिथि सेट करें। आपकी API कुंजी केवल इसी ब्राउज़र में सुरक्षित रहती है।'
          : 'Choose your AI provider and set your exam date. Your API key stays only in this browser.'}
      </p>

      <div className="card" style={{ marginBottom: 18 }}>
        <h2 style={{ marginTop: 0 }}>{lang === 'hi' ? 'AI प्रदाता' : 'AI Provider'}</h2>

        <div className="field">
          <label>{lang === 'hi' ? 'प्रदाता' : 'Provider'}</label>
          <select value={settings.provider} onChange={(e) => onProviderChange(e.target.value as ProviderId)}>
            {PROVIDERS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {meta.needsBaseUrl && (
          <div className="field">
            <label>Base URL</label>
            <input value={settings.baseUrl} onChange={(e) => update({ baseUrl: e.target.value })} placeholder={meta.defaultBaseUrl} />
            <div className="hint">
              {lang === 'hi' ? 'OpenAI-संगत एंडपॉइंट, जैसे http://localhost:11434/v1' : 'OpenAI-compatible endpoint, e.g. http://localhost:11434/v1'}
            </div>
          </div>
        )}

        {meta.needsVertexConfig && (
          <>
            <div className="field">
              <label>{lang === 'hi' ? 'GCP प्रोजेक्ट ID' : 'GCP Project ID'}</label>
              <input value={settings.vertexProject} onChange={(e) => update({ vertexProject: e.target.value })} placeholder="my-project" />
            </div>
            <div className="field">
              <label>{lang === 'hi' ? 'क्षेत्र (Region)' : 'Region'}</label>
              <input value={settings.vertexRegion} onChange={(e) => update({ vertexRegion: e.target.value })} placeholder="us-central1" />
            </div>
          </>
        )}

        {meta.needsApiKey && (
          <div className="field">
            <label>{meta.id === 'vertex' ? (lang === 'hi' ? 'एक्सेस टोकन' : 'Access token') : 'API Key'}</label>
            <input type="password" value={settings.apiKey} onChange={(e) => update({ apiKey: e.target.value })} placeholder={meta.keyHint} />
            <div className="hint">
              🔒 {lang === 'hi' ? 'यह कुंजी केवल आपके ब्राउज़र (localStorage) में रहती है — सर्वर पर नहीं भेजी जाती।' : 'This key is stored only in your browser (localStorage) — never sent to our servers.'}
            </div>
          </div>
        )}

        <div className="field">
          <label>{lang === 'hi' ? 'मॉडल' : 'Model'}</label>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <select value={settings.model} onChange={(e) => update({ model: e.target.value })} style={{ maxWidth: 300 }}>
              {(models.length ? models : [settings.model]).filter(Boolean).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
              {settings.model && !models.includes(settings.model) && <option value={settings.model}>{settings.model}</option>}
            </select>
            {meta.canListModels && (
              <button className="btn small" onClick={refreshModels} disabled={loadingModels}>
                {loadingModels ? '…' : `🔄 ${lang === 'hi' ? 'मॉडल लाएँ' : 'Fetch models'}`}
              </button>
            )}
          </div>
          <div className="hint">
            {modelMsg ||
              (meta.canListModels
                ? lang === 'hi'
                  ? 'API कुंजी डालकर "मॉडल लाएँ" दबाएँ, या सूची से चुनें।'
                  : 'Enter your key and click "Fetch models", or pick from the list.'
                : lang === 'hi'
                  ? 'इस प्रदाता के लिए मॉडल नाम मैन्युअल रूप से चुना जाता है।'
                  : 'Model is selected manually for this provider.')}
          </div>
          {!meta.canListModels && (
            <input style={{ marginTop: 8 }} value={settings.model} onChange={(e) => update({ model: e.target.value })} placeholder="model name" />
          )}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 18 }}>
        <h2 style={{ marginTop: 0 }}>{lang === 'hi' ? 'परीक्षा' : 'Exam'}</h2>
        <div className="field">
          <label>{lang === 'hi' ? 'BPSC परीक्षा तिथि' : 'BPSC exam date'}</label>
          <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
          <div className="hint">{lang === 'hi' ? 'डैशबोर्ड पर काउंटडाउन के लिए।' : 'Used for the countdown on your dashboard.'}</div>
        </div>
      </div>

      <button className="btn primary" onClick={save}>
        💾 {lang === 'hi' ? 'सहेजें' : 'Save'}
      </button>
      {savedMsg && <span style={{ marginLeft: 12, color: 'var(--green)' }}>{savedMsg}</span>}
    </div>
  );
}
