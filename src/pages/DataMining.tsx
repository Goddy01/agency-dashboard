import { Download } from 'lucide-react'
import { dataSources, miningInsights } from '../data/pages'
import { PageHeader, StatStrip, Button } from '../components/ui/PageHeader'

const statusStyle = {
  Healthy: 'bg-positive-soft text-positive',
  Lagging: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Error: 'bg-negative-soft text-negative',
}

export function DataMining() {
  return (
    <div>
      <PageHeader
        title="Data Mining"
        description="Pull signals from ATS, channels, and CRM — spot bottlenecks before they cost fees."
        actions={
          <Button variant="secondary" size="md">
            <Download className="size-4" />
            Export CSV
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'Connected sources', value: '5' },
          { label: 'Records synced', value: '25.4k' },
          { label: 'Insights (7d)', value: '3' },
          { label: 'Sync health', value: '1 error', hint: 'Xero auth' },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-4 py-3">
            <h2 className="text-base font-semibold text-fg">Sources</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
                  <th className="px-4 py-2.5 font-medium">Source</th>
                  <th className="px-3 py-2.5 font-medium">Type</th>
                  <th className="px-3 py-2.5 font-medium text-right">Records</th>
                  <th className="px-3 py-2.5 font-medium">Freshness</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {dataSources.map((s) => (
                  <tr
                    key={s.id}
                    className="border-b border-border last:border-b-0 hover:bg-surface-2/40"
                  >
                    <td className="px-4 py-3 font-semibold text-fg">{s.name}</td>
                    <td className="px-3 py-3 text-fg-muted">{s.type}</td>
                    <td className="px-3 py-3 text-right tabular-nums text-fg">
                      {s.records}
                    </td>
                    <td className="px-3 py-3 text-fg-muted">{s.freshness}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyle[s.status]}`}
                      >
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-surface p-4">
          <h2 className="text-base font-semibold text-fg">Insights</h2>
          <p className="mt-0.5 text-xs text-fg-subtle">Auto-detected this week</p>
          <ul className="mt-4 space-y-3">
            {miningInsights.map((insight) => (
              <li
                key={insight.title}
                className="rounded-lg border border-border bg-surface-2/30 p-3"
              >
                <p className="text-sm font-semibold text-fg">{insight.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-fg-muted">
                  {insight.detail}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
