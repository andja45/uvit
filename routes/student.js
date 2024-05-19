const express = require('express');

const studentController = require('../controllers/student');

const router = express.Router();  

router.post("/student", studentController.getStudentByUsername);  
router.post("/student/update", studentController.updateStudentInfo);  
router.post("/student/delete/:indeks", studentController.deleteStudentByIndex);  

module.exports = router;  