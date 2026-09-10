import { defineCollection, z } from 'astro:content';

const quizQuestion = z.object({
  tier: z.enum(['basic', 'intermediate', 'expert']),
  question: z.string(),
  options: z.array(z.string()).min(2).max(5),
  answer: z.number().int().min(0),
});

const storySchema = z.object({
  title: z.string(),
  track: z.enum(['concepts', 'evaluation', 'mlops']),
  week: z.number().int().positive(),
  description: z.string().max(800),
  // Short punchy badge for the story card, e.g. "the heist", "production down".
  tagline: z.string().max(40).optional(),
  // A single emoji used on the story card and the story header.
  icon: z.string().max(8),
  characters: z.array(z.string()),
  publishDate: z.coerce.date(),
  draft: z.boolean().default(false),
  // One-line hook used for cross-posting (Beehiiv, social snippets).
  socialSnippet: z.string().max(280),
  quiz: z.array(quizQuestion).length(3).optional(),
});

const concepts = defineCollection({ type: 'content', schema: storySchema });
const evaluation = defineCollection({ type: 'content', schema: storySchema });
const mlops = defineCollection({ type: 'content', schema: storySchema });

export const collections = { concepts, evaluation, mlops };
