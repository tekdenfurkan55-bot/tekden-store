import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductGallery } from "@/components/product-gallery";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { Viewfinder } from "@/components/viewfinder";
import { CameraFrontIcon, CameraRearIcon, GpsIcon, HdrIcon, LanguageIcon, MicIcon, ParkingIcon, ScreenIcon, WifiIcon } from "@/components/icons";
import { LiveScreen } from "@/components/feature-art";
import { PriceTag } from "@/components/price-tag";
import { SpecTable } from "@/components/spec-table";
import { TrustBadges } from "@/components/trust-badges";
import { faqs } from "@/lib/content";
import { v30 } from "@/lib/product";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN V30 4K Araç Kamerası | Wi-Fi, GPS, HDR",
  description: "TEKDEN V30 4K araç kamerası; 1080P arka kamera, Wi-Fi, GPS, HDR, G-Sensor ve OBD ile 24 saat park modu desteği.",
  alternates: { canonical: "/urun/v30" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: v30.tagline, url: "/urun/v30", type: "website", images: [{ url: v30.image, alt: v30.images[0].alt }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: v30.tagline, images: [v30.image] },
};

const productSchema = { "@context": "https://schema.org", "@type": "Product", name: v30.name, image: v30.images.map((item) => absoluteUrl(item.src)), description: v30.tagline, sku: v30.sku, model: "V30", brand: { "@type": "Brand", name: "TEKDEN" }, offers: { "@type": "Offer", url: absoluteUrl("/urun/v30"), priceCurrency: "TRY", price: "4499", availability: "https://schema.org/InStock" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() }, { "@type": "ListItem", position: 2, name: "V30", item: absoluteUrl("/urun/v30") }] };

const keyFeatures = [
  [CameraFrontIcon, "4K ön kamera, GalaxyCore GC4653 sensör"],
  [CameraRearIcon, "1080P Full HD arka kamera"],
  [ScreenIcon, "3.2 inç IPS ekran"],
  [WifiIcon, "Wi-Fi ve Viidure uygulaması ile telefondan erişim"],
  [GpsIcon, "Dahili GPS, ayrı aparat gerekmez"],
  [HdrIcon, "HDR ile dengeli görüntü"],
  [MicIcon, "Sesli kayıt"],
  [LanguageIcon, "Türkçe dil desteği"],
  [ParkingIcon, "24 saat park modu (OBD Park Kiti ile)"],
] as const;

export default function V30ProductPage() {
  return (
    <>
      <StructuredData data={[productSchema, breadcrumbSchema]} />
      <SiteHeader />
      <main className="product-page">
        <nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><span>/</span><span>V30</span></nav>
        <section className="product-main">
          <ProductGallery images={v30.images} />
          <div className="product-purchase" id="satinal">
            <h1 className="product-title">TEKDEN V30 4K Ön ve Arka Araç Kamerası</h1>
            <PriceTag price={v30.price} compareAt={v30.compareAt} size="lg" className="product-price" />
            <h2 className="key-features__title">Öne çıkan özellikler</h2>
            <ul className="key-features">
              {keyFeatures.map(([Icon, text]) => <li key={text}><span className="key-features__icon"><Icon size={22} /></span>{text}</li>)}
            </ul>
            <AddToCartPanel />
            <TrustBadges />
            <p className="product-fineprint">microSD kart kutuya dahil değildir, 512 GB&apos;a kadar desteklenir.</p>
          </div>
        </section>
        <section className="product-story">
          <div><h2>Önde 4K. Arkada 1080P.</h2><p>Yolun önünü ve arkasını aynı anda kaydedin. GC4653 sensör ve HDR, ışık değiştiğinde görüntüyü dengeler.</p></div>
          <div className="product-story__visuals">
            <Viewfinder tone="dark" live={false} channel="ÖN 4K"><ProductMedia src="/products/v30-side-ports.webp" alt="TEKDEN V30 ön kamera" tone="dark" label="Ön kamera" /></Viewfinder>
            <Viewfinder tone="dark" live={false} channel="ARKA 1080P"><ProductMedia src="/products/v30-rear.webp" alt="TEKDEN V30 1080P arka kamera" tone="dark" label="Arka kamera" /></Viewfinder>
          </div>
        </section>
        <section className="screen-feature screen-feature--product">
          <div className="screen-feature__copy">
            <h2>3.2 inç IPS ekran</h2>
            <p>Kaydı anında cihaz ekranından izleyin. Görüntü açısını kurulum sırasında ekrana bakarak kolayca ayarlayın.</p>
          </div>
          <LiveScreen />
        </section>
        <section className="product-specs"><h2 className="section-title">Teknik özellikler</h2><SpecTable rows={v30.specifications} /></section>
        <section className="faq-section"><h2 className="section-title">Sık sorulan sorular</h2><Faq items={faqs} /></section>
      </main>
      <div className="mobile-buy-bar"><div><small>TEKDEN V30</small><PriceTag price={v30.price} compareAt={v30.compareAt} size="sm" /></div><a className="button button--primary" href="#satinal">Satın al</a></div>
      <SiteFooter />
    </>
  );
}
