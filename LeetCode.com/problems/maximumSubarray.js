/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let result = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      result = Math.max(
        result,
        nums.slice(i, j).reduce((acc, curr) => acc + curr)
      );
    }
  }

  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2]));
