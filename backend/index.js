const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data
const packages = [
  {
    id: '1',
    title: 'FIFA World Cup 2026',
    event: 'Football',
    location: 'USA, Canada, Mexico',
    price: '$4,999',
    duration: '7 Days',
    image: '/images/fifa.jpg',
    description: 'Experience the biggest football event in the world with premium seating and luxury accommodations.',
    inclusions: ['Match Tickets', '5-Star Hotel', 'Airport Transfers', 'City Tours', 'Hospitality Access']
  },
  {
    id: '2',
    title: 'Paris Olympics 2024',
    event: 'Multi-Sport',
    location: 'Paris, France',
    price: '$3,499',
    duration: '5 Days',
    image: '/images/olympics.jpg',
    description: 'Witness world-class athletes compete in the City of Lights with our exclusive Olympic package.',
    inclusions: ['Event Tickets', 'Luxury Hotel', 'Transportation', 'Guided Tours', 'VIP Access']
  },
  {
    id: '3',
    title: 'Wimbledon Championship',
    event: 'Tennis',
    location: 'London, UK',
    price: '$2,999',
    duration: '4 Days',
    image: '/images/wimbledon.jpg',
    description: 'Experience the most prestigious tennis tournament at the All England Club.',
    inclusions: ['Centre Court Tickets', '4-Star Hotel', 'Airport Pickup', 'London Tour', 'Afternoon Tea']
  }
];

const events = [
  {
    id: '1',
    name: 'UEFA Champions League Final',
    sport: 'Football',
    date: '2024-06-01',
    location: 'London, UK',
    featured: true
  },
  {
    id: '2',
    name: 'FIFA World Cup',
    sport: 'Football',
    date: '2026-06-15',
    location: 'USA, Canada, Mexico',
    featured: true
  },
  {
    id: '3',
    name: 'Wimbledon',
    sport: 'Tennis',
    date: '2024-07-01',
    location: 'London, UK',
    featured: false
  }
];

// Store leads in memory (in production, use a database)
const leads = [];

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Sports Travel API is running' });
});

// Get all packages
app.get('/api/packages', (req, res) => {
  res.json(packages);
});

// Get package by ID
app.get('/api/packages/:id', (req, res) => {
  const package = packages.find(p => p.id === req.params.id);
  if (package) {
    res.json(package);
  } else {
    res.status(404).json({ error: 'Package not found' });
  }
});

// Get all events
app.get('/api/events', (req, res) => {
  res.json(events);
});

// Get event by ID
app.get('/api/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
});

// Submit lead
app.post('/api/leads', (req, res) => {
  const { name, email, phone, event, message } = req.body;
  
  // Validation
  if (!name || !email || !phone || !event) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const lead = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    event,
    message: message || '',
    createdAt: new Date().toISOString()
  };
  
  leads.push(lead);
  
  console.log('New lead received:', lead);
  
  res.status(201).json({ 
    success: true, 
    message: 'Thank you for your inquiry. We will contact you soon!',
    leadId: lead.id
  });
});

// Get all leads (admin endpoint)
app.get('/api/leads', (req, res) => {
  res.json(leads);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
