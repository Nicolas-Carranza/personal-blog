'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()

  const CurrentIcon = theme === 'system' ? Monitor : (resolvedTheme === 'dark' ? Sun : Moon)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-200 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md"
      title={`Current: ${theme} (${resolvedTheme}) - Click to toggle`}
    >
      <CurrentIcon className="w-5 h-5 transition-transform duration-200" />
    </button>
  )
}