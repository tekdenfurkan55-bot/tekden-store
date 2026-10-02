"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useCart } from "./cart-provider";

export function CheckoutForm() {
  const { items } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep((current) => current === 1 ? 2 : 3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!items.length) return <section className="empty-state"><h1>Checkout için sepetiniz boş.</h1><Link className="button button--primary" href="/urun/x30">X30&apos;u İncele</Link></section>;

  return (
    <div className="checkout-layout">
      <section className="checkout-main">
        <div className="checkout-steps"><span className={step >= 1 ? "active" : ""}>1 Teslimat</span><span className={step >= 2 ? "active" : ""}>2 Adres</span><span className={step >= 3 ? "active" : ""}>3 Ödeme</span></div>
        {step === 1 && <form className="checkout-form" onSubmit={next}><p className="eyebrow">TESLİMAT BİLGİLERİ</p><h1>Size ulaşalım.</h1><div className="form-grid"><label>Ad<input required name="name" autoComplete="given-name" /></label><label>Soyad<input required name="surname" autoComplete="family-name" /></label><label className="full">E-posta<input required type="email" name="email" autoComplete="email" /></label><label className="full">Telefon<input required type="tel" name="phone" autoComplete="tel" placeholder="05__ ___ __ __" /></label></div><button className="button button--primary" type="submit">Adres Bilgilerine Geç</button></form>}
        {step === 2 && <form className="checkout-form" onSubmit={next}><p className="eyebrow">TESLİMAT ADRESİ</p><h1>Nereye gönderelim?</h1><div className="form-grid"><label className="full">Adres<input required name="address" autoComplete="street-address" /></label><label>İl<input required name="city" autoComplete="address-level1" /></label><label>İlçe<input required name="district" autoComplete="address-level2" /></label><label>Posta kodu<input required name="postal" autoComplete="postal-code" /></label><label>Adres başlığı<input required name="title" placeholder="Ev, iş..." /></label></div><div className="form-actions"><button className="button button--outline" type="button" onClick={() => setStep(1)}>Geri</button><button className="button button--primary" type="submit">Siparişi Gözden Geçir</button></div></form>}
        {step === 3 && <section className="payment-blocked"><p className="eyebrow">SİPARİŞ ÖZETİ / ÖDEME</p><h1>Henüz ödeme almıyoruz.</h1><p>Ürün fiyatları ve PayTR entegrasyonu tamamlandığında güvenli ödeme adımı burada açılacak.</p><div className="payment-status"><span>PAYTR</span><strong>Entegrasyon bekleniyor</strong></div><button className="button button--muted" type="button" disabled>Ödemeye Geç</button><button className="back-button" type="button" onClick={() => setStep(2)}>Adrese geri dön</button></section>}
      </section>
      <aside className="checkout-summary"><p className="eyebrow">SİPARİŞİNİZ</p>{items.map((item) => <div className="checkout-item" key={item.id}><span>{item.packageSize}× X30 paketi<br /><small>{item.withObd ? "+ OBD Park Kiti" : "Standart"} · {item.quantity} paket</small></span><strong>Fiyat yakında</strong></div>)}<div className="summary-total"><span>Toplam</span><strong>Henüz belirlenmedi</strong></div></aside>
    </div>
  );
}
