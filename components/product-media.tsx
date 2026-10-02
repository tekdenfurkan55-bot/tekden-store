type ProductMediaProps = {
  label?: string;
  tone?: "light" | "dark" | "blue";
  compact?: boolean;
};

export function ProductMedia({
  label = "X30 ürün görseli",
  tone = "light",
  compact = false,
}: ProductMediaProps) {
  return (
    <div className={`product-media product-media--${tone} ${compact ? "product-media--compact" : ""}`}>
      <div className="media-cross" aria-hidden="true" />
      <div className="media-label">
        <span>TEKDEN X30</span>
        <small>{label} — gerçek ürün fotoğrafı eklenecek</small>
      </div>
    </div>
  );
}
