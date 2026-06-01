'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp } from '@/lib/motion'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}