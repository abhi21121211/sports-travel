import { useState } from 'react'
import { submitLead } from '@/lib/api'

export default function LeadForm() {
  const [showSuccess, setShowSuccess] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Validation
    const newErrors: typeof errors = { name: '', email: '', phone: '', package: '', message: '' }
    let valid = true
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
      valid = false
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
      valid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.'
      valid = false
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required.'
      valid = false
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number.'
      valid = false
    }
    if (!formData.package) {
      newErrors.package = 'Please select a package.'
      valid = false
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
      valid = false
    }
    setErrors(newErrors)
    if (!valid) {
      setIsSubmitting(false)
      return
    }
    try {
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        event: formData.package,
        message: formData.message
      }
      const response = await submitLead(leadData)
      console.log('Lead submitted successfully:', response)
  setSubmitStatus('success')
  setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: ''
      })
      setErrors({ name: '', email: '', phone: '', package: '', message: '' })
    } catch (error) {
      console.error('Error submitting lead:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <>
      {/* Success popup modal */}
      {showSuccess && (
        <div className="popup-overlay" onClick={() => setShowSuccess(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="popup-close"
              aria-label="Close"
              onClick={() => setShowSuccess(false)}
            >×</button>
            <div className="popup-icon">✓</div>
            <h3>Thank You!</h3>
            <p>We will contact you within 24 hours.</p>
            <button
              type="button"
              className="popup-btn"
              onClick={() => setShowSuccess(false)}
            >OK</button>
          </div>
        </div>
      )}

      <aside className="contact-form-wrapper" aria-label="contact">
        <div className="contact-form-header">
          <div className="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h3>Get in Touch</h3>
          <p className="muted">Tell us what you need and we'll get back within 24 hours</p>
        </div>

        {/* Error banner */}
        {submitStatus === 'error' && (
          <div className="form-banner error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            Sorry, there was an error. Please try again.
          </div>
        )}

      <form className="modern-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Full Name <span className="required">*</span>
          </label>
          <input 
            id="name" 
            name="name"
            placeholder="John Doe" 
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email Address <span className="required">*</span>
          </label>
          <input 
            id="email" 
            name="email"
            type="email"
            placeholder="you@example.com" 
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Phone Number <span className="required">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="package">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
            </svg>
            Package of Interest <span className="required">*</span>
          </label>
          <select 
            id="package" 
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={errors.package ? 'error' : ''}
          >
            <option value="">Select a package</option>
            <option value="f1-japan">F1 Japan — VIP</option>
            <option value="wimbledon">Wimbledon — Hospitality</option>
            <option value="nba">NBA Finals</option>
            <option value="athens">Athens 2024</option>
          </select>
          {errors.package && <div className="form-error">{errors.package}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="msg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
            </svg>
            Your Message <span className="required">*</span>
          </label>
          <textarea 
            id="msg" 
            name="message"
            rows={4} 
            placeholder="Tell us about your travel dates, group size, and any special preferences..."
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <div className="form-error">{errors.message}</div>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              Send Enquiry
            </>
          )}
        </button>
      </form>
    </aside>
    </>
  )
}
