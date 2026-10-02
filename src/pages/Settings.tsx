import { settingsIntegrations, settingsMembers } from '../data/pages'
import { PageHeader, Button } from '../components/ui/PageHeader'

export function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Workspace defaults, team access, and connected tools."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-border bg-surface p-5">
          <h2 className="text-base font-semibold text-fg">Workspace</h2>
          <p className="mt-1 text-sm text-fg-muted">
            How Jacks appears across dashboards and exports.
          </p>
          <div className="mt-4 space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-fg-muted">
                Agency name
              </span>
              <input
                defaultValue="Jacks Recruitment"
                className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/30"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-fg-muted">
                Default currency
              </span>
              <select className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/30">
                <option>GBP (£)</option>
                <option>EUR (€)</option>
                <option>USD ($)</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-fg-muted">
                Working week
              </span>
              <select className="h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent/30">
                <option>Mon – Fri</option>
                <option>Sun – Thu</option>
              </select>
            </label>
            <Button variant="primary" size="md" className="mt-2">
              Save changes
            </Button>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-fg">Members</h2>
              <p className="mt-0.5 text-sm text-fg-muted">
                {settingsMembers.length} people with access
              </p>
            </div>
            <Button variant="secondary" size="sm">
              Invite
            </Button>
          </div>
          <ul className="divide-y divide-border">
            {settingsMembers.map((m) => (
              <li
                key={m.email}
                className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                    {m.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-fg">{m.name}</p>
                    <p className="text-xs text-fg-muted">{m.role}</p>
                  </div>
                </div>
                <span className="text-xs text-fg-subtle">{m.email}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-border bg-surface p-5 lg:col-span-2">
          <h2 className="text-base font-semibold text-fg">Integrations</h2>
          <p className="mt-1 text-sm text-fg-muted">
            ATS, messaging, CRM, and finance connections.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {settingsIntegrations.map((i) => (
              <div
                key={i.name}
                className="flex items-center justify-between rounded-lg border border-border bg-surface-2/30 px-3.5 py-3"
              >
                <span className="text-sm font-semibold text-fg">{i.name}</span>
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                    i.status === 'Connected'
                      ? 'bg-positive-soft text-positive'
                      : 'bg-negative-soft text-negative'
                  }`}
                >
                  {i.status}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
