import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return
    let cx = 0
    let cy = 0
    let rx = 0
    let ry = 0
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      cx = e.clientX
      cy = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    function animate() {
      rafId = requestAnimationFrame(animate)
      rx += (cx - rx) * 0.12
      ry += (cy - ry) * 0.12
      if (dotRef.current) {
        dotRef.current.style.left = `${cx}px`
        dotRef.current.style.top = `${cy}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} id="cursor" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  )
}
