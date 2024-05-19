const Exam = require('../models/exam');

async function getExamsByStudent(req, res, next){
    try {
        const username = req.query.username;
        const exams = await Exam.getExamsForStudent(username);

        res.render('exam.ejs', {  
            username, exams 
        });

    } catch (err) {
        next(err);
    }
}

module.exports = {
    getExamsByStudent
};