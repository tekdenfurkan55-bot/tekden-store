"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Mode = "day" | "night";
type Shot = { src: string; zoom: string; plate: string; alt: string; box: [number, number, number, number] };

/** Plaka konumları görsele göre yüzde olarak (x0, y0, x1, y1). Görseller 4:3. */
const cams = [
  {
    id: "on",
    title: "Ön kamera",
    res: "4K",
    resExtra: "",
    channel: "ÖN 4K",
    shots: {
      day: { src: "/media/plaka/on-gunduz.webp", zoom: "/media/plaka/on-gunduz-plaka.webp", plate: "34 KLM 482", alt: "TEKDEN V30 ön kamera gündüz kaydı, İstanbul'da öndeki aracın plakası net okunuyor", box: [45.12, 71.11, 56.25, 74.25] },
      night: { src: "/media/plaka/on-gece.webp", zoom: "/media/plaka/on-gece-plaka.webp", plate: "34 ADZ 862", alt: "TEKDEN V30 ön kamera gece kaydı, sokak ışıklarında öndeki aracın plakası net okunuyor", box: [46.0, 54.9, 56.74, 58.43] },
    },
  },
  {
    id: "arka",
    title: "Arka kamera",
    res: "1080P",
    resExtra: " Full HD",
    channel: "ARKA 1080P",
    shots: {
      day: { src: "/media/plaka/arka-gunduz.webp", zoom: "/media/plaka/arka-gunduz-plaka.webp", plate: "35 HDE 296", alt: "TEKDEN V30 arka kamera gündüz kaydı, arkadaki aracın plakası net okunuyor", box: [43.82, 75.61, 58.82, 80.0] },
      night: { src: "/media/plaka/arka-gece.webp", zoom: "/media/plaka/arka-gece-plaka.webp", plate: "34 BKR 524", alt: "TEKDEN V30 arka kamera gece kaydı, E-5 trafiğinde arkadaki aracın plakası net okunuyor", box: [45.6, 73.49, 56.07, 76.98] },
    },
  },
] satisfies { id: string; title: string; res: string; channel: string; resExtra: string; shots: Record<Mode, Shot> }[];

/* Büyütme kutusunun yeri (yüzde, 4:3 kadraj içinde). */
const ZOOM = { left: 5, top: 13, width: 46, ratio: 700 / 210 };

function Callout({ shot, active }: { shot: Shot; active: boolean }) {
  const [x0, y0, x1, y1] = shot.box;
  // 400x300 koordinat sistemi (4:3) — ok başı bozulmasın diye.
  const px = (x0 + x1) / 2 * 4, py = y0 * 3 - 4;
  const bx = (ZOOM.left + ZOOM.width / 2) * 4, by = ZOOM.top * 3 + (ZOOM.width * 4) / ZOOM.ratio + 3;
  const id = `ok${useId().replace(/:/g, "")}`;
  return (
    <div className={active ? "plate-cam__layer is-active" : "plate-cam__layer"} aria-hidden={!active}>
      <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 860px) 100vw, 50vw" className="plate-cam__img" />
      <span className="plate-cam__mark" style={{ left: `${x0 - 1}%`, top: `${y0 - 1.4}%`, width: `${x1 - x0 + 2}%`, height: `${y1 - y0 + 2.8}%` }} />
      <svg className="plate-cam__line" viewBox="0 0 400 300" aria-hidden="true">
        <defs>
          <marker id={id} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#fff" />
          </marker>
        </defs>
        <circle cx={px} cy={py + 4} r="2.6" fill="#fff" />
        <path d={`M${px} ${py} L${bx} ${by}`} stroke="#fff" strokeWidth="1.6" fill="none" markerEnd={`url(#${id})`} />
      </svg>
      <figure className="plate-cam__zoom" style={{ left: `${ZOOM.left}%`, top: `${ZOOM.top}%`, width: `${ZOOM.width}%` }}>
        <figcaption>Net plaka okuma</figcaption>
        <Image src={shot.zoom} alt={`Büyütülmüş plaka: ${shot.plate}`} width={700} height={210} sizes="(max-width: 860px) 46vw, 23vw" />
      </figure>
    </div>
  );
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor" /><g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">{[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <line key={a} x1="12" y1="2.8" x2="12" y2="5" transform={`rotate(${a} 12 12)`} />)}</g></svg>;
}
function MoonIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="currentColor" /></svg>;
}

function PlateCam({ cam }: { cam: (typeof cams)[number] }) {
  const [mode, setMode] = useState<Mode>("day");
  return (
    <article className="plate-cam">
      <header className="plate-cam__head">
        <h3>{cam.title}<span>{cam.res}{cam.resExtra && <em>{cam.resExtra}</em>}</span></h3>
        <div className="day-night" role="group" aria-label={`${cam.title} gündüz veya gece kaydı`}>
          <button type="button" aria-pressed={mode === "day"} onClick={() => setMode("day")}><SunIcon />Gündüz</button>
          <button type="button" aria-pressed={mode === "night"} onClick={() => setMode("night")}><MoonIcon />Gece</button>
        </div>
      </header>
      <div className={`plate-cam__frame plate-cam__frame--${mode}`}>
        <Callout shot={cam.shots.day} active={mode === "day"} />
        <Callout shot={cam.shots.night} active={mode === "night"} />
        <span className="plate-cam__osd"><b className="vf-rec" />{cam.channel}</span>
      </div>
      <p className="plate-cam__note">{mode === "day" ? "Gündüz: plaka ve detaylar net." : "Gece de net görüntü: farlar ve sokak ışıklarında plaka seçilebilir."}</p>
    </article>
  );
}

export function PlateCams() {
  return (
    <div className="plate-cams">
      {cams.map((cam) => <PlateCam key={cam.id} cam={cam} />)}
    </div>
  );
}
