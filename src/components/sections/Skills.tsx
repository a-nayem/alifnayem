import { useRef } from 'react'
import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { skillCategories } from '@/data/content'

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'skills', num: '02', label: 'Skills' })
  const grid = useReveal<HTMLDivElement>()

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
