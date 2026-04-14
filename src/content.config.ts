import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  sources: z.array(z.string()).default([]),
  date: z.coerce.date(),
  related: z.array(z.string()).default([]),
});

const diabete = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diabete' }),
  schema: articleSchema,
});

const anesthesie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/anesthesie' }),
  schema: articleSchema,
});

export const collections = { diabete, anesthesie };
