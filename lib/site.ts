/** Sitenin asıl adresi (canonical, site haritası, paylaşım görselleri). */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tekdenteknoloji.com";
export const brandName = "TEKDEN TECHNOLOGY";
export const siteName = "TEKDEN";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
