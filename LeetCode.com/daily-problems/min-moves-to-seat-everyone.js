/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students) {
  seats.sort((a, b) => b - a);
  students.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < seats.length; i++) {
    result += Math.abs(seats[i] - students[i]);
  }

  return result;
}

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
// console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
