const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);