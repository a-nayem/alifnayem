import { useRef, useState } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { skillCategories, toolCategories } from '@/data/content'

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'skills', num: '02', label: 'Skills' })
  const grid = useReveal<HTMLDivElement>()
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <section id="skills" ref={ref} className="spectre-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">02 —</span>
          <h2 className="spectre-sec-title">Skills</h2>
          <div className="spectre-sec-line" />
        </div>

        <div ref={grid.ref} className={`spectre-skills-grid spectre-reveal ${grid.visible ? 'is-visible' : ''}`}>
          {skillCategories.map((cat) => (
            <SkillCard key={cat.name} icon={cat.icon} name={cat.name} sub={cat.sub} items={cat.items} />
          ))}
        </div>

        <div className="spectre-tooling-toggle-row">
          <button
            type="button"
            className="spectre-tooling-toggle"
            aria-expanded={toolsOpen}
            onClick={() => setToolsOpen((v) => !v)}
          >
            <span>{toolsOpen ? 'Hide' : 'Show'} Full Tooling Inventory</span>
            <span className={`spectre-tooling-caret ${toolsOpen ? 'is-open' : ''}`} aria-hidden="true">
              ▾
            </span>
          </button>
        </div>

        {toolsOpen && (
          <div className="spectre-tools-grid spectre-tooling-panel">
            {toolCategories.map((cat) => (
              <div
                key={cat.id}
                className="spectre-tool-cat"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
                  e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
                }}
              >
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
        )}
      </div>
    </section>
  )
}

function SkillCard({ icon, name, sub, items }: { icon: string; name: string; sub: string; items: string[] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    card.style.transform = `perspective(600px) rotateX(${(y - 0.5) * -10}deg) rotateY(${(x - 0.5) * 10}deg) translateZ(4px)`
    card.style.setProperty('--mx', `${x * 100}%`)
    card.style.setProperty('--my', `${y * 100}%`)
  }

  function onMouseLeave() {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <div ref={cardRef} className="spectre-skill-cat" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <span className="spectre-skill-cat-icon" aria-hidden="true">
        {icon}
      </span>
      <div className="spectre-skill-cat-name">{name}</div>
      <div className="spectre-skill-cat-sub">{sub}</div>
      <div className="spectre-skill-list">
        {items.map((item) => (
          <div key={item} className="spectre-skill-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
