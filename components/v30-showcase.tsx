import Image from "next/image";
import Link from "next/link";
import { PlateCams } from "./plate-cams";
import { ImpactScene, SensorChip, TimelapseStrip } from "./illustrations";
import { GpsTileIcon, LiveScreen, ShareRow, TurkishTileIcon } from "./feature-art";
import { SelectionThumb } from "./selection-thumb";
import { formatPrice, selections } from "@/lib/product";

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

const storagePlans = [
  { gb: "64", hours: "2,5" },
  { gb: "128", hours: "5" },
  { gb: "256", hours: "10" },
  { gb: "512", hours: "20" },
] as const;

/** Yatay microSD kart çizimi (marka/logo yok). */
function SdCard({ gb }: { gb: string }) {
  return (
    <svg className="sd-card" viewBox="0 0 120 84" role="img" aria-label={`${gb} GB microSD kart`}>
      <path d="M20 2 H113 Q118 2 118 7 V77 Q118 82 113 82 H7 Q2 82 2 77 V20 Z" fill="#121417" stroke="#2c3138" strokeWidth="1.5" />
      <g fill="#c9a24a">{[12, 22, 32, 42, 52, 62, 72].map((y) => <rect key={y} x="98" y={y} width="12" height="6" rx="1.2" />)}</g>
      <text x="50" y="40" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="var(--font)">microSD</text>
      <text x="50" y="62" textAnchor="middle" fill="#7fa6ff" fontSize="14" fontWeight="700" fontFamily="var(--font)">{gb} GB</text>
    </svg>
  );
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 6.5V12l3.5 2.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function InfoIcon() {
  return <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 11v6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" /><circle cx="12" cy="7.6" r="1.2" fill="currentColor" /></svg>;
}

/** V30 tanıtım bölümleri: ana sayfa ve V30 ürün sayfasında aynı sırayla kullanılır. */
export function V30Showcase() {
  return (
    <>
      <section className="cams" id="ozellikler" aria-labelledby="cams-title">
        <div className="cams-head">
          <h2 id="cams-title">Plakayı gündüz de gece de okuyun.</h2>
          <p>Önde 4K, arkada 1080P Full HD kayıt. GC4653 sensör ve HDR, farlar ve sokak ışıklarında da dengeli görüntü sağlar.</p>
        </div>
        <PlateCams />
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

      <section className="sensor-lite" aria-labelledby="sensor-title">
        <div className="sensor-lite__inner">
          <SensorChip />
          <div className="sensor-lite__copy">
            <h2 id="sensor-title">Gelişmiş görüntü performansı</h2>
            <p>GalaxyCore GC4653 sensör ve HDR ile farklı ışık koşullarında dengeli kayıt.</p>
          </div>
          <dl className="sensor-lite__stats">
            <div><dt>4K</dt><dd>Ön kamera kaydı</dd></div>
            <div><dt>HDR</dt><dd>Dengeli görüntü</dd></div>
            <div><dt>SA230D</dt><dd>Görüntü işlemcisi</dd></div>
          </dl>
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

      <section className="memory" aria-labelledby="memory-title">
        <div className="memory__inner">
          <div className="memory__top">
            <div className="memory__copy">
              <span className="memory__tag">512 GB&apos;a kadar destek</span>
              <h2 id="memory-title"><span>512 GB</span> microSD<br />kart desteği</h2>
              <p>Yolculuklarınızı kesintisiz kaydedin. Kart dolduğunda döngüsel kayıt en eski görüntülerin üzerine otomatik yazar.</p>
            </div>
            <div className="memory__product">
              <Image src="/products/v30-side-ports.webp" alt="TEKDEN V30 araç kamerası, yan tarafta microSD kart yuvası" width={1216} height={1010} sizes="(max-width: 860px) 86vw, 46vw" />
            </div>
          </div>
          <ol className="memory__plans">
            {storagePlans.map(({ gb, hours }) => (
              <li key={gb}>
                <strong className="memory__gb">{gb}<small> GB</small></strong>
                <SdCard gb={gb} />
                <span className="memory__arrow" aria-hidden="true" />
                <b className="memory__hours">{hours}<small> saat</small></b>
              </li>
            ))}
          </ol>
          <div className="memory__notes">
            <p className="memory__legend"><ClockIcon />microSD kart kapasitesine göre yaklaşık kayıt süresi</p>
            <p className="memory__info"><InfoIcon /><span>Kayıt süreleri yaklaşık değerlerdir. Gerçek süreler kayıt çözünürlüğüne ve ayarlara göre değişebilir. microSD kart kutu içeriğine dahil değildir.</span></p>
          </div>
        </div>
      </section>

      <section className="display-duo" aria-label="Ekran ve dil">
        <div className="display-duo__inner">
          <article className="display-duo__item">
            <div className="display-duo__copy">
              <h2>3.2 inç IPS ekran</h2>
              <p>Kaydı anında cihaz ekranından izleyin. Görüntü açısını kurulum sırasında ekrana bakarak kolayca ayarlayın.</p>
            </div>
            <LiveScreen />
          </article>
          <article className="display-duo__item">
            <div className="display-duo__copy">
              <h2>Türkçe dil desteği</h2>
              <p>Ayarlar ve menüler Türkçe. Çözünürlükten park moduna kadar her seçeneği kolayca ayarlayın.</p>
            </div>
            <LiveScreen menu />
          </article>
        </div>
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
    </>
  );
}
