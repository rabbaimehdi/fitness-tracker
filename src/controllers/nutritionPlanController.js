const NutritionPlan = require('../models/NutritionPlan');

exports.createNutritionPlan = async (req, res) => {
  try {
    const nutritionPlan = new NutritionPlan(req.body);
    await nutritionPlan.save();
    res.status(201).json(nutritionPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getNutritionPlans = async (req, res) => {
  try {
    const nutritionPlans = await NutritionPlan.find();
    res.json(nutritionPlans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getNutritionPlan = async (req, res) => {
  try {
    const nutritionPlan = await NutritionPlan.findById(req.params.id);
    res.json(nutritionPlan);
  } catch (error) {
    res.status(404).json({ error: 'Nutrition plan not found' });
  }
};

exports.updateNutritionPlan = async (req, res) => {
  try {
    const nutritionPlan = await NutritionPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(nutritionPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteNutritionPlan = async (req, res) => {
  try {
    await NutritionPlan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Nutrition plan deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Nutrition plan not found' });
  }
};