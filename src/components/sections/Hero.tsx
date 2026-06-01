'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 px-8">
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}
          className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase
            text-neutral-500 border border-neutral-800 rounded-full px-4 py-1.5 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for projects
        </motion.div>

        <motion.h1 variants={fadeUp}
          className="text-[clamp(3rem,8vw,7rem)] font-light tracking-[-0.04em] leading-[0.95] mb-8">
          akhymoha<span className="text-[#e8ff4a]">21</span>
        </motion.h1>

        <motion.p variants={fadeUp}
          className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-400 font-light max-w-lg mb-4">
          Motion Designer & Front-End Developer
        </motion.p>

        <motion.p variants={fadeUp}
          className="text-sm text-neutral-500 max-w-md mb-12 leading-relaxed
            border-l-2 border-neutral-800 pl-4">
          High-energy motion graphics that sell — Ads, Brand Promos,
          Social Media Content. Engineering meets aesthetics.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap mb-20">
          <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#e8ff4a] text-black px-7 py-3.5 rounded-lg text-sm font-medium
              hover:bg-[#b8cc30] transition-colors">
            View Work
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-neutral-700 text-neutral-100 px-7 py-3.5 rounded-lg text-sm
              hover:border-neutral-400 transition-colors">
            Book a Call
          </button>
        </motion.div>

        <motion.div variants={fadeUp}
          className="flex gap-12 pt-8 border-t border-neutral-800 flex-wrap">
          {[['30+','Projects'],['48','Followers'],['800+','Total Views'],['4','Specialties']].map(([n,l]) => (
            <div key={l}>
              <div className="text-3xl font-light tracking-tight text-neutral-100">{n}</div>
              <div className="text-xs text-neutral-500 tracking-wide mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}