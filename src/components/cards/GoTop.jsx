import React, {useState, useEffect} from 'react'

const GoTop = () => {
    const [goTop, setGoTop] = useState(false)
    const [animated, setAnimated] = useState("")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 710) {
                setGoTop(true)
                setAnimated("animate__animated animate__fadeInRightBig")
            } else {
                setAnimated("animate__animated animate__fadeOutRightBig")
                setGoTop(false)
            }            
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className="w-full relative">  
        {goTop && (
                        <button onClick={scrollUp} className={`transition-all duration-300 translate-y-0 hover:-translate-y-3 ${animated} rotate-90 text-graytext tracking-widest text-sm font-semibold fixed right-4 bottom-20 uppercase z-10`}><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 inline rotate-180"
                                  >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                                  </svg>
                            Top
                            </button>                
        )}
    </div>
  )
}

export default GoTop

//There is a bug with adding animation!