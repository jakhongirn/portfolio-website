import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage'
import NoPage from './pages/404Page';
import ScrollTop from './components/cards/ScrollTop'


const App = () => {
  return (
    <div>
      <ScrollTop>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />}  />
          <Route path="about" element={<AboutPage />}/>
          <Route path="works" element={<WorkPage />}/>
          <Route path="contact" element={<ContactPage />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
      </ScrollTop>
    </div>
  )
}

export default App