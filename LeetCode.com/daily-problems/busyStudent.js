/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {
  let result = 0;

  for (let i = 0; i < startTime.length; i++) {
    const start = startTime[i];
    const end = endTime[i];
    if (queryTime >= start && queryTime <= end) result++;
  }

  return result;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
console.log(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5
  )
);
