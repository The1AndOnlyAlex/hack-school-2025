const express = require('express');
const pollController = require('../controllers/pollController');
const router = express.Router();

// ACTIVITY: Create routes that call controller functions when requested
router.get('/polls/id/:id',pollController.getPoll)
router.get('/polls',pollController.getPolls)
router.get('/polls',pollController.postPoll)
router.get('/vote',pollController.postVote)


module.exports = router;
