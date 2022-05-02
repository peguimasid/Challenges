/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
  const odd = [];
  const even = [];

  let i = 0;
  while (i < nums.length) {
    nums[i] % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
    i++;
  }

  return [...even, ...odd];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
