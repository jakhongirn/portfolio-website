import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage';
import NoPage from './pages/404Page';


const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Homepage />}  />
          <Route path="about" element={<AboutPage />}/>
          <Route path="works" element={<WorkPage />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App