import type { Metadata } from "next";
import Link from "next/link";
import { SingleProductPurchase } from "@/components/add-to-cart";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { formatPrice, obdKit, selections } from "@/lib/product";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN OBD Type-C Park Kiti | V30 Park Modu",
  description: "TEKDEN V30 ile 24 saat park modu kullanımı için OBD Type-C Park Kiti. V30 ile uyumlu park modu güç bağlantısı.",
  alternates: { canonical: "/urun/obd-park-kiti" },
  openGraph: { title: obdKit.name, description: obdKit.description, url: "/urun/obd-park-kiti", type: "website" },
  twitter: { card: "summary", title: obdKit.name, description: obdKit.description },
};

const productSchema = { "@context": "https://schema.org", "@type": "Product", name: obdKit.name, description: obdKit.description, sku: obdKit.sku, brand: { "@type": "Brand", name: "TEKDEN" }, offers: { "@type": "Offer", url: absoluteUrl("/urun/obd-park-kiti"), priceCurrency: "TRY", price: "1199", availability: "https://schema.org/InStock" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() }, { "@type": "ListItem", position: 2, name: "OBD Park Kiti", item: absoluteUrl("/urun/obd-park-kiti") }] };

export default function ObdProductPage() {
  return <><StructuredData data={[productSchema, breadcrumbSchema]} /><SiteHeader /><main className="product-page obd-page"><nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana Sayfa</Link><span>/</span><span>OBD Park Kiti</span></nav><section className="product-main"><div className="product-gallery"><div className="gallery-primary"><ProductMedia label="OBD Type-C Park Kiti ürün görseli" /></div></div><div className="product-purchase"><p className="eyebrow">TEKDEN / PARK MODU</p><h1>{obdKit.name}</h1><strong className="product-price">{formatPrice(obdKit.price)}</strong><p className="product-lead">{obdKit.description}</p><dl className="obd-facts"><div><dt>Uyumluluk</dt><dd>{obdKit.compatibility}</dd></div><div><dt>Kullanım</dt><dd>24 saat park modu</dd></div><div><dt>Bağlantı</dt><dd>OBD / Type-C</dd></div></dl><SingleProductPurchase id="obd" /><div className="bundle-callout"><span>Birlikte alın</span><strong>V30 + OBD Park Kiti</strong><b>{formatPrice(selections["v30-obd"].price)}</b><Link className="text-link" href="/urun/v30#satinal">Paketi İncele <span>→</span></Link></div></div></section><section className="obd-explainer"><div><p className="eyebrow">PARK MODU BAĞLANTISI</p><h2>V30 park halindeyken de kayıt için hazır.</h2></div><p>OBD Type-C Park Kiti, V30&apos;a park halinde güç sağlayarak 24 saat park modu kullanımını mümkün kılar. Elektriksel değerler ve kablo uzunluğu gibi doğrulanmamış teknik bilgiler sunulmamaktadır.</p></section></main><SiteFooter /></>;
}
