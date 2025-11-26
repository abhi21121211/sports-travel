# Sports Travel - Backend

Express.js backend API for the Sports Travel application.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Middleware**: CORS, Body Parser

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional):
```
PORT=5000
```

3. Run the development server:
```bash
npm run dev
```

Or run in production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Packages

- `GET /api/packages` - Get all travel packages
- `GET /api/packages/:id` - Get a specific package by ID

### Events

- `GET /api/events` - Get all sports events
- `GET /api/events/:id` - Get a specific event by ID

### Leads

- `POST /api/leads` - Submit a new lead/inquiry
  - Body: `{ name, email, phone, event, message }`
- `GET /api/leads` - Get all leads (admin endpoint)

### Health Check

- `GET /` - API health check

## Project Structure

```
backend/
├── index.js         # Main server file with routes
├── package.json     # Dependencies and scripts
└── README.md        # Documentation
```

## Data Storage

Currently using in-memory storage for leads. In production, integrate with a database like:
- MongoDB
- PostgreSQL
- MySQL

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## CORS

CORS is enabled for all origins in development. Configure appropriately for production.

## License

MIT
