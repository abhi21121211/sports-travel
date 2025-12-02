const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lead',
        required: true,
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true,
    },
    basePrice: {
        type: Number,
        required: true,
    },
    adjustments: {
        seasonalMultiplier: Number,
        earlyBirdDiscount: Number,
        lastMinuteSurcharge: Number,
        groupDiscount: Number,
        weekendSurcharge: Number,
    },
    finalPrice: {
        type: Number,
        required: true,
    },
    travellers: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Quote', quoteSchema);
