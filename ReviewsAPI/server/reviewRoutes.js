const reviewRoutes = require('express').Router();
const axios = require('axios');
const urlModule = require('url');
const config = require('../../config.js');

const connection = require('./mySql/connection');

reviewRoutes.get('/reviews', (req, res) => {
  const productId = req.query.product_id;
  connection.query(`SELECT *
    FROM reviews
    WHERE product_id = ${productId}
    INNER JOIN photos
    ON reviews.review_id = photos.review_id`)
    .then((reviews) => {
      res.send(reviews);
    })
    .catch((err) => {
      console.log(err);
    });
})

reviewRoutes.get('/reviews/meta', (req, res) => {
  const productId = req.query.product_id;
  // am I going to have to construct the meta data from the reviews data, or can I simply send it along .... ???
})

reviewRoutes.post('/reviews', (res, res) => {

})

module.exports = reviewRoutes;