import React, { useRef } from 'react'
import RevealAnimate from './cards/RevealAnimate';
import FadeUp from './cards/FadeUp';
import ScrollDown from './cards/ScrollDown';

const Hero = () => {

  return (
    <div className="bg-lightcolor h-screen w-full grid">
      <div className="hero flex justify-center relative">
        <ScrollDown />
        <div className="hero-circle "></div>
        <div className="w-full px-[15%] absolute  grid grid-cols-2  justify-center items-end bottom-[13%]">
          <div>
            
              <h1 className="text-5xl font-semibold">
                <RevealAnimate>Hi,</RevealAnimate>
                <br />
                <RevealAnimate>I'm Jakhongir.</RevealAnimate>
                <br />
                <RevealAnimate>Software Engineer.</RevealAnimate>
              </h1>
            
            <FadeUp>
              <h2 className="text-2xl mt-10">
                Full Stack Developer / React.js Lover
              </h2>
            </FadeUp>

            <FadeUp>
              <button className="mt-10 text-lg font-medium uppercase bg-[#E8E8E8] py-2 px-4 flex items-center gap-2 rounded-full">
                See my works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              </FadeUp>
            

  
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
