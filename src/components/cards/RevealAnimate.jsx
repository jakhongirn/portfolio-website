import React, {useRef} from 'react'
import Reveal from "react-awesome-reveal";
import { keyframes } from '@emotion/react';
import OnVisible from 'react-on-visible';
import useElementOnScreen from './useElementOnScreen';
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
