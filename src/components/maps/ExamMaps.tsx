import { type ReactNode } from 'react';
import { useLang, type Bilingual } from '../../lib/i18n';
import { INDIA_STATES, INDIA_STATES_VIEWBOX, INDIA_STATES_PROJ } from './geo/indiaStates';
import { BIHAR_DISTRICTS, BIHAR_DISTRICTS_VIEWBOX, BIHAR_DISTRICTS_PROJ } from './geo/biharDistricts';

/**
 * Exam maps with REAL geometry: state/district boundaries come from public
 * GeoJSON (Survey-of-India-style full J&K/Ladakh depiction), converted to SVG
 * paths by scripts/gen-geo.mjs. Thematic layers (rivers, cities, minerals,
 * parks…) are plotted with the SAME projection using true lon/lat coordinates,
 * so relative positions are geographically correct. Everything is inline SVG:
 * offline-safe, CSP-safe, bilingual, theme-aware.
 */

const T = (en: string, hi: string): Bilingual => ({ en, hi });

function L({ b, ...rest }: { b: Bilingual } & React.SVGProps<SVGTextElement>) {
  const { tb } = useLang();
  return <text {...rest}>{tb(b)}</text>;
}

// Projectors: lon/lat → SVG x/y for each base map.
const IP = (lon: number, lat: number): [number, number] => [
  (lon - INDIA_STATES_PROJ.minLon) * INDIA_STATES_PROJ.kx * INDIA_STATES_PROJ.scale,
  (INDIA_STATES_PROJ.maxLat - lat) * INDIA_STATES_PROJ.scale,
];
const BP = (lon: number, lat: number): [number, number] => [
  (lon - BIHAR_DISTRICTS_PROJ.minLon) * BIHAR_DISTRICTS_PROJ.kx * BIHAR_DISTRICTS_PROJ.scale,
  (BIHAR_DISTRICTS_PROJ.maxLat - lat) * BIHAR_DISTRICTS_PROJ.scale,
];

const line = (proj: (lon: number, lat: number) => [number, number], pts: [number, number][]) =>
  'M' + pts.map(([lon, lat]) => proj(lon, lat).join(' ')).join('L');

/** Rough center of a path's bounding box — used for automatic labels. */
function bboxCenter(d: string): [number, number] {
  const nums = d.match(/-?\d+(?:\.\d+)?/g)!.map(Number);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] < minX) minX = nums[i];
    if (nums[i] > maxX) maxX = nums[i];
    if (nums[i + 1] < minY) minY = nums[i + 1];
    if (nums[i + 1] > maxY) maxY = nums[i + 1];
  }
  return [(minX + maxX) / 2, (minY + maxY) / 2];
}

const styleTag = (
  <style>{`
    .st{fill:var(--primary-soft);stroke:var(--surface);stroke-width:0.7}
    .st:hover{fill:var(--accent-soft)}
    .st-flat{fill:var(--surface-2);stroke:var(--text-dim);stroke-width:0.4;stroke-opacity:0.45}
    .dt{fill:var(--primary-soft);stroke:var(--surface);stroke-width:0.8}
    .dt:hover{fill:var(--accent-soft)}
    .ml-nm{fill:var(--text);font-size:11px;font-weight:700;font-family:inherit;paint-order:stroke;stroke:var(--surface);stroke-width:2.5px;stroke-linejoin:round}
    .ml-sm{fill:var(--text-dim);font-size:9px;font-family:inherit;paint-order:stroke;stroke:var(--surface);stroke-width:2px;stroke-linejoin:round}
    .ml-st{fill:var(--text-dim);font-size:9.5px;font-weight:600;font-family:inherit;pointer-events:none;paint-order:stroke;stroke:var(--surface);stroke-width:2px;stroke-linejoin:round}
    .ml-rg{font-size:12px;font-weight:800;font-family:inherit;paint-order:stroke;stroke:var(--surface);stroke-width:2.5px;stroke-linejoin:round}
    .ml-riv{fill:#1f6fb2;font-size:10px;font-weight:700;font-family:inherit;paint-order:stroke;stroke:var(--surface);stroke-width:2px;stroke-linejoin:round}
    .riv{fill:none;stroke:#2f7fc7;stroke-linecap:round;stroke-linejoin:round}
    .ml-title{fill:var(--text-dim);font-size:14px;font-weight:800;font-family:inherit}
  `}</style>
);

function IndiaBase({ flat = false, highlight }: { flat?: boolean; highlight?: string[] }) {
  return (
    <>
      {INDIA_STATES.map((s) => (
        <path
          key={s.n}
          d={s.d}
          className={flat ? 'st-flat' : 'st'}
          style={highlight?.includes(s.n) ? { fill: 'var(--green-soft)', stroke: 'var(--green)', strokeWidth: 1 } : undefined}
        >
          <title>{s.n}</title>
        </path>
      ))}
    </>
  );
}

function BiharBase({ flat = false }: { flat?: boolean }) {
  return (
    <>
      {BIHAR_DISTRICTS.map((s) => (
        <path key={s.n} d={s.d} className={flat ? 'st-flat' : 'dt'}>
          <title>{s.n}</title>
        </path>
      ))}
    </>
  );
}

function Dot({ at, n, sub, c = 'var(--accent)', r = 4, dy = 0 }: { at: [number, number]; n?: Bilingual; sub?: Bilingual; c?: string; r?: number; dy?: number }) {
  const [x, y] = at;
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={c} stroke="var(--surface)" strokeWidth={1.4} />
      {n && <L b={n} x={x + r + 3} y={y + 3 + dy} className="ml-sm" fontSize={10} fontWeight={700} />}
      {sub && <L b={sub} x={x + r + 3} y={y + 14 + dy} className="ml-sm" />}
    </g>
  );
}

function Legend({ x, y, items, w = 190 }: { x: number; y: number; items: { c: string; b: Bilingual; shape?: 'dot' | 'sq' }[]; w?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-10} y={-18} width={w} height={items.length * 19 + 14} rx={8} fill="var(--surface)" stroke="var(--border)" opacity={0.95} />
      {items.map((it, i) => (
        <g key={i} transform={`translate(0 ${i * 19})`}>
          {it.shape === 'dot' ? (
            <circle cx={7} cy={-3} r={5.5} fill={it.c} stroke="var(--text-dim)" strokeWidth={0.5} />
          ) : (
            <rect x={0} y={-9} width={14} height={13} rx={3} fill={it.c} stroke="var(--text-dim)" strokeWidth={0.5} />
          )}
          <L b={it.b} x={20} y={1} className="ml-sm" fontSize={10} />
        </g>
      ))}
    </g>
  );
}

/* ============================ INDIA — POLITICAL ============================ */

const STATE_LABELS: { n: Bilingual; lon: number; lat: number }[] = [
  { n: T('Rajasthan', 'राजस्थान'), lon: 73.6, lat: 26.6 },
  { n: T('Gujarat', 'गुजरात'), lon: 71.3, lat: 22.6 },
  { n: T('Madhya Pradesh', 'मध्य प्रदेश'), lon: 78.2, lat: 23.6 },
  { n: T('Uttar Pradesh', 'उत्तर प्रदेश'), lon: 80.4, lat: 27 },
  { n: T('BIHAR', 'बिहार'), lon: 85.6, lat: 25.8 },
  { n: T('W. Bengal', 'प. बंगाल'), lon: 87.7, lat: 23.7 },
  { n: T('Jharkhand', 'झारखंड'), lon: 85.1, lat: 23.5 },
  { n: T('Odisha', 'ओडिशा'), lon: 84.2, lat: 20.4 },
  { n: T('Chhattisgarh', 'छत्तीसगढ़'), lon: 81.7, lat: 21.2 },
  { n: T('Maharashtra', 'महाराष्ट्र'), lon: 75.4, lat: 19.3 },
  { n: T('Telangana', 'तेलंगाना'), lon: 78.7, lat: 17.9 },
  { n: T('Andhra Pradesh', 'आंध्र प्रदेश'), lon: 79.4, lat: 15.6 },
  { n: T('Karnataka', 'कर्नाटक'), lon: 76, lat: 14.7 },
  { n: T('Tamil Nadu', 'तमिलनाडु'), lon: 78.3, lat: 10.9 },
  { n: T('Kerala', 'केरल'), lon: 76.1, lat: 10 },
  { n: T('Assam', 'असम'), lon: 92.7, lat: 26.4 },
  { n: T('Punjab', 'पंजाब'), lon: 75.2, lat: 31.1 },
  { n: T('Haryana', 'हरियाणा'), lon: 76.2, lat: 29.3 },
  { n: T('Himachal', 'हिमाचल'), lon: 77.2, lat: 31.9 },
  { n: T('Uttarakhand', 'उत्तराखंड'), lon: 79.2, lat: 30.1 },
  { n: T('J&K', 'ज.-क.'), lon: 74.8, lat: 33.7 },
  { n: T('Ladakh', 'लद्दाख'), lon: 77.6, lat: 35 },
  { n: T('Arunachal', 'अरुणाचल'), lon: 94.4, lat: 28.2 },
];

const CAPITALS: { n: Bilingual; lon: number; lat: number; c?: string }[] = [
  { n: T('Delhi', 'दिल्ली'), lon: 77.21, lat: 28.61, c: 'var(--red)' },
  { n: T('Patna', 'पटना'), lon: 85.14, lat: 25.6, c: 'var(--green)' },
  { n: T('Mumbai', 'मुंबई'), lon: 72.88, lat: 19.07 },
  { n: T('Kolkata', 'कोलकाता'), lon: 88.36, lat: 22.57 },
  { n: T('Chennai', 'चेन्नई'), lon: 80.27, lat: 13.08 },
  { n: T('Bengaluru', 'बेंगलुरु'), lon: 77.59, lat: 12.97 },
  { n: T('Hyderabad', 'हैदराबाद'), lon: 78.49, lat: 17.38 },
  { n: T('Jaipur', 'जयपुर'), lon: 75.8, lat: 26.9 },
  { n: T('Lucknow', 'लखनऊ'), lon: 80.95, lat: 26.85 },
];

function IndiaPolitical() {
  return (
    <>
      {styleTag}
      <IndiaBase highlight={['Bihar']} />
      {STATE_LABELS.map((s, i) => {
        const [x, y] = IP(s.lon, s.lat);
        return <L key={i} b={s.n} x={x} y={y} textAnchor="middle" className="ml-st" />;
      })}
      {CAPITALS.map((c, i) => (
        <Dot key={i} at={IP(c.lon, c.lat)} n={c.n} c={c.c ?? 'var(--accent)'} r={3.5} />
      ))}
      <L b={T('States & key capitals — hover/tap a state for its name', 'राज्य व प्रमुख राजधानियाँ — नाम के लिए राज्य पर होवर/टैप करें')} x={320} y={18} textAnchor="middle" className="ml-title" fontSize={12} />
    </>
  );
}

/* ============================ INDIA — PHYSICAL ============================ */

function IndiaPhysical() {
  return (
    <>
      {styleTag}
      <IndiaBase flat />
      {/* Himalayas */}
      <path d={line(IP, [[74, 35], [77, 33.2], [79, 31.2], [81, 29.9], [84, 28.5], [88, 27.8], [92, 27.8], [95.5, 28.6]])} fill="none" stroke="#8d6e63" strokeWidth={16} strokeLinecap="round" opacity={0.6} />
      <L b={T('HIMALAYAS', 'हिमालय')} x={IP(81, 30.3)[0]} y={IP(81, 30.3)[1]} className="ml-rg" fill="#6d4c41" textAnchor="middle" />
      {/* Northern plains */}
      <path d={line(IP, [[74.5, 30.8], [78, 28.3], [81, 26.5], [85, 25.4], [88, 24.8], [91.5, 25.5]])} fill="none" stroke="#c9a227" strokeWidth={20} strokeLinecap="round" opacity={0.45} />
      <L b={T('Northern Plains', 'उत्तरी मैदान')} x={IP(80.5, 26.6)[0]} y={IP(80.5, 26.6)[1]} className="ml-rg" fill="#8d6e00" textAnchor="middle" />
      {/* Thar */}
      <ellipse cx={IP(71.8, 27)[0]} cy={IP(71.8, 27)[1]} rx={38} ry={30} fill="#e0c068" opacity={0.65} />
      <L b={T('Thar Desert', 'थार मरुस्थल')} x={IP(71.8, 27)[0]} y={IP(71.8, 27)[1]} className="ml-rg" fill="#7a6520" textAnchor="middle" fontSize={10} />
      {/* Deccan */}
      <ellipse cx={IP(78, 17.6)[0]} cy={IP(78, 17.6)[1]} rx={60} ry={72} fill="#a1887f" opacity={0.45} />
      <L b={T('DECCAN PLATEAU', 'दक्कन पठार')} x={IP(78, 17.6)[0]} y={IP(78, 17.6)[1]} className="ml-rg" fill="#5d4037" textAnchor="middle" />
      {/* Western & Eastern Ghats */}
      <path d={line(IP, [[73.3, 20.8], [73.8, 17.5], [74.6, 14.2], [76, 10.8], [77.2, 8.4]])} fill="none" stroke="#2e7d32" strokeWidth={6} strokeLinecap="round" opacity={0.75} />
      <L b={T('Western Ghats', 'पश्चिमी घाट')} x={IP(73, 14.8)[0]} y={IP(73, 14.8)[1]} className="ml-rg" fill="#2e7d32" fontSize={10} transform={`rotate(75 ${IP(73, 14.8)[0]} ${IP(73, 14.8)[1]})`} />
      <path d={line(IP, [[85.8, 20.8], [83.5, 18.3], [80.5, 15.6], [79.2, 13.4]])} fill="none" stroke="#558b2f" strokeWidth={4.5} strokeLinecap="round" opacity={0.7} strokeDasharray="7 4" />
      <L b={T('Eastern Ghats', 'पूर्वी घाट')} x={IP(84.6, 17.6)[0]} y={IP(84.6, 17.6)[1]} className="ml-rg" fill="#558b2f" fontSize={10} transform={`rotate(48 ${IP(84.6, 17.6)[0]} ${IP(84.6, 17.6)[1]})`} />
      {/* Aravalli, Vindhya, Satpura */}
      <path d={line(IP, [[72.9, 24.3], [74.6, 26], [76.5, 27.9]])} fill="none" stroke="#795548" strokeWidth={4} opacity={0.65} strokeLinecap="round" />
      <L b={T('Aravalli', 'अरावली')} x={IP(73.5, 25.4)[0]} y={IP(73.5, 25.4)[1]} className="ml-sm" fill="#795548" transform={`rotate(-42 ${IP(73.5, 25.4)[0]} ${IP(73.5, 25.4)[1]})`} />
      <path d={line(IP, [[73.8, 22.7], [78, 23.6], [82.5, 24.2]])} fill="none" stroke="#8d6e63" strokeWidth={3.5} opacity={0.6} strokeLinecap="round" />
      <L b={T('Vindhya', 'विंध्य')} x={IP(77.4, 24.2)[0]} y={IP(77.4, 24.2)[1]} className="ml-sm" fill="#6d4c41" />
      <path d={line(IP, [[73.9, 21.4], [77.5, 21.7], [80.5, 22]])} fill="none" stroke="#8d6e63" strokeWidth={3.5} opacity={0.6} strokeLinecap="round" />
      <L b={T('Satpura', 'सतपुड़ा')} x={IP(76.8, 21.1)[0]} y={IP(76.8, 21.1)[1]} className="ml-sm" fill="#6d4c41" />
      {/* Coasts */}
      <L b={T('Konkan–Malabar Coast', 'कोंकण–मालाबार तट')} x={IP(71.8, 13.5)[0]} y={IP(71.8, 13.5)[1]} className="ml-sm" transform={`rotate(78 ${IP(71.8, 13.5)[0]} ${IP(71.8, 13.5)[1]})`} />
      <L b={T('Coromandel Coast', 'कोरोमंडल तट')} x={IP(81.6, 12.4)[0]} y={IP(81.6, 12.4)[1]} className="ml-sm" transform={`rotate(-65 ${IP(81.6, 12.4)[0]} ${IP(81.6, 12.4)[1]})`} />
    </>
  );
}

/* ============================= INDIA — RIVERS ============================= */

const INDIA_RIVERS: { n: Bilingual; w: number; pts: [number, number][]; lbl: [number, number]; rot?: number }[] = [
  { n: T('Indus', 'सिंधु'), w: 4, pts: [[78.2, 32.5], [77.5, 34.2], [74.8, 35.2], [72.9, 34], [70.9, 31.2], [68.8, 27.6], [68.3, 24.6]], lbl: [70.2, 30] },
  { n: T('Sutlej', 'सतलुज'), w: 2.5, pts: [[78.8, 31.6], [76.5, 31.3], [74.7, 30.8], [71.9, 29.9]], lbl: [76.6, 30.9] },
  { n: T('Ganga', 'गंगा'), w: 5, pts: [[78.15, 30], [78.5, 29.4], [80.3, 26.4], [81.85, 25.4], [83, 25.35], [85.14, 25.6], [86.9, 25.3], [87.9, 24.8], [88.3, 23.5]], lbl: [82.5, 25.9] },
  { n: T('Yamuna', 'यमुना'), w: 3, pts: [[78.4, 30.9], [77.2, 28.6], [77.9, 27.2], [80, 26.2], [81.85, 25.42]], lbl: [77.5, 27.6] },
  { n: T('Brahmaputra', 'ब्रह्मपुत्र'), w: 4.5, pts: [[95.4, 28.1], [94.6, 27.5], [92.8, 26.2], [90.7, 26], [89.7, 25.4], [89.8, 24.3]], lbl: [92.5, 26.9] },
  { n: T('Kosi', 'कोसी'), w: 2.5, pts: [[87.2, 26.9], [87, 26.1], [86.55, 25.42]], lbl: [87.5, 26.3] },
  { n: T('Narmada', 'नर्मदा'), w: 3, pts: [[81.7, 22.7], [79, 22.5], [75.8, 22.2], [73.1, 21.8], [72.6, 21.7]], lbl: [77.5, 22.9] },
  { n: T('Tapi', 'तापी'), w: 2.5, pts: [[76.2, 21.3], [74.5, 21.2], [72.8, 21.1]], lbl: [74.7, 20.7] },
  { n: T('Mahanadi', 'महानदी'), w: 3, pts: [[81.9, 20.4], [83.5, 20.4], [85.2, 20.4], [86.4, 20.3]], lbl: [83.7, 19.9] },
  { n: T('Godavari', 'गोदावरी'), w: 3.5, pts: [[73.5, 19.95], [75.5, 19.5], [77.5, 19.1], [79.9, 18.7], [81.2, 17.2], [81.8, 16.7]], lbl: [77.8, 18.6] },
  { n: T('Krishna', 'कृष्णा'), w: 3, pts: [[73.7, 17.3], [75.9, 16.6], [78.2, 16.4], [80.2, 16.3], [80.9, 15.8]], lbl: [77.3, 15.9] },
  { n: T('Kaveri', 'कावेरी'), w: 3, pts: [[75.5, 12.4], [76.9, 12.3], [78.2, 11.4], [79.4, 10.9], [79.85, 10.75]], lbl: [77, 11.6] },
];

function IndiaRivers() {
  return (
    <>
      {styleTag}
      <IndiaBase flat />
      {INDIA_RIVERS.map((r, i) => (
        <path key={i} className="riv" d={line(IP, r.pts)} strokeWidth={r.w} />
      ))}
      {INDIA_RIVERS.map((r, i) => {
        const [x, y] = IP(r.lbl[0], r.lbl[1]);
        return <L key={i} b={r.n} x={x} y={y} className="ml-riv" textAnchor="middle" transform={r.rot ? `rotate(${r.rot} ${x} ${y})` : undefined} />;
      })}
      <Dot at={IP(81.85, 25.42)} n={T('Prayagraj (Sangam)', 'प्रयागराज (संगम)')} c="var(--red)" r={3} />
      <Dot at={IP(87.9, 24.8)} n={T('Farakka', 'फरक्का')} c="var(--red)" r={3} />
    </>
  );
}

/* ============================== INDIA — SOILS ============================= */

function IndiaSoil() {
  return (
    <>
      {styleTag}
      <IndiaBase flat />
      <path d={line(IP, [[74.5, 30.8], [78, 28.3], [81, 26.5], [85, 25.4], [88, 24.8], [91.5, 25.5]])} fill="none" stroke="#c9a227" strokeWidth={22} strokeLinecap="round" opacity={0.6} />
      <ellipse cx={IP(75.5, 19.5)[0]} cy={IP(75.5, 19.5)[1]} rx={48} ry={42} fill="#37474f" opacity={0.55} />
      <ellipse cx={IP(79.5, 14.5)[0]} cy={IP(79.5, 14.5)[1]} rx={42} ry={50} fill="#b23a2c" opacity={0.5} />
      <ellipse cx={IP(85, 22.3)[0]} cy={IP(85, 22.3)[1]} rx={35} ry={22} fill="#b23a2c" opacity={0.5} />
      <ellipse cx={IP(71.8, 27)[0]} cy={IP(71.8, 27)[1]} rx={36} ry={28} fill="#e0c068" opacity={0.7} />
      <path d={line(IP, [[73.4, 19.5], [74.8, 14], [76.5, 9.8]])} fill="none" stroke="#8d6e63" strokeWidth={9} opacity={0.7} strokeLinecap="round" />
      <ellipse cx={IP(92.5, 25.5)[0]} cy={IP(92.5, 25.5)[1]} rx={22} ry={14} fill="#8d6e63" opacity={0.65} />
      <Legend x={30} y={IP(78, 13)[1]} items={[
        { c: '#c9a227', b: T('Alluvial — plains, most fertile', 'जलोढ़ — मैदान, सर्वाधिक उपजाऊ') },
        { c: '#37474f', b: T('Black (Regur) — cotton', 'काली (रेगुर) — कपास') },
        { c: '#b23a2c', b: T('Red & Yellow', 'लाल व पीली') },
        { c: '#8d6e63', b: T('Laterite — W. Ghats, NE', 'लैटेराइट — प. घाट, पूर्वोत्तर') },
        { c: '#e0c068', b: T('Arid / Desert', 'शुष्क / मरुस्थलीय') },
      ]} />
    </>
  );
}

/* ============================== INDIA — CROPS ============================= */

function IndiaCrops() {
  return (
    <>
      {styleTag}
      <IndiaBase flat />
      <path d={line(IP, [[74.8, 30.9], [76.8, 29.4], [79, 27.8], [81, 26.8]])} fill="none" stroke="#f9a825" strokeWidth={18} strokeLinecap="round" opacity={0.65} />
      <L b={T('Wheat', 'गेहूँ')} x={IP(77.3, 29.6)[0]} y={IP(77.3, 29.6)[1]} className="ml-rg" fill="#8d6b00" textAnchor="middle" />
      <ellipse cx={IP(87, 24.5)[0]} cy={IP(87, 24.5)[1]} rx={38} ry={26} fill="#43a047" opacity={0.55} />
      <ellipse cx={IP(80.5, 16.5)[0]} cy={IP(80.5, 16.5)[1]} rx={22} ry={26} fill="#43a047" opacity={0.55} />
      <ellipse cx={IP(78.8, 10.8)[0]} cy={IP(78.8, 10.8)[1]} rx={26} ry={20} fill="#43a047" opacity={0.55} />
      <L b={T('Rice', 'चावल')} x={IP(87, 24.5)[0]} y={IP(87, 24.5)[1]} className="ml-rg" fill="#1b5e20" textAnchor="middle" />
      <ellipse cx={IP(75.3, 19.8)[0]} cy={IP(75.3, 19.8)[1]} rx={40} ry={30} fill="#eceff1" opacity={0.75} />
      <L b={T('Cotton', 'कपास')} x={IP(75.3, 19.8)[0]} y={IP(75.3, 19.8)[1]} className="ml-rg" fill="#455a64" textAnchor="middle" />
      <ellipse cx={IP(79.5, 27.3)[0]} cy={IP(79.5, 27.3)[1]} rx={30} ry={14} fill="#c0ca33" opacity={0.7} />
      <L b={T('Sugarcane (UP)', 'गन्ना (उ.प्र.)')} x={IP(79.5, 27.9)[0]} y={IP(79.5, 27.9)[1]} className="ml-sm" textAnchor="middle" />
      <ellipse cx={IP(94, 26.8)[0]} cy={IP(94, 26.8)[1]} rx={24} ry={12} fill="#2e7d32" opacity={0.7} />
      <L b={T('Tea (Assam)', 'चाय (असम)')} x={IP(94, 27.6)[0]} y={IP(94, 27.6)[1]} className="ml-sm" textAnchor="middle" />
      <ellipse cx={IP(75.7, 13.2)[0]} cy={IP(75.7, 13.2)[1]} rx={14} ry={18} fill="#4e342e" opacity={0.65} />
      <L b={T('Coffee (Karnataka)', 'कॉफ़ी (कर्नाटक)')} x={IP(74, 12.2)[0]} y={IP(74, 12.2)[1]} className="ml-sm" textAnchor="end" />
      <ellipse cx={IP(88.4, 24.8)[0]} cy={IP(88.4, 24.8)[1]} rx={12} ry={16} fill="#827717" opacity={0.7} />
      <L b={T('Jute (WB)', 'जूट (प.बं.)')} x={IP(89.2, 24.2)[0]} y={IP(89.2, 24.2)[1]} className="ml-sm" />
    </>
  );
}

/* ============================ INDIA — MINERALS ============================ */

const MINERALS: { n: Bilingual; lon: number; lat: number; c: string }[] = [
  { n: T('Jharia (coal)', 'झरिया (कोयला)'), lon: 86.4, lat: 23.75, c: '#263238' },
  { n: T('Korba (coal)', 'कोरबा (कोयला)'), lon: 82.7, lat: 22.35, c: '#263238' },
  { n: T('Talcher (coal)', 'तालचेर (कोयला)'), lon: 85.2, lat: 20.95, c: '#263238' },
  { n: T('Singrauli (coal)', 'सिंगरौली (कोयला)'), lon: 82.7, lat: 24.2, c: '#263238' },
  { n: T('Bailadila (iron)', 'बैलाडीला (लोहा)'), lon: 81.2, lat: 18.7, c: '#8d6e63' },
  { n: T('Keonjhar (iron)', 'क्योंझर (लोहा)'), lon: 85.6, lat: 21.6, c: '#8d6e63' },
  { n: T('Ballari (iron)', 'बल्लारी (लोहा)'), lon: 76.9, lat: 15.1, c: '#8d6e63' },
  { n: T('Koraput (bauxite)', 'कोरापुट (बॉक्साइट)'), lon: 82.7, lat: 18.8, c: '#b23a2c' },
  { n: T('Koderma (mica)', 'कोडरमा (अभ्रक)'), lon: 85.6, lat: 24.47, c: '#7e57c2' },
  { n: T('Balaghat (manganese)', 'बालाघाट (मैंगनीज़)'), lon: 80.2, lat: 21.8, c: '#5d4037' },
  { n: T('Khetri (copper)', 'खेतड़ी (ताँबा)'), lon: 75.8, lat: 28, c: '#e65100' },
  { n: T('Kolar (gold)', 'कोलार (सोना)'), lon: 78.3, lat: 13.1, c: '#f9a825' },
  { n: T('Digboi (oil)', 'डिगबोई (तेल)'), lon: 95.6, lat: 27.4, c: '#37474f' },
  { n: T('Mumbai High (oil)', 'मुंबई हाई (तेल)'), lon: 71.4, lat: 19.3, c: '#37474f' },
];

function IndiaMinerals() {
  return (
    <>
      {styleTag}
      <IndiaBase flat />
      <ellipse cx={IP(85.6, 22.8)[0]} cy={IP(85.6, 22.8)[1]} rx={52} ry={40} fill="#455a64" opacity={0.3} />
      <L b={T('Chhota Nagpur — mineral heartland', 'छोटा नागपुर — खनिज हृदयस्थल')} x={IP(85.6, 25.4)[0]} y={IP(85.6, 25.4)[1]} className="ml-rg" fill="#37474f" textAnchor="middle" fontSize={10} />
      {MINERALS.map((m, i) => (
        <Dot key={i} at={IP(m.lon, m.lat)} n={m.n} c={m.c} r={4.5} />
      ))}
      <Legend x={30} y={IP(78, 15)[1]} items={[
        { c: '#263238', b: T('Coal', 'कोयला'), shape: 'dot' },
        { c: '#8d6e63', b: T('Iron ore', 'लौह अयस्क'), shape: 'dot' },
        { c: '#b23a2c', b: T('Bauxite', 'बॉक्साइट'), shape: 'dot' },
        { c: '#7e57c2', b: T('Mica', 'अभ्रक'), shape: 'dot' },
        { c: '#e65100', b: T('Copper', 'ताँबा'), shape: 'dot' },
        { c: '#f9a825', b: T('Gold', 'सोना'), shape: 'dot' },
        { c: '#37474f', b: T('Petroleum', 'पेट्रोलियम'), shape: 'dot' },
      ]} />
    </>
  );
}

/* ======================== INDIA — PARKS & HERITAGE ======================== */

const PARKS: { n: Bilingual; lon: number; lat: number }[] = [
  { n: T('Valmiki NP (Bihar)', 'वाल्मीकि रा.उ. (बिहार)'), lon: 84.1, lat: 27.3 },
  { n: T('Jim Corbett', 'जिम कॉर्बेट'), lon: 78.9, lat: 29.5 },
  { n: T('Kaziranga', 'काज़ीरंगा'), lon: 93.4, lat: 26.6 },
  { n: T('Manas', 'मानस'), lon: 90.9, lat: 26.7 },
  { n: T('Sundarbans', 'सुंदरबन'), lon: 88.8, lat: 21.9 },
  { n: T('Simlipal', 'सिमलीपाल'), lon: 86.3, lat: 21.8 },
  { n: T('Kanha', 'कान्हा'), lon: 80.6, lat: 22.3 },
  { n: T('Bandhavgarh', 'बांधवगढ़'), lon: 81, lat: 23.7 },
  { n: T('Ranthambore', 'रणथंभौर'), lon: 76.4, lat: 26 },
  { n: T('Gir (lions)', 'गिर (सिंह)'), lon: 70.8, lat: 21.1 },
  { n: T('Tadoba', 'ताडोबा'), lon: 79.4, lat: 20.2 },
  { n: T('Bandipur', 'बांदीपुर'), lon: 76.6, lat: 11.7 },
  { n: T('Periyar', 'पेरियार'), lon: 77.2, lat: 9.5 },
];

function IndiaParks() {
  return (
    <>
      {styleTag}
      <IndiaBase flat />
      {PARKS.map((p, i) => (
        <Dot key={i} at={IP(p.lon, p.lat)} n={p.n} c="var(--green)" r={4.5} />
      ))}
      <L b={T('Major National Parks & Tiger Reserves', 'प्रमुख राष्ट्रीय उद्यान व बाघ अभयारण्य')} x={320} y={18} textAnchor="middle" className="ml-title" fontSize={12} />
    </>
  );
}

/* ============================ BIHAR — DISTRICTS =========================== */

function BiharDistrictsMap() {
  return (
    <>
      {styleTag}
      {BIHAR_DISTRICTS.map((s) => {
        const [cx, cy] = bboxCenter(s.d);
        const isPatna = s.n === 'Patna';
        return (
          <g key={s.n}>
            <path d={s.d} className="dt" style={isPatna ? { fill: 'var(--green-soft)', stroke: 'var(--green)', strokeWidth: 1.2 } : undefined}>
              <title>{s.n}</title>
            </path>
            <text x={cx} y={cy} textAnchor="middle" className="ml-st" fontSize={8.5} pointerEvents="none">
              {s.n}
            </text>
          </g>
        );
      })}
      <path className="riv" d={line(BP, [[83.6, 25.75], [84.6, 25.68], [85.14, 25.6], [86.2, 25.5], [87.1, 25.35], [87.95, 25.2]])} strokeWidth={4} opacity={0.8} />
      <L b={T('Ganga →', 'गंगा →')} x={BP(84.2, 25.5)[0]} y={BP(84.2, 25.5)[1]} className="ml-riv" />
      <L b={T('All 38 districts — hover/tap for names', 'सभी 38 जिले — नाम के लिए होवर/टैप करें')} x={320} y={16} textAnchor="middle" className="ml-title" fontSize={12} />
    </>
  );
}

/* ============================ BIHAR — PHYSICAL ============================ */

function BiharPhysical() {
  return (
    <>
      {styleTag}
      <BiharBase flat />
      <path className="riv" d={line(BP, [[83.6, 25.75], [84.6, 25.68], [85.14, 25.6], [86.2, 25.5], [87.1, 25.35], [87.95, 25.2]])} strokeWidth={6} />
      <L b={T('GANGA', 'गंगा')} x={BP(85.6, 25.72)[0]} y={BP(85.6, 25.72)[1]} className="ml-riv" fontSize={12} />
      <path d={line(BP, [[84.2, 26.8], [85.5, 26.5], [86.8, 26.3], [87.7, 26.2]])} fill="none" stroke="#c9a227" strokeWidth={30} strokeLinecap="round" opacity={0.4} />
      <L b={T('North Bihar Plain — flood-prone (Kosi, Gandak)', 'उत्तर बिहार मैदान — बाढ़ग्रस्त (कोसी, गंडक)')} x={BP(85.9, 26.5)[0]} y={BP(85.9, 26.5)[1]} className="ml-rg" fill="#8d6b00" textAnchor="middle" fontSize={10} />
      <path d={line(BP, [[84.3, 25.1], [85.5, 25], [86.8, 25]])} fill="none" stroke="#a1887f" strokeWidth={26} strokeLinecap="round" opacity={0.45} />
      <L b={T('South Bihar Plain', 'दक्षिण बिहार मैदान')} x={BP(85.5, 25.02)[0]} y={BP(85.5, 25.02)[1]} className="ml-rg" fill="#5d4037" textAnchor="middle" fontSize={10} />
      <ellipse cx={BP(83.9, 24.7)[0]} cy={BP(83.9, 24.7)[1]} rx={26} ry={18} fill="#6d4c41" opacity={0.55} />
      <L b={T('Kaimur Plateau', 'कैमूर पठार')} x={BP(83.9, 24.5)[0]} y={BP(83.9, 24.5)[1]} className="ml-sm" textAnchor="middle" />
      <ellipse cx={BP(85.45, 25.02)[0]} cy={BP(85.45, 25.02)[1]} rx={12} ry={8} fill="#6d4c41" opacity={0.55} />
      <L b={T('Rajgir hills', 'राजगीर पहाड़ियाँ')} x={BP(85.45, 24.88)[0]} y={BP(85.45, 24.88)[1]} className="ml-sm" textAnchor="middle" />
      <Dot at={BP(84.05, 27.33)} n={T('Someshwar hills (Himalayan fringe)', 'सोमेश्वर पहाड़ियाँ (हिमालयी सीमा)')} c="#6d4c41" r={4} />
    </>
  );
}

/* ============================= BIHAR — RIVERS ============================= */

const BIHAR_RIVERS: { n: Bilingual; w: number; pts: [number, number][]; lbl: [number, number] }[] = [
  { n: T('Ganga', 'गंगा'), w: 6, pts: [[83.6, 25.75], [84.6, 25.68], [85.14, 25.6], [86.2, 25.5], [87.1, 25.35], [87.95, 25.2]], lbl: [84.5, 25.45] },
  { n: T('Ghaghara', 'घाघरा'), w: 3, pts: [[84, 26.9], [84.1, 26.2], [84.35, 25.72]], lbl: [83.85, 26.45] },
  { n: T('Gandak', 'गंडक'), w: 3.5, pts: [[83.9, 27.5], [84.4, 26.7], [85, 26.1], [85.2, 25.68]], lbl: [84.5, 26.85] },
  { n: T('Burhi Gandak', 'बूढ़ी गंडक'), w: 2.5, pts: [[84.5, 27.1], [85.2, 26.4], [85.9, 25.9], [86.35, 25.52]], lbl: [85.6, 26.35] },
  { n: T('Bagmati', 'बागमती'), w: 2.5, pts: [[85.4, 26.9], [85.7, 26.3], [86.2, 25.85], [86.5, 25.55]], lbl: [85.85, 26.55] },
  { n: T('Kosi — "Sorrow of Bihar"', 'कोसी — "बिहार का शोक"'), w: 4, pts: [[87, 26.9], [86.9, 26.3], [86.7, 25.8], [86.55, 25.45]], lbl: [87.15, 26.45] },
  { n: T('Mahananda', 'महानंदा'), w: 2.5, pts: [[88, 26.4], [87.9, 25.8], [87.75, 25.3]], lbl: [88.05, 25.95] },
  { n: T('Son', 'सोन'), w: 3.5, pts: [[83.9, 24.5], [84.4, 25], [84.8, 25.4], [84.95, 25.62]], lbl: [84.25, 24.85] },
  { n: T('Punpun', 'पुनपुन'), w: 2, pts: [[84.9, 24.75], [85.1, 25.15], [85.35, 25.55]], lbl: [85.25, 25] },
  { n: T('Falgu', 'फल्गु'), w: 2, pts: [[85, 24.55], [85.1, 24.95], [85.25, 25.3]], lbl: [85.4, 24.75] },
];

function BiharRiversMap() {
  return (
    <>
      {styleTag}
      <BiharBase flat />
      {BIHAR_RIVERS.map((r, i) => (
        <path key={i} className="riv" d={line(BP, r.pts)} strokeWidth={r.w} />
      ))}
      {BIHAR_RIVERS.map((r, i) => {
        const [x, y] = BP(r.lbl[0], r.lbl[1]);
        return <L key={i} b={r.n} x={x} y={y} className="ml-riv" textAnchor="middle" />;
      })}
      <Dot at={BP(85.14, 25.6)} n={T('Patna', 'पटना')} c="var(--red)" r={4} />
      <L b={T('North tributaries (Himalayan) join Ganga from above; south (plateau) from below', 'उत्तरी (हिमालयी) सहायक ऊपर से, दक्षिणी (पठारी) नीचे से गंगा में मिलती हैं')} x={320} y={16} textAnchor="middle" className="ml-title" fontSize={10.5} />
    </>
  );
}

/* ========================== BIHAR — PARKS & SITES ========================= */

const BIHAR_SITES: { n: Bilingual; lon: number; lat: number; c: string }[] = [
  { n: T('Valmiki NP & Tiger Reserve', 'वाल्मीकि रा.उ. व बाघ अभयारण्य'), lon: 84.1, lat: 27.3, c: 'var(--green)' },
  { n: T('Kanwar Lake (bird sanctuary)', 'काँवर झील (पक्षी विहार)'), lon: 86.12, lat: 25.62, c: 'var(--green)' },
  { n: T('Vikramshila Dolphin Sanctuary', 'विक्रमशिला डॉल्फ़िन अभयारण्य'), lon: 87.05, lat: 25.3, c: '#1f6fb2' },
  { n: T('Bhimbandh WLS', 'भीमबांध अभयारण्य'), lon: 86.4, lat: 25.05, c: 'var(--green)' },
  { n: T('Kaimur WLS', 'कैमूर अभयारण्य'), lon: 83.6, lat: 24.95, c: 'var(--green)' },
  { n: T('Gautam Buddha WLS (Gaya)', 'गौतम बुद्ध अभयारण्य (गया)'), lon: 85.1, lat: 24.6, c: 'var(--green)' },
  { n: T('Nalanda (UNESCO)', 'नालंदा (यूनेस्को)'), lon: 85.44, lat: 25.14, c: 'var(--accent)' },
  { n: T('Mahabodhi Temple, Bodh Gaya (UNESCO)', 'महाबोधि मंदिर, बोधगया (यूनेस्को)'), lon: 84.99, lat: 24.7, c: 'var(--accent)' },
  { n: T('Vaishali (first republic)', 'वैशाली (प्रथम गणराज्य)'), lon: 85.1, lat: 25.98, c: 'var(--accent)' },
  { n: T('Rajgir', 'राजगीर'), lon: 85.42, lat: 25.03, c: 'var(--accent)' },
];

function BiharParks() {
  return (
    <>
      {styleTag}
      <BiharBase flat />
      {BIHAR_SITES.map((p, i) => (
        <Dot key={i} at={BP(p.lon, p.lat)} n={p.n} c={p.c} r={4.5} />
      ))}
      <Legend x={40} y={BP(87.4, 24.7)[1]} w={200} items={[
        { c: 'var(--green)', b: T('Protected areas', 'संरक्षित क्षेत्र'), shape: 'dot' },
        { c: 'var(--accent)', b: T('Heritage sites', 'धरोहर स्थल'), shape: 'dot' },
        { c: '#1f6fb2', b: T('Aquatic sanctuary', 'जलीय अभयारण्य'), shape: 'dot' },
      ]} />
    </>
  );
}

export interface ExamMap {
  id: string;
  title: Bilingual;
  group: 'india' | 'bihar';
  viewBox: string;
  Comp: () => ReactNode;
  /** Exam-point-of-view notes shown beside the map. */
  insights: Bilingual[];
}

export const EXAM_MAPS: ExamMap[] = [
  {
    id: 'india-political', title: T('India — Political', 'भारत — राजनीतिक'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaPolitical,
    insights: [
      T('India has 28 states and 8 union territories; J&K and Ladakh became UTs in 2019 (J&K Reorganisation Act).', 'भारत में 28 राज्य व 8 केंद्रशासित प्रदेश हैं; 2019 में ज.-क. व लद्दाख UT बने (ज.-क. पुनर्गठन अधिनियम)।'),
      T('Bihar shares an international border only with Nepal (7 districts touch it — W. Champaran to Kishanganj).', 'बिहार की अंतरराष्ट्रीय सीमा केवल नेपाल से लगती है (प. चंपारण से किशनगंज तक 7 जिले)।'),
      T('Bihar borders 3 states: UP (west), Jharkhand (south), West Bengal (east).', 'बिहार 3 राज्यों से घिरा है: उ.प्र. (पश्चिम), झारखंड (दक्षिण), प. बंगाल (पूर्व)।'),
      T('Largest state by area: Rajasthan; by population: Uttar Pradesh. Bihar is 12th by area, 3rd by population.', 'क्षेत्रफल में सबसे बड़ा: राजस्थान; जनसंख्या में: उत्तर प्रदेश। बिहार क्षेत्रफल में 12वाँ, जनसंख्या में तीसरा।'),
      T('The Tropic of Cancer (23.5°N) passes through 8 states — Gujarat to Mizoram; NOT through Bihar.', 'कर्क रेखा (23.5°N) 8 राज्यों से गुज़रती है — गुजरात से मिज़ोरम; बिहार से नहीं।'),
    ],
  },
  {
    id: 'india-physical', title: T('India — Physical', 'भारत — भौतिक'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaPhysical,
    insights: [
      T('Physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Thar Desert, Coastal Plains, Islands.', 'भौतिक विभाग: हिमालय, उत्तरी मैदान, प्रायद्वीपीय पठार, थार मरुस्थल, तटीय मैदान, द्वीप समूह।'),
      T('Himalayas run ~2,400 km from Indus gorge (west) to Brahmaputra gorge (east); highest peak in India: Kangchenjunga (Sikkim).', 'हिमालय सिंधु गॉर्ज से ब्रह्मपुत्र गॉर्ज तक ~2,400 किमी; भारत की सर्वोच्च चोटी: कंचनजंगा (सिक्किम)।'),
      T('Aravalli is the oldest fold mountain range in India; Western Ghats are continuous, Eastern Ghats broken.', 'अरावली भारत की सबसे पुरानी वलित पर्वतमाला है; पश्चिमी घाट सतत हैं, पूर्वी घाट खंडित।'),
      T('Bihar lies almost entirely in the fertile Gangetic plain — no coastline, no major mountains (Kaimur plateau in SW).', 'बिहार लगभग पूरा उपजाऊ गंगा मैदान में है — न समुद्र तट, न बड़े पर्वत (द.-प. में कैमूर पठार)।'),
      T('Highest point of Bihar: Someshwar Peak (~880 m) in West Champaran on the Nepal border.', 'बिहार का उच्चतम बिंदु: सोमेश्वर शिखर (~880 मी.), प. चंपारण, नेपाल सीमा पर।'),
    ],
  },
  {
    id: 'india-rivers', title: T('India — Rivers', 'भारत — नदियाँ'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaRivers,
    insights: [
      T('Ganga (2,525 km) is India\'s longest river; originates as Bhagirathi from Gangotri glacier; enters Bihar at Chausa (Buxar).', 'गंगा (2,525 किमी) भारत की सबसे लंबी नदी; गंगोत्री हिमनद से भागीरथी रूप में; बिहार में चौसा (बक्सर) से प्रवेश।'),
      T('Himalayan rivers (Ganga, Brahmaputra, Indus) are perennial; peninsular rivers are rain-fed and seasonal.', 'हिमालयी नदियाँ (गंगा, ब्रह्मपुत्र, सिंधु) सदावाहिनी हैं; प्रायद्वीपीय नदियाँ वर्षा-आधारित व मौसमी।'),
      T('West-flowing rivers Narmada & Tapi form estuaries, not deltas; Godavari is the largest peninsular river ("Dakshin Ganga").', 'पश्चिम-वाहिनी नर्मदा व तापी ज्वारनदमुख बनाती हैं, डेल्टा नहीं; गोदावरी सबसे बड़ी प्रायद्वीपीय नदी ("दक्षिण गंगा")।'),
      T('Prayagraj Sangam: confluence of Ganga, Yamuna and mythical Saraswati; Farakka Barrage (WB) diverts Ganga water to the Hooghly.', 'प्रयागराज संगम: गंगा-यमुना-पौराणिक सरस्वती का मिलन; फरक्का बैराज (प.बं.) गंगा जल हुगली में मोड़ता है।'),
      T('Kosi is called "Sorrow of Bihar" for its shifting course and floods; it joins the Ganga near Kursela (Katihar).', 'कोसी अपना मार्ग बदलने व बाढ़ के कारण "बिहार का शोक" कहलाती है; कुरसेला (कटिहार) के पास गंगा में मिलती है।'),
    ],
  },
  {
    id: 'india-soil', title: T('India — Soils', 'भारत — मृदा'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaSoil,
    insights: [
      T('Alluvial soil covers ~40% of India — the entire Bihar plain is alluvial (khadar = new, bangar = old).', 'जलोढ़ मृदा भारत के ~40% भाग पर — पूरा बिहार मैदान जलोढ़ है (खादर = नई, बांगर = पुरानी)।'),
      T('Black (Regur) soil: from Deccan lava, moisture-retentive, best for cotton — Maharashtra, MP, Gujarat.', 'काली (रेगुर) मृदा: दक्कन लावा से, नमी धारण करती है, कपास हेतु सर्वोत्तम — महाराष्ट्र, म.प्र., गुजरात।'),
      T('Red soil gets colour from iron oxide; poor in nitrogen, phosphorus and humus.', 'लाल मृदा का रंग आयरन ऑक्साइड से; नाइट्रोजन, फॉस्फोरस व ह्यूमस की कमी।'),
      T('Laterite soil forms under high temperature + heavy rain with leaching — good for tea, coffee, cashew.', 'लैटेराइट मृदा उच्च ताप व भारी वर्षा में निक्षालन से बनती है — चाय, कॉफ़ी, काजू हेतु उपयुक्त।'),
      T('North Bihar has calcareous soil in parts; Tal & Diara lands along the Ganga are flood-formed features (asked in BPSC).', 'उत्तर बिहार में कहीं-कहीं चूनायुक्त मृदा; गंगा किनारे ताल व दियारा भूमि बाढ़-निर्मित हैं (BPSC में पूछा गया)।'),
    ],
  },
  {
    id: 'india-crops', title: T('India — Crops', 'भारत — फसलें'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaCrops,
    insights: [
      T('Rice needs >100 cm rain & 25°C; wheat needs cool winters — hence rice in east/south, wheat in northwest.', 'चावल को >100 सेमी वर्षा व 25°C चाहिए; गेहूँ को ठंडी सर्दी — इसलिए चावल पूर्व/दक्षिण में, गेहूँ उत्तर-पश्चिम में।'),
      T('Bihar\'s top crops: rice, wheat, maize (India\'s leading maize state), pulses; famous for litchi (Muzaffarpur) & makhana (Mithila — GI tag).', 'बिहार की मुख्य फसलें: चावल, गेहूँ, मक्का (मक्का में अग्रणी राज्य), दलहन; लीची (मुज़फ़्फ़रपुर) व मखाना (मिथिला — GI टैग) प्रसिद्ध।'),
      T('Kharif = monsoon sowing (rice, maize, cotton); Rabi = winter sowing (wheat, gram, mustard); Zaid = summer.', 'ख़रीफ़ = मानसून बुवाई (चावल, मक्का, कपास); रबी = शीत बुवाई (गेहूँ, चना, सरसों); ज़ायद = ग्रीष्म।'),
      T('India is #1 producer of milk, pulses, jute & makhana; #2 in rice, wheat, sugarcane, cotton.', 'भारत दूध, दलहन, जूट व मखाना में प्रथम; चावल, गेहूँ, गन्ना, कपास में द्वितीय।'),
    ],
  },
  {
    id: 'india-minerals', title: T('India — Minerals', 'भारत — खनिज'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaMinerals,
    insights: [
      T('The Chhota Nagpur plateau (Jharkhand-Odisha-WB-Chhattisgarh) holds most of India\'s coal, iron and mica.', 'छोटा नागपुर पठार (झारखंड-ओडिशा-प.बं.-छत्तीसगढ़) में भारत का अधिकांश कोयला, लोहा व अभ्रक।'),
      T('After the 2000 bifurcation, most minerals went to Jharkhand — Bihar retains limestone, mica (some), quartzite & pyrite.', '2000 के विभाजन के बाद अधिकांश खनिज झारखंड में गए — बिहार में चूना पत्थर, कुछ अभ्रक, क्वार्टज़ाइट व पाइराइट बचे।'),
      T('Jharia (Jharkhand) = coking coal; Digboi (Assam) = oldest oil refinery; Mumbai High = offshore oilfield.', 'झरिया (झारखंड) = कोकिंग कोयला; डिगबोई (असम) = सबसे पुरानी तेल रिफ़ाइनरी; मुंबई हाई = अपतटीय तेल क्षेत्र।'),
      T('Kolar (Karnataka) — gold; Khetri (Rajasthan) — copper; Balaghat (MP) — manganese; Koderma — mica capital.', 'कोलार (कर्नाटक) — सोना; खेतड़ी (राजस्थान) — ताँबा; बालाघाट (म.प्र.) — मैंगनीज़; कोडरमा — अभ्रक राजधानी।'),
    ],
  },
  {
    id: 'india-parks', title: T('India — National Parks', 'भारत — राष्ट्रीय उद्यान'), group: 'india', viewBox: INDIA_STATES_VIEWBOX, Comp: IndiaParks,
    insights: [
      T('Valmiki National Park (W. Champaran) is Bihar\'s only National Park and Tiger Reserve.', 'वाल्मीकि राष्ट्रीय उद्यान (प. चंपारण) बिहार का एकमात्र राष्ट्रीय उद्यान व बाघ अभयारण्य है।'),
      T('Kaziranga — one-horned rhino; Gir — Asiatic lion; Sundarbans — largest mangrove delta & Royal Bengal tiger.', 'काज़ीरंगा — एक सींग वाला गैंडा; गिर — एशियाई सिंह; सुंदरबन — सबसे बड़ा मैंग्रोव डेल्टा व रॉयल बंगाल टाइगर।'),
      T('Jim Corbett (1936) is India\'s oldest national park and where Project Tiger began (1973).', 'जिम कॉर्बेट (1936) भारत का सबसे पुराना राष्ट्रीय उद्यान; यहीं से प्रोजेक्ट टाइगर (1973) शुरू हुआ।'),
      T('Kanha inspired "The Jungle Book"; Periyar is famous for elephants; Ranthambore for tigers in Rajasthan.', 'कान्हा "जंगल बुक" की प्रेरणा; पेरियार हाथियों हेतु; रणथंभौर राजस्थान में बाघों हेतु प्रसिद्ध।'),
    ],
  },
  {
    id: 'bihar-districts', title: T('Bihar — Districts', 'बिहार — जिले'), group: 'bihar', viewBox: BIHAR_DISTRICTS_VIEWBOX, Comp: BiharDistrictsMap,
    insights: [
      T('Bihar has 38 districts, 9 divisions, 101 subdivisions. Largest district by area: West Champaran; smallest: Sheohar.', 'बिहार में 38 जिले, 9 प्रमंडल, 101 अनुमंडल। क्षेत्रफल में सबसे बड़ा: प. चंपारण; सबसे छोटा: शिवहर।'),
      T('Most populous district: Patna; highest population density: Sheohar; highest literacy: Rohtas.', 'सर्वाधिक जनसंख्या: पटना; सर्वाधिक घनत्व: शिवहर; सर्वाधिक साक्षरता: रोहतास।'),
      T('7 districts touch Nepal: W. Champaran, E. Champaran, Sitamarhi, Madhubani, Supaul, Araria, Kishanganj.', 'नेपाल से लगे 7 जिले: प. चंपारण, पू. चंपारण, सीतामढ़ी, मधुबनी, सुपौल, अररिया, किशनगंज।'),
      T('Kishanganj is Bihar\'s only district receiving very high rainfall (>200 cm) and touches the "Chicken\'s Neck" corridor.', 'किशनगंज बिहार का एकमात्र अति-वर्षा (>200 सेमी) जिला है और "चिकन नेक" गलियारे से सटा है।'),
    ],
  },
  {
    id: 'bihar-physical', title: T('Bihar — Physical', 'बिहार — भौतिक'), group: 'bihar', viewBox: BIHAR_DISTRICTS_VIEWBOX, Comp: BiharPhysical,
    insights: [
      T('The Ganga divides Bihar into the flood-prone North Bihar Plain and the relatively higher South Bihar Plain.', 'गंगा बिहार को बाढ़ग्रस्त उत्तर बिहार मैदान और अपेक्षाकृत ऊँचे दक्षिण बिहार मैदान में बाँटती है।'),
      T('Bihar area: 94,163 km² (12th in India); ~88% population is rural; no coastline.', 'बिहार क्षेत्रफल: 94,163 वर्ग किमी (भारत में 12वाँ); ~88% जनसंख्या ग्रामीण; समुद्र तट नहीं।'),
      T('Kaimur plateau (SW) is Bihar\'s only plateau region — sandstone with limestone; Rajgir hills are in Nalanda.', 'कैमूर पठार (द.-प.) बिहार का एकमात्र पठारी क्षेत्र — बलुआ पत्थर व चूना पत्थर; राजगीर पहाड़ियाँ नालंदा में।'),
      T('Climate: humid subtropical (Cwa); average rainfall ~1,200 mm, increasing west to east.', 'जलवायु: आर्द्र उपोष्ण (Cwa); औसत वर्षा ~1,200 मिमी, पश्चिम से पूर्व बढ़ती है।'),
    ],
  },
  {
    id: 'bihar-rivers', title: T('Bihar — Rivers', 'बिहार — नदियाँ'), group: 'bihar', viewBox: BIHAR_DISTRICTS_VIEWBOX, Comp: BiharRiversMap,
    insights: [
      T('North (Himalayan) tributaries — Ghaghara, Gandak, Burhi Gandak, Bagmati, Kamla, Kosi, Mahananda — cause the annual floods.', 'उत्तरी (हिमालयी) सहायक — घाघरा, गंडक, बूढ़ी गंडक, बागमती, कमला, कोसी, महानंदा — वार्षिक बाढ़ लाती हैं।'),
      T('South (plateau) tributaries — Son, Punpun, Falgu, Kiul — are seasonal; Son is the largest south-bank tributary.', 'दक्षिणी (पठारी) सहायक — सोन, पुनपुन, फल्गु, किउल — मौसमी; सोन सबसे बड़ी दक्षिणी सहायक है।'),
      T('Kosi Barrage (Bhimnagar, on India–Nepal border) built 1963; Gandak joins the Ganga at Hajipur/Sonpur.', 'कोसी बैराज (भीमनगर, भारत-नेपाल सीमा) 1963 में बना; गंडक हाजीपुर/सोनपुर के पास गंगा में मिलती है।'),
      T('Falgu at Gaya is famous for Pind-daan; the Ganga flows ~445 km through Bihar.', 'गया में फल्गु पिंडदान हेतु प्रसिद्ध; गंगा बिहार में ~445 किमी बहती है।'),
    ],
  },
  {
    id: 'bihar-parks', title: T('Bihar — Parks & Heritage', 'बिहार — उद्यान व धरोहर'), group: 'bihar', viewBox: BIHAR_DISTRICTS_VIEWBOX, Comp: BiharParks,
    insights: [
      T('Valmiki Tiger Reserve is Bihar\'s only tiger reserve (18th in India); tiger count rose to ~54 (2023).', 'वाल्मीकि बाघ अभयारण्य बिहार का एकमात्र बाघ अभयारण्य (भारत में 18वाँ); बाघ ~54 (2023)।'),
      T('Vikramshila Gangetic Dolphin Sanctuary (Bhagalpur) is India\'s ONLY dolphin sanctuary; Gangetic dolphin = national aquatic animal.', 'विक्रमशिला गंगा डॉल्फ़िन अभयारण्य (भागलपुर) भारत का एकमात्र डॉल्फ़िन अभयारण्य; गंगा डॉल्फ़िन = राष्ट्रीय जलीय जीव।'),
      T('UNESCO sites in Bihar: Mahabodhi Temple (2002) and Nalanda Mahavihara ruins (2016).', 'बिहार में यूनेस्को स्थल: महाबोधि मंदिर (2002) व नालंदा महाविहार अवशेष (2016)।'),
      T('Kanwar Lake (Begusarai) is Asia\'s largest freshwater oxbow lake — Bihar\'s first Ramsar site (2020).', 'काँवर झील (बेगूसराय) एशिया की सबसे बड़ी गोखुर झील — बिहार का पहला रामसर स्थल (2020)।'),
    ],
  },
];
