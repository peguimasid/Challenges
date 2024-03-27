/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (product >= k) break;
      count++;
    }
  }

  return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
// console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // 0
