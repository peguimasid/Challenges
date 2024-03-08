/**
 * @param {number[]} nums
 * @return {number}
 */
function maxFrequencyElements(nums) {
  const frequencies = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const maxFreq = Math.max(...Object.values(frequencies));

  let result = 0;

  for (const key in frequencies) {
    if (frequencies[key] === maxFreq) result += frequencies[key];
  }

  return result;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // 4
console.log(maxFrequencyElements([1, 2, 3, 4, 5])); // 5
