import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in web development services from NOIWIC.")

const serviceItems = [
  {
    icon: "🌐",
    title: "Custom Web Applications",
    desc: "Full-stack web applications engineered with React, Next.js, Node.js, and TypeScript — built for scale, speed, and maintainability from day one.",
    features: ["Server-side rendering & SSG", "REST & GraphQL APIs", "Role-based auth & security", "Real-time data with WebSockets"],
  },
  {
    icon: "⚡",
    title: "Progressive Web Apps",
    desc: "Installable, offline-capable PWAs that deliver native-like experiences on any device with blazing-fast load times and push notifications.",
    features: ["Service worker caching", "Offline functionality", "Push notifications", "App-like navigation"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design & Prototyping",
    desc: "Research-backed interface design with interactive prototypes in Figma, validated through user testing before a single line of code is written.",
    features: ["Wireframing & mockups", "Interactive prototypes", "Usability testing", "Design system creation"],
  },
  {
    icon: "📝",
    title: "CMS & WordPress Development",
    desc: "Content-managed websites on WordPress, Strapi, or Sanity with custom themes, plugins, and headless architectures for editorial teams.",
    features: ["Custom theme development", "Plugin/module creation", "Headless CMS integration", "Content migration"],
  },
  {
    icon: "🛍️",
    title: "Shopify & E-Commerce Storefronts",
    desc: "Conversion-optimized Shopify stores with custom Liquid themes, checkout customization, and seamless third-party app integrations.",
    features: ["Custom Liquid themes", "Checkout optimization", "App integrations", "Inventory sync"],
  },
  {
    icon: "🔍",
    title: "Performance & SEO Audits",
    desc: "Comprehensive site audits covering Core Web Vitals, accessibility compliance (WCAG 2.1), technical SEO, and actionable optimization roadmaps.",
    features: ["Core Web Vitals optimization", "Accessibility (WCAG 2.1)", "Technical SEO audit", "Lighthouse 90+ scores"],
  },
]

const techStack = [
  "React", "Next.js", "Vue.js", "Angular", "Node.js", "TypeScript",
  "Tailwind CSS", "WordPress", "Shopify", "PostgreSQL", "MongoDB",
  "GraphQL", "Docker", "Vercel", "AWS", "Figma",
]

const processSteps = [
  { number: "01", title: "Discovery & Wireframes", desc: "We audit your goals, audience, and competitors, then map out information architecture and wireframes for every key page." },
  { number: "02", title: "UI/UX Design", desc: "High-fidelity designs in Figma with your brand palette, typography, and interactive prototypes validated through feedback rounds." },
  { number: "03", title: "Development & Testing", desc: "Pixel-perfect code using modern frameworks, thorough cross-browser QA, performance optimization, and security hardening." },
  { number: "04", title: "Launch & Support", desc: "Zero-downtime deployment, analytics setup, SEO configuration, and ongoing maintenance with 24/7 monitoring and support." },
]

const whyUs = [
  { icon: "🚀", title: "Performance First", desc: "Every site ships with Lighthouse scores above 90, sub-second load times, and optimized Core Web Vitals." },
  { icon: "🔒", title: "Security Built-In", desc: "OWASP-aligned security practices, HTTPS by default, input sanitization, and regular vulnerability scanning." },
  { icon: "📱", title: "Fully Responsive", desc: "Mobile-first designs that look flawless on every screen size — from 320px phones to 4K ultrawide monitors." },
  { icon: "🤝", title: "Dedicated Team", desc: "A senior developer, UI designer, and project manager assigned to your project with weekly progress reports." },
]

const statsData = [
  { value: 200, suffix: "+", label: "Websites Delivered" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
  { value: 3, suffix: "s", label: "Avg. Load Time" },
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

const WebDev = () => {
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
        <title>Web Development — NOIWIC IT Solutions</title>
        <meta name="description" content="High-performance websites and web applications built with React, Next.js, Node.js, and modern frameworks. From landing pages to complex SaaS platforms." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/14519720_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">Web Development</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">Websites That</span>
            <span className="line-cyan fade-in-up stagger-2">Perform & Convert</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            We engineer high-performance websites and web applications that load in under 3 seconds,
            rank on Google, and convert visitors into customers — built with the most powerful modern frameworks.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Start Your Project</button>
            </a>
            <a href="#services">
              <button className="button-ghost">View Services</button>
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
            <span className="eyebrow">What We Build</span>
            <Title title="Web Development Services" />
            <p>From single-page marketing sites to enterprise-grade web applications, every project is architected for performance, scalability, and long-term success.</p>
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
            <span className="eyebrow">Our Stack</span>
            <Title title="Technologies We Use" />
            <p>We pick the right tool for the job — battle-tested frameworks and platforms trusted by industry leaders worldwide.</p>
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
            <p>A proven four-phase workflow that takes your project from concept to a production-ready, high-performing website.</p>
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
            <h2>Ready to build your next website?</h2>
            <p>Tell us about your project and get a free consultation with our senior development team.</p>
            <div className="cta-buttons">
              <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <button className="button-primary">Get Free Quote</button>
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

export default WebDev
