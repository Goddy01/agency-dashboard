import { Download, Plus } from 'lucide-react'
import { placements } from '../data'
import { Button, PageHeader, StatStrip } from '../components/ui/PageHeader'

export function Placements() {
  return (
    <>
      <PageHeader
        title="Placements"
        description="Closed roles YTD — fees, start dates, and retention."
        actions={
          <>
            <Button variant="secondary">
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button>
              <Plus size={16} />
              Log placement
            </Button>
          </>
        }
      />

      <StatStrip
        stats={[
          { label: 'YTD placements', value: String(placements.length) },
          { label: 'Fees booked', value: '£88k' },
          { label: 'Retention', value: '100%' },
          { label: 'Avg fee', value: '£17.6k' },
        ]}
      />

      <ul className="space-y-3 md:hidden">
        {placements.map((p, i) => (
          <li
            key={p.id}
            className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border animate-fade-up"
            style={{ animationDelay: `${80 + i * 40}ms` }}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-fg">{p.hire}</p>
                <p className="text-[12px] text-fg-muted">
                  {p.role} · {p.client}
                </p>
              </div>
              <span className="font-bold text-fg">{p.fee}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-fg-muted">
              <span className="rounded-md bg-canvas px-2 py-0.5 ring-1 ring-border">
                Start {p.start}
              </span>
              <span className="rounded-md bg-canvas px-2 py-0.5 ring-1 ring-border">
                {p.desk}
              </span>
              <span className="rounded-md bg-positive-soft px-2 py-0.5 font-medium text-positive">
                Retention {p.retention}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <article className="hidden overflow-hidden rounded-2xl bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border md:block animate-fade-up">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas/60 text-[12px] text-fg-subtle">
                <th className="px-4 py-3 font-medium">Hire</th>
                <th className="px-3 py-3 font-medium">Role</th>
                <th className="px-3 py-3 font-medium">Client</th>
                <th className="px-3 py-3 font-medium">Desk</th>
                <th className="px-3 py-3 font-medium">Start</th>
                <th className="px-3 py-3 font-medium text-right">Fee</th>
                <th className="px-4 py-3 font-medium text-right">Retention</th>
              </tr>
            </thead>
            <tbody>
              {placements.map((p) => (
                <tr key={p.id} className="border-t border-border hover:bg-canvas/40">
                  <td className="px-4 py-3 font-semibold text-fg">{p.hire}</td>
                  <td className="px-3 py-3 text-fg-muted">{p.role}</td>
                  <td className="px-3 py-3 text-fg-muted">{p.client}</td>
                  <td className="px-3 py-3 text-fg-muted">{p.desk}</td>
                  <td className="px-3 py-3 text-fg-muted">{p.start}</td>
                  <td className="px-3 py-3 text-right font-semibold text-fg">{p.fee}</td>
                  <td className="px-4 py-3 text-right font-semibold text-positive">
                    {p.retention}
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
