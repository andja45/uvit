const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({  
    _id: mongoose.Schema.Types.ObjectId, 
    username: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true  
    },
    name: String,
    surname: String,
    major: String,
    avg_grade: {
        type: Number,
        default: 0
    },
    grades: {
        type: [Number],
        default: []
    },
    note: {
        type: String,
        required: true,
        default: ""  
    },
}, { collection: "students"} );

const StudentModel = mongoose.model("Student", studentSchema); 

async function getStudentByUsername(studentUsername){  
    const students = await StudentModel.find({ username: studentUsername }).exec();  
    console.log(students, typeof students);

    if (students.length === 0)  
        return null;
    return students[0]; 
}  

async function getStudentById(id){  
    const student = await StudentModel.findById(id, {grades: false }).exec();  
  
    return student;
}

async function createStudent(username, password, name, surname, major){
    const newStudent = new StudentModel(); 

    newStudent._id = new mongoose.Schema.ObjectId(); 
    newStudent.username = username;  
    newStudent.password = password;
    newStudent.name = name;
    newStudent.surname = surname;
    newStudent.major = major;

    const studentFromDB = await newStudent.save();

    return studentFromDB;
}

function doPasswordsMatch(student, password){
    return student !== null && student.password === password;  
}

async function updateStudentInfo(student){
    const povratna = await StudentModel.updateOne({ username: student.username },  
        { $set: { 
            password: student.password, 
            name: student.name,
            major: student.major 
        }
    }).exec();

    console.log(povratna, typeof povratna);
}

async function deleteStudentByIndex(indeks){  
    await StudentModel.deleteOne({ username: indeks }).exec();
}

module.exports = {
    getStudentByUsername,
    doPasswordsMatch,
    updateStudentInfo, 
    deleteStudentByIndex, 
    createStudent,
    getStudentById
}