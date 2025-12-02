const express = require('express');
const router = express.Router();
const Package = require('../models/Package');

// GET /api/packages
router.get('/', async (req, res) => {
    try {
        const packages = await Package.find().populate('event');
        res.json(packages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/packages/:id
router.get('/:id', async (req, res) => {
    try {
        const pkg = await Package.findById(req.params.id).populate('event');
        if (!pkg) return res.status(404).json({ message: 'Package not found' });
        res.json(pkg);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
