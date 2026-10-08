"use client";

import Image from "next/image";
import { useId } from "react";
import { PadlockSolid } from "./icons";

/* Temsili sahneler. Hepsi kodla çizildi; gerçek kayıt görüntüsü değildir. */

type Mood = "day" | "dawn" | "dusk" | "night";

const skies: Record<Mood, [string, string]> = {
  day: ["#9fc6ea", "#e3eef7"],
  dawn: ["#f2b98a", "#f6dcc0"],
  dusk: ["#3a4d7a", "#c8826a"],
  night: ["#0b1222", "#1f2b45"],
};

function Car({ x, y, s = 1, night, color = "#2b2f36" }: { x: number; y: number; s?: number; night: boolean; color?: string }) {
  const tail = night ? "#ff3b30" : "#c8322b";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {night && <ellipse cx="0" cy="2" rx="40" ry="10" fill="#ff3b30" opacity="0.18" />}
      <path d="M-30 -6 Q-28 -26 -18 -28 L18 -28 Q28 -26 30 -6 Z" fill={color} />
      <path d="M-20 -24 L20 -24 L24 -12 L-24 -12 Z" fill={night ? "#1a2233" : "#5d6b7c"} opacity="0.9" />
      <rect x="-34" y="-8" width="68" height="16" rx="4" fill={color} />
      <rect x="-31" y="-5" width="12" height="4" rx="1.5" fill={tail} />
      <rect x="19" y="-5" width="12" height="4" rx="1.5" fill={tail} />
      <rect x="-9" y="-1" width="18" height="6" rx="1" fill="#f4f4f2" />
      <rect x="-30" y="8" width="10" height="6" rx="2" fill="#111" />
      <rect x="20" y="8" width="10" height="6" rx="2" fill="#111" />
    </g>
  );
}

/** Yol sahnesi: ön kameradan bakış. */
export function RoadScene({ mood = "day", className, plate = false }: { mood?: Mood; className?: string; plate?: boolean }) {
  const id = useId().replace(/:/g, "");
  const night = mood === "night" || mood === "dusk";
  const [top, bottom] = skies[mood];
  return (
    <svg className={className} viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={top} /><stop offset="1" stopColor={bottom} /></linearGradient>
        <linearGradient id={`road${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={night ? "#2a2d33" : "#8d9298"} /><stop offset="1" stopColor={night ? "#14161a" : "#5c6167"} /></linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#sky${id})`} />
      <g fill={night ? "#121a2b" : "#a9b6c4"} opacity={night ? 1 : 0.8}>
        <rect x="18" y="72" width="22" height="48" /><rect x="44" y="58" width="16" height="62" /><rect x="64" y="84" width="26" height="36" />
        <rect x="292" y="64" width="18" height="56" /><rect x="314" y="80" width="28" height="40" /><rect x="346" y="54" width="14" height="66" /><rect x="364" y="88" width="24" height="32" />
      </g>
      {night && <g fill="#ffd27a" opacity="0.7">{[[24, 80], [30, 92], [48, 66], [52, 84], [70, 92], [298, 72], [300, 90], [320, 88], [350, 62], [352, 80], [370, 96]].map(([cx, cy]) => <rect key={`${cx}-${cy}`} x={cx} y={cy} width="3" height="3" />)}</g>}
      <path d="M0 240 L170 120 L230 120 L400 240 Z" fill={`url(#road${id})`} />
      <rect x="0" y="118" width="400" height="3" fill={night ? "#1b1e24" : "#7c8288"} />
      <g fill={night ? "#d9d9d6" : "#f2f2ef"} opacity="0.85">
        <path d="M197 126 L203 126 L204 136 L196 136 Z" /><path d="M195 148 L205 148 L207 166 L193 166 Z" /><path d="M192 186 L208 186 L212 214 L188 214 Z" />
        <path d="M120 240 L176 122 L179 122 L130 240 Z" opacity="0.6" /><path d="M280 240 L224 122 L221 122 L270 240 Z" opacity="0.6" />
      </g>
      {[[96, 70], [146, 98], [304, 70], [254, 98]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="2" height={120 - y} fill={night ? "#3a3f48" : "#6b7178"} />
          <rect x={x - 6} y={y - 2} width="8" height="3" fill={night ? "#ffd27a" : "#6b7178"} />
          {night && <circle cx={x - 2} cy={y + 2} r="6" fill="#ffd27a" opacity="0.25" />}
        </g>
      ))}
      <Car x={176} y={134} s={0.32} night={night} color="#55606d" />
      <Car x={228} y={140} s={0.42} night={night} color="#8b2e2a" />
      <Car x={204} y={188} s={plate ? 1.25 : 1} night={night} color={night ? "#1d2027" : "#24282f"} />
    </svg>
  );
}

/** GPS harita sahnesi: rota ve konum. */
export function MapScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="240" fill="#eef1f4" />
      <path d="M0 170 Q90 150 140 190 T300 200 T400 170 V240 H0 Z" fill="#cfe1f3" />
      <rect x="250" y="20" width="90" height="60" rx="6" fill="#dfeedd" />
      <rect x="30" y="34" width="70" height="44" rx="6" fill="#dfeedd" />
      <g stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round">
        <path d="M-10 110 H410" /><path d="M120 -10 V250" /><path d="M300 -10 L240 250" /><path d="M-10 40 L410 60" />
      </g>
      <g stroke="#fff" strokeWidth="4" fill="none" opacity="0.9">
        <path d="M60 -10 V250" /><path d="M200 -10 V250" /><path d="M-10 150 H410" /><path d="M360 -10 V250" />
      </g>
      <path d="M128 222 C134 190 120 160 122 132 S150 110 200 110 S244 100 252 76 S262 56 282 50" fill="none" stroke="#0b63ce" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="128" cy="222" r="7" fill="#fff" stroke="#0b63ce" strokeWidth="4" />
      <g transform="translate(282 50)">
        <circle r="18" fill="#0b63ce" opacity="0.16" />
        <circle r="8" fill="#0b63ce" stroke="#fff" strokeWidth="3" />
      </g>
    </svg>
  );
}

/** Telefon: üstte canlı görüntü, altta GPS rotası. */
export function PhoneApp() {
  return (
    <figure className="phone">
      <div className="phone__body">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="phone__top">
            <RoadScene mood="day" />
            <span className="phone__osd phone__osd--tl"><b className="vf-rec" />REC</span>
            <span className="phone__osd phone__osd--tr">4K</span>
          </div>
          <div className="phone__bar"><strong>Canlı görüntü</strong><span>Ön kamera</span></div>
          <div className="phone__map">
            <MapScene />
            <span className="phone__chip">GPS · Rota kaydı</span>
          </div>
        </div>
      </div>
      <figcaption>Temsili görsel</figcaption>
    </figure>
  );
}

/** Sensör çipi. */
export function SensorChip() {
  return (
    <div className="chip" role="img" aria-label="GalaxyCore GC4653 görüntü sensörü, temsili çizim">
      <div className="chip__die">
        <small>GalaxyCore</small>
        <strong>GC4653</strong>
      </div>
    </div>
  );
}

/** Park modu: G-Sensor kartı (gerçekçi sahne + REC, kilit, oynatma çubuğu). */
export function ImpactScene() {
  return (
    <div className="impact">
      <Image src="/media/park/g-sensor-yakin.webp" alt="Park halindeki araca arkadan çarpma anı" fill sizes="(max-width: 860px) 92vw, 560px" />
      <span className="impact__lock"><PadlockSolid size={26} /></span>
      <span className="impact__rec"><b className="vf-rec" />REC</span>
      <div className="impact__player"><span>00:14 / 02:07</span><i><b /></i></div>
    </div>
  );
}

/** Park modu: Time-Lapse kartı (aynı kadraj, dört saat). */
export function TimelapseStrip() {
  const frames = [["06:00", 1], ["12:00", 2], ["18:00", 3], ["24:00", 4]] as const;
  return (
    <div className="timelapse">
      <div className="timelapse__frames">{frames.map(([time, i]) => <span key={time} className="timelapse__frame"><Image src={`/media/park/timelapse-${i}.webp`} alt={`Park kaydı, saat ${time}`} fill sizes="(max-width: 860px) 46vw, 280px" /><b className="timelapse__time">{i === 1 && <i className="vf-rec" />}{time}</b></span>)}</div>
      <div className="timelapse__bar"><span>Time-Lapse ile park kaydı</span><i><b /></i></div>
    </div>
  );
}

/** Gece otoparkı arka planı. */
export function NightLot({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="1200" height="600" fill="#0e1118" />
      <g fill="#151b28">{[[40, 120, 90, 360], [150, 60, 70, 420], [240, 160, 120, 320], [880, 90, 80, 390], [980, 150, 110, 330], [1110, 70, 80, 410]].map(([x, y, w, h]) => <rect key={x} x={x} y={y} width={w} height={h} />)}</g>
      <g fill="#ffcf7a">{Array.from({ length: 46 }, (_, i) => <rect key={i} x={50 + ((i * 97) % 1100)} y={90 + ((i * 53) % 300)} width="5" height="5" opacity={0.25 + ((i * 7) % 10) / 20} />)}</g>
      {[200, 520, 840, 1100].map((x) => <circle key={x} cx={x} cy="170" r="4" fill="#ffe2a8" opacity="0.7" />)}
      <rect y="460" width="1200" height="140" fill="#12151b" />
    </svg>
  );
}

/** Kurulum adımı çizimleri (koyu zemin, açık çizgi). */
export function InstallScene({ step }: { step: 1 | 2 | 3 }) {
  const stroke = { fill: "none", stroke: "#e9ebee", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg className="install-scene" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {step === 1 && (
        <g>
          <path d="M30 196 L64 40 Q160 24 256 40 L290 196" {...stroke} opacity="0.55" />
          <path d="M150 40 V54" {...stroke} />
          <rect x="128" y="54" width="44" height="12" rx="4" {...stroke} opacity="0.5" />
          <rect x="176" y="46" width="50" height="22" rx="5" fill="#e9ebee" />
          <circle cx="214" cy="57" r="6" fill="#0b63ce" />
          <circle cx="201" cy="57" r="34" fill="none" stroke="#0b63ce" strokeWidth="2" strokeDasharray="5 6" />
          <path d="M40 206 Q160 176 280 206" {...stroke} opacity="0.35" />
        </g>
      )}
      {step === 2 && (
        <g>
          <path d="M110 26 Q160 12 210 26 L222 82 L222 170 Q220 200 200 206 L120 206 Q100 200 98 170 L98 82 Z" {...stroke} opacity="0.55" />
          <path d="M112 74 Q160 64 208 74" {...stroke} opacity="0.4" /><path d="M110 168 Q160 176 210 168" {...stroke} opacity="0.4" />
          <rect x="150" y="64" width="20" height="9" rx="2" fill="#e9ebee" />
          <rect x="151" y="174" width="18" height="9" rx="2" fill="#e9ebee" />
          <path d="M170 70 Q206 72 206 110 L206 160 Q206 176 170 178" fill="none" stroke="#0b63ce" strokeWidth="2.4" strokeDasharray="6 5" />
          <path d="M150 70 Q120 80 118 112" fill="none" stroke="#0b63ce" strokeWidth="2.4" strokeDasharray="6 5" />
          <rect x="108" y="112" width="20" height="12" rx="3" fill="#0b63ce" />
        </g>
      )}
      {step === 3 && (
        <g>
          <rect x="60" y="70" width="200" height="96" rx="14" fill="#e9ebee" />
          <rect x="74" y="84" width="96" height="68" rx="6" fill="#c8ccd2" />
          <circle cx="216" cy="118" r="26" fill="#1d2027" /><circle cx="216" cy="118" r="11" fill="#0b63ce" />
          <rect x="196" y="164" width="40" height="5" rx="2" fill="#1d2027" />
          <path d="M202 214 L202 194 L206 190 L232 190 L232 214 Z" fill="#0b63ce" />
          <path d="M216 186 V176" stroke="#e9ebee" strokeWidth="2.4" strokeLinecap="round" /><path d="m211 181 5-6 5 6" fill="none" stroke="#e9ebee" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  );
}

/** Markasız microSD kart. */
export function MicroSD({ size }: { size: string }) {
  return (
    <svg className="microsd" viewBox="0 0 60 78" aria-label={`${size} microSD kart`} role="img">
      <path d="M6 2 H44 L58 16 V72 Q58 76 54 76 H6 Q2 76 2 72 V6 Q2 2 6 2 Z" fill="#16181b" />
      <path d="M2 50 H58 V72 Q58 76 54 76 H6 Q2 76 2 72 Z" fill="#0b63ce" />
      <g fill="#c9a24a">{[10, 17, 24, 31, 38].map((x) => <rect key={x} x={x} y="6" width="4" height="10" rx="1" />)}</g>
      <text x="30" y="36" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily="var(--font)">microSD</text>
      <text x="30" y="67" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="var(--font)">{size}</text>
    </svg>
  );
}
