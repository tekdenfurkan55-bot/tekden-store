import type { MetadataRoute } from "next";
import { obdKit, v30 } from "@/lib/product";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1, images: [absoluteUrl("/media/hero-v30.webp")] },
    { url: absoluteUrl("/urun/v30"), lastModified: now, changeFrequency: "weekly", priority: 0.95, images: v30.images.map((i) => absoluteUrl(i.src)) },
    { url: absoluteUrl("/urun/obd-park-kiti"), lastModified: now, changeFrequency: "weekly", priority: 0.85, images: obdKit.images.map((i) => absoluteUrl(i.src)) },
    { url: absoluteUrl("/kurulum"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/sss"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/bilgi/hakkimizda"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl("/bilgi/iletisim"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
