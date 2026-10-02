import { Plus, Filter } from 'lucide-react'
import { openRoles } from '../data/mock'
import { candidates, pipelineColumns } from '../data/pages'
import { PageHeader, StatStrip, Button } from '../components/ui/PageHeader'

export function Recruitment() {
  return (
    <div>
      <PageHeader
        title="Recruitment"
        description="Live pipeline across desks — move candidates, chase interviews, close offers."
        actions={
          <>
            <Button variant="secondary" size="md">
              <Filter className="size-4" />
              Filter
            </Button>
            <Button variant="primary" size="md">
              <Plus className="size-4" />
              Add candidate
            </Button>
          </>
        }
      />

      <StatStrip
        stats={[
          { label: 'In pipeline', value: '258', hint: 'All active stages' },
          { label: 'Interviews this week', value: '17' },
          { label: 'Offers out', value: '9' },
          { label: 'Open reqs', value: String(openRoles.length) },
        ]}
      />

      <section className="mb-4">
        <h2 className="mb-3 text-base font-semibold text-fg">Pipeline board</h2>
        <div className="flex gap-3 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4">
          {pipelineColumns.map((col) => (
            <div
              key={col.id}
              className="w-[min(260px,78vw)] shrink-0 rounded-xl border border-border bg-surface-2/40 p-3 md:w-auto md:shrink"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-fg">{col.title}</h3>
                <span className="rounded-md bg-surface px-1.5 py-0.5 text-xs font-semibold text-fg-muted">
                  {col.items.length}
                </span>
              </div>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li
                    key={`${col.id}-${item.name}`}
                    className="rounded-lg border border-border bg-surface p-3 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-fg">{item.name}</p>
                    <p className="mt-0.5 text-xs text-fg-muted">{item.role}</p>
                    <p className="mt-1 text-xs text-fg-subtle">{item.client}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <article className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="border-b border-border px-4 py-3">
          <h2 className="text-base font-semibold text-fg">All candidates</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
                <th className="px-4 py-2.5 font-medium">Candidate</th>
                <th className="px-3 py-2.5 font-medium">Role</th>
                <th className="px-3 py-2.5 font-medium">Client</th>
                <th className="px-3 py-2.5 font-medium">Stage</th>
                <th className="px-3 py-2.5 font-medium">Source</th>
                <th className="px-3 py-2.5 font-medium text-right">Score</th>
                <th className="px-4 py-2.5 font-medium text-right">Updated</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border last:border-b-0 hover:bg-surface-2/40"
                >
                  <td className="px-4 py-3 font-semibold text-fg">{c.name}</td>
                  <td className="px-3 py-3 text-fg-muted">{c.role}</td>
                  <td className="px-3 py-3 text-fg-muted">{c.client}</td>
                  <td className="px-3 py-3">
                    <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">
                      {c.stage}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-fg-muted">{c.source}</td>
                  <td className="px-3 py-3 text-right tabular-nums font-medium text-fg">
                    {c.score}
                  </td>
                  <td className="px-4 py-3 text-right text-fg-subtle">
                    {c.updated}
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
