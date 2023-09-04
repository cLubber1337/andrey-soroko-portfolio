'use client'
import { createContext, Dispatch, ReactNode, useContext, useState } from 'react'
import { links } from '@/lib/data'

export type SectionName = (typeof links)[number]['name']

type Props = {
  children: ReactNode
}
export const ActiveSectionProvider = createContext<{
  activeSection: SectionName
  setActiveSection: Dispatch<SectionName>
  lastClickTime: number
  setLastClickTime: Dispatch<number>
} | null>(null)
export const ActiveSectionContextProvider = ({ children }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Главная')
  const [lastClickTime, setLastClickTime] = useState(0)
  return (
    <ActiveSectionProvider.Provider
      value={{
        activeSection,
        setActiveSection,
        lastClickTime,
        setLastClickTime,
      }}
    >
      {children}
    </ActiveSectionProvider.Provider>
  )
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionProvider)
  if (!context) {
    throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
  }
  return context
}
