import React, {useRef, useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'
import RevealAnimate from '../components/cards/RevealAnimate';


const ContactPage = () => {

  const form = useRef();

  const SERVICE_ID=process.env.REACT_APP_EMAIL_SERVICE_ID
  const TEMPLATE_ID=process.env.REACT_APP_EMAIL_TEMPLATE_ID
  const PUBLIC_KEY=process.env.REACT_APP_EMAIL_PUBLIC_KEY

  const [status, setStatus] = useState(false);
  
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then((result) => {
      console.log("Success!", result.text);
      setStatus(true)
      e.target.reset();
    }, (error) => {
      console.log('Failed', error.text);
      setStatus(false)
    })
  }

  useEffect(() => {
    if(status) {
      setTimeout(() => {
        setStatus(false)
      }, 3000)
    }
  }, [status])

  return (
    <div className="bg-lightgray py-[15%] px-[15%]">
      {status ? 
      <div className={`animate__animated animate__fadeInRight fixed z-50 bottom-16 right-4 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg `}>
        <p className='text-xl'>Successfully sent!</p>
      </div>
      : ''}
        <div className="uppercase tracking-[0.2rem] text-[10px] text-graytext rotate-[270deg] fixed top-64 left-10">contact</div>
        <RevealAnimate>
          <div className="relative ">
              <img src="images/contact-pattern.jpg" className="w-[400px]" alt="" />
              <h1 className="text-6xl font-bold bg-white absolute top-[40%]">Get in touch.</h1>
          </div>
        </RevealAnimate>
        <p className="pt-[10%]">Do you have questions to ask or request to collaborate with me, feel free to contact me.</p>
        <form action="" ref={form} onSubmit={sendEmail} >
            <input className="block py-2 my-8 border-b-gray-200 border-b-2 w-full focus:outline-none" type="text" name="name" placeholder='Your Name'/>
            <input className="block py-2 my-8 border-b-gray-200 border-b-2 w-full focus:outline-none" type="email" name="email" placeholder='Your mail'/>
            <input className="block py-2 my-8 border-b-gray-200 border-b-2 w-full focus:outline-none" type="text" name="subject" placeholder='Subject'/>
            <textarea className="block py-2 my-8 border-b-gray-200 border-b-2 w-full focus:outline-none" rows="5" name="message" placeholder='Message'/>
          <button type="submit" className="py-2 px-4 float-right bg-black border-2 border-black text-white hover:bg-white hover:text-black">Send</button>
        </form>

    </div>
  )
}

export default ContactPage