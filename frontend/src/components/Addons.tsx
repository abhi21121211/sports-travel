export default function Addons() {
  const addons = [
    {
      title: 'VIP Lounge Access',
      description: 'Private access & premium seating',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80',
      icon: '👑',
      price: '+$299'
    },
    {
      title: 'Luxury Transport',
      description: 'Private chauffeur & premium vehicle',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80',
      icon: '🚗',
      price: '+$199'
    },
    {
      title: 'Meet & Greet Players',
      description: 'Exclusive backstage access & photos',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80',
      icon: '⭐',
      price: '+$499'
    },
    {
      title: 'Premium Hospitality',
      description: 'Fine dining & exclusive lounge',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
      icon: '🍾',
      price: '+$399'
    }
  ]

  return (
    <div className="addons-section">
      <div className="section-head">
        <h2>Add-ons & VIP Experiences</h2>
        <p className="muted">Elevate your journey with exclusive upgrades</p>
      </div>

      <div className="addons-grid" role="list">
        {addons.map((addon, index) => (
          <div key={index} className="addon-card" role="listitem">
            <div className="addon-image">
              <img src={addon.image} alt={addon.title} />
              <div className="addon-badge">{addon.icon}</div>
              <div className="addon-price">{addon.price}</div>
            </div>
            <div className="addon-content">
              <h3>{addon.title}</h3>
              <p>{addon.description}</p>
              <button className="addon-btn">Add to Package</button>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-card">
        <div className="faq-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
        </div>
        <div className="faq-content">
          <strong>Need Help? We're Here 24/7</strong>
          <p>Check our FAQs or call us at <a href="tel:+15552223990">+1 (555) 222-3990</a></p>
        </div>
      </div>
    </div>
  )
}
