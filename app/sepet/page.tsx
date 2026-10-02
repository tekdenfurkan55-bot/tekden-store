import type { Metadata } from "next";
import { CartPage } from "@/components/cart-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Sepet" };

export default function BasketPage() {
  return <><SiteHeader /><main className="inner-page"><CartPage /></main><SiteFooter /></>;
}
