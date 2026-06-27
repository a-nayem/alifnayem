import { useScrollProgress } from '@/lib/use-scroll-engine'

export function ScrollProgressBar() {
  const progress = useScrollProgress()
  return <div id="scroll-progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
}
