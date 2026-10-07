import { discountPercent, formatPrice } from "@/lib/product";

type PriceTagProps = { price: number; compareAt?: number; size?: "sm" | "md" | "lg"; tone?: "light" | "dark"; className?: string };

/** İndirimli fiyat: yeni fiyat lacivert ve büyük, eski fiyat üstü çizili, yanında oran etiketi. */
export function PriceTag({ price, compareAt, size = "md", tone = "light", className = "" }: PriceTagProps) {
  const pct = discountPercent(price, compareAt);
  return (
    <span className={`price-tag price-tag--${size} price-tag--${tone} ${className}`}>
      <strong className="price-tag__now">{formatPrice(price)}</strong>
      {pct > 0 && compareAt && (
        <>
          <s className="price-tag__was"><span className="sr-only">Önceki fiyat: </span>{formatPrice(compareAt)}</s>
          <span className="price-tag__badge">%{pct} indirim</span>
        </>
      )}
    </span>
  );
}
