import React from 'react'

const ScrollDown = () => {
    const gotoBottomHero = () => {
        window.scrollTo({
          top: 710,
          behavior: 'smooth'
        })
      } 
  return (
    <button onClick={gotoBottomHero} className=" text-sm font-semibold rotate-90 absolute -right-4 bottom-20 uppercase z-10">Scroll Down <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg></button>
  )
}

export default ScrollDown