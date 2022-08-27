import React from 'react'
import { WorkImage, WorkContent } from '../components/cards/Work'

const WorkPage = () => {
  return (
    <div className="bg-lightgray py-[15%] px-[15%]">
        <div className="">
            <h1 className="text-5xl font-bold">My works.</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-20 mt-10">
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

        

      </div>
        
    </div>
  )
}

export default WorkPage