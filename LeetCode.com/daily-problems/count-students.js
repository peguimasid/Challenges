/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  let runs = 0;

  while (students.length) {
    if (runs === students.length) break;

    runs++;

    const topStudent = students.shift();
    const topSandwich = sandwiches[0];
    if (topSandwich === topStudent) {
      sandwiches.shift();
      runs = 0;
    } else {
      students.push(topStudent);
    }
  }

  return students.length;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
