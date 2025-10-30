import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'top' | 'bottom'
  delay?: number
  order?: number
  duration?: number
}

const Reveal = ({ children, direction = 'bottom', order, delay = 0.25, duration = 0.5 }: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
          y: direction === 'bottom' ? 50 : direction === 'top' ? -50 : 0
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0
        }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration, delay: order ? order * delay : delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
