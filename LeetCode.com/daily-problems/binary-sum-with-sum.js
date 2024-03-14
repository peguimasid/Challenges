/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
function numSubarraysWithSum(nums, goal) {
  const count = new Map([[0, 1]]);

  let sum = 0;
  let result = 0;

  for (const num of nums) {
    sum += num;
    if (count.has(sum - goal)) {
      result += count.get(sum - goal);
    }
    count.set(sum, (count.get(sum) || 0) + 1);
  }

  return result;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // 15
