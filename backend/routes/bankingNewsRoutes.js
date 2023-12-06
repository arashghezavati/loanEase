const express = require('express');
const router = express.Router();
const BankingNews = require('../models/BankingNews'); // Import the BankingNews model

// Create a new banking news article
router.post('/create', async (req, res) => {
  try {
    const bankingNewsArticle = new BankingNews(req.body);
    await bankingNewsArticle.save();

    // Fetch the saved banking news article from the database
    const createdBankingNewsArticle = await BankingNews.findById(bankingNewsArticle._id);

    res.json(createdBankingNewsArticle); // Send the created banking news article in the response
  } catch (error) {
    console.error('Error creating banking news article:', error);
    res.status(500).json({ error: 'Failed to create banking news article' });
  }
});

// Get all banking news articles
router.get('/list', async (req, res) => {
  try {
    const news = await BankingNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch banking news articles' });
  }
});

// Update a banking news article
router.put('/update/:id', async (req, res) => {
  try {
    const updatedBankingNewsArticle = await BankingNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBankingNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update banking news article' });
  }
});

// Delete a banking news article
router.delete('/delete/:id', async (req, res) => {
  try {
    await BankingNews.findByIdAndRemove(req.params.id);
    res.json({ message: 'Banking news article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete banking news article' });
  }
});

module.exports = router;
