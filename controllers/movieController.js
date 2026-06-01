const Movie = require('../models/movieModel');
const fs = require('fs');

// Home - View Movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();

        res.render('home', { movies });

    } catch (error) {
        console.log(error);
    }
};

// Add Movie Page
const addMoviePage = (req, res) => {
    res.render('addMovie');
};

// Add Movie
const addMovie = async (req, res) => {
    try {
        const { movieName, description, year, category } = req.body;

        const movie = new Movie({
            movieName,
            description,
            year,
            category,
            image: req.file.filename
        });

        await movie.save();

        res.redirect('/');

    } catch (error) {
        console.log(error);
    }
};

// Edit Movie Page
const editMoviePage = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        res.render('editMovie', { movie });

    } catch (error) {
        console.log(error);
    }
};

// Update Movie
const updateMovie = async (req, res) => {
    try {
        const { movieName, description, year, category } = req.body;

        const movie = await Movie.findById(req.params.id);

        if (req.file) {
            fs.unlinkSync('uploads/' + movie.image);

            await Movie.findByIdAndUpdate(req.params.id, {
                movieName,
                description,
                year,
                category,
                image: req.file.filename
            });
        } else {
            await Movie.findByIdAndUpdate(req.params.id, {
                movieName,
                description,
                year,
                category
            });
        }

        res.redirect('/');

    } catch (error) {
        console.log(error);
    }
};

// Delete Movie
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        fs.unlinkSync('uploads/' + movie.image);

        await Movie.findByIdAndDelete(req.params.id);

        res.redirect('/');

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getMovies,
    addMoviePage,
    addMovie,
    editMoviePage,
    updateMovie,
    deleteMovie
};