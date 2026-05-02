import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { dialFromPhone } from '../utils/shopData'

const ContactPage = ({
  contactEmail,
  contactPhone,
  contactPhoneDial,
  contactWhatsApp,
  contactWhatsAppDial,
  companyDetails,
  contactPoints,
}) => {
  const location = useLocation()
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' })
  const [messageValue, setMessageValue] = useState('')
  const [topicValue, setTopicValue] = useState('Product Inquiry')
  const safePhoneDial = contactPhoneDial || dialFromPhone(contactPhone)

  useEffect(() => {
    if (location.state?.prefilledMessage !== undefined) {
      setMessageValue(location.state.prefilledMessage)
    }
    if (location.state?.prefilledTopic) {
      setTopicValue(location.state.prefilledTopic)
    }
  }, [location.state])

  useEffect(() => {
    const hash = location.hash
    if (hash === '#store-location' || hash === '#contact-form') {
      const elementId = hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [location.hash])

  const handleQuickHelp = (topic, message) => {
    setTopicValue(topic)
    setMessageValue(message)
    const element = document.getElementById('contact-form')
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setFormStatus({ state: 'sending', message: 'Sending your message...' })

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setFormStatus({
        state: 'sent',
        message: 'Thank you! Your message has been received. We will reply within 1 business day.',
      })
      form.reset()
      setMessageValue('')
    } catch {
      setFormStatus({
        state: 'error',
        message: 'Oops, message was not sent. Please try again.',
      })
    }
  }

  return (
    <section className="contact-page mx-auto mt-10 w-full max-w-6xl px-6 md:px-10">
      <div className="section-head scroll-reveal reveal-up" data-animate="true">
        <h2 className="section-title">Contact ASAN</h2>
        <p className="section-subtitle">
          Order support, product inquiries, service requests, or just say hi. We're here to help with any questions or feedback you have about our products and services. Reach out through the form, email, phone, or WhatsApp. we look forward to connecting with you!

        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <section className="contact-panel scroll-reveal reveal-up" data-animate="true">
            <div className="contact-panel-head">
              <p className="kicker">Company Details</p>
              <h3 className="contact-panel-title">ASAN HOME APPLIANCES
              </h3>
              <p className="contact-panel-sub">
                Official company info, billing and warranty details are here. Need quick help? Scroll for direct contacts.
              </p>
            </div>
            <div className="detail-list">
              {companyDetails.map((item) => (
                <div key={item.label} className="detail-row">
                  <p className="detail-label">{item.label}</p>
                  {item.href ? (
                    <a className="detail-value detail-link" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="detail-value">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          <section className="contact-panel soft scroll-reveal reveal-up" data-animate="true">
            <div className="contact-panel-head">
              <p className="kicker">Quick Contact</p>
              <h3 className="contact-panel-title">Talk to our team</h3>
              <p className="contact-panel-sub">
                need fast response? Contact our sales and support teams directly through phone or WhatsApp for immediate assistance with product inquiries, order support, and service requests.
              </p>
            </div>
            <div className="contact-grid">
              {contactPoints.map((item) => (
                <article
                  key={item.title}
                  id={item.title === 'Showroom Address' ? 'store-location' : undefined}
                  className="contact-card scroll-reveal reveal-zoom"
                  data-animate="true"
                >
                  <h3 className="contact-title">{item.title}</h3>
                  {item.href ? (
                    <a className="contact-value contact-link" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="contact-value">{item.value}</p>
                  )}
                  <p className="contact-note">{item.note}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <article id="contact-form" className="contact-form-card scroll-reveal reveal-up" data-animate="true">
          <div className="contact-panel-head">
            <p className="kicker">Message Us</p>
            <h3 className="contact-panel-title">Send a message</h3>
          </div>
          <form
            className="contact-form"
            action={`https://formsubmit.co/${contactEmail}`}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New message from ASAN Electronics site" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="form-honey" tabIndex="-1" autoComplete="off" />

            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="contact-name">
                  Full Name
                </label>
                <input
                  className="form-input"
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-phone">
                  Phone Number
                </label>
                <input
                  className="form-input"
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+977-98..."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  className="form-input"
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="contact-topic">
                  Topic
                </label>
                <select
                  className="form-select"
                  id="contact-topic"
                  name="topic"
                  value={topicValue}
                  onChange={(e) => setTopicValue(e.target.value)}
                >
                  <option>Product Inquiry</option>
                  <option>Order Status</option>
                  <option>Installation / Service</option>
                  <option>Warranty / Parts</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className="form-textarea"
                id="contact-message"
                name="message"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                placeholder="Tell us what you need, model name, quantity, delivery area, etc."
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="solid-btn" disabled={formStatus.state === 'sending'}>
                {formStatus.state === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              <p className="form-hint">
                Is it urgent? Call us on{' '}
                <a className="text-link" href={safePhoneDial ? `tel:${safePhoneDial}` : '#'}>
                  {contactPhone}
                </a>
                .
              </p>
            </div>

            {formStatus.message ? (
              <p className={`form-status ${formStatus.state}`} role="status" aria-live="polite">
                {formStatus.message}
                {formStatus.state === 'error' ? (
                  <>
                    {' '}Email us at{' '}
                    <a className="text-link" href={`mailto:${contactEmail}`}>
                      {contactEmail}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            ) : null}
          </form>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
