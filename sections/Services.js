import { services } from "@/assets/data/dummydata"
import { Title } from "@/components/common/Title"
import Link from "next/link"
import { useEffect } from "react"

const serviceLinks = {
  "Web Design & Development": "/webdev",
  "Mobile App Development": "/mobileapp",
  "AI Agents & Automation": "/ai-agents",
  "E-Commerce Solutions": "/ecommerce",
  "Digital Marketing": "/digitalmarketing",
  "Branding & Identity": "/branding",
  "SaaS Development": "/saas",
  "CRM & Analytics": "/crm",
  "Automation Testing": "/automation-testing",
}

const Services = () => {
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
    <section className="services-page bg-top">
      <div className="container">
        <div className="heading-title">
          <span className="eyebrow">What We Do</span>
          <Title title="Our Services" />
          <p>From concept to deployment, we deliver end-to-end digital solutions that drive growth and transform businesses across 12+ countries.</p>
        </div>

        <div className="services-page-grid">
          {services.map((item, i) => {
            const href = serviceLinks[item.title] || "/services"
            return (
              <Link href={href} key={i} className="svc-page-card-link">
                <div className={`svc-page-card fade-in-up stagger-${(i % 8) + 1} ${item.highlighted ? 'highlighted' : ''}`}>
                  <div className="bracket-tl" />
                  <div className="bracket-br" />
                  <div className="svc-page-header">
                    <span className="svc-page-icon">{item.icon}</span>
                    {item.highlighted && <span className="svc-featured-tag">Featured</span>}
                  </div>
                  <h3 className="svc-page-title">{item.title}</h3>
                  <p className="svc-page-desc">{item.desc}</p>
                  <span className="svc-page-link">
                    Learn More <span className="arrow">&rarr;</span>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
