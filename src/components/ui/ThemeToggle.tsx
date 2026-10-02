import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

type ThemeToggleProps = {
  variant?: 'sidebar' | 'header'
}

export function ThemeToggle({ variant = 'header' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const base =
    variant === 'sidebar'
      ? 'text-white/50 hover:bg-white/10 hover:text-white'
      : 'text-fg-muted hover:bg-surface-2 hover:text-fg'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`relative flex size-10 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${base}`}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -40, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex"
      >
        {isDark ? (
          <Sun className="size-[18px]" />
        ) : (
          <Moon className="size-[18px]" />
        )}
      </motion.span>
    </button>
  )
}
