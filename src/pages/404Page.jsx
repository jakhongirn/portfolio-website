import React from 'react'
import { motion } from "framer-motion";

const NoPage = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
    <div className="h-screen flex items-center justify-center">
        <h1>PAGE NOT FOUND! 404</h1>
    </div>
    </motion.div>
  )
}

export default NoPage