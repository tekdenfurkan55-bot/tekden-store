"use client";

import Image from "next/image";
import { useState } from "react";

type ProductMediaProps = {
  src?: string;
  alt?: string;
  label?: string;
  tone?: "light" | "dark" | "blue";
  compact?: boolean;
  priority?: boolean;
  contain?: boolean;
};

export function ProductMedia({
  src,
  alt = "TEKDEN V30 4K araç kamerası",
  label = "V30 ürün görseli",
  tone = "light",
  compact = false,
  priority = false,
  contain = true,
}: ProductMediaProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div className={`product-media product-media--${tone} ${compact ? "product-media--compact" : ""}`}>
      {showImage ? (
        <Image
          className={contain ? "product-media__image product-media__image--contain" : "product-media__image"}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={compact ? "(max-width: 900px) 75vw, 24vw" : "(max-width: 900px) 100vw, 55vw"}
          onError={() => setFailed(true)}
        />
      ) : (
        <><div className="media-cross" aria-hidden="true" /><div className="media-label"><span>TEKDEN V30</span><small>{label} — özgün ürün fotoğrafı bekleniyor</small></div></>
      )}
    </div>
  );
}
