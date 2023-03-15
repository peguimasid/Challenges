/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = (nums) => {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Number(Object.entries(frequency).find(([_key, val]) => val > 1)[0]);
};

console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
