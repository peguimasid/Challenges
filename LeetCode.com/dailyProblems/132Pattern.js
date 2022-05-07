/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = (nums) => {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[k] && nums[k] < nums[j]) return true;
      }
    }
  }
  return false;
};

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
