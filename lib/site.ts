export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tekden-store.vercel.app";
export const brandName = "TEKDEN TECHNOLOGY";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
