"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-provider";

const links = [
  ["Ana Sayfa", "/"],
  ["X30", "/urun/x30"],
  ["OBD Park Kiti", "/#obd"],
  ["Özellikler", "/#ozellikler"],
  ["Yorumlar", "/#yorumlar"],
  ["SSS", "/#sss"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="TEKDEN ana sayfa">TEKDEN</Link>
        <button className="menu-button" aria-label="Menüyü aç veya kapat" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
        <nav className={open ? "nav nav--open" : "nav"} aria-label="Ana navigasyon">
          {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <Link className="cart-link" href="/sepet">Sepet <span>{itemCount}</span></Link>
      </div>
    </header>
  );
}
