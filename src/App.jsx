import { BrowserRouter, Route, Routes, Navigate } from 'react-router'

import Home from './pages/Home.jsx'
import Calendar from './pages/Calendar.jsx'
import Team from './pages/Team.jsx'
import Mockup from './pages/Mockup.jsx'
import MS1 from './pages/Milestones/M1-Inception.jsx'
import MS2 from './pages/Milestones/M2-Elaboration.jsx'
import MS3 from './pages/Milestones/M3-Construction.jsx'
// import MS4 from './pages/Milestones/M4-Transition.jsx'

function App() {

  return (
    <div className="min-h-screen pt-24">
      <BrowserRouter  >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mockup" element={<Mockup />} />
          <Route path="/m1-inception" element={<MS1 />} />
          <Route path="/m2-elaboration" element={<MS2 />} />
          <Route path="/m3-construction" element={<MS3 />} />
          {/* <Route path="/m4-transition" element={<MS4 />} /> */}
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App