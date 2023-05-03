/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
  const n1 = [...new Set(nums1.filter((num) => !nums2.includes(num)))];
  const n2 = [...new Set(nums2.filter((num) => !nums1.includes(num)))];

  return [n1, n2];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
