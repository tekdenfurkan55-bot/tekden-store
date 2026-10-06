"use client";

import { useEffect, useState } from "react";
import { ProductMedia } from "./product-media";
import { Viewfinder } from "./viewfinder";

type GalleryImage = { src: string; alt: string };

export function ProductGallery({ images }: { images: readonly GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const image = images[active];

  useEffect(() => {
    if (!zoomed) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setZoomed(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [zoomed]);

  return (
    <div className="product-gallery">
      <button className="gallery-primary" type="button" onClick={() => setZoomed(true)} aria-label="Ürün görselini büyüt">
        <Viewfinder><ProductMedia src={image.src} alt={image.alt} priority label="Ürün fotoğrafı" /></Viewfinder>
        <span>Büyüt</span>
      </button>
      <div className="gallery-thumbs" aria-label="Ürün görselleri">
        {images.map((item, index) => <button className={active === index ? "is-active" : ""} type="button" key={item.src} onClick={() => setActive(index)} aria-label={`${index + 1}. görsel: ${item.alt}`} aria-pressed={active === index}><ProductMedia src={item.src} alt="" compact /></button>)}
      </div>
      {zoomed && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Büyük ürün görseli"><button type="button" onClick={() => setZoomed(false)} autoFocus>Kapat</button><ProductMedia src={image.src} alt={image.alt} label="Ürün fotoğrafı" /></div>}
    </div>
  );
}
