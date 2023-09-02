'use client'
import { SectionHeading } from '@/components/section-heading'
import { projectsData } from '@/lib/data'
import { Project } from '@/components/project'
import { useActiveSectionInView } from '@/lib/hooks'

export const Projects = () => {
  const { ref } = useActiveSectionInView({ name: 'Проекты', threshold: 0.2 })

  return (
    <section ref={ref} id="projects" className="scroll-mt-32 mb-28 sm:mb-0">
      <SectionHeading title="Мои проекты" />
      <div>
        {projectsData.map(project => {
          return <Project {...project} key={project.title} />
        })}
      </div>
    </section>
  )
}
