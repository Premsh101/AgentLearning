/**
 * Download content as a Word document — dependency-free.
 * Word (and LibreOffice/Google Docs) opens HTML saved with a .doc extension
 * natively, so we wrap the already-rendered chat HTML in a Word-friendly
 * template. Works fully offline, no server round-trip.
 */
const DOC_STYLES = `
  body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; font-size: 12pt; color: #1c2333; line-height: 1.5; }
  h1, h2, h3, h4 { color: #1a3a6b; }
  table { border-collapse: collapse; width: 100%; margin: 8pt 0; }
  th, td { border: 1pt solid #8a94ad; padding: 4pt 8pt; text-align: left; vertical-align: top; }
  th { background: #e3ebf8; font-weight: bold; }
  code, pre { font-family: Consolas, 'Courier New', monospace; background: #eef1f8; }
  pre { padding: 6pt 8pt; border: 1pt solid #dde2ee; }
  blockquote { border-left: 3pt solid #1a3a6b; margin: 6pt 0; padding: 2pt 10pt; color: #5a647a; }
  .q { color: #5a647a; font-style: italic; margin-bottom: 4pt; }
  .meta { color: #8a94ad; font-size: 9pt; }
  hr { border: none; border-top: 1pt solid #dde2ee; }
`;

export function downloadAsWord(filename: string, title: string, bodyHtml: string): void {
  const html =
    `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">` +
    `<head><meta charset="utf-8"><title>${title}</title><style>${DOC_STYLES}</style></head>` +
    `<body><h1>${title}</h1>${bodyHtml}</body></html>`;
  const blob = new Blob(['﻿', html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.doc') ? filename : `${filename}.doc`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Export one Q&A exchange (question text + the reply's rendered HTML). */
export function exportAnswerDoc(question: string, answerHtml: string): void {
  const stamp = new Date().toLocaleDateString();
  downloadAsWord(
    'bpsc-mentor-answer',
    'BPSC AI Mentor',
    `<p class="q">Q: ${esc(question)}</p>${answerHtml}<hr><p class="meta">Exported from BPSC AI OS · ${stamp}</p>`
  );
}

/** Export a whole chat: pairs of question text + rendered reply HTML. */
export function exportChatDoc(pairs: { q: string; html: string }[]): void {
  const stamp = new Date().toLocaleDateString();
  const body = pairs.map((p) => `<p class="q">Q: ${esc(p.q)}</p>${p.html}<hr>`).join('');
  downloadAsWord('bpsc-mentor-chat', 'BPSC AI Mentor — Chat', `${body}<p class="meta">Exported from BPSC AI OS · ${stamp}</p>`);
}
