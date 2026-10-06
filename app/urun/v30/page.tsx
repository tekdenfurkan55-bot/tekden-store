import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductGallery } from "@/components/product-gallery";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { faqs } from "@/lib/content";
import { formatPrice, v30 } from "@/lib/product";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN V30 4K Araç Kamerası | Wi-Fi, GPS, HDR",
  description: "TEKDEN V30 4K araç kamerası; 1080P arka kamera, Wi-Fi, GPS, HDR, G-Sensor ve OBD ile 24 saat park modu desteği.",
  alternates: { canonical: "/urun/v30" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: v30.tagline, url: "/urun/v30", type: "website", images: [{ url: v30.image, alt: v30.images[0].alt }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: v30.tagline, images: [v30.image] },
};

const productSchema = { "@context": "https://schema.org", "@type": "Product", name: v30.name, image: v30.images.map((item) => absoluteUrl(item.src)), description: v30.tagline, sku: v30.sku, model: "V30", brand: { "@type": "Brand", name: "TEKDEN" }, offers: { "@type": "Offer", url: absoluteUrl("/urun/v30"), priceCurrency: "TRY", price: "4500", availability: "https://schema.org/InStock" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() }, { "@type": "ListItem", position: 2, name: "V30", item: absoluteUrl("/urun/v30") }] };

export default function V30ProductPage() {
  return <><StructuredData data={[productSchema, breadcrumbSchema]} /><SiteHeader /><main className="product-page"><nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana Sayfa</Link><span>/</span><span>V30</span></nav><section className="product-main"><ProductGallery images={v30.images} /><div className="product-purchase" id="satinal"><p className="eyebrow">TEKDEN TECHNOLOGY</p><h1>TEKDEN <span className="model-mark">V30</span></h1><p className="product-category">4K Araç Kamerası</p><strong className="product-price">{formatPrice(v30.price)}</strong><p className="product-lead">4K ön kayıt, 1080P arka kamera ve akıllı sürüş kayıt özellikleri.</p><ul className="advantage-list">{v30.highlights.map((item) => <li key={item}>{item}</li>)}</ul><AddToCartPanel /><div className="trust-row"><span>Ön + Arka Kayıt</span><span>Kolay Kurulum</span><span>V30 Desteği</span></div></div></section><section className="product-story"><div><p className="eyebrow">DUAL CHANNEL</p><h2>Ön 4K.<br />Arka 1080P.</h2><p>Yolun önünü ve arkasını aynı anda kaydedin.</p></div><div className="product-story__visuals"><ProductMedia src={v30.images[0].src} alt={v30.images[0].alt} tone="dark" label="V30 ana kamera" /><ProductMedia src={v30.images[2].src} alt={v30.images[2].alt} tone="dark" compact label="V30 arka kamera" /></div></section><section className="product-specs"><div><p className="eyebrow">TEKNİK ÖZELLİKLER</p><h2>V30&apos;un donanımı.</h2></div><table className="spec-table"><tbody>{v30.specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></section><section className="faq-section"><div className="section-heading"><p className="eyebrow">SIK SORULAN SORULAR</p><h2>Satın almadan önce.</h2></div><Faq items={faqs} /></section></main><div className="mobile-buy-bar"><div><small>TEKDEN V30</small><strong>{formatPrice(v30.price)}</strong></div><a className="button button--primary" href="#satinal">Satın Al</a></div><SiteFooter /></>;
}
