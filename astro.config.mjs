import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !/https:\/\/example\.com\/blog\/\d+/.test(page),
      customPages: ["https://example.com/custom-page"],
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.8,
      serialize: (item) => {
        if (item.url.at(-1) === "/") {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
