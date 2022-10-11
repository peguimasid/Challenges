/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] > 0 && nums[k] - nums[j] > 0) return true;
      }
    }
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
