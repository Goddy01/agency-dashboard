import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

export function AppShell() {
  return (
    <div className="page-ground flex min-h-dvh">
      <Sidebar />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[1280px] px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-7 lg:pb-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
