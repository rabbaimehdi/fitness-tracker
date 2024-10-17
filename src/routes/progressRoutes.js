const express = require('express');
const progressController = require('../controllers/progressController');
const router = express.Router();

router.post('/', progressController.createProgress);
router.get('/', progressController.getProgresses);
router.get('/:id', progressController.getProgress);
router.put('/:id', progressController.updateProgress);
router.delete('/:id', progressController.deleteProgress);

module.exports = router;