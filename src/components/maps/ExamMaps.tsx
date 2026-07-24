import { type ReactNode } from 'react';
import { useLang, type Bilingual } from '../../lib/i18n';

/**
 * Exam-oriented maps as inline SVG (offline + CSP safe). These are schematic
 * study maps: outlines and relative positions are approximate but the labels,
 * groupings and legends are what students memorise for BPSC/UPSC GK. The
 * MapViewer wrapper makes them zoomable/pannable so labels stay readable.
 */

const T = (en: string, hi: string): Bilingual => ({ en, hi });

function L({ b, ...rest }: { b: Bilingual } & React.SVGProps<SVGTextElement>) {
  const { tb } = useLang();
  return <text {...rest}>{tb(b)}</text>;
}

// Simplified but recognisable India silhouette (viewBox 0 0 720 820).
const INDIA =
  'M300 50 L344 74 L384 120 L436 152 L500 190 L542 232 L560 300 L620 292 ' +
  'L666 302 L650 342 L602 342 L616 392 L576 432 L558 402 L520 412 L500 472 ' +
  'L470 540 L432 620 L410 682 L360 760 L316 806 L286 760 L270 690 L250 600 ' +
  'L210 520 L180 432 L150 402 L110 392 L95 360 L140 340 L150 300 L120 262 ' +
  'L160 222 L212 152 L252 92 Z';

// Simplified Bihar outline (viewBox 0 0 600 380).
const BIHAR =
  'M120 60 L200 48 L280 54 L342 70 L392 58 L436 92 L462 112 L440 152 L472 182 ' +
  'L450 224 L400 244 L330 252 L260 242 L200 252 L150 232 L128 190 L108 140 Z';

function IndiaBase({ fill = 'var(--surface-2)' }: { fill?: string }) {
  return <path d={INDIA} fill={fill} stroke="var(--text-dim)" strokeWidth={2} />;
}
function BiharBase({ fill = 'var(--surface-2)' }: { fill?: string }) {
  return <path d={BIHAR} fill={fill} stroke="var(--text-dim)" strokeWidth={2} />;
}

function Legend({ x, y, items }: { x: number; y: number; items: { c: string; b: Bilingual }[] }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-8} y={-16} width={172} height={items.length * 20 + 14} rx={8} fill="var(--surface)" stroke="var(--border)" opacity={0.96} />
      {items.map((it, i) => (
        <g key={i} transform={`translate(0 ${i * 20})`}>
          <rect x={0} y={-8} width={14} height={14} rx={3} fill={it.c} stroke="var(--text-dim)" strokeWidth={0.5} />
          <L b={it.b} x={20} y={3} className="ml-lg" />
        </g>
      ))}
    </g>
  );
}

function Dot({ x, y, n, sub, c = 'var(--accent)' }: { x: number; y: number; n: Bilingual; sub?: Bilingual; c?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={4.5} fill={c} stroke="var(--surface)" strokeWidth={1.5} />
      <L b={n} x={x + 8} y={y + 1} className="ml-nm" />
      {sub && <L b={sub} x={x + 8} y={y + 13} className="ml-sm" />}
    </g>
  );
}

// Shared blob for thematic regions.
function Blob({ cx, cy, rx, ry, c, rot = 0 }: { cx: number; cy: number; rx: number; ry: number; c: string; rot?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={c} opacity={0.5} transform={`rotate(${rot} ${cx} ${cy})`} />;
}

const styleTag = (
  <style>{`
    .ml-nm{fill:var(--text);font-size:12px;font-weight:700;font-family:inherit}
    .ml-sm{fill:var(--text-dim);font-size:10px;font-family:inherit}
    .ml-lg{fill:var(--text);font-size:11px;font-family:inherit}
    .ml-rg{fill:var(--text);font-size:12px;font-weight:700;font-family:inherit}
    .ml-riv{fill:#1f6fb2;font-size:11px;font-weight:600;font-family:inherit}
    .ml-title{fill:var(--text-dim);font-size:13px;font-weight:800;font-family:inherit}
  `}</style>
);

/* ---------------------------- INDIA POLITICAL ---------------------------- */
function IndiaPolitical() {
  return (
    <>
      {styleTag}
      <IndiaBase fill="var(--primary-soft)" />
      <L b={T('INDIA — States & Capitals (key)', 'भारत — प्रमुख राज्य व राजधानियाँ')} x={360} y={28} textAnchor="middle" className="ml-title" />
      <Dot x={250} y={80} n={T('J&K / Ladakh', 'ज.क. / लद्दाख')} c="var(--red)" />
      <Dot x={230} y={150} n={T('Punjab', 'पंजाब')} sub={T('Chandigarh', 'चंडीगढ़')} />
      <Dot x={270} y={200} n={T('Delhi', 'दिल्ली')} c="var(--red)" />
      <Dot x={160} y={300} n={T('Rajasthan', 'राजस्थान')} sub={T('Jaipur', 'जयपुर')} />
      <Dot x={120} y={370} n={T('Gujarat', 'गुजरात')} sub={T('Gandhinagar', 'गांधीनगर')} />
      <Dot x={300} y={300} n={T('Madhya Pradesh', 'मध्य प्रदेश')} sub={T('Bhopal', 'भोपाल')} />
      <Dot x={430} y={210} n={T('Bihar', 'बिहार')} sub={T('Patna', 'पटना')} c="var(--green)" />
      <Dot x={520} y={250} n={T('W. Bengal', 'प. बंगाल')} sub={T('Kolkata', 'कोलकाता')} />
      <Dot x={620} y={300} n={T('Assam', 'असम')} sub={T('Dispur', 'दिसपुर')} />
      <Dot x={210} y={430} n={T('Maharashtra', 'महाराष्ट्र')} sub={T('Mumbai', 'मुंबई')} />
      <Dot x={430} y={470} n={T('Telangana/AP', 'तेलंगाना/आं.प्र.')} sub={T('Hyderabad', 'हैदराबाद')} />
      <Dot x={250} y={560} n={T('Karnataka', 'कर्नाटक')} sub={T('Bengaluru', 'बेंगलुरु')} />
      <Dot x={300} y={700} n={T('Tamil Nadu', 'तमिलनाडु')} sub={T('Chennai', 'चेन्नई')} />
      <Dot x={275} y={660} n={T('Kerala', 'केरल')} sub={T('T.puram', 'ति.पुरम')} c="var(--green)" />
      <Dot x={470} y={520} n={T('Odisha', 'ओडिशा')} sub={T('Bhubaneswar', 'भुवनेश्वर')} />
    </>
  );
}

/* ---------------------------- INDIA PHYSICAL ----------------------------- */
function IndiaPhysical() {
  return (
    <>
      {styleTag}
      <IndiaBase />
      <L b={T('INDIA — Physical Divisions', 'भारत — भौतिक विभाग')} x={360} y={28} textAnchor="middle" className="ml-title" />
      <Blob cx={330} cy={140} rx={180} ry={38} c="#8d6e63" rot={-12} />
      <L b={T('THE HIMALAYAS', 'हिमालय')} x={330} y={130} textAnchor="middle" className="ml-rg" fill="#fff" />
      <Blob cx={330} cy={230} rx={190} ry={34} c="#c9a227" rot={-8} />
      <L b={T('NORTHERN PLAINS (Indus–Ganga–Brahmaputra)', 'उत्तरी मैदान (सिंधु–गंगा–ब्रह्मपुत्र)')} x={330} y={232} textAnchor="middle" className="ml-sm" />
      <Blob cx={160} cy={310} rx={70} ry={55} c="#e0c068" />
      <L b={T('THAR DESERT', 'थार मरुस्थल')} x={160} y={312} textAnchor="middle" className="ml-rg" />
      <Blob cx={330} cy={470} rx={120} ry={130} c="#a1887f" />
      <L b={T('DECCAN PLATEAU', 'दक्कन पठार')} x={330} y={470} textAnchor="middle" className="ml-rg" fill="#fff" />
      <path d="M205 430 L250 600 L285 700" fill="none" stroke="#2e7d32" strokeWidth={7} opacity={0.7} />
      <L b={T('Western Ghats', 'पश्चिमी घाट')} x={196} y={540} className="ml-rg" fill="#2e7d32" transform="rotate(72 196 540)" />
      <path d="M470 470 L440 590 L410 680" fill="none" stroke="#2e7d32" strokeWidth={5} opacity={0.7} />
      <L b={T('Eastern Ghats', 'पूर्वी घाट')} x={470} y={560} className="ml-sm" fill="#2e7d32" />
      <L b={T('Coastal Plains', 'तटीय मैदान')} x={330} y={720} textAnchor="middle" className="ml-sm" />
    </>
  );
}

/* ------------------------------ INDIA RIVERS ----------------------------- */
function IndiaRivers() {
  return (
    <>
      {styleTag}
      <IndiaBase />
      <L b={T('INDIA — Major Rivers', 'भारत — प्रमुख नदियाँ')} x={360} y={28} textAnchor="middle" className="ml-title" />
      <path d="M300 110 Q230 200 150 300 T110 390" fill="none" stroke="#1f6fb2" strokeWidth={4} />
      <L b={T('Indus', 'सिंधु')} x={165} y={250} className="ml-riv" />
      <path d="M330 130 Q380 220 470 260 T540 300" fill="none" stroke="#1f6fb2" strokeWidth={5} />
      <L b={T('Ganga', 'गंगा')} x={390} y={230} className="ml-riv" />
      <path d="M560 300 Q520 340 540 300" fill="none" stroke="#1f6fb2" strokeWidth={4} />
      <path d="M620 300 Q560 340 540 305" fill="none" stroke="#1f6fb2" strokeWidth={4} />
      <L b={T('Brahmaputra', 'ब्रह्मपुत्र')} x={575} y={330} className="ml-riv" />
      <path d="M180 430 Q320 460 470 500" fill="none" stroke="#159" strokeWidth={4} />
      <L b={T('Narmada (W-flow)', 'नर्मदा (प. बहाव)')} x={250} y={445} className="ml-riv" />
      <path d="M330 470 Q400 500 470 520" fill="none" stroke="#1f6fb2" strokeWidth={4} />
      <L b={T('Godavari', 'गोदावरी')} x={380} y={512} className="ml-riv" />
      <path d="M250 540 Q360 560 460 555" fill="none" stroke="#1f6fb2" strokeWidth={3.5} />
      <L b={T('Krishna', 'कृष्णा')} x={330} y={575} className="ml-riv" />
      <path d="M270 620 Q360 640 440 630" fill="none" stroke="#1f6fb2" strokeWidth={3} />
      <L b={T('Kaveri', 'कावेरी')} x={330} y={650} className="ml-riv" />
    </>
  );
}

/* ------------------------------- INDIA SOIL ------------------------------ */
function IndiaSoil() {
  return (
    <>
      {styleTag}
      <IndiaBase />
      <L b={T('INDIA — Major Soil Types', 'भारत — प्रमुख मृदा प्रकार')} x={360} y={28} textAnchor="middle" className="ml-title" />
      <Blob cx={340} cy={225} rx={195} ry={36} c="#c9a227" rot={-8} />
      <Blob cx={310} cy={470} rx={120} ry={120} c="#37474f" />
      <Blob cx={160} cy={310} rx={70} ry={55} c="#e0c068" />
      <Blob cx={430} cy={560} rx={70} ry={90} c="#b23a2c" />
      <Blob cx={285} cy={680} rx={45} ry={70} c="#8d6e63" rot={20} />
      <Legend x={470} y={120} items={[
        { c: '#c9a227', b: T('Alluvial (plains)', 'जलोढ़ (मैदान)') },
        { c: '#37474f', b: T('Black / Regur (cotton)', 'काली/रेगुर (कपास)') },
        { c: '#b23a2c', b: T('Red & Yellow', 'लाल व पीली') },
        { c: '#8d6e63', b: T('Laterite', 'लैटेराइट') },
        { c: '#e0c068', b: T('Arid / Desert', 'शुष्क/मरुस्थलीय') },
      ]} />
    </>
  );
}

/* ------------------------------ INDIA CROPS ------------------------------ */
function IndiaCrops() {
  return (
    <>
      {styleTag}
      <IndiaBase />
      <L b={T('INDIA — Major Crop Belts', 'भारत — प्रमुख फसल क्षेत्र')} x={360} y={28} textAnchor="middle" className="ml-title" />
      <Blob cx={230} cy={210} rx={120} ry={30} c="#f9a825" rot={-8} />
      <L b={T('Wheat', 'गेहूँ')} x={200} y={205} className="ml-rg" />
      <Blob cx={470} cy={260} rx={90} ry={40} c="#43a047" rot={8} />
      <L b={T('Rice (E)', 'चावल (पू.)')} x={470} y={262} textAnchor="middle" className="ml-rg" fill="#fff" />
      <Blob cx={300} cy={660} rx={60} ry={90} c="#43a047" />
      <L b={T('Rice (S)', 'चावल (द.)')} x={300} y={660} textAnchor="middle" className="ml-rg" fill="#fff" />
      <Blob cx={250} cy={430} rx={80} ry={60} c="#eeeeee" />
      <L b={T('Cotton', 'कपास')} x={230} y={432} className="ml-rg" />
      <Blob cx={560} cy={310} rx={45} ry={40} c="#2e7d32" />
      <L b={T('Tea', 'चाय')} x={545} y={312} className="ml-rg" fill="#fff" />
      <Blob cx={420} cy={210} rx={55} ry={25} c="#c0ca33" />
      <L b={T('Sugarcane', 'गन्ना')} x={420} y={212} textAnchor="middle" className="ml-sm" />
    </>
  );
}

/* ----------------------------- INDIA MINERALS ---------------------------- */
function IndiaMinerals() {
  return (
    <>
      {styleTag}
      <IndiaBase />
      <L b={T('INDIA — Mineral Belts', 'भारत — खनिज पेटियाँ')} x={360} y={28} textAnchor="middle" className="ml-title" />
      {/* Chhota Nagpur "mineral heartland" */}
      <Blob cx={455} cy={330} rx={70} ry={55} c="#455a64" rot={-15} />
      <L b={T('Chhota Nagpur belt', 'छोटा नागपुर पेटी')} x={455} y={332} textAnchor="middle" className="ml-sm" fill="#fff" />
      <Dot x={455} y={315} n={T('Coal', 'कोयला')} c="#212121" />
      <Dot x={470} y={350} n={T('Iron ore', 'लौह अयस्क')} c="#8d6e63" />
      <Dot x={410} y={480} n={T('Iron (Bailadila)', 'लौह (बैलाडीला)')} c="#8d6e63" />
      <Dot x={500} y={470} n={T('Bauxite', 'बॉक्साइट')} c="#b23a2c" />
      <Dot x={470} y={230} n={T('Mica', 'अभ्रक')} c="#9575cd" />
      <Dot x={230} y={470} n={T('Manganese', 'मैंगनीज़')} c="#5d4037" />
      <Legend x={70} y={560} items={[
        { c: '#212121', b: T('Coal', 'कोयला') },
        { c: '#8d6e63', b: T('Iron ore', 'लौह अयस्क') },
        { c: '#b23a2c', b: T('Bauxite', 'बॉक्साइट') },
        { c: '#9575cd', b: T('Mica', 'अभ्रक') },
      ]} />
    </>
  );
}

/* ----------------------------- BIHAR POLITICAL --------------------------- */
function BiharPolitical() {
  return (
    <>
      {styleTag}
      <BiharBase fill="var(--primary-soft)" />
      <L b={T('BIHAR — Key Districts', 'बिहार — प्रमुख जिले')} x={300} y={30} textAnchor="middle" className="ml-title" />
      <path d="M108 150 Q260 130 460 140" fill="none" stroke="#1f6fb2" strokeWidth={5} />
      <L b={T('Ganga →', 'गंगा →')} x={300} y={128} textAnchor="middle" className="ml-riv" />
      <Dot x={150} y={90} n={T('W. Champaran', 'प. चंपारण')} />
      <Dot x={210} y={95} n={T('Muzaffarpur', 'मुज़फ़्फ़रपुर')} />
      <Dot x={300} y={100} n={T('Darbhanga', 'दरभंगा')} />
      <Dot x={390} y={110} n={T('Purnia', 'पूर्णिया')} />
      <Dot x={230} y={175} n={T('Patna (cap.)', 'पटना (राजधानी)')} c="var(--red)" />
      <Dot x={160} y={205} n={T('Rohtas/Kaimur', 'रोहतास/कैमूर')} />
      <Dot x={300} y={215} n={T('Gaya', 'गया')} />
      <Dot x={390} y={200} n={T('Bhagalpur', 'भागलपुर')} />
      <Dot x={430} y={165} n={T('Katihar', 'कटिहार')} />
    </>
  );
}

/* ------------------------------ BIHAR PHYSICAL --------------------------- */
function BiharPhysical() {
  return (
    <>
      {styleTag}
      <BiharBase />
      <L b={T('BIHAR — Physical Regions', 'बिहार — भौतिक क्षेत्र')} x={300} y={30} textAnchor="middle" className="ml-title" />
      <Blob cx={290} cy={100} rx={180} ry={40} c="#c9a227" />
      <L b={T('North Bihar Plain', 'उत्तर बिहार मैदान')} x={290} y={95} textAnchor="middle" className="ml-rg" />
      <L b={T('(flood-prone: Kosi, Gandak)', '(बाढ़ग्रस्त: कोसी, गंडक)')} x={290} y={112} textAnchor="middle" className="ml-sm" />
      <path d="M108 150 Q260 132 460 142" fill="none" stroke="#1f6fb2" strokeWidth={6} />
      <L b={T('GANGA', 'गंगा')} x={300} y={135} textAnchor="middle" className="ml-riv" />
      <Blob cx={290} cy={200} rx={170} ry={38} c="#8d6e63" />
      <L b={T('South Bihar Plain', 'दक्षिण बिहार मैदान')} x={290} y={198} textAnchor="middle" className="ml-rg" fill="#fff" />
      <Blob cx={210} cy={235} rx={80} ry={22} c="#5d4037" />
      <L b={T('Kaimur / Chhota Nagpur fringe', 'कैमूर / छोटा नागपुर किनारा')} x={210} y={238} textAnchor="middle" className="ml-sm" fill="#fff" />
    </>
  );
}

/* ------------------------------ BIHAR RIVERS ----------------------------- */
function BiharRiversMap() {
  return (
    <>
      {styleTag}
      <BiharBase />
      <L b={T('BIHAR — Rivers', 'बिहार — नदियाँ')} x={300} y={30} textAnchor="middle" className="ml-title" />
      <path d="M108 150 Q260 132 460 142" fill="none" stroke="#1f6fb2" strokeWidth={7} />
      <L b={T('GANGA (W→E)', 'गंगा (प.→पू.)')} x={300} y={132} textAnchor="middle" className="ml-riv" />
      {/* North tributaries down into Ganga */}
      <path d="M150 60 Q160 110 200 148" fill="none" stroke="#4f9fd4" strokeWidth={3} />
      <L b={T('Gandak', 'गंडक')} x={165} y={90} className="ml-riv" />
      <path d="M300 56 Q300 105 280 146" fill="none" stroke="#4f9fd4" strokeWidth={3} />
      <L b={T('Bagmati', 'बागमती')} x={300} y={90} className="ml-riv" />
      <path d="M410 60 Q400 110 360 144" fill="none" stroke="#4f9fd4" strokeWidth={4} />
      <L b={T('Kosi ("Sorrow")', 'कोसी ("शोक")')} x={395} y={92} className="ml-riv" />
      {/* South tributaries up into Ganga */}
      <path d="M170 240 Q180 190 210 152" fill="none" stroke="#4f9fd4" strokeWidth={4} />
      <L b={T('Sone', 'सोन')} x={165} y={215} className="ml-riv" />
      <path d="M300 245 Q305 200 290 150" fill="none" stroke="#4f9fd4" strokeWidth={3} />
      <L b={T('Punpun', 'पुनपुन')} x={300} y={220} className="ml-riv" />
      <path d="M380 235 Q380 195 350 150" fill="none" stroke="#4f9fd4" strokeWidth={3} />
      <L b={T('Falgu', 'फल्गु')} x={380} y={215} className="ml-riv" />
    </>
  );
}

export interface ExamMap {
  id: string;
  title: Bilingual;
  group: 'india' | 'bihar';
  viewBox: string;
  Comp: () => ReactNode;
}

export const EXAM_MAPS: ExamMap[] = [
  { id: 'india-political', title: T('India — Political', 'भारत — राजनीतिक'), group: 'india', viewBox: '0 0 720 820', Comp: IndiaPolitical },
  { id: 'india-physical', title: T('India — Physical', 'भारत — भौतिक'), group: 'india', viewBox: '0 0 720 820', Comp: IndiaPhysical },
  { id: 'india-rivers', title: T('India — Rivers', 'भारत — नदियाँ'), group: 'india', viewBox: '0 0 720 820', Comp: IndiaRivers },
  { id: 'india-soil', title: T('India — Soils', 'भारत — मृदा'), group: 'india', viewBox: '0 0 720 820', Comp: IndiaSoil },
  { id: 'india-crops', title: T('India — Crops', 'भारत — फसलें'), group: 'india', viewBox: '0 0 720 820', Comp: IndiaCrops },
  { id: 'india-minerals', title: T('India — Minerals', 'भारत — खनिज'), group: 'india', viewBox: '0 0 720 820', Comp: IndiaMinerals },
  { id: 'bihar-political', title: T('Bihar — Political', 'बिहार — राजनीतिक'), group: 'bihar', viewBox: '0 0 600 300', Comp: BiharPolitical },
  { id: 'bihar-physical', title: T('Bihar — Physical', 'बिहार — भौतिक'), group: 'bihar', viewBox: '0 0 600 300', Comp: BiharPhysical },
  { id: 'bihar-rivers', title: T('Bihar — Rivers', 'बिहार — नदियाँ'), group: 'bihar', viewBox: '0 0 600 300', Comp: BiharRiversMap },
];
