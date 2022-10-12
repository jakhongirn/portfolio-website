import React from 'react'
import RevealAnimate from '../../components/cards/RevealAnimate'
import FadeUp from '../../components/cards/FadeUp'
import ScrollDown from '../../components/cards/ScrollDown'
import Button from '../../components/cards/Button'

const Hero = () => {
  return (
    <div className="bg-lightcolor h-screen w-full grid">
      <div className="w-full flex justify-center relative">
        <ScrollDown />
        <div className="w-[200px] h-[200px] lg:w-[450px] lg:h-[450px]"></div>
        <div className="w-full px-[10%] md:px-[15%] absolute grid grid-cols-1 lg:grid-cols-2 justify-center items-end top-[13%] bottom-[13%]">
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold ">
              <RevealAnimate>Hi,</RevealAnimate>
              <br />
              <RevealAnimate>I'm Jakhongir.</RevealAnimate>
              <br />
              <RevealAnimate>Software Engineer.</RevealAnimate>
            </h1>

            <FadeUp>
              <h2 className="text-2xl mt-10">
                Full Stack Developer / React.js Lover
              </h2>
            </FadeUp>

            <FadeUp>
              <a href="/works">
                <Button
                  btnName="SEE MY WORKS"
                  btnTitleClass="uppercase font-medium"
                />
              </a>
            </FadeUp>
          </div>
          <div>
            <div className="w-100 flex justify-center lg:justify-end">
              <img src="images/me-sticker.png" className="w-[380px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
