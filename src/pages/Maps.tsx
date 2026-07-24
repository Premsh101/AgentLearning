import { useState } from 'react';
import { useLang } from '../lib/i18n';
import { MapViewer } from '../components/maps/MapViewer';
import { EXAM_MAPS } from '../components/maps/ExamMaps';

export function Maps() {
  const { t, tb, lang } = useLang();
  const [activeId, setActiveId] = useState(EXAM_MAPS[0].id);
  const active = EXAM_MAPS.find((m) => m.id === activeId) ?? EXAM_MAPS[0];

  const groups: { key: 'india' | 'bihar'; label: string }[] = [
    { key: 'india', label: lang === 'hi' ? 'भारत' : 'India' },
    { key: 'bihar', label: lang === 'hi' ? 'बिहार' : 'Bihar' },
  ];

  return (
    <div>
      <h1>🗺️ {t('nav.maps')}</h1>
      <p className="subtitle">
        {lang === 'hi'
          ? 'परीक्षा के लिए ज़ूम व स्क्रॉल होने वाले मानचित्र — माउस/उँगली से खींचें, व्हील/पिंच से ज़ूम करें।'
          : 'Zoomable, scrollable study maps for the exam — drag to pan, wheel/pinch to zoom.'}
      </p>

      {groups.map((g) => (
        <div key={g.key} className="map-group">
          <div className="map-group-label">{g.label}</div>
          <div className="map-tabs">
            {EXAM_MAPS.filter((m) => m.group === g.key).map((m) => (
              <button
                key={m.id}
                className={'map-tab' + (m.id === activeId ? ' active' : '')}
                onClick={() => setActiveId(m.id)}
              >
                {tb(m.title)}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="card" style={{ marginTop: 14 }}>
        <h2 style={{ marginTop: 0 }}>{tb(active.title)}</h2>
        <MapViewer viewBox={active.viewBox} label={tb(active.title)}>
          <active.Comp />
        </MapViewer>
        <p className="hint" style={{ marginTop: 10 }}>
          {lang === 'hi'
            ? 'नोट: ये स्मरण-सहायक योजनाबद्ध मानचित्र हैं — स्थान व सीमाएँ अनुमानित हैं, लेकिन लेबल परीक्षा-सटीक हैं।'
            : 'Note: these are memory-aid schematic maps — positions & borders are approximate, but the labels are exam-accurate.'}
        </p>
      </div>
    </div>
  );
}
