'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Script to inject before React hydration to prevent FOUC (Flash of Unstyled Content)
export const ThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          function getThemePreference() {
            if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
              return localStorage.getItem('theme');
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          
          function applyTheme(theme) {
            if (theme === 'system') {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }
          
          const theme = getThemePreference();
          applyTheme(theme);
          
          // Listen for system theme changes
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            const storedTheme = localStorage.getItem('theme');
            if (!storedTheme || storedTheme === 'system') {
              applyTheme('system');
            }
          });
        })()
      `,
    }}
  />
)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get initial theme preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const initialTheme = savedTheme || 'system'
    setThemeState(initialTheme)
    
    // Resolve the theme
    const resolved = resolveTheme(initialTheme)
    setResolvedTheme(resolved)
    applyTheme(resolved)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        const newResolved = mediaQuery.matches ? 'dark' : 'light'
        setResolvedTheme(newResolved)
        applyTheme(newResolved)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const resolveTheme = (theme: Theme): ResolvedTheme => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return theme
  }

  const applyTheme = (resolvedTheme: ResolvedTheme) => {
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    
    const resolved = resolveTheme(newTheme)
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Don't render children until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}