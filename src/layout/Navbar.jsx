import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealAnimate from '../components/cards/RevealAnimate'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [isActive, setActive] = useState(false)
  function toggleHandler() {
    setActive(!isActive)
  }

  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

  return (
    <div className="lg:h-20 w-full fixed z-50   bg-transparent pt-5 lg:px-16 bg-lightcolor lg:bg-transparent">
      <nav>
        <div className="flex justify-between items-end text-graytext px-4">
        <div>
          <RevealAnimate>
            <Link to="/" className="text-3xl md:text-4xl lg:text-5xl  text-black font-bold">
              JN
            </Link>
          </RevealAnimate>
        </div>
        <div className=" hidden lg:flex justify-end gap-10">
          <RevealAnimate>
            <Link to="/about">about</Link>
          </RevealAnimate>
          <RevealAnimate>
            <Link to="/works">works</Link>
          </RevealAnimate>
          <RevealAnimate>
            <Link to="/contact">contact</Link>
          </RevealAnimate>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden pr-4 z-10">
          <button onClick={toggleHandler}>
            <svg
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </button>
        </div>
      </div>
        {/* Mobile menu */}
        {
          isActive && (
            <motion.div
          className='absolute w-full top-0 z-50 text-center bg-black text-white border rounded-b-xl lg:hidden'
          variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:1}}
              exit="exit"
        >
          <button onClick={toggleHandler} className='absolute top-4 right-6 text-2xl md:text-4xl bg-white text-black px-5 py-3 md:px-6 md:py-4 rounded-full'>X</button>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl'>
          <div className="my-2">
              
              <Link
                onClick={toggleHandler}
                to={'/'}
                className="px-8 py-1 rounded-full hover:bg-black hover:text-white duration-300 "
              >
                home
              </Link>
            </div>

            <div className="my-2">
              
              <Link
                onClick={toggleHandler}
                to={'/about'}
                className="px-8 py-1 rounded-full hover:bg-black hover:text-white duration-300 "
              >
                about
              </Link>
            </div>
            <div className="my-2">
              <Link
                onClick={toggleHandler}
                to={'/works'}
                className="px-8 py-1 rounded-full hover:bg-black hover:text-white duration-300 "
              >
                works
              </Link>
            </div>
            <div className="my-2">
              <Link
                onClick={toggleHandler}
                to={'/contact'}
                className="px-8 py-1 rounded-full hover:bg-black hover:text-white duration-300 "
              >
                contact
              </Link>
            </div>
          </div>
        </motion.div>
          )
        }
      </nav>
    </div>
  )
}

export default Navbar
