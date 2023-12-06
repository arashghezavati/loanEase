const mongoose = require('mongoose');

const bankingNewsSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const BankingNews = mongoose.model('BankingNews', bankingNewsSchema);

module.exports = BankingNews;
