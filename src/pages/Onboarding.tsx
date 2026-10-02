import { Plus } from 'lucide-react'
import { onboardingPrograms, trainingModules } from '../data/pages'
import { PageHeader, StatStrip, Button } from '../components/ui/PageHeader'

const statusStyle = {
  'On track': 'bg-positive-soft text-positive',
  'At risk': 'bg-negative-soft text-negative',
  Complete: 'bg-surface-2 text-fg-muted',
}

export function Onboarding() {
  return (
    <div>
      <PageHeader
        title="Onboarding & Training"
        description="Get placed talent productive fast — programs, modules, and mentor check-ins."
        actions={
          <Button variant="primary" size="md">
            <Plus className="size-4" />
            Start program
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'Active programs', value: '3' },
          { label: 'Completed (90d)', value: '11' },
          { label: 'At risk', value: '1', hint: 'Needs mentor chase' },
          { label: 'Avg days to ramp', value: '28' },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-4 py-3">
            <h2 className="text-base font-semibold text-fg">Active programs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
                  <th className="px-4 py-2.5 font-medium">Hire</th>
                  <th className="px-3 py-2.5 font-medium">Role / Client</th>
                  <th className="px-3 py-2.5 font-medium">Started</th>
                  <th className="px-3 py-2.5 font-medium">Progress</th>
                  <th className="px-3 py-2.5 font-medium">Mentor</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {onboardingPrograms.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-border last:border-b-0 hover:bg-surface-2/40"
                  >
                    <td className="px-4 py-3 font-semibold text-fg">{p.hire}</td>
                    <td className="px-3 py-3">
                      <p className="text-fg">{p.role}</p>
                      <p className="text-xs text-fg-subtle">{p.client}</p>
                    </td>
                    <td className="px-3 py-3 text-fg-muted">{p.start}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-surface-2">
                          <div
                            className="h-full rounded-full bg-accent"
                            style={{ width: `${p.progress}%` }}
                          />
                        </div>
                        <span className="tabular-nums text-xs text-fg-muted">
                          {p.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-fg-muted">{p.mentor}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyle[p.status]}`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-surface p-4">
          <h2 className="text-base font-semibold text-fg">Training modules</h2>
          <p className="mt-0.5 text-xs text-fg-subtle">
            Shared curriculum for new placements
          </p>
          <ul className="mt-4 space-y-3">
            {trainingModules.map((m) => (
              <li
                key={m.id}
                className="rounded-lg border border-border bg-surface-2/30 p-3"
              >
                <p className="text-sm font-semibold text-fg">{m.name}</p>
                <div className="mt-1 flex justify-between text-xs text-fg-muted">
                  <span>{m.duration}</span>
                  <span>{m.done} completed</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
