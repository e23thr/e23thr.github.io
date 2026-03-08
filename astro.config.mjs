// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://e23thr.github.io',
  base: '/e23thr.github.io',
  integrations: [react(), tailwind()],
});
