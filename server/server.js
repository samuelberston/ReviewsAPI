const express = require('express');
const path = require('path');

const app = express();

const reviewRoutes = require('./reviewRoutes.js');

app.use('/', reviewRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3306;

const server = app.listen(port);

module.exports = app;
