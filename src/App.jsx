import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'

import Home from './pages/Home.jsx'
import Calendar from './pages/Calendar.jsx'
import Team from './pages/Team.jsx'
import Mockup from './pages/Mockup.jsx'
import MS1 from './pages/Milestones/M1-Inception.jsx'

function App() {

  return (
    <div className="min-h-screen pt-24">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mockup" element={<Mockup />} />
          <Route path="/m1-inception" element={<MS1 />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App