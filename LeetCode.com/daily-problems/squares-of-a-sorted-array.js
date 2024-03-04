/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  const N = nums.length;
  const result = new Array(N).fill(0);

  let start = 0;
  let end = N - 1;

  for (let i = N - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) >= Math.abs(nums[end])) {
      result[i] = nums[start] * nums[start];
      start++;
    } else {
      result[i] = nums[end] * nums[end];
      end--;
    }
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
