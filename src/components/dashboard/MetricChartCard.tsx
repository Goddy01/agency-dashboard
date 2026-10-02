import { useId, useMemo } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { ChartPoint, RegionBar } from '../../data/mock'
import { dateRangeLabels, type DateRange } from '../../data/mock'
import { Select } from '../ui/Select'
import { useShell } from '../layout/AppShell'
import { useMediaQuery } from '../../hooks/useMediaQuery'

type Metric = {
  label: string
  value: string
  delta?: string
  deltaTone?: 'positive' | 'negative'
  hint?: string
}

type MetricChartCardProps = {
  title: string
  metrics: Metric[]
  data: ChartPoint[]
  tone?: 'green' | 'purple'
  footer?: RegionBar[]
  footerLabel?: string
  valueFormatter?: (v: number) => string
}

const tones = {
  green: {
    stroke: '#16a34a',
  },
  purple: {
    stroke: '#7c3aed',
  },
}

function ChartTooltip({
  active,
  payload,
  label,
  valueFormatter,
  stroke,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
  valueFormatter: (v: number) => string
  stroke: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-border bg-surface/95 px-3.5 py-2.5 shadow-[0_8px_30px_rgba(15,17,21,0.12)] backdrop-blur-sm">
      <div className="mb-1 flex items-center gap-2">
        <span
          className="size-2 rounded-full"
          style={{ background: stroke }}
        />
        <p className="text-xs font-medium text-fg-muted">{label}</p>
      </div>
      <p className="text-base font-bold tabular-nums tracking-tight text-fg">
        {valueFormatter(payload[0].value)}
      </p>
    </div>
  )
}

function PointDot(props: {
  cx?: number
  cy?: number
  stroke?: string
}) {
  const { cx, cy, stroke } = props
  if (cx == null || cy == null || !stroke) return null
  return (
    <g>
      <circle cx={cx} cy={cy} r={6} fill={stroke} fillOpacity={0.12} />
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="var(--surface)"
        stroke={stroke}
        strokeWidth={2.25}
      />
    </g>
  )
}

function ActivePoint(props: {
  cx?: number
  cy?: number
  stroke?: string
}) {
  const { cx, cy, stroke } = props
  if (cx == null || cy == null || !stroke) return null
  return (
    <g>
      <circle cx={cx} cy={cy} r={10} fill={stroke} fillOpacity={0.15} />
      <circle
        cx={cx}
        cy={cy}
        r={5.5}
        fill="var(--surface)"
        stroke={stroke}
        strokeWidth={2.5}
      />
    </g>
  )
}

function PointLabel(props: {
  x?: number
  y?: number
  value?: string | number
}) {
  const { x, y, value } = props
  if (x == null || y == null || value == null) return null
  return (
    <text
      x={x}
      y={y}
      dy={-14}
      textAnchor="middle"
      fill="var(--fg-muted)"
      fontSize={11}
      fontWeight={600}
      fontFamily="var(--font-sans)"
      letterSpacing="-0.01em"
    >
      {value}
    </text>
  )
}

export function MetricChartCard({
  title,
  metrics,
  data,
  tone = 'green',
  footer,
  footerLabel,
  valueFormatter = (v) => String(v),
}: MetricChartCardProps) {
  const rawId = useId().replace(/:/g, '')
  const fillId = `chart-fill-${rawId}`
  const { dateRange, setDateRange } = useShell()
  const palette = tones[tone]
  const isCompact = useMediaQuery('(max-width: 640px)')

  const yDomain = useMemo(() => {
    const max = Math.max(...data.map((d) => d.value), 0)
    const nice = Math.ceil(max * 1.12)
    return [0, nice] as [number, number]
  }, [data])

  return (
    <article className="flex min-w-0 flex-col rounded-2xl border border-border bg-surface p-3.5 shadow-[0_1px_2px_rgba(15,17,21,0.03)] sm:p-5">
      <div className="mb-3 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
            {title}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="min-w-0 sm:min-w-[7rem]">
                <p className="text-xs text-fg-muted sm:text-[13px]">{m.label}</p>
                <div className="mt-1 flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl font-bold leading-none tracking-tight text-fg sm:text-[28px]">
                    {m.value}
                  </span>
                  {m.delta && (
                    <span
                      className={`text-[11px] font-semibold sm:text-[12px] ${
                        m.deltaTone === 'negative'
                          ? 'text-negative'
                          : 'text-positive'
                      }`}
                    >
                      {m.delta}
                    </span>
                  )}
                </div>
                {m.hint && (
                  <p className="mt-1 text-[11px] leading-snug text-fg-subtle sm:mt-1.5 sm:text-[12px]">
                    {m.hint}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <Select
          className="w-full sm:w-auto"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value as DateRange)}
          options={(Object.keys(dateRangeLabels) as DateRange[]).map((k) => ({
            value: k,
            label: dateRangeLabels[k],
          }))}
        />
      </div>

      <div className="h-[200px] w-full min-w-0 sm:h-[230px] lg:h-[248px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: isCompact ? 22 : 28,
              right: isCompact ? 8 : 16,
              left: isCompact ? 0 : 4,
              bottom: 4,
            }}
          >
            <defs>
              <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={palette.stroke} stopOpacity={0.38} />
                <stop offset="42%" stopColor={palette.stroke} stopOpacity={0.12} />
                <stop offset="100%" stopColor={palette.stroke} stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="2 6"
              strokeOpacity={0.9}
              vertical={false}
            />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tickMargin={isCompact ? 6 : 10}
              interval="preserveStartEnd"
              tick={{
                fill: 'var(--fg-subtle)',
                fontSize: isCompact ? 11 : 12,
                fontWeight: 500,
              }}
            />

            <YAxis
              domain={yDomain}
              axisLine={false}
              tickLine={false}
              width={isCompact ? 32 : 40}
              tickCount={5}
              tickMargin={6}
              tick={{
                fill: 'var(--fg-subtle)',
                fontSize: isCompact ? 10 : 12,
                fontWeight: 500,
              }}
              tickFormatter={(v) => valueFormatter(Number(v))}
            />

            <Tooltip
              cursor={{
                stroke: palette.stroke,
                strokeWidth: 1,
                strokeDasharray: '4 4',
                strokeOpacity: 0.45,
              }}
              content={
                <ChartTooltip
                  valueFormatter={valueFormatter}
                  stroke={palette.stroke}
                />
              }
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke={palette.stroke}
              strokeWidth={isCompact ? 2.25 : 2.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={`url(#${fillId})`}
              fillOpacity={1}
              baseValue={0}
              animationDuration={900}
              animationEasing="ease-out"
              dot={isCompact ? false : <PointDot stroke={palette.stroke} />}
              activeDot={<ActivePoint stroke={palette.stroke} />}
            >
              {!isCompact && (
                <LabelList dataKey="display" content={<PointLabel />} />
              )}
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {footer && footer.length > 0 && (
        <div className="mt-3 border-t border-border pt-3 sm:mt-4 sm:pt-3.5">
          <p className="mb-2 text-[12px] font-medium text-fg-subtle sm:mb-2.5">
            {footerLabel}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
            {footer.map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-[13px]"
              >
                <span
                  className="size-2 rounded-full sm:size-2.5"
                  style={{ background: r.color }}
                />
                <span className="text-fg-muted">{r.label}</span>
                <span className="font-semibold tabular-nums text-fg">
                  {r.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
