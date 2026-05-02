import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      id: 'collection',
      title: '1. Information Collection',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ),
      content: (
        <>
          <p className="text-muted leading-relaxed mb-4">
            To provide you with high-quality home appliances and services, we collect:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Identification Data:</strong> Name, phone number, and email address.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Delivery Information:</strong> Physical address for shipping and installation services.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Payment Details:</strong> Records of transactions made via integrated digital payment platforms.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Technical Information:</strong> Cookies and usage data to optimize your experience on asannepal.com.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'usage',
      title: '2. Use of Information',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
      ),
      content: (
        <>
          <p className="text-muted leading-relaxed mb-4">
            We use the data collected for the following purposes:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Order Management:</strong> To process, ship, and track your appliance orders.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Warranty Services:</strong> To maintain a database of your purchases for future technical support and warranty claims.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Improvement:</strong> To analyze website traffic and improve our custom-coded platform's performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Communication:</strong> To send order updates, service alerts, or respond to your inquiries.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'protection',
      title: '3. Data Protection',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
      content: (
        <>
          <p className="text-muted leading-relaxed mb-4">
            We prioritize the safety of your data with industry-standard protocols.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Encryption:</strong> We use secure protocols to protect information during transmission.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Secure Hosting:</strong> Data is stored on secured servers with restricted access.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
              <span><strong className="text-ink">Third-Party Disclosure:</strong> We do not sell your data. Information is shared only with essential partners (delivery couriers, payment processors).</span>
            </li>
          </ul>
        </>
      ),
    },
  ]

  const scrollToId = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="mx-auto mt-10 w-full max-w-5xl px-6 pb-20 md:px-10">
      <div className="section-head text-center scroll-reveal reveal-up" data-animate="true">
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-bold uppercase tracking-widest border border-accent/20">
            Secure Shopping
          </span>
        </div>
        <h1 className="section-title">Privacy & Data Security</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          We believe in complete transparency. Our policy is designed to protect your rights under the 
          <strong> E-commerce Act, 2025 of Nepal</strong>.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-muted text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Last Updated: May 2, 2026
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-28 p-6 rounded-3xl bg-surface border border-stroke shadow-sm scroll-reveal reveal-left" data-animate="true">
            <h3 className="font-bold text-ink mb-4">Quick Navigation</h3>
            <nav className="space-y-1">
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  onClick={(e) => scrollToId(e, s.id)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-soft text-muted hover:text-accent transition-colors font-medium text-sm"
                >
                  <span className="shrink-0">{s.icon}</span>
                  {s.title.split('. ')[1]}
                </a>
              ))}
              <a 
                href="#compliance" 
                onClick={(e) => scrollToId(e, 'compliance')}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-soft text-muted hover:text-accent transition-colors font-medium text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Legal Compliance
              </a>
            </nav>

            <div className="mt-8 pt-8 border-t border-stroke">
              <div className="flex items-center gap-3 text-ink font-bold mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                Verified Security
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Our platform uses 256-bit SSL encryption to ensure your personal data remains private.
              </p>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8 space-y-12">
          {sections.map((s, idx) => (
            <section key={s.id} id={s.id} className="scroll-reveal reveal-up" data-animate="true" style={{'--stagger': `${idx * 0.1}s`}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent">
                  {s.icon}
                </div>
                <h2 className="text-2xl font-bold text-ink">{s.title}</h2>
              </div>
              <div className="p-8 rounded-3xl bg-surface border border-stroke shadow-sm text-muted">
                {s.content}
              </div>
            </section>
          ))}

          <section className="scroll-reveal reveal-up" data-animate="true">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-ink">4. User Rights</h2>
            </div>
            <div className="p-8 rounded-3xl bg-surface border border-stroke shadow-sm text-muted">
              <p className="leading-relaxed mb-4">
                As a user of ASAN, you have full control over your information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Access', text: 'Request a copy of the data we hold.' },
                  { title: 'Correction', text: 'Update inaccurate or incomplete info.' },
                  { title: 'Erasure', text: 'Request account and data deletion.' },
                  { title: 'Portability', text: 'Move your data to another service.' },
                ].map(r => (
                  <div key={r.title} className="p-4 rounded-2xl bg-surface-soft border border-stroke/50">
                    <p className="font-bold text-ink text-sm mb-1">{r.title}</p>
                    <p className="text-xs text-muted">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="compliance" className="scroll-reveal reveal-up" data-animate="true">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-ink">5. Compliance with Nepali Law</h2>
            </div>
            <div className="p-8 rounded-3xl bg-blue-deep text-white shadow-xl">
              <p className="leading-relaxed opacity-90">
                This policy is governed by the laws of Nepal. In the event of a dispute, our grievance
                handling process follows the <strong>E-commerce Guidelines, 2026</strong>, ensuring fair and timely
                resolution for all consumers.
              </p>
            </div>
          </section>

          <section className="scroll-reveal reveal-up" data-animate="true">
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-surface to-surface-soft border border-stroke shadow-lg text-center">
              <p className="kicker mb-2">Have Questions?</p>
              <h2 className="text-3xl font-bold text-ink mb-6">Contact Our Support Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-stroke shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-ink font-bold">info@asannepal.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-stroke shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted font-bold uppercase tracking-wider">Visit Us</p>
                    <p className="text-ink font-bold">Shivasatakshi, Nepal</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="solid-btn">Open Support Ticket</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  )
}

export default PrivacyPolicy
