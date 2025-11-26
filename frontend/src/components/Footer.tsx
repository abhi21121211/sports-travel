import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sports Travel</h3>
            <p className="text-gray-400">
              Your premium partner for unforgettable sports event experiences worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#packages" className="text-gray-400 hover:text-white transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Popular Events</h4>
            <ul className="space-y-2 text-gray-400">
              <li>FIFA World Cup</li>
              <li>Olympics</li>
              <li>Wimbledon</li>
              <li>UEFA Champions League</li>
              <li>Super Bowl</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@sportstravel.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Sports Ave, New York, NY</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sports Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
