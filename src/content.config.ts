import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  date: z.string(),
  responsabilities: z.array(z.string()),
});

export const projectSchema = z.object({
  imageUrl: z.string().url(),
  name: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  projectUrl: z.string().url(),
});

const experienceEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/data/experiences/es` }),
  schema: experienceSchema,
});

const experienceEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/data/experiences/en` }),
  schema: experienceSchema,
});

const projectsEs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/data/projects/es` }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/data/projects/en` }),
  schema: projectSchema,
});

export const collections = { experienceEs, experienceEn, projectsEn, projectsEs };
