/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isMonotonic(nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) isDecreasing = false;
    if (nums[i - 1] > nums[i]) isIncreasing = false;
  }

  return isIncreasing || isDecreasing;
}

console.log(isMonotonic([1, 2, 2, 3])); // true

console.log(isMonotonic([6, 5, 4, 4])); // true

console.log(isMonotonic([1, 3, 2])); // false
