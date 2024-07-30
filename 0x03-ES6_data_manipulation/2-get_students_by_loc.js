/**
 * Filters the given list of students by location.
 *
 * @param {Array<Object>} studentsList - The list of student objects.
 * @param {string} location - The location to filter by.
 * @return {Array<Object>} An array of student objects with the specified location.
 * @throws {TypeError} If studentsList is not an array or location is not a string.
 */
export default function getStudentsByLocation(studentsList, location) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  if (typeof location !== 'string') {
    throw new TypeError('location must be a string');
  }

  return studentsList.filter((student) => student.location === location);
}
