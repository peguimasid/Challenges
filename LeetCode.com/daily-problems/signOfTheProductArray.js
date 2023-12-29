/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
  if (nums.includes(0)) return 0;
  return Math.sign(nums.reduce((acc, curr) => acc * curr, 1));
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
