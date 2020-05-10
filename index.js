const express = require('express');

const app = express(); //Start express app

const tracks = require('./routes/api/tracks');
const genres = require('./routes/api/genres');
const classements = require('./routes/api/classements');


app.get('/api/v1', (req, res) => {
  res.status(200).send('Welcom to my API');
});

app.use('/api/v1/tracks', tracks);
app.use('/api/v1/genres', genres);
app.use('/api/v1/classements', classements);

app.listen(3000, () => {
  console.log('Listening 3000')
});