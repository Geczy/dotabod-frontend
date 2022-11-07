import * as z from 'zod'
import { createSource } from '.'

export const Page = createSource({
  contentPath: 'content/pages',
  basePath: '/',
  frontMatter: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
  }),
})
