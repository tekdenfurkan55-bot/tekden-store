import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "TEKDEN TECHNOLOGY", template: "%s | TEKDEN" },
  description: "TEKDEN consumer electronics ürünleri ve V30 4K araç kamerası.",
  applicationName: "TEKDEN TECHNOLOGY",
  authors: [{ name: "TEKDEN TECHNOLOGY" }],
  creator: "TEKDEN TECHNOLOGY",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-icon.svg" },
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
