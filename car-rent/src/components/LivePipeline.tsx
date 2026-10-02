import type { RoleStatus } from '../data'
import { liveRoles } from '../data'

const statusMeta: Record<RoleStatus, { label: string; dot: string }> = {
  offer: { label: 'Offer out', dot: 'bg-positive' },
  interview: { label: 'Interview', dot: 'bg-pending' },
  screening: { label: 'Screening', dot: 'bg-negative' },
}

export function LivePipeline() {
  return (
    <article
      className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up"
      style={{ animationDelay: '180ms' }}
    >
      <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-fg">
        Live role status
      </h2>
      <p className="mt-1 text-[12px] text-fg-subtle">
        Active reqs moving through the pipeline today
      </p>

      {/* Mobile cards */}
      <ul className="mt-4 space-y-3 md:hidden">
        {liveRoles.map((row, i) => {
          const status = statusMeta[row.status]
          return (
            <li
              key={row.roleId}
              className="rounded-xl bg-canvas p-3 ring-1 ring-border animate-fade-up"
              style={{ animationDelay: `${220 + i * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={row.avatar}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
                  />
                  <div>
                    <p className="text-sm font-semibold text-fg">{row.title}</p>
                    <p className="text-[11px] text-fg-subtle">
                      {row.client} · {row.recruiter}
                    </p>
                  </div>
                </div>
                <span className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-semibold text-fg ring-1 ring-border">
                  {row.roleId}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[12px] text-fg">
                  <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                  {status.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-fg">{row.fee}</span>
                  <button
                    type="button"
                    className="rounded-lg bg-accent px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-accent-hover"
                  >
                    Open
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Desktop table */}
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="text-[12px] font-medium text-fg-subtle">
              <th className="pb-3 font-medium">No.</th>
              <th className="pb-3 font-medium">Req</th>
              <th className="pb-3 font-medium">Recruiter</th>
              <th className="pb-3 font-medium">Role</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Fee</th>
              <th className="pb-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {liveRoles.map((row, i) => {
              const status = statusMeta[row.status]
              return (
                <tr
                  key={row.roleId}
                  className="border-t border-border text-[13px] animate-fade-up"
                  style={{ animationDelay: `${220 + i * 60}ms` }}
                >
                  <td className="py-3.5 pr-3 font-medium text-fg-muted">{row.no}</td>
                  <td className="py-3.5 pr-3">
                    <span className="inline-flex rounded-md bg-canvas px-2.5 py-1 font-semibold tracking-wide text-fg ring-1 ring-border">
                      {row.roleId}
                    </span>
                  </td>
                  <td className="py-3.5 pr-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={row.avatar}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
                      />
                      <span className="font-medium text-fg">{row.recruiter}</span>
                    </div>
                  </td>
                  <td className="py-3.5 pr-3">
                    <div className="min-w-0">
                      <p className="font-medium text-fg">{row.title}</p>
                      <p className="text-[11px] text-fg-subtle">{row.client}</p>
                    </div>
                  </td>
                  <td className="py-3.5 pr-3">
                    <span className="inline-flex items-center gap-2 text-fg">
                      <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </td>
                  <td className="py-3.5 pr-3 font-semibold text-fg">{row.fee}</td>
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="rounded-lg bg-accent px-3.5 py-1.5 text-[12px] font-semibold text-white transition-[background,transform] duration-200 hover:bg-accent-hover active:scale-[0.97]"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </article>
  )
}
