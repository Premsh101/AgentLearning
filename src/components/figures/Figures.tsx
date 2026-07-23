import type { ReactNode } from 'react';
import { useLang, type Bilingual } from '../../lib/i18n';

/**
 * Inline-SVG figures: maps, infographics and diagrams.
 * All self-contained (no external assets) so they work offline and pass a
 * strict CSP. Colours use CSS variables so figures adapt to light/dark.
 * Labels are bilingual via useLang.
 */

const T = (en: string, hi: string): Bilingual => ({ en, hi });

function Label({ b, ...rest }: { b: Bilingual } & React.SVGProps<SVGTextElement>) {
  const { tb } = useLang();
  return <text {...rest}>{tb(b)}</text>;
}

const svgBase: React.SVGProps<SVGSVGElement> = {
  width: '100%',
  role: 'img',
  preserveAspectRatio: 'xMidYMid meet',
  style: { maxWidth: 560, display: 'block', margin: '0 auto', height: 'auto' },
};

/** Schematic map: Bihar and its four neighbours + the Ganga. */
function BiharNeighbours() {
  return (
    <svg viewBox="0 0 400 320" {...svgBase} aria-label="Bihar and neighbouring regions">
      <style>{`.bx{fill:var(--primary-soft);stroke:var(--primary);stroke-width:2}
        .nb{fill:var(--surface-2);stroke:var(--border);stroke-width:1.5}
        .lb{fill:var(--text);font-size:13px;font-weight:600;font-family:inherit}
        .sm{fill:var(--text-dim);font-size:11px;font-family:inherit}
        .rv{fill:none;stroke:#2f7fc7;stroke-width:4}`}</style>
      {/* neighbours */}
      <rect className="nb" x="60" y="20" width="280" height="55" rx="6" />
      <rect className="nb" x="20" y="90" width="70" height="150" rx="6" />
      <rect className="nb" x="310" y="90" width="70" height="150" rx="6" />
      <rect className="nb" x="60" y="250" width="280" height="50" rx="6" />
      {/* Bihar */}
      <rect className="bx" x="100" y="90" width="200" height="150" rx="8" />
      {/* Ganga */}
      <path className="rv" d="M100 175 Q200 150 300 175" />
      <Label b={T('NEPAL (North) — international', 'नेपाल (उत्तर) — अंतरराष्ट्रीय')} className="sm" x="200" y="52" textAnchor="middle" />
      <Label b={T('UTTAR', 'उत्तर')} className="sm" x="55" y="160" textAnchor="middle" />
      <Label b={T('PRADESH', 'प्रदेश')} className="sm" x="55" y="174" textAnchor="middle" />
      <Label b={T('(West)', '(पश्चिम)')} className="sm" x="55" y="188" textAnchor="middle" />
      <Label b={T('WEST', 'पश्चिम')} className="sm" x="345" y="160" textAnchor="middle" />
      <Label b={T('BENGAL', 'बंगाल')} className="sm" x="345" y="174" textAnchor="middle" />
      <Label b={T('(East)', '(पूर्व)')} className="sm" x="345" y="188" textAnchor="middle" />
      <Label b={T('JHARKHAND (South)', 'झारखंड (दक्षिण)')} className="sm" x="200" y="278" textAnchor="middle" />
      <Label b={T('BIHAR', 'बिहार')} className="lb" x="200" y="128" textAnchor="middle" />
      <Label b={T('Patna', 'पटना')} className="sm" x="200" y="146" textAnchor="middle" />
      <circle cx="200" cy="150" r="3.5" fill="var(--accent)" />
      <Label b={T('Ganga →', 'गंगा →')} className="sm" x="252" y="168" fill="#2f7fc7" />
    </svg>
  );
}

/** Rivers of Bihar: Ganga divides north & south; tributaries labelled. */
function BiharRivers() {
  return (
    <svg viewBox="0 0 400 300" {...svgBase} aria-label="Rivers of Bihar">
      <style>{`.land{fill:var(--surface-2);stroke:var(--border)}
        .ganga{fill:none;stroke:#1f6fb2;stroke-width:6}
        .trib{fill:none;stroke:#4f9fd4;stroke-width:3}
        .t{fill:var(--text);font-size:12px;font-family:inherit}
        .td{fill:var(--text-dim);font-size:11px;font-family:inherit}
        .hd{fill:var(--primary);font-size:12px;font-weight:700;font-family:inherit}`}</style>
      <rect className="land" x="10" y="10" width="380" height="280" rx="8" />
      {/* Ganga: west to east across middle */}
      <path className="ganga" d="M15 160 Q120 140 200 155 T385 150" />
      {/* North tributaries flowing down into Ganga */}
      <path className="trib" d="M70 20 Q78 90 120 152" />
      <path className="trib" d="M150 20 Q150 90 175 153" />
      <path className="trib" d="M230 20 Q225 90 215 154" />
      <path className="trib" d="M300 20 Q290 95 260 152" />
      {/* South tributaries flowing up into Ganga */}
      <path className="trib" d="M120 285 Q125 210 150 162" />
      <path className="trib" d="M215 285 Q220 215 225 160" />
      <path className="trib" d="M300 285 Q295 215 280 158" />
      <Label b={T('NORTH BIHAR PLAIN', 'उत्तर बिहार मैदान')} className="hd" x="200" y="40" textAnchor="middle" />
      <Label b={T('Kosi', 'कोसी')} className="t" x="300" y="70" textAnchor="middle" />
      <Label b={T('"Sorrow of Bihar"', '"बिहार का शोक"')} className="td" x="300" y="84" textAnchor="middle" />
      <Label b={T('Gandak', 'गंडक')} className="t" x="228" y="70" textAnchor="middle" />
      <Label b={T('Bagmati', 'बागमती')} className="t" x="150" y="70" textAnchor="middle" />
      <Label b={T('Ghaghara', 'घाघरा')} className="t" x="65" y="70" textAnchor="middle" />
      <Label b={T('GANGA (west → east)', 'गंगा (पश्चिम → पूर्व)')} className="hd" x="200" y="135" textAnchor="middle" fill="#1f6fb2" />
      <Label b={T('SOUTH BIHAR PLAIN', 'दक्षिण बिहार मैदान')} className="hd" x="200" y="270" textAnchor="middle" />
      <Label b={T('Sone', 'सोन')} className="t" x="118" y="235" textAnchor="middle" />
      <Label b={T('Punpun', 'पुनपुन')} className="t" x="215" y="235" textAnchor="middle" />
      <Label b={T('Falgu', 'फल्गु')} className="t" x="300" y="235" textAnchor="middle" />
    </svg>
  );
}

/** Ancient Bihar heritage centres. */
function AncientCentres() {
  const dots: { x: number; y: number; n: Bilingual; d: Bilingual }[] = [
    { x: 150, y: 90, n: T('Pataliputra', 'पाटलिपुत्र'), d: T('Maurya & Gupta capital', 'मौर्य व गुप्त राजधानी') },
    { x: 175, y: 55, n: T('Vaishali', 'वैशाली'), d: T('First republic', 'प्रथम गणराज्य') },
    { x: 250, y: 130, n: T('Nalanda', 'नालंदा'), d: T('University', 'विश्वविद्यालय') },
    { x: 300, y: 175, n: T('Bodh Gaya', 'बोधगया'), d: T('Buddha\'s enlightenment', 'बुद्ध की ज्ञानप्राप्ति') },
    { x: 235, y: 185, n: T('Rajgir', 'राजगीर'), d: T('Magadha\'s 1st capital', 'मगध की प्रथम राजधानी') },
    { x: 330, y: 90, n: T('Vikramshila', 'विक्रमशिला'), d: T('University (Pala)', 'विश्वविद्यालय (पाल)') },
  ];
  return (
    <svg viewBox="0 0 400 240" {...svgBase} aria-label="Ancient heritage centres of Bihar">
      <style>{`.land{fill:var(--surface-2);stroke:var(--border)}
        .ganga{fill:none;stroke:#1f6fb2;stroke-width:5}
        .nm{fill:var(--text);font-size:12px;font-weight:600;font-family:inherit}
        .ds{fill:var(--text-dim);font-size:10px;font-family:inherit}`}</style>
      <rect className="land" x="10" y="10" width="380" height="220" rx="8" />
      <path className="ganga" d="M15 105 Q150 85 250 105 T385 100" />
      {dots.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="5" fill="var(--accent)" stroke="var(--surface)" strokeWidth="1.5" />
          <Label b={p.n} className="nm" x={p.x + 8} y={p.y + 2} />
          <Label b={p.d} className="ds" x={p.x + 8} y={p.y + 15} />
        </g>
      ))}
    </svg>
  );
}

/** Preamble keywords infographic. */
function PreambleKeywords() {
  const nature = [
    T('SOVEREIGN', 'संप्रभु'),
    T('SOCIALIST', 'समाजवादी'),
    T('SECULAR', 'पंथनिरपेक्ष'),
    T('DEMOCRATIC', 'लोकतांत्रिक'),
    T('REPUBLIC', 'गणराज्य'),
  ];
  const objectives = [
    T('JUSTICE', 'न्याय'),
    T('LIBERTY', 'स्वतंत्रता'),
    T('EQUALITY', 'समता'),
    T('FRATERNITY', 'बंधुत्व'),
  ];
  return (
    <svg viewBox="0 0 400 250" {...svgBase} aria-label="Keywords of the Preamble">
      <style>{`.hd{fill:var(--text-dim);font-size:12px;font-weight:700;font-family:inherit}
        .chip{fill:var(--primary-soft);stroke:var(--primary);stroke-width:1.5}
        .chip2{fill:var(--accent-soft);stroke:var(--accent);stroke-width:1.5}
        .ct{fill:var(--text);font-size:12px;font-weight:600;font-family:inherit}`}</style>
      <Label b={T('Nature of the State', 'राज्य का स्वरूप')} className="hd" x="200" y="20" textAnchor="middle" />
      {nature.map((b, i) => (
        <g key={i}>
          <rect className="chip" x={12 + i * 76} y="32" width="70" height="30" rx="15" />
          <Label b={b} className="ct" x={47 + i * 76} y="51" textAnchor="middle" fontSize={i === 3 ? 10 : 11} />
        </g>
      ))}
      <Label b={T('Objectives secured to citizens', 'नागरिकों को प्राप्त उद्देश्य')} className="hd" x="200" y="110" textAnchor="middle" />
      {objectives.map((b, i) => (
        <g key={i}>
          <rect className="chip2" x={30 + i * 92} y="122" width="82" height="34" rx="8" />
          <Label b={b} className="ct" x={71 + i * 92} y="144" textAnchor="middle" />
        </g>
      ))}
      <Label b={T('Justice → Liberty → Equality → Fraternity (the logical order)', 'न्याय → स्वतंत्रता → समता → बंधुत्व (तार्किक क्रम)')} className="hd" x="200" y="185" textAnchor="middle" />
      <Label b={T('Source of authority: "We, the People of India"', 'सत्ता का स्रोत: "हम भारत के लोग"')} className="ct" x="200" y="215" textAnchor="middle" />
    </svg>
  );
}

/** Six Fundamental Rights infographic with article ranges. */
function FundamentalRights() {
  const rights: { n: Bilingual; art: string }[] = [
    { n: T('Right to Equality', 'समता का अधिकार'), art: '14–18' },
    { n: T('Right to Freedom', 'स्वतंत्रता का अधिकार'), art: '19–22' },
    { n: T('Against Exploitation', 'शोषण के विरुद्ध'), art: '23–24' },
    { n: T('Freedom of Religion', 'धार्मिक स्वतंत्रता'), art: '25–28' },
    { n: T('Cultural & Educational', 'सांस्कृतिक व शैक्षिक'), art: '29–30' },
    { n: T('Constitutional Remedies', 'संवैधानिक उपचार'), art: '32' },
  ];
  return (
    <svg viewBox="0 0 400 250" {...svgBase} aria-label="The six Fundamental Rights">
      <style>{`.card{fill:var(--primary-soft);stroke:var(--primary);stroke-width:1.5}
        .rt{fill:var(--text);font-size:11px;font-weight:600;font-family:inherit}
        .art{fill:var(--accent);font-size:13px;font-weight:800;font-family:inherit}`}</style>
      {rights.map((r, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 12 + col * 128;
        const y = 20 + row * 110;
        return (
          <g key={i}>
            <rect className="card" x={x} y={y} width="118" height="92" rx="10" />
            <Label b={T(`Article ${r.art}`, `अनुच्छेद ${r.art}`)} className="art" x={x + 59} y={y + 30} textAnchor="middle" />
            <Label b={r.n} className="rt" x={x + 59} y={y + 58} textAnchor="middle" fontSize={10} />
          </g>
        );
      })}
    </svg>
  );
}

const REGISTRY: Record<string, () => ReactNode> = {
  'bihar-neighbours': BiharNeighbours,
  'bihar-rivers': BiharRivers,
  'ancient-centres': AncientCentres,
  'preamble-keywords': PreambleKeywords,
  'fundamental-rights': FundamentalRights,
};

export function Figure({ figureId, caption }: { figureId: string; caption?: Bilingual }) {
  const { tb } = useLang();
  const Comp = REGISTRY[figureId];
  if (!Comp) return null;
  return (
    <figure className="figure">
      <div className="fig-svg">{Comp()}</div>
      {caption && <figcaption className="fig-caption">{tb(caption)}</figcaption>}
    </figure>
  );
}
