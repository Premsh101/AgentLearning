import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Pan + zoom container for the exam maps. Works with mouse (drag to pan, wheel
 * to zoom), touch (drag + pinch) and on-screen buttons. Self-contained, no libs.
 * Children are the raw SVG map content; this component supplies the zoomable
 * <svg> wrapper so every map behaves the same way.
 */
export function MapViewer({
  viewBox,
  children,
  label,
}: {
  viewBox: string;
  children: ReactNode;
  label?: string;
}) {
  const [, , vbW, vbH] = viewBox.split(/\s+/).map(Number);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const pinch = useRef<{ dist: number; scale: number } | null>(null);

  const clampScale = (s: number) => Math.min(8, Math.max(1, s));

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const zoomBy = useCallback((factor: number) => {
    setScale((s) => {
      const ns = clampScale(s * factor);
      // Keep panning within a sensible range as we zoom out.
      if (ns === 1) {
        setTx(0);
        setTy(0);
      }
      return ns;
    });
  }, []);

  // Native wheel listener (passive:false) so we can preventDefault the page scroll.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomBy(e.deltaY < 0 ? 1.15 : 1 / 1.15);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [zoomBy]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, tx, ty };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setTx(drag.current.tx + (e.clientX - drag.current.x));
    setTy(drag.current.ty + (e.clientY - drag.current.y));
  };
  const endDrag = () => {
    drag.current = null;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinch.current = { dist: Math.hypot(dx, dy), scale };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinch.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      setScale(clampScale(pinch.current.scale * (dist / pinch.current.dist)));
    }
  };
  const onTouchEnd = () => {
    pinch.current = null;
  };

  return (
    <div className="map-viewer">
      <div
        ref={wrapRef}
        className={'map-stage' + (scale > 1 ? ' grab' : '')}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <svg
          viewBox={viewBox}
          width="100%"
          role="img"
          aria-label={label}
          preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block', touchAction: 'none' }}
        >
          <g transform={`translate(${tx} ${ty}) scale(${scale}) `} style={{ transformOrigin: `${vbW / 2}px ${vbH / 2}px` }}>
            {children}
          </g>
        </svg>
      </div>
      <div className="map-controls no-print">
        <button className="btn small" onClick={() => zoomBy(1.3)} title="Zoom in">＋</button>
        <button className="btn small" onClick={() => zoomBy(1 / 1.3)} title="Zoom out">－</button>
        <button className="btn small" onClick={reset} title="Reset">⟲</button>
        <span className="map-zoom">{Math.round(scale * 100)}%</span>
      </div>
    </div>
  );
}
