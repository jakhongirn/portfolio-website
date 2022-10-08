import React from 'react'
import Hero from './Hero'
import WorksTitle from './WorksTitle'
import ViewAll from './ViewAll'
import Works from './Works'
import GoTop from '../../components/cards/GoTop'
import InitialTransition from '../../components/cards/Transition'

const HomePage = () => {

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

export default HomePage
