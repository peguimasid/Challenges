/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = (nums) => {
  let stack = [];
  let thirdElement = Number.NEGATIVE_INFINITY;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < thirdElement) return true;
    while (stack.length && stack[stack.length - 1] < nums[i])
      thirdElement = stack.pop();
    stack.push(nums[i]);
  }

  return false;
};

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
