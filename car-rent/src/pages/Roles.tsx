import { Filter, Plus } from 'lucide-react'
import { openRoles } from '../data'
import { Button, PageHeader, StatStrip } from '../components/ui/PageHeader'

const urgencyDot = {
  Critical: 'bg-negative',
  'This month': 'bg-amber-500',
  Flexible: 'bg-positive',
} as const

const stageStyles = {
  Sourcing: 'bg-canvas text-fg-muted ring-1 ring-border',
  Screening: 'bg-accent-soft text-accent',
  Interview: 'bg-violet-500/10 text-violet-600',
  Offer: 'bg-positive-soft text-positive',
} as const

export function Roles() {
  return (
    <>
      <PageHeader
        title="Open roles"
        description="Live reqs across Growth, Creative, Product, and Ops desks."
        actions={
          <>
            <Button variant="secondary">
              <Filter size={16} />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button>
              <Plus size={16} />
              New role
            </Button>
          </>
        }
      />

      <StatStrip
        stats={[
          { label: 'Open reqs', value: String(openRoles.length) },
          { label: 'Critical', value: '2', hint: 'Need attention' },
          { label: 'Candidates live', value: '22' },
          { label: 'Avg days open', value: '34d' },
        ]}
      />

      <ul className="space-y-3 md:hidden">
        {openRoles.map((r, i) => (
          <li
            key={r.id}
            className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border animate-fade-up"
            style={{ animationDelay: `${80 + i * 40}ms` }}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${urgencyDot[r.urgency]}`} />
                  <p className="truncate font-semibold text-fg">{r.title}</p>
                </div>
                <p className="mt-0.5 text-[12px] text-fg-muted">
                  {r.client} · {r.recruiter}
                </p>
              </div>
              <span className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${stageStyles[r.stage]}`}>
                {r.stage}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-fg-muted">
              <span>
                <span className="font-semibold text-fg">{r.candidates}</span> candidates
              </span>
              <span>
                <span className="font-semibold text-fg">{r.daysOpen}</span>d open
              </span>
              <span className="font-semibold text-fg">{r.fee}</span>
              <span className="rounded-md bg-canvas px-2 py-0.5 ring-1 ring-border">{r.desk}</span>
              <Button variant="ghost" size="sm" className="ml-auto">
                Open
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <article className="hidden overflow-hidden rounded-2xl bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border md:block animate-fade-up">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas/60 text-[12px] text-fg-subtle">
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-3 py-3 font-medium">Client</th>
                <th className="px-3 py-3 font-medium">Desk</th>
                <th className="px-3 py-3 font-medium">Stage</th>
                <th className="px-3 py-3 font-medium">Recruiter</th>
                <th className="px-3 py-3 font-medium text-right">Candidates</th>
                <th className="px-3 py-3 font-medium text-right">Days</th>
                <th className="px-3 py-3 font-medium text-right">Fee</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {openRoles.map((r) => (
                <tr key={r.id} className="border-t border-border hover:bg-canvas/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${urgencyDot[r.urgency]}`} />
                      <span className="font-semibold text-fg">{r.title}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-fg-muted">{r.client}</td>
                  <td className="px-3 py-3 text-fg-muted">{r.desk}</td>
                  <td className="px-3 py-3">
                    <span className={`rounded-md px-2 py-0.5 text-[12px] font-semibold ${stageStyles[r.stage]}`}>
                      {r.stage}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-fg-muted">{r.recruiter}</td>
                  <td className="px-3 py-3 text-right font-semibold text-fg">{r.candidates}</td>
                  <td className="px-3 py-3 text-right text-fg-muted">{r.daysOpen}</td>
                  <td className="px-3 py-3 text-right font-semibold text-fg">{r.fee}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="secondary" size="sm">
                      Open
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </>
  )
}
