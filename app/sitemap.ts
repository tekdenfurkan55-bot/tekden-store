import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/urun/v30", "/urun/obd-park-kiti", "/bilgi/hakkimizda", "/bilgi/iletisim"].map((path, index) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: index < 3 ? "weekly" : "monthly", priority: index === 0 ? 1 : index < 3 ? 0.9 : 0.5 }));
}
