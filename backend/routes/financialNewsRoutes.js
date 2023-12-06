const express = require('express');
const router = express.Router();
const FinancialNews = require('../models/FinancialNews'); // Import the FinancialNews model

// Create a new financial news article
router.post('/create', async (req, res) => {
  try {
    const financialNewsArticle = new FinancialNews(req.body);
    await financialNewsArticle.save();

    // Fetch the saved financial news article from the database
    const createdFinancialNewsArticle = await FinancialNews.findById(financialNewsArticle._id);

    res.json(createdFinancialNewsArticle); // Send the created financial news article in the response
  } catch (error) {
    console.error('Error creating financial news article:', error);
    res.status(500).json({ error: 'Failed to create financial news article' });
  }
});

// Get all financial news articles
router.get('/list', async (req, res) => {
  try {
    const news = await FinancialNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch financial news articles' });
  }
});

// Update a financial news article
router.put('/update/:id', async (req, res) => {
  try {
    const updatedFinancialNewsArticle = await FinancialNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFinancialNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update financial news article' });
  }
});

// Delete a financial news article
router.delete('/delete/:id', async (req, res) => {
  try {
    await FinancialNews.findByIdAndRemove(req.params.id);
    res.json({ message: 'Financial news article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete financial news article' });
  }
});

module.exports = router;
