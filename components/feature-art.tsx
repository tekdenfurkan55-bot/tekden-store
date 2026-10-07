import Image from "next/image";
import { siInstagram, siWhatsapp, siYoutube } from "simple-icons";
import { RoadScene } from "./illustrations";

/* ---------- Altın rozetler (vektör, keskin) ---------- */
export function GoldBadge({ big, line1, line2 }: { big: string; line1: string; line2?: string }) {
  const id = `g${big.replace(/\W/g, "")}`;
  return (
    <svg className="gold-badge" viewBox="0 0 160 110" role="img" aria-label={`${big} ${line1}${line2 ? " " + line2 : ""}`}>
      <defs>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6dc8a" /><stop offset=".45" stopColor="#c8962e" /><stop offset=".55" stopColor="#a8761c" /><stop offset="1" stopColor="#f0cf72" /></linearGradient>
        <linearGradient id={`${id}-txt`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbe7a6" /><stop offset=".5" stopColor="#e2b04a" /><stop offset="1" stopColor="#b9821f" /></linearGradient>
      </defs>
      <rect x="2" y="2" width="156" height="106" rx="14" fill={`url(#${id}-rim)`} />
      <rect x="7" y="7" width="146" height="96" rx="10" fill="#0d0d0e" />
      <text x="80" y={line2 ? 50 : 58} textAnchor="middle" fontFamily="var(--font)" fontWeight="800" fontSize={big.length > 3 ? 40 : 52} fill={`url(#${id}-txt)`} style={{ fontStretch: "80%" }}>{big}</text>
      <rect x="7" y={line2 ? 60 : 70} width="146" height={line2 ? 43 : 33} fill={`url(#${id}-rim)`} />
      <text x="80" y={line2 ? 79 : 93} textAnchor="middle" fontFamily="var(--font)" fontWeight="800" fontSize="17" fill="#121212">{line1}</text>
      {line2 && <text x="80" y="97" textAnchor="middle" fontFamily="var(--font)" fontWeight="800" fontSize="13" fill="#121212">{line2}</text>}
    </svg>
  );
}

/* ---------- 512 GB microSD rozeti ---------- */
export function StorageBadge() {
  return (
    <svg className="rail-art" viewBox="0 0 120 96" role="img" aria-label="512 GB'a kadar microSD desteği">
      <path d="M30 8h44l16 16v62a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#111" />
      <path d="M26 58h64v28a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4z" fill="var(--blue)" />
      <g fill="#c9a24a">{[36, 44, 52, 60, 68].map((x) => <rect key={x} x={x} y="13" width="5" height="12" rx="1.2" />)}</g>
      <text x="58" y="46" textAnchor="middle" fill="#fff" fontFamily="var(--font)" fontWeight="600" fontSize="10">microSD</text>
      <text x="58" y="80" textAnchor="middle" fill="#fff" fontFamily="var(--font)" fontWeight="800" fontSize="17">512</text>
      <text x="100" y="80" textAnchor="middle" fill="var(--blue)" fontFamily="var(--font)" fontWeight="800" fontSize="15">GB</text>
    </svg>
  );
}

/* ---------- Döngüsel kayıt logosu ---------- */
export function LoopBadge() {
  return (
    <svg className="rail-art" viewBox="0 0 96 96" role="img" aria-label="Döngüsel kayıt">
      <circle cx="48" cy="48" r="30" fill="none" stroke="#111" strokeWidth="7" strokeDasharray="150 39" strokeLinecap="round" transform="rotate(-60 48 48)" />
      <path d="M78 22v20H58" fill="none" stroke="var(--blue)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="48" r="11" fill="var(--rec)" />
      <circle cx="48" cy="48" r="17" fill="none" stroke="var(--rec)" strokeOpacity=".25" strokeWidth="4" />
    </svg>
  );
}

/* ---------- 24 saat park rozeti ---------- */
export function ParkBadge() {
  return (
    <svg className="rail-art" viewBox="0 0 96 96" role="img" aria-label="24 saat park modu">
      <circle cx="48" cy="48" r="36" fill="none" stroke="#111" strokeWidth="6" />
      <g stroke="#111" strokeWidth="3" strokeLinecap="round">{Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6; return <path key={i} d={`M${48 + Math.sin(a) * 28} ${48 - Math.cos(a) * 28}L${48 + Math.sin(a) * 31} ${48 - Math.cos(a) * 31}`} />; })}</g>
      <path d="M48 48V24M48 48l14 9" stroke="var(--blue)" strokeWidth="6" strokeLinecap="round" />
      <rect x="54" y="58" width="34" height="30" rx="8" fill="var(--blue)" />
      <text x="71" y="80" textAnchor="middle" fill="#fff" fontFamily="var(--font)" fontWeight="800" fontSize="20">P</text>
    </svg>
  );
}

/* ---------- GPS ikonu (kullanıcı ikon setiyle aynı stilde) ---------- */
export function GpsTileIcon() {
  return (
    <svg className="cap-icon" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M60 104s-30-28-30-52a30 30 0 0 1 60 0c0 24-30 52-30 52z" fill="none" stroke="#2b2f36" strokeWidth="9" strokeLinejoin="round" />
      <circle cx="60" cy="52" r="11" fill="var(--blue)" />
      <path d="M22 102h24M74 102h24" stroke="#2b2f36" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Türkçe ikonu ---------- */
export function TurkishTileIcon() {
  return (
    <svg className="cap-icon" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M22 24h62a10 10 0 0 1 10 10v36a10 10 0 0 1-10 10H50L32 96V80H22a10 10 0 0 1-10-10V34a10 10 0 0 1 10-10z" fill="none" stroke="#2b2f36" strokeWidth="8" strokeLinejoin="round" />
      <text x="53" y="64" textAnchor="middle" fill="var(--blue)" fontFamily="var(--font)" fontWeight="800" fontSize="30">TR</text>
    </svg>
  );
}

/* ---------- Ekran: arka fotoğraf + açık ekranda canlı kayıt ---------- */
export function LiveScreen({ menu = false }: { menu?: boolean }) {
  return (
    <div className="live-screen">
      <Image src="/media/v30-screen-back-full.webp" alt="TEKDEN V30 3.2 inç IPS ekran" width={1448} height={1086} sizes="(max-width: 860px) 100vw, 55vw" />
      <div className="live-screen__display" aria-hidden="true">
        {menu ? (
          <div className="device-menu">
            <div className="device-menu__head"><span>Ayarlar</span></div>
            <ul>
              <li className="is-active"><span>Video çözünürlüğü</span><b>›</b></li>
              <li><span>Döngüsel kayıt</span><b>›</b></li>
              <li><span>G-Sensor</span><b>›</b></li>
              <li><span>Park modu</span><b>›</b></li>
              <li><span>Dil</span><b>Türkçe</b></li>
            </ul>
          </div>
        ) : (
          <>
            <RoadScene mood="day" />
            <span className="live-screen__osd live-screen__osd--tl"><b className="vf-rec" />REC</span>
            <span className="live-screen__osd live-screen__osd--tr">4K</span>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Paylaşım ikonları ---------- */
const brands = [
  { name: "WhatsApp", icon: siWhatsapp },
  { name: "Instagram", icon: siInstagram },
  { name: "YouTube", icon: siYoutube },
];
export function ShareRow() {
  return (
    <ul className="share-row" aria-label="Kolay paylaşım">
      {brands.map(({ name, icon }) => (
        <li key={name}><span className="share-row__icon" style={{ color: `#${icon.hex}` }}><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d={icon.path} fill="currentColor" /></svg></span>{name}</li>
      ))}
      <li><span className="share-row__icon share-row__icon--gallery"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="9" cy="10" r="2" fill="currentColor" /><path d="m4 18 5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M17 1.5v5m-2.2-2.2L17 6.5l2.2-2.2" stroke="var(--blue)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Galeriye kaydet</li>
    </ul>
  );
}
