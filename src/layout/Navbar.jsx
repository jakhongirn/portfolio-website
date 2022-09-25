import React from 'react';
import { Link } from 'react-router-dom';
import RevealAnimate from '../components/cards/RevealAnimate';

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed z-10 top-0 bg-transparent pt-5 px-16">
      <nav className="flex justify-between items-end text-graytext">
        <div className="">
          <RevealAnimate>
            <Link to="/" className="text-5xl text-black font-bold">
              JN
            </Link>
          </RevealAnimate>
        </div>
        <div className="flex justify-end gap-10">
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
      </nav>
    </div>
  )
}

export default Navbar
