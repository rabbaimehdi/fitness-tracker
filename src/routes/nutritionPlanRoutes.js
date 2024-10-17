const express = require('express');
const nutritionPlanController = require('../controllers/nutritionPlanController');
const router = express.Router();

router.post('/', nutritionPlanController.createNutritionPlan);
router.get('/', nutritionPlanController.getNutritionPlans);
router.get('/:id', nutritionPlanController.getNutritionPlan);
router.put('/:id', nutritionPlanController.updateNutritionPlan);
router.delete('/:id', nutritionPlanController.deleteNutritionPlan);

module.exports = router;