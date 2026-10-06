"use client";

import { useEffect, useState } from "react";

type ViewfinderProps = {
  children: React.ReactNode;
  channel?: string;
  tone?: "light" | "dark";
  live?: boolean;
  className?: string;
};

function stamp(date: Date) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(date.getDate())}.${p(date.getMonth() + 1)}.${date.getFullYear()}  ${p(date.getHours())}:${p(date.getMinutes())}:${p(date.getSeconds())}`;
}

/** Araç kamerası kayıt ekranı çerçevesi: köşe işaretleri, REC, saat ve konum satırı. */
export function Viewfinder({ children, channel = "ÖN 4K", tone = "light", live = true, className = "" }: ViewfinderProps) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    setNow(stamp(new Date()));
    if (!live) return;
    const timer = window.setInterval(() => setNow(stamp(new Date())), 1000);
    return () => window.clearInterval(timer);
  }, [live]);

  return (
    <div className={`viewfinder viewfinder--${tone} ${className}`}>
      <div className="viewfinder__frame">{children}</div>
      <div className="viewfinder__osd" aria-hidden="true">
        <i className="vf-corner vf-corner--tl" /><i className="vf-corner vf-corner--tr" /><i className="vf-corner vf-corner--bl" /><i className="vf-corner vf-corner--br" />
        <span className="vf-top-left"><b className="vf-rec" />REC</span>
        <span className="vf-top-right">{now ?? " "}</span>
        <span className="vf-bottom-left">TEKDEN V30  {channel}</span>
        <span className="vf-bottom-right">41.0082 N  28.9784 E</span>
      </div>
    </div>
  );
}
