/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  return nums
    .toSorted((a, b) => Math.abs(a) - Math.abs(b))
    .map((num) => num ** 2);
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
