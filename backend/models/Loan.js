const mongoose = require('mongoose');


const loanSchema = new mongoose.Schema({
  type: String, // "loan" or "scholarship"
  career: String, // Career information
  institute: String, // Institute information
  amount: Number, // Loan amount
  interest_rate: Number,
  loan_term: Number, // Number of months
  start_date: Date,
  end_date: Date, // For loan calculator
  due_date: Date, // Due date for scholarships
}, {
  id: false, // Disable the 'id' field
});






const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
