import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Teslimat ve Adres" };

export default function CheckoutPage() {
  return <><SiteHeader /><main className="inner-page inner-page--checkout"><CheckoutForm /></main></>;
}
