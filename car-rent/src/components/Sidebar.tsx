import {
  LayoutDashboard,
  Users,
  Briefcase,
  CalendarDays,
  Settings,
  Trophy,
  GitBranch,
  Wallet,
  LogOut,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type NavItem = { label: string; icon: LucideIcon; to: string }

const mainNav: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { label: 'Candidates', icon: Users, to: '/candidates' },
  { label: 'Open roles', icon: Briefcase, to: '/roles' },
  { label: 'Interviews', icon: CalendarDays, to: '/interviews' },
  { label: 'Settings', icon: Settings, to: '/settings' },
]

const insightNav: NavItem[] = [
  { label: 'Placements', icon: Trophy, to: '/placements' },
  { label: 'Pipeline', icon: GitBranch, to: '/pipeline' },
  { label: 'Revenue', icon: Wallet, to: '/revenue' },
]

function NavItemLink({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate?: () => void
}) {
  return (
    <NavLink
      to={item.to}
      end={item.to === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[14px] font-medium transition-colors duration-200',
          isActive
            ? 'bg-accent text-white shadow-[0_8px_20px_rgba(0,97,255,0.35)]'
            : 'hover:bg-sidebar-muted hover:text-sidebar-text-strong',
        ].join(' ')
      }
    >
      <item.icon size={18} strokeWidth={1.75} />
      {item.label}
    </NavLink>
  )
}

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <div className="flex items-center gap-2.5 px-5 pt-6 pb-7 sm:px-6 sm:pt-7 sm:pb-8 animate-fade-in">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
          J
        </div>
        <div className="min-w-0">
          <span className="block text-[15px] font-bold tracking-[-0.02em] text-sidebar-text-strong">
            Jacks
          </span>
          <span className="block text-[10px] font-medium tracking-[0.06em] text-sidebar-text uppercase">
            Recruitment OS
          </span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-8 overflow-y-auto px-3 sm:px-4">
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <li key={item.to}>
              <NavItemLink item={item} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>

        <div>
          <p className="mb-2 px-3.5 text-[11px] font-semibold tracking-[0.08em] text-sidebar-text/70 uppercase">
            Insights
          </p>
          <ul className="flex flex-col gap-1">
            {insightNav.map((item) => (
              <li key={item.to}>
                <NavItemLink item={item} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-3 pb-5 sm:p-4 sm:pb-6">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-sidebar-muted px-3.5 py-3 text-[14px] font-medium text-sidebar-text-strong transition-colors duration-200 hover:bg-[#35363b]"
        >
          <LogOut size={18} strokeWidth={1.75} />
          Logout
        </button>
      </div>
    </>
  )
}

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-canvas/90 px-4 backdrop-blur-md lg:hidden">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar text-white shadow-lg"
        >
          <Menu size={18} />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-white">
            J
          </div>
          <span className="text-sm font-bold text-fg">Jacks</span>
        </div>
      </div>

      <aside className="sticky top-0 hidden h-dvh w-[240px] shrink-0 flex-col bg-sidebar text-sidebar-text lg:flex">
        <NavContent />
      </aside>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40 animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-[min(280px,86vw)] flex-col bg-sidebar text-sidebar-text shadow-2xl animate-fade-up">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-4 z-10 text-sidebar-text hover:text-white"
            >
              <X size={18} />
            </button>
            <NavContent onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      ) : null}
    </>
  )
}
