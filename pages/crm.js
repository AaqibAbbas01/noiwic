import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in CRM solutions from NOIWIC.")

const serviceItems = [
  {
    icon: "🏗️",
    title: "Custom CRM Development",
    desc: "Purpose-built CRM systems tailored to your unique sales process, customer lifecycle, and industry workflows — no forcing your business into a rigid template.",
    features: ["Custom data models", "Industry-specific workflows", "Role-based dashboards", "Mobile-responsive CRM"],
  },
  {
    icon: "🔗",
    title: "CRM Integration & Migration",
    desc: "Seamless integration with your existing tools — ERP, accounting, email marketing, and telephony systems — plus hassle-free data migration from legacy CRMs.",
    features: ["Salesforce/HubSpot migration", "ERP & accounting sync", "Email & calendar integration", "Zero-downtime migration"],
  },
  {
    icon: "📈",
    title: "Sales Pipeline Automation",
    desc: "Automated lead scoring, deal stage progression, follow-up reminders, and intelligent lead routing that ensures no opportunity falls through the cracks.",
    features: ["AI lead scoring", "Automated stage progression", "Smart lead routing", "Follow-up sequences"],
  },
  {
    icon: "👤",
    title: "Customer Data Platforms",
    desc: "Unified customer profiles aggregating data from every touchpoint — website, email, social, support, and purchase history — for a complete 360-degree view.",
    features: ["360° customer view", "Cross-channel data merge", "Behavioral tracking", "Segmentation engine"],
  },
  {
    icon: "📊",
    title: "Reporting & Analytics",
    desc: "Real-time dashboards and custom reports tracking pipeline value, win rates, team performance, customer lifetime value, and revenue forecasts.",
    features: ["Pipeline analytics", "Win/loss analysis", "Revenue forecasting", "Team performance metrics"],
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    desc: "Trigger-based automation for repetitive tasks — email notifications, task creation, data updates, approval workflows, and cross-system synchronization.",
    features: ["Trigger-based workflows", "Email automation", "Task auto-assignment", "Approval chains"],
  },
]

const techStack = [
  "Salesforce", "HubSpot", "Zoho CRM", "React", "Node.js",
  "PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "Zapier",
  "n8n", "Redis", "Elasticsearch", "Twilio", "SendGrid",
]

const processSteps = [
  { number: "01", title: "Needs Assessment", desc: "We map your current sales process, customer journey, pain points, and integration requirements through stakeholder interviews and workflow analysis." },
  { number: "02", title: "CRM Architecture", desc: "System design with custom data models, user roles, automation rules, integration architecture, and a phased implementation roadmap." },
  { number: "03", title: "Development & Integration", desc: "Agile development of the CRM with continuous integration of third-party systems, automated testing, and iterative user feedback." },
  { number: "04", title: "Training & Rollout", desc: "Phased deployment with team training sessions, documentation, admin guides, and ongoing support to ensure high adoption rates." },
]

const whyUs = [
  { icon: "🎯", title: "Process-First", desc: "We design CRMs around your actual sales process, not the other way around — ensuring natural adoption." },
  { icon: "🔄", title: "Seamless Integration", desc: "Deep integrations with your tech stack so your CRM becomes the single source of truth." },
  { icon: "📱", title: "Mobile-Ready", desc: "Fully responsive CRM dashboards that work on phones and tablets for field sales teams." },
  { icon: "🛡️", title: "Data Security", desc: "Enterprise-grade encryption, RBAC, audit trails, and GDPR-compliant data handling." },
]

const statsData = [
  { value: 30, suffix: "+", label: "CRMs Deployed" },
  { value: 45, suffix: "%", label: "Sales Productivity Gain" },
  { value: 95, suffix: "%", label: "User Adoption Rate" },
  { value: 3, suffix: "x", label: "Faster Deal Closure" },
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

const CRM = () => {
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
        <title>CRM Solutions — NOIWIC IT Solutions</title>
        <meta name="description" content="Custom CRM development, Salesforce/HubSpot integration, sales pipeline automation, and customer data platforms. CRM solutions that drive sales productivity." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/7947406-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">CRM Solutions</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">CRM That Closes</span>
            <span className="line-cyan fade-in-up stagger-2">More Deals</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            Custom CRM systems designed around your actual sales process — with pipeline automation,
            360-degree customer views, and intelligent analytics that turn data into revenue.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Get Your CRM</button>
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
            <Title title="CRM Services" />
            <p>From custom-built CRMs to enterprise integrations, we deliver systems that streamline sales, improve retention, and accelerate revenue growth.</p>
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
            <Title title="Platforms & Tools" />
            <p>We build with and integrate the world's leading CRM platforms alongside custom solutions for unique requirements.</p>
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
            <p>A structured methodology that maps your sales process, builds the right system, and ensures your team actually uses it.</p>
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
            <h2>Ready to transform your sales process?</h2>
            <p>Get a free CRM consultation and discover how the right system can boost your team&apos;s productivity by 45%.</p>
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

export default CRM
