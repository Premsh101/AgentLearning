import { useState } from 'react';
import { useLang } from '../lib/i18n';
import { loadJSON, saveJSON } from '../lib/storage';

const REPO_ISSUES_URL = 'https://github.com/Premsh101/AgentLearning/issues/new';

interface Report {
  context: string;
  detail: string;
  at: string;
}

/**
 * "Report a mistake" — locked product decision #4.
 * Saves the report locally and offers a pre-filled GitHub issue,
 * feeding the content-correction workflow.
 */
export function ReportMistake({ context }: { context: string }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState('');
  const [saved, setSaved] = useState(false);

  const submit = () => {
    if (!detail.trim()) return;
    const reports = loadJSON<Report[]>('mistakeReports', []);
    reports.push({ context, detail: detail.trim(), at: new Date().toISOString() });
    saveJSON('mistakeReports', reports);
    setSaved(true);
  };

  const issueUrl = `${REPO_ISSUES_URL}?title=${encodeURIComponent(`[Content mistake] ${context}`)}&body=${encodeURIComponent(`**Where:** ${context}\n\n**What is wrong:**\n${detail}`)}`;

  const close = () => {
    setOpen(false);
    setSaved(false);
    setDetail('');
  };

  return (
    <>
      <button className="btn small" onClick={() => setOpen(true)}>
        🚩 {t('common.reportMistake')}
      </button>
      {open && (
        <div className="modal-backdrop" onClick={close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginTop: 0 }}>🚩 {t('common.reportMistake')}</h2>
            {!saved ? (
              <>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                  {lang === 'hi'
                    ? `संदर्भ: ${context}। कृपया बताएं कि क्या गलत है — हम इसे सुधारेंगे।`
                    : `Context: ${context}. Tell us what is wrong — we will fix it.`}
                </p>
                <textarea value={detail} onChange={(e) => setDetail(e.target.value)} placeholder={lang === 'hi' ? 'गलती का विवरण…' : 'Describe the mistake…'} />
                <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                  <button className="btn" onClick={close}>
                    {t('common.cancel')}
                  </button>
                  <button className="btn primary" onClick={submit} disabled={!detail.trim()}>
                    {t('common.submit')}
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  {lang === 'hi'
                    ? 'धन्यवाद! आपकी रिपोर्ट सहेज ली गई है। इसे सीधे GitHub पर भी भेज सकते हैं:'
                    : 'Thank you! Your report has been saved. You can also file it directly on GitHub:'}
                </p>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                  <a className="btn" href={issueUrl} target="_blank" rel="noreferrer">
                    Open GitHub issue ↗
                  </a>
                  <button className="btn primary" onClick={close}>
                    OK
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
