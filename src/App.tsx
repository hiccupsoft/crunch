import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { LandingPage2 } from './Pages/LandingPage2/LandingPage2'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/landing-page2" element={<LandingPage2 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
