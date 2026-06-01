'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, gridItem } from '@/lib/motion'
import type { Project } from '@/types/project'

const CATS = ['all','ads','brand','social','motion'] as const

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>('all')
  const [search, setSearch] = useState('')

  const filtered = projects.filter(p => {
    const matchCat = active === 'all' || p.category === active
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-12">
          Selected Work — 2023–2024
        </p>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex gap-2 flex-wrap">
            {CATS.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-all capitalize
                  ${active === cat
                    ? 'bg-neutral-100 text-black border-neutral-100'
                    : 'border-neutral-700 text-neutral-400 hover:border-neutral-400'}`}>
                {cat}
              </button>
            ))}
          </div>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search projects…"
            className="bg-neutral-900 border border-neutral-700 text-neutral-100 text-sm
              px-4 py-2 rounded-lg outline-none focus:border-neutral-500 w-48 placeholder:text-neutral-500"
          />
        </div>

        <motion.div
          className="grid grid-cols-3 gap-0.5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {filtered.map(p => (
            <motion.div key={p.id} variants={gridItem}
              className={`relative overflow-hidden cursor-pointer bg-neutral-900
                ${p.featured ? 'col-span-2 aspect-video' : 'aspect-[9/10]'}
                group`}>
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center flex-col gap-3">
                <div className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center
                  group-hover:border-[#e8ff4a] transition-colors">
                  <span className="text-neutral-400 group-hover:text-[#e8ff4a] text-xs">▶</span>
                </div>
                <span className="text-[10px] text-neutral-500 tracking-widest uppercase">{p.tags[0]}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5
                translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-300">
                <p className="text-[10px] tracking-widest uppercase text-[#e8ff4a] mb-1">{p.category}</p>
                <p className="text-white text-sm font-medium tracking-tight">{p.title}</p>
                <p className="text-white/40 text-[11px] mt-1">◈ {p.views ?? 0} views</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
