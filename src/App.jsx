import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout/Layout'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage'
import NoPage from './pages/404Page';
import {AnimatePresence} from 'framer-motion'

const App = () => {
  const location = useLocation()
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Homepage />}  />
          <Route path="about" element={<AboutPage />}/>
          <Route path="works" element={<WorkPage />}/>
          <Route path="contact" element={<ContactPage />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
      </AnimatePresence>
    </>
  )
}

export default App