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
    title: '"Flash Cards"',
    description:
      'Онлайн-платформа для обучения на основе повторения и активного запоминания информации ' +
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
    site: "https://flash-cards-pro.vercel.app/",
    code: "https://github.com/cLubber1337/flash-cards-pro"
  },
  {
    title: '"E-PLUG"',
    description:
      'Интернет-магазин с адаптивным дизайном, где пользователи могут находить товары, ознакомиться с их ' +
      'описанием, добавлять их в корзину и сортировать по различным параметрам.',
    tags: ['React', 'TypeScript', 'SCSS', 'Redux Toolkit'],
    imageUrl: ePlugImg,
    site: 'https://clubber1337.github.io/e-commerce-website-e-plug/',
    code: 'https://github.com/cLubber1337/e-commerce-website-e-plug',
  },
  {
    title: 'Социальная сеть',
    description:
      'Онлайн-платформа позволяющая найти и добавить себе друзей. Есть возможность редактирование профиля, ' +
      'который видят другие пользователи.',
    tags: ['React', 'TypeScript', 'Redux', 'MUI'],
    imageUrl: socialMediaImg,
    site: 'https://clubber1337.github.io/social-network',
    code: 'https://github.com/cLubber1337/social-network',
  },
  {
    title: 'Менеджер задач',
    description:
      'Приложение, которое помогает вам управлять своими задачами и организовывать свою работу или личные дела.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'Formik'],
    imageUrl: taskManager,
    site: 'https://clubber1337.github.io/task-manager',
    code: "https://github.com/cLubber1337/task-manager",
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
