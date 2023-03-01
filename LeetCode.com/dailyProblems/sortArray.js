// Solution must be: O(n^log(n))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const quickSort = (nums) => {
  if (nums.length <= 1) return nums;

  const pivot = nums[0];

  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) left.push(nums[i]);
    if (nums[i] > pivot) right.push(nums[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  return quickSort(nums);
};

console.log(sortArray([5, 3, 1, 2]));
