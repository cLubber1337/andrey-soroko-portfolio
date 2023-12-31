import { Intro } from '@/components/Intro'
import { SectionDivider } from '@/components/section-divider'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contacts } from '@/components/contacts'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contacts />
      <ThemeSwitcher />
    </main>
  )
}
