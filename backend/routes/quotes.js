const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');
const Lead = require('../models/Lead');
const Package = require('../models/Package');
const Event = require('../models/Event');
const LeadStatusHistory = require('../models/LeadStatusHistory');
const { calculateQuote } = require('../services/pricingService');

// POST /api/quotes/generate
router.post('/generate', async (req, res) => {
    const { leadId, packageId, travellers } = req.body;

    if (!leadId || !packageId) {
        return res.status(400).json({ message: 'Missing leadId or packageId' });
    }

    try {
        const lead = await Lead.findById(leadId);
        if (!lead) return res.status(404).json({ message: 'Lead not found' });

        const pkg = await Package.findById(packageId);
        if (!pkg) return res.status(404).json({ message: 'Package not found' });

        const event = await Event.findById(pkg.event);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        // Calculate pricing
        const pricing = calculateQuote(pkg, event, travellers || 1);

        // Create Quote
        const quote = new Quote({
            lead: leadId,
            package: packageId,
            basePrice: pricing.basePrice,
            adjustments: pricing.adjustments,
            finalPrice: pricing.totalPrice,
            travellers: travellers || 1
        });

        await quote.save();

        // Update Lead Status to "Quote Sent"
        // We should check if it's a valid transition? 
        // Usually "Contacted" -> "Quote Sent".
        // If it's "New", should we force it to "Contacted" then "Quote Sent"?
        // Or just jump? The prompt says "Auto-update lead status to Quote Sent".
        // I will force update it and record history.

        const oldStatus = lead.status;
        if (oldStatus !== 'Quote Sent') {
            lead.status = 'Quote Sent';
            await lead.save();

            await LeadStatusHistory.create({
                lead: leadId,
                oldStatus: oldStatus,
                newStatus: 'Quote Sent'
            });
        }

        res.status(201).json({
            quoteId: quote._id,
            basePrice: pricing.basePrice,
            adjustments: pricing.adjustments,
            finalPrice: pricing.totalPrice,
            leadStatus: lead.status
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
