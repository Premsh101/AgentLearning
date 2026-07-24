import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n';
import { MapViewer } from '../components/maps/MapViewer';
import { EXAM_MAPS } from '../components/maps/ExamMaps';
import { getAuth } from '../lib/auth';

const BASE = ((import.meta.env.VITE_API_BASE as string | undefined) ?? '').replace(/\/$/, '');

interface UserMap {
  id: string;
  title: string;
  mime: string;
  size: number;
  created_at: string;
}

async function userMapsCall<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers = new Headers(opts.headers);
  headers.set('content-type', 'application/json');
  const a = getAuth();
  if (a) headers.set('authorization', `Bearer ${a.token}`);
  const res = await fetch(`${BASE}/api/user-maps${path}`, { ...opts, headers });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error((detail as { error?: string }).error || `${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

/** Downscale big photos client-side so uploads stay well under the limit. */
function fileToDataUrl(file: File, maxDim = 1800): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      if (scale === 1 && file.size < 1.5 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('read failed'));
        reader.readAsDataURL(file);
        return;
      }
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.88));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('not an image'));
    };
    img.src = url;
  });
}

/** Pan/zoom for uploaded raster maps (CSS transform based). */
function ImagePanZoom({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScale((s) => Math.min(8, Math.max(1, s * (e.deltaY < 0 ? 1.15 : 1 / 1.15))));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="map-viewer">
      <div
        ref={wrapRef}
        className={'map-stage' + (scale > 1 ? ' grab' : '')}
        onPointerDown={(e) => {
          if (scale <= 1) return;
          (e.target as Element).setPointerCapture?.(e.pointerId);
          drag.current = { x: e.clientX, y: e.clientY, tx, ty };
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          setTx(drag.current.tx + (e.clientX - drag.current.x));
          setTy(drag.current.ty + (e.clientY - drag.current.y));
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerLeave={() => (drag.current = null)}
      >
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', display: 'block', transform: `translate(${tx}px, ${ty}px) scale(${scale})`, transformOrigin: 'center', touchAction: 'none' }}
          draggable={false}
        />
      </div>
      <div className="map-controls no-print">
        <button className="btn small" onClick={() => setScale((s) => Math.min(8, s * 1.3))}>＋</button>
        <button className="btn small" onClick={() => setScale((s) => Math.max(1, s / 1.3))}>－</button>
        <button className="btn small" onClick={() => { setScale(1); setTx(0); setTy(0); }}>⟲</button>
        <span className="map-zoom">{Math.round(scale * 100)}%</span>
      </div>
    </div>
  );
}

export function Maps() {
  const { t, tb, lang } = useLang();
  const [activeId, setActiveId] = useState(EXAM_MAPS[0].id);
  const [myMaps, setMyMaps] = useState<UserMap[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const isMine = activeId.startsWith('user:');
  const active = EXAM_MAPS.find((m) => m.id === activeId) ?? EXAM_MAPS[0];
  const activeUserMap = isMine ? myMaps.find((m) => `user:${m.id}` === activeId) : undefined;
  const token = getAuth()?.token ?? '';

  const refreshMine = async () => {
    try {
      const { maps } = await userMapsCall<{ maps: UserMap[] }>('/');
      setMyMaps(maps);
    } catch {
      // not logged in / offline — the section just stays empty
    }
  };
  useEffect(() => {
    void refreshMine();
  }, []);

  const upload = async (file: File) => {
    setUploading(true);
    setUploadMsg('');
    try {
      const dataUrl = await fileToDataUrl(file);
      const title = file.name.replace(/\.[a-z0-9]+$/i, '');
      const { id } = await userMapsCall<{ id: string }>('/', { method: 'POST', body: JSON.stringify({ title, dataUrl }) });
      await refreshMine();
      setActiveId(`user:${id}`);
    } catch (e) {
      setUploadMsg(e instanceof Error ? e.message : String(e));
    } finally {
      setUploading(false);
    }
  };

  const groups: { key: 'india' | 'bihar'; label: string }[] = [
    { key: 'india', label: lang === 'hi' ? 'भारत' : 'India' },
    { key: 'bihar', label: lang === 'hi' ? 'बिहार' : 'Bihar' },
  ];

  return (
    <div>
      <h1>🗺️ {t('nav.maps')}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'वास्तविक सीमाओं वाले ज़ूम-योग्य अध्ययन मानचित्र — खींचकर घुमाएँ, व्हील/पिंच से ज़ूम करें। हर मानचित्र के साथ परीक्षा-दृष्टि से मुख्य तथ्य दिए गए हैं।'
          : 'Zoomable study maps with real boundaries — drag to pan, wheel/pinch to zoom. Each map comes with key exam-point-of-view facts.'}
      </p>

      {groups.map((g) => (
        <div key={g.key} className="map-group">
          <div className="map-group-label">{g.label}</div>
          <div className="map-tabs">
            {EXAM_MAPS.filter((m) => m.group === g.key).map((m) => (
              <button key={m.id} className={'map-tab' + (m.id === activeId ? ' active' : '')} onClick={() => setActiveId(m.id)}>
                {tb(m.title)}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* User-uploaded maps */}
      <div className="map-group">
        <div className="map-group-label">{lang === 'hi' ? 'मेरे मानचित्र' : 'My maps'}</div>
        <div className="map-tabs">
          {myMaps.map((m) => (
            <button key={m.id} className={'map-tab' + (`user:${m.id}` === activeId ? ' active' : '')} onClick={() => setActiveId(`user:${m.id}`)}>
              🖼️ {m.title}
            </button>
          ))}
          <button className="map-tab" onClick={() => fileRef.current?.click()} disabled={uploading}>
            {uploading ? '…' : `＋ ${lang === 'hi' ? 'मानचित्र जोड़ें (चित्र)' : 'Add map (image)'}`}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void upload(f);
              e.target.value = '';
            }}
          />
        </div>
        {uploadMsg && <div className="error-text" style={{ marginTop: 6 }}>⚠️ {uploadMsg}</div>}
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        {isMine && activeUserMap ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <h2 style={{ margin: 0 }}>🖼️ {activeUserMap.title}</h2>
              <button
                className="btn small no-print"
                onClick={async () => {
                  await userMapsCall(`/${activeUserMap.id}`, { method: 'DELETE' });
                  setActiveId(EXAM_MAPS[0].id);
                  void refreshMine();
                }}
              >
                🗑️ {lang === 'hi' ? 'हटाएँ' : 'Delete'}
              </button>
            </div>
            <ImagePanZoom src={`${BASE}/api/user-maps/${activeUserMap.id}/image?token=${encodeURIComponent(token)}`} alt={activeUserMap.title} />
          </>
        ) : (
          <>
            <h2 style={{ marginTop: 0 }}>{tb(active.title)}</h2>
            <div className="map-layout">
              <MapViewer viewBox={active.viewBox} label={tb(active.title)}>
                <active.Comp />
              </MapViewer>
              <aside className="map-insights">
                <h3>🎯 {lang === 'hi' ? 'परीक्षा-दृष्टि' : 'Exam angle'}</h3>
                <ul>
                  {active.insights.map((ins, i) => (
                    <li key={i}>{tb(ins)}</li>
                  ))}
                </ul>
              </aside>
            </div>
            <p className="hint" style={{ marginTop: 10 }}>
              {lang === 'hi'
                ? 'सीमाएँ सार्वजनिक GIS डेटा (भारत-अनुमोदित निरूपण, पूर्ण ज.-क. व लद्दाख सहित) से हैं; विषयगत परतें (नदियाँ, खनिज आदि) वास्तविक निर्देशांकों पर अंकित हैं।'
                : 'Boundaries come from public GIS data (India-approved depiction incl. full J&K & Ladakh); thematic layers (rivers, minerals, etc.) are plotted at true coordinates.'}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
