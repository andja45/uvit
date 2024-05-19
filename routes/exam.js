const express = require('express');
const controller = require('../controllers/exam');

const router = express.Router();  

// http://localhost:3002/ispiti?username=mi10050?
router.get('/', controller.getExamsByStudent);  

module.exports = router;