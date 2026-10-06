import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartPanel } from "@/components/add-to-cart";
import { Faq } from "@/components/faq";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { faqs } from "@/lib/content";
import { formatPrice, v30 } from "@/lib/product";
import { absoluteUrl, brandName } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN V30 4K Araç Kamerası | Ön + Arka Kamera",
  description: "TEKDEN V30; 4K ön, 1080P arka kamera, Wi-Fi, GPS, HDR ve OBD ile 24 saat park modu desteği sunan ön arka araç kamerası.",
  alternates: { canonical: "/" },
  openGraph: { title: "TEKDEN V30 4K Araç Kamerası", description: "4K ön, 1080P arka kamera. Wi-Fi, GPS, HDR ve park modu desteği.", url: "/", type: "website", images: [{ url: v30.image, alt: v30.images[0].alt }] },
  twitter: { card: "summary_large_image", title: "TEKDEN V30 4K Araç Kamerası", description: "Yolun her detayını kaydedin.", images: [v30.image] },
};

const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: brandName, url: absoluteUrl(), logo: absoluteUrl("/icon.svg") };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function HomePage() {
  return (
    <>
      <StructuredData data={[organizationSchema, faqSchema]} />
      <SiteHeader />
      <main>
        <section className="hero hero--v30">
          <div className="hero-copy">
            <p className="eyebrow">TEKDEN V30</p>
            <h1>4K Araç Kamerası</h1>
            <h2>Yolun her detayını kaydedin.</h2>
            <p className="hero-subtitle">4K ön kayıt, 1080P arka kamera ve akıllı sürüş kayıt özellikleriyle yolculuğunuzun önemli anlarını kaydedin.</p>
            <div className="hero-actions"><Link className="button button--primary" href="/urun/v30#satinal">Hemen Satın Al</Link><Link className="text-link" href="/urun/v30">V30&apos;u İncele <span>→</span></Link></div>
          </div>
          <div className="hero-visual"><ProductMedia src={v30.image} alt={v30.images[0].alt} priority label="Ana V30 ürün fotoğrafı" /></div>
          <div className="hero-feature-row" aria-label="V30 öne çıkan özellikler">{[["4K UHD", "Ön Kamera"], ["1080P", "Arka Kamera"], ["Wi-Fi", "Bağlantı"], ["GPS", "Konum"], ["HDR", "Görüntü"]].map(([title, detail]) => <div key={title}><strong>{title}</strong><span>{detail}</span></div>)}</div>
        </section>

        <section className="trust-strip" aria-label="Temel ürün avantajları"><div><strong>4K + 1080P</strong><span>Ön ve arka kayıt</span></div><div><strong>512 GB</strong><span>microSD desteği</span></div><div><strong>Wi-Fi</strong><span>Telefondan erişim</span></div><div><strong>24 Saat</strong><span>OBD ile park modu</span></div></section>

        <section className="quick-buy" id="satinal">
          <div className="quick-buy__media"><ProductMedia src={v30.image} alt={v30.images[0].alt} label="V30 hızlı satın alma görseli" /></div>
          <div className="quick-buy__content"><p className="eyebrow">HIZLI SATIN ALMA</p><h2>V30&apos;unuzu seçin.</h2><p>Tek kamera veya 24 saat park modu için OBD Park Kiti içeren paketi seçin.</p><AddToCartPanel compact /></div>
        </section>

        <section className="statement" id="ozellikler"><p className="eyebrow">4K ÖN KAMERA</p><h2>Plakalar, tabelalar,<br />yolun detayları.</h2><p>4K ön kamera ile sürüş sırasında önemli yol detaylarını daha net kaydedin.</p></section>

        <section className="sensor-section"><div className="sensor-visual" aria-label="Temsili sensör teknoloji görseli"><span>GC</span><strong>4653</strong><small>Temsili teknoloji görseli</small></div><div><p className="eyebrow">GÖRÜNTÜ SENSÖRÜ</p><h2>Görüntünün merkezinde GalaxyCore GC4653.</h2><p>GalaxyCore GC4653 görüntü sensörü ve HDR desteğiyle farklı ışık koşullarında daha dengeli kayıt.</p><ul className="inline-specs"><li>GalaxyCore GC4653</li><li>HDR</li><li>4K</li><li>Düşük ışık desteği</li></ul></div></section>

        <section className="split-feature split-feature--dark"><div className="feature-visual night-visual"><span>HDR</span><small>Temsili düşük ışık sunumu</small></div><div className="feature-copy"><p className="eyebrow">HDR / DÜŞÜK IŞIK</p><h2>Işık değişse de detaylar kaybolmasın.</h2><p>HDR desteği, farklı ışık koşullarında daha dengeli kayıt oluşturmaya yardımcı olur.</p></div></section>

        <section className="dual-camera-section"><div className="section-heading"><p className="eyebrow">ÖN + ARKA / DUAL CHANNEL</p><h2>Önünde ve arkanda olanı kayıtta tut.</h2></div><div className="dual-products"><div><ProductMedia src={v30.images[0].src} alt={v30.images[0].alt} label="V30 ana kamera" /><strong>4K</strong><span>Ön kamera</span></div><div><ProductMedia src={v30.images[2].src} alt={v30.images[2].alt} label="V30 arka kamera" /><strong>1080P Full HD</strong><span>Arka kamera</span></div></div></section>

        <section className="connection-feature"><div className="connection-copy"><p className="eyebrow">WI-FI BAĞLANTISI</p><h2>Kayıtlarınıza telefonunuzdan ulaşın.</h2><p>Wi-Fi bağlantısıyla kayıtlarınıza telefonunuz üzerinden erişin.</p></div><div className="phone-placeholder"><span>Wi-Fi</span><small>Uygulama arayüzü gösterilmemektedir</small></div></section>

        <section className="gps-section"><div><p className="eyebrow">GPS</p><h2>Rotanız kayıt altında.</h2><p>Konum ve sürüş bilgilerini kayıt deneyiminizin bir parçası haline getirin. Ayrı bir GPS aparatı gerekmez.</p></div><div className="route-map" aria-hidden="true"><i /><i /><i /></div></section>

        <section className="parking" id="obd"><div className="parking-copy"><p className="eyebrow">24 SAAT PARK MODU</p><h2>Aracınız park halindeyken de kayıt devam etsin.</h2><p>24 saat park modu için TEKDEN OBD Type-C Park Kiti gereklidir.</p><Link className="text-link text-link--light" href="/urun/obd-park-kiti">OBD Park Kitini İncele <span>→</span></Link></div><div className="parking-features"><article><span>G</span><h3>G-Sensor</h3><p>Ani darbe algılandığında önemli kaydın korunmasına yardımcı olur.</p></article><article><span>T</span><h3>Time-Lapse</h3><p>Park halinde daha verimli uzun süreli kayıt sağlar.</p></article></div></section>

        <section className="recording-pair"><article><p className="eyebrow">G-SENSOR</p><h2>Önemli anları koruyun.</h2><p>Darbe algılandığında ilgili kaydın korunmasına yardımcı olur.</p></article><article><p className="eyebrow">DÖNGÜSEL KAYIT</p><h2>Kayıt devam etsin.</h2><p>Depolama dolduğunda eski normal kayıtların üzerine yazarak kaydın sürmesini sağlar.</p></article></section>

        <section className="storage-feature"><div><p className="eyebrow">GENİŞ DEPOLAMA DESTEĞİ</p><h2>Uzun kayıtlar için daha fazla alan.</h2><p>512 GB&apos;a kadar microSD desteği. microSD kart kutuya dahil değildir.</p></div><div className="storage-number">512 <span>GB</span></div></section>

        <section className="install-section" id="kurulum"><div className="section-heading"><p className="eyebrow">KOLAY KURULUM</p><h2>Konumlandırın. Bağlayın. Kayda başlayın.</h2></div><ol className="steps"><li><span>01</span><strong>Kamerayı konumlandırın</strong><p>V30&apos;u ön cama uygun biçimde yerleştirin.</p></li><li><span>02</span><strong>Bağlantıları yapın</strong><p>Arka kamera ve güç bağlantısını yapın.</p></li><li><span>03</span><strong>Kayda başlayın</strong><p>microSD kartı takın ve kayda başlayın.</p></li></ol></section>

        <section className="why-section"><div className="section-heading"><p className="eyebrow">NEDEN TEKDEN V30?</p><h2>Her yolculukta daha fazla kontrol.</h2></div><dl>{[["Net Görüntü", "4K + HDR"], ["Ön + Arka Kayıt", "4K + 1080P"], ["Kolay Erişim", "Wi-Fi"], ["Konum Bilgisi", "GPS"], ["Kayıt Koruması", "G-Sensor"], ["Park Koruması", "OBD ile 24 saat"]].map(([title, value], i) => <div key={title}><dt>{String(i + 1).padStart(2, "0")} · {title}</dt><dd>{value}</dd></div>)}</dl></section>

        <section className="specs-section"><div className="section-heading"><p className="eyebrow">TEKNİK ÖZELLİKLER</p><h2>Bilmeniz gerekenler.</h2></div><table className="spec-table"><tbody>{v30.specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></section>

        <section className="reviews" id="yorumlar"><div className="section-heading section-heading--center"><p className="eyebrow">KULLANICI DENEYİMLERİ</p><h2>Doğrulanmış yorumlar burada yer alacak.</h2><p>Gerçek kullanıcı yorumları satışlar başladıktan sonra yayımlanacaktır.</p></div><div className="review-placeholder"><span>Henüz yorum bulunmuyor</span><small>Yorum altyapısı hazır</small></div></section>

        <section className="faq-section" id="sss"><div className="section-heading"><p className="eyebrow">SIK SORULAN SORULAR</p><h2>V30 hakkında.</h2></div><Faq items={faqs} /></section>

        <section className="final-product-cta"><div><p className="eyebrow">TEKDEN V30</p><h2>Yola daha net bakın.</h2><p>4K Araç Kamerası</p><strong>{formatPrice(v30.price)}</strong><div><Link className="button button--light" href="/urun/v30#satinal">V30&apos;u Satın Al</Link><a className="text-link text-link--light" href="#ozellikler">Özellikleri İncele <span>↑</span></a></div></div><ProductMedia src={v30.image} alt={v30.images[0].alt} tone="dark" label="V30 final ürün görseli" /></section>
      </main>
      <SiteFooter />
    </>
  );
}
