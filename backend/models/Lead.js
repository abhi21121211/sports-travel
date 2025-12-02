const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    status: {
        type: String,
        enum: ['New', 'Contacted', 'Quote Sent', 'Interested', 'Closed Won', 'Closed Lost'],
        default: 'New',
    },
    message: {
        type: String,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Lead', leadSchema);
