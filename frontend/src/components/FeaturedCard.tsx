export default function FeaturedCard() {
  const handleRequestPackage = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Pre-fill the form with F1 Japan package
      setTimeout(() => {
        const packageSelect = document.getElementById('package') as HTMLSelectElement
        if (packageSelect) {
          packageSelect.value = 'f1-japan'
          packageSelect.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, 500)
    }
  }

  const handleWhatsAppClick = () => {
    // Open WhatsApp with a pre-filled message
    const message = encodeURIComponent('Hi! I am interested in the F1 Japan VIP package. Can you provide more details?')
    const phoneNumber = '15551234567' // Replace with actual WhatsApp business number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="feature-wrap" aria-hidden="false">
      <div 
        className="feature" 
        role="region" 
        aria-label="featured package"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 12, 16, 0.85), rgba(10, 14, 18, 0.75)), url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div 
          className="img" 
          aria-hidden="true"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80')`
          }}
        ></div>
        <div className="info">
          <h3 className="title">F1 JAPAN</h3>
          <p className="description">Pack: Akasai Box 16x (seating) • Meeting & transfers included • Call for details</p>
          <div style={{paddingTop: '20px'}} >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>
          <button className="btn" onClick={handleRequestPackage}>Request My Package</button>
        <div className="fab" title="WhatsApp" onClick={handleWhatsAppClick} style={{cursor: 'pointer'}}>✆</div>

          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}
