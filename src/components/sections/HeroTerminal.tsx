'use client'
import { useEffect, useRef, useState } from 'react'

interface Line {
  text: string
  type: 'cmd' | 'out' | 'warn' | 'crit' | 'ok' | 'gap'
  delay: number
  speed?: number
}

const SEQUENCE: Line[] = [
  { type: 'cmd',  delay: 400,  text: '$ nmap -sV -T4 -p 22,80,443,8080 192.168.1.0/24' },
  { type: 'out',  delay: 200,  text: '  Starting Nmap 7.94 ( https://nmap.org )' },
  { type: 'out',  delay: 80,   text: '  Scanning 256 hosts  [4 ports each]' },
  { type: 'gap',  delay: 0,    text: '' },
  { type: 'out',  delay: 600,  text: '  Host: 192.168.1.14   Status: Up' },
  { type: 'ok',   delay: 80,   text: '  22/tcp   open   OpenSSH 7.4' },
  { type: 'warn', delay: 80,   text: '  80/tcp   open   Apache 2.2.34  ← EOL' },
  { type: 'crit', delay: 80,   text: '  8080/tcp open   Tomcat 6.0.53  ← CRITICAL' },
  { type: 'gap',  delay: 0,    text: '' },
  { type: 'cmd',  delay: 340,  text: '$ shodan host 192.168.1.14' },
  { type: 'out',  delay: 200,  text: '  Organization:  ████████ Corp' },
  { type: 'crit', delay: 80,   text: '  Vulns:  CVE-2017-12617  CVE-2020-1938' },
  { type: 'warn', delay: 80,   text: '  Ports:  22, 80, 8080, 8443' },
  { type: 'gap',  delay: 0,    text: '' },
  { type: 'cmd',  delay: 340,  text: '$ msfconsole -q -x "use exploit/multi/handler"' },
  { type: 'out',  delay: 180,  text: '  [*] Using configured payload generic/shell_reverse_tcp' },
  { type: 'warn', delay: 120,  text: '  [*] Setting LHOST 192.168.1.99 · LPORT 4444' },
  { type: 'out',  delay: 600,  text: '  [*] Started reverse TCP handler...' },
  { type: 'crit', delay: 900,  text: '  [+] Command shell session 1 opened ✓', speed: 22 },
  { type: 'gap',  delay: 0,    text: '' },
  { type: 'ok',   delay: 300,  text: '  Scope: authorised engagement  |  report pending', speed: 20 },
  { type: 'gap',  delay: 0,    text: '' },
  { type: 'cmd',  delay: 600,  text: '$ _', speed: 0 },
]

const DEFAULT_SPEED = 26
const LOOP_PAUSE = 3500

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
        timerRef.current = setTimeout(tick, line.delay || 0)
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
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: 'nearest' })
  }, [lines])

  return (
    <div className="hero-terminal" aria-label="Cybersecurity pentest demo" role="region">
      <div className="hero-terminal-bar">
        <span className="hero-terminal-dot" style={{ background: '#FF5F57' }} />
        <span className="hero-terminal-dot" style={{ background: '#FFBD2E' }} />
        <span className="hero-terminal-dot" style={{ background: '#28C840' }} />
        <span className="hero-terminal-title">kali@spectre  ~  pentest</span>
        <span className="hero-terminal-live">● LIVE</span>
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
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
