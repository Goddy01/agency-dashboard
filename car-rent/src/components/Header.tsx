import { Bell, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between animate-fade-up">
      <div className="min-w-0">
        <h1 className="text-[22px] font-bold tracking-[-0.03em] text-fg sm:text-[26px]">
          Today&apos;s hiring
        </h1>
        <p className="mt-1 text-[13px] text-fg-muted">
          Agency workspace · contingency & retained
        </p>
      </div>

      <div className="flex w-full items-center gap-3 sm:w-auto sm:max-w-md sm:flex-1 sm:justify-end lg:max-w-none lg:flex-none">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-fg-muted shadow-sm ring-1 ring-border transition-colors hover:text-fg"
        >
          <Bell size={18} strokeWidth={1.75} />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-negative ring-2 ring-surface" />
        </button>

        <label className="relative block min-w-0 flex-1 sm:w-[220px] sm:flex-none md:w-[260px]">
          <Search
            size={16}
            strokeWidth={1.75}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-fg-subtle"
          />
          <input
            type="search"
            placeholder="Search roles, clients…"
            className="h-10 w-full rounded-xl bg-surface pr-4 pl-10 text-[13px] text-fg shadow-sm ring-1 ring-border outline-none transition-[box-shadow,ring-color] placeholder:text-fg-subtle focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>
    </header>
  )
}
