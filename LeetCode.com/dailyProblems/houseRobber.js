/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  return nums.reduce(
    (acc, curr) => [acc[1], Math.max(acc[0] + curr, acc[1])],
    [0, 0]
  )[1];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
