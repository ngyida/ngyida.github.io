import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    navLabel: z.string(),
    order: z.number().int(),
    intro: z.string().optional(),
  }),
});

const career = defineCollection({
  loader: glob({ base: "./src/content/career", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    listBlurb: z.string(),
    period: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    sortOrder: z.number().int(),
    tags: z.array(z.string()).optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    listBlurb: z.string(),
    period: z.string().optional(),
    stack: z.array(z.string()).optional(),
    sortOrder: z.number().int(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
  career,
  projects,
};
