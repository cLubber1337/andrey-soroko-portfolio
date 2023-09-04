import { useInView } from 'react-intersection-observer'
import { SectionName, useActiveSection } from '@/providers/active-section-provider'
import { useEffect } from 'react'

type useActiveSectionInViewProps = {
  name: SectionName
  threshold?: number
}

export const useActiveSectionInView = ({ name, threshold = 0.5 }: useActiveSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, lastClickTime } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(name)
    }
  }, [inView, setActiveSection, lastClickTime, name])

  return { ref }
}
