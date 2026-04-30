import { Link } from 'react-router-dom'
import { detail } from '../data/defaultShopData'

const AboutPage = () => {
  return (
    <section className="mx-auto mt-10 w-full max-w-6xl px-6 md:px-10">
      <div className="section-head scroll-reveal reveal-up" data-animate="true">
        <p className="kicker">About ASAN Electronics</p>
        <h1 className="section-title">Smart appliances built for Nepali homes.</h1>
        <p className="section-subtitle">
          Founded in Shivasatakshi by the Laxmi Enterprises team, ASAN delivers reliable home electronics
          designed for local climate, voltage, and lifestyle.
        </p>
      </div>

      <section className="showcase mx-auto mt-10 w-full">
        <figure className="showcase-media tilt-card scroll-reveal reveal-left" data-animate="true">
          <div className="banner-placeholder"></div>
        </figure>
        <article className="showcase-content scroll-reveal reveal-right" data-animate="true">
          <p className="kicker">Our Story</p>
          <h2 className="showcase-title">A direct bridge between global quality and local affordability.</h2>
          <p className="showcase-text">
            We partner directly with trusted manufacturers to bring durable, efficient, and serviceable
            appliances that perform in Nepalese conditions. The goal: premium features without the
            middleman markup.
          </p>
          <ul className="feature-list">
            <li className="scroll-reveal reveal-up" data-animate="true">
              Low-voltage start-up protection and heat-resilient components.
            </li>
            <li className="scroll-reveal reveal-up" data-animate="true">
              Dedicated service center with genuine spare parts support.
            </li>
            <li className="scroll-reveal reveal-up" data-animate="true">
              Nationwide delivery and installation guidance.
            </li>
          </ul>
          <div className="hero-actions">
            <Link to="/product" className="solid-btn">
              Browse Products
            </Link>
            <Link to="/contact" className="outline-btn">
              Contact Us
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-16 w-full">
        <div className="section-head scroll-reveal reveal-up" data-animate="true">
          <h2 className="section-title">What makes ASAN different</h2>
          <p className="section-subtitle">
            Built for real homes, real conditions, and long-term confidence.
          </p>
        </div>

        <div className="category-grid">
          {[
            {
              code: 'D2C',
              title: 'Direct from Source',
              text: 'Fewer markups, quicker access to the latest appliance technology.',
              tag: 'Factory-backed quality',
            },
            {
              code: 'LOCAL',
              title: 'Made for Nepal',
              text: 'Dust-resistant motors, voltage safety, and climate-ready design.',
              tag: 'Built for our environment',
            },
            {
              code: 'CARE',
              title: 'Service First',
              text: 'Responsive installation, warranty tracking, and genuine parts.',
              tag: 'Support that stays',
            },
          ].map((item) => (
            <article key={item.code} className="category-card tilt-card scroll-reveal reveal-rotate" data-animate="true">
              <p className="category-code">{item.code}</p>
              <h3 className="category-title">{item.title}</h3>
              <p className="category-text">{item.text}</p>
              <p className="category-tag">{item.tag}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full">
        <div className="section-head scroll-reveal reveal-up" data-animate="true">
          <h2 className="section-title">Trusted by growing households</h2>
          <p className="section-subtitle">
            Our promise is simple: dependable appliances, transparent pricing, and real after-sales care.
          </p>
        </div>
        <div className="hero-metrics">
          {[{ value: '25K+', label: 'Homes Served' }, { value: '150+', label: 'Product Variants' }, { value: '2 Years', label: 'Warranty Coverage' }].map(
            (item) => (
              <article key={item.label} className="metric-card scroll-reveal reveal-zoom" data-animate="true">
                <h3 className="metric-value">{item.value}</h3>
                <p className="metric-label">{item.label}</p>
              </article>
            ),
          )}
        </div>
        <div className="contact-panel soft mt-6 scroll-reveal reveal-up" data-animate="true">
          <p className="kicker">Local Impact</p>
          <ul className="feature-list">
            {detail.map((item) => (
              <li key={item} className="scroll-reveal reveal-up" data-animate="true">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}

export default AboutPage