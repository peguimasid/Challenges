/**
 * @param {number[]} arrayOne
 * @param {number[]} arrayTwo
 * @return {number[]}
 */
const merge = (arrayOne, arrayTwo) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] <= arrayTwo[j]) result.push(arrayOne[i++]);
    if (arrayTwo[j] < arrayOne[i]) result.push(arrayTwo[j++]);
  }

  while (i < arrayOne.length) result.push(arrayOne[i++]);
  while (j < arrayTwo.length) result.push(arrayTwo[j++]);

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const merged = merge(nums1, nums2);

  const middle = Math.floor(merged.length / 2);

  return merged.length % 2 === 0
    ? (merged[middle - 1] + merged[middle]) / 2
    : merged[middle];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
