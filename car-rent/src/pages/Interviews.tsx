import { CalendarPlus, Filter } from 'lucide-react'
import { interviews } from '../data'
import { Button, PageHeader, StatStrip } from '../components/ui/PageHeader'

const typeStyles = {
  First: 'bg-accent-soft text-accent',
  Final: 'bg-positive-soft text-positive',
  Client: 'bg-violet-500/10 text-violet-600',
} as const

const statusStyles = {
  Confirmed: 'text-positive',
  Pending: 'text-amber-600',
} as const

export function Interviews() {
  const today = interviews.filter((i) => i.date === 'Today')
  const upcoming = interviews.filter((i) => i.date !== 'Today')

  return (
    <>
      <PageHeader
        title="Interviews"
        description="Schedule, confirm, and chase interviews across client and internal rounds."
        actions={
          <>
            <Button variant="secondary">
              <Filter size={16} />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button>
              <CalendarPlus size={16} />
              Schedule
            </Button>
          </>
        }
      />

      <StatStrip
        stats={[
          { label: 'Today', value: String(today.length) },
          { label: 'Tomorrow', value: String(upcoming.length) },
          { label: 'Pending confirm', value: '2' },
          { label: 'This week', value: '17' },
        ]}
      />

      {[
        { label: 'Today', items: today },
        { label: 'Upcoming', items: upcoming },
      ].map((group) => (
        <section key={group.label} className="mb-6">
          <h2 className="mb-3 text-[15px] font-semibold text-fg">{group.label}</h2>
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((item, i) => (
              <li
                key={item.id}
                className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border animate-fade-up"
                style={{ animationDelay: `${80 + i * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold tracking-tight text-accent">
                      {item.time}
                    </p>
                    <p className="mt-1 font-semibold text-fg">{item.candidate}</p>
                    <p className="text-[12px] text-fg-muted">
                      {item.role} · {item.client}
                    </p>
                  </div>
                  <span className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${typeStyles[item.type]}`}>
                    {item.type}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[12px]">
                  <span className="text-fg-muted">{item.recruiter}</span>
                  <span className={`font-semibold ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
