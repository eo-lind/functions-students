const createStudent = (studentName, studentGrade) => {
    const studentObject = {
        name: studentName,
        grade: studentGrade
    }
    return studentObject
}

let returnedStudent = createStudent("Rupert", 4)

const addMathGrade = (mathGrade) => {
    returnedStudent.math = mathGrade
    return returnedStudent
}

returnedStudent = addMathGrade("B")

const addHistoryGrade = (historyGrade) => {
    returnedStudent.history = historyGrade
    return returnedStudent
}

returnedStudent = addHistoryGrade("C")

const addScienceGrade = (scienceGrade) => {
    returnedStudent.science = scienceGrade
    return returnedStudent
}

returnedStudent = addScienceGrade("A")

console.log(returnedStudent)