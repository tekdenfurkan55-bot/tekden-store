import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Güvenli Ödeme", description: "TEKDEN teslimat, adres ve sipariş özeti.", robots: { index: false, follow: false } };

export default function CheckoutPage() {
  return <><SiteHeader /><main className="inner-page inner-page--checkout"><CheckoutForm /></main></>;
}
