# Sports Travel - Frontend

This is the frontend application for Sports Travel, a platform for booking exclusive sports event travel packages.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── pages/           # Next.js pages
├── components/      # React components
├── lib/            # Utility functions and API calls
└── styles/         # Global styles
```

## Components

- **Navbar**: Navigation header with menu items
- **Hero**: Main landing section with CTA
- **PackageCard**: Reusable card for displaying packages
- **TopPackages**: Grid of featured packages
- **FeaturedEvent**: Highlighted event section
- **WhyChooseUs**: Benefits and features section
- **HowItWorks**: Process explanation
- **SampleItinerary**: Example trip timeline
- **LeadForm**: Contact/inquiry form
- **Footer**: Site footer with links

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL

## License

MIT
