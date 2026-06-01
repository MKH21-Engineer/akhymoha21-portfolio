'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { gridItem } from '@/lib/motion'
import type { Project } from '@/types/project'

export default function WorkItem({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const router = useRouter()

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

  function handleClick() {
    router.push(`/work/${project.slug}`)
  }

  return (
    <motion.div
      variants={gridItem}
      whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden cursor-pointer bg-neutral-900 rounded-sm
        ${project.featured ? 'col-span-2 aspect-video' : 'aspect-[9/10]'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Thumbnail — Next.js Image for optimization */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-opacity duration-500
          ${hovered && project.previewVideo ? 'opacity-0' : 'opacity-100'}`}
        priority={project.featured}
      />

      {/* Video preview — only rendered if previewVideo exists */}
      {project.previewVideo && (
        <video
          ref={videoRef}
          src={project.previewVideo}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Dark overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
          transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Project info — slides up on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300
          ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
      >
        <p className="text-[10px] tracking-widest uppercase text-yellow-300 mb-1">
          {project.category}
        </p>
        <p className="text-white font-medium text-sm tracking-tight">{project.title}</p>
        <p className="text-white/40 text-[11px] mt-1">◈ {project.views} views</p>
        <p className="text-white/30 text-[10px] mt-2 tracking-wide">Click to view →</p>
      </div>
    </motion.div>
  )
}