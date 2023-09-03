import {
  Body,
  Head,
  Html,
  Preview,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
type Props = {
  message: string
  senderEmail: string
}

export const ContactEmail = ({ message, senderEmail }: Props) => {
  return (
    <Html lang="ru" dir="ltr">
      <Tailwind>
        <Head>
          <title>Сообщение из формы сайта-портфолио</title>
        </Head>
        <Preview>Новое сообщение с сайта-портфолио</Preview>
        <Body>
          <Container>
            <Section
              className="flex flex-col items-center bg-neutral-100 border border-black/30 rounded-md
            p-8 my-4 max-w-max"
            >
              <img
                src="https://i.ibb.co/P4VYP6b/logo.png"
                alt="logo"
                className="mx-auto"
                width={75}
                height={75}
              />
              <Heading className="text-center text-2xl font-bold mt-8">
                Вы получили сообщение
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text className="">
                Сообщение от <span className="font-bold">{senderEmail}</span>{' '}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
