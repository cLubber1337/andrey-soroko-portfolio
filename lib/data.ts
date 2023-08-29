import cardsImg from '@/public/cards.jpg'
import socialMediaImg from '@/public/socialMedia.jpg'
import taskManager from '@/public/taskManager.jpg'
import ePlugImg from '@/public/e-plug.jpg'

export const links = [
  {
    name: 'Главная',
    href: '#home',
  },
  {
    name: 'Обо мне',
    href: '#about',
  },
  {
    name: 'Проекты',
    href: '#projects',
  },
  {
    name: 'Навыки',
    href: '#skills',
  },
  {
    name: 'Контакты',
    href: '#contact',
  },
] as const

export const projectsData = [
  {
    title: 'Обучающая платформа "Flash Cards"',
    description:
      '"Flash Cards" - это онлайн-платформа для обучения на основе повторения и активного запоминания информации ' +
      'с использованием карточек.',
    tags: [
      'React',
      'TypeScript',
      'SCSS',
      'Redux Toolkit',
      'RTK Query',
      'Storybook',
      'React Hook Form',
    ],
    imageUrl: cardsImg,
  },
  {
    title: 'Интернет-магазин "E-PLUG"',
    description:
      'Это демо-версия фронтенд-части интернет-магазина, которая ' +
      'представляет адаптивный дизайн для мобильных устройств. На сайте пользователь может ' +
      'легко находить товары, ознакомиться с их описанием, добавить их в корзину и сортировать ' +
      'по различным параметрам.',
    tags: ['React', 'TypeScript', 'SCSS', 'Redux Toolkit'],
    imageUrl: ePlugImg,
  },
  {
    title: 'Менеджер задач',
    description:
      'Приложение, которое помогает вам управлять своими задачами и организовывать свою работу или личные дела.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'Formik'],
    imageUrl: taskManager,
  },
  {
    title: 'Социальная сеть',
    description: 'Онлайн-платформа по поиску друзей и знакомств.',
    tags: ['React', 'TypeScript', 'Redux', 'Tailwind', 'Framer'],
    imageUrl: socialMediaImg,
  },
] as const

export const skillsData = [
  'React',
  'TypeScript',
  'JavaScript',
  'Redux Toolkit',
  'RTK Query',
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind',
  'Material UI',
  'Storybook',
  'Jest',
  'Next.js',
  'Git',
  'Rest API',
  'React Hook Form',
] as const
