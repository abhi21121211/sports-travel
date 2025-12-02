const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    inclusions: [{
        type: String,
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Package', packageSchema);
