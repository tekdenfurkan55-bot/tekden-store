"use client";

import Link from "next/link";
import { ProductMedia } from "./product-media";
import { useCart } from "./cart-provider";

export function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  if (!items.length) return (
    <section className="empty-state"><span>0</span><h1>Sepetiniz boş.</h1><p>X30 paketlerini inceleyerek başlayın.</p><Link className="button button--primary" href="/urun/x30">X30&apos;u İncele</Link></section>
  );

  return (
    <div className="cart-layout">
      <section className="cart-content">
        <p className="eyebrow">SEPET</p><h1>Seçiminiz.</h1>
        <div className="cart-lines">{items.map((item) => (
          <article className="cart-line" key={item.id}>
            <div className="cart-line-media"><ProductMedia compact label="X30 ürün görseli" /></div>
            <div className="cart-line-info"><h2>TEKDEN X30</h2><p>{item.packageSize} adet X30 paketi</p><span>{item.withObd ? "OBD Type-C Park Kiti dahil" : "Standart paket"}</span><button type="button" onClick={() => removeItem(item.id)}>Ürünü sil</button></div>
            <div className="quantity-control" aria-label="Adet seçimi"><button type="button" aria-label="Azalt" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>−</button><span>{item.quantity}</span><button type="button" aria-label="Artır" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div>
          </article>
        ))}</div>
        <Link className="text-link" href="/urun/x30">← Alışverişe devam et</Link>
      </section>
      <aside className="order-summary"><p className="eyebrow">SİPARİŞ ÖZETİ</p><div><span>Ürünler</span><strong>{items.reduce((sum, item) => sum + item.packageSize * item.quantity, 0)} adet X30</strong></div><div><span>Kargo</span><strong>Satışta belirlenecek</strong></div><div className="summary-total"><span>Toplam</span><strong>Fiyat yakında</strong></div><Link className="button button--primary" href="/checkout">Teslimat Bilgilerine Geç</Link><small>Fiyat açıklanana kadar ödeme alınmayacaktır.</small></aside>
    </div>
  );
}
