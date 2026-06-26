import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  r: number
  red: boolean
  alpha: number
  twinkle: number
  twinkleSpeed: number
}

interface Shape {
  type: 'tri' | 'hex' | 'oct'
  cx: number
  cy: number
  size: number
  rot: number
  rotSpeed: number
  floatAmp: number
  floatSpeed: number
  t: number
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    let mouseX = W / 2
    let mouseY = H / 2
    let targetMX = W / 2
    let targetMY = H / 2
    let scrollY = 0

    const onMouseMove = (e: MouseEvent) => {
      targetMX = e.clientX
      targetMY = e.clientY
    }
    const onScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    const N = 220
    const pts: Point[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.18,
      vy: -(Math.random() * 0.35 + 0.05),
      r: Math.random() * 1.6 + 0.4,
      red: Math.random() < 0.09,
      alpha: Math.random() * 0.55 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }))

    function makeShape(type: Shape['type'], cx: number, cy: number, size: number): Shape {
      return {
        type,
        cx,
        cy,
        size,
        rot: 0,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        floatAmp: 12 + Math.random() * 18,
        floatSpeed: 0.003 + Math.random() * 0.004,
        t: Math.random() * Math.PI * 2,
      }
    }

    const shapes: Shape[] = [
      makeShape('tri', W * 0.12, H * 0.22, 28),
      makeShape('hex', W * 0.88, H * 0.18, 22),
      makeShape('oct', W * 0.75, H * 0.55, 18),
      makeShape('tri', W * 0.05, H * 0.65, 20),
      makeShape('hex', W * 0.92, H * 0.78, 16),
      makeShape('oct', W * 0.45, H * 0.08, 14),
      makeShape('tri', W * 0.55, H * 0.88, 19),
      makeShape('hex', W * 0.22, H * 0.82, 17),
    ]

    function drawShape(s: Shape, t: number) {
      if (!ctx) return
      const n = s.type === 'tri' ? 3 : s.type === 'hex' ? 6 : 8
      const y = s.cy + Math.sin(t * s.floatSpeed + s.t) * s.floatAmp
      const px = (mouseX / W - 0.5) * 30 * (s.size / 28)
      const py = (mouseY / H - 0.5) * 20 * (s.size / 28)
      ctx.save()
      ctx.translate(s.cx + px, y + py)
      ctx.rotate(s.rot)
      ctx.beginPath()
      const p2: [number, number][] = []
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2
        const px2 = Math.cos(a) * s.size
        const py2 = Math.sin(a) * s.size
        if (i === 0) ctx.moveTo(px2, py2)
        else ctx.lineTo(px2, py2)
        p2.push([px2, py2])
      }
      ctx.closePath()
      for (let i = 0; i < n; i += 2) {
        ctx.moveTo(p2[i][0], p2[i][1])
        ctx.lineTo(0, 0)
      }
      ctx.strokeStyle = 'rgba(232,0,45,0.22)'
      ctx.lineWidth = 0.8
      ctx.stroke()
      ctx.restore()
      s.rot += s.rotSpeed
      s.t += 0.016
    }

    function drawGrid(t: number) {
      if (!ctx) return
      const LINES = 14
      const horizon = H * 0.72 - scrollY * 0.04
      const vanishX = W / 2 + (mouseX - W / 2) * 0.08
      const speed = (t * 0.4) % 1
      ctx.save()
      for (let i = 0; i <= LINES; i++) {
        const tx = i / LINES
        const bx = tx * W
        const dist = Math.abs(tx - 0.5)
        ctx.beginPath()
        ctx.moveTo(vanishX, horizon)
        ctx.lineTo(bx, H + 60)
        ctx.strokeStyle = `rgba(232,0,45,${0.04 + dist * 0.04})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
      for (let j = 0; j < 10; j++) {
        const frac = (j / 9 + speed) % 1
        const y = horizon + Math.pow(frac, 2.2) * (H + 80 - horizon)
        const xl = vanishX - vanishX * frac
        const xr = vanishX + (W - vanishX) * frac
        ctx.beginPath()
        ctx.moveTo(xl, y)
        ctx.lineTo(xr, y)
        ctx.strokeStyle = `rgba(232,0,45,${frac * 0.09})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
      ctx.restore()
    }

    let t = 0
    let rafId = 0

    function loop() {
      if (!ctx) return
      rafId = requestAnimationFrame(loop)
      t += 0.016
      mouseX += (targetMX - mouseX) * 0.05
      mouseY += (targetMY - mouseY) * 0.05
      ctx.clearRect(0, 0, W, H)
      drawGrid(t)
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 110) * 0.06})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
      const mxOff = (mouseX / W - 0.5) * 12
      const myOff = (mouseY / H - 0.5) * 8
      pts.forEach((p) => {
        p.twinkle += p.twinkleSpeed
        const tw = 0.7 + Math.sin(p.twinkle) * 0.3
        const parallax = p.z * 0.6
        const px = p.x - mxOff * parallax
        const py = p.y - myOff * parallax
        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        if (p.red) {
          ctx.fillStyle = `rgba(232,0,45,${p.alpha * tw})`
          ctx.shadowColor = '#E8002D'
          ctx.shadowBlur = 6
        } else {
          ctx.fillStyle = `rgba(220,225,255,${p.alpha * tw})`
          ctx.shadowBlur = 0
        }
        ctx.fill()
        ctx.shadowBlur = 0
        p.x += p.vx + mxOff * 0.003
        p.y += p.vy
        if (p.y < -10) {
          p.y = H + 5
          p.x = Math.random() * W
        }
        if (p.x < -10) p.x = W + 5
        if (p.x > W + 10) p.x = -5
      })
      shapes.forEach((s) => drawShape(s, t))
    }

    if (reducedMotion) {
      // Render a single static frame instead of animating forever.
      drawGrid(0)
      pts.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.red ? 'rgba(232,0,45,0.4)' : 'rgba(220,225,255,0.3)'
        ctx.fill()
      })
      shapes.forEach((s) => drawShape(s, 0))
    } else {
      loop()
    }

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
      pts.forEach((p) => {
        p.x = Math.random() * W
        p.y = Math.random() * H
      })
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} id="three-bg" className="spectre-bg-canvas" aria-hidden="true" />
}
