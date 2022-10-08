import React from 'react';
import RevealAnimate from '../../components/cards/RevealAnimate';
import FadeUp from '../../components/cards/FadeUp'
const WorksTitle = () => {
  return (
      <div className="bg-white py-[10%] px-[15%] ">
              <RevealAnimate>
                <h1 className="text-5xl font-bold">Crafted with love.</h1>
              </RevealAnimate>
              <div>
                <FadeUp>
                  <p className="mt-10">These are a selection of my recent works.</p>
                </FadeUp >
              </div>
      </div>
  )
}

export default WorksTitle