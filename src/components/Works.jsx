import React from 'react'
import { WorkContent, WorkImage } from './cards/Work';

const Works = () => {
  return (
    <div className="bg-lightcolor px-[15%] py-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20">
      <WorkContent 
            class="lg:mr-28 "
            title="meras electro mechanic website"
            type="Front-end App"
            content="Business website for presenting their services, products and interacting
            with business owners."
        />
        <WorkImage imageName="meras.uz.png" classImg="order-first lg:order-none"/>

        <WorkImage imageName="travella.png" />
        <WorkContent
            class="lg:ml-28"
            title="travella - online visa services & information check"
            type="Full Stack App"
            content="Website that provides the simplest solution to process your travel visa."
        />
        
        <WorkContent 
            class="lg:mr-28 order-last lg:order-none"
            title="medical and informational web page"
            type="Web app"
            content="Website that offers medical articles and papers to educate people about HIV."
        />
        <WorkImage imageName="medicine.png" />
        
      </div>
    </div>
  )
}

export default Works
