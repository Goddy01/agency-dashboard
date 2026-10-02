import { Download, Plus } from 'lucide-react'
import { workspace } from '../../data/mock'
import { Button } from '../ui/Button'

export function PortfolioHeader() {
  return (
    <header className="mb-4 border-b border-border pb-4 sm:mb-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex min-w-0 items-start gap-3 sm:gap-3.5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-base font-bold text-white sm:size-12 sm:text-lg">
            J
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                {workspace.name}
              </h1>
              <span className="rounded-md bg-positive-soft px-2 py-0.5 text-xs font-semibold text-positive">
                {workspace.badge}
              </span>
            </div>
            <p className="mt-1 text-xs text-fg-muted sm:text-sm">
              {workspace.tagline}
              <span className="text-fg-subtle"> · {workspace.age}</span>
            </p>

            <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2">
              {workspace.desks.map((d) => (
                <span
                  key={d}
                  className="rounded-md border border-border bg-surface-2/60 px-2 py-1 text-[11px] font-medium text-fg-muted sm:text-xs"
                >
                  {d} desk
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          <Button variant="secondary" size="md" className="w-full sm:w-auto">
            <Download className="size-4" />
            <span className="truncate">Export</span>
          </Button>
          <Button variant="primary" size="md" className="w-full sm:w-auto">
            <Plus className="size-4" />
            New role
          </Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
        {workspace.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-surface-2/40 px-3 py-2.5 sm:px-3.5"
          >
            <p className="text-[11px] text-fg-muted sm:text-xs">{s.label}</p>
            <p className="mt-0.5 text-lg font-bold tracking-tight text-fg sm:text-xl">
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </header>
  )
}
