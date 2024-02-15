/**
 * @param {number[]} nums
 * @return {number}
 */
function largestPerimeter(nums) {
  nums.sort((a, b) => a - b);

  let sum = 0;
  let result = -1;

  for (const num of nums) {
    if (num < sum) {
      result = num + sum;
    }
    sum += num;
  }

  return result;
}

console.log(largestPerimeter([5, 5, 5])); // 15
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3])); // 12
console.log(largestPerimeter([5, 5, 50])); // -1
