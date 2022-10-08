import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import NoPage from './pages/404Page'
import { AnimatePresence } from 'framer-motion'
import ScrollTop from './components/cards/ScrollTop'

const App = () => {
  const location = useLocation()
  return (
    <>
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
    </>
  )
}

export default App
