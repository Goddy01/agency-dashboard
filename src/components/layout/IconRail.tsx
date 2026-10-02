import {
  LayoutDashboard,
  Users,
  Workflow,
  GraduationCap,
  Building2,
  Wallet,
  Pickaxe,
  Settings,
  Bell,
  LogOut,
  type LucideIcon,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { iconNav, type NavIcon } from '../../data/mock'
import { ThemeToggle } from '../ui/ThemeToggle'

const icons: Record<NavIcon, LucideIcon> = {
  home: LayoutDashboard,
  recruit: Users,
  auto: Workflow,
  train: GraduationCap,
  hub: Building2,
  finance: Wallet,
  data: Pickaxe,
}

export function IconRail() {
  return (
    <aside className="hidden w-[56px] shrink-0 flex-col items-center bg-rail py-3 md:flex">
      <div
        className="mb-4 flex size-8 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white"
        title="Jacks"
      >
        J
      </div>

      <nav className="flex flex-1 flex-col items-center gap-0.5">
        {iconNav.map(({ to, label, icon, soon }) => {
          const Icon = icons[icon]
          return (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              title={label}
              className={({ isActive }) =>
                `relative flex size-10 flex-col items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/50 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="rail-dot"
                      className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                  {soon && (
                    <span className="absolute -right-0.5 -top-0.5 rounded bg-accent px-0.5 text-[7px] font-bold leading-none text-white">
                      Soon
                    </span>
                  )}
                </>
              )}
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-0.5">
        <button
          type="button"
          title="Notifications"
          className="relative flex size-10 items-center justify-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          <Bell className="size-[18px]" strokeWidth={1.75} />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-negative" />
        </button>
        <ThemeToggle variant="sidebar" />
        <NavLink
          to="/settings"
          title="Settings"
          className={({ isActive }) =>
            `flex size-10 items-center justify-center rounded-lg transition ${
              isActive
                ? 'bg-white/10 text-white'
                : 'text-white/50 hover:bg-white/10 hover:text-white'
            }`
          }
        >
          <Settings className="size-[18px]" strokeWidth={1.75} />
        </NavLink>
        <button
          type="button"
          title="Sign out"
          className="flex size-10 items-center justify-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          <LogOut className="size-[18px]" strokeWidth={1.75} />
        </button>
        <div className="mt-1 flex size-7 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
          JK
        </div>
      </div>
    </aside>
  )
}
