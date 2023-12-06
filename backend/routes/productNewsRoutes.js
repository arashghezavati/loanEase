const express = require('express');
const router = express.Router();
const ProductNews = require('../models/ProductNews');

// Create a new product news article
router.post('/create', async (req, res) => {
  try {
    const productNewsArticle = new ProductNews(req.body);
    await productNewsArticle.save();

    // Fetch the saved product news article from the database
    const createdProductNewsArticle = await ProductNews.findById(productNewsArticle._id);

    res.json(createdProductNewsArticle); // Send the created product news article in the response
  } catch (error) {
    console.error('Error creating product news article:', error);
    res.status(500).json({ error: 'Failed to create product news article' });
  }
});

// Get all product news articles
router.get('/list', async (req, res) => {
  try {
    const news = await ProductNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product news articles' });
  }
});

// Update a product news article
router.put('/update/:id', async (req, res) => {
  try {
    const updatedProductNewsArticle = await ProductNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProductNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product news article' });
  }
});

// Delete a product news article
router.delete('/delete/:id', async (req, res) => {
  try {
    await ProductNews.findByIdAndRemove(req.params.id);
    res.json({ message: 'Product news article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product news article' });
  }
});

module.exports = router;
