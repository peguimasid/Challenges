/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }

  return -1;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 3])); // 3
