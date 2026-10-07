import type { Metadata } from "next";
import Link from "next/link";
import { SingleProductPurchase } from "@/components/add-to-cart";
import { ProductGallery } from "@/components/product-gallery";
import { PriceTag } from "@/components/price-tag";
import { SelectionThumb } from "@/components/selection-thumb";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SpecTable } from "@/components/spec-table";
import { StructuredData } from "@/components/structured-data";
import { TrustBadges } from "@/components/trust-badges";
import { LoopBadge, ParkBadge } from "@/components/feature-art";
import { ParkingIcon, ShieldCheckIcon } from "@/components/icons";
import { obdKit, selections } from "@/lib/product";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN OBD Type-C Park Kiti | 24 Saat Park Modu",
  description: "TEKDEN OBD Type-C Park Kiti; araç kameralarına park halindeyken sürekli güç sağlar. OBD portuna tak-çalıştır, Type-C ile kameraya güç iletir.",
  alternates: { canonical: "/urun/obd-park-kiti" },
  openGraph: { title: obdKit.name, description: obdKit.description, url: "/urun/obd-park-kiti", type: "website", images: [{ url: obdKit.image, alt: obdKit.images[0].alt }] },
  twitter: { card: "summary_large_image", title: obdKit.name, description: obdKit.description, images: [obdKit.image] },
};

const productSchema = { "@context": "https://schema.org", "@type": "Product", name: obdKit.name, image: obdKit.images.map((item) => absoluteUrl(item.src)), description: obdKit.description, sku: obdKit.sku, brand: { "@type": "Brand", name: "TEKDEN" }, offers: { "@type": "Offer", url: absoluteUrl("/urun/obd-park-kiti"), priceCurrency: "TRY", price: "1199", availability: "https://schema.org/InStock" } };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: absoluteUrl() }, { "@type": "ListItem", position: 2, name: "OBD Park Kiti", item: absoluteUrl("/urun/obd-park-kiti") }] };

function PlugIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3v5M13 3v5" /><path d="M4.5 8h11v3a5.5 5.5 0 0 1-11 0z" /><path d="M10 16.5V21" stroke="var(--blue)" /></svg>;
}
function CableIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h7a3 3 0 0 1 3 3v10a3 3 0 0 0 3 3h5" /><path d="M3 8h5" stroke="var(--blue)" /><rect x="18" y="17" width="3.5" height="6" rx="1" transform="rotate(-90 19.75 20)" /></svg>;
}

const benefits = [
  { icon: <ParkBadge />, title: "24 saat park modu", text: "Araç park halindeyken kameranın park modu özelliklerinden yararlanabilmesi için sürekli güç bağlantısı sağlar." },
  { icon: <ShieldCheckIcon size={30} />, title: "G-Sensor desteği", text: "Park sırasında darbe algılandığında kameranın ilgili kaydı korumasına yardımcı olan G-Sensor sisteminin kullanılabilmesini sağlar." },
  { icon: <LoopBadge />, title: "Time-Lapse park kaydı", text: "Uzun süreli park durumlarında daha az depolama alanı kullanarak kayıt yapan Time-Lapse modunun çalışmasına güç desteği verir." },
  { icon: <ParkingIcon size={30} />, title: "Kesintisiz güç beslemesi", text: "Araç kamerasının park modunda çalışabilmesi için gerekli güç bağlantısının devam etmesini sağlar." },
  { icon: <CableIcon />, title: "Gizli ve düzenli kurulum", text: "Kablo; ön cam, tavan döşemesi ve A sütunu boyunca gizlenerek OBD portuna kadar indirilebilir. Araç içinde kablo karmaşası oluşmaz." },
  { icon: <PlugIcon />, title: "Tak-çalıştır kullanım", text: "Sigorta kutusunda ayrı bir bağlantı işlemi yapmadan, aracın OBD portuna bağlanarak kullanılabilir." },
];

const steps = [
  ["Kabloyu kameraya bağlayın", "Type-C ucunu araç kameranızın güç girişine takın."],
  ["Kabloyu gizleyin", "Kabloyu ön cam üst kısmından başlayarak tavan döşemesi boyunca ilerletin ve A sütunundan aşağı indirin."],
  ["OBD portunu bulun", "Aracınızın OBD bağlantı noktasını bulun. OBD portu genellikle direksiyon altı veya sürücü ayak bölgesinde yer alır."],
  ["OBD bağlantısını yapın", "OBD fişini aracın OBD portuna takın."],
  ["Park modunu etkinleştirin", "Araç kameranızın ayarlar menüsünden desteklenen park modu özelliğini etkinleştirin."],
];

const notes = [
  "OBD Park Kiti tek başına kayıt yapan bir cihaz değildir.",
  "Kitin görevi, uyumlu araç kamerasına sürekli güç sağlamaktır.",
  "Park modu, G-Sensor ve Time-Lapse gibi özelliklerin çalışması kullanılan kameranın bu özellikleri desteklemesine bağlıdır.",
  "Type-C bağlantısına sahip olsa bile her kameranın güç gereksinimi aynı olmayabilir. Bu nedenle cihaz uyumluluğunun kontrol edilmesi önerilir.",
  "OBD portunun konumu araç modeline göre değişiklik gösterebilir.",
  "Kablo döşenirken perde hava yastığı gibi güvenlik ekipmanlarının çalışma alanı engellenmemelidir.",
];

export default function ObdProductPage() {
  const bundle = selections["v30-obd"];
  return (
    <>
      <StructuredData data={[productSchema, breadcrumbSchema]} />
      <SiteHeader />
      <main className="product-page obd-page">
        <nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><span>/</span><span>OBD Park Kiti</span></nav>
        <section className="product-main">
          <ProductGallery images={obdKit.images} />
          <div className="product-purchase" id="satinal">
            <h1 className="product-title">{obdKit.name}</h1>
            <p className="product-category">Araç kameraları için 24 saat park modu</p>
            <PriceTag price={obdKit.price} size="lg" className="product-price" />
            <p className="product-lead">{obdKit.description}</p>
            <dl className="obd-facts"><div><dt>Uyumluluk</dt><dd>{obdKit.compatibility}</dd></div><div><dt>Kullanım</dt><dd>24 saat park modu</dd></div><div><dt>Bağlantı</dt><dd>OBD / Type-C</dd></div></dl>
            <SingleProductPurchase id="obd" />
            <TrustBadges />
            <Link className="bundle-callout" href="/urun/v30#satinal">
              <SelectionThumb parts={bundle.parts} />
              <span className="bundle-callout__text"><small>Henüz kameranız yoksa</small><strong>{bundle.name}</strong></span>
              <PriceTag price={bundle.price} compareAt={bundle.compareAt} size="sm" />
            </Link>
          </div>
        </section>

        <section className="obd-intro">
          <h2 className="section-title">OBD Type-C Park Kiti nedir?</h2>
          <p>TEKDEN OBD Type-C Park Kiti, araç kamerasının yalnızca araç çalışırken değil, araç park halindeyken de güç almaya devam etmesini sağlayan güç bağlantı çözümüdür.</p>
          <p>Araç içerisindeki OBD portuna doğrudan bağlanır. Uzun bağlantı kablosu araç içerisinde gizlenerek kameranın Type-C güç girişine ulaştırılabilir. Böylece çakmaklık adaptörüne ihtiyaç duymadan daha düzenli ve profesyonel bir kurulum elde edilir.</p>
        </section>

        <section className="obd-benefits">
          <h2 className="section-title">Ne işe yarar?</h2>
          <ul>{benefits.map(({ icon, title, text }) => <li key={title}><span className="obd-benefits__icon">{icon}</span><h3>{title}</h3><p>{text}</p></li>)}</ul>
        </section>

        <section className="obd-steps">
          <h2 className="section-title">Kurulum</h2>
          <ol>{steps.map(([title, text], index) => <li key={title}><span>{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
        </section>

        <section className="product-specs"><h2 className="section-title">Teknik özellikler</h2><SpecTable rows={obdKit.specifications} /></section>

        <section className="obd-notes">
          <div className="obd-notes__box">
            <h2><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5.5" strokeLinecap="round" /><circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" /></svg> Önemli bilgiler</h2>
            <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
          </div>
        </section>
      </main>
      <div className="mobile-buy-bar"><div><small>OBD Park Kiti</small><PriceTag price={obdKit.price} size="sm" /></div><a className="button button--primary" href="#satinal">Satın al</a></div>
      <SiteFooter />
    </>
  );
}
