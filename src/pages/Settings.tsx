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
          ? 'AI प्रदाता चुनें और परीक्षा तिथि सेट करें। लॉगिन होने पर ये सेटिंग्स आपके खाते में सहेजी जाती हैं और हर डिवाइस पर उपलब्ध रहती हैं।'
          : 'Choose your AI provider and set your exam date. When you are logged in, these settings are saved to your account and available on every device.'}
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
              🔒 {lang === 'hi' ? 'लॉगिन होने पर यह कुंजी आपके खाते में (आपके अपने सर्वर पर) सहेजी जाती है ताकि हर डिवाइस पर वही AI काम करे। यह केवल आपके चुने प्रदाता को भेजी जाती है।' : 'When logged in, this key is saved to your account (on your own server) so the same AI works on every device. It is only ever sent to your chosen provider.'}
            </div>
          </div>
        )}

        <div className="field">
          <label>{lang === 'hi' ? 'मॉडल' : 'Model'}</label>
          {/* Dropdown of known/fetched models (only when there's a list to pick from). */}
          {models.length > 0 && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
              <select
                value={models.includes(settings.model) ? settings.model : ''}
                onChange={(e) => e.target.value && update({ model: e.target.value })}
                style={{ maxWidth: 320 }}
              >
                <option value="">{lang === 'hi' ? '— सूची से चुनें —' : '— pick from list —'}</option>
                {models.filter(Boolean).map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              {meta.canListModels && (
                <button className="btn small" onClick={refreshModels} disabled={loadingModels}>
                  {loadingModels ? '…' : `🔄 ${lang === 'hi' ? 'मॉडल लाएँ' : 'Fetch models'}`}
                </button>
              )}
            </div>
          )}
          {/* Manual entry — ALWAYS available for every provider (some don't list models). */}
          <input
            value={settings.model}
            onChange={(e) => update({ model: e.target.value })}
            placeholder={lang === 'hi' ? 'या मॉडल नाम यहाँ टाइप करें' : 'or type the model name here'}
            style={{ maxWidth: 420 }}
          />
          <div className="hint">
            {modelMsg ||
              (meta.canListModels
                ? lang === 'hi'
                  ? 'सूची से चुनें, या ऊपर बॉक्स में सीधे मॉडल नाम टाइप करें। मॉडल लाने के लिए पहले API कुंजी डालें।'
                  : 'Pick from the list, or type any model name in the box above. Enter your key first to fetch the list.'
                : lang === 'hi'
                  ? 'इस प्रदाता के लिए मॉडल नाम सीधे टाइप करें।'
                  : 'Type the model name directly for this provider.')}
          </div>
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
