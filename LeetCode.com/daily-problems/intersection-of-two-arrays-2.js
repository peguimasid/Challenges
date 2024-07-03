/**
 * @param {number[]} arr
 * @return {Record<string, number>}
 */
function getFrequency(arr) {
  const result = {};

  for (const value of arr) {
    result[value] = (result[value] || 0) + 1;
  }

  return result;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const n1Frequency = getFrequency(nums1);
  const n2Frequency = getFrequency(nums2);

  const result = [];

  for (const key in n1Frequency) {
    if (!n2Frequency[key]) continue;

    for (let i = 0; i < Math.min(n1Frequency[key], n2Frequency[key]); i++) {
      result.push(Number(key));
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
