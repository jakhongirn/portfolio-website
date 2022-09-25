import React from 'react';
import { Fade } from 'react-awesome-reveal';

const FadeUp = (props) => {
  return (
    <Fade direction="up" delay={1000} duration={500} triggerOnce>
        {props.children}
    </Fade>
  )
}

export default FadeUp