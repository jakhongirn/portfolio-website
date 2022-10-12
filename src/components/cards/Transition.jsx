import React from 'react'
import { motion, useIsPresent } from 'framer-motion'

export default function InitialTransition() {
  const isPresent = useIsPresent()
  return (
    <motion.div
      className="privacy-screen"
      initial={{ scaleX: 1.5 }}
      animate={{ scaleX: 0, transition: { duration: 1.5, ease: 'circOut' } }}
      exit={{ scaleX: 1.5, transition: { duration: 1, ease: 'circIn' } }}
      style={{ originX: isPresent ? 0 : 1.5 }}
    />
  )
}
