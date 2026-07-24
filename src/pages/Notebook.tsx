import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';
import { SUBJECTS } from '../content/syllabus';
import { loadNotebook, addEntry, removeEntry, type Notebook as NB } from '../lib/notebook';
import { downloadAsWord } from '../lib/exportDoc';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function Notebook() {
  const { t, tb, lang } = useLang();
  const [nb, setNb] = useState<NB>(() => loadNotebook());
  const [draft, setDraft] = useState('');

  const pageName = (key: string): string => {
    if (key === 'general') return lang === 'hi' ? 'सामान्य नोट्स' : 'General notes';
    const s = SUBJECTS.find((x) => x.id === key);
    return s ? tb(s.name) : key;
  };

  const pages = useMemo(() => {
    const existing = Object.keys(nb);
    // Keep subject order stable; general page first.
    const ordered = ['general', ...SUBJECTS.map((s) => s.id)].filter((k) => existing.includes(k));
    return ordered.length ? ordered : ['general'];
  }, [nb]);

  const [active, setActive] = useState<string>(() => pages[0]);
  const activePage = pages.includes(active) ? active : pages[0];
  const entries = nb[activePage] ?? [];

  const refresh = () => setNb(loadNotebook());

  const addNote = () => {
    const text = draft.trim();
    if (!text) return;
    addEntry(activePage, { kind: 'note', text });
    setDraft('');
    refresh();
  };

  const exportPage = () => {
    const body = entries
      .map((e) => {
        const src = e.source ? `<p class="meta">— ${esc(e.source.chapterTitle)}</p>` : '';
        return `<p>${e.kind === 'highlight' ? '🖍️ ' : '📝 '}${esc(e.text).replace(/\n/g, '<br>')}</p>${src}<hr>`;
      })
      .join('');
    downloadAsWord(`notebook-${activePage}`, `${lang === 'hi' ? 'नोटबुक' : 'Notebook'} — ${pageName(activePage)}`, body);
  };

  return (
    <div>
      <h1>📓 {t('nav.notebook')}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'अध्यायों में टेक्स्ट चुनकर "नोटबुक में जोड़ें" दबाएँ — विषय के नाम का पेज अपने-आप बन जाता है। यहाँ अपने नोट्स भी लिख सकते हैं।'
          : 'Select text in any chapter and press “Add to notebook” — a page named after that subject is created automatically. You can also type your own notes here.'}
      </p>

      <div className="map-tabs" style={{ marginBottom: 14 }}>
        {pages.map((p) => (
          <button key={p} className={'map-tab' + (p === activePage ? ' active' : '')} onClick={() => setActive(p)}>
            {pageName(p)} ({(nb[p] ?? []).length})
          </button>
        ))}
        {/* Start a page for a subject that doesn't have one yet */}
        <select
          className="map-tab"
          value=""
          onChange={(e) => {
            if (e.target.value) setActive(e.target.value);
          }}
        >
          <option value="">＋ {lang === 'hi' ? 'नया पेज' : 'New page'}</option>
          {['general', ...SUBJECTS.map((s) => s.id)]
            .filter((k) => !pages.includes(k))
            .map((k) => (
              <option key={k} value={k}>
                {pageName(k)}
              </option>
            ))}
        </select>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0 }}>{pageName(activePage)}</h2>
          {entries.length > 0 && (
            <button className="btn small no-print" onClick={exportPage}>
              📄 {lang === 'hi' ? 'Word में सहेजें' : 'Download (Word)'}
            </button>
          )}
        </div>

        {entries.length === 0 && (
          <p style={{ color: 'var(--text-dim)' }}>
            {lang === 'hi' ? 'यह पेज अभी खाली है।' : 'This page is empty so far.'}{' '}
            <Link to="/learn">{lang === 'hi' ? 'अध्याय पढ़ना शुरू करें →' : 'Start reading chapters →'}</Link>
          </p>
        )}

        {entries.map((e) => (
          <div key={e.id} className={'nb-entry ' + e.kind}>
            <div className="nb-text">{e.text}</div>
            <div className="nb-meta">
              {e.kind === 'highlight' ? '🖍️' : '📝'}{' '}
              {e.source && (
                <>
                  <Link to={`/chapter/${e.source.chapterId}`}>{e.source.chapterTitle}</Link> ·{' '}
                </>
              )}
              {new Date(e.ts).toLocaleDateString()}
              <button
                className="nb-del no-print"
                title={lang === 'hi' ? 'हटाएँ' : 'Delete'}
                onClick={() => {
                  removeEntry(activePage, e.id);
                  refresh();
                }}
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        <div className="nb-add no-print">
          <textarea
            rows={3}
            value={draft}
            placeholder={lang === 'hi' ? 'अपना नोट यहाँ लिखें…' : 'Type your own note here…'}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button className="btn primary" onClick={addNote} disabled={!draft.trim()}>
            ＋ {lang === 'hi' ? 'नोट जोड़ें' : 'Add note'}
          </button>
        </div>
      </div>
    </div>
  );
}
