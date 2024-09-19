#!/usr/bin/env node

const fs = require('fs').promises;
const displayMessage = require('./0-console');

/**
 * Reads a file at the specified path, counts the number of students,
 * and displays the number of students in each field.
 *
 * @param {string} path - the path to the file containing student data
 * @return {Promise<void>} a promise that resolves when the operation is complete
 */
function countStudents(path) {
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
      displayMessage(`Number of students: ${students.length}`);

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
        displayMessage(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', ',
          )}`,
        );
      }
      return Promise.resolve();
    })
    .catch((error) => {
      displayMessage(error.message);
      return Promise.reject(error);
    });
}

module.exports = countStudents;
