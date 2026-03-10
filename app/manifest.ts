import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guru Subramaniam Shyamala | cloudife.com",
    short_name: "Guru",
    description:
      "Portfolio for Guru Subramaniam Shyamala, Cloud Engineer and Forward Deployed Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#f7f4ee",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      },
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
