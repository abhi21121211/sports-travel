import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Sports Travel
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#packages" className="hover:text-primary transition">
              Packages
            </Link>
            <Link href="#events" className="hover:text-primary transition">
              Events
            </Link>
            <Link href="#about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="#contact" className="hover:text-primary transition">
              Contact
            </Link>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}
