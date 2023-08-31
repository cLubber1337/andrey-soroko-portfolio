'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
export const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title="Обо мне" />
      <p className="mb-3">
        До программирования я работал в интернет-магазине в должности{' '}
        <span className="font-medium">менеджера</span>. Однако, мне стало интересно, как работает
        веб-сайт и как его можно улучшить. После того, как я попробовал программирование как хобби,
        я понял, что хочу связать свою жизнь и профессию именно с разработкой{' '}
        <span className="font-medium">веб-приложений и сайтов</span>.
      </p>

      <p className="mb-3">
        Мой основной стек - <span className="font-medium">React и TypeScript</span>. Однако, я
        всегда готов изучать и изучаю новые технологии в зависимости от текущих требований и
        ситуаций. Мне <span className="underline">особенно нравится</span> аспект решения сложных
        задач и получение удовлетворения от нахождения решения проблемы. Я ищу должность в качестве{' '}
        <span className="font-medium">frontend-разработчика</span> и готов внести свой вклад в
        проекты, используя свои навыки и страсть к программированию.
      </p>

      <p>
        <span className="italic">Когда я не пишу код</span>, я посещаю тренажерный зал, смотрю
        фильмы и активно провожу время на природе. Мне также нравится
        <span className="font-medium">изучать новые вещи</span>. В настоящее время я изучаю{' '}
        <span className="font-medium">историю и философию</span>.
      </p>
    </motion.section>
  )
}
