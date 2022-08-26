import React from 'react'

const Hero = () => {
  return (
    <div className="bg-lightcolor h-screen w-full grid ">
      <div className="hero flex justify-center relative">
        <div className="text-sm font-semibold rotate-90 absolute -right-4 bottom-20 uppercase">Scroll Down <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg></div>
        <div className="hero-circle "></div>
        <div className="w-full px-[15%] absolute  grid grid-cols-2  justify-center items-end bottom-[13%]">
          <div>
            <h1 className="text-5xl font-semibold">
              Hi,
              <br />
              I'm Jakhongir.
              <br />
              Software Engineer.
            </h1>
            <h2 className="text-2xl mt-10">
              Full Stack Developer / React.js Lover
            </h2>

            <button className="mt-10 text-lg font-medium uppercase bg-[#E8E8E8] py-2 px-4 flex items-center gap-2 rounded-full">
              See my works{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>

            <div className="mt-10">
              <a className="mr-6 underline" href="https://github.com/jaykhans">Github</a> <span>/</span>
              <a className="mx-6 underline" href="https://www.linkedin.com/in/jakhongirnagmatov/">Linkedin</a> <span>/</span>
              <a className="mx-6 underline" href="https://twitter.com/jakhongir_mir">Twitter</a>

            </div>
          </div>
          <div>
            <img src="images/ceaser.png" alt="" className="w-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
