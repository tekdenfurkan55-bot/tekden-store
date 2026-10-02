"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PackageSize } from "@/lib/product";
import { obdKit, x30 } from "@/lib/product";
import { useCart } from "./cart-provider";

export function AddToCartPanel({ compact = false }: { compact?: boolean }) {
  const [packageSize, setPackageSize] = useState<PackageSize>(1);
  const [withObd, setWithObd] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function add(goToCart = false) {
    addItem(packageSize, withObd);
    setAdded(true);
    if (goToCart) router.push("/sepet");
  }

  return (
    <div id="mobile-buy-panel" className={compact ? "buy-panel buy-panel--compact" : "buy-panel"}>
      <div className="price-status"><span>Fiyat</span><strong>Yakında açıklanacak</strong></div>
      <fieldset className="package-fieldset">
        <legend>Paket seçimi</legend>
        <div className="package-options">
          {x30.packages.map((size) => (
            <button key={size} type="button" className={packageSize === size ? "package-option is-selected" : "package-option"} onClick={() => setPackageSize(size)} aria-pressed={packageSize === size}>
              <strong>{size}</strong><span>adet X30</span>
            </button>
          ))}
        </div>
      </fieldset>
      <label className={withObd ? "upsell is-selected" : "upsell"}>
        <input type="checkbox" checked={withObd} onChange={(event) => setWithObd(event.target.checked)} />
        <span><strong>{obdKit.name} Ekle</strong><small>{obdKit.description}</small></span>
        <b>{withObd ? "Eklendi" : "+"}</b>
      </label>
      <div className="buy-actions">
        <button className="button button--primary" type="button" onClick={() => add(false)}>{added ? "Sepete Eklendi" : "Sepete Ekle"}</button>
        <button className="button button--outline" type="button" onClick={() => add(true)}>Hemen Satın Al</button>
      </div>
      <p className="availability-note">Fiyatlar açıklanana kadar ödeme adımı aktif değildir.</p>
    </div>
  );
}
