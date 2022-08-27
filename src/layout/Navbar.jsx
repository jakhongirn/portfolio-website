import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed z-10 top-0 bg-transparent pt-5 px-16">
      <nav className="flex justify-between items-end text-graytext">
        <div className="">
          <Link to="/" className="text-5xl text-black font-bold">
            JN
          </Link>
        </div>
        <div className="flex justify-end gap-10">
          <Link to="/about">about</Link>
          <Link to="/works">works</Link>
          <Link to="/contact">contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
