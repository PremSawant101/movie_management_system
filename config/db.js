const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/movie_management');
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
};

module.exports = db;