import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { projects, type StatusLabel } from '@/data/content'

function statusClass(label: StatusLabel) {
  switch (label) {
    case 'Production': return 'spectre-live-badge--production'
    case 'Live Demo': return 'spectre-live-badge--live-demo'
    case 'Prototype': return 'spectre-live-badge--prototype'
    case 'Internal Test': return 'spectre-live-badge--internal-test'
    case 'Personal R&D': return 'spectre-live-badge--personal-rd'
  }
}

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'projects', num: '03', label: 'Projects' })
  const revealMain = useReveal<HTMLDivElement>()
  const revealCreative = useReveal<HTMLDivElement>()

  const mainProjects = projects.filter(p => p.category === 'main')
  const creativeProjects = projects.filter(p => p.category === 'creative')

  return (
    <section id="projects" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">03 —</span>
          <h2 className="spectre-sec-title">Projects</h2>
          <div className="spectre-sec-line" />
        </div>

        {/* Main Projects */}
        <div className="spectre-projects-category-label">Main Projects</div>
        <div ref={revealMain.ref} className={`spectre-projects-grid spectre-reveal ${revealMain.visible ? 'is-visible' : ''}`}>
          {mainProjects.map((p) => (
            <Link key={p.num} to="/projects/$slug" params={{ slug: p.slug }} className="spectre-project-card-link">
            <article className="spectre-project-card">
              {/* Shimmer layer */}
              <div className="spectre-card-shimmer" />
              <div className="spectre-card-inner">
              {/* Thumbnail */}
              <div className="spectre-card-thumb">
                <img src={p.thumbnail} alt={p.name} />
                <span className="spectre-card-thumb-num">{p.num}</span>
              </div>

              <div className="spectre-card-body">
                <div className="spectre-pi-header">
                  <div className="spectre-pi-name">{p.name}</div>
                  <span className={`spectre-live-badge ${statusClass(p.statusLabel)}`}>● {p.statusLabel}</span>
                </div>

                <p className="spectre-pi-desc">{p.desc}</p>

                <div className="spectre-pi-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="spectre-chip">{s}</span>
                  ))}
                </div>

                <div className="spectre-pi-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="spectre-plink" onClick={e => e.stopPropagation()}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              </div>
            </article>
          </Link>
          ))}
        </div>

        {/* Creative / Side Projects */}
        <div className="spectre-projects-category-label spectre-projects-category-label--creative">
          Creative &amp; Side Projects
          <span className="spectre-nfc-note">✦ Delivered as NFC-tagged physical cards</span>
        </div>
        <div ref={revealCreative.ref} className={`spectre-projects-grid spectre-projects-grid--creative spectre-reveal ${revealCreative.visible ? 'is-visible' : ''}`}>
          {creativeProjects.map((p) => (
            <Link key={p.num} to="/projects/$slug" params={{ slug: p.slug }} className="spectre-project-card-link">
            <article className="spectre-project-card spectre-project-card--creative">
              <div className="spectre-card-shimmer" />
              <div className="spectre-card-inner">
              <div className="spectre-card-thumb spectre-card-thumb--creative">
                <img src={p.thumbnail} alt={p.name} />
                <span className="spectre-card-thumb-num">{p.num}</span>
                {p.nfc && <span className="spectre-nfc-tag">NFC</span>}
              </div>

              <div className="spectre-card-body">
                <div className="spectre-pi-header">
                  <div className="spectre-pi-name">{p.name}</div>
                  <span className={`spectre-live-badge ${statusClass(p.statusLabel)}`}>● {p.statusLabel}</span>
                </div>

                <p className="spectre-pi-desc">{p.desc}</p>

                <div className="spectre-pi-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="spectre-chip">{s}</span>
                  ))}
                </div>

                <div className="spectre-pi-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="spectre-plink" onClick={e => e.stopPropagation()}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
