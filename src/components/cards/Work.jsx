import React from 'react'
import Button from './Button';
import RevealAnimate from './RevealAnimate';
import FadeUp from './FadeUp';

function WorkContent(props) {
  return (
    <div className={`col-span-2 relative ${props.class}`}>
      <RevealAnimate>
        <h1 className="mt-4 text-5xl font-bold">{props.title}</h1>
      </RevealAnimate>
      <FadeUp>
        <p className="uppercase mt-4 text-sm tracking-widest">{props.type}</p>
      </FadeUp>
      <FadeUp>
        <p className="mt-10 font-medium text-lg">
          {props.content}
        </p>
      </FadeUp>
        <Button
        btnName="View project"
        btnClassName=""
        ></Button>
     
    </div>
  )
}
function WorkImage(props) {
  return (
    <div className={`${props.col}`}>
      <RevealAnimate><img src={`images/${props.imageName}`} className="rounded-xl" alt="" /></RevealAnimate>
    </div>
  )
}
export { WorkContent, WorkImage };
