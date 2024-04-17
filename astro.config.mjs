import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true
  })],
  site: 'https://e23thr.github.io',
  base: '/',
});