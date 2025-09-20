'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { useState } from 'react'

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  const [showOptions, setShowOptions] = useState(false)

  const themeOptions = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
    { value: 'system' as const, icon: Monitor, label: 'System' }
  ]

  const CurrentIcon = theme === 'system' ? Monitor : (resolvedTheme === 'dark' ? Sun : Moon)

  return (
    <div className="relative">
      {/* Main toggle button */}
      <button
        onClick={toggleTheme}
        onContextMenu={(e) => {
          e.preventDefault()
          setShowOptions(!showOptions)
        }}
        className="p-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-200 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md"
        title={`Current: ${theme} (${resolvedTheme}) - Click to toggle, right-click for options`}
      >
        <CurrentIcon className="w-5 h-5 transition-transform duration-200" />
      </button>

      {/* Theme options dropdown */}
      {showOptions && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setShowOptions(false)}
          />
          
          {/* Options menu */}
          <div className="absolute right-0 top-12 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-1 min-w-[120px]">
            {themeOptions.map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                onClick={() => {
                  setTheme(value)
                  setShowOptions(false)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  theme === value
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
                {theme === value && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}