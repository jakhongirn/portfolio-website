import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout'
import Homepage from './pages/Homepage';


const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
        </Routes>
      </Layout>
    </div>
  )
}

export default App