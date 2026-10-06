import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "TEKDEN TECHNOLOGY", short_name: "TEKDEN", description: "TEKDEN consumer electronics", start_url: "/", display: "standalone", background_color: "#f5f6f7", theme_color: "#0b63ce", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }] };
}
