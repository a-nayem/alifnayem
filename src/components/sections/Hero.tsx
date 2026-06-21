import { driver, heroStats } from '@/data/content'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section id="hero" className="spectre-hero">
      <div className="spectre-hero-inner">
        <div className="spectre-hero-content">
          <div className="spectre-hero-eyebrow">{driver.role}</div>
          <h1 className="spectre-hero-name">
            <div className="spectre-glitch-text">A.</div>
            <div className="spectre-outline spectre-glitch-text">NAYEM</div>
          </h1>
          <div className="spectre-hero-pos">
            Founder — <em>Spectre Flow</em>
          </div>
          <p className="spectre-hero-bio">{driver.bio}</p>
          <div className="spectre-hero-cta">
            <a
              href="#projects"
              className="spectre-btn spectre-btn-red"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="spectre-btn"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="spectre-hero-stats">
          {heroStats.map((s) => (
            <div key={s.label} className="spectre-stat-row">
              <div className="spectre-stat-label">{s.label}</div>
              <div className={`spectre-stat-val ${s.alert ? 'is-alert' : ''} ${s.value.length > 8 ? 'is-small' : ''}`}>
                {s.value}
                {s.suffix && <sub>{s.suffix}</sub>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="spectre-scroll-hint">
        <div className="spectre-scroll-bar" />
        Scroll
      </div>
    </section>
  )
}
