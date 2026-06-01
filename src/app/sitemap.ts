import { MetadataRoute } from 'next'
import { allProjects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = allProjects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/work/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.9 : 0.7,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ]
}