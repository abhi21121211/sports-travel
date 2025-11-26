export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" aria-label="Why choose us">
      <div className="section-head">
        <h2>Why Choose Us</h2>
        <p className="muted">Trusted by thousands of sports enthusiasts worldwide</p>
      </div>

      <div className="why-grid">
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Events Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">✈️</div>
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Travelers</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🌍</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Customer Rating</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            </div>
            <div className="feature-content">
              <strong>Official Partners</strong>
              <p>Authorized ticket sellers with guaranteed authenticity</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="feature-content">
              <strong>All-Inclusive Packages</strong>
              <p>Flights, hotels, tickets & transfers - all in one</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
            </div>
            <div className="feature-content">
              <strong>VIP Experiences</strong>
              <p>Premium seating, hospitality, and meet & greets</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="feature-content">
              <strong>24/7 Support</strong>
              <p>Dedicated travel experts available round the clock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
