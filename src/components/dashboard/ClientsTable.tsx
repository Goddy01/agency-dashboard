import { clientsByFill } from '../../data/mock'

export function ClientsTable() {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h2 className="text-base font-semibold text-fg">By client</h2>
          <p className="text-xs text-fg-subtle">
            Fill rate, time-to-hire, and next interview
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
              <th className="px-4 py-2.5 font-medium">Client</th>
              <th className="px-3 py-2.5 font-medium text-right">Filled</th>
              <th className="px-3 py-2.5 font-medium text-right">Open</th>
              <th className="px-3 py-2.5 font-medium text-right">Avg TTH</th>
              <th className="px-3 py-2.5 font-medium text-right">Retention</th>
              <th className="px-4 py-2.5 font-medium">Next interview</th>
            </tr>
          </thead>
          <tbody>
            {clientsByFill.map((row) => (
              <tr
                key={row.id}
                className="border-b border-border last:border-b-0 transition-colors hover:bg-surface-2/40"
              >
                <td className="px-4 py-3 font-semibold text-fg">{row.name}</td>
                <td className="px-3 py-3 text-right tabular-nums text-fg">
                  {row.filled}
                </td>
                <td className="px-3 py-3 text-right tabular-nums text-fg">
                  {row.openRoles}
                </td>
                <td className="px-3 py-3 text-right tabular-nums text-fg">
                  {row.avgTth != null ? `${row.avgTth}d` : '—'}
                </td>
                <td className="px-3 py-3 text-right font-medium text-positive">
                  {row.retention}
                </td>
                <td className="px-4 py-3 text-fg-muted">
                  {row.nextInterview ?? (
                    <span className="text-fg-subtle">None scheduled</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
