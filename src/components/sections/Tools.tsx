import { useRef } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { toolCategories } from '@/data/content'

export function Tools() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'tools', num: '05', label: 'Tools' })
  const grid = useReveal<HTMLDivElement>()

  return (
    <section id="tools" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">05 —</span>
          <h2 className="spectre-sec-title">Tools</h2>
          <div className="spectre-sec-line" />
        </div>

        <div ref={grid.ref} className={`spectre-tools-grid spectre-reveal ${grid.visible ? 'is-visible' : ''}`}>
          {toolCategories.map((cat) => (
            <div key={cat.id} className="spectre-tool-cat">
              <div className="spectre-tool-cat-name">{cat.label}</div>
              <div className="spectre-tool-cat-sub">{cat.sub}</div>
              <div className="spectre-tool-list">
                {cat.tools.map((tool) => (
                  <span key={tool} className="spectre-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
