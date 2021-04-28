const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the product'],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating for the product'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the product'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for the product'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
