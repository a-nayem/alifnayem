'use client'
import { useEffect, useRef, useState } from 'react'

interface Line {
  text: string
  type: 'banner' | 'subtitle' | 'sys' | 'elusive' | 'cmd' | 'out' | 'ok' | 'crit' | 'gap' | 'prompt'
  delay: number
  speed?: number
}

// ASCII banner — shown instantly as a block
const BANNER = [
  '███████╗██╗     ██╗   ██╗███████╗██╗██╗   ██╗███████╗',
  '██╔════╝██║     ██║   ██║██╔════╝██║██║   ██║██╔════╝',
  '█████╗  ██║     ██║   ██║███████╗██║██║   ██║█████╗  ',
  '██╔══╝  ██║     ██║   ██║╚════██║██║╚██╗ ██╔╝██╔══╝  ',
  '███████╗███████╗╚██████╔╝███████║██║ ╚████╔╝ ███████╗',
  '╚══════╝╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝  ╚══════╝',
]

const SEQUENCE: Line[] = [
  // Banner — each line appears instantly, staggered
  { type: 'banner',   delay: 100,  text: BANNER[0] },
  { type: 'banner',   delay: 60,   text: BANNER[1] },
  { type: 'banner',   delay: 60,   text: BANNER[2] },
  { type: 'banner',   delay: 60,   text: BANNER[3] },
  { type: 'banner',   delay: 60,   text: BANNER[4] },
  { type: 'banner',   delay: 60,   text: BANNER[5] },
  { type: 'subtitle', delay: 120,  text: 'Executive Local Unified System for Intelligent Versatile Engineering' },
  { type: 'subtitle', delay: 60,   text: 'Powered by Troy  ·  Full PC Control  ·  Zero Cloud' },
  { type: 'gap',      delay: 0,    text: '' },

  // Boot
  { type: 'sys',     delay: 400,  text: '  ELUSIVE — INITIALISING...' },
  { type: 'sys',     delay: 500,  text: '  Neural core online  ·  Memory loaded  ·  Ready', speed: 18 },
  { type: 'gap',     delay: 0,    text: '' },

  // Greeting
  { type: 'elusive', delay: 500,  text: 'ELUSIVE  //  Hello. I\'m ELUSIVE —' },
  { type: 'elusive', delay: 180,  text: '          the intelligence beside the architect.' },
  { type: 'elusive', delay: 260,  text: '          A. Nayem\'s core AI system. I run everything.' },
  { type: 'gap',     delay: 0,    text: '' },
  { type: 'elusive', delay: 360,  text: '          You\'ve reached his portfolio terminal.' },
  { type: 'elusive', delay: 240,  text: '          Want me to pull his full profile? [y/n]' },
  { type: 'gap',     delay: 0,    text: '' },

  // Auto-answer
  { type: 'prompt',  delay: 900,  text: '> y', speed: 120 },
  { type: 'gap',     delay: 0,    text: '' },

  { type: 'elusive', delay: 300,  text: 'ELUSIVE  //  Good choice. Running profile scan...' },
  { type: 'gap',     delay: 0,    text: '' },

  // whoami
  { type: 'cmd',     delay: 380,  text: '$ whoami' },
  { type: 'out',     delay: 140,  text: '  A. Nayem — Cyber Security Engineer · AI Architect · AI Infrastructure' },
  { type: 'out',     delay: 60,   text: '  Founder, Trisien Automence · Building Interspace' },
  { type: 'gap',     delay: 0,    text: '' },

  // skills
  { type: 'cmd',     delay: 320,  text: '$ cat skills.txt' },
  { type: 'ok',      delay: 120,  text: '  Cybersecurity    Nmap · Metasploit · Burp Suite · Shodan · Hydra' },
  { type: 'ok',      delay: 60,   text: '  AI & Agents      LLM Orchestration · RAG · Ollama · n8n' },
  { type: 'ok',      delay: 60,   text: '  Automation       FastAPI · Webhooks · WhatsApp · Discord' },
  { type: 'ok',      delay: 60,   text: '  Development      Python · TypeScript · Next.js · Docker' },
  { type: 'gap',     delay: 0,    text: '' },

  // projects
  { type: 'cmd',     delay: 320,  text: '$ ls projects/' },
  { type: 'out',     delay: 120,  text: '  trisien-automence/      trisien-vault/          trisien-crm/' },
  { type: 'out',     delay: 40,   text: '  mindforge/             second-brain/           elusive-story/' },
  { type: 'out',     delay: 40,   text: '  sketch-the-air/        mood-dice/' },
  { type: 'gap',     delay: 0,    text: '' },

  // tools
  { type: 'cmd',     delay: 320,  text: '$ cat tools.conf' },
  { type: 'crit',    delay: 120,  text: '  [SECURITY]  Metasploit · Burp Suite · Hydra · Nmap · Shodan · Sherlock' },
  { type: 'out',     delay: 60,   text: '  [AI]        Ollama · Anthropic · Gemini · LangChain · Pinecone · Qdrant · Puppeteer' },
  { type: 'out',     delay: 60,   text: '  [DEV]       VS Code · Elusive Terminal · Docker · Git · Postman · Google Stich' },
  { type: 'gap',     delay: 0,    text: '' },

  // Sign off
  { type: 'elusive', delay: 360,  text: 'ELUSIVE  //  Profile delivery complete.' },
  { type: 'elusive', delay: 200,  text: '          He builds AI systems that run themselves.' },
  { type: 'elusive', delay: 200,  text: '          Scroll down to see the proof.', speed: 20 },
  { type: 'gap',     delay: 0,    text: '' },
  { type: 'prompt',  delay: 600,  text: '> _', speed: 0 },
]

const DEFAULT_SPEED = 22
const LOOP_PAUSE = 4000

function useTerminal() {
  const [lines, setLines] = useState<{ text: string; type: string; partial: boolean }[]>([])
  const idxRef = useRef(0)
  const charRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setLines(SEQUENCE.filter(l => l.type !== 'gap').map(l => ({ text: l.text, type: l.type, partial: false })))
      return
    }

    function tick() {
      if (idxRef.current >= SEQUENCE.length) {
        timerRef.current = setTimeout(() => {
          setLines([])
          idxRef.current = 0
          charRef.current = 0
          tick()
        }, LOOP_PAUSE)
        return
      }

      const line = SEQUENCE[idxRef.current]

      if (line.type === 'gap') {
        setLines(prev => [...prev, { text: '', type: 'gap', partial: false }])
        idxRef.current++
        charRef.current = 0
        timerRef.current = setTimeout(tick, 0)
        return
      }

      // banner and subtitle lines appear all at once — just apply the inter-line delay
      if (line.type === 'banner' || line.type === 'subtitle') {
        timerRef.current = setTimeout(() => {
          setLines(prev => [...prev, { text: line.text, type: line.type, partial: false }])
          idxRef.current++
          charRef.current = 0
          tick()
        }, line.delay)
        return
      }

      const speed = line.speed !== undefined ? line.speed : DEFAULT_SPEED

      if (charRef.current === 0) {
        timerRef.current = setTimeout(() => {
          charRef.current = 1
          setLines(prev => [...prev, { text: line.text.slice(0, 1), type: line.type, partial: true }])
          tick()
        }, line.delay)
        return
      }

      if (charRef.current < line.text.length) {
        const next = charRef.current + 1
        timerRef.current = setTimeout(() => {
          charRef.current = next
          setLines(prev => [...prev.slice(0, -1), { text: line.text.slice(0, next), type: line.type, partial: true }])
          tick()
        }, speed)
        return
      }

      setLines(prev => [...prev.slice(0, -1), { text: line.text, type: line.type, partial: false }])
      idxRef.current++
      charRef.current = 0
      tick()
    }

    tick()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return lines
}

export function HeroTerminal() {
  const lines = useTerminal()

  return (
    <div className="hero-terminal" aria-label="ELUSIVE — core AI system" role="region">
      <div className="hero-terminal-bar">
        <span className="hero-terminal-dot" style={{ background: '#FF5F57' }} />
        <span className="hero-terminal-dot" style={{ background: '#FFBD2E' }} />
        <span className="hero-terminal-dot" style={{ background: '#28C840' }} />
        <span className="hero-terminal-title">ELUSIVE  ·  core system</span>
        <span className="hero-terminal-live">● ONLINE</span>
      </div>
      <div className="hero-terminal-body">
        {lines.map((l, i) =>
          l.type === 'gap' ? (
            <div key={i} className="hero-terminal-gap" />
          ) : (
            <div key={i} className={`hero-terminal-line is-${l.type}`}>
              {l.text}
              {l.partial && <span className="hero-terminal-cursor" />}
            </div>
          )
        )}
      </div>
    </div>
  )
}
