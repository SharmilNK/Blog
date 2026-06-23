import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const tracks = ['concepts', 'evaluation', 'mlops'];
  const entries = (
    await Promise.all(
      tracks.map(async (track) => {
        const items = await getCollection(track, ({ data }) => !data.draft);
        return items.map((item) => ({ ...item, track }));
      })
    )
  ).flat();

  entries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: 'MLStories',
    description: 'AI/ML concepts taught through storytelling.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishDate,
      link: `/${entry.track}/${entry.slug}/`,
    })),
  });
}
