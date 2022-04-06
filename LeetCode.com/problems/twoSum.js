/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const memo = {};

  for (const [i, num] of nums.entries()) {
    let needed = target - num;

    if (needed in memo) {
      return [memo[needed], i];
    } else {
      memo[num] = i;
    }
  }

  return [];
};

console.log(twoSum([10, 6, 5, 3, 8, 4, 2, 1], 6));
