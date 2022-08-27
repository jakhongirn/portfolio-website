import React from 'react'
import Button from '../components/cards/Button'

const Footer = () => {
  return (
    <div className="bg-black text-white px-[15%] pt-[10%]">
      <h1 className="text-5xl text-center font-bold">Let's collaborate.</h1>
      <p className="text-center mt-4 text-graytext">
        I'm available for Consultancy & Freelancing.
      </p>
      <div className="flex justify-center">
        <Button btnName="Say Hello" addClass="bg-graytext" />
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
