# Sports Travel Backend

This is the backend service for the Sports Travel Packages platform. It is built with Node.js, Express, and MongoDB.

## Features

- **Lead Management**: Capture and manage leads with status tracking.
- **Event & Package Management**: Browse events and travel packages.
- **Dynamic Quote Generation**: Calculate prices based on seasonal, early-bird, and other business rules.
- **REST API**: Fully functional JSON API.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Testing**: Jest
- **CI**: GitHub Actions

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- MongoDB (running locally or cloud URI)

### Installation

1. Clone the repository.
2. Navigate to the backend directory:
   ```bash
   cd sports-travel/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   Update `MONGODB_URI` if necessary.

### Running Locally

1. Seed the database (optional but recommended):
   ```bash
   node scripts/seed.js
   ```
2. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5001`.

### Running Tests

```bash
npm test
```

## API Documentation

### Events

- `GET /api/events`: List all events.
- `GET /api/events/:id/packages`: List packages for a specific event.

### Leads

- `POST /api/leads`: Create a new lead.
  - Body: `{ name, email, phone, event, message }`
- `GET /api/leads`: List leads (paginated).
  - Query: `page`, `limit`, `status`, `event`, `month`
- `PATCH /api/leads/:id/status`: Update lead status.
  - Body: `{ status }`

### Quotes

- `POST /api/quotes/generate`: Generate a quote.
  - Body: `{ leadId, packageId, travellers }`
  - Returns: Detailed pricing breakdown and updates lead status to "Quote Sent".

## Deployment

### Render / Railway / Heroku

1. Push code to GitHub.
2. Connect repository to the hosting provider.
3. Set environment variables (`MONGODB_URI`).
4. Set build command: `npm install`.
5. Set start command: `npm start`.

## Design Decisions & Trade-offs

- **MongoDB**: Chosen for flexibility with schema-less data (though Mongoose enforces schemas) and ease of development.
- **Monolithic Structure**: Simple MVC structure for speed of delivery.
- **Pricing Logic**: Implemented as a pure function service for easy testing.

## Future Improvements

- **Authentication**: Add JWT authentication for admin routes.
- **Validation**: Use a library like Joi or Zod for robust request validation.
- **Logging**: Integrate structured logging (e.g., Winston) and monitoring (e.g., Sentry).
- **Caching**: Use Redis for caching event and package data.
- **Swagger**: Auto-generate API documentation.
