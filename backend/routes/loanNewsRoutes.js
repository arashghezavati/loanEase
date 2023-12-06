const express = require('express');
const router = express.Router();
const LoanNews = require('../models/LoanNews'); // Import the LoanNews model

// Create a new loan news article
router.post('/create', async (req, res) => {
  try {
    const loanNewsArticle = new LoanNews(req.body);
    await loanNewsArticle.save();

    // Fetch the saved loan news article from the database
    const createdLoanNewsArticle = await LoanNews.findById(loanNewsArticle._id);

    res.json(createdLoanNewsArticle); // Send the created loan news article in the response
  } catch (error) {
    console.error('Error creating loan news article:', error);
    res.status(500).json({ error: 'Failed to create loan news article' });
  }
});

// Get all loan news articles
router.get('/list', async (req, res) => {
  try {
    const news = await LoanNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch loan news articles' });
  }
});

// Update a loan news article
router.put('/update/:id', async (req, res) => {
  try {
    const updatedLoanNewsArticle = await LoanNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLoanNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update loan news article' });
  }
});

// Delete a loan news article
router.delete('/delete/:id', async (req, res) => {
  try {
    await LoanNews.findByIdAndRemove(req.params.id);
    res.json({ message: 'Loan news article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete loan news article' });
  }
});

module.exports = router;
