import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Devpill — Boutique IT consultancy",
    short_name: "Devpill",
    description:
      "Senior, hands-on engineering for cloud, data, AI and product work.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
