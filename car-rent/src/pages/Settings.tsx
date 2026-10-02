import { settingsSections } from '../data'
import { Button, PageHeader } from '../components/ui/PageHeader'

export function Settings() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Workspace preferences for your Jacks recruitment SaaS account."
        actions={<Button>Save changes</Button>}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {settingsSections.map((section, i) => (
          <article
            key={section.id}
            className={[
              'rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up',
              section.id === 'team' ? 'lg:col-span-2' : '',
            ].join(' ')}
            style={{ animationDelay: `${80 + i * 60}ms` }}
          >
            <h2 className="text-[15px] font-semibold text-fg">{section.title}</h2>
            <p className="mt-1 text-[12px] text-fg-subtle">{section.description}</p>

            {section.fields ? (
              <ul className="mt-4 space-y-3">
                {section.fields.map((f) => (
                  <li key={f.label}>
                    <label className="block text-[12px] font-medium text-fg-muted">
                      {f.label}
                    </label>
                    <input
                      defaultValue={f.value}
                      className="mt-1.5 h-10 w-full rounded-xl bg-canvas px-3 text-[13px] text-fg ring-1 ring-border outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </li>
                ))}
              </ul>
            ) : null}

            {section.toggles ? (
              <ul className="mt-4 space-y-3">
                {section.toggles.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center justify-between gap-3 rounded-xl bg-canvas px-3 py-2.5 ring-1 ring-border"
                  >
                    <span className="text-[13px] font-medium text-fg">{t.label}</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={t.on}
                      className={[
                        'relative h-6 w-11 shrink-0 rounded-full transition-colors',
                        t.on ? 'bg-accent' : 'bg-border-strong',
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform',
                          t.on ? 'translate-x-5' : 'translate-x-0',
                        ].join(' ')}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.members ? (
              <>
                <ul className="mt-4 space-y-2 sm:hidden">
                  {section.members.map((m) => (
                    <li
                      key={m.name}
                      className="flex items-center justify-between rounded-xl bg-canvas px-3 py-2.5 ring-1 ring-border"
                    >
                      <div>
                        <p className="text-sm font-semibold text-fg">{m.name}</p>
                        <p className="text-[11px] text-fg-muted">
                          {m.role} · {m.desk}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 hidden overflow-x-auto sm:block">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="text-[12px] text-fg-subtle">
                        <th className="pb-2 font-medium">Name</th>
                        <th className="pb-2 font-medium">Role</th>
                        <th className="pb-2 font-medium">Desk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.members.map((m) => (
                        <tr key={m.name} className="border-t border-border">
                          <td className="py-2.5 font-semibold text-fg">{m.name}</td>
                          <td className="py-2.5 text-fg-muted">{m.role}</td>
                          <td className="py-2.5 text-fg-muted">{m.desk}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : null}
          </article>
        ))}
      </div>
    </>
  )
}
