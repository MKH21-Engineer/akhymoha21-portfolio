'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion'
import WorkItem from '@/components/ui/WorkItem'
import type { Project } from '@/types/project'

const CATS = ['all', 'ads', 'brand', 'social', 'motion'] as const

export default function WorkGrid({
  projects,
}: {
  projects: Project[]
}) {
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = projects.filter((p) => {
    const matchCat = active === 'all' || p.category === active
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase())

    return matchCat && matchSearch
  })

  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-12">
          Selected Work — 2023–2024
        </p>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">

          <div className="flex gap-2 flex-wrap">
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-all capitalize
                ${
                  active === cat
                    ? 'bg-[#e8ff4a] text-black border-[#e8ff4a]'
                    : 'border-neutral-700 text-neutral-400 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="
              bg-neutral-900
              border border-neutral-700
              text-neutral-100
              text-sm
              px-4 py-2
              rounded-lg
              outline-none
              focus:border-[#e8ff4a]
              w-48
              placeholder:text-neutral-500
            "
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filtered.map((project) => (
            <WorkItem
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}