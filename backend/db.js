const mongoose = require('mongoose');

const uri = "mongodb+srv://loanease400:teal123456@cluster0.g7qmgjf.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
