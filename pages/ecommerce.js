import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in e-commerce development services from NOIWIC.")

const serviceItems = [
  {
    icon: "🏪",
    title: "Custom E-Commerce Platforms",
    desc: "Bespoke online stores built with Next.js Commerce, Medusa, or custom frameworks — tailored to your unique business model with full control over every pixel.",
    features: ["Headless architecture", "Custom checkout flows", "Multi-vendor support", "Infinite scalability"],
  },
  {
    icon: "🛍️",
    title: "Shopify & WooCommerce",
    desc: "Expert Shopify and WooCommerce setups with custom themes, conversion-optimized product pages, and seamless third-party integrations.",
    features: ["Custom Liquid/PHP themes", "Shopify Plus expertise", "Plugin development", "Theme migration"],
  },
  {
    icon: "💳",
    title: "Payment Gateway Integration",
    desc: "Secure, PCI-DSS compliant payment processing with Stripe, Razorpay, PayPal, and regional providers — supporting cards, UPI, wallets, and BNPL.",
    features: ["Stripe & Razorpay", "UPI & wallet support", "Buy Now Pay Later", "PCI-DSS compliance"],
  },
  {
    icon: "📦",
    title: "Inventory & Order Management",
    desc: "Real-time inventory tracking across multiple warehouses, automated stock alerts, and intelligent order routing for efficient fulfillment.",
    features: ["Multi-warehouse sync", "Automated stock alerts", "Order routing logic", "Returns & refund flows"],
  },
  {
    icon: "📈",
    title: "SEO & Conversion Optimization",
    desc: "Data-driven CRO with A/B testing, heatmaps, schema markup, and page speed optimization to maximize your revenue per visitor.",
    features: ["A/B testing & heatmaps", "Schema markup & rich snippets", "Cart recovery emails", "Upsell & cross-sell"],
  },
  {
    icon: "🌍",
    title: "Multi-Currency & Localization",
    desc: "Global-ready stores with multi-currency pricing, multi-language content, localized tax calculation, and international shipping integrations.",
    features: ["Multi-currency pricing", "Multi-language (i18n)", "Tax compliance (GST/VAT)", "International shipping"],
  },
]

const techStack = [
  "Shopify", "WooCommerce", "Magento", "Next.js Commerce", "Medusa",
  "Stripe", "Razorpay", "PayPal", "Snipcart", "PostgreSQL",
  "Redis", "Algolia", "Klaviyo", "Shiprocket", "Google Merchant Center",
]

const processSteps = [
  { number: "01", title: "Store Strategy", desc: "We analyze your products, target market, competitors, and business model to define the ideal platform, features, and go-to-market strategy." },
  { number: "02", title: "Design & Build", desc: "Conversion-focused UI design with branded product pages, intuitive navigation, and a frictionless checkout — then built with clean, scalable code." },
  { number: "03", title: "Integrations & Testing", desc: "Payment gateways, shipping providers, analytics, email marketing, and CRM integrations — all rigorously tested across devices and scenarios." },
  { number: "04", title: "Launch & Growth", desc: "Staged launch with real-time monitoring, SEO setup, marketing automation, and ongoing optimization to grow your average order value." },
]

const whyUs = [
  { icon: "💰", title: "Revenue-Focused", desc: "Every design decision and feature is evaluated against its impact on conversion rate and average order value." },
  { icon: "🔐", title: "Secure Checkout", desc: "PCI-DSS compliant payment flows with fraud detection, 3D Secure, and encrypted data handling." },
  { icon: "📊", title: "Data-Driven", desc: "Built-in analytics dashboards tracking revenue, customer behavior, marketing ROI, and inventory health." },
  { icon: "🚚", title: "Fulfillment Ready", desc: "Integrated with Shiprocket, Delhivery, FedEx, and custom logistics for automated order fulfillment." },
]

const statsData = [
  { value: 80, suffix: "+", label: "Stores Launched" },
  { value: 35, suffix: "%", label: "Avg. Conversion Lift" },
  { value: 50, suffix: "M+", label: "Revenue Processed" },
  { value: 99, suffix: "%", label: "Payment Success Rate" },
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

const Ecommerce = () => {
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
        <title>E-Commerce Solutions — NOIWIC IT Solutions</title>
        <meta name="description" content="End-to-end e-commerce development with Shopify, WooCommerce, and custom platforms. Payment integration, inventory management, and conversion optimization." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/6238179-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">E-Commerce Solutions</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">Online Stores That</span>
            <span className="line-gold fade-in-up stagger-2">Sell While You Sleep</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            We build conversion-optimized e-commerce experiences — from Shopify storefronts to custom headless
            platforms — with integrated payments, inventory management, and analytics that drive revenue growth.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Launch Your Store</button>
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
            <Title title="E-Commerce Services" />
            <p>Comprehensive e-commerce solutions from platform selection to post-launch growth — everything you need to sell online successfully.</p>
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
            <p>We work with the world's leading e-commerce platforms and integrate best-in-class tools for payments, shipping, and marketing.</p>
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
            <p>A systematic approach to building stores that convert — from market research to revenue optimization.</p>
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
            <h2>Ready to sell online?</h2>
            <p>Let&apos;s build an e-commerce platform that turns visitors into loyal customers.</p>
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

export default Ecommerce
