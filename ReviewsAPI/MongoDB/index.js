const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

db.once('open', function(){
  console.log(Connected to MongoDB successfully!);
});

let reviewSchema = mongoose.Schema({
  review_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  body: String,
  date: Date,
  reviewer_name: String,
  helpfulness: Number,
  photos: Array,
});

let Review = mongoose.model('Review', repoSchema);

let saveReview = (reviewData) => {
  reviewData.forEach(review => {
    const newReview = new Review({
      review_id: review.review_id,
      rating: review.rating,
      summary: review.summary,
      recommend: review.recommend,
      response: review.response,
      body: review.body,
      date: review.date,
      reviewer_name: review.reviewer_name,
      helpfulness: review.helpfulness,
      photos: review.photos,
    });

    newReview.save(function(err, newReview) {
      if (err) { console.error(err); }
      console.log(newReview);
    })
  })
}

let metaSchema = mongoose.Schema({
  product_id: String,
  ratings: Object,
  recommended: Object,
  characteristics: Object,
})

let Meta = mongoose.model('Meta', metaSchema);

let saveMeta = (meta) => {
  const newMeta = new Meta({
    product_id: meta.product_id,
    ratings: meta.ratings,
    recommended: meta.recommended,
    characteristics: meta.characteristics,
  })
}

module.exports = {
  Review,
  saveReview,
  Meta,
  saveMeta,
};