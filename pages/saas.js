import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in SaaS development services from NOIWIC.")

const serviceItems = [
  {
    icon: "🏗️",
    title: "Multi-Tenant Architecture",
    desc: "Scalable multi-tenant SaaS platforms with tenant isolation, shared infrastructure efficiency, and customizable configurations per client.",
    features: ["Database-per-tenant & shared schema", "Tenant-level customization", "Data isolation & security", "Horizontal scaling"],
  },
  {
    icon: "💳",
    title: "Subscription & Billing",
    desc: "Complete billing infrastructure with Stripe integration — usage-based pricing, tiered plans, free trials, promo codes, invoicing, and automated dunning.",
    features: ["Stripe & Razorpay integration", "Usage-based & tiered pricing", "Free trials & coupons", "Automated invoicing & dunning"],
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    desc: "Real-time analytics dashboards for SaaS operators — MRR tracking, churn analysis, user engagement metrics, and customizable data visualizations.",
    features: ["MRR & ARR tracking", "Churn & retention analysis", "User engagement heatmaps", "Custom report builder"],
  },
  {
    icon: "👥",
    title: "User & Team Management",
    desc: "Enterprise-ready user management with role-based access control, team workspaces, SSO integration, and granular permission systems.",
    features: ["RBAC & permissions", "Team workspaces", "SSO (SAML/OAuth)", "Audit logs"],
  },
  {
    icon: "🔌",
    title: "API-First Design",
    desc: "RESTful and GraphQL APIs designed for third-party integrations, webhooks, developer documentation, and extensibility from day one.",
    features: ["REST & GraphQL APIs", "Webhook system", "Auto-generated API docs", "Rate limiting & versioning"],
  },
  {
    icon: "🚀",
    title: "CI/CD & DevOps",
    desc: "Automated deployment pipelines with Docker, Kubernetes, and cloud-native infrastructure — zero-downtime releases and automated rollbacks.",
    features: ["Docker & Kubernetes", "GitHub Actions / GitLab CI", "Blue-green deployments", "Infrastructure as Code"],
  },
]

const techStack = [
  "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis",
  "Prisma", "Stripe", "AWS", "Google Cloud", "Docker",
  "Kubernetes", "Terraform", "GitHub Actions", "Sentry",
  "PostHog", "Resend",
]

const processSteps = [
  { number: "01", title: "Product Discovery", desc: "Market validation, feature prioritization with MoSCoW, user story mapping, and a detailed technical specification document." },
  { number: "02", title: "MVP Architecture", desc: "System design, database schema, API contracts, and infrastructure planning — building the foundation for a product that scales to 100K+ users." },
  { number: "03", title: "Build & Iterate", desc: "Two-week agile sprints with continuous deployment, feature flags, beta testing, and user feedback loops to refine the product rapidly." },
  { number: "04", title: "Scale & Optimize", desc: "Performance tuning, auto-scaling configuration, cost optimization, monitoring dashboards, and ongoing feature development." },
]

const whyUs = [
  { icon: "☁️", title: "Cloud-Native", desc: "Every SaaS we build is cloud-native from day one — auto-scaling, fault-tolerant, and globally distributed." },
  { icon: "📈", title: "Built to Scale", desc: "Architectures proven to handle 10x traffic spikes with zero performance degradation." },
  { icon: "🔒", title: "Enterprise Security", desc: "SOC 2-ready security posture with encryption at rest/transit, audit logs, and RBAC." },
  { icon: "💡", title: "Product Thinking", desc: "We don't just code features — we think about product-market fit, retention, and monetization." },
]

const statsData = [
  { value: 5, suffix: "", label: "Live SaaS Products" },
  { value: 99, suffix: ".9%", label: "Uptime SLA" },
  { value: 100, suffix: "K+", label: "Users on Our Platforms" },
  { value: 10, suffix: "x", label: "Faster Time-to-Market" },
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

const SaaS = () => {
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
        <title>SaaS Development — NOIWIC IT Solutions</title>
        <meta name="description" content="Scalable SaaS platforms with multi-tenant architecture, subscription billing, admin dashboards, and cloud-native infrastructure. From MVP to enterprise scale." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/7504970-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">SaaS Development</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">SaaS Platforms</span>
            <span className="line-cyan fade-in-up stagger-2">Built to Scale</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            We architect and build cloud-native SaaS products with multi-tenant architecture, subscription billing,
            and enterprise-grade security — from MVP validation to serving hundreds of thousands of users.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Build Your SaaS</button>
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
            <span className="eyebrow">What We Build</span>
            <Title title="SaaS Development Services" />
            <p>End-to-end SaaS product engineering — from multi-tenant architecture and billing to dashboards and DevOps pipelines.</p>
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
            <p>Battle-tested, cloud-native technologies for building SaaS products that handle millions of requests.</p>
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
            <p>From product discovery to production scale — a proven methodology for shipping SaaS products fast.</p>
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
            <h2>Ready to launch your SaaS?</h2>
            <p>Share your product vision and get a free technical architecture consultation from our team.</p>
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

export default SaaS
