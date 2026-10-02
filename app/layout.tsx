import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEKDEN",
  description: "TEKDEN otomotiv teknolojileri e-ticaret sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
