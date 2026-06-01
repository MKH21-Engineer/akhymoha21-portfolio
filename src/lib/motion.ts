import type { Variants } from 'framer-motion'

// Fade up — standard reveal for sections
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// Staggered container — wraps a list of children
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

// Grid item — for work grid cells
export const gridItem: Variants = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// Page transition — wraps each route
export const pageTransition: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
}

// Hero name — letter-by-letter (optional upgrade)
export const heroLetterVariants: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Hover scale — use on motion.div
export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.35, ease: 'easeOut' } },
  whileTap:   { scale: 0.98 },
}