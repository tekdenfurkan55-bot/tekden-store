"use client";

import Link from "next/link";
import { formatPrice, selections } from "@/lib/product";
import { ProductMedia } from "./product-media";
import { useCart } from "./cart-provider";

export function CartPage() {
  const { items, updateQuantity, removeItem, addItem } = useCart();
  const subtotal = items.reduce((sum, item) => sum + selections[item.id].price * item.quantity, 0);
  const canUpsellObd = items.some((item) => item.id === "v30") && !items.some((item) => item.id === "obd" || item.id === "v30-obd");

  if (!items.length) return <section className="empty-state"><span>SEPET / 0</span><h1>Sepetiniz boş.</h1><p>V30 paketlerini inceleyerek başlayın.</p><Link className="button button--primary" href="/urun/v30">V30&apos;u İncele</Link></section>;

  return <div className="cart-layout"><section className="cart-content"><p className="eyebrow">SEPET</p><h1>Seçiminiz.</h1><div className="cart-lines">{items.map((item) => { const product = selections[item.id]; const lineTotal = product.price * item.quantity; return <article className="cart-line" key={item.id}><div className="cart-line-media"><ProductMedia src={product.image} alt={product.name} compact label={`${product.name} görseli`} /></div><div className="cart-line-info"><h2>{product.name}</h2><p>{product.detail}</p><span>Birim fiyat: {formatPrice(product.price)}</span><button type="button" onClick={() => removeItem(item.id)}>Ürünü sil</button></div><div className="cart-line-actions"><div className="quantity-control" aria-label={`${product.name} adet seçimi`}><button type="button" aria-label="Azalt" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>−</button><span>{item.quantity}</span><button type="button" aria-label="Artır" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div><strong>{formatPrice(lineTotal)}</strong></div></article>; })}</div>{canUpsellObd && <aside className="cart-upsell"><div><span>24 saat park modu</span><strong>OBD Type-C Park Kiti ekleyin</strong><small>V30 ile uyumlu · {formatPrice(selections.obd.price)}</small></div><button className="button button--outline" type="button" onClick={() => addItem("obd")}>Sepete Ekle</button></aside>}<Link className="text-link" href="/urun/v30">← Alışverişe devam et</Link></section><aside className="order-summary"><p className="eyebrow">SİPARİŞ ÖZETİ</p><div><span>Ara toplam</span><strong>{formatPrice(subtotal)}</strong></div><div><span>Kargo</span><strong>Sipariş sırasında</strong></div><div className="summary-total"><span>Toplam</span><strong>{formatPrice(subtotal)}</strong></div><Link className="button button--primary" href="/checkout">Teslimat Bilgilerine Geç</Link><small>Ödeme adımı PayTR entegrasyonu tamamlandığında açılacaktır.</small></aside></div>;
}
