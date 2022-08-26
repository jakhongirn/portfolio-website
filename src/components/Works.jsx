import React from 'react'

const Works = () => {
  return (
    <div className="bg-lightcolor px-[15%] py-[5%]">
        <div className="grid grid-cols-3">
            <div className="">
                <img src="images/meras.uz.png" className="rounded-xl" alt="" />
            </div>
            <div className="col-span-2 ml-28 relative">
                <h1 className="mt-4 text-5xl font-bold">Meras Electro mechanic website</h1>
                <p className="uppercase mt-4 text-sm tracking-widest">Front-end App</p>
                <p className="mt-10 font-medium text-lg ">
                    Business website for presenting their services, products and interacting with business owners.
                </p>
                <button className="absolute bottom-4 mt-10 text-lg font-medium uppercase bg-[#E8E8E8] py-2 px-4 flex items-center gap-2 rounded-full">
              view project{' '}
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
            </div>
        </div>
    </div>
  )
}

export default Works