import { pipelineStages, todaysInterviews } from '../../data/mock'

export function PipelinePanel() {
  const total = pipelineStages.reduce((s, p) => s + p.count, 0)

  return (
    <div className="flex flex-col gap-3">
      <article className="rounded-xl border border-border bg-surface p-4">
        <h2 className="text-base font-semibold text-fg">Candidate pipeline</h2>
        <p className="mt-0.5 text-xs text-fg-subtle">
          {total} people across active searches
        </p>

        <ul className="mt-4 space-y-3">
          {pipelineStages.map((stage) => {
            const pct = Math.round((stage.count / total) * 100)
            return (
              <li key={stage.id}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-fg">{stage.label}</span>
                  <span className="tabular-nums text-fg-muted">
                    {stage.count}
                    <span className="text-fg-subtle"> · {pct}%</span>
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      background: stage.color,
                    }}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </article>

      <article className="rounded-xl border border-border bg-surface p-4">
        <h2 className="text-base font-semibold text-fg">Interviews today</h2>
        <p className="mt-0.5 text-xs text-fg-subtle">
          {todaysInterviews.length} scheduled
        </p>

        <ul className="mt-3 divide-y divide-border">
          {todaysInterviews.map((item) => (
            <li key={item.id} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
              <span className="w-12 shrink-0 text-sm font-semibold tabular-nums text-accent">
                {item.time}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-fg">
                  {item.candidate}
                </p>
                <p className="truncate text-xs text-fg-muted">
                  {item.role} · {item.client}
                </p>
                <span className="mt-1 inline-flex rounded-md bg-surface-2 px-1.5 py-0.5 text-[11px] font-medium text-fg-muted">
                  {item.type} interview
                </span>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
