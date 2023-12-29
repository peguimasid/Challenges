/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
  let sum = 0;
  let prefix = 0;
  const hash = new Set();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k != 0) sum %= k;
    if (hash.has(sum)) return true;
    hash.add(prefix);
    prefix = sum;
  }

  return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
// console.log(checkSubarraySum([5, 0, 0, 0], 3));
// console.log(checkSubarraySum([0, 0], 1));
