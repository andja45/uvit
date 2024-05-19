const studentModel = require('../models/student');

async function getStudentByUsername(req, res, next){
    try {
        const username = req.body.username; 
        const password = req.body.password;

        console.log(username, typeof username);

        const student = await studentModel.getStudentByUsername(username);  
        if(student === null){  
            const err = new Error("nije pronadjen student za dati username novo");
           
            throw err;
        }
        const passwordsMatch = studentModel.doPasswordsMatch(student, password);  
    
        if(!passwordsMatch){  
            throw new Error("pogresna lozinka, probaj opet");
        } 

        res.render('student.ejs', {  
                student: student 
        });  
    } catch (err) {  
        next(err); 
    }
}

async function updateStudentInfo(req, res, next){
    try {
        const username = req.body.username; 
        const password = req.body.password;
        const name = req.body.name;
        const surname = req.body.surname; 
        const major = req.body.major; 

        const student = await studentModel.getStudentByUsername(username);
        if(student === null){  
            throw new Error("nije pronadjen student za dati username novo");
        }

        student.password = password;
        student.name = name;
        student.surname = surname;
        student.major = major;

        await studentModel.updateStudentInfo(student); 

        res.render('student.ejs', {  
            student: student 
        });  
    } catch (err) { 
        next(err);
    }
}

async function deleteStudentByIndex(req, res, next){
    try {
        const indeks = req.params.indeks; 

        await studentModel.deleteStudentByIndex(indeks);
        
        res.redirect("/index.html") 
    } catch (err){
        next(err);
    }
}

module.exports = {
    getStudentByUsername,
    updateStudentInfo,
    deleteStudentByIndex
};

