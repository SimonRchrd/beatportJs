const express = require('express');
const request = require("request");

const app = express(); //Start express app

const tracks = require('./routes/api/tracks');
const genres = require('./routes/api/genres');

app.use('/api/v1/tracks', tracks);
app.use('/api/v1/genres', genres);

app.listen(3000, () => {
  console.log('Listening 3000')
});