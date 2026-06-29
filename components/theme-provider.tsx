'use client'

import * as React from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  storageKey?: string
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Get theme from localStorage without injecting a script tag
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')
    
    setTheme(initialTheme)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }
  }, [])

  return <>{children}</>
}
