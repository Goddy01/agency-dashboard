import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useShell } from './AppShell'
import { ThemeToggle } from '../ui/ThemeToggle'

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/recruitment': 'Recruitment',
  '/automations': 'Automations',
  '/onboarding': 'Onboarding',
  '/employees': 'Employees',
  '/finance': 'Finance',
  '/data-mining': 'Data Mining',
  '/settings': 'Settings',
}

export function MobileTopBar() {
  const { pathname } = useLocation()
  const { paneOpen, togglePane } = useShell()
  const title = titles[pathname] ?? 'Jacks'

  return (
    <header className="sticky top-0 z-30 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-surface/95 px-3 backdrop-blur-md lg:hidden">
      <button
        type="button"
        onClick={togglePane}
        aria-label={paneOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={paneOpen}
        className="flex size-10 items-center justify-center rounded-lg text-fg-muted transition hover:bg-surface-2 hover:text-fg"
      >
        {paneOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent text-[11px] font-bold text-white">
          J
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-fg">{title}</p>
        </div>
      </div>

      <ThemeToggle variant="header" />
    </header>
  )
}
