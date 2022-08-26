import React from 'react'
import Button from './Button';

function WorkContent(props) {
  return (
    <div className={`col-span-2 relative ${props.class}`}>
      <h1 className="mt-4 text-5xl font-bold">{props.title}</h1>
      <p className="uppercase mt-4 text-sm tracking-widest">{props.type}</p>
      <p className="mt-10 font-medium text-lg ">
        {props.content}
      </p>
      <Button 
      btnName="View project"
      />
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
