import { Button } from '../ui/Button'
import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 border-b border-border pb-4 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-sm text-fg-muted">{description}</p>
        )}
      </div>
      {actions && (
        <div className="flex flex-wrap items-center gap-2 [&>button]:flex-1 sm:[&>button]:flex-none">
          {actions}
        </div>
      )}
    </div>
  )
}

type Stat = { label: string; value: string; hint?: string }

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="stat-glass mb-4 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border bg-surface px-3 py-2.5 sm:px-3.5 sm:py-3"
        >
          <p className="text-[11px] text-fg-muted sm:text-xs">{s.label}</p>
          <p className="mt-0.5 text-lg font-bold tracking-tight text-fg sm:text-xl">
            {s.value}
          </p>
          {s.hint && (
            <p className="mt-0.5 text-[11px] text-fg-subtle sm:text-xs">
              {s.hint}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export { Button }
