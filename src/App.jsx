import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import NoPage from './pages/404Page'
import { AnimatePresence } from 'framer-motion'
import ScrollTop from './components/cards/ScrollTop'
import { Rings } from 'react-loader-spinner'

const App = () => {
  const [loader, setLoader] = useState(true)

  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])

  return (
    <>
      {loader ? (
        <div className="h-screen w-full bg-black absolute z-50  ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Rings
              height="100"
              width=""
              radius={6}
              color="#fff"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <br />
            <h1 className="text-xl text-white animate-pulse">
              Magic is happening...
            </h1>
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <ScrollTop>
            <Layout>
              <Routes key={location.pathname} location={location}>
                <Route exact path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="works" element={<WorkPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </Layout>
          </ScrollTop>
        </AnimatePresence>
      )}
    </>
  )
}

export default App
