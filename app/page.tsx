import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { Viewfinder } from "@/components/viewfinder";
import { V30Mark } from "@/components/brand-logo";
import { ImpactScene, InstallScene, MicroSD, NightLot, PhoneApp, RoadScene, SensorChip, TimelapseStrip } from "@/components/illustrations";
import { SelectionThumb } from "@/components/selection-thumb";
import { SpecTable } from "@/components/spec-table";
import { TrustBadges } from "@/components/trust-badges";
import { faqs } from "@/lib/content";
import { formatPrice, selections, v30 } from "@/lib/product";
import { absoluteUrl, brandName } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN V30 4K Araç Kamerası | Ön + Arka Kamera",
  description: "TEKDEN V30; 4K ön, 1080P arka kamera, Wi-Fi, GPS, HDR ve OBD ile 24 saat park modu desteği sunan ön arka araç kamerası.",
  alternates: { canonical: "/" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: "4K ön, 1080P arka kamera. Wi-Fi, GPS, HDR ve park modu desteği.", url: "/", type: "website", images: [{ url: v30.image, alt: v30.images[0].alt }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: "Yolun her detayı kayıtta.", images: [v30.image] },
};

const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: brandName, url: absoluteUrl(), logo: absoluteUrl("/icon.svg") };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

const specRail = [
  ["4K", "Ön kamera"],
  ["1080P", "Arka kamera"],
  ["GC4653", "Görüntü sensörü"],
  ["512 GB", "microSD desteği"],
  ["24 saat", "Park modu, OBD kit ile"],
] as const;

const capabilities = [
  ["Wi-Fi", "Kayıtlarınıza telefonunuzdan ulaşın."],
  ["GPS", "Konum bilgisi cihazın içinde. Ayrı bir aparat gerekmez."],
  ["HDR", "Güneşe karşı ya da tünel çıkışında dengeli görüntü."],
  ["G-Sensor", "Darbe algılandığında ilgili kaydın korunmasına yardımcı olur."],
  ["Döngüsel kayıt", "Kart dolduğunda en eski normal kayıtların üzerine yazar."],
  ["Time-Lapse", "Park halinde uzun süreyi daha az alanla kaydeder."],
] as const;

export default function HomePage() {
  return (
    <>
      <StructuredData data={[organizationSchema, faqSchema]} />
      <SiteHeader />
      <main className="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-model"><span>TEKDEN</span><V30Mark /></p>
            <h1>Yolun her detayı kayıtta.</h1>
            <p className="hero-lead">4K ön ve 1080P arka kamera. Wi-Fi, GPS ve HDR tek cihazda.</p>
            <div className="hero-buy">
              <div className="hero-price"><strong>{formatPrice(v30.price)}</strong><span>OBD Park Kiti ile {formatPrice(selections["v30-obd"].price)}</span></div>
              <div className="hero-actions">
                <Link className="button button--primary" href="#satinal">Satın al</Link>
                <Link className="button button--ghost" href="/urun/v30">Ürünü incele</Link>
              </div>
            </div>
          </div>
          <Viewfinder className="hero-visual">
            <ProductMedia src={v30.image} alt={v30.images[0].alt} priority label="Ürün fotoğrafı" sizes="(max-width: 900px) 100vw, 62vw" />
          </Viewfinder>
        </section>

        <section className="spec-rail" aria-label="Öne çıkan özellikler">
          <dl>{specRail.map(([value, label]) => <div key={value}><dd>{value}</dd><dt>{label}</dt></div>)}</dl>
        </section>

        <section className="chapter chapter--plate" id="ozellikler">
          <div className="chapter-copy">
            <h2>Plakayı okuyabileceğiniz netlik.</h2>
            <p>Ön kamera 4K çözünürlükte kaydeder. Plakalar, tabelalar ve yolun detayları kayıtta daha net görünür.</p>
          </div>
          <Viewfinder tone="dark" live={false} className="plate-visual">
            <div className="plate-scene" role="img" aria-label="Temsili görsel: kayıtta okunabilir plaka">
              <div className="plate-zoom"><span className="plate"><b>TR</b>34 TKD 030</span></div>
              <small>Temsili görsel</small>
            </div>
          </Viewfinder>
        </section>

        <section className="chapter chapter--dual">
          <div className="chapter-copy">
            <h2>Önünüz ve arkanız, aynı anda.</h2>
            <p>İki kanal birlikte kaydeder: önde 4K, arkada 1080P Full HD. Arkadan gelen bir çarpma da kayıt altında.</p>
          </div>
          <div className="dual-frames">
            <figure><Viewfinder channel="ÖN 4K" live={false}><ProductMedia src={v30.images[1].src} alt={v30.images[1].alt} label="Ön kamera" /></Viewfinder><figcaption><strong>Ön kamera</strong><span>4K</span></figcaption></figure>
            <figure><Viewfinder channel="ARKA 1080P" live={false}><ProductMedia src={v30.images[2].src} alt={v30.images[2].alt} label="Arka kamera" /></Viewfinder><figcaption><strong>Arka kamera</strong><span>1080P Full HD</span></figcaption></figure>
          </div>
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
            <p>Wi-Fi bağlantısıyla kayıtları telefonunuzda izleyin. Dahili GPS ile rotanız da kayıtta.</p>
          </div>
          <PhoneApp />
        </section>

        <section className="capabilities">
          <h2>Kayıt için gereken her şey içinde.</h2>
          <dl>{capabilities.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
        </section>

        <section className="storage">
          <div className="storage-copy">
            <span className="storage-tag">Opsiyonel</span>
            <h2>512 GB&apos;a kadar destek</h2>
            <p>Döngüsel kayıt sayesinde kart dolduğunda kayıt kesintisiz devam eder. En iyi sonuç için yüksek dayanıklı microSD kart önerilir.</p>
            <p className="storage-note">* microSD kart kutuya dahil değildir.</p>
          </div>
          <div className="storage-visual">
            <div className="storage-product"><ProductMedia src={v30.images[1].src} alt={v30.images[1].alt} label="Ürün fotoğrafı" /></div>
            <div className="storage-cards">
              {["64 GB", "128 GB", "256 GB", "512 GB"].map((size) => <div key={size}><strong>{size}</strong><MicroSD size={size.replace(" ", "")} /></div>)}
            </div>
            <div className="storage-bar" aria-hidden="true"><i /><i /><i /><i /></div>
            <small>Desteklenen microSD kapasiteleri</small>
          </div>
        </section>

        <section className="parking" id="obd">
          <NightLot className="parking-bg" />
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
          <ol>
            {([
              [1, "Yerleştirin", "V30\u2019u ön cama, görüşünüzü kapatmayacak şekilde konumlandırın."],
              [2, "Bağlayın", "Arka kamerayı ve güç kablosunu takın. Park modu için OBD kitini kullanın."],
              [3, "Kayda başlayın", "microSD kartı takın ve kayda başlayın."],
            ] as const).map(([step, title, text]) => (
              <li key={step} className="install-card">
                <InstallScene step={step} />
                <div className="install-card__text"><span>{step}</span><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ol>
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
