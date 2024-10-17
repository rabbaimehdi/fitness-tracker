const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  duration: { type: Number },
  caloriesBurned: { type: Number },
});

module.exports = mongoose.model('Exercise', ExerciseSchema);