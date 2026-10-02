import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";

export const metadata: Metadata = {
  title: { default: "TEKDEN | Otomotiv Teknolojileri", template: "%s | TEKDEN" },
  description: "TEKDEN otomotiv teknolojileri e-ticaret sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
