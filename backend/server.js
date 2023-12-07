const express = require('express');
const connectToDatabase = require('./db'); // Database connection module
const productNewsRoutes = require('./routes/productNewsRoutes');
const loanNewsRoutes = require('./routes/loanNewsRoutes');
const financialNewsRoutes = require('./routes/financialNewsRoutes');
const bankingNewsRoutes = require('./routes/bankingNewsRoutes');
const langaraNewsRoutes = require('./routes/langaraNewsRoutes');
const loanRoutes = require('./routes/loanRoutes'); // Import your loanRoutes
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000; // Set port dynamically or use a default value

app.use(cors());

// Allow requests from multiple origins
const allowedOrigins = [
  'https://loanease-ps0q8e742-iamjeel1.vercel.app',
  'https://www.loanease.ca',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// Connect to MongoDB Atlas
(async () => {
  try {
    const db = await connectToDatabase();
    console.log('Connected to MongoDB Atlas');

    app.use(express.json());

    app.use('/api/product-news', productNewsRoutes);
    app.use('/api/loan-news', loanNewsRoutes);
    app.use('/api/financial-news', financialNewsRoutes);
    app.use('/api/banking-news', bankingNewsRoutes);
    app.use('/api/langara-news', langaraNewsRoutes);

    // Use the loanRoutes on a specific endpoint
    app.use('/api/loans', loanRoutes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
})();
