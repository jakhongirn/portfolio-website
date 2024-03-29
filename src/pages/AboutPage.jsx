import React from 'react'
import RevealAnimate from '../components/cards/RevealAnimate'
import FadeUp from '../components/cards/FadeUp'
import GoTop from '../components/cards/GoTop'
import InitialTransition from '../components/cards/Transition'
import PageTitle from '../components/cards/PageTitle'

const AboutPage = () => {
  return (
    <div className="px-[10%] lg:px-[15%] bg-lightcolor pb-[10%] pt-[10%] w-full">
      <PageTitle pageTitle="about" />
      <div className="grid md:grid-cols-2 items-center py-[15%]">
        <div className="mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-extralight ">
            <span className="block mb-2">
              {' '}
              <RevealAnimate>Self-taught engineer who </RevealAnimate>{' '}
            </span>

            <span className="block mb-2">
              {' '}
              <RevealAnimate>
                specializes in full stack development{' '}
              </RevealAnimate>
            </span>

            <span className="block mb-2">
              {' '}
              <RevealAnimate>& builds web applications</RevealAnimate>{' '}
            </span>
          </h1>
        </div>

        <div className="justify-self-end">
          <RevealAnimate>
            <img src="images/me.jpg" alt="" className="w-80" />
          </RevealAnimate>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 pb-[10%] gap-y-16">
        <div className="md:col-span-2 hidden md:block">
          <p className="text-[10px] text-graytext uppercase tracking-[0.2rem]">
            01/ Back
          </p>
        </div>
        <div className="md:col-span-4">
          <RevealAnimate>
            <h1 className="text-xl font-bold">A little bit about myself.</h1>
          </RevealAnimate>
          <p className="mt-4 text-[18px] leading-loose">
            I'm Jakhongir Nagmatov, an enthusiastic about technology that
            provides infinite and unbelievable opportunities like going to Mars
            (Musk want to die on that planet;). In my childhood, I was addicted
            to pc games that triggered me to be curious about how these
            softwares were made. From that moment, I enjoy coding that solves
            technical challenges with minimum efforts.
          </p>
          <p className="text-[18px] leading-loose mt-2">
            I am currently pursuing my Bachelor's in CS at the university of
            Westminster in Tashkent and actively searching for new
            opportunities.
          </p>
          <p className="text-[18px] leading-loose mt-2">
            Love to read books and also{' '}
            <span className="font-medium">documentations</span>. Big fan of
            playing guitar & singing.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[10px] text-graytext uppercase tracking-[0.2rem] hidden md:block">
            02/ Technology
          </p>
        </div>
        <div className="md:col-span-4">
          <RevealAnimate>
            <h1 className="text-xl font-bold">What I use.</h1>
          </RevealAnimate>
          <p className="mt-4 text-[18px] leading-loose">
            Listed below are the tools and technologies that I use and I'm
            knowledgeable with.
          </p>
          <div className="flex gap-x-32 mt-4">
            <ul className="leading-[2.5] ">
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Node JS, Express</li>
              <li>PostgreSQL, MongoDB</li>
              <li>React Native</li>
            </ul>
            <ul className="leading-[2.5] ">
              <li>Next JS</li>
              <li>Redux</li>
              <li>Python</li>
              <li>Django</li>
              <li>HTML, CSS, TailwindCSS</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] text-graytext uppercase tracking-[0.2rem] hidden md:block">
            03/ Contact
          </p>
        </div>
        <div>
          <RevealAnimate>
            <h1 className="text-xl font-bold">Social.</h1>
          </RevealAnimate>
          <div className="mt-4 flex gap-x-2 lg:gap-x-4 mb-10 ">
            <a
              className="underline"
              href="https://www.linkedin.com/in/jakhongirnagmatov/"
            >
              Linkedin
            </a>{' '}
            <span>/</span>
            <a className="underline" href="https://t.me/jaykhans">
              Telegram
            </a>{' '}
            <span>/</span>
            <a className="underline" href="https://twitter.com/jakhongir_mir">
              Twitter
            </a>{' '}
            <span>/</span>
            <a className="underline" href="https://instagram.com/jakhongir_mir">
              Instagram
            </a>
          </div>
          <RevealAnimate>
            <h1 className="text-xl font-bold">Email.</h1>
          </RevealAnimate>
          <div className="mt-4">
            <a href="mailto:jahongirnagmatov@gmail.com" className="underline ">
              jahongirnagmatov@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FadeUp>
          <h1 className="text-3xl font-bold text-center">
            “I have no special talents, I am only passionately curious.”
          </h1>
        </FadeUp>

        <div className="flex justify-end">
          <RevealAnimate className="">
            <p className="text-graytext mt-4">-Albert Einstein</p>
          </RevealAnimate>
        </div>
      </div>
      <GoTop />
      <InitialTransition />
    </div>
  )
}

export default AboutPage
