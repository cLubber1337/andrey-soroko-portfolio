'use client'
import { BsMoon, BsSun } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useTheme } from '@/providers/theme-provider'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <motion.button
      className="absolute top-[5.2rem] right-[0.75rem]
      lg:fixed
      md:top-[2.6rem] md:right-[1.5rem]
      sm:top-[6.5rem] sm:absolute
      transition-all"
      initial={{ opacity: 0, y: '0rem', x: 100 }}
      animate={{ opacity: 1, y: '0rem', x: 0 }}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <BsSun className="text-2xl sm:text-3xl hover:scale-110 active:scale-105" />
      ) : (
        <BsMoon className="text-2xl sm:text-3xl text-white hover:scale-110 active:scale-105" />
      )}
    </motion.button>
  )
}
