import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { PlateCams } from "@/components/plate-cams";
import { V30Mark } from "@/components/brand-logo";
import { ImpactScene, MicroSD, RoadScene, SensorChip, TimelapseStrip } from "@/components/illustrations";
import { GoldBadge, GpsTileIcon, LiveScreen, LoopBadge, ParkBadge, ShareRow, StorageBadge, TurkishTileIcon } from "@/components/feature-art";
import { PriceTag } from "@/components/price-tag";
import { GpsIcon, HdrIcon, ParkingIcon, WifiIcon } from "@/components/icons";
import { SelectionThumb } from "@/components/selection-thumb";
import { SpecTable } from "@/components/spec-table";
import { InstallSteps } from "@/components/install-steps";
import { TrustBadges } from "@/components/trust-badges";
import { faqs } from "@/lib/content";
import { formatPrice, selections, v30 } from "@/lib/product";
import { faqSchema, organizationSchema, v30ProductSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "TEKDEN V30 4K Araç Kamerası | Ön ve Arka Kamera, Wi-Fi, GPS" },
  description: "TEKDEN V30; 4K ön, 1080P arka kamera, Wi-Fi, GPS, HDR ve OBD ile 24 saat park modu desteği sunan ön arka araç kamerası.",
  alternates: { canonical: "/" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: "Gerçek 4K ön, Full HD arka kamera. Wi-Fi, GPS, HDR ve 24 saat park modu.", url: "/", type: "website", images: [{ url: "/media/og-v30.jpg", width: 1200, height: 630, alt: "TEKDEN V30 4K Araç Kamerası" }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: "Yola daha net bakın.", images: ["/media/og-v30.jpg"] },
};


const capabilities = [
  { icon: "/icons/wifi.png", title: "Wi-Fi", text: "Viidure uygulaması ile kayıtlarınıza telefonunuzdan ulaşın." },
  { icon: null, title: "GPS", text: "Konum bilgisi cihazın içinde. Ayrı bir aparat gerekmez." },
  { icon: "/icons/hdr.png", title: "HDR", text: "Güneşe karşı ya da tünel çıkışında dengeli görüntü." },
  { icon: "/icons/ses-kaydi.png", title: "Sesli kayıt", text: "Görüntüyle birlikte ses de kaydedilir." },
  { icon: "/icons/g-sensor.png", title: "G-Sensor", text: "Darbe algılandığında ilgili kaydın korunmasına yardımcı olur." },
  { icon: "/icons/dongusel-kayit.png", title: "Döngüsel kayıt", text: "Kart dolduğunda en eski normal kayıtların üzerine yazar." },
  { icon: "/icons/time-lapse.png", title: "Time-Lapse", text: "Park halinde uzun süreyi daha az alanla kaydeder." },
  { icon: "tr", title: "Türkçe dil desteği", text: "Menüler Türkçe, kurulum ve kullanım kolay." },
] as const;

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

        <section className="cams" id="ozellikler" aria-labelledby="cams-title">
          <div className="cams-head">
            <h2 id="cams-title">Plakayı gündüz de gece de okuyun.</h2>
            <p>Önde 4K, arkada 1080P Full HD kayıt. GC4653 sensör ve HDR, farlar ve sokak ışıklarında da dengeli görüntü sağlar.</p>
          </div>
          <PlateCams />
        </section>

        <section className="sensor">
          <div className="sensor-head">
            <h2>Gelişmiş görüntü performansı</h2>
            <p>GalaxyCore GC4653 sensör ve HDR ile farklı ışık koşullarında daha dengeli kayıt.</p>
          </div>
          <div className="sensor-body">
            <SensorChip />
            <dl className="sensor-stats">
              <div><dt>4K</dt><dd>Ön kamera kaydı</dd></div>
              <div><dt>HDR</dt><dd>Parlak ve karanlık alanlarda dengeli görüntü</dd></div>
              <div><dt>SA230D</dt><dd>Görüntü işlemcisi</dd></div>
            </dl>
          </div>
          <div className="sensor-scene">
            <RoadScene mood="night" plate />
            <span className="sensor-badge"><b className="vf-rec" />Ön <strong>4K</strong> HDR</span>
            <small>Temsili görsel</small>
          </div>
        </section>

        <section className="wifi">
          <div className="wifi-copy">
            <h2>Kayıtlarınıza telefonunuzdan ulaşın.</h2>
            <p><strong>Viidure</strong> uygulaması ile Wi-Fi üzerinden kayıtları telefonunuzda izleyin. Dahili GPS ile rotanız da kayıtta.</p>
            <h3 className="share-title">Kolay paylaşım</h3>
            <p className="share-lead">Kayıtları galeriye kaydedin, WhatsApp, Instagram ve YouTube&apos;da kolayca paylaşın.</p>
            <ShareRow />
          </div>
          <div className="wifi-phone">
            <Image src="/media/viidure-phone.webp" alt="Viidure uygulamasında canlı kamera görüntüsü ve GPS rota kaydı" width={389} height={814} sizes="(max-width: 860px) 60vw, 320px" />
          </div>
        </section>

        <section className="screen-feature">
          <div className="screen-feature__copy">
            <h2>3.2 inç IPS ekran</h2>
            <p>Kaydı anında cihaz ekranından izleyin. Görüntü açısını kurulum sırasında ekrana bakarak kolayca ayarlayın.</p>
          </div>
          <LiveScreen />
        </section>

        <section className="capabilities">
          <h2>Kayıt için gereken her şey içinde.</h2>
          <ul className="cap-grid">
            {capabilities.map(({ icon, title, text }) => (
              <li key={title}>
                <span className="cap-icon-wrap">{icon === null ? <GpsTileIcon /> : icon === "tr" ? <TurkishTileIcon /> : <Image className="cap-icon" src={icon} alt="" width={240} height={240} />}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="turkish">
          <LiveScreen menu />
          <div className="turkish__copy">
            <span className="turkish__chip"><TurkishTileIcon /> Türkçe</span>
            <h2>Türkçe dil desteği</h2>
            <p>Ayarlar ve menüler Türkçe. Çözünürlükten park moduna kadar her seçeneği kolayca anlayıp ayarlayın.</p>
          </div>
        </section>

        <section className="storage">
          <div className="storage-copy">
            <span className="storage-tag">Opsiyonel</span>
            <h2>512 GB&apos;a kadar destek</h2>
            <p>Döngüsel kayıt sayesinde kart dolduğunda kayıt kesintisiz devam eder. En iyi sonuç için yüksek dayanıklı microSD kart önerilir.</p>
            <p className="storage-note">* microSD kart kutuya dahil değildir.</p>
          </div>
          <div className="storage-visual">
            <div className="storage-product"><ProductMedia src="/products/v30-side-ports.webp" alt="TEKDEN V30 araç kamerası" label="Ürün fotoğrafı" /></div>
            <div className="storage-cards">
              {["64 GB", "128 GB", "256 GB", "512 GB"].map((size) => <div key={size}><strong>{size}</strong><MicroSD size={size.replace(" ", "")} /></div>)}
            </div>
            <div className="storage-bar" aria-hidden="true"><i /><i /><i /><i /></div>
            <small>Desteklenen microSD kapasiteleri</small>
          </div>
        </section>

        <section className="parking" id="obd">
          <Image className="parking-bg" src="/media/park/arka-plan.webp" alt="" fill sizes="100vw" />
          <div className="parking-inner">
            <div className="parking-copy">
              <h2>Park halindeyken de nöbette.</h2>
              <p>OBD Type-C Park Kiti ile V30, aracınız kapalıyken 24 saat park modunda çalışır.</p>
              <div className="parking-kit">
                <SelectionThumb parts={["obd"]} />
                <div><strong>OBD Park Kiti gerekir</strong><span>24 saat park modu ve kesintisiz güç için</span></div>
              </div>
              <div className="parking-actions">
                <Link className="button button--light" href="/urun/obd-park-kiti">OBD Park Kitini incele</Link>
                <span>Paket fiyatı {formatPrice(selections["v30-obd"].price)}</span>
              </div>
            </div>
            <div className="parking-cards">
              <article className="park-card">
                <header><h3>G-Sensor modu</h3><p>Darbe algılandığında ilgili kaydın korunmasına yardımcı olur.</p></header>
                <ImpactScene />
              </article>
              <article className="park-card">
                <header><h3>Time-Lapse modu</h3><p>Park halinde uzun süreyi daha az alanla kaydeder.</p></header>
                <TimelapseStrip />
              </article>
            </div>
          </div>
        </section>

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
