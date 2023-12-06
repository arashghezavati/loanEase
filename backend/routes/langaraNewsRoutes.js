const express = require('express');
const router = express.Router();
const LangaraNews = require('../models/LangaraNews'); // Import the LangaraNews model

// Create a new Langara news article
router.post('/create', async (req, res) => {
  try {
    const langaraNewsArticle = new LangaraNews(req.body);
    await langaraNewsArticle.save();

    // Fetch the saved Langara news article from the database
    const createdLangaraNewsArticle = await LangaraNews.findById(langaraNewsArticle._id);

    res.json(createdLangaraNewsArticle); // Send the created Langara news article in the response
  } catch (error) {
    console.error('Error creating Langara news article:', error);
    res.status(500).json({ error: 'Failed to create Langara news article' });
  }
});

// Get all Langara news articles
router.get('/list', async (req, res) => {
  try {
    const news = await LangaraNews.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Langara news articles' });
  }
});

// Update a Langara news article
router.put('/update/:id', async (req, res) => {
  try {
    const updatedLangaraNewsArticle = await LangaraNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLangaraNewsArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Langara news article' });
  }
});

// Delete a Langara news article
router.delete('/delete/:id', async (req, res) => {
  try {
    await LangaraNews.findByIdAndRemove(req.params.id);
    res.json({ message: 'Langara news article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Langara news article' });
  }
});

module.exports = router;
