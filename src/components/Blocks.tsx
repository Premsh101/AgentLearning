import type { Block } from '../content/types';
import { useLang } from '../lib/i18n';
import { RichText } from './RichText';

export function Blocks({ blocks }: { blocks: Block[] }) {
  const { tb } = useLang();
  return (
    <div className="content-section">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return (
              <p key={i}>
                <RichText text={tb(b.text)} />
              </p>
            );
          case 'list': {
            const items = b.items.map((it, j) => (
              <li key={j}>
                <RichText text={tb(it)} />
              </li>
            ));
            return b.ordered ? <ol key={i}>{items}</ol> : <ul key={i}>{items}</ul>;
          }
          case 'table':
            return (
              <div className="table-wrap" key={i}>
                <table className="content-table">
                  {b.caption && <caption>{tb(b.caption)}</caption>}
                  <thead>
                    <tr>
                      {b.headers.map((h, j) => (
                        <th key={j}>
                          <RichText text={tb(h)} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>
                            <RichText text={tb(cell)} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'note':
            return (
              <div className="note-box" key={i}>
                {b.title && <div className="note-title">💡 {tb(b.title)}</div>}
                <RichText text={tb(b.text)} />
              </div>
            );
        }
      })}
    </div>
  );
}
