import { Filter } from 'lucide-react'
import { pipelineColumns } from '../data'
import { Button, PageHeader, StatStrip } from '../components/ui/PageHeader'

export function Pipeline() {
  const total = pipelineColumns.reduce((s, c) => s + c.items.length, 0)

  return (
    <>
      <PageHeader
        title="Pipeline"
        description="Kanban view of active candidates — drag stages as they progress."
        actions={
          <Button variant="secondary">
            <Filter size={16} />
            Filter desks
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'In board', value: String(total) },
          { label: 'Sourced', value: String(pipelineColumns[0].items.length) },
          { label: 'Interview+', value: '4' },
          { label: 'Offers out', value: String(pipelineColumns[3].items.length) },
        ]}
      />

      <div className="flex gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] xl:grid xl:grid-cols-4 xl:overflow-visible xl:pb-0">
        {pipelineColumns.map((col, i) => (
          <div
            key={col.id}
            className="w-[min(260px,80vw)] shrink-0 rounded-2xl bg-surface p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border animate-fade-up xl:w-auto"
            style={{ animationDelay: `${80 + i * 50}ms` }}
          >
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: col.color }}
                />
                <h3 className="text-sm font-semibold text-fg">{col.title}</h3>
              </div>
              <span className="rounded-md bg-canvas px-1.5 py-0.5 text-xs font-semibold text-fg-muted ring-1 ring-border">
                {col.items.length}
              </span>
            </div>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li
                  key={`${col.id}-${item.name}`}
                  className="rounded-xl bg-canvas p-3 ring-1 ring-border transition-shadow hover:shadow-sm"
                >
                  <p className="text-sm font-semibold text-fg">{item.name}</p>
                  <p className="mt-0.5 text-[12px] text-fg-muted">{item.role}</p>
                  <p className="mt-1 text-[11px] text-fg-subtle">{item.client}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
