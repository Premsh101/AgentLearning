import { useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { getAuth, login, register } from '../lib/auth';

export function Login() {
  const { lang } = useLang();
  const [params] = useSearchParams();
  const [mode, setMode] = useState<'login' | 'register'>(params.get('mode') === 'register' ? 'register' : 'login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  if (getAuth()) return <Navigate to="/" replace />;
  const T = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  const submit = async () => {
    if (busy || !username.trim() || !password) return;
    setBusy(true);
    setError('');
    try {
      await (mode === 'login' ? login : register)(username.trim(), password);
      // Land in the app; reload so every page reads the freshly synced progress.
      window.location.hash = '#/';
      window.location.reload();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="landing" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav className="landing-nav">
        <Link to="/welcome" className="brand" style={{ textDecoration: 'none' }}>📘 BPSC AI OS</Link>
        <Link to="/welcome" className="btn">← {T('Home', 'होम')}</Link>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <div className="card" style={{ width: '100%', maxWidth: 420 }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: 4 }}>
            {mode === 'login' ? T('Welcome back', 'पुनः स्वागत है') : T('Create your account', 'अपना खाता बनाएँ')}
          </h1>
          <p className="subtitle" style={{ marginBottom: 18 }}>
            {mode === 'login'
              ? T('Log in to continue your preparation.', 'अपनी तैयारी जारी रखने के लिए लॉगिन करें।')
              : T('Free — your progress will sync across your devices.', 'निःशुल्क — आपकी प्रगति सभी डिवाइस पर सिंक होगी।')}
          </p>

          <div className="toolbar" style={{ marginTop: 0 }}>
            <button className={`btn small ${mode === 'login' ? 'primary' : ''}`} onClick={() => setMode('login')}>{T('Log in', 'लॉगिन')}</button>
            <button className={`btn small ${mode === 'register' ? 'primary' : ''}`} onClick={() => setMode('register')}>{T('Create account', 'नया खाता')}</button>
          </div>

          <div className="field">
            <label>{T('Username', 'उपयोगकर्ता नाम')}</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" style={{ maxWidth: '100%' }} />
          </div>
          <div className="field">
            <label>{T('Password', 'पासवर्ड')}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              style={{ maxWidth: '100%' }}
              onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
            />
          </div>

          <button className="btn primary" style={{ width: '100%', justifyContent: 'center' }} onClick={submit} disabled={busy || !username.trim() || !password}>
            {busy ? '…' : mode === 'login' ? T('Log in', 'लॉगिन करें') : T('Create account', 'खाता बनाएँ')}
          </button>

          {error && <p className="error-text" style={{ marginTop: 12 }}>⚠️ {error}</p>}

          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: 16, textAlign: 'center' }}>
            {mode === 'login' ? (
              <>{T("New here?", 'नए हैं?')} <a onClick={() => setMode('register')} style={{ cursor: 'pointer' }}>{T('Create an account', 'खाता बनाएँ')}</a></>
            ) : (
              <>{T('Already have an account?', 'खाता पहले से है?')} <a onClick={() => setMode('login')} style={{ cursor: 'pointer' }}>{T('Log in', 'लॉगिन करें')}</a></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
