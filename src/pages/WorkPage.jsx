import React from 'react'
import { WorkImage, WorkContent } from '../components/cards/Work'

const WorkPage = () => {
  return (
    <div className="bg-lightgray py-[15%] px-[15%]">
        <div className="relative pb-[10%]">
            <img src="images/works-pattern.jpg" className="w-[400px]" alt="" />
            <h1 className="text-6xl font-bold bg-white absolute top-[40%]">My works.</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-24 mt-10">
        <WorkImage imageName="meras.uz.png"/>
        <WorkContent 
            class="ml-28"
            title="meras electro mechanic website"
            type="Front-end App"
            content="Business website for presenting their services, products and interacting
            with business owners."
        />
        <WorkContent
            class="mr-28"
            title="travella - online visa services & information check"
            type="Full Stack App"
            content="Website that provides the simplest solution to process your travel visa."
        />
        <WorkImage imageName="travella.png"/>

        <WorkImage imageName="medicine.png"/>
        <WorkContent 
            class="ml-28"
            title="medical and informational web page"
            type="Web app"
            content="Website that offers medical articles and papers to educate people about HIV."
        />
        <WorkContent
            class="mr-28"
            title="ecogosht - meat products and services"
            type="Front-end App"
            content="Business website that provides people excellent meat products and services."
        />
        <WorkImage imageName="ecogosht.png"/>

        

      </div>
        
    </div>
  )
}

export default WorkPage