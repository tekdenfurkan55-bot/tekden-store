"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ProductMedia } from "./product-media";

type GalleryImage = { src: string; alt: string };

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d={dir === "prev" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function ProductGallery({ images }: { images: readonly GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const thumbs = useRef<HTMLDivElement>(null);
  const count = images.length;
  const image = images[active];

  const go = useCallback((step: number) => setActive((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    thumbs.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(false);
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [zoomed, go]);

  return (
    <div className="product-gallery">
      <div className="gallery-stage">
        <button className="gallery-primary" type="button" onClick={() => setZoomed(true)} aria-label="Ürün görselini büyüt">
          <ProductMedia src={image.src} alt={image.alt} priority={active === 0} label="Ürün fotoğrafı" />
          <span className="gallery-zoom-hint">Büyüt</span>
        </button>
        {count > 1 && <>
          <button className="gallery-nav gallery-nav--prev" type="button" onClick={() => go(-1)} aria-label="Önceki görsel"><Arrow dir="prev" /></button>
          <button className="gallery-nav gallery-nav--next" type="button" onClick={() => go(1)} aria-label="Sonraki görsel"><Arrow dir="next" /></button>
          <span className="gallery-count" aria-hidden="true">{active + 1} / {count}</span>
        </>}
      </div>
      {count > 1 && (
        <div className="gallery-thumbs" ref={thumbs} aria-label="Ürün görselleri">
          {images.map((item, index) => <button className={active === index ? "is-active" : ""} data-index={index} type="button" key={item.src} onClick={() => setActive(index)} aria-label={`${index + 1}. görsel: ${item.alt}`} aria-pressed={active === index}><ProductMedia src={item.src} alt="" compact /></button>)}
        </div>
      )}
      {zoomed && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Büyük ürün görseli" onClick={(event) => { if (event.target === event.currentTarget) setZoomed(false); }}>
          <button className="lightbox__close" type="button" onClick={() => setZoomed(false)} aria-label="Kapat" autoFocus>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          <div className="lightbox__stage"><ProductMedia src={image.src} alt={image.alt} label="Ürün fotoğrafı" sizes="100vw" /></div>
          {count > 1 && <>
            <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={() => go(-1)} aria-label="Önceki görsel"><Arrow dir="prev" /></button>
            <button className="lightbox__nav lightbox__nav--next" type="button" onClick={() => go(1)} aria-label="Sonraki görsel"><Arrow dir="next" /></button>
            <span className="lightbox__count">{active + 1} / {count}</span>
          </>}
        </div>,
        document.body,
      )}
    </div>
  );
}
