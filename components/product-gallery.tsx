"use client";

import { useState } from "react";
import { ProductMedia } from "./product-media";

type GalleryImage = { src: string; alt: string };

export function ProductGallery({ images }: { images: readonly GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const image = images[active];

  return <div className="product-gallery"><button className="gallery-primary" type="button" onClick={() => setZoomed(true)} aria-label="Ürün görselini büyüt"><ProductMedia src={image.src} alt={image.alt} priority label={image.alt} /><span>Görseli büyüt</span></button><div className="gallery-thumbs" aria-label="Ürün görselleri">{images.map((item, index) => <button className={active === index ? "is-active" : ""} type="button" key={item.src} onClick={() => setActive(index)} aria-label={`${index + 1}. görsel: ${item.alt}`}><ProductMedia src={item.src} alt="" compact label={item.alt} /></button>)}</div>{zoomed && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Büyük ürün görseli"><button type="button" onClick={() => setZoomed(false)} aria-label="Görseli kapat">Kapat ×</button><ProductMedia src={image.src} alt={image.alt} label={image.alt} /></div>}</div>;
}
