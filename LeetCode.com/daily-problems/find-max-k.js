/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
  const set = new Set();

  let result = -1;

  for (const num of nums) {
    if (set.has(-num)) {
      result = Math.max(result, Math.abs(num));
    }
    set.add(num);
  }

  return result;
}

console.log(findMaxK([-1, 2, -3, 3])); // 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])); // -1
