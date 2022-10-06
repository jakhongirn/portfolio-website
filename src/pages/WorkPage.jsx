import React from 'react'
import { WorkImage, WorkContent } from '../components/cards/Work'
import GhProject from '../components/cards/GhProject'
import RevealAnimate from '../components/cards/RevealAnimate'
import GoTop from '../components/cards/GoTop'
import InitialTransition from '../components/cards/Transition'
import PageTitle from '../components/cards/PageTitle'

const WorkPage = () => {
  return (
    
    <div className="bg-lightgray py-[15%] px-[10%] md:px-[15%]">
        <PageTitle pageTitle="works" />
        <RevealAnimate>
            <div className="relative mt-10 lg:mt-0">
                <img src="images/works-pattern.jpg" className="w-[400px]" alt="" />
                <h1 className="text-5xl md:text-6xl font-bold bg-white absolute top-[40%]">My works.</h1>
            </div>
        </RevealAnimate>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-24 mt-10 pt-[10%]">
        <WorkImage imageName="meras.uz.png"/>
        <WorkContent 
            class="lg:ml-28"
            title="meras electro mechanic website"
            type="Front-end App"
            content="Business website for presenting their services, products and interacting
            with business owners."
        />
        <WorkContent
            class="lg:mr-28"
            title="travella - online visa services & information check"
            type="Full Stack App"
            content="Website that provides the simplest solution to process your travel visa."
        />
        <WorkImage imageName="travella.png"/>

        <WorkImage imageName="medicine.png"/>
        <WorkContent 
            class="lg:ml-28"
            title="medical and informational web page"
            type="Web app"
            content="Website that offers medical articles and papers to educate people about HIV."
        />
        <WorkContent
            class="lg:mr-28"
            title="ecogosht - meat products and services"
            type="Front-end App"
            content="Business website that provides people excellent meat products and services."
        />
        <WorkImage imageName="ecogosht.png"/>

        <WorkImage imageName="shuboarch.png"/>
        <WorkContent 
            class="lg:ml-28"
            title="architectural and interior design services"
            type="Web app"
            content="Website for company asd that offers interior and exterior design services for all types of buildings."
        />
        <WorkContent
            class="lg:mr-28"
            title="portfolio/cv website "
            type="Front-end App"
            content="Older version of my portfolio website"
        />
        <WorkImage imageName="myportfolio.png"/>

      </div>

      <div className="mt-36">
            <RevealAnimate>
                <h1 className="text-4xl font-bold">GitHub Projects.</h1>
            </RevealAnimate>
            <GhProject projectNumber="/ 01" projectName="blog-website" />
            <GhProject projectNumber="/ 02" projectName="react-todo app" />
            <GhProject projectNumber="/ 03" projectName="contact-form (with telegram)" />
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