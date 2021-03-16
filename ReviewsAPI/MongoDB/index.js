const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;

db.once('open', function(){
  console.log(Connected to MongoDB successfully!);
});

let product = mongoose.Schema({
  product_id: Number,
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

let photoSchema = mongoose.Schema({
  photo_id: Number,
  photo_url: String,
  review_id: Number,
});

let characteristicSchema = mongoose.Schema({
  id: Number,
  name: String,
});
