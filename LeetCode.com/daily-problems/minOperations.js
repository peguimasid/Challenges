/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  const frequency = nums.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1);
    return map;
  }, new Map());

  let result = 0;

  for (const freq of frequency.values()) {
    if (freq === 1) return -1;
    result += Math.floor(freq / 3) + Math.ceil((freq % 3) / 2);
  }

  return result;
}

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4])); // 4
console.log(minOperations([2, 1, 2, 2, 3, 3])); // -1
console.log(
  minOperations([
    14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
  ])
); // 7

console.log(
  minOperations([19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19])
); // 5
