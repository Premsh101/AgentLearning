import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { getAuth, login, register, logout } from '../lib/auth';

export function Account() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => getAuth());
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async () => {
    if (busy || !username.trim() || !password) return;
    setBusy(true);
    setError('');
    try {
      const fn = mode === 'login' ? login : register;
      await fn(username.trim(), password);
      // Reload so every page re-reads the freshly synced progress.
      window.location.hash = '#/';
      window.location.reload();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  const doLogout = async () => {
    setBusy(true);
    await logout();
    setAuth(null);
    setBusy(false);
    navigate('/');
  };

  if (auth) {
    return (
      <div>
        <h1>👤 {lang === 'hi' ? 'खाता' : 'Account'}</h1>
        <div className="card" style={{ maxWidth: 460 }}>
          <p>
            {lang === 'hi' ? 'लॉगिन:' : 'Signed in as:'} <strong>{auth.username}</strong>
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
            {lang === 'hi'
              ? 'आपकी प्रगति (स्ट्रीक, पूर्ण अध्याय, क्विज़ आँकड़े, रिवीजन) सर्वर पर सहेजी जाती है और हर डिवाइस पर उपलब्ध रहती है। AI कुंजियाँ केवल इसी डिवाइस पर रहती हैं।'
              : 'Your progress (streaks, completed chapters, quiz stats, revision schedule) is saved on the server and follows you across devices. AI keys stay on this device only.'}
          </p>
          <button className="btn" onClick={doLogout} disabled={busy}>
            {busy ? '…' : lang === 'hi' ? 'लॉगआउट' : 'Log out'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>👤 {mode === 'login' ? (lang === 'hi' ? 'लॉगिन' : 'Log in') : lang === 'hi' ? 'पंजीकरण' : 'Register'}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'खाता बनाने पर आपकी प्रगति सर्वर पर सहेजी जाती है और मोबाइल/लैपटॉप हर जगह साथ चलती है। बिना खाते के भी ऐप पूरा चलता है (प्रगति केवल इसी ब्राउज़र में रहती है)।'
          : 'With an account your progress is saved on the server and follows you on mobile and laptop. The app also works fully without an account (progress stays in this browser only).'}
      </p>

      <div className="card" style={{ maxWidth: 420 }}>
        <div className="toolbar" style={{ marginTop: 0 }}>
          <button className={`btn small ${mode === 'login' ? 'primary' : ''}`} onClick={() => setMode('login')}>
            {lang === 'hi' ? 'लॉगिन' : 'Log in'}
          </button>
          <button className={`btn small ${mode === 'register' ? 'primary' : ''}`} onClick={() => setMode('register')}>
            {lang === 'hi' ? 'नया खाता' : 'Create account'}
          </button>
        </div>

        <div className="field">
          <label>{lang === 'hi' ? 'उपयोगकर्ता नाम' : 'Username'}</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
        </div>
        <div className="field">
          <label>{lang === 'hi' ? 'पासवर्ड' : 'Password'}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submit();
            }}
          />
        </div>

        <button className="btn primary" onClick={submit} disabled={busy || !username.trim() || !password}>
          {busy ? '…' : mode === 'login' ? (lang === 'hi' ? 'लॉगिन करें' : 'Log in') : lang === 'hi' ? 'खाता बनाएँ' : 'Create account'}
        </button>

        {error && <p className="error-text" style={{ marginTop: 10 }}>⚠️ {error}</p>}
      </div>
    </div>
  );
}
