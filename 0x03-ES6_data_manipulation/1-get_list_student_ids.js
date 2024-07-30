/**
 * Returns an array of student IDs from the given list of students.
 *
 * @param {Array<Object>} studentsList - The list of student objects.
 * @return {Array<number>} An array of student IDs.
 */
export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }

  return studentsList.map((student) => student.id);
}
