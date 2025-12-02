const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Package = require('../models/Package');

// GET /api/events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/events/:id/packages
router.get('/:id/packages', async (req, res) => {
    try {
        const packages = await Package.find({ event: req.params.id });
        res.json(packages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
