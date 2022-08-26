import React from 'react'

const ViewAll = () => {
  return (
    <div className="px-[15%] pt-[10%] pb-8">
        <p className="uppercase graytext text-sm tracking-widest">there's more</p>
        <a href="/works">
            <h1 className="text-4xl mt-4 font-bold">view all projects
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
        </a>
    </div>
  )
}

export default ViewAll