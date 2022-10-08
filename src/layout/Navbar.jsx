import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealAnimate from '../components/cards/RevealAnimate'

const Navbar = () => {
  const [isActive, setActive] = useState(false)
  function toggleHandler() {
    setActive(!isActive)
  }

  return (
    <div className="lg:h-20 w-full fixed z-50  bg-transparent pt-5 lg:px-16 bg-lightcolor lg:bg-transparent">
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
        <div
          className={
            isActive
              ? 'absolute w-full top-16 z-50 text-center  py-1 bg-white border rounded-b-xl lg:hidden'
              : 'hidden'
          }
        >
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
      </nav>
    </div>
  )
}

export default Navbar
