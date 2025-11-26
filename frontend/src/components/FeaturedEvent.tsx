export default function FeaturedEvent() {
  return (
    <section id="events" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Featured Event
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6">
              UEFA Champions League Final 2024
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              Experience the pinnacle of European football with our exclusive VIP package. 
              Premium seats, luxury accommodation, and guided tours of historic London.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Category 1 Match Tickets
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                5-Star Hotel Accommodation
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Airport Transfers & City Tours
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Pre-Match Hospitality Experience
              </li>
            </ul>
            <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Book This Package
            </button>
          </div>
          <div className="bg-blue-700 rounded-lg p-8 h-96 flex items-center justify-center">
            <p className="text-2xl">Event Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
