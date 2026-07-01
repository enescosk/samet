import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const initial: Record<string, number> = { opacity: 0 }
  if (direction === 'up')    initial.y = 28
  if (direction === 'down')  initial.y = -28
  if (direction === 'left')  initial.x = 28
  if (direction === 'right') initial.x = -28

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ willChange: inView ? 'auto' : 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
