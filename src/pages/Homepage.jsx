import React from 'react'
import Hero from '../components/Hero'
import ViewAll from '../components/ViewAll'
import Works from '../components/Works'
import WorksTitle from '../components/WorksTitle'
import GoTop from '../components/cards/GoTop'
import { motion, useIsPresent } from "framer-motion";
import InitialTransition from '../components/cards/Transition'

const Homepage = () => {
  const isPresent = useIsPresent();
  return (
    <div>
      <Hero />
      <WorksTitle />
      <Works />
      <ViewAll />
      <GoTop />
    
      <InitialTransition />
      </div>
  )
}

export default Homepage
