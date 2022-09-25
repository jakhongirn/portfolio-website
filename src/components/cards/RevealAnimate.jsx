import React, {useRef} from 'react'
import { useInViewport } from 'react-in-viewport';

const RevealAnimate = (props) => {

  const myRef = useRef();

  const { inViewport, enterCount} = useInViewport(
    myRef,
    props
  );

  return (
      <span ref={myRef} className="block-reveal-animation">
      <div className={`${inViewport & enterCount==1 ? 'block-reveal-animation__element' : ''}`}>{props.children}</div>
      <span className={`${inViewport & enterCount==1 ? 'block-reveal-animation__block' : ''}`}></span>
    </span>
  )
}

export default RevealAnimate
