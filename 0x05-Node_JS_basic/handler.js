/**
 * Reads a file containing student data, parses it, and returns a string
 */
const fs = require('fs').promises;

function getStudentCountByField(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const [, ...students] = lines;
      const studentCountsByField = {};

      students
        .map((student) => {
          const [firstName, , , field] = student.split(',');
          return { firstName, field };
        })
        .filter(({ firstName, field }) => firstName && field)
        .forEach(({ firstName, field }) => {
          studentCountsByField[field] = (
            studentCountsByField[field] || []
          ).concat(firstName);
        });

      return `This is the list of our students\nNumber of students: ${
        students.length
      }${Object.entries(studentCountsByField).reduce(
        (str, [field, names]) => `${str}\nNumber of students in ${field}: ${
          names.length
        }. List: ${names.join(', ')}`,
        '',
      )}`;
    })
    .catch((error) => Promise.reject(error));
}

module.exports = stFile;
