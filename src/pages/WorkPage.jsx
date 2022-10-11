import React from 'react'
import RevealAnimate from '../components/cards/RevealAnimate'
import GoTop from '../components/cards/GoTop'
import InitialTransition from '../components/cards/Transition'
import PageTitle from '../components/cards/PageTitle'
import Work from '../components/cards/Work'
import works from '../components/cards/dataWorks'
import ghProjects from '../components/cards/ghProjects'
const WorkPage = () => {

  const displayWork = works.map((work, index) => {

    function isEven() {
      if (index % 2 === 0) {
        return true
      } else {
        return false
      }
    }

    return (
      <Work 
        key={index}
        title={work.title}
        content={work.content}
        href={work.href}
        imageName={work.imageName}
        type={work.type}
        classContent={`col-span-2 ${isEven() ? 'lg:ml-28' : 'lg:mr-28 lg:order-first'}`}
      />
    )
  })

  const displayGhProjects = ghProjects.map((ghProject, index) => {
    return (
      <div key={index} className="flex gap-x-5 mt-10 items-center">
      <p className="text-graytext mr-4 tracking-widest hidden md:block">{ghProject.projectNumber}</p>
      <p className="underline">&lt;src/&gt; </p>
      <a className="text-2xl underline" href={ghProject.projectLink} target='_blank' rel="noreferrer">
        {ghProject.projectName}
      </a>
    </div>
    )
  })

  return (
    <div className="bg-lightgray py-[15%] px-[10%] md:px-[15%]">
      <PageTitle pageTitle="works" />
      <RevealAnimate>
        <div className="relative mt-10 lg:mt-0">
          <img src="images/works-pattern.jpg" className="w-[400px]" alt="" />
          <h1 className="text-5xl md:text-6xl font-bold bg-white absolute top-[40%]">
            My works.
          </h1>
        </div>
      </RevealAnimate>
      <div className="mt-10 pt-[10%] ">
        {displayWork}
      </div>

      <div className="mt-36">
        <RevealAnimate>
          <h1 className="text-4xl font-bold">GitHub Projects.</h1>
        </RevealAnimate>
        {displayGhProjects}
      </div>
      <GoTop />
      <InitialTransition />
    </div>
  )
}

export default WorkPage
