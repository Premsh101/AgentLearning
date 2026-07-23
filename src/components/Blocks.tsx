import type { Block, NoteKind } from '../content/types';
import { useLang } from '../lib/i18n';
import { RichText } from './RichText';
import { Timeline } from './Timeline';
import { Figure } from './figures/Figures';

const NOTE_STYLE: Record<NoteKind, { cls: string; icon: string; en: string; hi: string }> = {
  trick: { cls: 'note-trick', icon: '🧠', en: 'Memory trick', hi: 'याद रखने की ट्रिक' },
  why: { cls: 'note-why', icon: '🎯', en: 'Why it matters', hi: 'यह क्यों ज़रूरी है' },
  analogy: { cls: 'note-analogy', icon: '💡', en: 'Think of it like this', hi: 'ऐसे समझें' },
  story: { cls: 'note-story', icon: '📖', en: 'The story', hi: 'कहानी' },
  trap: { cls: 'note-trap', icon: '⚠️', en: 'Exam trap', hi: 'परीक्षा जाल' },
  info: { cls: 'note-info', icon: 'ℹ️', en: 'Note', hi: 'ध्यान दें' },
};

export function Blocks({ blocks }: { blocks: Block[] }) {
  const { tb, lang } = useLang();
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
          case 'note': {
            const style = NOTE_STYLE[b.kind ?? 'trick'];
            const title = b.title ? tb(b.title) : lang === 'hi' ? style.hi : style.en;
            return (
              <div className={`note-box ${style.cls}`} key={i}>
                <div className="note-title">
                  {style.icon} {title}
                </div>
                <RichText text={tb(b.text)} />
              </div>
            );
          }
          case 'timeline':
            return <Timeline key={i} events={b.events} caption={b.caption} />;
          case 'figure':
            return <Figure key={i} figureId={b.figureId} caption={b.caption} />;
        }
      })}
    </div>
  );
}
