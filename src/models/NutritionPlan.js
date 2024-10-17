const mongoose = require('mongoose');

const NutritionPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  meals: [{ type: String }],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NutritionPlan', NutritionPlanSchema);