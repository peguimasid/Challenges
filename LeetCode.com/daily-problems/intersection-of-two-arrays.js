/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...new Set([...set1].filter((num) => set2.has(num)))];
}

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([2, 4, 9, 6], [4, 4, 7, 9])); // [4, 9] || [9, 4]
