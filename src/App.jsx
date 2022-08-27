import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage';


const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Homepage />} exact />
          <Route path="/about" element={<AboutPage />}/> */}
          <Route path="/" element={<WorkPage />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App