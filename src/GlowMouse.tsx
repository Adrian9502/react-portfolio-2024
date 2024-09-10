'use client'

import { useEffect, useRef } from 'react';

function GlowMouse() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      ref.current!.style.background = `radial-gradient(800px at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 50%)`
    }
    if (ref.current) {
      window.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
      ref={ref}
    />
  )
}

export { GlowMouse }