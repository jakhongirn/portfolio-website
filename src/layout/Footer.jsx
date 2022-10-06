import React from 'react'
import Button from '../components/cards/Button'
import {Fade} from 'react-awesome-reveal'

const Footer = () => {
  return (
    <div className="bg-black text-white px-[15%] pt-[10%]">
      <h1 className="z-20 bg-black text-5xl text-center font-bold relative"><Fade direction="up" triggerOnce><span>Let's work together.</span></Fade><Fade triggerOnce delay={1000}><img src="images/circle-pattern.svg" alt="" className="absolute w-32 right-40 -top-16"/></Fade></h1>
      <p className="text-center mt-4 text-graytext">
        I'm available for Freelancing & Partnership 
        
      </p>
      <div className="flex justify-center">
        <a href="/contact"><Button btnName="Say Hello" btnClassName="before:bg-[#303030] hover:before:bg-[#303030]"/></a>
      </div>
      <div className="flex justify-center gap-x-6 pt-[10%]">
        <a href="https://github.com/jaykhans">
          <i class="fa-brands fa-lg fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jakhongirnagmatov/">
          <i class="fa-brands fa-lg fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/jakhongir_mir">
          <i class="fa-brands fa-lg fa-twitter"></i>
        </a>
        <a href="https://instagram.com/jakhongir_mir">
          <i class="fa-brands fa-lg fa-instagram"></i>
        </a>
        <a href="https://t.me/jaykhans">
          <i class="fa-brands fa-lg fa-telegram"></i>
        </a>
      </div>
      <div className="text-center pt-6 pb-2">
        <p className="text-xs">Made with ❤️ by Jakhongir Nagmatov.</p>
      </div>
    </div>
  )
}

export default Footer
