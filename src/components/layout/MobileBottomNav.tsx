import {
  LayoutDashboard,
  Users,
  Workflow,
  GraduationCap,
  Building2,
  Wallet,
  Pickaxe,
  Settings,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useShell } from './AppShell'

const primary: { to: string; label: string; icon: LucideIcon; end?: boolean }[] =
  [
    { to: '/', label: 'Home', icon: LayoutDashboard, end: true },
    { to: '/recruitment', label: 'Recruit', icon: Users },
    { to: '/automations', label: 'Auto', icon: Workflow },
    { to: '/finance', label: 'Finance', icon: Wallet },
  ]

const more: { to: string; label: string; icon: LucideIcon }[] = [
  { to: '/onboarding', label: 'Onboard', icon: GraduationCap },
  { to: '/employees', label: 'People', icon: Building2 },
  { to: '/data-mining', label: 'Data', icon: Pickaxe },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export function MobileBottomNav() {
  const [moreOpen, setMoreOpen] = useState(false)
  const { closePane } = useShell()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      {moreOpen && (
        <div className="grid grid-cols-4 gap-1 border-b border-border px-2 py-2">
          {more.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => {
                setMoreOpen(false)
                closePane()
              }}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-lg px-1 py-2 text-[10px] font-medium ${
                  isActive ? 'bg-accent-soft text-accent' : 'text-fg-muted'
                }`
              }
            >
              <Icon className="size-4" strokeWidth={1.75} />
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <div className="grid grid-cols-5 gap-0.5 px-1 py-1">
        {primary.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => {
              setMoreOpen(false)
              closePane()
            }}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-semibold ${
                isActive ? 'text-accent' : 'text-fg-subtle'
              }`
            }
          >
            <Icon className="size-5" strokeWidth={1.75} />
            {label}
          </NavLink>
        ))}
        <button
          type="button"
          onClick={() => setMoreOpen((v) => !v)}
          className={`flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-semibold ${
            moreOpen ? 'text-accent' : 'text-fg-subtle'
          }`}
        >
          <MoreHorizontal className="size-5" strokeWidth={1.75} />
          More
        </button>
      </div>
    </nav>
  )
}
