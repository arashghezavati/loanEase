const mongoose = require('mongoose');

const productNewsSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const ProductNews = mongoose.model('ProductNews', productNewsSchema);

module.exports = ProductNews;
