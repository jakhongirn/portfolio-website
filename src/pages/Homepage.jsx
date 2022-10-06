import React from 'react'
import Hero from '../components/Hero'
import ViewAll from '../components/ViewAll'
import Works from '../components/Works'
import WorksTitle from '../components/WorksTitle'
import GoTop from '../components/cards/GoTop'
import InitialTransition from '../components/cards/Transition'

const Homepage = () => {

  return (
    <div className="w-full">
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
