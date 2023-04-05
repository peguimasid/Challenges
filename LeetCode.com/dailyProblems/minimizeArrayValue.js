/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = (nums) => {
  let result = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result = Math.max(result, Math.ceil(total / (i + 1)));
  }

  return result;
};

console.log(minimizeArrayValue([3, 7, 1, 6]));
