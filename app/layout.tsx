import './globals.css'

import { ReactNode } from 'react'

import { Montserrat } from 'next/font/google'
import { Header } from '@/components/header'
import { ActiveSectionContextProvider } from '@/providers/active-section-provider'
import { ToastContainer } from 'react-toastify'
import { Footer } from '@/components/footer'
import { ThemeContextProvider } from '@/providers/theme-provider'

const inter = Montserrat({ subsets: ['cyrillic'], weight: '500' })

export const metadata = {
  title: 'Andrey Soroko | Portfolio',
  description: 'Andrey Soroko | front-end developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-neutral-200 text-slate-800 relative pt-28 sm:pt-36
      dark:bg-gray-900 dark:text-slate-50
      `}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem]
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ToastContainer />
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
