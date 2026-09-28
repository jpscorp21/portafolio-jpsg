import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
  title: z.string(),
  description: z.string(),
  detail: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int().positive(),
    featured: z.boolean().default(true),
    image: z.string(),
    imagePosition: z.string().default('center'),
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    technologies: z.array(z.string()).min(1),
    es: localizedText,
    en: localizedText,
    demoUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
  }),
});

export const collections = { projects };
