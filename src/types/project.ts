export interface Project {
  id: string
  title: string
  category: 'ads' | 'brand' | 'social' | 'motion'
  thumbnail: string
  previewVideo?: string
  fullVideo?: string
  description: string
  tags: string[]
  featured: boolean
  date: string
  views?: number
  challenge?: string
  process?: string
  result?: string
  client?: string
  slug: string
  url: string
}