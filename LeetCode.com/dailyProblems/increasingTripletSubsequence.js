/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  let small = nums[0];
  let mid = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > small && nums[i] < mid) mid = nums[i];
    if (nums[i] < small) small = nums[i];
    if (nums[i] > mid) return true;
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
