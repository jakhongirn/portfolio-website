import React from 'react'
import Hero from './Hero'
import GoTop from '../../components/cards/GoTop'
import InitialTransition from '../../components/cards/Transition'
import works from '../../components/cards/dataPreviewWorks'
import Work from '../../components/cards/Work'
import FadeUp from '../../components/cards/FadeUp'
import RevealAnimate from '../../components/cards/RevealAnimate'

const HomePage = () => {
  const displayWork = works.map((work, index) => {
    function isEven() {
      if (index % 2 === 0) {
        return true
      } else {
        return false
      }
    }
    return (
      <Work
        key={index}
        title={work.title}
        content={work.content}
        href={work.href}
        imageName={work.imageName}
        classContent={`col-span-2 ${
          isEven() ? 'lg:ml-28' : 'lg:mr-28 lg:order-first'
        }`}
      />
    )
  })
  return (
    <div className="w-full">
      <Hero />
      <div className="bg-white py-[10%] px-[15%] ">
        <RevealAnimate>
          <h1 className="text-5xl font-bold">Crafted with love.</h1>
        </RevealAnimate>
        <div>
          <FadeUp>
            <p className="mt-10">These are the selection of my recent works.</p>
          </FadeUp>
        </div>
      </div>

      <div className="w-full bg-lightcolor px-[10%] md:px-[15%]  ">
        {displayWork}
      </div>

      <div className="px-[15%] py-[10%]">
        <FadeUp>
          <p className="uppercase graytext text-sm tracking-widest">
            there's more
          </p>
        </FadeUp>
        <a href="/works">
          <RevealAnimate>
            <h1 className="text-4xl mt-4 font-bold transition-all duration-300 hover:translate-x-3">
              view all projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 w-6 h-6 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </h1>
          </RevealAnimate>
        </a>
      </div>
      <GoTop />
      <InitialTransition />
    </div>
  )
}

export default HomePage
