import type { Metadata } from "next";
import { AddToCartPanel } from "@/components/add-to-cart";
import { ProductMedia } from "@/components/product-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { x30 } from "@/lib/product";

export const metadata: Metadata = { title: "X30 Araç Kamerası" };

export default function ProductPage() {
  return (
    <>
      <SiteHeader />
      <main className="product-page">
        <nav className="breadcrumbs" aria-label="Sayfa yolu">Ana Sayfa <span>/</span> Araç Kameraları <span>/</span> X30</nav>
        <section className="product-main">
          <div className="product-gallery">
            <div className="gallery-primary"><ProductMedia label="Ana ürün fotoğrafı" /></div>
            <div className="gallery-thumbs"><ProductMedia compact label="Ön görünüm" /><ProductMedia compact tone="dark" label="Arka kamera" /><ProductMedia compact tone="blue" label="Araç içi görünüm" /></div>
          </div>
          <div className="product-purchase">
            <p className="eyebrow">TEKDEN / X30</p>
            <h1>{x30.name}</h1>
            <div className="rating"><span>★★★★★</span><small>Yorumlar satıştan sonra açılacak</small></div>
            <p className="product-lead">Gerçek 4K ön, 2K arka kayıt. Gündüz ve gece yolun tamamını görün.</p>
            <ul className="advantage-list"><li>Gerçek 4K + 2K çift kanal</li><li>Wi-Fi ve GPS</li><li>HDR gece performansı</li><li>24 saat park modu desteği</li></ul>
            <AddToCartPanel />
            <div className="trust-row"><span>Güvenli teslimat</span><span>Kolay kurulum</span><span>Türkiye desteği</span></div>
          </div>
        </section>
        <section className="product-detail-band"><div><p className="eyebrow">İÇERİĞİ GÖRÜN</p><h2>Önünüzde ve arkanızda<br />olanı aynı anda kaydedin.</h2></div><ProductMedia tone="dark" label="Çift kanal kullanım görseli" /></section>
        <section className="product-specs"><div><p className="eyebrow">X30 DONANIMI</p><h2>Her ayrıntısı<br />işi için tasarlandı.</h2></div><dl>{x30.features.map((feature, index) => <div key={feature}><dt>{index + 1}</dt><dd>{feature}</dd></div>)}</dl></section>
      </main>
      <div className="mobile-buy-bar"><div><small>TEKDEN X30</small><strong>Fiyat yakında</strong></div><a className="button button--primary" href="#mobile-buy-panel">Paket Seç</a></div>
      <SiteFooter />
    </>
  );
}
