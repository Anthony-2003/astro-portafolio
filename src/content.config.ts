import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const schema = z.object({
  title: z.string(),
  company: z.string(),
  date: z.string(),
  responsabilities: z.array(z.string()),
});

const experienceEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/data/experiences/es` }),
  schema,
});

const experienceEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/data/experiences/en` }),
  schema,
});

export const collections = { experienceEs, experienceEn };
