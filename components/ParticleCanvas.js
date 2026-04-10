import { useEffect, useRef } from "react"

const ParticleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const isMobile = w < 768
    const PARTICLE_COUNT = isMobile ? 30 : 70
    const CONNECTION_DIST = isMobile ? 100 : 150
    const particles = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      })
    }

    let mouse = { x: -1000, y: -1000 }
    const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    if (!isMobile) window.addEventListener("mousemove", onMouse)

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0,200,255,0.5)"
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,200,255,${0.12 * (1 - dist / CONNECTION_DIST)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        if (!isMobile) {
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < 200) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(0,200,255,${0.2 * (1 - mdist / 200)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      if (!isMobile) window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" />
}

export default ParticleCanvas
