const reviewRoutes = require('express').Router();

const db = require('./db.js');

reviewRoutes.get('/reviews', (req, res) => {
  const productId = req.query.product_id;

  db.query(`SELECT * FROM reviews WHERE product_id = '${productId}'`, (err, result) => {
    if (err) { throw err; }
    res.send(result);
  });
});

reviewRoutes.get('/reviews/photos', (req, res) => {
  const productId = req.query.product_id;

  db.query(`SELECT photo_id, photo_url FROM photos INNER JOIN reviews ON photos.review_id = reviews.review_id AND reviews.product_id = '${productId}'`, (err, result) => {
    if (err) { throw err; }
    res.send(result);
  });
});

reviewRoutes.get('/reviews/meta/ratings', (req, res) => {
  const productId = req.query.product_id;

  db.query(`SELECT rating, COUNT(rating) FROM reviews WHERE product_id = ${productId} GROUP BY rating`, (err, data) => {
    if (err) { throw err; }
    const ratings = {};
    data.forEach((rating) => {
      ratings[rating.rating] = rating['COUNT(rating)'];
    });
    res.send(ratings);
  });
});

reviewRoutes.get('/reviews/meta/recommend', (req, res) => {
  const productId = req.query.product_id;

  db.query(`SELECT COUNT(recommend) FROM reviews WHERE recommend = true AND product_id = ${productId}`, (err, data) => {
    if (err) { throw err; }
    const t = data[0]['COUNT(recommend)'];
    db.query(`SELECT COUNT(recommend) FROM reviews WHERE recommend = false AND product_id = ${productId}`, (err1, data1) => {
      if (err1) { throw err; }
      const f = data1[0]['COUNT(recommend)'];
      const recommend = {
        true: t,
        false: f,
      };
      res.send(recommend);
    });
  });
});

reviewRoutes.get('/reviews/meta/characteristics', (req, res) => {
  const productId = req.query.product_id;

  db.query(`SELECT characteristics.characteristic_name, characteristics.characteristic_id, characteristics_reviews.characteristic_value
  FROM characteristics
  JOIN characteristics_reviews
  ON characteristics.characteristic_id = characteristics_reviews.characteristic_id
  WHERE review_id
  IN
  (SELECT review_id FROM reviews WHERE product_id = ${productId})`, (err, data) => {
    const chars = data;
    res.send(chars);
  });
});

reviewRoutes.post('/reviews', (req, res) => {
  db.query(`INSERT INTO reviews (rating, summary, recommend, body, reviewer_name, product_id) VALUES (${req.body.rating}, ${req.body.summary}, ${req.body.recommend}, ${req.body.body}, ${req.body.reviewer_name}, ${req.body.reviewer_email}, ${req.body.product_id})`, (err, data) => {
    if (err) { throw err; }
    res.status(201).send(data);
  });
});

reviewRoutes.put('/helpful', (req, res) => {
  const reviewId = req.query.review_id;

  db.query(`UPDATE reviews SET helpfulness = helpfulness + 1 WHERE review_id = ${reviewId}`, (err, data) => {
    if (err) { throw err; }
    res.status(201).send(data);
  });
});

// do not delete review, but add a reported field so you can filter GET request
reviewRoutes.put('/report', (req, res) => {
  const reviewId = req.query.review_id;

  db.query(`UPDATE reviews SET reported = '1' WHERE review_id = ${reviewId}`, (err, data) => {
    if (err) { throw err; }
    res.status(201).send(data);
  });
});

module.exports = reviewRoutes;
