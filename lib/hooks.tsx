import { useInView } from 'react-intersection-observer'
import { SectionName, useActiveSection } from '@/context/active-section-context'
import { useEffect } from 'react'

type Props = {
  name: SectionName
  threshold: number
}

export const useActiveSectionInView = ({ name, threshold = 0.5 }: Props) => {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, lastClickTime } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(name)
    }
  }, [inView, setActiveSection, lastClickTime, name])

  return { ref }
}
