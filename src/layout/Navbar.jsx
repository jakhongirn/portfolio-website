import React from 'react'

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed top-0 bg-transparent pt-5 px-16">
        <nav className="flex justify-between items-end text-[#777777]">
            <div className="">
                <a href="" className="text-5xl text-black font-bold">JN</a>
            </div>
                <div className="flex justify-end gap-10">
                    <a href="">About</a>
                    <a href="">Works</a>
                    <a href="">Contact</a>
                </div>
        </nav>
    </div>
  )
}

export default Navbar