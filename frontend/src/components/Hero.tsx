import { useState } from 'react'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false) // Close menu after clicking
  }

  const handlePlanTrip = () => {
    scrollToSection('contact')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi, I would like to inquire about sports travel packages', '_blank')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <section className="hero" role="banner">
        <div className="topbar">
          <div className="brand" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8 2 5 5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7z" fill="#fff"/>
            </svg>
            <span style={{fontWeight:800}}>SPORTS</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav" aria-label="top navigation">
            <span style={{cursor: 'pointer'}} onClick={() => scrollToSection('packages')}>Trips</span>
            <span style={{cursor: 'pointer'}} onClick={() => scrollToSection('itinerary')}>Places</span>
            <span style={{cursor: 'pointer'}} onClick={() => scrollToSection('addons')}>Services</span>
            <button className="btn-cta" onClick={handlePlanTrip}>Plan My Trip</button>
          </nav>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <span onClick={() => scrollToSection('packages')}>Trips</span>
              <span onClick={() => scrollToSection('itinerary')}>Places</span>
              <span onClick={() => scrollToSection('addons')}>Services</span>
              <button className="btn-cta" onClick={handlePlanTrip}>Plan My Trip</button>
            </div>
          )}
        </div>

        <div className="center">
          <h1>SPORTS TRAVEL PACKAGES FOR<br/>GLOBAL EVENTS</h1>
          <p>Exclusive packages — flights, hotels & match tickets included. Travel with official partners and experience world class sporting events.</p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button 
        className="whatsapp-float" 
        onClick={handleWhatsApp}
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.832.741 5.488 2.037 7.796L0 32l8.344-2.032A15.92 15.92 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.558 0-4.963-.725-7.002-1.98l-.502-.299-5.201 1.268 1.316-4.806-.328-.52A13.264 13.264 0 012.667 16c0-7.364 5.969-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.322-9.989c-.401-.201-2.373-1.17-2.742-1.304-.369-.133-.637-.2-.906.201-.268.401-1.037 1.304-1.272 1.572-.234.268-.469.302-.87.1-.402-.201-1.696-.625-3.23-1.994-1.194-1.065-2-2.38-2.235-2.782-.234-.401-.025-.618.176-.818.18-.18.402-.469.603-.703.201-.235.268-.402.402-.67.133-.269.067-.503-.034-.704-.1-.201-.906-2.184-1.241-2.99-.327-.785-.659-.679-.906-.692-.234-.012-.502-.015-.77-.015s-.704.1-1.072.503c-.369.402-1.406 1.371-1.406 3.344s1.44 3.88 1.64 4.148c.201.268 2.832 4.324 6.862 6.064.959.414 1.708.661 2.291.846.962.306 1.838.263 2.53.16.771-.115 2.373-.97 2.708-1.906.335-.937.335-1.74.234-1.906-.1-.167-.369-.268-.77-.469z" fill="white"/>
        </svg>
      </button>
    </>
  )
}
