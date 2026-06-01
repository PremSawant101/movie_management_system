const express = require('express');
const {
    getMovies,
    addMoviePage,
    addMovie,
    editMoviePage,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');

const upload = require('../middleware/multer');

const router = express.Router();

router.get('/', getMovies);

router.get('/add-movie', addMoviePage);

router.post('/add-movie', upload.single('image'), addMovie);

router.get('/edit-movie/:id', editMoviePage);

router.post('/update-movie/:id', upload.single('image'), updateMovie);

router.get('/delete-movie/:id', deleteMovie);

module.exports = router;