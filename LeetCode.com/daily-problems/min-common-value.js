/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
  const set = new Set(nums2);

  for (const number of nums1) {
    if (set.has(number)) return number;
  }

  return -1;
}

console.log(getCommon([1, 2, 3], [2, 4])); // 2
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2
