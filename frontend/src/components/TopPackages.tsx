import { useState, useEffect } from 'react'
import { getPackages } from '@/lib/api'

interface Package {
  id: string
  title: string
  price: string
  image: string
  location?: string
  duration?: string
  description?: string
}

export default function TopPackages() {
  const [packages, setPackages] = useState<Package[]>([
    {
      id: '1',
      title: 'Wimbledon Finals',
      price: '₹71,500 pp',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
      location: 'London, UK',
      duration: '3 Days',
      description: 'Premium seats & hospitality'
    },
    {
      id: '2',
      title: 'NBA Finals 2025',
      price: '₹1,50,000 pp',
      image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80',
      location: 'USA',
      duration: '5 Days',
      description: 'Courtside experience included'
    },
    {
      id: '3',
      title: 'F1 Monaco Grand Prix',
      price: '₹2,25,000 pp',
      image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=800&q=80',
      location: 'Monte Carlo',
      duration: '4 Days',
      description: 'Paddock access & luxury yacht'
    },
    {
      id: '4',
      title: 'UEFA Champions League',
      price: '₹95,000 pp',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80',
      location: 'Europe',
      duration: '3 Days',
      description: 'VIP tickets & transfers'
    }
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true)
        const data = await getPackages()
        if (data && data.length > 0) {
          // Map backend data to display format
          const mappedPackages = data.map((pkg: any) => ({
            id: pkg.id,
            title: pkg.title,
            price: pkg.price,
            image: pkg.image || 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
            location: pkg.location || '',
            duration: pkg.duration || '',
            description: pkg.description || ''
          }))
          setPackages(mappedPackages)
        }
      } catch (error) {
        console.error('Error fetching packages:', error)
        // Keep default packages on error
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  const handlePackageClick = (pkg: Package) => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Try to pre-fill the form
      setTimeout(() => {
        const nameInput = document.getElementById('name') as HTMLInputElement
        if (nameInput) {
          nameInput.focus()
        }
      }, 500)
    }
  }

  const getFallbackImage = (pkgId: string) => {
    const fallbackImages: Record<string, string> = {
      '1': 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80', // Tennis court
      '2': 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80', // Basketball
      '3': 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80', // Racing car
      '4': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'  // Soccer stadium
    }
    return fallbackImages[pkgId] || 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80'
  }

console.log('fffffff:', packages);
  return (
    <section>
      <div className="section-head">
        <h2>Top Packages</h2>
        <a className="muted" href="#packages" style={{cursor: 'pointer'}}>More packages →</a>
      </div>

      {loading ? (
        <div style={{padding: '40px', textAlign: 'center', color: 'var(--muted)'}}>
          Loading packages...
        </div>
      ) : (
        <div className="packages" role="list">
          {packages.map((pkg) => (
            <article 
              key={pkg.id} 
              className="pkg" 
              role="listitem"
            >
              <div className="thumb">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = getFallbackImage(pkg.id);
                  }}
                />
                {pkg.duration && (
                  <div className="pkg-badge">{pkg.duration}</div>
                )}
              </div>
              <div className="pkg-content">
                <strong>{pkg.title}</strong>
                {pkg.location && (
                  <div className="pkg-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '4px'}}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {pkg.location}
                  </div>
                )}
                {pkg.description && (
                  <div className="pkg-desc">{pkg.description}</div>
                )}
                <div className="pkg-footer">
                  <div className="pkg-price">
                    <span className="price-label">Starting from</span>
                    <span className="price-value">{pkg.price}</span>
                  </div>
                  <button 
                    className="pkg-cta"
                    onClick={() => handlePackageClick(pkg)}
                    aria-label={`Book ${pkg.title}`}
                  >
                    Book Now →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
