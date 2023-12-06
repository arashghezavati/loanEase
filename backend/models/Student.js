const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone_number: String,
  address: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
