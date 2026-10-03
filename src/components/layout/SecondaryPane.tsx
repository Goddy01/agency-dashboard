import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import {
  channelStats,
  pipelineStages,
  secondaryBoards,
} from '../../data/mock'
import { sectionNav } from '../../data/pages'
import { useShell } from './AppShell'

const paneTitles: Record<string, string> = {
  '/': 'Recruiting',
  '/recruitment': 'Recruitment',
  '/automations': 'Automations',
  '/onboarding': 'Onboarding',
  '/employees': 'Employee Hub',
  '/finance': 'Finance',
  '/data-mining': 'Data Mining',
  '/settings': 'Settings',
}

function PaneContent({
  onNavigate,
}: {
  onNavigate?: () => void
}) {
  const { pathname } = useLocation()
  const title = paneTitles[pathname] ?? 'Jacks'
  const links = sectionNav[pathname] ?? sectionNav['/']
  const [active, setActive] = useState(links[0]?.id ?? 'overview')
  const showDashboardExtras = pathname === '/'

  useEffect(() => {
    const next = sectionNav[pathname] ?? sectionNav['/']
    setActive(next[0]?.id ?? 'overview')
  }, [pathname])

  return (
    <>
      <div className="border-b border-border px-3.5 py-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
          Jacks
        </p>
        <h2 className="mt-0.5 text-[15px] font-semibold text-fg">{title}</h2>
      </div>

      <nav className="flex flex-col gap-0.5 p-2">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => {
              setActive(link.id)
              onNavigate?.()
            }}
            className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
              active === link.id
                ? 'bg-surface text-fg shadow-sm'
                : 'text-fg-muted hover:bg-surface/70 hover:text-fg'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {showDashboardExtras && (
        <>
          <div className="mt-1 px-3.5">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
              Sourcing
            </p>
            <ul className="space-y-0.5">
              {channelStats.map((ch) => (
                <li key={ch.id}>
                  <button
                    type="button"
                    onClick={onNavigate}
                    className="flex w-full flex-col rounded-lg px-2.5 py-2 text-left transition hover:bg-surface/70"
                  >
                    <span className="flex w-full items-center justify-between gap-2">
                      <span className="flex min-w-0 items-center gap-2 text-sm text-fg-muted">
                        <span
                          className={`size-1.5 shrink-0 rounded-full ${
                            ch.tone === 'ok'
                              ? 'bg-positive'
                              : ch.tone === 'warn'
                                ? 'bg-amber-500'
                                : 'bg-negative'
                          }`}
                        />
                        <span className="truncate">{ch.label}</span>
                      </span>
                      <span className="shrink-0 text-xs font-semibold tabular-nums text-fg">
                        {ch.value}
                      </span>
                    </span>
                    <span className="mt-0.5 pl-3.5 text-[11px] text-fg-subtle">
                      {ch.hint}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 px-3.5">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
              Pipeline
            </p>
            <ul className="space-y-0.5">
              {pipelineStages.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={onNavigate}
                    className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm transition hover:bg-surface/70"
                  >
                    <span className="flex items-center gap-2 text-fg-muted">
                      <span
                        className="size-1.5 rounded-full"
                        style={{ background: s.color }}
                      />
                      {s.label}
                    </span>
                    <span className="tabular-nums text-fg-subtle">{s.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto border-t border-border px-3.5 py-3">
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-fg-subtle">
                Desks
              </p>
              <button
                type="button"
                className="rounded p-0.5 text-fg-subtle hover:bg-surface hover:text-fg"
                aria-label="Add desk"
              >
                <Plus className="size-3.5" />
              </button>
            </div>
            <ul className="space-y-0.5">
              {secondaryBoards.map((b) => (
                <li key={b.id}>
                  <button
                    type="button"
                    onClick={onNavigate}
                    className="w-full rounded-lg px-2.5 py-2 text-left text-sm text-fg-muted transition hover:bg-surface/70 hover:text-fg"
                  >
                    {b.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export function SecondaryPane() {
  const { paneOpen, closePane } = useShell()

  return (
    <>
      {/* Desktop / large tablet fixed pane */}
      <aside className="pane-glass hidden w-[220px] shrink-0 flex-col overflow-y-auto border-r border-border lg:flex">
        <PaneContent />
      </aside>

      {/* Mobile / tablet drawer */}
      {paneOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
          onClick={closePane}
        />
      )}
      <aside
        className={`pane-glass fixed inset-y-0 left-0 z-50 flex w-[min(288px,86vw)] flex-col overflow-y-auto border-r border-border shadow-2xl transition-transform duration-200 ease-out lg:hidden ${
          paneOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
        aria-hidden={!paneOpen}
      >
        <PaneContent onNavigate={closePane} />
      </aside>
    </>
  )
}
