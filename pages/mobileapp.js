import Head from 'next/head'
import { Title } from '@/components/common/Title'
import { useEffect, useRef, useCallback } from 'react'

const phoneNumber = '9818404363'
const waMsg = encodeURIComponent("Hi, I'm interested in mobile app development services from NOIWIC.")

const serviceItems = [
  {
    icon: "🍎",
    title: "iOS App Development",
    desc: "Native iOS applications built with Swift and SwiftUI, following Apple's Human Interface Guidelines for seamless, intuitive user experiences on iPhone and iPad.",
    features: ["Swift & SwiftUI", "Apple HIG compliance", "Core Data & CloudKit", "App Clips & Widgets"],
  },
  {
    icon: "🤖",
    title: "Android App Development",
    desc: "High-performance native Android apps using Kotlin and Jetpack Compose, optimized for the full spectrum of Android devices and screen sizes.",
    features: ["Kotlin & Jetpack Compose", "Material Design 3", "Room & Hilt DI", "Android Auto & Wear OS"],
  },
  {
    icon: "⚛️",
    title: "React Native Apps",
    desc: "Cross-platform mobile applications with React Native — one codebase, native performance on both iOS and Android, with 90%+ code reuse.",
    features: ["90%+ code reuse", "Native modules bridge", "Hot reloading & OTA updates", "Expo & bare workflow"],
  },
  {
    icon: "🦋",
    title: "Flutter Development",
    desc: "Beautiful, natively compiled apps from a single Dart codebase using Google's Flutter framework, with pixel-perfect custom UI and smooth 60fps animations.",
    features: ["Single codebase for iOS/Android", "Custom widget design", "60fps smooth animations", "Web & desktop targets"],
  },
  {
    icon: "🔔",
    title: "Push Notifications & Engagement",
    desc: "Advanced push notification systems with segmentation, scheduling, rich media, and deep linking to keep users engaged and drive retention.",
    features: ["Firebase Cloud Messaging", "Rich push with images", "Deep linking", "A/B tested messaging"],
  },
  {
    icon: "📊",
    title: "App Analytics & Optimization",
    desc: "Comprehensive analytics integration to track user behavior, crash reports, funnel analysis, and A/B testing — data-driven decisions for continuous improvement.",
    features: ["Firebase Analytics", "Crashlytics & Sentry", "Funnel & cohort analysis", "A/B testing frameworks"],
  },
]

const techStack = [
  "React Native", "Flutter", "Swift", "Kotlin", "Dart", "Expo",
  "Firebase", "AWS Amplify", "Xcode", "Android Studio", "Fastlane",
  "CodePush", "Sentry", "RevenueCat", "OneSignal", "TestFlight",
]

const processSteps = [
  { number: "01", title: "Requirements & Research", desc: "Deep-dive into your business goals, target audience, and competitor landscape to define features, user personas, and a detailed product roadmap." },
  { number: "02", title: "Prototyping & Design", desc: "Interactive prototypes in Figma with full user flows, validated through user testing to ensure intuitive navigation and delightful UX." },
  { number: "03", title: "Development & QA", desc: "Agile sprints with bi-weekly demos, automated testing pipelines, device-farm testing across 50+ real devices, and continuous integration." },
  { number: "04", title: "Launch & Iteration", desc: "App Store and Google Play submission, staged rollouts, crash monitoring, and post-launch feature iteration based on real user analytics." },
]

const whyUs = [
  { icon: "📱", title: "50+ Apps Shipped", desc: "From fintech to food delivery, we've shipped production apps across every major category." },
  { icon: "⚡", title: "60fps Performance", desc: "Optimized rendering, lazy loading, and native modules ensure buttery-smooth user experiences." },
  { icon: "🔄", title: "OTA Updates", desc: "Push updates instantly with CodePush and Expo — no waiting for App Store review cycles." },
  { icon: "🛡️", title: "Post-Launch Support", desc: "Ongoing maintenance, crash monitoring, OS update compatibility, and feature enhancements." },
]

const statsData = [
  { value: 50, suffix: "+", label: "Apps Delivered" },
  { value: 4.8, suffix: "★", label: "Avg. Store Rating" },
  { value: 2, suffix: "M+", label: "Total Downloads" },
  { value: 99, suffix: "%", label: "Crash-Free Rate" },
]

const StatCounter = ({ value, suffix, label }) => {
  const ref = useRef(null)
  const counted = useRef(false)
  const startCount = useCallback(() => {
    if (counted.current || !ref.current) return
    counted.current = true
    const el = ref.current
    const target = Math.floor(value)
    const duration = 2000
    const start = performance.now()
    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(eased * target) + suffix
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

const MobileApp = () => {
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
        <title>Mobile App Development — NOIWIC IT Solutions</title>
        <meta name="description" content="Native and cross-platform mobile apps for iOS and Android. React Native, Flutter, Swift, and Kotlin — from concept to App Store." />
      </Head>

      <section className="svc-detail-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/14377148-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>
        <div className="container">
          <p className="svc-hero-eyebrow fade-in-up">Mobile Development</p>
          <h1 className="svc-hero-title">
            <span className="line-white fade-in-up stagger-1">Apps Users</span>
            <span className="line-cyan fade-in-up stagger-2">Love to Use</span>
          </h1>
          <p className="svc-hero-sub fade-in-up stagger-3">
            We build native and cross-platform mobile applications that deliver silky-smooth 60fps performance,
            intuitive UX, and the reliability your users expect — from MVP to millions of downloads.
          </p>
          <div className="svc-hero-ctas fade-in-up stagger-4">
            <a href={`https://wa.me/${phoneNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
              <button className="button-primary">Build Your App</button>
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
            <Title title="Mobile App Services" />
            <p>From consumer-facing apps to enterprise mobility solutions, we build for every platform with native quality and cross-platform efficiency.</p>
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
            <p>Industry-leading frameworks and tools for building fast, reliable, and maintainable mobile applications.</p>
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
            <p>A structured agile workflow that takes your app from idea to App Store with predictable timelines and full transparency.</p>
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
            <h2>Ready to launch your mobile app?</h2>
            <p>Share your app idea with us and get a free technical consultation and project estimate.</p>
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

export default MobileApp
