const express = require('express');
const path = require('path');

const app = express();

const reviewRoutes = require('./reviewRoutes.js');

const logger = (req, res, next) => {
  console.log(`Receiving request to ${req.url} with method ${req.method}`);
  next();
};

app.use('/', logger);

app.use('/', reviewRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

const port = 1128;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

module.exports = app;