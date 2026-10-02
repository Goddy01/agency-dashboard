import { ChevronDown } from 'lucide-react'
import type { SelectHTMLAttributes } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[]
}

export function Select({ options, className = '', ...props }: SelectProps) {
  return (
    <div className={`relative inline-flex min-w-0 ${className}`}>
      <select
        className="h-8 w-full appearance-none rounded-md border border-border bg-surface pl-2.5 pr-7 text-[11px] font-medium text-fg transition hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:h-7"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-1.5 top-1/2 size-3 -translate-y-1/2 text-fg-subtle"
        strokeWidth={2}
      />
    </div>
  )
}
