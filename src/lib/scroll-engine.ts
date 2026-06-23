/**
 * Lightweight scroll tracker: scroll progress (for the rail's position
 * dot) and active-section detection (for nav highlighting). No physics —
 * that left with the racing HUD.
 */

export interface SectionMeta {
  id: string
  num: string
  label: string
}

type Listener = () => void

class ScrollEngine {
  private listeners = new Set<Listener>()
  private started = false

  scrollY = 0
  scrollProgress = 0 // 0..1 across full document

  sections: SectionMeta[] = []
  activeSectionId: string | null = null

  init() {
    if (this.started || typeof window === 'undefined') return
    this.started = true
    this.measure()
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('resize', this.measure, { passive: true })
  }

  destroy() {
    if (!this.started) return
    this.started = false
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.measure)
  }

  registerSection(meta: SectionMeta) {
    if (!this.sections.find((s) => s.id === meta.id)) {
      this.sections.push(meta)
    }
  }

  setActiveSection(id: string) {
    if (this.activeSectionId === id) return
    this.activeSectionId = id
    this.notify()
  }

  get activeSection(): SectionMeta | null {
    return this.sections.find((s) => s.id === this.activeSectionId) ?? null
  }

  private measure = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    this.scrollY = window.scrollY
    this.scrollProgress = max > 0 ? Math.min(1, Math.max(0, this.scrollY / max)) : 0
    this.notify()
  }

  private onScroll = () => {
    this.measure()
  }

  subscribe = (listener: Listener) => {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private notify() {
    this.listeners.forEach((l) => l())
  }
}

export const scrollEngine = new ScrollEngine()
