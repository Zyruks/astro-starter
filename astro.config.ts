import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Remember to change this URL
  site: 'https://example.com',
  integrations: [],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
