import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://clasico7.github.io", // URL de GitHub Pages
  base: "/finalAstropage/", // Ruta base (nombre del repositorio)
  integrations: [tailwind({ configFile: "./tailwind.config.mjs" })],
});
