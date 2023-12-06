const mongoose = require('mongoose');

const loanNewsSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const LoanNews = mongoose.model('LoanNews', loanNewsSchema);

module.exports = LoanNews;
