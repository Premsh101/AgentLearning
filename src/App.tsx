import { NavLink, Outlet } from 'react-router-dom';
import { useLang } from './lib/i18n';

const NAV = [
  { to: '/', key: 'nav.dashboard', icon: '📊', end: true },
  { to: '/learn', key: 'nav.learn', icon: '📚', end: false },
  { to: '/quiz', key: 'nav.quiz', icon: '✅', end: false },
  { to: '/current-affairs', key: 'nav.ca', icon: '📰', end: false },
  { to: '/mock', key: 'nav.mock', icon: '⏱️', end: false },
  { to: '/test-papers', key: 'nav.papers', icon: '🗂️', end: false },
  { to: '/pyq', key: 'nav.pyq', icon: '🎯', end: false },
  { to: '/revision', key: 'nav.revision', icon: '🔁', end: false },
  { to: '/analytics', key: 'nav.analytics', icon: '📊', end: false },
  { to: '/mains', key: 'nav.mains', icon: '📝', end: false },
  { to: '/interview', key: 'nav.interview', icon: '🎤', end: false },
  { to: '/mentor', key: 'nav.mentor', icon: '🤖', end: false },
  { to: '/question-bank', key: 'nav.qbank', icon: '🛠️', end: false },
  { to: '/account', key: 'nav.account', icon: '👤', end: false },
  { to: '/settings', key: 'nav.settings', icon: '⚙️', end: false },
];

export function App() {
  const { t, lang, setLang } = useLang();
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">📘 BPSC AI OS</div>
        <div className="brand-tag">{t('app.tagline')}</div>
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            <span>{n.icon}</span>
            <span>{t(n.key)}</span>
          </NavLink>
        ))}
        <a className="nav-link no-print" href="/user-manual/index.html" target="_blank" rel="noreferrer" style={{ marginTop: 'auto', fontSize: '0.85rem' }}>
          <span>📖</span>
          <span>{lang === 'hi' ? 'उपयोग पुस्तिका' : 'User Manual'}</span>
        </a>
        <div className="lang-switch no-print" style={{ marginTop: 4 }}>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
            EN
          </button>
          <button className={lang === 'hi' ? 'on' : ''} onClick={() => setLang('hi')}>
            हिंदी
          </button>
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
