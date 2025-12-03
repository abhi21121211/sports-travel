# Sports Travel Landing Page

A responsive, functional landing page for our Sports Travel Package platform, built with modern web technologies.

## 🚀 Live Demo

- **Frontend**: https://sports-travel.vercel.app
- **Backend API**: Running on `http://localhost:5001`

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Assumptions Made](#assumptions-made)
- [Future Improvements](#future-improvements)

## 🎯 Overview

This project is a full-stack sports travel booking platform featuring:
- Responsive landing page with modern UI
- Interactive package browsing
- Lead capture form with validation
- Backend API for data management
- Floating WhatsApp button for instant communication

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Custom CSS (based on provided design)
- **HTTP Client**: Axios
- **Deployment**: Vercel (recommended)

### Backend
- **Framework**: Express.js
- **Language**: JavaScript (Node.js)
- **Validation**: Built-in validation
- **CORS**: Enabled for cross-origin requests

## ✨ Features

### Completed Features

#### 1. Hero Section ✅
- Background hero image
- Headline + subheadline
- Primary CTA: "Plan My Trip"
- Smooth scroll navigation
- **Bonus**: Floating WhatsApp button

#### 2. Top Packages Section ✅
- Event image
- Event title
- Starting price
- "Book Now" CTA button
- Hover animations
- API integration

#### 3. Featured Event Section ✅
- Larger spotlight card (F1 Japan)
- Overlapping design
- Interactive buttons

#### 4. Why Choose Us ✅
- Stats-based trust section
- Numbered benefits

#### 5. How It Works ✅
- 3-step process explanation
- Clear visual flow
- Animated step cards

#### 6. Sample Itinerary / Add-Ons ✅
- Horizontal image card scroller
- Add-on showcase

#### 7. Lead Form ✅
- **Fields**: Name, Email, Phone, Message, Package of Interest
- **Validation**: 
  - Required fields marked with *
  - Email format validation (regex)
  - Phone format validation (regex)
  - Real-time error messages
- **Success Handling**: 
  - Custom popup modal (not alert)
  - Animated with fade-in/slide-up
  - Dismissible
- **Backend Integration**: 
  - Submits to `/api/leads`
  - Success/error state management

#### 8. Footer ✅
- Placeholder links (About, Contact, Terms, Privacy)
- Social media icons (Facebook, Twitter, Instagram)
- Copyright notice

#### 9. Responsive Design ✅
- Mobile-first approach
- Breakpoints: 360px, 480px, 600px, 768px, 820px, 1000px, 1100px
- Collapsible navigation (mobile)
- Full-width layouts

#### 10. Animations ✅
- Hover animations on cards
- Smooth scrolling between sections
- Popup modal animations
- WhatsApp button pulse animation

## 📁 Folder Structure

```
sports-travel/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx           # Hero section with navigation
│   │   │   ├── FeaturedCard.tsx   # Overlapping feature card
│   │   │   ├── TopPackages.tsx    # Package grid with API
│   │   │   ├── WhyChooseUs.tsx    # Trust/stats section
│   │   │   ├── HowItWorks.tsx     # 3-step process
│   │   │   ├── SampleItinerary.tsx # Itinerary cards
│   │   │   ├── Addons.tsx         # Add-ons section
│   │   │   └── LeadForm.tsx       # Contact form with validation
│   │   ├── lib/
│   │   │   └── api.ts             # Axios API client
│   │   ├── pages/
│   │   │   ├── index.tsx          # Main landing page
│   │   │   └── _app.tsx           # Next.js app wrapper
│   │   └── styles/
│   │       └── globals.css        # Global styles (custom CSS)
│   ├── public/                    # Static assets
│   ├── .env.local                 # Environment variables
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/
│   ├── index.js                   # Express server
│   ├── package.json
│   └── .env                       # Backend config
│
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sports-travel
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5001
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:3000
```

### 4. Environment Variables

#### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

#### Backend (`.env`)
```env
PORT=5001
```

### 5. Access the Application
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5001`

## 🔗 API Endpoints

### Packages
- **GET** `/api/packages` - Get all packages
- **GET** `/api/packages/:id` - Get package by ID

### Leads
- **POST** `/api/leads` - Submit lead form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "event": "f1-japan",
    "message": "Interested in VIP package"
  }
  ```
- **GET** `/api/leads` - Get all leads (admin)

### Events
- **GET** `/api/events` - Get all events
- **GET** `/api/events/:id` - Get event by ID

## 📝 Assumptions Made

1. **Design Fidelity**: Matched the overall layout and structure of the reference design without pixel-perfect precision.

2. **WhatsApp Number**: Used placeholder number (`1234567890`). Should be replaced with actual business number.

3. **Image Sources**: Used Unsplash for placeholder images. In production, use actual event images.

4. **Backend Storage**: Currently stores data in-memory (array). For production, integrate a database (MongoDB, PostgreSQL, etc.).

5. **Authentication**: No authentication implemented. Admin endpoints (GET leads) should be protected in production.

6. **Payment Integration**: Not included. Would require Stripe/PayPal integration for real bookings.

7. **Email Notifications**: Not implemented. Should send confirmation emails on lead submission.

8. **Mobile Navigation**: Simplified mobile navigation. Could enhance with hamburger menu.

## 🔮 Future Improvements

### High Priority
1. **Database Integration**
   - Replace in-memory storage with MongoDB/PostgreSQL
   - Add user accounts and booking history

2. **Payment Gateway**
   - Integrate Stripe or PayPal
   - Add secure checkout flow

3. **Email Notifications**
   - Send confirmation emails on lead submission
   - Add booking confirmations

4. **Authentication**
   - User login/signup
   - Admin dashboard for managing leads/packages

### Medium Priority
5. **Advanced Animations**
   - Fade-in on scroll (Intersection Observer)
   - Parallax effects
   - Loading skeletons

6. **SEO Optimization**
   - Meta tags for all pages
   - Structured data (JSON-LD)
   - Sitemap generation

7. **Performance**
   - Image optimization (Next.js Image component)
   - Code splitting
   - Lazy loading

8. **Enhanced Mobile UX**
   - Hamburger menu
   - Touch gestures for carousels
   - Bottom navigation bar

### Low Priority
9. **Additional Features**
   - Package comparison tool
   - Reviews/testimonials section
   - Live chat integration
   - Multi-language support

10. **Testing**
    - Unit tests (Jest)
    - Integration tests (Cypress)
    - E2E tests

11. **Analytics**
    - Google Analytics integration
    - Conversion tracking
    - Heatmaps

## 📱 Responsive Breakpoints

- **Extra Small**: < 360px
- **Small Mobile**: 360px - 480px
- **Mobile**: 480px - 600px
- **Tablet**: 600px - 820px
- **Small Desktop**: 820px - 1000px
- **Desktop**: 1000px - 1100px
- **Large Desktop**: > 1100px

## 🎨 Design Highlights

- **Color Scheme**: 
  - Accent: `#f07f67` (Coral)
  - Background: `#f5f6f7` (Light Gray)
  - Card: `#ffffff` (White)
  - Muted: `#9aa3ab` (Gray)

- **Typography**: Inter font family
- **Shadows**: Layered box-shadows for depth
- **Animations**: Smooth transitions (0.3s ease)

## 🤝 Contributing

This is a technical assignment project. For production use, please:
1. Replace placeholder content
2. Add proper authentication
3. Integrate payment gateway
4. Set up database
5. Add comprehensive testing

## 📄 License

This project is for assessment purposes.

## 👨‍💻 Developer Notes

**Time Spent**: ~10-12 hours
**Highlights**: 
- Fully responsive design
- Custom CSS (no Tailwind as per initial reference)
- Complete form validation
- API integration
- Bonus features (WhatsApp button, animations)

**Challenges Overcome**:
- Form validation with real-time feedback
- Custom popup modal (instead of alerts)
- Responsive grid layouts
- API integration with error handling

---

**Built with ❤️ for Sports Travel**
