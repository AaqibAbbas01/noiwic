import Services from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import AIAgents from "@/components/AIAgents"
import Testimonial from "@/components/Testimonial"
import TechTicker from "@/components/TechTicker"
import { useEffect, useRef, useCallback } from "react"

const statsData = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Successful Projects" },
  { value: 5, suffix: "", label: "Live SaaS Products" },
  { value: 12, suffix: "+", label: "Countries Served" },
]

const phoneNumber = '9818404363'
const message = encodeURIComponent("Hi, I'd like to discuss a project with NOIWIC IT Solutions.")

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null)
  const counted = useRef(false)

  const startCount = useCallback(() => {
    if (counted.current || !ref.current) return
    counted.current = true
    const el = ref.current
    const duration = 2000
    const start = performance.now()
    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(eased * value) + suffix
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [value, suffix])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startCount() },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startCount])

  return (
    <div className="stat-item">
      <span className="stat-number" ref={ref}>0{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/15428477_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="hero-eyebrow fade-in-up">NOIWIC IT Solutions — Since 2014</p>

          <div className="hero-headline">
            <span className="line line-white fade-in-up stagger-1">WE BUILD</span>
            <span className="line line-outline fade-in-up stagger-2">DIGITAL</span>
            <span className="line line-gold fade-in-up stagger-3">FUTURES.</span>
          </div>

          <p className="hero-subtext fade-in-up stagger-4">
            The last digital agency you&apos;ll ever need. We architect high-performance
            digital ecosystems — from AI-powered automation and SaaS platforms to
            e-commerce, branding, and full-stack product development across the globe.
          </p>

          <div className="hero-ctas fade-in-up stagger-5">
            <a href="#showcase">
              <button className="button-primary">View Our Work</button>
            </a>
            <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
              <button className="button-ghost">Start a Project</button>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line" />
          <div className="scroll-dot" />
        </div>
      </section>

      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, i) => (
              <StatCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      <section id="showcase">
        <ShowCase />
      </section>
      <section id="ai-agents">
        <AIAgents />
      </section>
      <TechTicker />
      <Testimonial />
    </>
  )
}

export default Hero
