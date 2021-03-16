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
  photos: [String],
  product_id: String,
  characteristic_ratings: [
    {characteristic_id: Number,
      Rating: Number
    }]
});

let characteristicSchema = mongoose.Schema({
  id: Number,
  name: String,
  product_id: Number,
});
