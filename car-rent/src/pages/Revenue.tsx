import { Download } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { placementSummary, revenueByDesk } from '../data'
import { PlacementSummary } from '../components/PlacementSummary'
import { Button, PageHeader, StatStrip } from '../components/ui/PageHeader'

export function Revenue() {
  return (
    <>
      <PageHeader
        title="Revenue"
        description="Placement fees by desk and period — agency SaaS billing view."
        actions={
          <Button variant="secondary">
            <Download size={16} />
            Export CSV
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'MTD fees', value: '£74k', hint: '+12% vs prior' },
          { label: 'YTD fees', value: '£348k' },
          { label: 'Outstanding', value: '£41k' },
          { label: 'Avg fee', value: '£17.6k' },
        ]}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up">
          <h2 className="text-[15px] font-semibold text-fg">Fees by desk</h2>
          <p className="mt-1 text-[12px] text-fg-subtle">Last 6 months</p>
          <div className="mt-4 h-[240px] w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByDesk} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#e8e8e6" strokeDasharray="4 4" />
                <XAxis
                  dataKey="desk"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#a1a1aa', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#a1a1aa', fontSize: 12 }}
                  tickFormatter={(v) => `£${v / 1000}k`}
                  width={44}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: '1px solid #e8e8e6',
                    fontSize: 12,
                  }}
                  formatter={(value) => [`£${Number(value).toLocaleString()}`, 'Fees']}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#0061ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article
          className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <h2 className="text-[15px] font-semibold text-fg">Desk breakdown</h2>
          <ul className="mt-4 space-y-3">
            {revenueByDesk.map((d) => {
              const max = Math.max(...revenueByDesk.map((x) => x.value))
              const pct = Math.round((d.value / max) * 100)
              return (
                <li key={d.desk}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-fg">{d.desk}</span>
                    <span className="tabular-nums text-fg-muted">
                      £{(d.value / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-canvas">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: d.fill }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          <p className="mt-4 text-[12px] text-fg-subtle">
            Top month: Oct · £{(placementSummary[5].current / 1000).toFixed(0)}k
          </p>
        </article>
      </div>

      <div className="mt-4">
        <PlacementSummary />
      </div>
    </>
  )
}
