/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 4, 4, 5, 5]));
