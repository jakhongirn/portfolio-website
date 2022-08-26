import React from 'react'
import Hero from '../components/Hero'
import ViewAll from '../components/ViewAll'
import Works from '../components/Works'
import WorksTitle from '../components/WorksTitle'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <WorksTitle />
        <Works />
        <ViewAll />
    </div>
  )
}

export default Homepage