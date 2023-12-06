const mongoose = require('mongoose');

const financialNewsSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const FinancialNews = mongoose.model('FinancialNews', financialNewsSchema);

module.exports = FinancialNews;
