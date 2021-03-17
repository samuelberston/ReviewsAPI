const reviewRoutes = require('express').Router();
const axios = require('axios');
const urlModule = require('url');
const config = require('../config.js');

const connection = require('../mySql/connection.js');

const Headers = {
  Authorization: `${config.TOKEN}`
}

//  INNER JOIN photos ON reviews.review_id = photos.review_id
reviewRoutes.get('/reviews', (req, res) => {
  const product_id = req.query.product_id;
  connection.query(`SELECT * FROM reviews 8ee1ba54837de5bb000a0258a860ebc49c1dea8 WHERE product_id = '${product_id}'`,
    (err, data) => {
      if (err) { res.status(400); }
      console.log(data);
      res.status(201).send(data);
    });
});

reviewRoutes.get('/reviews/meta', (req, res) => {
  const productId = req.query.product_id;
  // am I going to have to construct the meta data from the reviews data, or can I simply send it along .... ???

  // ratings
  const one = connection.query(`SELECT COUNT(rating) FROM reviews WHERE rating = 1 AND product_id = ${productId}`);
  const two = connection.query(`SELECT COUNT(rating) FROM reviews WHERE rating = 2 AND product_id = ${productId}`);
  const three = connection.query(`SELECT COUNT(rating) FROM reviews WHERE rating = 3 AND product_id = ${productId}`);
  const four = connection.query(`SELECT COUNT(rating) FROM reviews WHERE rating = 4 AND product_id = ${productId}`);
  const five = connection.query(`SELECT COUNT(rating) FROM reviews WHERE rating = 5 AND product_id = ${productId}`);

  // recommended
  const t = connection.query(`SELECT COUNT(recommend) FROM reviews WHERE recommend = true AND product_id = ${productId}`);
  const f = connection.query(`SELECT COUNT(recommend) FROM reviews WHERE recommend = false AND product_id = ${productId}`);

  // characteristics
  const chars = connection.query(`SELECT characteristic_id, characteristic_value FROM product_characteristics WHERE product_id = ${product_id}`); // and then turn this into object of key value pairs

  Promise.all([one, two, three, four, five, true, false, chars])
    .then((values) => {
      const metaData = {
        productId,
        ratings: {
          one,
          two,
          three,
          four,
          five,
        },
        recommended: {
          true: t,
          false: f,
        },
        characteristics: {
          chars,
        }
      }
      res.send(metaData);
    })
    .catch((err) => {
      console.log(err);
    });
});

reviewRoutes.post('/reviews', (req, res) => {
  connection.query(`INSERT INTO reviews (review_id, rating, summary, recommend, body, reviewer_name, product_id) VALUES (${req.body.review_id}, ${req.body.rating}, ${req.body.summary}, ${req.body.recommend}, ${req.body.body}, ${req.body.reviewer_name}, ${req.body.product_id})`)
    .then(() => {
      console.log('posted review');
    })
    .catch((err) => {
      console.log(err);
    });
});

reviewRoutes.put('/review/heplful', (req, res) => {
  const { review_id } = req.query;
  connection.query(`UPDATE reviews SET helpfullness = helpfullness + 1 WHERE review_id = ${review_id}`)
    .then(() => {
      console.log('marked helpful');
    })
    .catch((err) => {
      console.log(err);
    });
});

// do not delete review, but add a reported field so you can filter GET request
reviewRoutes.put('/review/report', (req, res) => {
  const { review_id } = req.query;
  reviewRoutes.put('/review/heplful', (req, res) => {
    connection.query(`DELETE FROM reviews WHERE review_id = ${review_id}`)
      .then(() => {
        console.log('marked helpful');
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = reviewRoutes;
