// build your database
var mongoose = require('mongoose');
var productSchema = require('./schema.js');
var mongoUri = 'mongodb://localhost/ebidProducts';
const colors = require('colors')
// allow use of es6 promises
mongoose.Promise = global.Promise;

// mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connect(mongoUri, { useMongoClient: true });

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('MONGO DB ONLINE'.blue)
});

// Register the productSchema with Mongoose as the 'Product' collection.
var Product = mongoose.model('Product', productSchema);

module.exports.Product = Product
module.exports.db = db


// POSSIBLE BUGS
// mongoose.connect(mongoUri, { useMongoClient: true });  // might need to use this
// multi page export

// module.exports = {           // LEARN HOW TO WRITE THESE
//     Product: Product,
//     db: db
// }
