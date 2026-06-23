import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const tracks = ['concepts', 'evaluation', 'mlops'] as const;

const pages: Record<string, { title: string; description: string }> = {};
for (const track of tracks) {
  const entries = await getCollection(track, ({ data }) => !data.draft);
  for (const entry of entries) {
    pages[`${track}/${entry.slug}`] = {
      title: entry.data.title,
      description: entry.data.description,
    };
  }
}

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[15, 23, 42]],
    border: { color: [56, 189, 248], width: 4 },
    font: {
      title: { color: [255, 255, 255], size: 64 },
      description: { color: [203, 213, 225], size: 28 },
    },
    fonts: [],
    padding: 60,
    logo: undefined,
    quality: 90,
    format: 'PNG',
  }),
});

// Generates a static PNG per story at build time (astro-og-canvas),
// keeping the site fully static — no serverless image rendering at request time.
