/* eslint-disable no-console */
const express = require('express');

const app = express();

const reviewRoutes = require('./reviewRoutes.js');

const loaderio = require('./loaderio-0026bfa91604c6a32449aa41c270528f.txt');

app.use('/', reviewRoutes);

app.get('/loaderio-0026bfa91604c6a32449aa41c270528f', (req, res) => {
  res.render(loaderio);
});

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3002;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

module.exports = app;
