import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { Dashboard } from './pages/Dashboard'
import { Recruitment } from './pages/Recruitment'
import { Automations } from './pages/Automations'
import { Onboarding } from './pages/Onboarding'
import { Employees } from './pages/Employees'
import { Finance } from './pages/Finance'
import { DataMining } from './pages/DataMining'
import { Settings } from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Dashboard />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="automations" element={<Automations />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="employees" element={<Employees />} />
        <Route path="finance" element={<Finance />} />
        <Route path="data-mining" element={<DataMining />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
