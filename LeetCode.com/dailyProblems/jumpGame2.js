/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let result = 0;
  let curr = -1;
  let next = 0;

  for (let i = 0; next < nums.length - 1; i++) {
    if (i > curr) {
      result++;
      curr = next;
    }
    next = Math.max(next, nums[i] + i);
  }

  return result;
};

// console.log(jump([1, 2, 3]));
// console.log(jump([2, 3, 1, 1, 4, 3, 1, 2]));
// console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([2, 3, 0, 1, 4]));
// console.log(jump([0]));

// if you are in nums[i] you can jump in any in front of him (nums[i + j])
// but has to be:
// (j <= nums[i]) and (i + j < nums.length);
