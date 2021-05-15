function findMultipleOfFiveInt(int) {
  for (let i = int; i < int + 15; i++) {
    if (i % 5 === 0) return i;
  }
}

function gradingStudents(grades) {
  return grades.map((grade) =>
    grade >= 38 && findMultipleOfFiveInt(grade) - grade < 3
      ? findMultipleOfFiveInt(grade)
      : grade
  );
}

console.log(gradingStudents([73, 67, 38, 33]));
