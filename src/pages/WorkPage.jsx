import React from 'react'
import GhProject from '../components/cards/GhProject'
import RevealAnimate from '../components/cards/RevealAnimate'
import GoTop from '../components/cards/GoTop'
import InitialTransition from '../components/cards/Transition'
import PageTitle from '../components/cards/PageTitle'
import Work from '../components/cards/Work'


const WorkPage = () => {


  return (
    <div className="bg-lightgray py-[15%] px-[10%] md:px-[15%]">
      <PageTitle pageTitle="works" />
      <RevealAnimate>
        <div className="relative mt-10 lg:mt-0">
          <img src="images/works-pattern.jpg" className="w-[400px]" alt="" />
          <h1 className="text-5xl md:text-6xl font-bold bg-white absolute top-[40%]">
            My works.
          </h1>
        </div>
      </RevealAnimate>
      <div className="mt-10 pt-[10%] ">
        <Work />
      </div>

      <div className="mt-36">
        <RevealAnimate>
          <h1 className="text-4xl font-bold">GitHub Projects.</h1>
        </RevealAnimate>
        <GhProject projectNumber="/ 01" projectName="blog-website" />
        <GhProject projectNumber="/ 02" projectName="react-todo app" />
        <GhProject
          projectNumber="/ 03"
          projectName="contact-form (with telegram)"
        />
        <GhProject projectNumber="/ 04" projectName="react-intro app" />
        <GhProject projectNumber="/ 05" projectName="Quiz maker" />
        <GhProject projectNumber="/ 06" projectName="signup-mail form" />
        <GhProject projectNumber="/ 07" projectName="instagram-follower bot" />
        <GhProject projectNumber="/ 08" projectName="to-do app (node.js)" />
      </div>
      <GoTop />
      <InitialTransition />
    </div>
  )
}

export default WorkPage
