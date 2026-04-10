import { testimonial } from "@/assets/data/dummydata"
import { Title } from "@/components/common/Title"
import { useEffect, useRef } from "react"

const Testimonial = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )
    const elements = section.querySelectorAll('.fade-in-up')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="heading-title">
          <span className="eyebrow">Client Stories</span>
          <Title title="What Our Clients Say" />
        </div>

        <div className="testimonials-grid">
          {testimonial.map((item) => (
            <div className="testimonial-card fade-in-up" key={item.id}>
              <div className="bracket-tl" />
              <div className="quote-icon">&ldquo;</div>
              <p className="testimonial-text">{item.desc}</p>
              <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.post}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
