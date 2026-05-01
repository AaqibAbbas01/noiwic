import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback, useState } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in Automation Testing services from NOIWIC.")

/* ── Plan Inquiry Modal ─────────────────────────────────────── */
const PlanInquiryModal = ({ plan, onClose }) => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = encodeURIComponent(
`Hi NOIWIC Team,

I'd like to get started with the *${plan.name} Plan* for Automation Testing.

*Plan Details:*
• Package: ${plan.name} (${plan.price}${plan.period})
• Ideal for: ${plan.ideal}

*My Details:*
• Name: ${form.name}
• Company: ${form.company || 'N/A'}
• Email: ${form.email}
• Phone: ${form.phone || 'N/A'}

Please get in touch to discuss next steps.

Thank you!`
    )

    // Save to DB (fire-and-forget — don't block WhatsApp redirect on DB error)
    try {
      await fetch('/api/plan-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          planName: plan.name,
          planPrice: plan.price + (plan.period || ''),
          planIdeal: plan.ideal,
        }),
      })
    } catch (_) {
      // Silently continue — WhatsApp inquiry still goes through
    }

    setSubmitted(true)
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer')
      onClose()
    }, 1200)
  }

  const handleOverlay = (e) => {
    if (e.target.classList.contains('pim-overlay')) onClose()
  }

  return (
    <div className="pim-overlay" onClick={handleOverlay}>
      <div className="pim-modal">
        <button className="pim-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="bracket-tl" />
        <div className="bracket-br" />

        {/* Plan summary */}
        <div className="pim-plan-badge">{plan.highlighted ? '⭐ Most Popular' : '🧪 QA Automation'}</div>
        <h2 className="pim-title">{plan.name} Plan</h2>
        <p className="pim-ideal">{plan.ideal}</p>
        <div className="pim-price">
          <span className="pim-amount">{plan.price}</span>
          {plan.period && <span className="pim-period">{plan.period}</span>}
        </div>

        <ul className="pim-features">
          {plan.features.map((f, i) => (
            <li key={i}><span className="feat-dot" />{f}</li>
          ))}
        </ul>

        <div className="pim-divider" />

        {submitted ? (
          <div className="pim-success">
            <span className="pim-success-icon">✅</span>
            <p>Opening WhatsApp with your inquiry…</p>
          </div>
        ) : (
          <>
            <p className="pim-form-heading">Fill in your details and we&apos;ll reach out within 24 hours.</p>
            <form className="pim-form" onSubmit={handleSubmit} noValidate>
              <div className="pim-row">
                <div className="pim-field">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
                </div>
                <div className="pim-field">
                  <label>Company / Startup</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                </div>
              </div>
              <div className="pim-row">
                <div className="pim-field">
                  <label>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@acme.com" />
                </div>
                <div className="pim-field">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98184 04363" />
                </div>
              </div>
              <button className="button-primary pim-submit" type="submit">
                Send Inquiry via WhatsApp →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const serviceItems = [
  {
    icon: '🔗',
    title: 'API & UI Automation',
    desc: 'End-to-end automation coverage across REST, GraphQL, and SOAP APIs — combined with pixel-perfect UI automation covering critical user journeys across all browsers and viewports.',
    features: [
      'REST & GraphQL API test suites',
      'UI flow automation (web & mobile)',
      'Contract testing with Pact',
      'Schema validation & response assertions',
    ],
  },
  {
    icon: '🎭',
    title: 'Advanced Playwright Framework',
    desc: 'Enterprise-grade Playwright setups with Page Object Model, auto-retries, parallel workers, visual regression, and AI-assisted locator healing — the gold standard for modern web automation.',
    features: [
      'Page Object Model architecture',
      'Multi-browser parallel execution',
      'Visual regression with Percy / Argos',
      'AI-assisted self-healing locators',
    ],
  },
  {
    icon: '🌲',
    title: 'Cypress Advanced Framework',
    desc: 'Component and end-to-end Cypress test suites with custom command libraries, network intercepts, real-time test replay, and Cypress Cloud integration for historical analytics.',
    features: [
      'Component & E2E test coverage',
      'Network stubbing & mocking',
      'Cypress Cloud analytics',
      'Custom command libraries',
    ],
  },
  {
    icon: '⚙️',
    title: 'CI/CD Pipeline Integration',
    desc: 'Fully automated quality gates baked into your Jenkins pipelines or GitHub Actions workflows — triggered on every commit, PR, and scheduled regression run with Slack/email notifications.',
    features: [
      'Jenkins declarative pipeline setup',
      'GitHub Actions workflow automation',
      'Parallel test sharding in CI',
      'Slack / email failure alerts',
    ],
  },
  {
    icon: '🧠',
    title: 'AI-Integrated Testing',
    desc: 'Next-generation test intelligence powered by AI — auto-generated test cases from user stories, smart flaky test detection, root-cause analysis from failure logs, and NLP-driven test authoring.',
    features: [
      'AI test case generation from specs',
      'Flaky test auto-detection & fix',
      'LLM-powered failure root-cause analysis',
      'NLP-driven BDD scenario authoring',
    ],
  },
  {
    icon: '🔄',
    title: 'Framework Migration to Playwright',
    desc: 'Seamless migration from legacy Selenium, Protractor, or TestCafe codebases to a modern Playwright stack — with zero test coverage loss, upgraded selectors, and a faster, more maintainable suite.',
    features: [
      'Selenium → Playwright migration',
      'Protractor & TestCafe conversions',
      'Selector modernisation & clean-up',
      'Zero coverage-loss guarantee',
    ],
  },
  {
    icon: '🛠️',
    title: 'Custom Helper Libraries',
    desc: 'Business-specific utility layers built on top of Playwright or Cypress — reusable auth helpers, data-factory utilities, dynamic test data generation, and domain-aware assertion wrappers.',
    features: [
      'Reusable auth & session helpers',
      'Test data factory & seeding',
      'Domain assertion wrappers',
      'Shared fixture management',
    ],
  },
  {
    icon: '🧪',
    title: 'Unit & Integration Testing',
    desc: 'Comprehensive unit and integration test coverage with Jest, Vitest, or Mocha — component-level isolation, service integration contracts, and code coverage enforcement above 80%.',
    features: [
      'Jest & Vitest unit suites',
      'Service integration contracts',
      '80%+ code coverage enforcement',
      'Mocking & dependency injection',
    ],
  },
  {
    icon: '⚡',
    title: 'Performance & Load Testing',
    desc: 'Proactive performance baselines with k6 and Artillery — load, stress, and soak tests run as part of the CI pipeline to catch regressions before they hit production.',
    features: [
      'k6 & Artillery load test scripts',
      'Baseline & regression benchmarks',
      'CI-integrated performance gates',
      'Grafana / Datadog dashboards',
    ],
  },
]

const techStack = [
  'Playwright', 'Cypress', 'Jest', 'Vitest', 'Selenium',
  'Appium', 'k6', 'Artillery', 'GitHub Actions', 'Jenkins',
  'Docker', 'TypeScript', 'Allure Reports', 'Percy', 'Postman',
  'Newman', 'Pact', 'Grafana', 'Datadog', 'SonarQube',
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Strategy',
    desc: 'We analyse your existing codebase, test coverage gaps, and CI/CD maturity — then deliver a prioritised automation roadmap tailored to your release velocity and tech stack.',
  },
  {
    number: '02',
    title: 'Framework Setup',
    desc: 'Full scaffold of your chosen framework (Playwright or Cypress) with POM architecture, shared utilities, reporting, and environment configuration — ready for day-one test authoring.',
  },
  {
    number: '03',
    title: 'CI/CD Integration',
    desc: 'Test suites wired into Jenkins or GitHub Actions with parallelisation, environment-specific triggers, test sharding, and notification webhooks for immediate feedback on every push.',
  },
  {
    number: '04',
    title: 'Flaky Fix & Maintenance',
    desc: 'Ongoing monitoring with automatic flaky-test quarantine, root-cause reports, selector updates for UI changes, and monthly coverage health reviews to keep your suite green.',
  },
]

const whyUs = [
  {
    icon: '🤖',
    title: 'AI-Powered Intelligence',
    desc: 'Our frameworks incorporate LLM-based test generation, smart locator healing, and AI-driven failure triage — reducing manual effort by up to 70%.',
  },
  {
    icon: '🚫',
    title: 'Zero Flaky Tests Guarantee',
    desc: 'We implement deterministic waits, isolated state management, and retry strategies so your CI pipeline stays green and trustworthy.',
  },
  {
    icon: '📦',
    title: 'Expert Framework Migration',
    desc: 'Proven migration playbook from Selenium, Protractor, or TestCafe to Playwright with full coverage preservation and zero regression risk.',
  },
  {
    icon: '🔁',
    title: 'Full-Stack Coverage',
    desc: 'Unit → Integration → E2E → Performance → API — a single team delivering layered quality assurance across your entire stack.',
  },
]

const statsData = [
  { value: 500, suffix: '+', label: 'Tests Automated' },
  { value: 40, suffix: '+', label: 'CI/CD Pipelines Built' },
  { value: 10, suffix: '+', label: 'Frameworks Migrated' },
  { value: 98, suffix: '%', label: 'Flaky Fix Success Rate' },
]

const pricingTiers = [
  {
    name: 'Starter',
    ideal: 'Early-stage startups',
    price: '₹29,999',
    period: '/ project',
    features: [
      'Playwright or Cypress setup',
      'Up to 50 automated test cases',
      'GitHub Actions CI integration',
      'Allure HTML report',
      '1 environment (staging)',
      '2 weeks delivery',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    ideal: 'Scale-ups & funded startups',
    price: '₹74,999',
    period: '/ project',
    features: [
      'Full POM framework + helper libs',
      'Up to 200 automated test cases',
      'Jenkins + GitHub Actions pipelines',
      'API & UI automation suite',
      'AI-assisted test generation',
      'Flaky test SLA — 5 business days',
      '3 environments',
      '4 weeks delivery',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    ideal: 'Enterprises & agencies',
    price: 'Custom',
    period: '',
    features: [
      'Complete QA transformation',
      'Unlimited test cases',
      'Legacy migration (Selenium → Playwright)',
      'Load & performance testing (k6)',
      'AI root-cause triage & dashboards',
      'Dedicated QA engineer',
      'Monthly health reviews',
      'SLA-backed support',
    ],
    cta: 'Talk to Us',
    highlighted: false,
  },
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

const AutomationTesting = () => {
  const [activePlan, setActivePlan] = useState(null)

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
        <title>Automation Testing — NOIWIC IT Solutions</title>
        <meta
          name="description"
          content="Complete automation testing solutions for startups and enterprises — Playwright, Cypress, API automation, CI/CD pipelines with Jenkins & GitHub Actions, AI-integrated testing, and legacy framework migration."
        />
      </Head>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/7504970-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">QA Automation</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">Zero-Defect Releases</span>
            <span className="line-cyan fade-in-up stagger-2">Powered by AI</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            We build enterprise-grade automation testing solutions for startups and organisations —
            covering API and UI automation, Playwright and Cypress frameworks, Jenkins and GitHub Actions
            CI/CD pipelines, AI-integrated testing, and seamless migration from legacy frameworks.
            Ship faster. Break nothing.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Start Automating</button>
            </a>
            <a href="#services">
              <button className="button-ghost">Explore Services</button>
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="svc-detail-stats">
        <div className="container">
          <div className="svc-stats-grid">
            {statsData.map((stat, i) => <StatCounter key={i} {...stat} />)}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="svc-detail-services" id="services">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">What We Deliver</span>
            <Title title="Automation Testing Services" />
            <p>
              From initial framework scaffolding to full CI/CD integration and AI-powered test intelligence —
              every engagement is built to eliminate manual regression effort and ship with confidence.
            </p>
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

      {/* ── TECH STACK ───────────────────────────────────────────────── */}
      <section className="svc-detail-tech">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">Our Stack</span>
            <Title title="Tools & Technologies" />
            <p>
              Industry-leading open-source frameworks and cloud tools — chosen for reliability,
              community support, and seamless integration with modern engineering workflows.
            </p>
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

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="svc-detail-process">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">How It Works</span>
            <Title title="Our QA Process" />
            <p>
              A four-phase methodology that takes you from zero automation to a green, self-healing
              CI pipeline — without disrupting your existing release cadence.
            </p>
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

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="svc-detail-services" id="pricing">
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">Transparent Pricing</span>
            <Title title="Choose Your Plan" />
            <p>
              Fixed-scope packages for every stage — from early-stage startups shipping their first
              automated suite to enterprises undertaking a full QA transformation.
            </p>
          </div>
          <div className="svc-pricing-grid">
            {pricingTiers.map((tier, i) => (
              <div
                className={`svc-pricing-card fade-in-up stagger-${i + 1}${tier.highlighted ? ' pricing-highlighted' : ''}`}
                key={i}
              >
                <div className="bracket-tl" />
                <div className="bracket-br" />
                {tier.highlighted && <span className="svc-featured-tag">Most Popular</span>}
                <h3 className="pricing-tier-name">{tier.name}</h3>
                <p className="pricing-tier-ideal">{tier.ideal}</p>
                <div className="pricing-price">
                  <span className="pricing-amount">{tier.price}</span>
                  {tier.period && <span className="pricing-period">{tier.period}</span>}
                </div>
                <ul className="svc-card-features pricing-features">
                  {tier.features.map((f, j) => (
                    <li key={j}><span className="feat-dot" />{f}</li>
                  ))}
                </ul>
                <div className="pricing-cta-link">
                  <button
                    className={tier.highlighted ? 'button-primary' : 'button-ghost'}
                    onClick={() => setActivePlan(tier)}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────── */}
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="svc-detail-cta">
        <div className="container">
          <div className="cta-card">
            <div className="bracket-tl" />
            <div className="bracket-br" />
            <h2>Ready to automate your QA pipeline?</h2>
            <p>
              Tell us about your stack and get a free automation audit with a customised
              testing roadmap from our senior QA engineers.
            </p>
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

      {/* ── PLAN INQUIRY MODAL ───────────────────────────────────────── */}
      {activePlan && (
        <PlanInquiryModal plan={activePlan} onClose={() => setActivePlan(null)} />
      )}
    </>
  )
}

export default AutomationTesting
