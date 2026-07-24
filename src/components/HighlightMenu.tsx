import { useEffect, useRef, useState, type RefObject } from 'react';
import { useLang } from '../lib/i18n';
import { addEntry } from '../lib/notebook';

/**
 * Watches text selections inside `containerRef` and shows a small floating
 * "Add to notebook" button next to the selection. Saving files the text under
 * the chapter's subject page in the notebook.
 */
export function HighlightMenu({
  containerRef,
  page,
  chapterId,
  chapterTitle,
}: {
  containerRef: RefObject<HTMLElement | null>;
  page: string;
  chapterId: string;
  chapterTitle: string;
}) {
  const { lang } = useLang();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [savedMsg, setSavedMsg] = useState(false);
  const textRef = useRef('');

  useEffect(() => {
    const update = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
        setPos(null);
        return;
      }
      const range = sel.getRangeAt(0);
      const container = containerRef.current;
      if (!container || !container.contains(range.commonAncestorContainer)) {
        setPos(null);
        return;
      }
      const text = sel.toString().trim();
      if (text.length < 3) {
        setPos(null);
        return;
      }
      textRef.current = text;
      const rect = range.getBoundingClientRect();
      setPos({ x: rect.left + rect.width / 2, y: rect.top });
      setSavedMsg(false);
    };
    // selectionchange covers mouse, keyboard and touch selection alike.
    document.addEventListener('selectionchange', update);
    return () => document.removeEventListener('selectionchange', update);
  }, [containerRef]);

  if (!pos) return null;

  const save = () => {
    addEntry(page, {
      kind: 'highlight',
      text: textRef.current,
      source: { chapterId, chapterTitle },
    });
    setSavedMsg(true);
    setTimeout(() => {
      setPos(null);
      window.getSelection()?.removeAllRanges();
    }, 900);
  };

  return (
    <div
      className="hl-menu no-print"
      style={{ left: Math.max(8, pos.x), top: Math.max(8, pos.y) }}
      // Prevent the button press from clearing the selection before click fires.
      onMouseDown={(e) => e.preventDefault()}
    >
      {savedMsg ? (
        <span className="hl-saved">✓ {lang === 'hi' ? 'नोटबुक में जुड़ा' : 'Added to notebook'}</span>
      ) : (
        <button onClick={save}>🖍️ {lang === 'hi' ? 'नोटबुक में जोड़ें' : 'Add to notebook'}</button>
      )}
    </div>
  );
}
