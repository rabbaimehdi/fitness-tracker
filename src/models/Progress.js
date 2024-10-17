const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  weight: { type: Number },
  bodyFatPercentage: { type: Number },
});

module.exports = mongoose.model('Progress', ProgressSchema);