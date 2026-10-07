import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-logo ${light ? "brand-logo--light" : ""}`} href="/" aria-label="TEKDEN Technology ana sayfa">
      <Image src={light ? "/brand/tekden-logo-white.webp" : "/brand/tekden-logo.webp"} alt="TEKDEN Technology" width={800} height={193} priority={!light} />
    </Link>
  );
}

export function V30Mark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return <Image className={`v30-mark ${className}`} src={light ? "/brand/v30-logo-white.webp" : "/brand/v30-logo.webp"} alt="V30" width={800} height={166} />;
}
