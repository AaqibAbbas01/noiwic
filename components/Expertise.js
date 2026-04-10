import { services } from "@/assets/data/dummydata"
import { Title } from "@/components/common/Title"
import Link from "next/link"

const Expertise = () => {
  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="heading-title">
          <span className="eyebrow">What We Do</span>
          <Title title="Our Services" />
          <p>From concept to deployment, we deliver end-to-end digital solutions that drive growth and transform businesses.</p>
        </div>

        <div className="services-grid">
          {services.map((item, i) => (
            <Link href={item.link || '#'} key={i} className="service-card-link">
              <div
                className={`service-card fade-in-up stagger-${i + 1} ${item.highlighted ? 'highlighted' : ''}`}
              >
                <div className="bracket-tl" />
                <span className="service-icon">{item.icon}</span>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
                <span className="service-arrow">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
