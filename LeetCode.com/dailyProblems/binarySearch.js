/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const helper = (start, end) => {
    if (start > end) return -1;
    const middle = Math.floor((end + start) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) return helper(middle + 1, end);
    if (nums[middle] > target) return helper(start, middle - 1);
  };

  return helper(0, nums.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
