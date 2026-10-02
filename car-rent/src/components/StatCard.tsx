import { ArrowDown, ArrowUp } from 'lucide-react'

type StatCardProps = {
  title: string
  amount: string
  change: number
  comparedTo: string
  lastWeekLabel: string
  lastWeekAmount: string
  /** When true, an increase is treated as negative (e.g. time-to-hire). */
  invertTone?: boolean
  delay?: number
}

export function StatCard({
  title,
  amount,
  change,
  comparedTo,
  lastWeekLabel,
  lastWeekAmount,
  invertTone = false,
  delay = 0,
}: StatCardProps) {
  const isUp = change > 0
  const isGood = invertTone ? !isUp : isUp

  return (
    <article
      className="h-full rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium text-fg-muted">{title}</p>
          <p className="mt-2 text-[24px] font-bold tracking-[-0.03em] text-fg sm:text-[28px]">
            {amount}
          </p>
        </div>
        <span
          className={[
            'inline-flex items-center gap-0.5 rounded-md px-2 py-1 text-[12px] font-semibold',
            isGood
              ? 'bg-positive-soft text-positive'
              : 'bg-negative-soft text-negative',
          ].join(' ')}
        >
          {isUp ? (
            <ArrowUp size={12} strokeWidth={2.5} />
          ) : (
            <ArrowDown size={12} strokeWidth={2.5} />
          )}
          {Math.abs(change)}%
        </span>
      </div>

      <p className="mt-2 text-[12px] text-fg-subtle">
        vs {comparedTo} prior period
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[12px]">
        <span className="text-fg-muted">{lastWeekLabel}</span>
        <span className="font-semibold text-fg">{lastWeekAmount}</span>
      </div>
    </article>
  )
}
