import { Search, FileText } from 'lucide-react'
import { useState } from 'react'
import { employees } from '../data/pages'
import { PageHeader, StatStrip, Button } from '../components/ui/PageHeader'

const statusStyle = {
  Active: 'bg-positive-soft text-positive',
  Probation: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Notice: 'bg-negative-soft text-negative',
}

export function Employees() {
  const [q, setQ] = useState('')
  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(q.toLowerCase()) ||
      e.client.toLowerCase().includes(q.toLowerCase()) ||
      e.role.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <div>
      <PageHeader
        title="Employee Hub"
        description="Placed talent still in seat — directory, docs, and retention signals."
        actions={
          <Button variant="secondary" size="md">
            <FileText className="size-4" />
            Request documents
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'Active placements', value: '20' },
          { label: 'On probation', value: '4' },
          { label: 'Notice period', value: '1' },
          { label: 'Retention', value: '100%' },
        ]}
      />

      <div className="mb-3">
        <label className="relative block max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-subtle" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, role, or client…"
            className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>

      <article className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
                <th className="px-4 py-2.5 font-medium">Employee</th>
                <th className="px-3 py-2.5 font-medium">Role</th>
                <th className="px-3 py-2.5 font-medium">Client</th>
                <th className="px-3 py-2.5 font-medium">Start date</th>
                <th className="px-3 py-2.5 font-medium">Location</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr
                  key={e.id}
                  className="border-b border-border last:border-b-0 hover:bg-surface-2/40"
                >
                  <td className="px-4 py-3 font-semibold text-fg">{e.name}</td>
                  <td className="px-3 py-3 text-fg-muted">{e.role}</td>
                  <td className="px-3 py-3 text-fg-muted">{e.client}</td>
                  <td className="px-3 py-3 text-fg-muted">{e.start}</td>
                  <td className="px-3 py-3 text-fg-muted">{e.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyle[e.status]}`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  )
}
