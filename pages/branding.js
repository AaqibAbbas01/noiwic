import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in branding and identity services from NOIWIC.")

const serviceItems = [
  {
    icon: "✏️",
    title: "Logo Design",
    desc: "Distinctive, memorable logos crafted through research-driven design — delivered as scalable vector files with full usage guidelines for print and digital.",
    features: ["3+ concept directions", "Unlimited revisions", "Scalable vector files (SVG/AI)", "Light & dark variants"],
  },
  {
    icon: "🧭",
    title: "Brand Strategy",
    desc: "Deep-dive into your market positioning, audience personas, competitive landscape, and value proposition to define a brand strategy that differentiates.",
    features: ["Market & competitor analysis", "Audience persona mapping", "Brand positioning framework", "Messaging hierarchy"],
  },
  {
    icon: "🎨",
    title: "Visual Identity Systems",
    desc: "Complete visual language including color palettes, typography systems, iconography, illustration style, and photography direction — all cohesive and scalable.",
    features: ["Color palette & theory", "Typography system", "Custom iconography", "Photography direction"],
  },
  {
    icon: "📖",
    title: "Brand Guidelines",
    desc: "Comprehensive brand books documenting every element of your identity with clear rules, examples, and do/don't guides for consistent application.",
    features: ["50+ page brand book", "Digital & print rules", "Tone of voice guide", "Template library"],
  },
  {
    icon: "📦",
    title: "Packaging & Print Design",
    desc: "Product packaging, business cards, letterheads, brochures, and merchandise design that translates your digital brand into tangible experiences.",
    features: ["Product packaging", "Business stationery", "Brochures & flyers", "Merchandise design"],
  },
  {
    icon: "🎬",
    title: "Motion Graphics & Animation",
    desc: "Animated logos, brand intros, social media motion content, and explainer video templates that bring your brand identity to life on screen.",
    features: ["Animated logo reveals", "Social media animations", "Explainer video templates", "Lottie web animations"],
  },
]

const techStack = [
  "Figma", "Adobe Illustrator", "Photoshop", "After Effects",
  "InDesign", "Blender", "Canva", "Lottie", "Procreate",
  "Sketch", "Principle", "Cinema 4D",
]

const processSteps = [
  { number: "01", title: "Brand Discovery", desc: "Workshops, questionnaires, and stakeholder interviews to understand your vision, audience, values, and market position deeply." },
  { number: "02", title: "Concept & Moodboards", desc: "Multiple creative directions presented as moodboards with color explorations, type pairings, and visual references for collaborative review." },
  { number: "03", title: "Design & Refinement", desc: "Chosen concept developed into a complete identity system with iterative feedback rounds until every element feels exactly right." },
  { number: "04", title: "Brand Delivery", desc: "Final assets packaged with a comprehensive brand guidelines document, file library, templates, and a training session for your team." },
]

const whyUs = [
  { icon: "🏆", title: "Award-Quality Design", desc: "Our designers bring 10+ years of experience crafting identities for startups, enterprises, and global brands." },
  { icon: "🔬", title: "Research-Driven", desc: "Every design decision is rooted in market research, audience psychology, and competitive positioning." },
  { icon: "♾️", title: "Unlimited Revisions", desc: "We iterate until you're 100% satisfied — no revision caps, no hidden fees." },
  { icon: "📐", title: "System Thinking", desc: "We don't just design logos — we build scalable identity systems that grow with your brand." },
]

const statsData = [
  { value: 150, suffix: "+", label: "Brands Created" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Industries Covered" },
  { value: 10, suffix: "+", label: "Years of Experience" },
]

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
    <div className="svc-stat-item">
      <span className="svc-stat-number" ref={ref}>0{suffix}</span>
      <span className="svc-stat-label">{label}</span>
    </div>
  )
}

const Branding = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Branding & Identity — NOIWIC IT Solutions</title>
        <meta name="description" content="Complete brand identity design — logos, visual systems, brand guidelines, packaging, and motion graphics. We craft brands that stand out and scale." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/7598768-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">Branding & Identity</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">Brands That</span>
            <span className="line-gold fade-in-up stagger-2">Leave a Mark</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            We craft distinctive brand identities that capture your essence, resonate with your audience,
            and scale across every touchpoint — from a logo to a complete visual language system.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Start Your Brand</button>
            </a>
            <a href="#services">
              <button className="button-ghost">Explore Services</button>
            </a>
          </div>
        </div>
      </section>

      <section className="svc-detail-stats">
        <div className="container">
          <div className="svc-stats-grid">
            {statsData.map((stat, i) => <StatCounter key={i} {...stat} />)}
          </div>
        </div>
      </section>

      <section className="svc-detail-services" id="services">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">What We Create</span>
            <Title title="Branding Services" />
            <p>From initial strategy to final delivery, we build complete brand identity systems that differentiate you in any market.</p>
          </div>
          <div className="svc-services-grid">
            {serviceItems.map((svc, i) => (
              <div className={`svc-card fade-in-up stagger-${(i % 6) + 1}`} key={i}>
                <div className="bracket-tl" />
                <div className="bracket-br" />
                <span className="svc-card-icon">{svc.icon}</span>
                <h3 className="svc-card-title">{svc.title}</h3>
                <p className="svc-card-desc">{svc.desc}</p>
                <ul className="svc-card-features">
                  {svc.features.map((f, j) => (
                    <li key={j}><span className="feat-dot" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-detail-tech">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">Our Toolkit</span>
            <Title title="Design Tools We Use" />
            <p>Industry-standard creative tools for producing pixel-perfect, production-ready brand assets.</p>
          </div>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <span className={`tech-pill fade-in-up stagger-${(i % 6) + 1}`} key={i}>
                <span className="tech-dot" />{tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-detail-process">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">How It Works</span>
            <Title title="Our Process" />
            <p>A collaborative, research-driven design process that transforms your vision into a powerful brand identity.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div className={`process-step fade-in-up stagger-${i + 1}`} key={i}>
                <span className="step-number">{step.number}</span>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                {i < processSteps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-detail-why">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">Why NOIWIC</span>
            <Title title="Why Choose Us" />
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div className={`why-card fade-in-up stagger-${i + 1}`} key={i}>
                <span className="why-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-detail-cta">
        <div className="container">
          <div className="cta-card">
            <div className="bracket-tl" />
            <div className="bracket-br" />
            <h2>Ready to build your brand?</h2>
            <p>Let&apos;s create a brand identity that tells your story, wins trust, and stands the test of time.</p>
            <div className="cta-buttons">
              <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <button className="button-primary">Get Free Consultation</button>
              </a>
              <a href="/contact">
                <button className="button-ghost">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Branding
