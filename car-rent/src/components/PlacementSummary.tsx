import { ChevronDown } from 'lucide-react'
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { placementSummary } from '../data'

function formatY(value: number) {
  if (value === 0) return '£0'
  return `£${Math.round(value / 1000)}k`
}

export function PlacementSummary() {
  return (
    <article
      className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up"
      style={{ animationDelay: '240ms' }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-fg">
            Placement revenue
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-[12px] text-fg-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-0.5 w-4 rounded-full bg-accent" />
              Last 6 months
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-4 border-t border-dashed border-fg-subtle" />
              Same period last year
            </span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg bg-canvas px-3 py-1.5 text-[12px] font-medium text-fg-muted ring-1 ring-border transition-colors hover:text-fg"
        >
          Mar 2022 – Oct 2022
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="mt-4 h-[200px] w-full sm:h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={placementSummary}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="placementFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0061ff" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#0061ff" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="#e8e8e6"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              tickFormatter={formatY}
              width={48}
              domain={[0, 90000]}
              ticks={[0, 30000, 60000, 90000]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: '1px solid #e8e8e6',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                fontSize: 12,
              }}
              formatter={(value) => [
                `£${Number(value).toLocaleString()}`,
                '',
              ]}
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#0061ff"
              strokeWidth={2.5}
              fill="url(#placementFill)"
              name="Last 6 months"
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#a1a1aa"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Same period last year"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
