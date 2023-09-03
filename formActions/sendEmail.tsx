'use server'

import { Resend } from 'resend'
import { getErrorMessage, validateValue } from '@/lib/helpers'
import { ContactEmail } from '@/email/contact-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email')
  const message = formData.get('message')

  if (!validateValue(message, 5000)) {
    return {
      error: 'Неверное сообщение',
    }
  }
  if (!validateValue(email, 100)) {
    return {
      error: 'Неверный email адрес',
    }
  }
  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'supersoroko@gmail.com',
      subject: 'Message from contact form',
      reply_to: email,
      react: <ContactEmail message={message} senderEmail={email} />,
    })

    if (!data.id) {
      throw new Error(JSON.stringify(data))
    }
  } catch (error: any) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
