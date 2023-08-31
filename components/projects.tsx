import { SectionHeading } from '@/components/section-heading'
import { projectsData } from '@/lib/data'
import { Project } from '@/components/project'

export const Projects = () => {
  return (
    <section className="">
      <SectionHeading title="Мои проекты" />
      <div>
        {projectsData.map(project => {
          return <Project {...project} key={project.title} />
        })}
      </div>
    </section>
  )
}
