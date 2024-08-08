import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
import icon from "astro-icon";
export default defineConfig({
  site: 'https://dpark26.github.io',
  integrations: [tailwind(), sitemap(), react(), icon()]
});