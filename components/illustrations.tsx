"use client";

import Image from "next/image";
import { PadlockSolid } from "./icons";

/* Temsili sahneler. Hepsi kodla çizildi; gerçek kayıt görüntüsü değildir. */

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

