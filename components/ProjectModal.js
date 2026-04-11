import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const projectTypes = [
  'Web Development',
  'Mobile App',
  'E-Commerce',
  'Digital Marketing',
  'Branding & Identity',
  'SaaS Product',
  'CRM Solution',
  'AI Agents',
  'Other'
]

const budgetRanges = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000 – ₹5,00,000',
  '₹5,00,000 – ₹10,00,000',
  '₹10,00,000+'
]

const timelines = [
  'Less than 1 month',
  '1 – 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Ongoing / Retainer'
]

const ProjectModal = ({ isOpen, onClose }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/project-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      onClose()
      router.push('/thankyou')
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('project-modal-overlay')) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal">
        <button className="project-modal-close" onClick={onClose}>&times;</button>
        <div className="bracket-tl" />
        <div className="bracket-br" />
        <h2>Start a Project</h2>
        <p className="project-modal-sub">Tell us about your vision and we&apos;ll bring it to life.</p>

        <form onSubmit={handleSubmit}>
          <div className="pm-grid">
            <div className="pm-field">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
            </div>
            <div className="pm-field">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
            </div>
          </div>

          <div className="pm-grid">
            <div className="pm-field">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98184 04363" />
            </div>
            <div className="pm-field">
              <label>Project Type *</label>
              <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                <option value="">Select type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pm-grid">
            <div className="pm-field">
              <label>Budget</label>
              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Select range</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="pm-field">
              <label>Timeline</label>
              <select name="timeline" value={formData.timeline} onChange={handleChange}>
                <option value="">Select timeline</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pm-field">
            <label>Project Description *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" placeholder="Tell us about your project requirements, goals, and any specific features you need..." />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button className="button-primary" type="submit" disabled={submitting} style={{ width: '100%', marginTop: '0.5rem' }}>
            {submitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProjectModal
