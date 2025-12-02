const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('../models/Event');
const Package = require('../models/Package');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sports-travel');

        console.log('MongoDB Connected');

        // Clear existing data
        await Event.deleteMany({});
        await Package.deleteMany({});

        console.log('Cleared existing data');

        // Create Events
        const events = await Event.insertMany([
            {
                name: 'UEFA Champions League Final',
                sport: 'Football',
                date: new Date('2024-06-01'), // June -> +20%
                location: 'London, UK',
                featured: true,
                description: 'The biggest club football game of the year.',
                image: '/images/ucl.jpg'
            },
            {
                name: 'F1 Monaco Grand Prix',
                sport: 'Formula 1',
                date: new Date('2024-05-26'), // May -> +10%
                location: 'Monte Carlo, Monaco',
                featured: true,
                description: 'Experience the glamour and speed of Monaco.',
                image: '/images/f1-monaco.jpg'
            },
            {
                name: 'Wimbledon',
                sport: 'Tennis',
                date: new Date('2024-07-01'), // July -> +20%
                location: 'London, UK',
                featured: false,
                description: 'The oldest tennis tournament in the world.',
                image: '/images/wimbledon.jpg'
            }
        ]);

        console.log('Events created');

        // Create Packages
        const packages = await Package.insertMany([
            {
                event: events[0]._id,
                title: 'UCL Final - Gold Package',
                price: 3000,
                duration: '3 Days',
                description: 'Premium seats and 5-star hotel.',
                inclusions: ['Match Ticket', 'Hotel', 'Airport Transfer']
            },
            {
                event: events[0]._id,
                title: 'UCL Final - Silver Package',
                price: 1500,
                duration: '2 Days',
                description: 'Standard seats and 4-star hotel.',
                inclusions: ['Match Ticket', 'Hotel']
            },
            {
                event: events[1]._id,
                title: 'Monaco GP - VIP Yacht',
                price: 5000,
                duration: '4 Days',
                description: 'Watch the race from a luxury yacht.',
                inclusions: ['Yacht Access', 'Hotel', 'Parties']
            },
            {
                event: events[1]._id,
                title: 'Monaco GP - Grandstand',
                price: 2000,
                duration: '3 Days',
                description: 'Grandstand K seats.',
                inclusions: ['Race Ticket', 'Hotel']
            },
            {
                event: events[2]._id,
                title: 'Wimbledon - Centre Court',
                price: 4000,
                duration: '2 Days',
                description: 'Centre Court tickets for the final.',
                inclusions: ['Final Ticket', 'Hotel', 'Museum Tour']
            },
            {
                event: events[2]._id,
                title: 'Wimbledon - Ground Pass',
                price: 500,
                duration: '1 Day',
                description: 'Access to outside courts and hill.',
                inclusions: ['Ground Pass']
            }
        ]);

        console.log('Packages created');

        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
