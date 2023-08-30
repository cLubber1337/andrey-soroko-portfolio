import './globals.css'
import { ReactNode } from 'react'

import { Montserrat } from 'next/font/google'
import { Header } from '@/components/header'

const inter = Montserrat({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Andrey Soroko | Portfolio',
  description: 'Andrey Soroko | front-end developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-50 text-slate-800 relative pt-28 sm:pt-36`}>
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem]
        rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
