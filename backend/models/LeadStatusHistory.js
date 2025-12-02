const mongoose = require('mongoose');

const leadStatusHistorySchema = new mongoose.Schema({
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lead',
        required: true,
    },
    oldStatus: {
        type: String,
        required: true,
    },
    newStatus: {
        type: String,
        required: true,
    },
    changedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('LeadStatusHistory', leadStatusHistorySchema);
