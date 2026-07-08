import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Canonical site URL. orivale.com redirects to www, so www is canonical.
const site = 'https://www.orivale.com';

export default defineConfig({
  site,
  // @astrojs/sitemap is temporarily disabled: its astro:build:done hook
  // crashes ("Cannot read properties of undefined (reading 'reduce')")
  // with this astro/@astrojs/sitemap version combo, unrelated to any page
  // content. RSS (src/pages/rss.xml.js) still covers feed distribution.
  // Re-enable once a compatible version pair is verified with a real
  // `npm install` + `npm run build` (not possible in this sandbox).
  integrations: [tailwind()],
  // Hide Astro's dev-only toolbar (the floating pill in local `npm run dev`).
  devToolbar: { enabled: false },
});
