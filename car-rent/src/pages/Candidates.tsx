import { Filter, Plus, Search } from 'lucide-react'
import { candidates } from '../data'
import { Button, PageHeader, StatStrip } from '../components/ui/PageHeader'

export function Candidates() {
  return (
    <>
      <PageHeader
        title="Candidates"
        description="Everyone in active searches — score, stage, and source at a glance."
        actions={
          <>
            <Button variant="secondary">
              <Filter size={16} />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button>
              <Plus size={16} />
              Add candidate
            </Button>
          </>
        }
      />

      <StatStrip
        stats={[
          { label: 'In pipeline', value: String(candidates.length), hint: 'Active profiles' },
          { label: 'Avg score', value: '84', hint: 'Across desks' },
          { label: 'New this week', value: '12' },
          { label: 'Warm outbound', value: '6' },
        ]}
      />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative block min-w-0 flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-fg-subtle"
          />
          <input
            type="search"
            placeholder="Search candidates…"
            className="h-10 w-full rounded-xl bg-surface pr-4 pl-10 text-[13px] text-fg shadow-sm ring-1 ring-border outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>

      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {candidates.map((c, i) => (
          <li
            key={c.id}
            className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border animate-fade-up"
            style={{ animationDelay: `${80 + i * 40}ms` }}
          >
            <div className="flex items-start gap-3">
              <img
                src={c.avatar}
                alt=""
                className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-fg">{c.name}</p>
                    <p className="text-[12px] text-fg-muted">
                      {c.role} · {c.client}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-accent">{c.score}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-md bg-accent-soft px-2 py-0.5 font-medium text-accent">
                    {c.stage}
                  </span>
                  <span className="rounded-md bg-canvas px-2 py-0.5 text-fg-muted ring-1 ring-border">
                    {c.source}
                  </span>
                  <span className="text-fg-subtle">{c.updated}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <article className="hidden overflow-hidden rounded-2xl bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border md:block animate-fade-up">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas/60 text-[12px] text-fg-subtle">
                <th className="px-4 py-3 font-medium">Candidate</th>
                <th className="px-3 py-3 font-medium">Role</th>
                <th className="px-3 py-3 font-medium">Client</th>
                <th className="px-3 py-3 font-medium">Stage</th>
                <th className="px-3 py-3 font-medium">Source</th>
                <th className="px-3 py-3 font-medium text-right">Score</th>
                <th className="px-4 py-3 font-medium text-right">Updated</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr key={c.id} className="border-t border-border hover:bg-canvas/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={c.avatar}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
                      />
                      <span className="font-semibold text-fg">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-fg-muted">{c.role}</td>
                  <td className="px-3 py-3 text-fg-muted">{c.client}</td>
                  <td className="px-3 py-3">
                    <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[12px] font-medium text-accent">
                      {c.stage}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-fg-muted">{c.source}</td>
                  <td className="px-3 py-3 text-right font-bold text-fg">{c.score}</td>
                  <td className="px-4 py-3 text-right text-fg-subtle">{c.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </>
  )
}
