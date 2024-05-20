// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
function subsetXORSum(nums) {
  const bit = nums.reduce((acc, curr) => acc | curr, 0);

  return bit * Math.pow(2, nums.length - 1);
}

console.log(subsetXORSum([1, 3])); // 6
console.log(subsetXORSum([5, 1, 6])); // 28
