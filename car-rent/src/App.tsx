import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { Candidates } from './pages/Candidates'
import { Dashboard } from './pages/Dashboard'
import { Interviews } from './pages/Interviews'
import { Pipeline } from './pages/Pipeline'
import { Placements } from './pages/Placements'
import { Revenue } from './pages/Revenue'
import { Roles } from './pages/Roles'
import { Settings } from './pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="roles" element={<Roles />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="placements" element={<Placements />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
