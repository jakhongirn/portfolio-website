import React from 'react'
import Button from '../components/cards/Button'

const Footer = () => {
  return (
    <div className="bg-black text-white px-[15%] pt-[10%] relative">
      <h1 className="z-10 text-5xl text-center font-bold">Let's work together. <img src="images/circle-pattern.svg" className="absolute top-20  inline w-32" alt="" /></h1>
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
        <a href="">
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
