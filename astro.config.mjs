// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { template } from "./src/settings";

export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), mdx()],
  site: template.website_url,
  base: template.base,
});