/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const values = Object.values(frequency);

  if (values.some((val) => val === 1)) {
    return -1;
  }

  let result = 0;

  for (const value of values) {
    result += Math.floor(value / 3) + Math.ceil((value % 3) / 2);
  }

  return result;
}

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4])); // 4
console.log(minOperations([2, 1, 2, 2, 3, 3])); // -1
console.log(
  minOperations([
    14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
  ])
); // 7

console.log(
  minOperations([19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19])
); // 5
