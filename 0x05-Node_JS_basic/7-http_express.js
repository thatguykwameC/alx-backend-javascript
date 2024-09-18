#!/usr/bin/env node

const express = require('express');
const fs = require('fs').promises;
const displayMessage = require('./0-console');

const app = express();
const PORT = 1245;
const HOST = 'localhost';
const argFile = process.argv[2] || '';

/**
 * Reads a file containing student data, parses it, and returns a string
 * containing the total number of students and the number of students in each field.
 *
 * @param {string} path - the path to the file containing student data
 * @return {Promise<string>} a promise resolving to a string containing student data
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

      return Promise.resolve(strContainer);
    })
    .catch((error) => Promise.reject(error));
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  let content = 'This is the list of our students\n';
  try {
    await countStudents(argFile);
    const dt = await countStudents(argFile);
    content += dt;
    res.send(content);
  } catch (err) {
    content += err.message;
    res.status(500).send(content);
  }
});

app.listen(PORT, HOST, () => {
  displayMessage(`Server listening to http://${HOST}:${PORT}`);
});

module.exports = app;
