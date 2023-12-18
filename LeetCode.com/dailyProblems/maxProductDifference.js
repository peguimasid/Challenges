/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  return nums[len - 1] * nums[len - 2] - nums[0] * nums[1];
}

console.log(maxProductDifference([5, 6, 2, 7, 4])); // (6 * 7) - (2 * 4) = 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // (9 * 8) - (2 * 4) = 64
