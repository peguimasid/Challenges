/**
 * @param {number[]} nums
 * @return {number}
 */
function minIncrementForUnique(nums) {
  nums.sort((a, b) => a - b);

  let moves = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      [moves, nums[i]] = [moves + nums[i - 1] + 1 - nums[i], nums[i - 1] + 1];
    }
  }

  return moves;
}

console.log(minIncrementForUnique([1, 2, 2])); // 1
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])); // 6
