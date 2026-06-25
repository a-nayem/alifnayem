import { useRef } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { techStackModules, skillUsage } from '@/data/content'

export function TechStack() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'tech-stack', num: '04', label: 'Tech Stack' })
  const grid = useReveal<HTMLDivElement>()
  const usage = useReveal<HTMLDivElement>()

  return (
    <section id="tech-stack" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">04 —</span>
          <h2 className="spectre-sec-title">Tech Stack</h2>
          <div className="spectre-sec-line" />
        </div>

        <div ref={grid.ref} className={`spectre-stack-grid spectre-reveal ${grid.visible ? 'is-visible' : ''}`}>
          {techStackModules.map((mod) => (
            <div key={mod.id} className="spectre-stack-module">
              <div className="spectre-stack-module-label">{mod.label}</div>
              <div className="spectre-stack-module-tools">
                {mod.tools.map((tool) => (
                  <span key={tool} className="spectre-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={usage.ref} className={`spectre-usage spectre-reveal ${usage.visible ? 'is-visible' : ''}`}>
          {skillUsage.map((s) => (
            <div key={s.name} className="spectre-focus-item">
              <div className="spectre-focus-head">
                <span className="spectre-focus-name">{s.name}</span>
                <span className="spectre-focus-pct">{s.pct}%</span>
              </div>
              <div className="spectre-bar-track">
                <div className="spectre-bar-fill" style={{ width: usage.visible ? `${s.pct}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
