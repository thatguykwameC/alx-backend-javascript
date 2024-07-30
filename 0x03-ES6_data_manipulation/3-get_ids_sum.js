/**
 * Calculates the sum of student IDs in a given studentsList array.
 *
 * @param {Array<Object>} studentsList - An array of student objects.
 * @return {number} The sum of all student IDs.
 */
export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  return studentsList.reduce((accumulator, student) => {
    if (!Number.isInteger(student.id)) {
      throw new TypeError('studentId must be an integer');
    }
    return accumulator + student.id;
  }, 0);
}
