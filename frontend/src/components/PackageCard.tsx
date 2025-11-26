interface PackageCardProps {
  title: string
  event: string
  location: string
  price: string
  duration: string
  image: string
}

export default function PackageCard({ title, event, location, price, duration, image }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-gray-300 relative">
        {/* Image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          {event}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{event}</p>
        <p className="text-gray-500 mb-4">📍 {location}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{duration}</p>
            <button className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
