'use client'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.nav
        className="flex items-center fixed top-0 left-1/2 transform -translate-x-1/2  h-[4.5rem] w-full
        rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        backdrop-blur-[0.25rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ opacity: 0, x: '-50%', y: -100 }}
        animate={{ opacity: 1, x: '-50%', y: 0 }}
      >
        <ul className="w-full px-2 flex justify-center flex-wrap gap-2 sm:gap-2 sm:px-6">
          {links.map(({ href, name }) => {
            return (
              <li
                className="text-sm whitespace-nowrap text-gray-500 px-1 font-semibold transition hover:text-gray-950
                sm:px-3 sm:text-base"
                key={name}
              >
                <Link href={href}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </header>
  )
}
