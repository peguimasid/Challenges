/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  let x = 0;
  let y = n;

  const result = [];

  while (x < n && y < n * 2) {
    result.push(nums[x++]);
    result.push(nums[y++]);
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1,4,2,3,3,2,4,1]
