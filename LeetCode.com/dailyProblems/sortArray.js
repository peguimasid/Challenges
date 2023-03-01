// Solution must be: O(n^log(n))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const quickSort = (nums, start, end) => {
  if (start >= end) return;
  let left = start;
  let right = end;
  let pivot = nums[Math.floor((start + end) / 2)];
  while (left <= right) {
    while (left <= right && nums[left] < pivot) left++;
    while (left <= right && nums[right] > pivot) right--;
    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  quickSort(nums, start, right);
  quickSort(nums, left, end);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  if (nums.length <= 1) return nums;
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

console.log(sortArray([5, 3, 1, 2]));
