/* eslint-disable no-console */
const express = require('express');

const app = express();

const reviewRoutes = require('./reviewRoutes.js');

app.use('/', reviewRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

module.exports = app;
