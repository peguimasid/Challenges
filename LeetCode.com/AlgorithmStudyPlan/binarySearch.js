/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let middle = Math.floor((startIndex + endIndex) / 2);

  while (startIndex <= endIndex) {
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) startIndex = middle + 1;
    if (nums[middle] > target) endIndex = middle - 1;
    middle = Math.floor((startIndex + endIndex) / 2);
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));
