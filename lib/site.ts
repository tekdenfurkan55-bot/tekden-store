const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;

/** Sitenin asıl adresi. Kendi alan adı alındığında Vercel'de NEXT_PUBLIC_SITE_URL ile ayarlanır. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? vercelProduction ?? "https://tekden-store-nine.vercel.app";
export const brandName = "TEKDEN TECHNOLOGY";
export const siteName = "TEKDEN";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
