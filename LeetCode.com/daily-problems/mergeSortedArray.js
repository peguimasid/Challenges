/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, m + n, ...nums2);
  nums1.sort((a, b) => a - b);
};

let nums = [1, 2, 3, 0, 0, 0];
merge(nums, 3, [2, 5, 6], 3);

console.log(nums);
