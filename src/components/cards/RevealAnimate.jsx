import React, {useRef} from 'react'
import { useInView } from 'framer-motion';

const RevealAnimate = (props) => {

  const myRef = useRef(null);

  const isInView = useInView(myRef, {once: true})
  



  return (
      <span ref={myRef} className="block-reveal-animation">
<div className={`${isInView ? 'block-reveal-animation__element' : 'invisible'}`}>{props.children}</div>     
 <span className={`${isInView ? 'block-reveal-animation__block' : ''}`}></span>
    </span>
  )
}

export default RevealAnimate
