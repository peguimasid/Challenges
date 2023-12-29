/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  let n = nums.length;
  let a = nums.reduce((acc, curr) => acc + curr);
  let b = [...new Set(nums)].reduce((acc, curr) => acc + curr);

  let s = (n * (n + 1)) / 2;
  return [a - b, s - b];
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([3, 2, 2]));
console.log(findErrorNums([3, 2, 3, 4, 6, 5]));
