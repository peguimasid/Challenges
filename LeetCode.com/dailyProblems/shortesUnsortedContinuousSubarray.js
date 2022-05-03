/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
  let left;
  let right;
  let largest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    largest = Math.max(largest, currentNumber);

    if (currentNumber < largest) {
      if (left === undefined) left = i - 1;

      while (left >= 0 && currentNumber < nums[left]) left--;

      right = i;
    }
  }

  if (left === undefined && right === undefined) return 0;

  return right - left;
};

// console.log(findUnsortedSubarray([1, 2, 3, 4]));
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSubarray([1]));
