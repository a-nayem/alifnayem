import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { projects } from '@/data/content'
import { Background } from '@/components/Background'
import { CustomCursor } from '@/components/CustomCursor'
import '@/styles/project-detail.css'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectDetail,
})

function ProjectDetail() {
  const { slug } = Route.useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="pd-not-found">
        <Background />
        <div className="pd-not-found-inner">
          <span className="pd-not-found-num">404</span>
          <p>Project not found.</p>
          <button onClick={() => navigate({ to: '/' })} className="pd-back-btn">
            ← Back to Portfolio
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      <Background />
      <div className="pd-wrap">
        {/* Top bar */}
        <div className="pd-topbar">
          <button onClick={() => navigate({ to: '/' })} className="pd-back-btn">
            ← Back
          </button>
          <span className="pd-topbar-num">{project.num}</span>
        </div>

        <main className="pd-main">
          {/* Header */}
          <header className="pd-header">
            <div className="pd-header-meta">
              <span className="pd-category-tag">{project.category === 'creative' ? 'Creative / Side Project' : 'Main Project'}</span>
              {project.status && <span className="pd-live-badge">● {project.status}</span>}
              {project.nfc && <span className="pd-nfc-badge">NFC</span>}
            </div>
            <h1 className="pd-title">{project.name}</h1>
            <p className="pd-subtitle">{project.desc}</p>
            <div className="pd-links">
              {project.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="pd-link">
                  {l.label}
                </a>
              ))}
            </div>
          </header>

          <div className="pd-grid">
            {/* Left column */}
            <div className="pd-col-main">

              {/* Full description */}
              <section className="pd-section">
                <div className="pd-section-label">// Overview</div>
                <p className="pd-body">{project.fullDesc}</p>
              </section>

              {/* Challenges */}
              <section className="pd-section">
                <div className="pd-section-label">// Challenges</div>
                <ul className="pd-list">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="pd-list-item">
                      <span className="pd-list-marker">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              {/* What I learned */}
              <section className="pd-section">
                <div className="pd-section-label">// What I Learned</div>
                <ul className="pd-list">
                  {project.learned.map((l, i) => (
                    <li key={i} className="pd-list-item">
                      <span className="pd-list-marker pd-list-marker--green">▸</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right column */}
            <div className="pd-col-side">

              {/* Tech stack */}
              <section className="pd-section pd-section--card">
                <div className="pd-section-label">// Tech Stack</div>
                <div className="pd-stack">
                  {project.stack.map((s) => (
                    <span key={s} className="pd-chip">{s}</span>
                  ))}
                </div>
              </section>

              {/* Timeline */}
              <section className="pd-section pd-section--card">
                <div className="pd-section-label">// Timeline</div>
                <div className="pd-timeline">
                  {project.timeline.map((t, i) => (
                    <div key={i} className="pd-timeline-entry">
                      <div className="pd-timeline-dot" />
                      <div className="pd-timeline-content">
                        <span className="pd-timeline-date">{t.date}</span>
                        <span className="pd-timeline-event">{t.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section className="pd-section pd-section--card">
                <div className="pd-section-label">// Links</div>
                <div className="pd-side-links">
                  {project.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="pd-side-link">
                      <span className="pd-side-link-label">{l.label}</span>
                      <span className="pd-side-link-arrow">→</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Screenshot area */}
          <section className="pd-section pd-screenshots">
            <div className="pd-section-label">// Screenshots</div>
            <div className="pd-screenshots-grid">
              <div className="pd-screenshot-slot">
                <img src={project.thumbnail} alt={`${project.name} preview`} />
              </div>
              <div className="pd-screenshot-slot">
                <span className="pd-screenshot-placeholder">More screenshots coming</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
