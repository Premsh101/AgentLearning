import { type ReactNode } from 'react';

/**
 * Tiny, dependency-free Markdown renderer for AI chat replies.
 *
 * The app is deliberately dependency-light and runs under a strict CSP with no
 * external assets, so instead of pulling in react-markdown we parse a practical
 * subset ourselves and build real React elements (no dangerouslySetInnerHTML).
 *
 * Supported: headings, bold/italic, inline code, links, unordered & ordered
 * lists, block quotes, fenced code, horizontal rules and GitHub-style tables —
 * which is what the mentor uses to structure answers.
 */

let keySeq = 0;
const k = () => `md${keySeq++}`;

/** Inline: **bold**, *italic* / _italic_, `code`, [text](url). */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Ordered by precedence; `code` first so its contents aren't further parsed.
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('`')) {
      nodes.push(<code key={k()} className="md-code">{tok.slice(1, -1)}</code>);
    } else if (tok.startsWith('**') || tok.startsWith('__')) {
      nodes.push(<strong key={k()}>{renderInline(tok.slice(2, -2))}</strong>);
    } else if (tok.startsWith('[')) {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok)!;
      nodes.push(
        <a key={k()} href={mm[2]} target="_blank" rel="noreferrer noopener">
          {mm[1]}
        </a>
      );
    } else {
      nodes.push(<em key={k()}>{renderInline(tok.slice(1, -1))}</em>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const isTableSep = (s: string) => /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(s) && s.includes('-');
const splitRow = (s: string) =>
  s.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());

export function Markdown({ text }: { text: string }): ReactNode {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (/^\s*```/.test(line)) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++; // closing fence
      blocks.push(
        <pre key={k()} className="md-pre">
          <code>{buf.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // Table: header row + separator row
    if (line.includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const headers = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push(
        <div key={k()} className="md-table-wrap">
          <table className="md-table">
            <thead>
              <tr>{headers.map((h) => <th key={k()}>{renderInline(h)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={k()}>
                  {headers.map((_, ci) => <td key={k()}>{renderInline(r[ci] ?? '')}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Heading
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const Tag = (`h${Math.min(level + 2, 6)}`) as 'h3' | 'h4' | 'h5' | 'h6';
      blocks.push(<Tag key={k()} className="md-h">{renderInline(h[2])}</Tag>);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^\s*([-*_])\1\1+\s*$/.test(line)) {
      blocks.push(<hr key={k()} className="md-hr" />);
      i++;
      continue;
    }

    // Block quote
    if (/^\s*>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      blocks.push(
        <blockquote key={k()} className="md-quote">
          {renderInline(buf.join(' '))}
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*+]\s+/, ''));
      blocks.push(
        <ul key={k()} className="md-ul">
          {items.map((it) => <li key={k()}>{renderInline(it)}</li>)}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\s*\d+[.)]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ''));
      blocks.push(
        <ol key={k()} className="md-ol">
          {items.map((it) => <li key={k()}>{renderInline(it)}</li>)}
        </ol>
      );
      continue;
    }

    // Blank line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph: gather consecutive non-structural lines
    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^\s*```/.test(lines[i]) &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !/^\s*[-*+]\s+/.test(lines[i]) &&
      !/^\s*\d+[.)]\s+/.test(lines[i]) &&
      !/^\s*>\s?/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1]))
    ) {
      buf.push(lines[i++]);
    }
    blocks.push(
      <p key={k()} className="md-p">
        {buf.flatMap((ln, li) => (li ? [<br key={k()} />, ...renderInline(ln)] : renderInline(ln)))}
      </p>
    );
  }

  return <div className="md">{blocks}</div>;
}
