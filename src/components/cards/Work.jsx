import Button from './Button';
import RevealAnimate from './RevealAnimate';
import FadeUp from './FadeUp';

import works from './dataWorks';

export default function Work() {

  const displayWorks = works.map((work, index) => {
    function IsEven() {
      if (index % 2 === 0) {
        return true
      } else {
        return false
      }
    }
    return (
      <div className="grid grid-cols-3 my-24">
        <div className={`col-span-2 ${IsEven() ? 'mr-28' : ' order-last ml-28'}`}>
          <RevealAnimate>
            <h1 className="mt-4 text-5xl font-bold">{work.title}</h1>
          </RevealAnimate>
          <FadeUp>
            <p className="uppercase mt-4 text-sm tracking-widest">{work.type}</p>
          </FadeUp>
          <FadeUp>
            <p className="mt-10 font-medium text-lg">
              {work.content}
            </p>
          </FadeUp>
            <Button
            btnName="View project"
            ></Button>
        </div>
        <div className={` ${IsEven() ? '' : ''}`}>
        <RevealAnimate><img src={`images/${work.imageName}`} className="rounded-xl" alt="" /></RevealAnimate>
      </div>
      </div>
      )
  })
  

  return (
    <>
      {displayWorks}
    </>
  )
}
