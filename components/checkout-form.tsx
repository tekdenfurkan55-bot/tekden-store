"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { formatPrice, selections } from "@/lib/product";
import { useCart } from "./cart-provider";
import { SelectionThumb } from "./selection-thumb";
import { type SelectionId } from "@/lib/product";

/** Sipariş satırı: paket görseli, ad, adet ve fiyat (indirim varsa eski fiyat üstü çizili). */
function SummaryLine({ id, quantity, variant = "aside" }: { id: SelectionId; quantity: number; variant?: "aside" | "review" }) {
  const product = selections[id];
  return (
    <div className={`summary-line summary-line--${variant}`}>
      <SelectionThumb parts={product.parts} />
      <span className="summary-line__text"><b>{product.name}</b><small>{quantity} adet · {product.detail}</small></span>
      <span className="summary-line__price">
        {product.compareAt && <s>{formatPrice(product.compareAt * quantity)}</s>}
        <strong>{formatPrice(product.price * quantity)}</strong>
      </span>
    </div>
  );
}

type CheckoutStep = 1 | 2 | 3 | 4;

export function CheckoutForm() {
  const { items } = useCart();
  const [step, setStep] = useState<CheckoutStep>(1);
  const subtotal = items.reduce((sum, item) => sum + selections[item.id].price * item.quantity, 0);

  function advance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep((current) => Math.min(4, current + 1) as CheckoutStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!items.length) return <section className="empty-state"><h1>Ödeme için sepetinizde ürün yok.</h1><Link className="button button--primary" href="/urun/v30">V30&apos;u incele</Link></section>;

  return <div className="checkout-layout"><section className="checkout-main"><div className="checkout-steps"><span className={step >= 1 ? "active" : ""}>1 İletişim</span><span className={step >= 2 ? "active" : ""}>2 Adres</span><span className={step >= 3 ? "active" : ""}>3 Özet</span><span className={step >= 4 ? "active" : ""}>4 Ödeme</span></div>{step === 1 && <form className="checkout-form" onSubmit={advance}><p className="eyebrow">İletişim bilgileri</p><h1>Size ulaşalım.</h1><div className="form-grid"><label>Ad<input required name="name" autoComplete="given-name" /></label><label>Soyad<input required name="surname" autoComplete="family-name" /></label><label className="full">E-posta<input required type="email" name="email" autoComplete="email" /></label><label className="full">Telefon<input required type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="05__ ___ __ __" /></label></div><button className="button button--primary" type="submit">Teslimat adresine geç</button></form>}{step === 2 && <form className="checkout-form" onSubmit={advance}><p className="eyebrow">Teslimat adresi</p><h1>Nereye gönderelim?</h1><div className="form-grid"><label className="full">Açık adres<input required name="address" autoComplete="street-address" /></label><label>İl<input required name="city" autoComplete="address-level1" /></label><label>İlçe<input required name="district" autoComplete="address-level2" /></label><label>Posta kodu<input required name="postal" autoComplete="postal-code" inputMode="numeric" /></label><label>Adres başlığı<input required name="title" placeholder="Ev, iş..." /></label></div><div className="form-actions"><button className="button button--outline" type="button" onClick={() => setStep(1)}>Geri</button><button className="button button--primary" type="submit">Sipariş özetine geç</button></div></form>}{step === 3 && <section className="checkout-review"><p className="eyebrow">Sipariş özeti</p><h1>Son kontrol.</h1>{items.map((item) => <SummaryLine key={item.id} id={item.id} quantity={item.quantity} variant="review" />)}<div className="review-total"><span>Toplam</span><strong>{formatPrice(subtotal)}</strong></div><div className="form-actions"><button className="button button--outline" type="button" onClick={() => setStep(2)}>Geri</button><button className="button button--primary" type="button" onClick={() => setStep(4)}>Ödeme adımına geç</button></div></section>}{step === 4 && <section className="payment-blocked"><p className="eyebrow">Güvenli ödeme</p><h1>PayTR bağlantısı hazırlanıyor.</h1><p>Merchant bilgileri tanımlandığında ödeme formu güvenli, sunucu taraflı PayTR entegrasyonu üzerinden açılacaktır.</p><div className="payment-status"><span>PAYTR</span><strong>Mağaza bilgileri bekleniyor</strong></div><button className="button button--muted" type="button" disabled>Ödemeyi tamamla</button><button className="back-button" type="button" onClick={() => setStep(3)}>Sipariş özetine geri dön</button></section>}</section><aside className="checkout-summary"><p className="eyebrow">Siparişiniz</p>{items.map((item) => <SummaryLine key={item.id} id={item.id} quantity={item.quantity} />)}<div className="summary-total"><span>Toplam</span><strong>{formatPrice(subtotal)}</strong></div><p className="summary-shipping"><span>Kargo</span><b>Ücretsiz</b></p><small>Ödeme henüz aktif değildir.</small></aside></div>;
}
