/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);

  let result = 0;
  let closestDiff = Infinity;

  for (let i = 0; i <= nums.length - 1; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      let currentDiff = Math.abs(sum - target);
      if (currentDiff < closestDiff) {
        closestDiff = currentDiff;
        result = sum;
      }
      if (sum === target) return target;
      if (sum > target) k--;
      if (sum <= target) j++;
    }
  }

  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
