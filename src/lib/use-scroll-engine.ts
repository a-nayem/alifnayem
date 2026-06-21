import { useEffect, useSyncExternalStore } from 'react'
import { scrollEngine, type SectionMeta } from './scroll-engine'

export function useScrollEngineInit() {
  useEffect(() => {
    scrollEngine.init()
    return () => scrollEngine.destroy()
  }, [])
}

export function useScrollProgress(): number {
  return useSyncExternalStore(
    scrollEngine.subscribe,
    () => scrollEngine.scrollProgress,
    () => 0,
  )
}

export function useActiveSection(): SectionMeta | null {
  return useSyncExternalStore(
    scrollEngine.subscribe,
    () => scrollEngine.activeSection,
    () => null,
  )
}

export function useRegisterSection(ref: React.RefObject<HTMLElement | null>, meta: SectionMeta) {
  useEffect(() => {
    scrollEngine.registerSection(meta)
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            scrollEngine.setActiveSection(meta.id)
          }
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.id])
}
