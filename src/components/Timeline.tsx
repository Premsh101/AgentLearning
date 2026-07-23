import type { TimelineEvent } from '../content/types';
import { useLang } from '../lib/i18n';
import { RichText } from './RichText';

/** Vertical timeline infographic — dual-coding for dates/sequence (history, polity). */
export function Timeline({ events, caption }: { events: TimelineEvent[]; caption?: { en: string; hi: string } }) {
  const { tb } = useLang();
  return (
    <figure className="figure">
      {caption && <figcaption className="fig-caption">{tb(caption)}</figcaption>}
      <ol className="timeline">
        {events.map((e, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-when">{tb(e.when)}</div>
            <div className="timeline-label">
              <RichText text={tb(e.label)} />
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
