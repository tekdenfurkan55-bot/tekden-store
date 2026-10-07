"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-provider";
import { BrandLogo } from "./brand-logo";

const links = [
  ["V30 4K Araç Kamerası", "/urun/v30"],
  ["OBD Park Kiti", "/urun/obd-park-kiti"],
  ["Özellikler", "/#ozellikler"],
  ["Kurulum", "/#kurulum"],
  ["SSS", "/#sss"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="header-inner">
        <BrandLogo />
        <nav className="nav" aria-label="Ana navigasyon">
          {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="cart-link" href="/sepet" aria-label={`Sepet, ${itemCount} ürün`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8Z" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
            <span className="cart-link__label">Sepet</span>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
          <button className="menu-button" type="button" aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
