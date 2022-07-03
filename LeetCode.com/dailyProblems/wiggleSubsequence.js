/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = (nums) => {
  let increment = 1;
  let decrement = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) increment = decrement + 1;
    if (nums[i] < nums[i - 1]) decrement = increment + 1;
  }

  return Math.max(increment, decrement);
};

// console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
// console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));
