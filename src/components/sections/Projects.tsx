import { useRef } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { projects } from '@/data/content'

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'projects', num: '03', label: 'Projects' })
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="projects" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">03 —</span>
          <h2 className="spectre-sec-title">Projects</h2>
          <div className="spectre-sec-line" />
        </div>

        <div ref={reveal.ref} className={`spectre-projects-scroll spectre-reveal ${reveal.visible ? 'is-visible' : ''}`}>
          {projects.map((p) => (
            <article key={p.num} className="spectre-project-card">
              <div className="spectre-pi-num">{p.num}</div>
              <div className="spectre-pi-name">{p.name}</div>
              <p className="spectre-pi-desc">{p.desc}</p>
              <div className="spectre-pi-stack">
                {p.stack.map((s) => (
                  <span key={s} className="spectre-chip">
                    {s}
                  </span>
                ))}
              </div>
              <div className="spectre-pi-meta">
                {p.status && <span className="spectre-live-badge">● {p.status}</span>}
                <div className="spectre-pi-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="spectre-plink">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
