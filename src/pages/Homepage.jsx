import React from 'react'
import Hero from '../components/Hero'
import ViewAll from '../components/ViewAll'
import Works from '../components/Works'
import WorksTitle from '../components/WorksTitle'
import GoTop from '../components/cards/GoTop'
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Hero />
      <WorksTitle />
      <Works />
      <ViewAll />
      <GoTop />
    </motion.div>
  )
}

export default Homepage
