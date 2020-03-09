var mongoose = require('mongoose');
// Complete the productSchema below.
// const db = require('./index.js').db // FIND WHERE THIS GOES

var productSchema = mongoose.Schema({
  item: String,
  min_cost: Number,
  curr_bid: Number,
  ends_in: Number,
  image: String
});

module.exports = productSchema;


/*
 ensure your schema has the following:
   item:
     - string,
   min_cost:
     - number,
   curr_bid:
     - number,
   ends_in:
     - number
   image:
     - string
*/