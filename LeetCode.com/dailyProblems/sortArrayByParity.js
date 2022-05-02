/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
  return nums.sort((a, b) => (a % 2) - (b % 2));
};

console.log(sortArrayByParity([3, 1, 2, 4]));
