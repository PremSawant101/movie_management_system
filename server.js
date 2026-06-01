const express = require('express');
const db = require('./config/db');
const movieRoute = require('./routes/movieRoute');

const app = express();
const PORT = 3000;

db();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');

app.use('/', movieRoute);

app.listen(PORT, () => {
    console.log('Server Started');
});