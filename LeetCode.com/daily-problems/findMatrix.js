/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findMatrix(nums) {
  const frequency = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const maxFrequency = Math.max(...Object.values(frequency));

  const entries = Object.entries(frequency);

  const result = new Array(maxFrequency).fill().map(() => []);

  for (const [number, frequency] of entries) {
    for (let i = 0; i < frequency; i++) {
      result[i].push(Number(number));
    }
  }

  return result;
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1])); // [[1,3,4,2],[1,3],[1]]
console.log(findMatrix([1, 2, 3, 4])); // [[4,3,2,1]]
