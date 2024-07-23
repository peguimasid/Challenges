/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const sortedByFrequency = Object.entries(frequency)
    .map(([value, frequency]) => ({ value, frequency }))
    .toSorted((a, b) =>
      a.frequency === b.frequency
        ? b.value - a.value
        : a.frequency - b.frequency
    );

  const result = [];

  for (const { value, frequency } of sortedByFrequency) {
    for (let i = 0; i < frequency; i++) {
      result.push(Number(value));
    }
  }

  return result;
}

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-1,4,4,-6,-6,1,1,1]
