import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/checkout", "/sepet", "/api/"] }, sitemap: absoluteUrl("/sitemap.xml") };
}
