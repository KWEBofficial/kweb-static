import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  from?: number
  to: number
}

const AnimatedCounter = ({ from = 0, to }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from)

  const ref = useRef(null)
  const inView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
    once: true
  })

  useEffect(() => {
    if (inView && count < to) {
      const timeoutId = setTimeout(() => {
        setCount(count + 1)
      }, 5)

      return () => clearTimeout(timeoutId)
    }
  }, [inView, count, to])

  return <motion.span ref={ref}>{count}</motion.span>
}

export default AnimatedCounter
