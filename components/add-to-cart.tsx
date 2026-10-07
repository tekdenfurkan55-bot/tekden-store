"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice, selections, type SelectionId } from "@/lib/product";
import { useCart } from "./cart-provider";
import { SelectionThumb } from "./selection-thumb";

export function AddToCartPanel({ compact = false, initial = "v30" }: { compact?: boolean; initial?: "v30" | "v30-obd" }) {
  const [selectionId, setSelectionId] = useState<"v30" | "v30-obd">(initial);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function add(goToCheckout = false) {
    addItem(selectionId, quantity);
    setAdded(true);
    if (goToCheckout) router.push("/checkout");
  }

  return (
    <div id="mobile-buy-panel" className={compact ? "buy-panel buy-panel--compact" : "buy-panel"}>
      <fieldset className="bundle-fieldset">
        <legend>Paket seçimi</legend>
        <div className="bundle-options">
          {(["v30", "v30-obd"] as const).map((id) => {
            const option = selections[id];
            return <button key={id} type="button" className={selectionId === id ? "bundle-option is-selected" : "bundle-option"} onClick={() => setSelectionId(id)} aria-pressed={selectionId === id}><SelectionThumb parts={option.parts} /><span className="bundle-option__text"><strong>{option.name}</strong><small>{option.detail}</small></span><b>{formatPrice(option.price)}</b></button>;
          })}
        </div>
      </fieldset>
      <p className="obd-note">24 saat park modu kullanımı için OBD Park Kiti gereklidir.</p>
      <div className="purchase-row">
        <div className="quantity-control" aria-label="Adet seçimi"><button type="button" aria-label="Azalt" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity === 1}>−</button><span>{quantity}</span><button type="button" aria-label="Artır" onClick={() => setQuantity(quantity + 1)}>+</button></div>
        <strong>{formatPrice(selections[selectionId].price * quantity)}</strong>
      </div>
      <div className="buy-actions">
        <button className="button button--primary" type="button" onClick={() => add(true)}>Hemen satın al</button>
        <button className="button button--outline" type="button" onClick={() => add(false)}>{added ? "Sepete eklendi" : "Sepete ekle"}</button>
      </div>
    </div>
  );
}

export function SingleProductPurchase({ id, buyLabel = "Hemen satın al" }: { id: SelectionId; buyLabel?: string }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();
  const selection = selections[id];

  function add(goToCheckout: boolean) {
    addItem(id, quantity);
    setAdded(true);
    if (goToCheckout) router.push("/checkout");
  }

  return <div className="buy-panel"><div className="purchase-row"><div className="quantity-control" aria-label="Adet seçimi"><button type="button" aria-label="Azalt" disabled={quantity === 1} onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span>{quantity}</span><button type="button" aria-label="Artır" onClick={() => setQuantity(quantity + 1)}>+</button></div><strong>{formatPrice(selection.price * quantity)}</strong></div><div className="buy-actions"><button className="button button--primary" onClick={() => add(true)} type="button">{buyLabel}</button><button className="button button--outline" onClick={() => add(false)} type="button">{added ? "Sepete eklendi" : "Sepete ekle"}</button></div></div>;
}
