/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
rotate(arr, 3);
console.log(arr); // [5,6,7,1,2,3,4]
