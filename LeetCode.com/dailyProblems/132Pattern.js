/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = (nums) => {
  let min = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > min && nums[i] > nums[j]) return true;
      min = Math.min(min, nums[i]);
    }
  }
  return false;
};

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
