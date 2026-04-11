import { useState } from "react"
import { useRouter } from "next/router"
import { Title } from "@/components/common/Title"

const Contact = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    timeframe: '',
    projectDetails: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const phoneNumber = '9818404363'
  const waMessage = encodeURIComponent("Hi, I'd like to discuss a project with NOIWIC IT Solutions.")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      router.push('/thankyou')
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <section className='contact bg-top'>
      <div className='container'>
        <div className='heading-title'>
          <span className='eyebrow'>CONTACT</span>
          <Title title="Let's start right now!" className='title-bg' />
        </div>
        <div className='content py flex1'>
          <div className='left w-30'>
            <div className='contact-details'>
              <div className='box'>
                <span className='icons' style={{ fontSize: '28px' }}>📞</span>
                <h3>+91 8595900509</h3>
                <span>Call us: Monday - Sunday 9:00 - 19:00</span>
              </div>
              <div className='box'>
                <span className='icons' style={{ fontSize: '28px' }}>📍</span>
                <h3>New Delhi, India</h3>
                <span>Plot 28, Mehrauli - Badarpur Rd, Saiyad Ul Ajaib Village, Sainik Farm, New Delhi, Delhi 110030</span>
              </div>
              <div className='box'>
                <span className='icons' style={{ fontSize: '28px' }}>✉️</span>
                <h3>noiwiconline@gmail.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
            </div>
            <ul>
              <li className='icon'>
                <a href='https://www.instagram.com/noiwicitsolutions' target='_blank' rel='noopener noreferrer'>
                  <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </li>
              <li className='icon'>
                <a href='https://www.linkedin.com/company/noiwic/' target='_blank' rel='noopener noreferrer'>
                  <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </li>
            </ul>
          </div>
          <div className='right w-70'>
            <h3 style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '2px' }}>Make an online enquiry</h3>
            <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal.</p>
            <form onSubmit={handleSubmit}>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Name</span>
                  <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                </div>
                <div className='inputs'>
                  <span>Email</span>
                  <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className='grid-2'>
                <div className='inputs'>
                  <span>Your budget (INR)</span>
                  <input type='text' name='budget' value={formData.budget} onChange={handleChange} />
                </div>
                <div className='inputs'>
                  <span>Timeframe (days)</span>
                  <input type='text' name='timeframe' value={formData.timeframe} onChange={handleChange} />
                </div>
              </div>
              <div className='inputs'>
                <span>Tell us about your project</span>
                <textarea cols='30' rows='10' name='projectDetails' value={formData.projectDetails} onChange={handleChange} required></textarea>
              </div>
              {error && <p className="form-error" style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button className='button-primary' type='submit' disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit'}
                </button>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00e5ff', fontSize: '0.85rem', textDecoration: 'underline' }}
                >
                  Prefer WhatsApp?
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className='contact-map'>
          <div className='heading-title' style={{ marginBottom: '2rem' }}>
            <span className='eyebrow'>FIND US</span>
            <Title title='Our Location' className='title-bg' />
          </div>
          <div className='map-wrapper'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121542!2d77.2199079!3d28.5013137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a585555555%3A0x0!2sPlot+28%2C+Mehrauli+-+Badarpur+Rd%2C+Saiyad+Ul+Ajaib+Village%2C+Sainik+Farm%2C+New+Delhi%2C+Delhi+110030!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
              width='100%'
              height='400'
              style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='NOIWIC IT Solutions Office Location'
            />
            <div className='map-address-bar'>
              <span style={{ fontSize: '20px' }}>📍</span>
              <span>Plot 28, Mehrauli - Badarpur Rd, Saiyad Ul Ajaib Village, Sainik Farm, New Delhi, Delhi 110030</span>
              <a
                href='https://www.google.com/maps/search/Plot+28,+Mehrauli+-+Badarpur+Rd,+Saiyad+Ul+Ajaib+Village,+Sainik+Farm,+New+Delhi,+Delhi+110030'
                target='_blank'
                rel='noopener noreferrer'
                className='button-ghost'
                style={{ padding: '8px 20px', fontSize: '0.8rem', marginLeft: 'auto', whiteSpace: 'nowrap' }}
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
