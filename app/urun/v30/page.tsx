import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductGallery } from "@/components/product-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { CameraFrontIcon, CameraRearIcon, GpsIcon, HdrIcon, LanguageIcon, MicIcon, ScreenIcon, WifiIcon } from "@/components/icons";
import { V30Showcase } from "@/components/v30-showcase";
import { PriceTag } from "@/components/price-tag";
import { SpecTable } from "@/components/spec-table";
import { TrustBadges } from "@/components/trust-badges";
import { faqs } from "@/lib/content";
import { v30 } from "@/lib/product";
import { breadcrumb, faqSchema, v30ProductSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TEKDEN V30 4K Ön ve Arka Araç Kamerası | Wi-Fi, GPS, HDR",
  description: "TEKDEN V30: gerçek 4K ön, 1080P arka kamera, 3.2 inç IPS ekran, Wi-Fi (Viidure), dahili GPS, HDR, ses kaydı ve OBD ile 24 saat park modu. 4.499 TL, ücretsiz kargo.",
  alternates: { canonical: "/urun/v30" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: v30.tagline, url: "/urun/v30", type: "website", images: [{ url: v30.image, alt: v30.images[0].alt }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: v30.tagline, images: [v30.image] },
};


const keyFeatures = [
  [CameraFrontIcon, "4K ön kamera, GalaxyCore GC4653 sensör"],
  [CameraRearIcon, "1080P Full HD arka kamera"],
  [ScreenIcon, "3.2 inç IPS ekran"],
  [WifiIcon, "Wi-Fi ve Viidure uygulaması ile telefondan erişim"],
  [GpsIcon, "Dahili GPS, ayrı aparat gerekmez"],
  [HdrIcon, "HDR ile dengeli görüntü"],
  [MicIcon, "Sesli kayıt"],
  [LanguageIcon, "Türkçe dil desteği"],
] as const;

export default function V30ProductPage() {
  return (
    <>
      <StructuredData data={[v30ProductSchema, breadcrumb([["V30 4K Araç Kamerası", "/urun/v30"]]), faqSchema(faqs)]} />
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
        <V30Showcase />
        <section className="product-specs"><h2 className="section-title">Teknik özellikler</h2><SpecTable rows={v30.specifications} /></section>
        <section className="faq-section"><h2 className="section-title">Sık sorulan sorular</h2><Faq items={faqs} /></section>
      </main>
      <div className="mobile-buy-bar"><div><small>TEKDEN V30</small><PriceTag price={v30.price} compareAt={v30.compareAt} size="sm" /></div><a className="button button--primary" href="#satinal">Satın al</a></div>
      <SiteFooter />
    </>
  );
}
