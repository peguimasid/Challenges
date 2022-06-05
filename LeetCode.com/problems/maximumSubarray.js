/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let result = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(sum, result);
    if (sum < 0) sum = 0;
  }

  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2]));
