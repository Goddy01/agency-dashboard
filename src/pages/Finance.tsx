import { Plus } from 'lucide-react'
import { invoices, retainers } from '../data/pages'
import { PageHeader, StatStrip, Button } from '../components/ui/PageHeader'

const statusStyle = {
  Paid: 'bg-positive-soft text-positive',
  Due: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Overdue: 'bg-negative-soft text-negative',
  Draft: 'bg-surface-2 text-fg-muted',
}

export function Finance() {
  return (
    <div>
      <PageHeader
        title="Finance"
        description="Placement fees, retainers, and what is still outstanding."
        actions={
          <Button variant="primary" size="md">
            <Plus className="size-4" />
            Create invoice
          </Button>
        }
      />

      <StatStrip
        stats={[
          { label: 'Collected (90d)', value: '£186k' },
          { label: 'Outstanding', value: '£43k', hint: '1 overdue' },
          { label: 'Retainer MRR', value: '£18.7k' },
          { label: 'Avg fee / placement', value: '£17.4k' },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-4 py-3">
            <h2 className="text-base font-semibold text-fg">Invoices</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2/50 text-xs text-fg-subtle">
                  <th className="px-4 py-2.5 font-medium">Invoice</th>
                  <th className="px-3 py-2.5 font-medium">Client</th>
                  <th className="px-3 py-2.5 font-medium">Description</th>
                  <th className="px-3 py-2.5 font-medium text-right">Amount</th>
                  <th className="px-3 py-2.5 font-medium">Due</th>
                  <th className="px-4 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-b border-border last:border-b-0 hover:bg-surface-2/40"
                  >
                    <td className="px-4 py-3 font-semibold tabular-nums text-fg">
                      {inv.id}
                    </td>
                    <td className="px-3 py-3 text-fg-muted">{inv.client}</td>
                    <td className="px-3 py-3 text-fg-muted">{inv.role}</td>
                    <td className="px-3 py-3 text-right font-semibold tabular-nums text-fg">
                      {inv.amount}
                    </td>
                    <td className="px-3 py-3 text-fg-muted">{inv.due}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyle[inv.status]}`}
                      >
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-surface p-4">
          <h2 className="text-base font-semibold text-fg">Retainers</h2>
          <p className="mt-0.5 text-xs text-fg-subtle">Monthly desk coverage</p>
          <ul className="mt-4 space-y-3">
            {retainers.map((r) => (
              <li
                key={r.client}
                className="rounded-lg border border-border bg-surface-2/30 p-3"
              >
                <p className="text-sm font-semibold text-fg">{r.client}</p>
                <div className="mt-2 flex justify-between text-xs text-fg-muted">
                  <span>{r.monthly} / mo</span>
                  <span>{r.seats} open seats</span>
                </div>
                <p className="mt-1 text-xs text-fg-subtle">Renews {r.renews}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
