import React from 'react'

function WorkContent(props) {
  return (
    <div className={`col-span-2 relative ${props.class}`}>
      <h1 className="mt-4 text-5xl font-bold">{props.title}</h1>
      <p className="uppercase mt-4 text-sm tracking-widest">{props.type}</p>
      <p className="mt-10 font-medium text-lg ">
        {props.content}
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
  )
}
function WorkImage(props) {
  return (
    <div className={`${props.col}`}>
      <img src={`images/${props.imageName}`} className="rounded-xl" alt="" />
    </div>
  )
}
export { WorkContent, WorkImage };
