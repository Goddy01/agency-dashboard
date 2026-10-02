import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-start sm:justify-between animate-fade-up">
      <div className="min-w-0">
        <h1 className="text-[22px] font-bold tracking-[-0.03em] text-fg sm:text-[26px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 max-w-xl text-[13px] text-fg-muted">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </header>
  )
}

type Stat = { label: string; value: string; hint?: string }

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="rounded-2xl bg-surface px-3.5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-border animate-fade-up sm:px-4 sm:py-3.5"
          style={{ animationDelay: `${60 + i * 40}ms` }}
        >
          <p className="text-[11px] text-fg-muted sm:text-[12px]">{s.label}</p>
          <p className="mt-1 text-lg font-bold tracking-tight text-fg sm:text-xl">
            {s.value}
          </p>
          {s.hint ? (
            <p className="mt-0.5 text-[11px] text-fg-subtle">{s.hint}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-[background,transform,color] duration-200 active:scale-[0.98] disabled:opacity-50'
  const sizes = {
    sm: 'h-8 px-3 text-[12px]',
    md: 'h-10 px-4 text-[13px]',
  }
  const variants = {
    primary:
      'bg-accent text-white shadow-[0_8px_18px_rgba(0,97,255,0.22)] hover:bg-accent-hover',
    secondary:
      'bg-surface text-fg ring-1 ring-border hover:bg-canvas',
    ghost: 'bg-transparent text-fg-muted hover:bg-surface hover:text-fg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
