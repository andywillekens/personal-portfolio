import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.json'
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/**/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
        image: z.string(),
        urls: z.object({
          live: z.string(),
          source: z.string()
        })
      })
    }),
    jobs: defineCollection({
      type: 'data',
      source: 'jobs/**/*.json',
      schema: z.object({
        company: z.string(),
        title: z.string(),
        activities: z.array(z.string()),
        employmentPeriod_start: z.string(),
        employmentPeriod_end: z.string(),
        techStack: z.array(z.string()),
        locations: z.array(z.string())
      })
    }),
    profile: defineCollection({
      type: 'data',
      source: 'profile/**/*.json',
      schema: z.object({
        order: z.number(),
        title: z.string(),
        text: z.string(),
        data: z.object({
          email: z.string(),
          phone: z.string(),
          github: z.string(),
          linkedin: z.string(),
          skills: z.array(z.string())
        })
      })
    }),
    generalInfo: defineCollection({
      type: 'data',
      source: 'general-info/**/*.json',
      schema: z.object({
        order: z.number(),
        title: z.string(),
        text: z.string(),
        data: z.object({
          skills: z.array(z.string())
        })
      })
    })
  }
})
