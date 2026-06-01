import Hero from '@/components/sections/Hero'
import WorkGrid from '@/components/sections/WorkGrid'
import CaseStudies from '@/components/sections/CaseStudies'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import { allProjects } from '@/lib/projects'
import type { Project } from '@/types/project'

export default function Home() {
  const projects = [...allProjects].sort((a: Project, b: Project) =>
    Number(b.featured) - Number(a.featured)
  )
  return (
    <>
      <Hero />
      <WorkGrid projects={projects} />
      <CaseStudies projects={projects.filter((p: Project) => p.featured)} />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}