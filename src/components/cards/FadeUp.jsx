import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const FadeUp = (props) => {
  const scrollRef = useRef()
  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5, delay: props.delay }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  )
}

export default FadeUp
