import { useState, useEffect } from 'react'
import { getEvents } from '@/lib/api'

interface Event {
  _id: string
  name: string
  description: string
  image: string
  featured: boolean
}

export default function FeaturedEvent() {
  const [event, setEvent] = useState<Event | null>(null)

  useEffect(() => {
    const fetchFeaturedEvent = async () => {
      try {
        const events = await getEvents()
        const featured = events.find((e: Event) => e.featured)
        if (featured) {
          setEvent(featured)
        }
      } catch (error) {
        console.error('Error fetching featured event:', error)
      }
    }
    fetchFeaturedEvent()
  }, [])

  if (!event) return null

  return (
    <section id="events" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Featured Event
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6">
              {event.name}
            </h2>
            <p className="text-lg mb-6 text-blue-100">
              {event.description}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Premium Experience
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Luxury Accommodation
              </li>
              <li className="flex items-center">
                <span className="mr-3">✓</span>
                Exclusive Access
              </li>
            </ul>
            <button
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Book This Event
            </button>
          </div>
          <div className="rounded-lg overflow-hidden h-96 flex items-center justify-center bg-blue-800">
            {event.image ? (
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<p class="text-2xl text-white">Image Not Available</p>';
                }}
              />
            ) : (
              <p className="text-2xl">Event Image Placeholder</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
