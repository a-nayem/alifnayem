import { useRef } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { aboutCopy, aboutQuote, focusBars, driverProfile } from '@/data/content'

export function About() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'about', num: '01', label: 'About' })
  const text = useReveal<HTMLDivElement>()
  const panel = useReveal<HTMLDivElement>()

  return (
    <section id="about" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">01 —</span>
          <h2 className="spectre-sec-title">About</h2>
          <div className="spectre-sec-line" />
        </div>

        <div className="spectre-about-grid">
          <div ref={text.ref} className={`spectre-reveal ${text.visible ? 'is-visible' : ''}`}>
            {aboutCopy.map((p, i) => (
              <p key={i} className="spectre-about-p">
                {p}
              </p>
            ))}
            <blockquote className="spectre-about-quote">{aboutQuote}</blockquote>

            <div className="spectre-focus-bars">
              {focusBars.map((f) => (
                <FocusBar key={f.name} name={f.name} pct={f.pct} />
              ))}
            </div>
          </div>

          <div ref={panel.ref} className={`spectre-reveal ${panel.visible ? 'is-visible' : ''}`}>
            <div className="spectre-data-panel">
              <div className="spectre-data-panel-inner">
              <div className="spectre-data-panel-hdr">
                <span>Driver Profile // AN_0001</span>
                <span className="spectre-data-status">● ACTIVE</span>
              </div>
              <div className="spectre-data-rows">
                {driverProfile.map((row) => (
                  <div key={row.k} className="spectre-data-row">
                    <span className="spectre-dr-k">{row.k}</span>
                    <span className={`spectre-dr-v ${row.tone ? `is-${row.tone}` : ''}`}>{row.v}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FocusBar({ name, pct }: { name: string; pct: number }) {
  const reveal = useReveal<HTMLDivElement>()
  return (
    <div ref={reveal.ref} className="spectre-focus-item">
      <div className="spectre-focus-head">
        <span className="spectre-focus-name">{name}</span>
        <span className="spectre-focus-pct">{pct}%</span>
      </div>
      <div className="spectre-bar-track">
        <div className="spectre-bar-fill" style={{ width: reveal.visible ? `${pct}%` : '0%' }} />
      </div>
    </div>
  )
}
