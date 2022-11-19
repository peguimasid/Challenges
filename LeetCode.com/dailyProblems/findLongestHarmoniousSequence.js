/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  const map = nums.reduce((acc, curr) => {
    if (!acc.has(curr)) return acc.set(curr, 1);
    return acc.set(curr, acc.get(curr) + 1);
  }, new Map());

  return [...map.keys()].reduce((acc, key) => {
    if (map.has(key - 1)) acc = Math.max(acc, map.get(key) + map.get(key - 1));
    return acc;
  }, 0);
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
console.log(findLHS([1, 2, 2, 1]));
