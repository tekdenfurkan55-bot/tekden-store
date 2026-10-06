import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { Viewfinder } from "@/components/viewfinder";
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
            <p className="hero-model">TEKDEN <span className="model-mark">V30</span></p>
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

        <section className="night">
          <div className="night-inner">
            <h2>Gece de, güneşe karşı da.</h2>
            <p>GalaxyCore GC4653 sensör ve HDR, ışığın hızla değiştiği anlarda görüntüyü dengeler. Farklı ışık koşullarında daha dengeli kayıt.</p>
            <dl className="night-specs">
              <div><dt>Sensör</dt><dd>GalaxyCore GC4653</dd></div>
              <div><dt>İşlemci</dt><dd>SA230D</dd></div>
              <div><dt>Görüntü</dt><dd>HDR</dd></div>
              <div><dt>Ekran</dt><dd>3.2&quot; IPS</dd></div>
            </dl>
          </div>
        </section>

        <section className="capabilities">
          <h2>Kayıt için gereken her şey içinde.</h2>
          <dl>{capabilities.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
        </section>

        <section className="parking" id="obd">
          <div className="parking-copy">
            <h2>Park halindeyken de nöbette.</h2>
            <p>OBD Type-C Park Kiti ile V30, aracınız kapalıyken 24 saat park modunda çalışır. G-Sensor, darbe anının kaydını korumaya yardımcı olur.</p>
            <div className="parking-actions">
              <Link className="button button--light" href="/urun/obd-park-kiti">OBD Park Kitini incele</Link>
              <span>Paket fiyatı {formatPrice(selections["v30-obd"].price)}</span>
            </div>
          </div>
          <ol className="parking-timeline" aria-label="Park modu nasıl çalışır">
            <li><span>Kontak kapanır</span><p>OBD kiti V30&apos;a güç vermeye devam eder.</p></li>
            <li><span>Park modu başlar</span><p>Time-Lapse ile uzun süreyi az alanla kaydeder.</p></li>
            <li><span>Darbe algılanır</span><p>G-Sensor ilgili kaydın korunmasına yardımcı olur.</p></li>
          </ol>
        </section>

        <section className="buy-section" id="satinal">
          <div className="buy-section__media"><ProductMedia src={v30.images[0].src} alt={v30.images[0].alt} label="Ürün fotoğrafı" /></div>
          <div className="buy-section__panel">
            <h2>Paketinizi seçin.</h2>
            <p>Yalnızca kamera ya da 24 saat park modu için OBD Park Kiti ile birlikte.</p>
            <AddToCartPanel compact />
            <p className="buy-note">microSD kart kutuya dahil değildir. 512 GB&apos;a kadar kart desteklenir.</p>
          </div>
        </section>

        <section className="install" id="kurulum">
          <h2>Üç adımda kurulum.</h2>
          <ol>
            <li><span>1</span><strong>Yerleştirin</strong><p>V30&apos;u ön cama, görüşünüzü kapatmayacak şekilde konumlandırın.</p></li>
            <li><span>2</span><strong>Bağlayın</strong><p>Arka kamerayı ve güç kablosunu takın. Park modu için OBD kitini kullanın.</p></li>
            <li><span>3</span><strong>Kayda başlayın</strong><p>microSD kartı takın ve kayda başlayın.</p></li>
          </ol>
        </section>

        <section className="specs" id="teknik">
          <h2>Teknik özellikler</h2>
          <table className="spec-table"><tbody>{v30.specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table>
        </section>

        <section className="faq-section" id="sss">
          <h2>Sık sorulan sorular</h2>
          <Faq items={faqs} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
