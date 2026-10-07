import { obdKit, v30, type ThumbPart } from "@/lib/product";
import { ProductMedia } from "./product-media";

const sources: Record<ThumbPart, { src: string; alt: string; fallback: string }> = {
  v30: { src: v30.image, alt: "TEKDEN V30", fallback: "V30" },
  obd: { src: obdKit.image, alt: "OBD Park Kiti", fallback: "OBD" },
};

/** Paket görseli: V30 → kamera, OBD → kit, paket → ikisi birlikte. */
export function SelectionThumb({ parts }: { parts: readonly ThumbPart[] }) {
  return (
    <span className={`selection-thumb selection-thumb--${parts.length}`} aria-hidden="true">
      {parts.map((part) => <span key={part} className="selection-thumb__item"><ProductMedia src={sources[part].src} alt="" compact fallback={sources[part].fallback} /></span>)}
      {parts.length > 1 && <i className="selection-thumb__plus">+</i>}
    </span>
  );
}
