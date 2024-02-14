/**
 * @param {number[]} nums
 * @return {number[]}
 */
function rearrangeArray(nums) {
  const positive = nums.filter((num) => num >= 0);
  const negative = nums.filter((num) => num < 0);

  const result = [];

  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i], negative[i]);
  }

  return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
console.log(rearrangeArray([-1, 1])); // [1, -1]
