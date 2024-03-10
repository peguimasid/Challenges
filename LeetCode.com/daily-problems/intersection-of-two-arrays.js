/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function intersection(nums1, nums2) {
  const result = new Set();

  const s2 = new Set(nums2);

  for (const num of nums1) {
    if (s2.has(num) && !result.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([2, 4, 9, 6], [4, 4, 7, 9])); // [4, 9] || [9, 4]
