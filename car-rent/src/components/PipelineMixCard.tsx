import { ArrowDown, ArrowUp } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { pipelineMix } from '../data'

const legend = [
  { label: 'Placed', value: '54%', up: true, color: '#22c55e' },
  { label: 'Withdrawn', value: '20%', up: true, color: '#ef4444' },
  { label: 'In process', value: '26%', up: false, color: '#0061ff' },
]

export function PipelineMixCard() {
  return (
    <article
      className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up"
      style={{ animationDelay: '200ms' }}
    >
      <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-fg">
        Pipeline outcomes
      </h2>

      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
        <div className="relative h-[140px] w-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pipelineMix}
                dataKey="value"
                innerRadius={42}
                outerRadius={62}
                paddingAngle={3}
                strokeWidth={0}
                startAngle={90}
                endAngle={-270}
              >
                {pipelineMix.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="flex w-full flex-col gap-3">
          {legend.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-3 text-[13px]"
            >
              <span className="flex items-center gap-2 text-fg-muted">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: item.color }}
                />
                {item.label}
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-fg">
                {item.value}
                <span className={item.up ? 'text-positive' : 'text-negative'}>
                  {item.up ? (
                    <ArrowUp size={12} strokeWidth={2.5} />
                  ) : (
                    <ArrowDown size={12} strokeWidth={2.5} />
                  )}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
