import { useRef } from 'react'
import { useScrollProgress, useActiveSection } from '@/lib/use-scroll-engine'
import { useEffect } from 'react'
import { navSections } from '@/data/content'

const VB_H = 1000
const NODE_Y = [40, 270, 500, 730, 960] // evenly spaced, matches navSections order

const SPINE_PATH = `
  M 70 40
  C 30 109, 110 200, 70 270
  C 30 339, 110 430, 70 500
  C 30 569, 110 660, 70 730
  C 30 799, 110 890, 70 960
`

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function SpiralRail() {
  const dotRef = useRef<SVGCircleElement>(null)
  const active = useActiveSection()
  const progress = useScrollProgress()

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.offsetDistance = `${progress * 100}%`
    }
  }, [progress])

  return (
    <nav className="spectre-spiral-rail" aria-label="Section navigation">
      <svg className="spectre-spiral-svg" viewBox={`0 0 140 ${VB_H}`} preserveAspectRatio="none">
        <path className="spectre-spiral-spine" d={SPINE_PATH} />
        <circle
          ref={dotRef}
          className="spectre-spiral-dot"
          r="4"
          style={{ offsetPath: `path('${SPINE_PATH}')` }}
        />
        {navSections.map((s, i) => (
          <circle
            key={s.id}
            className={`spectre-spiral-node ${active?.id === s.id ? 'is-active' : ''}`}
            cx="70"
            cy={NODE_Y[i]}
            r={active?.id === s.id ? 7 : 5}
          />
        ))}
      </svg>

      <div className="spectre-spiral-tags">
        {navSections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`spectre-spiral-tag ${active?.id === s.id ? 'is-active' : ''}`}
            style={{ top: `${(NODE_Y[i] / VB_H) * 100}%` }}
            onClick={() => scrollToSection(s.id)}
          >
            <span className="spectre-spiral-tag-num">{s.num} —</span>
            <span className="spectre-spiral-tag-label">{s.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
