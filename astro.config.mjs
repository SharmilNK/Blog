import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once it's connected in Vercel settings.
const site = 'https://mlstories.vercel.app';

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
});
