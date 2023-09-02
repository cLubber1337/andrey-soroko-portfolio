'use client'
import meImg from '@/public/me.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin, BsTelegram } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useActiveSectionInView } from '@/lib/hooks'

export const Intro = () => {
  const { ref } = useActiveSectionInView({ name: 'Главная', threshold: 1 })

  return (
    <section ref={ref} id="home" className="mb-28 max-w-6xl text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'tween',
              stiffness: 100,
              damping: 50,
              duration: 0.5,
            }}
          >
            <Image
              className="rounded-full w-36 h-36 object-cover border-8 border-white shadow-xl"
              style={{ objectPosition: 'top' }}
              quality={95}
              src={meImg}
              alt="Andrey Soroko"
              priority
            />
          </motion.div>

          <motion.span
            className="absolute bottom-[-0.5rem] right-4 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl sm:mt-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Привет</span>, меня зовут
        <span className="font-bold"> Андрей Сороко.</span> Я
        <span className="font-bold"> front-end разработчкик</span> с
        <span className="font-bold"> 1.5 года</span> опыта. Мне нравиться создавать
        <span className="italic"> сайты и приложения</span>. Моя специализация -
        <span className="underline"> React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          className="group flex items-center gap-2 bg-slate-800 text-white px-6
          py-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950
          active:scale-105
          transition-all"
          href="#contact"
        >
          Связаться со мной{' '}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white font-semibold px-7 py-3 flex items-center gap-2
          rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition-all cursor-pointer border border-black/20
          hover:text-slate-950"
          href="/AndreySoroko.pdf"
          download
        >
          Скачать CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-slate-950 flex
        items-center rounded-full focus:scale-[1.15]
        hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border
        border-black/20"
            href="https://t.me/AndreySoroko"
            target="_blank"
          >
            <BsTelegram size={24} />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-slate-950 flex
        items-center rounded-full focus:scale-[1.15]
        hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border
        border-black/20"
            href="https://www.linkedin.com/in/andrey-soroko/"
            target="_blank"
          >
            <BsLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
