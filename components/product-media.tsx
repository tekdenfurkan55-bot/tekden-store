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
  sizes?: string;
};

export function ProductMedia({
  src,
  alt = "TEKDEN V30 4K araç kamerası",
  label = "V30",
  tone = "light",
  compact = false,
  priority = false,
  contain = true,
  sizes,
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
          sizes={sizes ?? (compact ? "(max-width: 900px) 40vw, 20vw" : "(max-width: 900px) 100vw, 60vw")}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="media-fallback" role="img" aria-label={alt}>
          <span>V30</span>
          {!compact && <small>{label}</small>}
        </div>
      )}
    </div>
  );
}
