import { useRegisterSection } from '@/lib/use-scroll-engine'
import { useReveal } from '@/lib/use-reveal'
import { useRef } from 'react'

const CANVAS_W = 1400
const CANVAS_H = 820
const CH = 220 // card height estimate for port calculation

interface FlowModule {
  id: string
  label: string
  status: string
  color: string
  x: number
  y: number
  w: number
  rotate: number
  stack: string
  bigVal: string
  bigLabel: string
  rows: { k: string; v: string }[]
}

const modules: FlowModule[] = [
  {
    id: 'booking', label: 'Booking Agent', status: 'LIVE 24/7', color: '#00C8FF',
    x: 12, y: 40, w: 290, rotate: -2,
    stack: 'n8n · Google Cal · Gmail',
    bigVal: '6', bigLabel: 'Meetings Today — Zero Input',
    rows: [
      { k: 'Last booked', v: 'Priya — 2:30 PM' },
      { k: 'Cal synced', v: '✓ Google Cal' },
      { k: 'CRM', v: '✓ NocoDB' },
    ],
  },
  {
    id: 'lead', label: 'Lead Intelligence', status: 'RUNNING', color: '#8B5CF6',
    x: 358, y: 18, w: 310, rotate: 1.5,
    stack: 'n8n · Gemini · NocoDB',
    bigVal: '87', bigLabel: 'Lead Score — Strong',
    rows: [
      { k: 'Market tier', v: 'Priority — Base 5.0' },
      { k: 'Pipeline time', v: '23s' },
      { k: 'Manual touches', v: '0' },
    ],
  },
  {
    id: 'notif', label: 'Notif Hub', status: 'ALERT', color: '#E8002D',
    x: 726, y: 52, w: 284, rotate: -1,
    stack: 'n8n · Gemini · Twilio · Discord',
    bigVal: '12', bigLabel: 'Routed Today',
    rows: [
      { k: 'Last routed', v: 'Priya — #Discord-sales' },
      { k: 'Channels live', v: 'Discord · SMS · Email' },
    ],
  },
  {
    id: 'rag', label: 'RAG Knowledge Bot', status: 'ACTIVE', color: '#EAB308',
    x: 1066, y: 22, w: 304, rotate: 2,
    stack: 'n8n · Pinecone · Gemini',
    bigVal: '38', bigLabel: 'Queries Resolved Today',
    rows: [
      { k: 'Last query', v: 'Visa eligibility' },
      { k: 'Accuracy', v: '97%' },
      { k: 'Source', v: 'Pinecone · Gemini' },
    ],
  },
  {
    id: 'linkedin', label: 'LinkedIn Scraper', status: 'RUNNING', color: '#3B82F6',
    x: 34, y: 488, w: 298, rotate: 2,
    stack: 'n8n · Apollo.io · Sheets',
    bigVal: '47', bigLabel: 'Profiles Enriched',
    rows: [
      { k: 'Via', v: 'Apollo.io' },
      { k: 'Sheets', v: '✓ Auto sync' },
      { k: 'Pipeline nodes', v: '56' },
    ],
  },
  {
    id: 'doc', label: 'Document Intel', status: 'LIVE', color: '#10B981',
    x: 388, y: 474, w: 294, rotate: -1.5,
    stack: 'n8n · Gemini · WhatsApp',
    bigVal: '12', bigLabel: 'Docs Processed',
    rows: [
      { k: 'Alerts sent', v: '✓ WhatsApp' },
      { k: 'Time saved', v: '~80% per doc' },
    ],
  },
  {
    id: 'meeting', label: 'Meeting Intel Agent', status: 'ACTIVE', color: '#F97316',
    x: 736, y: 482, w: 298, rotate: 1,
    stack: 'n8n · OpenAI · Google Cal',
    bigVal: '8', bigLabel: 'Transcripts Processed',
    rows: [
      { k: 'Action items', v: '✓ Auto extract' },
      { k: 'Follow-ups', v: 'Automated' },
    ],
  },
  {
    id: 'llm', label: 'LLM Chaining Engine', status: 'LIVE', color: '#EC4899',
    x: 1078, y: 478, w: 284, rotate: -2,
    stack: 'n8n · Anthropic · Webhook',
    bigVal: '5', bigLabel: 'Active Chains',
    rows: [
      { k: 'Memory', v: 'Persistent' },
      { k: 'Latency', v: '<1s avg' },
    ],
  },
]

// Connection: from right-center of source → left-center of target
// For same-row backward: from bottom-center → top-center
const connections: { from: string; to: string; dotted?: boolean }[] = [
  { from: 'linkedin', to: 'lead' },
  { from: 'lead', to: 'booking', dotted: true },
  { from: 'lead', to: 'notif' },
  { from: 'booking', to: 'notif', dotted: true },
  { from: 'doc', to: 'notif' },
  { from: 'notif', to: 'llm' },
  { from: 'meeting', to: 'llm' },
  { from: 'rag', to: 'llm', dotted: true },
]

function buildPath(src: FlowModule, tgt: FlowModule): string {
  const sx = src.x + src.w
  const sy = src.y + CH / 2
  const tx = tgt.x
  const ty = tgt.y + CH / 2

  // If source is right of target, route via bottom arcs
  if (sx > tx + 40) {
    const midY = Math.max(src.y + CH + 30, tgt.y + CH + 30)
    return (
      `M ${sx} ${sy} ` +
      `C ${sx + 30} ${sy} ${sx + 30} ${midY} ${(sx + tx) / 2} ${midY} ` +
      `S ${tx - 30} ${ty} ${tx} ${ty}`
    )
  }

  const cp = Math.abs(tx - sx) * 0.55
  return `M ${sx} ${sy} C ${sx + cp} ${sy} ${tx - cp} ${ty} ${tx} ${ty}`
}

function PortDot({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="7" fill={color} opacity="0.18" />
      <circle cx={x} cy={y} r="4.5" fill={color} stroke="rgba(0,0,0,0.7)" strokeWidth="1.5"
        style={{ filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color})` }} />
      <circle cx={x} cy={y} r="2" fill="white" opacity="0.9" />
    </g>
  )
}

export function SpectreFlowCanvas() {
  const ref = useRef<HTMLElement>(null)
  useRegisterSection(ref, { id: 'flow', num: '00', label: 'Live Infra' })
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section id="flow" ref={ref} className="spectre-section spectre-flow-section">
      <div className="spectre-container">
        <div className="spectre-sec-label">
          <span className="spectre-sec-num">00 —</span>
          <h2 className="spectre-sec-title">Live Infrastructure</h2>
          <div className="spectre-sec-line" />
        </div>
        <p className="spectre-flow-intro">
          8 autonomous agents running in production — self-scheduling, self-routing,
          and self-recovering. Zero human input required.
        </p>
      </div>

      <div className="spectre-flow-wrap">
        <div
          ref={reveal.ref}
          className={`spectre-flow-canvas spectre-reveal ${reveal.visible ? 'is-visible' : ''}`}
          style={{ width: CANVAS_W, height: CANVAS_H }}
        >
          {/* SVG connector layer */}
          <svg
            className="spectre-flow-svg"
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            width={CANVAS_W}
            height={CANVAS_H}
          >
            <defs>
              <filter id="line-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connections.map(({ from, to, dotted }) => {
              const src = modules.find(m => m.id === from)!
              const tgt = modules.find(m => m.id === to)!
              const path = buildPath(src, tgt)

              // Port positions
              const sx = src.x + src.w
              const sy = src.y + CH / 2
              const tx = tgt.x
              const ty = tgt.y + CH / 2

              // For backward arcs use bottom ports
              const isBwd = sx > tx + 40

              return (
                <g key={`${from}-${to}`}>
                  {/* Shadow/depth layer — thick, very faint */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="4"
                  />
                  {/* Main bright white line */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(255,255,255,0.92)"
                    strokeWidth="1.8"
                    strokeDasharray={dotted ? '7 5' : 'none'}
                    className={dotted ? 'spectre-flow-line-anim' : ''}
                  />
                  {/* Glow layer on top */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="4"
                    strokeDasharray={dotted ? '7 5' : 'none'}
                    filter="url(#line-glow)"
                    className={dotted ? 'spectre-flow-line-anim' : ''}
                  />
                  {!isBwd && (
                    <>
                      <PortDot x={sx} y={sy} color={src.color} />
                      <PortDot x={tx} y={ty} color={tgt.color} />
                    </>
                  )}
                </g>
              )
            })}
          </svg>

          {/* Agent cards */}
          {modules.map(mod => (
            <div
              key={mod.id}
              className="spectre-flow-card"
              style={{
                left: mod.x,
                top: mod.y,
                width: mod.w,
                transform: `rotate(${mod.rotate}deg)`,
                '--fc': mod.color,
              } as React.CSSProperties}
            >
              <div className="spectre-fc-header">
                <div className="spectre-fc-title-row">
                  <span className="spectre-fc-dot" />
                  <span className="spectre-fc-label">{mod.label}</span>
                </div>
                <span className="spectre-fc-status">{mod.status}</span>
              </div>
              <div className="spectre-fc-big">{mod.bigVal}</div>
              <div className="spectre-fc-big-label">{mod.bigLabel}</div>
              <div className="spectre-fc-rows">
                {mod.rows.map(r => (
                  <div key={r.k} className="spectre-fc-row">
                    <span className="spectre-fc-row-k">{r.k}</span>
                    <span className="spectre-fc-row-v">{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="spectre-fc-stack">{mod.stack}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
