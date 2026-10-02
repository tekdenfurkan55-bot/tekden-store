import Link from "next/link";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { x30 } from "@/lib/product";

const faqs = [
  ["X30 hangi çözünürlükte kayıt yapar?", "Ön kamera gerçek 4K, arka kamera 2K çözünürlükte kayıt yapar."],
  ["GPS ayrı bir aparat mı?", "Hayır. GPS, X30'un ürün deneyiminin bir parçasıdır; ayrı bir aksesuar olarak sunulmaz."],
  ["Park modu için ne gerekir?", "24 saat park modu için OBD Type-C Park Kiti seçeneğini paketinize ekleyebilirsiniz."],
  ["Hangi hafıza kartlarını destekler?", "X30, 512 GB'a kadar microSD kart desteği ve döngüsel kayıt sunar."],
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">TEKDEN X30</p>
            <h1>Yolda olanı.<br />Olduğu gibi kaydet.</h1>
            <p className="hero-subtitle">Gerçek 4K Ön + 2K Arka Araç Kamerası</p>
            <div className="feature-chips" aria-label="Öne çıkan özellikler">
              {["4K", "2K Arka", "Wi-Fi", "GPS", "HDR", "24 Saat Park"].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-actions"><Link className="button button--primary" href="/urun/x30">Hemen Satın Al</Link><a className="text-link" href="#ozellikler">X30&apos;u Keşfet <span>→</span></a></div>
          </div>
          <div className="hero-visual"><ProductMedia tone="dark" label="Hero ürün görseli" /></div>
          <div className="scroll-cue">Aşağı kaydır <span>↓</span></div>
        </section>

        <section className="statement" id="ozellikler">
          <p className="eyebrow">GERÇEK 4K</p>
          <h2>Plakalar, tabelalar,<br />yolun her detayı.</h2>
          <p>GalaxyCore GC4653 sensör ve SA230D işlemciyle yüksek çözünürlüklü kayıt.</p>
        </section>

        <section className="split-feature split-feature--dark">
          <div className="feature-visual"><ProductMedia tone="dark" label="Gece sürüşü örnek görüntüsü" /></div>
          <div className="feature-copy"><p className="eyebrow">HDR / GECE</p><h2>Işık değişir.<br />Netlik kalır.</h2><p>HDR desteği, karanlık yollar ve parlak farlar arasında dengeli görüntü sunar.</p></div>
        </section>

        <section className="connection-feature">
          <div className="connection-copy"><p className="eyebrow">WI-FI BAĞLANTISI</p><h2>Kayıtların<br />yanında.</h2><p>Wi-Fi bağlantısıyla görüntülerinize telefonunuzdan erişin.</p></div>
          <div className="phone-placeholder"><span>Telefon ekranı</span><small>Uygulama arayüzü görseli eklenecek</small></div>
        </section>

        <section className="dual-grid">
          <article className="feature-tile feature-tile--blue"><div><p className="eyebrow">GPS</p><h2>Rotanız<br />kayıt altında.</h2><p>Sürüş verilerini kayıt deneyiminizin bir parçası haline getirir.</p></div><span className="route-line" aria-hidden="true" /></article>
          <article className="feature-tile"><div><p className="eyebrow">ÇİFT KANAL</p><h2>Önü de görür.<br />Arkayı da.</h2><p>4K ön ve 2K arka kamerayla eş zamanlı kayıt.</p></div><ProductMedia compact label="Ön ve arka kamera ürün görseli" /></article>
        </section>

        <section className="parking" id="obd">
          <div className="parking-copy"><p className="eyebrow">24 SAAT PARK MODU</p><h2>Siz uzaktayken de<br />gözünüz aracınızda.</h2><p>Time-Lapse ve G-Sensor ile park halindeki önemli anları kaydedin.</p><Link className="text-link text-link--light" href="/urun/x30">OBD Park Kiti ile incele <span>→</span></Link></div>
          <div className="obd-placeholder"><span>OBD Type-C</span><strong>Park Kiti</strong><small>Gerçek ürün görseli eklenecek</small></div>
        </section>

        <section className="storage-feature">
          <div><p className="eyebrow">KESİNTİSİZ KAYIT</p><h2>512 GB&apos;a kadar.<br />Döngüsel kayıt.</h2></div>
          <div className="storage-number">512 <span>GB</span></div>
        </section>

        <section className="install-section">
          <div className="section-heading"><p className="eyebrow">KOLAY KURULUM</p><h2>Üç adımda yola hazır.</h2></div>
          <ol className="steps"><li><span>01</span><strong>Konumlandır</strong><p>X30&apos;u ön cama yerleştirin.</p></li><li><span>02</span><strong>Bağlantıyı yapın</strong><p>Ön ve arka kamerayı bağlayın.</p></li><li><span>03</span><strong>Kayda başlayın</strong><p>Aracınızı çalıştırın ve yola çıkın.</p></li></ol>
        </section>

        <section className="specs-section">
          <div className="section-heading"><p className="eyebrow">TEKNİK ÖZELLİKLER</p><h2>Güçlü donanım.<br />Net sonuç.</h2></div>
          <dl className="spec-list">{x30.features.map((feature, index) => <div key={feature}><dt>{String(index + 1).padStart(2, "0")}</dt><dd>{feature}</dd></div>)}</dl>
        </section>

        <section className="reviews" id="yorumlar">
          <div className="section-heading section-heading--center"><p className="eyebrow">KULLANICI DENEYİMİ</p><h2>Yolculuklar başladıktan sonra.</h2><p>Doğrulanmış kullanıcı yorumları ürün satışa çıktığında burada yer alacak.</p></div>
          <div className="review-placeholder"><span>Yorumlar yakında</span><div aria-hidden="true">○ ○ ○</div></div>
        </section>

        <section className="faq-section" id="sss">
          <div className="section-heading"><p className="eyebrow">SSS</p><h2>Merak ettikleriniz.</h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="final-cta"><p className="eyebrow">TEKDEN X30</p><h2>Yola daha net bakın.</h2><Link className="button button--light" href="/urun/x30">X30&apos;u İncele</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
