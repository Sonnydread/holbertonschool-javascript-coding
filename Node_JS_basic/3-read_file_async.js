const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line !== '');
        const students = lines.map(line => line.split(',')).filter(student => student.length === 4);
        const csStudents = students.filter(student => student[3] === 'CS').map(student => student[0]);
        const sweStudents = students.filter(student => student[3] === 'SWE').map(student => student[0]);

        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

        resolve();
      }
    });
  });
};

module.exports = countStudents;