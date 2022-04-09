/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  return [...new Set(nums)]
    .sort((a, b) => frequency[b] - frequency[a])
    .filter((item, index) => index < k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
