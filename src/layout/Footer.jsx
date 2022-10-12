import React from 'react'
import Button from '../components/cards/Button'
import CircleSvg from '../components/cards/CircleSvg'
import { motion } from 'framer-motion'
import FadeUp from '../components/cards/FadeUp'

const Footer = () => {
  return (
    <div className="bg-black text-white px-[15%] pt-[10%]">
      <h1
        className="z-20 text-4xl md:text-5xl text-center font-bold relative"
      >
        <FadeUp delay='1'>
          <span>Let's work together.</span>
        </FadeUp>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 1, duration: 0.5}}
          viewport={{once: true}}
          >
          <CircleSvg/>
        </motion.div>
      </h1>

      <p className="text-center mt-4 text-graytext">
        I'm available for Freelancing & Partnership
      </p>
      <div className="flex justify-center">
        <a href="/contact">
          <Button
            btnName="Say Hello"
            btnClassName="before:bg-[#303030] hover:before:bg-[#303030]"
          />
        </a>
      </div>
      <div className="flex justify-center gap-x-6 pt-[10%]">
        <a href="https://github.com/jaykhans" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-lg fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jakhongirnagmatov/" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-lg fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/jakhongir_mir" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-lg fa-twitter"></i>
        </a>
        <a href="https://instagram.com/jakhongir_mir" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-lg fa-instagram"></i>
        </a>
        <a href="https://t.me/jaykhans" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-lg fa-telegram"></i>
        </a>
      </div>
      <div className="text-center pt-6 pb-2">
        <p className="text-xs">Made with ❤️ by Jakhongir Nagmatov.</p>
      </div>
    </div>
  )
}

export default Footer
