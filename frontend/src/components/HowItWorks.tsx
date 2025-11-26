export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Event',
      description: 'Browse our exclusive packages and select the sporting event you want to attend'
    },
    {
      number: '2',
      title: 'Customize Your Package',
      description: 'Add flights, hotels, and premium add-ons to create your perfect experience'
    },
    {
      number: '3',
      title: 'Book & Travel',
      description: 'Complete booking and get ready for an unforgettable sports travel experience'
    }
  ]

  return (
    <section className="how-it-works">
      <div className="section-head">
        <h2>How It Works</h2>
        <p className="muted">Book your dream sports event in 3 simple steps</p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

