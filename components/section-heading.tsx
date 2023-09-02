import s from './SectionsHeading.module.scss'

interface SectionHeadingProps {
  title: string
}

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
}
