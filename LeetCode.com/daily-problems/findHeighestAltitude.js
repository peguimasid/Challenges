/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
  const result = [0];

  for (const altitude of gain) {
    result.push(result[result.length - 1] - altitude * -1);
  }

  return Math.max(...result);
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
