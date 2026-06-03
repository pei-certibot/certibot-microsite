import { BrowserRouter, Route, Routes, Navigate } from 'react-router'

import Home from './pages/Home.jsx'
import Calendar from './pages/Calendar.jsx'
import Team from './pages/Team.jsx'
import Mockup from './pages/Mockup.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import MilestonePage from './components/MilestonePage.jsx'
import { milestoneRoutes } from './config/milestones.js'

function App() {

  return (
    <div className="min-h-screen pt-20">
      <BrowserRouter  >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mockup" element={<Mockup />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {milestoneRoutes.map((milestone) => (
            <Route
              key={milestone.path}
              path={milestone.path}
              element={(
                <MilestonePage
                  markdownBlock={milestone.markdownBlock}
                  pdfLink={milestone.pdfLink}
                  pdfTitle={milestone.pdfTitle}
                />
              )}
            />
          ))}
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App