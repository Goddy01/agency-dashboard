import { Briefcase, CalendarDays, ChevronDown, Users } from 'lucide-react'

export function RoleLookup() {
  return (
    <article
      className="rounded-2xl bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border sm:p-5 animate-fade-up"
      style={{ animationDelay: '120ms' }}
    >
      <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-fg">
        Find candidates
      </h2>
      <p className="mt-1 text-[12px] text-fg-subtle">
        Match talent to an open req across your desks
      </p>

      <form
        className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto]"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="relative min-w-0 sm:col-span-2 xl:col-span-1">
          <Briefcase
            size={16}
            strokeWidth={1.75}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-fg-subtle"
          />
          <select
            defaultValue=""
            className="h-11 w-full appearance-none rounded-xl bg-canvas pr-10 pl-10 text-[13px] text-fg ring-1 ring-border outline-none transition-[box-shadow] focus:ring-2 focus:ring-accent/30"
          >
            <option value="" disabled>
              Open role
            </option>
            <option value="ae">Senior Account Executive — Clyro</option>
            <option value="design">Brand Designer — Bloom & Bond</option>
            <option value="pm">Product Manager — Forge Analytics</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-fg-subtle"
          />
        </label>

        <label className="relative min-w-0">
          <Users
            size={16}
            strokeWidth={1.75}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-fg-subtle"
          />
          <select
            defaultValue="growth"
            className="h-11 w-full appearance-none rounded-xl bg-canvas pr-10 pl-10 text-[13px] text-fg ring-1 ring-border outline-none transition-[box-shadow] focus:ring-2 focus:ring-accent/30"
          >
            <option value="growth">Growth desk</option>
            <option value="creative">Creative desk</option>
            <option value="product">Product desk</option>
            <option value="ops">Ops desk</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-fg-subtle"
          />
        </label>

        <label className="relative min-w-0">
          <CalendarDays
            size={16}
            strokeWidth={1.75}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-fg-subtle"
          />
          <select
            defaultValue="week"
            className="h-11 w-full appearance-none rounded-xl bg-canvas pr-10 pl-10 text-[13px] text-fg ring-1 ring-border outline-none transition-[box-shadow] focus:ring-2 focus:ring-accent/30"
          >
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="asap">ASAP</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-fg-subtle"
          />
        </label>

        <button
          type="submit"
          className="h-11 w-full shrink-0 rounded-xl bg-accent px-8 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(0,97,255,0.28)] transition-[background,transform] duration-200 hover:bg-accent-hover active:scale-[0.98] sm:col-span-2 xl:col-span-1 xl:w-auto"
        >
          Match
        </button>
      </form>
    </article>
  )
}
