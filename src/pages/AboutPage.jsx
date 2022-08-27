import React from 'react'

const AboutPage = () => {
  return (
    <div className="px-[15%] bg-lightcolor pb-[10%]">
        <div className="uppercase tracking-[0.2rem] text-[10px] text-graytext rotate-[270deg] fixed top-64 left-10">About</div>
      <div className="grid grid-cols-2 items-center py-[15%]">
        <div className="">
          <h1 className="text-4xl font-extralight leading-relaxed">
            Self-taught engineer who specializes in full stack development &
            builds web applications
          </h1>
        </div>
        <div className="justify-self-end">
          <img src="images/me.png" alt="" className="w-80" />
        </div>
      </div>

      <div className="grid grid-cols-6 pb-[10%] gap-y-16">
        <div className="col-span-2">
          <p className="text-[10px] text-graytext uppercase tracking-[0.2rem]">01/ Back</p>
        </div>
        <div className="col-span-4">
          <h1 className="text-xl font-bold">A little bit about myself.</h1>
          <p className="mt-4 text-[18px] leading-loose">
            I'm Jakhongir Nagmatov, an enthusiastic about technology that
            provides infinite and unbelievable opportunities like going to Mars (Musk want to die
            on that planet;). In my childhood, I was addicted to pc games that
            triggered me to be curious about how these softwares were made. From
            that moment, I enjoy coding that solves technical challenges with
            minimum efforts.
          </p>
          <p className="text-[18px] leading-loose mt-2">
            I am currently pursuing my Bachelor's in CS at the university of
            Westminster in Tashkent and actively searching for new
            opportunities.
          </p>
          <p className="text-[18px] leading-loose mt-2">
              Love to read books and also <span className="font-medium">documentations</span>. Big fan of playing guitar & singing. 
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] text-graytext uppercase tracking-[0.2rem]">02/ Technology</p>
        </div>
        <div className="col-span-4">
        <h1 className="text-xl font-bold">What I use.</h1>
        <p className="mt-4 text-[18px] leading-loose">
        Listed below are the tools and technologies that I use and I'm knowledgeable with.
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
          <p className="text-[10px] text-graytext uppercase tracking-[0.2rem]">02/ Contact</p>
        </div>
        <div>
        <h1 className="text-xl font-bold">Social.</h1>
        <div className="mt-10 flex gap-x-4">
              <a className="underline" href="https://www.linkedin.com/in/jakhongirnagmatov/">Linkedin</a> <span>/</span>
              <a className="underline" href="https://t.me/jaykhans">Telegram</a>  <span>/</span>
              <a className="underline" href="https://twitter.com/jakhongir_mir">Twitter</a> <span>/</span>
              <a className="underline" href="https://instagram.com/jakhongir_mir">Instagram</a> 
            </div>
            <h1 className="text-xl font-bold mt-10 mb-4">Email.</h1>
            <a href="mailto:jahongirnagmatov@gmail.com" className="underline">jahongirnagmatov@gmail.com</a>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center">“I have no special talents, I am only passionately curious.”</h1>
        <p className="text-right text-graytext mt-4">-Albert Einstein</p>
      </div>
    </div>
  )
}

export default AboutPage
