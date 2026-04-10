import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in digital marketing services from NOIWIC.")

const serviceItems = [
  {
    icon: "🔍",
    title: "Search Engine Optimization",
    desc: "Technical and on-page SEO strategies that improve organic rankings, drive qualified traffic, and build sustainable long-term visibility on Google and Bing.",
    features: ["Technical SEO audits", "Keyword research & mapping", "On-page & off-page SEO", "Local SEO & Google Business"],
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Strategic content creation and community management across Instagram, LinkedIn, Facebook, X, and YouTube — building engaged audiences that convert.",
    features: ["Content calendars", "Community management", "Influencer partnerships", "Social listening"],
  },
  {
    icon: "💰",
    title: "PPC & Paid Advertising",
    desc: "ROI-focused campaigns on Google Ads, Meta Ads, LinkedIn Ads, and programmatic platforms with continuous optimization and transparent reporting.",
    features: ["Google Ads (Search & Display)", "Meta & Instagram Ads", "LinkedIn B2B campaigns", "Retargeting & lookalikes"],
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    desc: "High-impact blog posts, case studies, whitepapers, video scripts, and infographics that establish thought leadership and drive organic growth.",
    features: ["SEO-optimized blog posts", "Case studies & whitepapers", "Video content strategy", "Content distribution"],
  },
  {
    icon: "📧",
    title: "Email Marketing Automation",
    desc: "Automated email sequences, newsletters, and drip campaigns powered by segmentation and behavioral triggers to nurture leads and drive conversions.",
    features: ["Drip campaign design", "Behavioral triggers", "A/B subject testing", "List segmentation"],
  },
  {
    icon: "📊",
    title: "Analytics & Growth Strategy",
    desc: "Comprehensive analytics dashboards, attribution modeling, and data-driven growth strategies that connect marketing spend directly to revenue outcomes.",
    features: ["GA4 & GTM setup", "Attribution modeling", "Custom dashboards", "Monthly growth reports"],
  },
]

const techStack = [
  "Google Ads", "Meta Ads", "LinkedIn Ads", "Google Analytics 4",
  "SEMrush", "Ahrefs", "Moz", "HubSpot", "Mailchimp", "Klaviyo",
  "Google Tag Manager", "Hotjar", "Canva", "Buffer", "Zapier",
]

const processSteps = [
  { number: "01", title: "Audit & Strategy", desc: "We analyze your current digital presence, competitors, and audience to build a data-backed marketing strategy with clear KPIs and timelines." },
  { number: "02", title: "Campaign Setup", desc: "Channel selection, ad creative development, landing page optimization, tracking pixel implementation, and audience targeting configuration." },
  { number: "03", title: "Execution & Monitoring", desc: "Active campaign management with daily monitoring, bid optimization, A/B testing, and real-time adjustments based on performance data." },
  { number: "04", title: "Reporting & Optimization", desc: "Monthly performance reports with actionable insights, ROI analysis, and strategic recommendations for continuous improvement." },
]

const whyUs = [
  { icon: "📈", title: "ROI-Obsessed", desc: "Every rupee of ad spend is tracked, attributed, and optimized to maximize your return on investment." },
  { icon: "🎯", title: "Data-Driven", desc: "Decisions backed by analytics, not guesswork — with A/B testing and attribution modeling." },
  { icon: "🤝", title: "Transparent Reports", desc: "No vanity metrics. We report on leads, conversions, and revenue — the numbers that matter." },
  { icon: "⚡", title: "Agile Execution", desc: "Weekly optimizations, rapid creative iterations, and real-time campaign adjustments." },
]

const statsData = [
  { value: 500, suffix: "+", label: "Campaigns Managed" },
  { value: 3, suffix: "x", label: "Avg. ROAS" },
  { value: 10, suffix: "M+", label: "Ad Spend Managed" },
  { value: 40, suffix: "%", label: "Avg. Traffic Growth" },
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

const DigitalMarketing = () => {
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
        <title>Digital Marketing — NOIWIC IT Solutions</title>
        <meta name="description" content="Data-driven digital marketing — SEO, PPC, social media, content marketing, and email automation. We grow your traffic, leads, and revenue." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/6558419-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">Digital Marketing</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">Marketing That</span>
            <span className="line-gold fade-in-up stagger-2">Drives Revenue</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            Data-driven digital marketing strategies that increase visibility, generate qualified leads,
            and accelerate business growth — across search, social, email, and paid channels.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Grow My Business</button>
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
            <span className="eyebrow">What We Do</span>
            <Title title="Marketing Services" />
            <p>Full-funnel digital marketing services designed to attract, engage, and convert your ideal customers at every touchpoint.</p>
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
            <Title title="Platforms & Tools" />
            <p>We leverage industry-leading marketing platforms and analytics tools to deliver measurable results.</p>
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
            <p>A systematic, data-driven approach to marketing that delivers predictable, scalable growth.</p>
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
            <h2>Ready to grow your digital presence?</h2>
            <p>Get a free marketing audit and discover untapped opportunities to scale your business.</p>
            <div className="cta-buttons">
              <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <button className="button-primary">Get Free Audit</button>
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

export default DigitalMarketing
