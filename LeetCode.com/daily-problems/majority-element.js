/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let result = 0;
  let max = 0;

  for (const key in frequency) {
    if (frequency[key] > max) {
      max = frequency[key];
      result = key;
    }
  }

  return result;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
