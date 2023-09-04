'use client'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSection } from '@/providers/active-section-provider'

export const Header = () => {
  const { setActiveSection, activeSection, setLastClickTime } = useActiveSection()

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="flex items-center fixed top-0 left-1/2 transform -translate-x-1/2  h-[4.5rem] w-full
        rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.25rem] sm:top-6 sm:h-[3.95rem] sm:w-[36rem] sm:rounded-full
        dark:bg-gray-950/80 dark:border-black/40"
        initial={{ opacity: 0, x: '-50%', y: -100 }}
        animate={{ opacity: 1, x: '-50%', y: 0 }}
      >
        <ul className="w-full px-2 flex justify-center flex-wrap gap-1 select-none sm:gap-0 sm:px-2">
          {links.map(({ href, name }) => {
            return (
              <li key={name}>
                <Link
                  className={clsx(
                    'text-sm whitespace-nowrap py-1 px-2 text-gray-500 rounded-full ' +
                      'px-1 font-semibold transition tracking-wide hover:text-gray-950 ' +
                      'sm:px-4 sm:py-3 sm:text-base cursor-pointer ' +
                      'dark:text-slate-300 dark:hover:text-slate-50',
                    activeSection === name &&
                      'bg-pink-100/70 text-slate-700 dark:bg-gray-800/80 dark:text-slate-50 dark:bg-opacity-80'
                  )}
                  href={href}
                  onClick={() => {
                    setActiveSection(name)
                    setLastClickTime(Date.now())
                  }}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </header>
  )
}
