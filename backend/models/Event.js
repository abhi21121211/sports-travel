const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);
