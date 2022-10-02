import React, { useRef } from 'react'
import RevealAnimate from './cards/RevealAnimate';
import FadeUp from './cards/FadeUp';
import ScrollDown from './cards/ScrollDown';
import Button from './cards/Button';

const Hero = () => {

  return (
    <div className="bg-lightcolor h-screen w-full grid">
      <div className="hero flex justify-center relative">
        <ScrollDown />
        <div className="hero-circle "></div>
        <div className="w-full px-[15%] absolute  grid grid-cols-2  justify-center items-end bottom-[13%]">
          <div>
            
              <h1 className="text-5xl font-semibold ">
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
              <Button btnName="SEE MY WORKS" btnTitleClass="uppercase font-medium"/>
              </FadeUp>
            

  
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero
