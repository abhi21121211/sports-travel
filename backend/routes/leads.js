const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const LeadStatusHistory = require('../models/LeadStatusHistory');

// POST /api/leads
router.post('/', async (req, res) => {
    const { name, email, phone, event, message } = req.body;

    if (!name || !email || !phone || !event) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const lead = new Lead({
            name,
            email,
            phone,
            event,
            message,
            status: 'New'
        });

        const newLead = await lead.save();

        // Record initial status
        await LeadStatusHistory.create({
            lead: newLead._id,
            oldStatus: 'N/A',
            newStatus: 'New'
        });

        res.status(201).json(newLead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET /api/leads
router.get('/', async (req, res) => {
    const { page = 1, limit = 10, status, event, month } = req.query;
    const query = {};

    if (status) query.status = status;
    if (event) query.event = event;

    // Filter by month (created at)
    if (month) {
        // month is 1-12
        const year = new Date().getFullYear(); // Assuming current year for simplicity or pass year
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        query.createdAt = { $gte: startDate, $lte: endDate };
    }

    try {
        const leads = await Lead.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .populate('event')
            .sort({ createdAt: -1 });

        const count = await Lead.countDocuments(query);

        res.json({
            leads,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PATCH /api/leads/:id/status
router.patch('/:id/status', async (req, res) => {
    const { status } = req.body;
    const validTransitions = {
        'New': ['Contacted'],
        'Contacted': ['Quote Sent'], // Usually automated, but maybe manual override?
        'Quote Sent': ['Interested'],
        'Interested': ['Closed Won', 'Closed Lost'],
        'Closed Won': [],
        'Closed Lost': []
    };

    // Allow "Closed Lost" from anywhere? The prompt says "Lead Workflow: New -> Contacted -> Quote Sent -> Interested -> Closed Won / Closed Lost".
    // This implies a specific path. I will strictly enforce this path for now.

    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ message: 'Lead not found' });

        const currentStatus = lead.status;

        // Check if transition is valid
        // Special case: Quote Sent is usually automated.
        // If the user tries to set "Quote Sent" manually, we might allow it if they sent it manually.

        if (!validTransitions[currentStatus].includes(status)) {
            return res.status(400).json({
                message: `Invalid status transition from ${currentStatus} to ${status}. Allowed: ${validTransitions[currentStatus].join(', ')}`
            });
        }

        lead.status = status;
        await lead.save();

        // Record history
        await LeadStatusHistory.create({
            lead: lead._id,
            oldStatus: currentStatus,
            newStatus: status
        });

        res.json(lead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
