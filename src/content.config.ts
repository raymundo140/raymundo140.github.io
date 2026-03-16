import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/BlogPosts",
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    date: z.string().optional(),
  }),
});

const experience = defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/experience",
    }),
    schema: z.object({
      title: z.string(),
      company: z.string(),
      location: z.string(),
      dateRange: z.string(),
      tags: z.array(z.string()),
      logo: z.string(),
      companyUrl: z.string().optional(),
    }),
  })

  const research = defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/research",
    }),
    schema: z.object({
      title: z.string(),
      institution: z.string(),
      location: z.string(),
      date: z.string(),
      tags: z.array(z.string()),
      logo: z.string(),
    }),
  })
  
export const collections = { blog, projects, experience, research }
  

