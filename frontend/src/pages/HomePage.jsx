const HomePage = ({ stats, categoryCards, washerHighlights, tvHighlights }) => {
  return (
    <>
      <section className="hero mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="hero-copy scroll-reveal reveal-left" data-animate="true">
          <p className="kicker">Home Appliance Brand</p>
          <h1 className="hero-title">Premium home electronics for comfort, efficiency and performance.</h1>
          <p className="hero-sub">
            Discover ASAN washing machines, air conditioners, coolers, fans and smart TVs with genuine warranty, 
            dependable delivery and expert installation support.
          </p>
          <div className="hero-actions">
            <button type="button" className="solid-btn pulse-ring">
              Browse Products
            </button>
          </div>
          <div className="hero-metrics">
            {stats.map((item) => (
              <article key={item.label} className="metric-card scroll-reveal reveal-zoom" data-animate="true">
                <h3 className="metric-value">{item.value}</h3>
                <p className="metric-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <figure className="hero-media tilt-card scroll-reveal reveal-right" data-animate="true">
          <img src="/assets/electronics/fan-banner.png" alt="Fan Collection" />
          <div className="floating-badge badge-one">Ceiling + Pedestal Fans</div>
          <div className="floating-badge badge-two">High-Efficiency Series</div>
        </figure>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-6 md:px-10">
        <div className="section-head scroll-reveal reveal-up" data-animate="true">
          <h2 className="section-title">Popular Categories</h2>
          <p className="section-subtitle">
            Product categories curated for performance, durability and dependable after-sales assistance.
          </p>
        </div>

        <div className="category-grid">
          {categoryCards.map((card) => (
            <article key={card.title} className="category-card tilt-card scroll-reveal reveal-rotate" data-animate="true">
              <p className="category-code">{card.code}</p>
              <h3 className="category-title">{card.title}</h3>
              <p className="category-text">{card.text}</p>
              <p className="category-tag">{card.tag}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase mx-auto mt-16 w-full max-w-6xl px-6 md:px-10">
        <figure className="showcase-media tilt-card scroll-reveal reveal-left" data-animate="true">
          <img src="/assets/electronics/washer-banner.png" alt="Washing Machine Collection" />
        </figure>

        <article className="showcase-content scroll-reveal reveal-right" data-animate="true">
          <p className="kicker">Washer Collection</p>
          <h2 className="showcase-title">Engineered for modern households and faster daily wash cycles</h2>
          <p className="showcase-text">
            Select the right model for your home, from compact daily washing to large family load programs.
          </p>
          <ul className="feature-list">
            {washerHighlights.map((item) => (
              <li key={item} className="scroll-reveal reveal-up" data-animate="true">
                {item}
              </li>
            ))}
          </ul>
          <button type="button" className="solid-btn">
            View Washer Range
          </button>
        </article>
      </section>

      <section className="showcase reverse mx-auto mt-16 w-full max-w-6xl px-6 md:px-10">
        <figure className="showcase-media tilt-card scroll-reveal reveal-right" data-animate="true">
          <img src="/assets/electronics/tv-banner.png" alt="Smart TV Lineup" />
        </figure>

        <article className="showcase-content scroll-reveal reveal-left" data-animate="true">
          <p className="kicker">Entertainment Series</p>
          <h2 className="showcase-title">Smart TVs designed for cinema-quality visuals and connected living</h2>
          <p className="showcase-text">
            Upgrade your living space with sleek display panels, rich color output and responsive smart
            controls.
          </p>
          <ul className="feature-list">
            {tvHighlights.map((item) => (
              <li key={item} className="scroll-reveal reveal-up" data-animate="true">
                {item}
              </li>
            ))}
          </ul>
          <button type="button" className="outline-btn">
            Explore TV Range
          </button>
        </article>
      </section>
    </>
  )
}

export default HomePage