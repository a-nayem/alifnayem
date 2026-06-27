import { useRef } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { contactChannels } from '@/data/content'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'contact', num: '06', label: 'Contact' })
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="contact" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">06 —</span>
          <h2 className="spectre-sec-title">Contact</h2>
          <div className="spectre-sec-line" />
        </div>

        <div ref={reveal.ref} className={`spectre-reveal ${reveal.visible ? 'is-visible' : ''}`}>
          <h3 className="spectre-contact-hl">
            Building something
            <br />
            that runs on its own?
          </h3>
          <p className="spectre-contact-sub">That's exactly what I build. Get in touch.</p>

          <div className="spectre-contact-grid">
            {contactChannels.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="spectre-contact-card">
                <div>
                  <div className="spectre-cc-label">{c.label}</div>
                  <div className="spectre-cc-val">{c.value}</div>
                </div>
                <span className="spectre-cc-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
