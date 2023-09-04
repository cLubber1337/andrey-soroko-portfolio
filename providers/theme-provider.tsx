'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const ThemeSwitcherContext = createContext<{
  theme: Theme
  toggleTheme: () => void
} | null>(null)

type Props = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null
    if (localTheme) {
      setTheme(localTheme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  return (
    <ThemeSwitcherContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeSwitcherContext)
  if (!context) {
    throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
  }
  return context
}
