import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center bg-lightcolor py-[10%] px-[15%]">
        <div className="">
          <h1 className="text-4xl font-extralight leading-relaxed">Self-taught engineer who specializes in both-end development & builds web applications</h1>
         
        </div>
        <div className="justify-self-end">
          <img src="images/me.png" alt="" className="w-80 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
