import { Plus, Play } from 'lucide-react'
import { automations, automationRuns } from '../data/pages'
import { PageHeader, StatStrip, Button } from '../components/ui/PageHeader'

const statusStyle = {
  Active: 'bg-positive-soft text-positive',
  Paused: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Draft: 'bg-surface-2 text-fg-muted',
}

export function Automations() {
  return (
    <div>
      <PageHeader
        title="Automations"
        description="Keep sourcing, reminders, and handoffs running without manual chase."
        actions={
          <Button variant="primary" size="md">
            <Plus className="size-4" />
            New flow
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'Active flows', value: '3' },
          { label: 'Runs today', value: '47' },
          { label: 'Failed (7d)', value: '2', hint: 'Needs attention' },
          { label: 'Hours saved / wk', value: '~11' },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-4 py-3">
            <h2 className="text-base font-semibold text-fg">Flows</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
                  <th className="px-4 py-2.5 font-medium">Flow</th>
                  <th className="px-3 py-2.5 font-medium">Trigger</th>
                  <th className="px-3 py-2.5 font-medium">Status</th>
                  <th className="px-3 py-2.5 font-medium text-right">Runs</th>
                  <th className="px-4 py-2.5 font-medium text-right">Last run</th>
                </tr>
              </thead>
              <tbody>
                {automations.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-border last:border-b-0 hover:bg-surface-2/40"
                  >
                    <td className="px-4 py-3 font-semibold text-fg">{a.name}</td>
                    <td className="px-3 py-3 text-fg-muted">{a.trigger}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyle[a.status]}`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right tabular-nums text-fg">
                      {a.runs}
                    </td>
                    <td className="px-4 py-3 text-right text-fg-subtle">
                      {a.lastRun}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold text-fg">Run log</h2>
            <Button variant="ghost" size="sm">
              <Play className="size-3.5" />
              Replay failed
            </Button>
          </div>
          <ul className="divide-y divide-border">
            {automationRuns.map((r) => (
              <li key={r.id} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-fg">{r.flow}</p>
                  <span className="shrink-0 text-xs text-fg-subtle">{r.at}</span>
                </div>
                <p className="mt-1 text-xs text-fg-muted">{r.detail}</p>
                <span
                  className={`mt-1.5 inline-flex rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${
                    r.result === 'Success'
                      ? 'bg-positive-soft text-positive'
                      : 'bg-negative-soft text-negative'
                  }`}
                >
                  {r.result}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
