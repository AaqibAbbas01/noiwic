import Head from "next/head"
import { Title } from "@/components/common/Title"
import AIAgents from "@/components/AIAgents"
import { useEffect, useRef, useCallback } from "react"

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in AI Agent solutions for my business.")

const agentServices = [
  {
    icon: "💬",
    title: "WhatsApp AI Agents",
    desc: "Fully autonomous conversational agents on WhatsApp that handle customer queries, bookings, order tracking, and support — 24/7 in multiple languages.",
    features: ["Auto-replies & FAQs", "Order status tracking", "Appointment booking", "Payment link sharing"],
  },
  {
    icon: "🛎️",
    title: "Customer Support Bots",
    desc: "AI-powered support agents that resolve 80%+ of tickets without human intervention. Integrated with your helpdesk, CRM, and knowledge base.",
    features: ["Ticket classification", "Sentiment analysis", "Auto-escalation", "Knowledge base search"],
  },
  {
    icon: "📞",
    title: "Voice AI Agents",
    desc: "Intelligent voice bots for IVR systems and outbound calls. Handle appointment confirmations, surveys, reminders, and lead qualification by phone.",
    features: ["Natural speech recognition", "Multi-language support", "Call transcription", "CRM sync"],
  },
  {
    icon: "🛒",
    title: "E-Commerce AI Agents",
    desc: "Smart shopping assistants that guide customers through product discovery, recommendations, cart recovery, and post-purchase support.",
    features: ["Product recommendations", "Cart abandonment recovery", "Size & fit guidance", "Return processing"],
  },
  {
    icon: "📊",
    title: "Data & Analytics Agents",
    desc: "AI agents that monitor your business metrics, generate reports, detect anomalies, and send proactive alerts — no dashboards required.",
    features: ["Automated reporting", "Anomaly detection", "Natural language queries", "Slack/Teams alerts"],
  },
  {
    icon: "🔄",
    title: "Workflow Automation Agents",
    desc: "End-to-end process automation agents that handle invoice processing, employee onboarding, document review, and internal operations.",
    features: ["Document extraction", "Approval workflows", "Email processing", "System integration"],
  },
]

const industries = [
  { icon: "🍽️", name: "Restaurants & Hospitality", desc: "Table bookings, menu queries, guest feedback" },
  { icon: "🏥", name: "Healthcare & Clinics", desc: "Appointment scheduling, patient FAQs, reminders" },
  { icon: "🏪", name: "Retail & E-Commerce", desc: "Product support, order tracking, returns" },
  { icon: "🏠", name: "Real Estate", desc: "Property queries, virtual tour scheduling, lead capture" },
  { icon: "🎓", name: "Education & EdTech", desc: "Course inquiries, enrollment, student support" },
  { icon: "💼", name: "Professional Services", desc: "Consultation booking, document collection, follow-ups" },
  { icon: "✈️", name: "Travel & Tourism", desc: "Itinerary planning, booking modifications, local tips" },
  { icon: "🏦", name: "Finance & Insurance", desc: "Claim status, policy queries, KYC collection" },
]

const processSteps = [
  { number: "01", title: "Discovery", desc: "We map your workflows, identify automation opportunities, and define agent personas and conversation flows." },
  { number: "02", title: "Design & Build", desc: "Our team builds custom AI agents trained on your data, brand voice, and business rules using GPT-4 and proprietary models." },
  { number: "03", title: "Integration", desc: "We connect your agent to WhatsApp, your website, CRM, POS, calendars, and any third-party APIs you use." },
  { number: "04", title: "Launch & Optimize", desc: "We deploy, monitor performance, and continuously improve response accuracy, conversation flows, and customer satisfaction." },
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
    <div className="ai-stat-item">
      <span className="ai-stat-number" ref={ref}>0{suffix}</span>
      <span className="ai-stat-label">{label}</span>
    </div>
  )
}

const AIAgentsPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>AI Agents & Automation — NOIWIC IT Solutions</title>
        <meta name="description" content="We deploy intelligent AI agents that automate customer interactions, bookings, and operations — 24/7, in multiple languages, with zero wait time." />
      </Head>

      {/* HERO */}
      <section className="ai-page-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/8084624-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <span className="eyebrow fade-in-up">AI-Powered Solutions</span>
          <h1 className="ai-page-title fade-in-up stagger-1">
            <span className="line-white">Intelligent AI Agents</span>
            <span className="line-cyan">for Every Business</span>
          </h1>
          <p className="ai-page-sub fade-in-up stagger-2">
            We design, build, and deploy custom AI agents that handle customer interactions,
            automate operations, and drive revenue — 24/7, across WhatsApp, web, voice, and more.
          </p>
          <div className="ai-page-ctas fade-in-up stagger-3">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Get Your AI Agent</button>
            </a>
            <a href="#ai-services">
              <button className="button-ghost">Explore Services</button>
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="ai-page-stats">
        <div className="container">
          <div className="ai-stats-grid">
            <StatCounter value={80} suffix="%" label="Tickets Auto-Resolved" />
            <StatCounter value={24} suffix="/7" label="Always Available" />
            <StatCounter value={15} suffix="+" label="Languages Supported" />
            <StatCounter value={3} suffix="x" label="Faster Response Time" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="ai-page-services" id="ai-services">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">What We Build</span>
            <Title title="AI Agent Services" />
            <p>From conversational commerce to internal automation, we build AI agents tailored to your exact needs.</p>
          </div>

          <div className="ai-services-grid">
            {agentServices.map((svc, i) => (
              <div className={`ai-svc-card fade-in-up stagger-${(i % 6) + 1}`} key={i}>
                <div className="bracket-tl" />
                <div className="bracket-br" />
                <span className="ai-svc-icon">{svc.icon}</span>
                <h3 className="ai-svc-title">{svc.title}</h3>
                <p className="ai-svc-desc">{svc.desc}</p>
                <ul className="ai-svc-features">
                  {svc.features.map((f, j) => (
                    <li key={j}><span className="feat-dot" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DEMO — reuse the existing AIAgents component */}
      <AIAgents />

      {/* PROCESS */}
      <section className="ai-page-process">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">How It Works</span>
            <Title title="Our Process" />
            <p>From discovery to deployment in as little as 2 weeks.</p>
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

      {/* INDUSTRIES */}
      <section className="ai-page-industries">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">Industries We Serve</span>
            <Title title="Built for Your Sector" />
            <p>Our AI agents are trained and customized for specific industry workflows and terminology.</p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div className={`industry-card fade-in-up stagger-${(i % 4) + 1}`} key={i}>
                <span className="industry-icon">{ind.icon}</span>
                <h4 className="industry-name">{ind.name}</h4>
                <p className="industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="ai-page-bottom-cta">
        <div className="container">
          <div className="cta-card">
            <div className="bracket-tl" />
            <div className="bracket-br" />
            <h2>Ready to automate your business?</h2>
            <p>Tell us about your use case and we&apos;ll design a custom AI agent for you — free consultation.</p>
            <div className="cta-buttons">
              <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <button className="button-primary">Start Free Consultation</button>
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

export default AIAgentsPage
