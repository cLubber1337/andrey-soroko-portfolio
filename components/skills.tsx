'use client'
import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/section-heading'
import { useActiveSectionInView } from '@/lib/hooks'
import { skillsData } from '@/lib/data'

const fadeInAnimate = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export const Skills = () => {
  const { ref } = useActiveSectionInView({ name: 'Навыки', threshold: 0.7 })

  return (
    <section className="mb-28 max-w-[50rem] scroll-mt-32 text-center sm:mb-0" ref={ref} id="skills">
      <SectionHeading title="Мои навыки" />
      <ul className="flex flex-wrap justify-center text-lg text-slate-600 gap-4">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              className="bg-white borderBlack py-2 px-4 rounded-xl dark:bg-white/10
              dark:text-white/75"
              key={index}
              variants={fadeInAnimate}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true }}
            >
              {skill}
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
