/**
 * Updates the grade of students in a given city based on new grades.
 *
 * @param {Array<Object>} studentsList - The list of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array<Object>} newGrades - The list of new grade objects.
 * @return {Array<Object>} Updated list of student objects and their grades.
 * @throws {TypeError} If studentsList is not an array,
 * newGrades is not an array, or city is not a string.
 */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  if (!Array.isArray(newGrades)) {
    throw new TypeError('newGrades must be an array');
  }

  if (typeof city !== 'string') {
    throw new TypeError('city must be a string');
  }

  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return Object.assign(student, { grade: gradeObj ? gradeObj.grade : 'N/A' });
    });
}
