const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  loan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan', required: true },
  payment_date: Date,
  payment_amount: Number,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
