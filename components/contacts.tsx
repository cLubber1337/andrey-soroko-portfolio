'use client'
import { SectionHeading } from '@/components/section-heading'
import { useActiveSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '@/formActions/sendEmail'

import { SubmitBtn } from '@/components/submit-btn'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

export const Contacts = () => {
  const { ref } = useActiveSectionInView({ name: 'Контакты' })
  const [value, setValue] = useState('')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
    >
      <SectionHeading title="Контакты" />
      <p className="text-slate-600 text-center leading-relaxed mb-8">
        Пожалуйста, напишите мне напрямую на почту{' '}
        <a className="underline" href="mailto:supersoroko@gmail.com">
          supersoroko@gmail.com
        </a>{' '}
        или заполните форму ниже:
      </p>
      <form
        className="flex flex-col gap-6 w-full"
        action={async formData => {
          const { error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully!')
          setValue('')
        }}
      >
        <input
          className="h-12 rounded-lg px-4 borderBlack"
          type="email"
          name="email"
          placeholder="Ваш email"
          maxLength={100}
          required
        />
        <textarea
          className="h-52 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Ваше сообщение"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}