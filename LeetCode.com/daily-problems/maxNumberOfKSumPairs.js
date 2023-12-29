/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
  let result = 0;

  let map = new Map();

  for (const num of nums) {
    console.log(map);
    if (map.has(num)) {
      map.set(num, map.get(num) - 1);
      map.get(num) === 0 && map.delete(num);
      result++;
    } else {
      map.set(k - num, map.get(k - num) + 1 || 1);
    }
  }

  return result;
};

console.log(maxOperations([3, 1, 3, 4, 3], 6));
