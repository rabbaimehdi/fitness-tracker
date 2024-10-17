const express = require('express');
const socialController = require('../controllers/socialController');
const router = express.Router();

router.post('/follow', socialController.follow);
router.get('/followers', socialController.getFollowers);
router.get('/following', socialController.getFollowing);
router.get('/activity-feed', socialController.getActivityFeed);

module.exports = router;