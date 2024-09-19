/**
 * Reads a file containing student data, parses it, and returns a string
 */
const fs = require('fs').promises;

function stFile(path) {
  return fs
    .stat(path)
    .then((stats) => {
      if (!stats.isFile()) {
        return Promise.reject(new Error('Cannot load the database'));
      }
      return fs.readFile(path, 'utf-8');
    })
    .then((dt) => {
      const ln = dt.split('\n').filter((ln) => ln.trim() !== '');

      const students = ln.slice(1);
      let strContainer = `Number of students: ${students.length}`;

      const fields = {};

      students
        .map((std) => {
          const [firstname, , , field] = std.split(',');
          return { firstname, field };
        })
        .filter(({ firstname, field }) => firstname && field)
        .forEach(({ firstname, field }) => {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

      for (const [field, names] of Object.entries(fields)) {
        strContainer += `\nNumber of students in ${field}: ${
          names.length
        }. List: ${names.join(', ')}`;
      }

      return `This is the list of our students\n${strContainer}`;
    })
    .catch((error) => Promise.reject(error));
}

module.exports = stFile;
