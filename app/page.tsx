import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { V30Showcase } from "@/components/v30-showcase";
import { V30Mark } from "@/components/brand-logo";
import { GoldBadge, LoopBadge, ParkBadge, StorageBadge } from "@/components/feature-art";
import { PriceTag } from "@/components/price-tag";
import { GpsIcon, HdrIcon, ParkingIcon, WifiIcon } from "@/components/icons";
import { SpecTable } from "@/components/spec-table";
import { InstallSteps } from "@/components/install-steps";
import { TrustBadges } from "@/components/trust-badges";
import { faqs } from "@/lib/content";
import { selections, v30 } from "@/lib/product";
import { faqSchema, organizationSchema, v30ProductSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "TEKDEN V30 4K Araç Kamerası | Ön ve Arka Kamera, Wi-Fi, GPS" },
  description: "TEKDEN V30; 4K ön, 1080P arka kamera, Wi-Fi, GPS, HDR ve OBD ile 24 saat park modu desteği sunan ön arka araç kamerası.",
  alternates: { canonical: "/" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: "Gerçek 4K ön, Full HD arka kamera. Wi-Fi, GPS, HDR ve 24 saat park modu.", url: "/", type: "website", images: [{ url: "/media/og-v30.jpg", width: 1200, height: 630, alt: "TEKDEN V30 4K Araç Kamerası" }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: "Yola daha net bakın.", images: ["/media/og-v30.jpg"] },
};


const v30Offer = selections.v30;

export default function HomePage() {
  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema, v30ProductSchema, faqSchema(faqs)]} />
      <SiteHeader />
      <main className="home">
        <section className="banner" aria-labelledby="hero-title">
          <Link className="banner__media" href="/urun/v30" aria-label="TEKDEN V30 4K Araç Kamerası ürün sayfası">
            <picture>
              <source media="(max-width: 860px)" srcSet="/media/hero-v30-mobile.webp" />
              <img src="/media/hero-v30.webp" alt="TEKDEN V30 4K araç kamerası ön cama monteli. Gerçek 4K ön kamera, Full HD arka kamera. Yola daha net bakın." width={1672} height={750} fetchPriority="high" />
            </picture>
          </Link>
          <div className="banner__mobile-copy">
            <Image src="/brand/tekden-logo-white.webp" alt="TEKDEN Technology" width={800} height={193} className="banner__logo" />
            <V30Mark light className="banner__v30" />
            <p className="banner__claim">4K Araç Kamerası</p>
            <p className="banner__sub">Gerçek 4K ön kamera · Full HD arka kamera</p>
            <p className="banner__slogan">Yola <span>daha net</span> bakın.</p>
            <ul className="banner__chips">
              <li><WifiIcon size={22} />Wi-Fi</li>
              <li><GpsIcon size={22} />GPS</li>
              <li><HdrIcon size={22} />HDR</li>
              <li><ParkingIcon size={22} />24 Saat Park Modu</li>
            </ul>
          </div>
          <div className="banner__buy">
            <div className="banner__buy-inner">
              <div className="banner__title">
                <h1 id="hero-title">TEKDEN V30 4K Araç Kamerası</h1>
                <p>Ön 4K + arka 1080P · Wi-Fi · GPS · HDR</p>
              </div>
              <PriceTag price={v30Offer.price} compareAt={v30Offer.compareAt} size="lg" tone="dark" />
              <div className="banner__actions">
                <Link className="button button--primary button--wide" href="#satinal">Satın al</Link>
                <Link className="button button--ghost-light" href="/urun/v30">Ürünü incele</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="spec-rail" aria-label="Öne çıkan özellikler">
          <ul>
            <li><GoldBadge big="4K" line1="ULTRA HD" /><span>Gerçek 4K ön kamera</span></li>
            <li><GoldBadge big="1080P" line1="FULL HD" line2="ARKA KAMERA" /><span>Full HD arka kamera</span></li>
            <li><span className="rail-gc"><Image src="/brand/galaxycore.png" alt="GalaxyCore" width={228} height={34} /><b>GC4653</b></span><span>Görüntü sensörü</span></li>
            <li><StorageBadge /><span>512 GB&apos;a kadar microSD</span></li>
            <li><LoopBadge /><span>Döngüsel kayıt</span></li>
            <li><ParkBadge /><span>24 saat park modu</span></li>
          </ul>
        </section>

        <V30Showcase />

        <section className="buy-section" id="satinal">
          <div className="buy-section__media"><ProductMedia src={v30.images[0].src} alt={v30.images[0].alt} label="Ürün fotoğrafı" /></div>
          <div className="buy-section__panel">
            <h2>Paketinizi seçin.</h2>
            <p>Yalnızca kamera ya da 24 saat park modu için OBD Park Kiti ile birlikte.</p>
            <AddToCartPanel compact />
            <TrustBadges />
            <p className="buy-note">microSD kart kutuya dahil değildir. 512 GB&apos;a kadar kart desteklenir.</p>
          </div>
        </section>

        <section className="install" id="kurulum">
          <h2 className="section-title">Üç adımda kurulum</h2>
          <InstallSteps />
        </section>

        <section className="specs" id="teknik">
          <h2 className="section-title">Teknik özellikler</h2>
          <SpecTable rows={v30.specifications} />
        </section>

        <section className="faq-section" id="sss">
          <h2 className="section-title">Sık sorulan sorular</h2>
          <Faq items={faqs} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
