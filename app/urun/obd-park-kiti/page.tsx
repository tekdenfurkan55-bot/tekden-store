import type { Metadata } from "next";
import Link from "next/link";
import { SingleProductPurchase } from "@/components/add-to-cart";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { TrustBadges } from "@/components/trust-badges";
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
  return (
    <>
      <StructuredData data={[productSchema, breadcrumbSchema]} />
      <SiteHeader />
      <main className="product-page obd-page">
        <nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><span>/</span><span>OBD Park Kiti</span></nav>
        <section className="product-main">
          <div className="product-gallery"><div className="gallery-primary"><ProductMedia src={obdKit.image} alt={obdKit.name} label="Ürün fotoğrafı" fallback="OBD" /></div></div>
          <div className="product-purchase">
            <h1>{obdKit.name}</h1>
            <p className="product-category">V30 için 24 saat park modu</p>
            <strong className="product-price">{formatPrice(obdKit.price)}</strong>
            <p className="product-lead">{obdKit.description}</p>
            <dl className="obd-facts"><div><dt>Uyumluluk</dt><dd>{obdKit.compatibility}</dd></div><div><dt>Kullanım</dt><dd>24 saat park modu</dd></div><div><dt>Bağlantı</dt><dd>OBD / Type-C</dd></div></dl>
            <SingleProductPurchase id="obd" />
            <TrustBadges />
            <div className="bundle-callout"><span>Henüz V30&apos;unuz yoksa</span><strong>V30 + OBD Park Kiti</strong><b>{formatPrice(selections["v30-obd"].price)}</b><Link className="text-link" href="/urun/v30#satinal">Paketi seç</Link></div>
          </div>
        </section>
        <section className="obd-explainer">
          <div>
            <div><h2>Kontak kapansa da kayıt hazır.</h2><small>Elektriksel değerler ve kablo uzunluğu gibi doğrulanmamış teknik bilgiler sunulmamaktadır.</small></div>
            <ol className="parking-timeline" aria-label="Park modu nasıl çalışır">
              <li><span>Kontak kapanır</span><p>OBD kiti V30&apos;a güç vermeye devam eder.</p></li>
              <li><span>Park modu başlar</span><p>Time-Lapse ile uzun süreyi az alanla kaydeder.</p></li>
              <li><span>Darbe algılanır</span><p>G-Sensor ilgili kaydın korunmasına yardımcı olur.</p></li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
