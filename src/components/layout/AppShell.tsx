import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import type { DateRange } from '../../data/mock'
import { IconRail } from './IconRail'
import { SecondaryPane } from './SecondaryPane'
import { MobileTopBar } from './MobileTopBar'
import { MobileBottomNav } from './MobileBottomNav'

type ShellContextValue = {
  dateRange: DateRange
  setDateRange: (range: DateRange) => void
  paneOpen: boolean
  openPane: () => void
  closePane: () => void
  togglePane: () => void
}

const ShellContext = createContext<ShellContextValue | null>(null)

export function useShell() {
  const ctx = useContext(ShellContext)
  if (!ctx) throw new Error('useShell must be used within AppShell')
  return ctx
}

export function AppShell({ children }: { children?: ReactNode }) {
  const [dateRange, setDateRange] = useState<DateRange>('180d')
  const [paneOpen, setPaneOpen] = useState(false)
  const { pathname } = useLocation()

  const openPane = useCallback(() => setPaneOpen(true), [])
  const closePane = useCallback(() => setPaneOpen(false), [])
  const togglePane = useCallback(() => setPaneOpen((v) => !v), [])

  useEffect(() => {
    setPaneOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!paneOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPaneOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [paneOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => {
      if (mq.matches) setPaneOpen(false)
    }
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const value = useMemo(
    () => ({
      dateRange,
      setDateRange,
      paneOpen,
      openPane,
      closePane,
      togglePane,
    }),
    [dateRange, paneOpen, openPane, closePane, togglePane],
  )

  return (
    <ShellContext.Provider value={value}>
      <div className="flex h-[100dvh] min-h-0 flex-col bg-canvas md:flex-row">
        <IconRail />
        <SecondaryPane />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <MobileTopBar />
          <main className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto bg-surface pb-[calc(4.25rem+env(safe-area-inset-bottom))] md:pb-0">
            <div className="mx-auto w-full max-w-[1600px] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
              {children ?? <Outlet />}
            </div>
          </main>
          <MobileBottomNav />
        </div>
      </div>
    </ShellContext.Provider>
  )
}
