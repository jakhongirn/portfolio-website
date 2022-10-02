import React from 'react'
import Hero from '../components/Hero'
import ViewAll from '../components/ViewAll'
import Works from '../components/Works'
import WorksTitle from '../components/WorksTitle'
import GoTop from '../components/cards/GoTop'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WorksTitle />
      <Works />
      <ViewAll />
      <GoTop />
    </div>
  )
}

export default Homepage
