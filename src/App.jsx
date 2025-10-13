import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'

import Home from './pages/Home.jsx'
import Meetings from './pages/Meetings.jsx'
import MeetingDetails from './pages/MeetingDetails.jsx'
import CalendarPage from './pages/CalendarPage.jsx'

function App() {

  return (
    <div className="min-h-screen pt-24">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/meetings/:id" element={<MeetingDetails />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App