import { allProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Project } from '@/types/project'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allProjects.map((p: Project) => ({
    slug: p.slug,
  }))
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params

  const project = allProjects.find(
    (p: Project) => p.slug === slug
  )

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-8 max-w-4xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-yellow-300 mb-3">
        {project.category}
      </p>

      <h1 className="text-4xl font-semibold tracking-tighter text-neutral-100 mb-4">
        {project.title}
      </h1>

      <p className="text-neutral-400 mb-12">
        {project.description}
      </p>

      {project.challenge && (
        <section className="mb-10">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            Challenge
          </h2>
          <p className="text-neutral-300">
            {project.challenge}
          </p>
        </section>
      )}

      {project.process && (
        <section className="mb-10">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            Process
          </h2>
          <p className="text-neutral-300">
            {project.process}
          </p>
        </section>
      )}

      {project.result && (
        <section className="mb-10">
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
            Result
          </h2>
          <p className="text-neutral-300">
            {project.result}
          </p>
        </section>
      )}

      {project.previewVideo && (
        <video
          src={project.previewVideo}
          controls
          className="w-full rounded-lg mt-8"
        />
      )}
    </main>
  )
}