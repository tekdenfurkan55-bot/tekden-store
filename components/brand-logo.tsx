import Link from "next/link";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-logo ${light ? "brand-logo--light" : ""}`} href="/" aria-label="TEKDEN Technology ana sayfa">
      <span className="brand-logo__name"><b>TEK</b><b className="brand-logo__d">D</b><b>EN</b></span>
      <span className="brand-logo__tech">TECHNOLOGY</span>
    </Link>
  );
}
