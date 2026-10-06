"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-provider";
import { BrandLogo } from "./brand-logo";

const links = [
  ["Ana Sayfa", "/"],
  ["V30", "/urun/v30"],
  ["OBD Park Kiti", "/urun/obd-park-kiti"],
  ["Özellikler", "/#ozellikler"],
  ["SSS", "/#sss"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLogo />
        <button className="menu-button" aria-label="Menüyü aç veya kapat" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
        <nav className={open ? "nav nav--open" : "nav"} aria-label="Ana navigasyon">
          {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <Link className="cart-link" href="/sepet" aria-label={`Sepet, ${itemCount} ürün`}><i aria-hidden="true">⌑</i> Sepet <span>{itemCount}</span></Link>
      </div>
    </header>
  );
}
