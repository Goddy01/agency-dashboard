import { openRoles, type OpenRole } from '../../data/mock'
import { Button } from '../ui/Button'

const stageStyles: Record<OpenRole['stage'], string> = {
  Sourcing: 'bg-surface-2 text-fg-muted',
  Screening: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Interview: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  Offer: 'bg-accent-soft text-accent',
  'On hold': 'bg-negative-soft text-negative',
}

const urgencyDot: Record<OpenRole['urgency'], string> = {
  Critical: 'bg-negative',
  'This month': 'bg-amber-500',
  Flexible: 'bg-positive',
}

export function OpenRolesTable() {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-3 sm:px-4">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-fg">Open roles</h2>
          <p className="text-xs text-fg-subtle">
            {openRoles.length} live reqs · sorted by urgency & days open
          </p>
        </div>
        <Button variant="secondary" size="sm">
          View all
        </Button>
      </div>

      {/* Mobile cards */}
      <ul className="divide-y divide-border md:hidden">
        {openRoles.map((row) => (
          <li key={row.id} className="px-3 py-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`size-2 shrink-0 rounded-full ${urgencyDot[row.urgency]}`}
                  />
                  <p className="truncate text-sm font-semibold text-fg">
                    {row.title}
                  </p>
                </div>
                <p className="mt-0.5 text-xs text-fg-muted">
                  {row.client} · {row.recruiter}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${stageStyles[row.stage]}`}
              >
                {row.stage}
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-muted">
              <span>
                <span className="font-semibold text-fg">{row.candidates}</span>{' '}
                candidates
              </span>
              <span>
                <span className="font-semibold text-fg">{row.daysOpen}</span>d
                open
              </span>
              <span className="font-semibold text-fg">{row.fee}</span>
              <Button variant="ghost" size="sm" className="ml-auto h-7 px-2">
                Open
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block [-webkit-overflow-scrolling:touch]">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
              <th className="px-4 py-2.5 font-medium">Role</th>
              <th className="px-3 py-2.5 font-medium">Client</th>
              <th className="px-3 py-2.5 font-medium">Stage</th>
              <th className="px-3 py-2.5 font-medium">Recruiter</th>
              <th className="px-3 py-2.5 font-medium text-right">Candidates</th>
              <th className="px-3 py-2.5 font-medium text-right">Days open</th>
              <th className="px-3 py-2.5 font-medium text-right">Fee</th>
              <th className="px-4 py-2.5 font-medium text-right"> </th>
            </tr>
          </thead>
          <tbody>
            {openRoles.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border last:border-b-0 transition-colors hover:bg-surface-2/40"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-2 shrink-0 rounded-full ${urgencyDot[row.urgency]}`}
                      title={row.urgency}
                    />
                    <span className="font-semibold text-fg">{row.title}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-fg-muted">{row.client}</td>
                <td className="px-3 py-3">
                  <span
                    className={`inline-flex rounded-md px-2 py-0.5 text-xs font-semibold ${stageStyles[row.stage]}`}
                  >
                    {row.stage}
                  </span>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-[10px] font-bold text-accent">
                      {row.initials}
                    </span>
                    <span className="text-fg">{row.recruiter}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-right tabular-nums text-fg">
                  {row.candidates}
                </td>
                <td className="px-3 py-3 text-right tabular-nums text-fg">
                  {row.daysOpen}
                </td>
                <td className="px-3 py-3 text-right tabular-nums font-medium text-fg">
                  {row.fee}
                </td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm" className="h-8">
                    Open
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
