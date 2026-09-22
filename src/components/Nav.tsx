import { navSections, driver } from '@/data/content'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Nav() {
  return (
    <nav className="spectre-nav">
      <div className="spectre-nav-logo">
        A.<em>NAYEM</em>
      </div>
      <ul className="spectre-nav-links">
        {navSections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(s.id)
              }}
            >
              {s.label}
            </a>
          </li>
        ))}
        <li>
          <a href={`https://github.com/${driver.github}`} target="_blank" rel="noreferrer" className="spectre-nav-github">
            GitHub ↗
          </a>
        </li>
      </ul>
      <div className="spectre-nav-right">
        <div className="spectre-nav-dot" />
        SYSTEMS ONLINE
      </div>
    </nav>
  )
}
