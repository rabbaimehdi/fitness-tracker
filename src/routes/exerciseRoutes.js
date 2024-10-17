const express = require('express');
const exerciseController = require('../controllers/exerciseController');
const router = express.Router();

router.post('/', exerciseController.createExercise);
router.get('/', exerciseController.getExercises);
router.get('/:id', exerciseController.getExercise);
router.put('/:id', exerciseController.updateExercise);
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;