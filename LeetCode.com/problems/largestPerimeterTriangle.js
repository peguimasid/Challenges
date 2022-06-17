const isValidTriangle = (a, b, c) => {
  return !(a + b <= c || a + c <= b || b + c <= a);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = (nums) => {
  nums.sort((a, b) => a - b).reverse();
  let result = 0;

  for (let i = 2; i < nums.length; i++) {
    if (isValidTriangle(nums[i - 2], nums[i - 1], nums[i])) {
      result = nums[i - 2] + nums[i - 1] + nums[i];
      i = nums.length;
    }
  }

  return result;
};

console.log(largestPerimeter([3, 2, 3, 4]));
