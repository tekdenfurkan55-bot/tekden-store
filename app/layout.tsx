import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "TEKDEN V30 4K Araç Kamerası | TEKDEN Technology", template: "%s | TEKDEN" },
  description: "TEKDEN V30 4K ön ve 1080P arka araç kamerası. Wi-Fi, GPS, HDR, 3.2 inç ekran ve OBD ile 24 saat park modu. Ücretsiz hızlı kargo, 2 yıl garanti.",
  keywords: ["araç kamerası", "4K araç kamerası", "ön arka araç kamerası", "TEKDEN V30", "OBD park kiti", "park modu araç kamerası"],
  openGraph: { type: "website", locale: "tr_TR", siteName: "TEKDEN", images: [{ url: "/media/og-v30.jpg", width: 1200, height: 630, alt: "TEKDEN V30 4K Araç Kamerası" }] },
  twitter: { card: "summary_large_image", images: ["/media/og-v30.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } } : {}),
  formatDetection: { telephone: false },
  applicationName: "TEKDEN TECHNOLOGY",
  authors: [{ name: "TEKDEN TECHNOLOGY" }],
  creator: "TEKDEN TECHNOLOGY",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-icon.svg" },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

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
