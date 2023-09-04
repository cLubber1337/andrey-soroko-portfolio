'use client'

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({ title, description, tags, imageUrl, code, site }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article
        className="bg-gray-100 max-w-[50rem] border border-black/10 rounded-lg overflow-hidden sm:pr-0 relative
    sm:h-[23rem] hover:bg-gray-200 transition sm:group-even:pl-0 sm:pl-4
    dark:bg-white/10 dark:hover:bg-white/20
    "
      >
        <div
          className="pt-4 pb-7 px-5 group-even:ml-0 sm:pl-5 sm:pr-2 sm:pt-10 sm:max-w-[55%]
        flex flex-col h-full csm:group-even:ml-[22rem] sm:group-even:ml-[15rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed dark:text-slate-400">{description}</p>
          <p className="flex gap-4 py-4">
            <a
              className="flex items-center gap-2 hover:text-slate-950 transition"
              href={code}
              target="_blank"
            >
              <BsGithub size={24} />
              Код
            </a>
            <a
              className="flex items-center gap-2 hover:text-slate-950 transition"
              href={site}
              target="_blank"
            >
              <BiLinkExternal size={24} />
              Сайт
            </a>
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map(tag => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block top-8 -right-60 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-60
        csm:group-even:-left-40
        csm:-right-40"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </article>
    </motion.div>
  )
}
