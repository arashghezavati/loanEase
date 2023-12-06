const mongoose = require('mongoose');

const langaraNewsSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});

const LangaraNews = mongoose.model('LangaraNews', langaraNewsSchema);

module.exports = LangaraNews;
