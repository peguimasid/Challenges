/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
  const xor = nums.reduce((acc, curr) => acc ^ curr, 0) ^ k;

  return xor.toString(2).split('0').join('').length;
}

console.log(minOperations([2, 1, 3, 4], 1)); // 2
console.log(minOperations([2, 0, 2, 0], 0)); // 0
