'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { gridItem } from '@/lib/motion'
import type { Project } from '@/types/project'

export default function WorkItem({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  // FIX 1: initialise with undefined explicitly so clearTimeout never receives
  // an uninitialised ref — satisfies ts(2554) "Expected 1 argument, got 0"
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  function handleMouseEnter() {
    timerRef.current = setTimeout(() => {
      setHovered(true)
      videoRef.current?.play()
    }, 300)
  }

  function handleMouseLeave() {
    clearTimeout(timerRef.current)
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    // FIX 2: hoverScale spread removed — framer-motion v11 no longer accepts
    // a plain { scale, transition } object on whileHover; use inline whileHover
    // with a proper TargetAndTransition shape instead
    <motion.div
      variants={gridItem}
      whileHover={{ scale: 1.03, transition: { duration: 0.35, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden cursor-pointer bg-neutral-900
        ${project.featured ? 'col-span-2 aspect-video' : 'aspect-[9/10]'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FIX 3: <img> → next/image to satisfy the no-img-element ESLint rule.
          fill + sizes replaces explicit width/height for fluid containers.    */}
      <div className="relative w-full h-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-500
            ${hovered ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
        />
      </div>

      {/* Video preview */}
      {project.previewVideo && (
        <video
          ref={videoRef}
          src={project.previewVideo}
          muted loop playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
        transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Info */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300
        ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
        <p className="text-[10px] tracking-widest uppercase text-yellow-300 mb-1">{project.category}</p>
        <p className="text-white font-medium text-sm tracking-tight">{project.title}</p>
        <p className="text-white/40 text-[11px] mt-1">◈ {project.views} views</p>
      </div>
    </motion.div>
  )
}