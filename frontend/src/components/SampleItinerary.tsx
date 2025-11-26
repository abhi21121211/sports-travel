export default function SampleItinerary() {
  const itinerary = [
    {
      title: 'Hospitality Pass',
      description: 'Premium access & lounge',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      icon: '🎫'
    },
    {
      title: 'Meet & Greet',
      description: 'Meet players & signed merch',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      icon: '🤝'
    },
    {
      title: 'Exclusive Fine Treats',
      description: 'Private dining experience',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      icon: '🍽️'
    },
    {
      title: 'City Tour',
      description: 'Guided highlights tour',
      image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80',
      icon: '🏙️'
    }
  ]

  return (
    <section className="sample-itinerary" aria-label="Itinerary">
      <div className="section-head">
        <h2>Sample Itinerary</h2>
        <p className="muted">Experience beyond the game - curated activities for every traveler</p>
      </div>

      <div className="itinerary-grid" role="list">
        {itinerary.map((item, index) => (
          <div key={index} className="itinerary-card" role="listitem">
            <div className="itinerary-image">
              <img src={item.image} alt={item.title} />
              <div className="itinerary-overlay">
                <span className="itinerary-icon">{item.icon}</span>
              </div>
            </div>
            <div className="itinerary-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
